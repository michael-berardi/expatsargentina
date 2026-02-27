"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Icon, FeatureIcon } from "@/components/ui/icon";

// Quiz Types
type QuizAnswer = {
  purpose?: string;
  incomeSource?: string;
  duration?: string;
  family?: string;
  incomeAmount?: string;
};

type VisaRecommendation = {
  visa: string;
  confidence: number;
  reasons: string[];
  whyNotOthers: { visa: string; reason: string }[];
};

// Quiz Component
function VisaFinderQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswer>({});
  const [result, setResult] = useState<VisaRecommendation | null>(null);

  const questions = [
    {
      id: "purpose",
      question: "What's your primary reason for moving to Argentina?",
      options: [
        { value: "work-remote", label: "Work remotely for a foreign company", icon: "wifi" },
        { value: "work-local", label: "Work for an Argentine company", icon: "briefcase" },
        { value: "retire", label: "Retire or live on passive income", icon: "coffee" },
        { value: "study", label: "Study at university or language school", icon: "graduation-cap" },
        { value: "invest", label: "Start a business or invest", icon: "trending-up" },
      ],
    },
    {
      id: "incomeSource",
      question: "What's your source of income?",
      options: [
        { value: "remote-job", label: "Remote job with foreign company", icon: "globe" },
        { value: "freelance", label: "Freelance/self-employed", icon: "zap" },
        { value: "pension", label: "Pension or retirement income", icon: "piggy-bank" },
        { value: "savings", label: "Savings/investments", icon: "wallet" },
        { value: "local-job", label: "Job offer in Argentina", icon: "building" },
        { value: "business", label: "Business ownership", icon: "trending-up" },
        { value: "family", label: "Supported by family", icon: "users" },
        { value: "none", label: "No current income", icon: "alert-circle" },
      ],
    },
    {
      id: "incomeAmount",
      question: "What's your monthly income (in USD)?",
      options: [
        { value: "under-1000", label: "Under $1,000", icon: "dollar-sign" },
        { value: "1000-2000", label: "$1,000 - $2,000", icon: "dollar-sign" },
        { value: "2000-3000", label: "$2,000 - $3,000", icon: "dollar-sign" },
        { value: "3000-5000", label: "$3,000 - $5,000", icon: "dollar-sign" },
        { value: "over-5000", label: "Over $5,000", icon: "dollar-sign" },
      ],
    },
    {
      id: "duration",
      question: "How long do you plan to stay?",
      options: [
        { value: "under-6", label: "Less than 6 months", icon: "clock" },
        { value: "6-12", label: "6-12 months", icon: "calendar" },
        { value: "1-2", label: "1-2 years", icon: "calendar" },
        { value: "long-term", label: "Long-term/permanent", icon: "home" },
        { value: "unsure", label: "Not sure yet", icon: "help-circle" },
      ],
    },
    {
      id: "family",
      question: "Will you have family members with you?",
      options: [
        { value: "alone", label: "Just me", icon: "user" },
        { value: "partner", label: "Me + partner/spouse", icon: "users" },
        { value: "children", label: "Me + children", icon: "users" },
        { value: "family", label: "Me + partner + children", icon: "users" },
      ],
    },
  ];

  const calculateRecommendation = (finalAnswers: QuizAnswer): VisaRecommendation => {
    const scores: Record<string, number> = {
      "Digital Nomad": 0,
      "Work": 0,
      "Retirement": 0,
      "Student": 0,
      "Investment": 0,
    };

    // Purpose scoring
    if (finalAnswers.purpose === "work-remote") scores["Digital Nomad"] += 3;
    if (finalAnswers.purpose === "work-local") scores["Work"] += 3;
    if (finalAnswers.purpose === "retire") scores["Retirement"] += 3;
    if (finalAnswers.purpose === "study") scores["Student"] += 3;
    if (finalAnswers.purpose === "invest") scores["Investment"] += 3;

    // Income source scoring
    if (finalAnswers.incomeSource === "remote-job" || finalAnswers.incomeSource === "freelance") {
      scores["Digital Nomad"] += 2;
    }
    if (finalAnswers.incomeSource === "local-job") scores["Work"] += 2;
    if (finalAnswers.incomeSource === "pension") scores["Retirement"] += 2;
    if (finalAnswers.incomeSource === "business") scores["Investment"] += 1;

    // Income amount scoring
    if (finalAnswers.incomeAmount === "under-1000") {
      scores["Student"] += 1;
    }
    if (finalAnswers.incomeAmount === "over-5000") {
      scores["Investment"] += 1;
      scores["Retirement"] += 1;
    }

    // Duration scoring
    if (finalAnswers.duration === "under-6") {
      scores["Digital Nomad"] += 2;
    }
    if (finalAnswers.duration === "long-term") {
      scores["Work"] += 1;
      scores["Retirement"] += 1;
      scores["Investment"] += 1;
    }

    // Family scoring
    if (finalAnswers.family !== "alone") {
      scores["Work"] += 1;
      scores["Retirement"] += 1;
      scores["Investment"] += 1;
      scores["Digital Nomad"] -= 1; // Harder with family
    }

    const winner = Object.entries(scores).sort((a, b) => b[1] - a[1])[0];
    const reasons: Record<string, string[]> = {
      "Digital Nomad": [
        "You work remotely for foreign companies",
        "Your income comes from outside Argentina",
        "You want flexibility without employer sponsorship",
      ],
      "Work": [
        "You have or can get a local job offer",
        "You want a path to permanent residency",
        "You need to support family members",
      ],
      "Retirement": [
        "You have stable pension or passive income",
        "You want long-term stability",
        "You qualify for the income requirements",
      ],
      "Student": [
        "You want to study at an Argentine institution",
        "You can work part-time while studying",
        "This can lead to other visa options later",
      ],
      "Investment": [
        "You're starting a business or making significant investment",
        "You want maximum flexibility and residency options",
        "You have the capital for investment requirements",
      ],
    };

    const whyNotOthers: Record<string, { visa: string; reason: string }[]> = {
      "Digital Nomad": [
        { visa: "Work Visa", reason: "You don't have a local employer sponsor" },
        { visa: "Retirement Visa", reason: "You're still working age and not drawing pension" },
        { visa: "Investment Visa", reason: "You don't need to invest capital for your situation" },
      ],
      "Work": [
        { visa: "Digital Nomad", reason: "You need local employment or want residency path" },
        { visa: "Student", reason: "You need full-time work rights" },
      ],
      "Retirement": [
        { visa: "Work Visa", reason: "You don't need/want to work locally" },
        { visa: "Digital Nomad", reason: "You want permanent residency eligibility" },
      ],
      "Student": [
        { visa: "Work Visa", reason: "You don't have employer sponsorship yet" },
        { visa: "Digital Nomad", reason: "You want to study at an Argentine institution" },
      ],
      "Investment": [
        { visa: "Work Visa", reason: "You want to own your business, not work for others" },
        { visa: "Digital Nomad", reason: "You're investing locally, not working remotely" },
      ],
    };

    return {
      visa: winner[0],
      confidence: Math.min(95, 60 + winner[1] * 5),
      reasons: reasons[winner[0]],
      whyNotOthers: whyNotOthers[winner[0]],
    };
  };

  const handleAnswer = (value: string) => {
    const currentQuestion = questions[step];
    const newAnswers = { ...answers, [currentQuestion.id]: value };
    setAnswers(newAnswers);

    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setResult(calculateRecommendation(newAnswers));
    }
  };

  const resetQuiz = () => {
    setStep(0);
    setAnswers({});
    setResult(null);
  };

  const visaLinks: Record<string, string> = {
    "Digital Nomad": "#digital-nomad",
    "Work": "#work",
    "Retirement": "#retirement",
    "Student": "#student",
    "Investment": "#investment",
  };

  if (result) {
    return (
      <Card className="border-primary">
        <CardHeader>
          <div className="flex items-center gap-3">
            <FeatureIcon name="check-circle" variant="primary" size="xl" />
            <div>
              <CardTitle className="text-2xl">Your Best Match: {result.visa} Visa</CardTitle>
              <CardDescription>{result.confidence}% confidence match</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="font-semibold text-base mb-3">Why this fits you:</h3>
            <ul className="space-y-2">
              {result.reasons.map((reason, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Icon name="check-circle" size="sm" className="text-green-500 mt-0.5" />
                  <span>{reason}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-base mb-3">Why other options don&apos;t fit as well:</h3>
            <ul className="space-y-2">
              {result.whyNotOthers.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-muted-foreground">
                  <Icon name="x" size="sm" className="text-red-400 mt-0.5" />
                  <span><strong>{item.visa}:</strong> {item.reason}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Button asChild>
              <Link href={visaLinks[result.visa]}>
                View {result.visa} Visa Details
                <Icon name="arrow-right" size="sm" />
              </Link>
            </Button>
            <Button variant="outline" onClick={resetQuiz}>
              <Icon name="refresh" size="sm" />
              Start Over
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  const currentQ = questions[step];

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between mb-2">
          <Badge variant="secondary">Question {step + 1} of {questions.length}</Badge>
          <span className="text-base md:text-sm text-muted-foreground">{Math.round(((step) / questions.length) * 100)}% complete</span>
        </div>
        <div className="w-full bg-muted h-2 rounded-full overflow-hidden">
          <div 
            className="bg-primary h-full transition-all duration-300"
            style={{ width: `${((step) / questions.length) * 100}%` }}
          />
        </div>
        <CardTitle className="text-xl mt-4">{currentQ.question}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-3">
          {currentQ.options.map((option) => (
            <button
              key={option.value}
              onClick={() => handleAnswer(option.value)}
              className="flex items-center gap-4 p-4 rounded-lg border text-left hover:border-primary hover:bg-primary/5 transition-colors"
            >
              <FeatureIcon name={option.icon as any} variant="muted" />
              <span className="font-medium">{option.label}</span>
              <Icon name="arrow-right" size="sm" className="ml-auto text-muted-foreground" />
            </button>
          ))}
        </div>
        {step > 0 && (
          <Button variant="ghost" onClick={() => setStep(step - 1)} className="mt-4">
            ← Back
          </Button>
        )}
      </CardContent>
    </Card>
  );
}

// Cost Calculator Component
function CostCalculator() {
  const [visaType, setVisaType] = useState("digital-nomad");
  const [familyMembers, setFamilyMembers] = useState(0);
  const [needTranslation, setNeedTranslation] = useState(true);
  const [needApostille, setNeedApostille] = useState(true);
  const [needLawyer, setNeedLawyer] = useState(false);

  const baseCosts: Record<string, { fee: number; description: string }> = {
    "digital-nomad": { fee: 150, description: "Digital Nomad Visa" },
    "work": { fee: 300, description: "Work Visa" },
    "retirement": { fee: 250, description: "Retirement Visa" },
    "student": { fee: 200, description: "Student Visa" },
    "investment": { fee: 600, description: "Investment Visa" },
  };

  const calculateTotal = () => {
    const base = baseCosts[visaType].fee;
    const family = familyMembers * 150;
    const translation = needTranslation ? 200 : 0;
    const apostille = needApostille ? 150 : 0;
    const lawyer = needLawyer ? 800 : 0;
    const miscellaneous = 100; // Photos, copies, transport
    return base + family + translation + apostille + lawyer + miscellaneous;
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Icon name="calculator" size="md" />
          Visa Cost Estimator
        </CardTitle>
        <CardDescription>Calculate the total cost for your visa application</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-3">
          <label className="text-base md:text-sm font-medium">Visa Type</label>
          <select 
            value={visaType}
            onChange={(e) => setVisaType(e.target.value)}
            className="w-full p-2 rounded-md border"
          >
            <option value="digital-nomad">Digital Nomad Visa ($150)</option>
            <option value="work">Work Visa ($300)</option>
            <option value="retirement">Retirement Visa ($250)</option>
            <option value="student">Student Visa ($200)</option>
            <option value="investment">Investment Visa ($600)</option>
          </select>
        </div>

        <div className="space-y-3">
          <label className="text-base md:text-sm font-medium">Additional Family Members (excluding applicant)</label>
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="default"
              className="w-11 h-11"
              onClick={() => setFamilyMembers(Math.max(0, familyMembers - 1))}
            >
              -
            </Button>
            <span className="w-8 text-center font-medium">{familyMembers}</span>
            <Button
              variant="outline"
              size="default"
              className="w-11 h-11"
              onClick={() => setFamilyMembers(familyMembers + 1)}
            >
              +
            </Button>
            <span className="text-base md:text-sm text-muted-foreground">($150 each)</span>
          </div>
        </div>

        <div className="space-y-3">
          <label className="text-base md:text-sm font-medium">Additional Services</label>
          <div className="space-y-2">
            <label className="flex items-center gap-2 cursor-pointer">
              <input 
                type="checkbox" 
                checked={needTranslation}
                onChange={(e) => setNeedTranslation(e.target.checked)}
                className="rounded"
              />
              <span>Document Translation (~$200)</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input 
                type="checkbox" 
                checked={needApostille}
                onChange={(e) => setNeedApostille(e.target.checked)}
                className="rounded"
              />
              <span>Apostille/Legalization (~$150)</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input 
                type="checkbox" 
                checked={needLawyer}
                onChange={(e) => setNeedLawyer(e.target.checked)}
                className="rounded"
              />
              <span>Immigration Lawyer (~$800)</span>
            </label>
          </div>
        </div>

        <div className="border-t pt-4">
          <div className="flex justify-between items-center">
            <span className="text-lg font-semibold">Estimated Total:</span>
            <span className="text-2xl font-bold text-primary">${calculateTotal()}</span>
          </div>
          <p className="text-base md:text-sm text-muted-foreground mt-2">
            *Includes government fees, estimated service costs, and miscellaneous expenses.
            Actual costs may vary.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

// Timeline Calculator
function TimelineCalculator() {
  const [visaType, setVisaType] = useState("digital-nomad");
  const [documentStatus, setDocumentStatus] = useState("none");
  const [applicationMethod, setApplicationMethod] = useState("online");

  const calculateTimeline = () => {
    const baseWeeks: Record<string, number> = {
      "digital-nomad": 6,
      "work": 10,
      "retirement": 8,
      "student": 4,
      "investment": 12,
    };

    let weeks = baseWeeks[visaType];

    // Document preparation time
    const docWeeks: Record<string, number> = {
      "none": 4,
      "partial": 2,
      "ready": 0,
    };
    weeks += docWeeks[documentStatus];

    // Method adjustment
    if (applicationMethod === "in-person") weeks += 2;

    return { min: weeks, max: weeks + 4 };
  };

  const timeline = calculateTimeline();

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Icon name="calendar" size="md" />
          Processing Time Calculator
        </CardTitle>
        <CardDescription>Get a realistic timeline for your visa application</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-3">
          <label className="text-base md:text-sm font-medium">Visa Type</label>
          <select 
            value={visaType}
            onChange={(e) => setVisaType(e.target.value)}
            className="w-full p-2 rounded-md border"
          >
            <option value="digital-nomad">Digital Nomad (6-10 weeks)</option>
            <option value="work">Work Visa (10-16 weeks)</option>
            <option value="retirement">Retirement Visa (8-14 weeks)</option>
            <option value="student">Student Visa (4-8 weeks)</option>
            <option value="investment">Investment Visa (12-20 weeks)</option>
          </select>
        </div>

        <div className="space-y-3">
          <label className="text-base md:text-sm font-medium">Document Preparation Status</label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {[
              { value: "none", label: "Starting from scratch", weeks: "+4 weeks" },
              { value: "partial", label: "Some documents ready", weeks: "+2 weeks" },
              { value: "ready", label: "All documents ready", weeks: "No delay" },
            ].map((opt) => (
              <button
                key={opt.value}
                onClick={() => setDocumentStatus(opt.value)}
                className={`p-3 rounded-lg border text-base md:text-sm text-center transition-colors ${
                  documentStatus === opt.value
                    ? "border-primary bg-primary/10"
                    : "hover:border-primary/50"
                }`}
              >
                <div className="font-medium">{opt.label}</div>
                <div className="text-sm text-muted-foreground">{opt.weeks}</div>
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <label className="text-base md:text-sm font-medium">Application Method</label>
          <div className="grid grid-cols-2 gap-2">
            {[
              { value: "online", label: "Online (RADEX)", note: "Faster" },
              { value: "in-person", label: "In-Person", note: "+2 weeks" },
            ].map((opt) => (
              <button
                key={opt.value}
                onClick={() => setApplicationMethod(opt.value)}
                className={`p-3 rounded-lg border text-base md:text-sm text-center transition-colors ${
                  applicationMethod === opt.value
                    ? "border-primary bg-primary/10"
                    : "hover:border-primary/50"
                }`}
              >
                <div className="font-medium">{opt.label}</div>
                <div className="text-sm text-muted-foreground">{opt.note}</div>
              </button>
            ))}
          </div>
        </div>

        <div className="border-t pt-4">
          <div className="text-center">
            <div className="text-base md:text-sm text-muted-foreground mb-1">Estimated Timeline</div>
            <div className="text-3xl font-bold text-primary">{timeline.min}-{timeline.max} weeks</div>
            <p className="text-base md:text-sm text-muted-foreground mt-2">
              From today to visa approval. Add 2-4 weeks for DNI processing after arrival.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

// Document Checklist Generator
function DocumentChecklist() {
  const [visaType, setVisaType] = useState("digital-nomad");
  const [family, setFamily] = useState(false);
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  const documents: Record<string, Array<{ id: string; label: string; required: boolean; note?: string }>> = {
    "digital-nomad": [
      { id: "passport", label: "Valid passport (6+ months)", required: true },
      { id: "photos", label: "Passport photos (4x4cm)", required: true, note: "White background, no glasses" },
      { id: "income", label: "Proof of remote income", required: true, note: "Bank statements, contracts" },
      { id: "insurance", label: "Health insurance", required: true, note: "Valid in Argentina" },
      { id: "address", label: "Proof of accommodation", required: true },
      { id: "criminal", label: "Criminal background check", required: true, note: "Apostilled within 90 days" },
      { id: "cv", label: "CV/Resume", required: false },
    ],
    "work": [
      { id: "passport", label: "Valid passport (6+ months)", required: true },
      { id: "photos", label: "Passport photos (4x4cm)", required: true },
      { id: "contract", label: "Work contract", required: true, note: "Signed by employer" },
      { id: "company", label: "Company registration docs", required: true },
      { id: "insurance", label: "Health insurance", required: true },
      { id: "criminal", label: "Criminal background check", required: true, note: "Apostilled" },
      { id: "cv", label: "CV/Resume", required: true },
      { id: "degrees", label: "Professional degrees", required: false, note: "Apostilled if applicable" },
    ],
    "retirement": [
      { id: "passport", label: "Valid passport (6+ months)", required: true },
      { id: "photos", label: "Passport photos (4x4cm)", required: true },
      { id: "pension", label: "Pension/income proof", required: true, note: "Minimum ~$1,000/month" },
      { id: "insurance", label: "Health insurance", required: true },
      { id: "address", label: "Proof of accommodation", required: true },
      { id: "criminal", label: "Criminal background check", required: true, note: "Apostilled" },
      { id: "birth", label: "Birth certificate", required: false, note: "If bringing family" },
    ],
    "student": [
      { id: "passport", label: "Valid passport (6+ months)", required: true },
      { id: "photos", label: "Passport photos (4x4cm)", required: true },
      { id: "enrollment", label: "School enrollment letter", required: true },
      { id: "grades", label: "Academic records", required: true },
      { id: "funds", label: "Proof of funds", required: true, note: "Or scholarship letter" },
      { id: "insurance", label: "Health insurance", required: true },
      { id: "address", label: "Proof of accommodation", required: true },
      { id: "criminal", label: "Criminal background check", required: true },
    ],
    "investment": [
      { id: "passport", label: "Valid passport (6+ months)", required: true },
      { id: "photos", label: "Passport photos (4x4cm)", required: true },
      { id: "investment", label: "Investment proof", required: true, note: "Property deed or business docs" },
      { id: "funds", label: "Source of funds", required: true, note: "Bank statements, tax returns" },
      { id: "business", label: "Business plan", required: true },
      { id: "insurance", label: "Health insurance", required: true },
      { id: "criminal", label: "Criminal background check", required: true, note: "Apostilled" },
      { id: "cv", label: "CV/Resume", required: true },
    ],
  };

  const familyDocs = [
    { id: "marriage", label: "Marriage certificate", required: true, note: "Apostilled and translated" },
    { id: "birth", label: "Children's birth certificates", required: true, note: "Apostilled" },
    { id: "spouse-passport", label: "Spouse passport", required: true },
    { id: "spouse-photos", label: "Spouse passport photos", required: true },
  ];

  const currentDocs = [...documents[visaType]];
  if (family) currentDocs.push(...familyDocs);

  const progress = Math.round(
    (Object.values(checked).filter(Boolean).length / currentDocs.length) * 100
  );

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Icon name="file-text" size="md" />
          Document Checklist Generator
        </CardTitle>
        <CardDescription>Track your document preparation progress</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-3">
          <label className="text-base md:text-sm font-medium">Visa Type</label>
          <select 
            value={visaType}
            onChange={(e) => {
              setVisaType(e.target.value);
              setChecked({});
            }}
            className="w-full p-2 rounded-md border"
          >
            <option value="digital-nomad">Digital Nomad</option>
            <option value="work">Work Visa</option>
            <option value="retirement">Retirement</option>
            <option value="student">Student</option>
            <option value="investment">Investment</option>
          </select>
        </div>

        <label className="flex items-center gap-2 cursor-pointer">
          <input 
            type="checkbox" 
            checked={family}
            onChange={(e) => {
              setFamily(e.target.checked);
              setChecked({});
            }}
            className="rounded"
          />
          <span>Include family members</span>
        </label>

        <div className="space-y-2">
          <div className="flex justify-between text-base md:text-sm">
            <span>Progress</span>
            <span className="font-medium">{progress}%</span>
          </div>
          <div className="w-full bg-muted h-2 rounded-full overflow-hidden">
            <div 
              className="bg-primary h-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="space-y-3 max-h-96 overflow-y-auto">
          {currentDocs.map((doc) => (
            <label 
              key={doc.id} 
              className={`flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-colors ${
                checked[doc.id] ? "bg-green-50 border-green-200" : "hover:bg-muted/50"
              }`}
            >
              <input 
                type="checkbox"
                checked={checked[doc.id] || false}
                onChange={(e) => setChecked({ ...checked, [doc.id]: e.target.checked })}
                className="mt-1 rounded"
              />
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-medium">{doc.label}</span>
                  {doc.required && (
                    <Badge variant="secondary" className="text-xs">Required</Badge>
                  )}
                </div>
                {doc.note && (
                  <p className="text-base md:text-sm text-muted-foreground">{doc.note}</p>
                )}
              </div>
            </label>
          ))}
        </div>

        {progress === 100 && (
          <div className="bg-green-100 text-green-800 p-4 rounded-lg text-center">
            <Icon name="check-circle" size="md" className="mx-auto mb-2" />
            <p className="font-medium">All documents ready!</p>
            <p className="text-sm">You&apos;re ready to submit your application.</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

// Visa Data
const visaData = {
  "digital-nomad": {
    name: "Digital Nomad Visa",
    duration: "180 days (6 months)",
    cost: "$100-150",
    processing: "6-10 weeks",
    workAllowed: "Remote work for foreign companies only",
    residencyPath: "No direct path",
    renewable: "No - must reapply",
    family: "Possible but complicated",
    whoFor: [
      { profile: "Software developers working remotely", fit: "perfect" },
      { profile: "Freelance designers/writers", fit: "perfect" },
      { profile: "Digital marketers", fit: "good" },
      { profile: "Online teachers", fit: "good" },
      { profile: "People wanting to work for Argentine companies", fit: "not-suitable" },
    ],
    requirements: [
      "Valid passport with 6+ months validity",
      "Proof of remote work (employment contract or client agreements)",
      "Minimum income proof (~$2,500/month recommended)",
      "Health insurance valid in Argentina",
      "Criminal background check (apostilled)",
      "Proof of accommodation in Argentina",
    ],
    steps: [
      { step: 1, title: "Gather documents", time: "2-4 weeks", details: "Get background check, translate documents, secure accommodation proof" },
      { step: 2, title: "Create RADEX account", time: "Same day", details: "Register on the Migraciones online system" },
      { step: 3, title: "Submit application", time: "1-2 hours", details: "Upload all documents and pay fee online" },
      { step: 4, title: "Wait for review", time: "4-8 weeks", details: "Migraciones reviews your application" },
      { step: 5, title: "Receive approval", time: "1 week", details: "Download your visa approval letter" },
      { step: 6, title: "Enter Argentina", time: "Within 90 days", details: "You have 90 days to enter after approval" },
    ],
    rejections: [
      { reason: "Insufficient income proof", solution: "Provide 6 months of bank statements showing consistent income" },
      { reason: "Background check issues", solution: "Ensure your background check is apostilled and less than 90 days old" },
      { reason: "Incomplete documentation", solution: "Double-check all required documents before submitting" },
      { reason: "Previous visa overstays", solution: "If you overstayed before, consult a lawyer first" },
    ],
    costs: {
      official: [
        { item: "Visa application fee", cost: "$100-150" },
        { item: "Entry fee (reciprocity)", cost: "$0-160 (varies by nationality)" },
      ],
      hidden: [
        { item: "Document apostille", cost: "$50-150" },
        { item: "Certified translations", cost: "$100-300" },
        { item: "Health insurance", cost: "$50-200/month" },
        { item: "Photos and copies", cost: "$20-50" },
        { item: "Transport to Migraciones", cost: "$10-30" },
      ],
    },
    stories: [
      { name: "Marcus, 34, Developer", story: "Got approved in 7 weeks. Key was having 6 months of consistent freelance income documented. The background check took longest - start that first.", tip: "Use the RADEX system, not in-person. Much faster." },
      { name: "Sofia, 29, Designer", story: "Rejected first time due to 'insufficient ties to home country.' Added a letter from my landlord and utility bills, then approved in 5 weeks.", tip: "Show you have a life to return to - leases, subscriptions, etc." },
    ],
  },
  "work": {
    name: "Work Visa",
    duration: "1-3 years",
    cost: "$200-400",
    processing: "10-16 weeks",
    workAllowed: "Yes - for sponsoring employer",
    residencyPath: "Yes - after 2 years",
    renewable: "Yes",
    family: "Yes - spouse and children",
    whoFor: [
      { profile: "Professionals with job offers", fit: "perfect" },
      { profile: "Intra-company transfers", fit: "perfect" },
      { profile: "Teachers at international schools", fit: "good" },
      { profile: "Tech workers", fit: "good" },
      { profile: "Self-employed entrepreneurs", fit: "not-suitable" },
    ],
    requirements: [
      "Valid passport with 6+ months validity",
      "Signed work contract from Argentine employer",
      "Employer's company registration documents",
      "Proof of professional qualifications",
      "Criminal background check (apostilled)",
      "Health insurance",
      "CV/Resume",
    ],
    steps: [
      { step: 1, title: "Secure job offer", time: "Varies", details: "Employer must be willing to sponsor your visa" },
      { step: 2, title: "Employer submits precarga", time: "1-2 weeks", details: "Company registers your position with Migraciones" },
      { step: 3, title: "Gather documents", time: "2-4 weeks", details: "You collect personal documents while employer prepares company docs" },
      { step: 4, title: "Submit application", time: "1-2 hours", details: "Apply via RADEX or at Migraciones office" },
      { step: 5, title: "Wait for processing", time: "8-12 weeks", details: "Migraciones verifies employer and reviews your docs" },
      { step: 6, title: "Receive visa", time: "1 week", details: "Download visa and enter Argentina within validity period" },
    ],
    rejections: [
      { reason: "Employer not registered", solution: "Ensure your employer is registered with Migraciones and has CUIT" },
      { reason: "Job doesn't match qualifications", solution: "Your degree/experience should align with the position" },
      { reason: "Company financial issues", solution: "Employer must show tax compliance and financial stability" },
      { reason: "Previous immigration violations", solution: "Any overstays or violations must be resolved first" },
    ],
    costs: {
      official: [
        { item: "Visa application fee", cost: "$200-400" },
        { item: "Residency fee (later)", cost: "$300-500" },
      ],
      hidden: [
        { item: "Document apostille/legalization", cost: "$100-200" },
        { item: "Certified translations", cost: "$150-400" },
        { item: "Health insurance", cost: "$50-300/month" },
        { item: "Lawyer fees (optional)", cost: "$500-1,500" },
        { item: "DNI processing (after arrival)", cost: "$50-100" },
      ],
    },
    stories: [
      { name: "James, 41, IT Manager", story: "Company transfer took 14 weeks total. The precarga step was the bottleneck - my employer wasn't familiar with the process. Once they submitted that, my part was smooth.", tip: "Make sure your HR department knows the precarga process." },
      { name: "Ana, 35, Teacher", story: "International school handled everything. From job offer to visa in hand was 11 weeks. They had an immigration lawyer on retainer which helped.", tip: "Schools and large companies have experience - ask about their visa support." },
    ],
  },
  "retirement": {
    name: "Retirement Visa",
    duration: "1 year (renewable)",
    cost: "$200-400",
    processing: "8-14 weeks",
    workAllowed: "No - passive income only",
    residencyPath: "Yes - permanent after 2 years",
    renewable: "Yes - annually",
    family: "Yes - spouse and dependents",
    whoFor: [
      { profile: "Pensioners with stable income", fit: "perfect" },
      { profile: "People living on investment income", fit: "perfect" },
      { profile: "Remote workers needing income", fit: "not-suitable" },
      { profile: "Those wanting to work part-time", fit: "not-suitable" },
    ],
    requirements: [
      "Valid passport with 6+ months validity",
      "Proof of monthly pension/income (minimum ~$1,000)",
      "Income must be from stable source (pension, investments, rental)",
      "Criminal background check (apostilled)",
      "Health insurance valid in Argentina",
      "Proof of accommodation",
      "Birth certificate (apostilled)",
    ],
    steps: [
      { step: 1, title: "Verify income qualification", time: "1 week", details: "Ensure your monthly income meets minimum requirements" },
      { step: 2, title: "Gather financial documents", time: "2-4 weeks", details: "Get pension letters, bank statements, apostille birth certificate" },
      { step: 3, title: "Background check", time: "2-6 weeks", details: "Request FBI or local police check - start early!" },
      { step: 4, title: "Submit application", time: "1-2 hours", details: "Apply via RADEX with all documents" },
      { step: 5, title: "Wait for approval", time: "6-10 weeks", details: "Migraciones verifies income sources and documents" },
      { step: 6, title: "Enter and apply for DNI", time: "Within 90 days", details: "After arrival, apply for your national ID card" },
    ],
    rejections: [
      { reason: "Income too low or unstable", solution: "Show consistent monthly income for 6+ months; combine sources if needed" },
      { reason: "Income from work not allowed", solution: "This visa is for passive income only - earned income disqualifies you" },
      { reason: "Documents not properly apostilled", solution: "All foreign documents need apostille; translations must be certified" },
      { reason: "Health insurance inadequate", solution: "Insurance must cover you in Argentina, not just emergency travel" },
    ],
    costs: {
      official: [
        { item: "Visa application fee", cost: "$200-400" },
        { item: "Renewal fee (annual)", cost: "$200-300" },
      ],
      hidden: [
        { item: "Document apostille", cost: "$100-200" },
        { item: "Certified translations", cost: "$200-500" },
        { item: "Health insurance", cost: "$100-400/month" },
        { item: "DNI processing", cost: "$50-100" },
        { item: "Rent deposit (often 2 months)", cost: "$1,000-3,000" },
      ],
    },
    stories: [
      { name: "Robert, 68, Retired Engineer", story: "Used Social Security + small pension. Total monthly was $1,400. Approval took 9 weeks. The key was having official letters stating the monthly amounts.", tip: "Get official letters from pension sources, not just bank statements." },
      { name: "Linda & Tom, 70s", story: "Applied together as married couple. Combined income counted. Took 12 weeks because one document wasn't properly apostilled. Had to resubmit.", tip: "Double-check apostille requirements for your country. Rules vary." },
    ],
  },
  "student": {
    name: "Student Visa",
    duration: "Duration of studies",
    cost: "$150-300",
    processing: "4-8 weeks",
    workAllowed: "Part-time only (20 hrs/week)",
    residencyPath: "Possible after graduation",
    renewable: "Yes - annually",
    family: "Possible with additional requirements",
    whoFor: [
      { profile: "University degree students", fit: "perfect" },
      { profile: "Language school students (6+ months)", fit: "perfect" },
      { profile: "Exchange students", fit: "good" },
      { profile: "Graduate researchers", fit: "good" },
      { profile: "Short-term tourists", fit: "not-suitable" },
    ],
    requirements: [
      "Valid passport with 6+ months validity",
      "Acceptance letter from accredited institution",
      "Proof of funds for tuition and living expenses",
      "Criminal background check",
      "Health insurance",
      "Proof of accommodation",
      "Academic records/transcripts",
    ],
    steps: [
      { step: 1, title: "Apply to school", time: "1-3 months", details: "Get accepted to a recognized Argentine institution" },
      { step: 2, title: "Receive enrollment letter", time: "1-2 weeks", details: "School provides official enrollment documentation" },
      { step: 3, title: "Prepare financial proof", time: "1-2 weeks", details: "Bank statements or scholarship award letters" },
      { step: 4, title: "Submit visa application", time: "1-2 hours", details: "Apply via RADEX with school documents" },
      { step: 5, title: "Wait for processing", time: "3-6 weeks", details: "Usually faster than other visa types" },
      { step: 6, title: "Enter and register", time: "Within validity", details: "Register with school and apply for DNI" },
    ],
    rejections: [
      { reason: "School not accredited", solution: "Verify your institution is recognized by Argentine Ministry of Education" },
      { reason: "Insufficient funds", solution: "Show you can cover tuition + ~$500/month living expenses" },
      { reason: "Part-time program", solution: "Usually requires full-time enrollment for visa" },
      { reason: "Previous academic issues", solution: "Some schools require academic history disclosure" },
    ],
    costs: {
      official: [
        { item: "Visa application fee", cost: "$150-300" },
        { item: "Student residence permit", cost: "$100-200" },
      ],
      hidden: [
        { item: "Tuition (varies widely)", cost: "$0-10,000/year" },
        { item: "Health insurance", cost: "$50-150/month" },
        { item: "Books and materials", cost: "$200-500/year" },
        { item: "Accommodation", cost: "$300-800/month" },
        { item: "DNI processing", cost: "$50-100" },
      ],
    },
    stories: [
      { name: "Emma, 22, Exchange Student", story: "University of Buenos Aires exchange program. Visa took 5 weeks. School's international office handled most paperwork.", tip: "Use your school's international office - they do this regularly." },
      { name: "Carlos, 28, Language Student", story: "Studied Spanish for 8 months. Had to show $8,000 in bank account. Approval in 6 weeks. Part-time work at a cafe was easy to find.", tip: "Language school visas work well but check they're on the approved list." },
    ],
  },
  "investment": {
    name: "Investment Visa",
    duration: "1-3 years",
    cost: "$500-1,000+",
    processing: "12-20 weeks",
    workAllowed: "Yes - own business",
    residencyPath: "Yes - permanent available",
    renewable: "Yes",
    family: "Yes",
    whoFor: [
      { profile: "Real estate investors", fit: "perfect" },
      { profile: "Business owners/entrepreneurs", fit: "perfect" },
      { profile: "Startup founders", fit: "good" },
      { profile: "Agricultural investors", fit: "good" },
      { profile: "Passive stock investors", fit: "not-suitable" },
    ],
    requirements: [
      "Valid passport with 6+ months validity",
      "Proof of investment (property deed, business registration, etc.)",
      "Minimum investment varies (typically $50,000+ USD)",
      "Business plan (for new businesses)",
      "Source of funds documentation",
      "Criminal background check (apostilled)",
      "Health insurance",
    ],
    steps: [
      { step: 1, title: "Make investment", time: "Varies", details: "Purchase property or establish business before applying" },
      { step: 2, title: "Gather investment proof", time: "2-4 weeks", details: "Property deeds, business registration, bank transfers" },
      { step: 3, title: "Prepare business documentation", time: "2-4 weeks", details: "Business plan, financial projections, source of funds" },
      { step: 4, title: "Submit application", time: "2-3 hours", details: "Extensive documentation required - consider lawyer" },
      { step: 5, title: "Wait for review", time: "10-16 weeks", details: "Migraciones may request additional documentation" },
      { step: 6, title: "Interview (possible)", time: "1 hour", details: "Some applicants are called for interview" },
    ],
    rejections: [
      { reason: "Investment insufficient", solution: "Real estate typically needs $50k+; businesses need viable plan + capital" },
      { reason: "Source of funds unclear", solution: "Document where investment money came from - tax returns, sales, etc." },
      { reason: "Business not viable", solution: "Business plan must show economic benefit to Argentina" },
      { reason: "Property issues", solution: "Real estate must have clear title; agricultural land has restrictions" },
    ],
    costs: {
      official: [
        { item: "Visa application fee", cost: "$500-1,000" },
        { item: "Residency processing", cost: "$400-600" },
      ],
      hidden: [
        { item: "Lawyer fees (highly recommended)", cost: "$1,500-5,000" },
        { item: "Business registration", cost: "$500-2,000" },
        { item: "Accounting setup", cost: "$200-500" },
        { item: "Document certification", cost: "$300-800" },
        { item: "Business plan preparation", cost: "$500-1,500" },
      ],
    },
    stories: [
      { name: "David, 45, Tech Entrepreneur", story: "Started a software company with $80k investment. Took 18 weeks total. Had one request for additional documents. Lawyer was essential.", tip: "Don't skimp on the lawyer. Investment visas are complex." },
      { name: "Maria, 52, Property Investor", story: "Bought an apartment in Palermo for $120k. Visa took 14 weeks. Had to show the full money trail from US account to Argentine notary.", tip: "Keep every receipt and bank record. They check everything." },
    ],
  },
};

// Main Page Component
export default function VisasPage() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      {/* Breadcrumb */}
      <div className="border-b bg-muted/30">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex gap-2 text-base md:text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">Home</Link>
            <span>/</span>
            <span className="text-foreground">Visas</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-teal-50 to-white dark:from-teal-950/20 dark:to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4" variant="secondary">
              <Icon name="file-text" size="sm" />
              Complete Guide 2026
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Argentina Visa Guide & Decision Tool
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Find the right visa, calculate costs, estimate timelines, and learn from 
              people who&apos;ve actually gone through the process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="#quiz">
                  <Icon name="zap" size="sm" />
                  Find Your Visa
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="#comparison">
                  <Icon name="scale" size="sm" />
                  Compare All Visas
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2026 Visa Reality Alert */}
      <section className="py-8 bg-amber-50 dark:bg-amber-950/20 border-y border-amber-200 dark:border-amber-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-4">
              <Icon name="alert-circle" size="lg" className="text-amber-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-bold text-amber-900 dark:text-amber-100 mb-2">
                  2026 Visa Reality: Delays & Processing Updates
                </h2>
                <ul className="text-amber-800 dark:text-amber-200 space-y-2 text-sm">
                  <li><strong>DNI Delays:</strong> National ID processing is taking 6+ months due to system backlogs. Without DNI, banking and renting are extremely difficult.</li>
                  <li><strong>2-Year Citizenship Rule:</strong> Citizenship requires 2 years of <em>permanent</em> residency (not temporary). Total timeline: 4-5 years minimum.</li>
                  <li><strong>Digital Nomad Visa:</strong> Only 180 days with no direct residency path. Many regret choosing this over other visa types.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Tools Section */}
      <section id="quiz" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Interactive Visa Tools</h2>
              <p className="text-muted-foreground">
                Use these tools to find your best visa match and plan your application
              </p>
            </div>

            <Tabs defaultValue="finder" className="w-full">
              <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 h-auto">
                <TabsTrigger value="finder">
                  <Icon name="zap" size="sm" />
                  <span className="ml-1">Finder</span>
                </TabsTrigger>
                <TabsTrigger value="cost">
                  <Icon name="calculator" size="sm" />
                  <span className="ml-1">Cost</span>
                </TabsTrigger>
                <TabsTrigger value="timeline">
                  <Icon name="calendar" size="sm" />
                  <span className="ml-1">Timeline</span>
                </TabsTrigger>
                <TabsTrigger value="checklist">
                  <Icon name="check-circle" size="sm" />
                  <span className="ml-1">Checklist</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="finder" className="mt-6">
                <VisaFinderQuiz />
              </TabsContent>

              <TabsContent value="cost" className="mt-6">
                <CostCalculator />
              </TabsContent>

              <TabsContent value="timeline" className="mt-6">
                <TimelineCalculator />
              </TabsContent>

              <TabsContent value="checklist" className="mt-6">
                <DocumentChecklist />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section id="comparison" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Complete Visa Comparison</h2>
              <p className="text-muted-foreground">
                Side-by-side comparison of all Argentina visa options
              </p>
            </div>

            <Card>
              <CardContent className="pt-6 overflow-x-auto">
                <table className="w-full min-w-[800px]">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-4 px-3 font-semibold">Feature</th>
                      <th className="text-left py-4 px-3">
                        <div className="flex items-center gap-2">
                          <FeatureIcon name="wifi" size="sm" variant="primary" />
                          <span>Digital Nomad</span>
                        </div>
                      </th>
                      <th className="text-left py-4 px-3">
                        <div className="flex items-center gap-2">
                          <FeatureIcon name="briefcase" size="sm" variant="secondary" />
                          <span>Work</span>
                        </div>
                      </th>
                      <th className="text-left py-4 px-3">
                        <div className="flex items-center gap-2">
                          <FeatureIcon name="coffee" size="sm" variant="secondary" />
                          <span>Retirement</span>
                        </div>
                      </th>
                      <th className="text-left py-4 px-3">
                        <div className="flex items-center gap-2">
                          <FeatureIcon name="graduation-cap" size="sm" variant="secondary" />
                          <span>Student</span>
                        </div>
                      </th>
                      <th className="text-left py-4 px-3">
                        <div className="flex items-center gap-2">
                          <FeatureIcon name="trending-up" size="sm" variant="secondary" />
                          <span>Investment</span>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-base md:text-sm">
                    <tr className="border-b">
                      <td className="py-3 px-3 font-medium">Duration</td>
                      <td className="py-3 px-3 text-muted-foreground">180 days</td>
                      <td className="py-3 px-3 text-muted-foreground">1-3 years</td>
                      <td className="py-3 px-3 text-muted-foreground">1 year (renewable)</td>
                      <td className="py-3 px-3 text-muted-foreground">Duration of studies</td>
                      <td className="py-3 px-3 text-muted-foreground">1-3 years</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-3 font-medium">Cost</td>
                      <td className="py-3 px-3 text-muted-foreground">$100-150</td>
                      <td className="py-3 px-3 text-muted-foreground">$200-400</td>
                      <td className="py-3 px-3 text-muted-foreground">$200-400</td>
                      <td className="py-3 px-3 text-muted-foreground">$150-300</td>
                      <td className="py-3 px-3 text-muted-foreground">$500-1,000+</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-3 font-medium">Processing Time</td>
                      <td className="py-3 px-3 text-muted-foreground">6-10 weeks</td>
                      <td className="py-3 px-3 text-muted-foreground">10-16 weeks</td>
                      <td className="py-3 px-3 text-muted-foreground">8-14 weeks</td>
                      <td className="py-3 px-3 text-muted-foreground">4-8 weeks</td>
                      <td className="py-3 px-3 text-muted-foreground">12-20 weeks</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-3 font-medium">Work Allowed</td>
                      <td className="py-3 px-3 text-muted-foreground">Remote only</td>
                      <td className="py-3 px-3 text-green-600">Yes (sponsor)</td>
                      <td className="py-3 px-3 text-red-500">No</td>
                      <td className="py-3 px-3 text-amber-600">Part-time only</td>
                      <td className="py-3 px-3 text-green-600">Own business</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-3 font-medium">Path to Residency</td>
                      <td className="py-3 px-3 text-red-500">No</td>
                      <td className="py-3 px-3 text-green-600">Yes (2 years)</td>
                      <td className="py-3 px-3 text-green-600">Yes (2 years)</td>
                      <td className="py-3 px-3 text-amber-600">Possible</td>
                      <td className="py-3 px-3 text-green-600">Yes</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-3 font-medium">Renewable</td>
                      <td className="py-3 px-3 text-red-500">No (reapply)</td>
                      <td className="py-3 px-3 text-green-600">Yes</td>
                      <td className="py-3 px-3 text-green-600">Yes (annual)</td>
                      <td className="py-3 px-3 text-green-600">Yes</td>
                      <td className="py-3 px-3 text-green-600">Yes</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-3 font-medium">Bring Family</td>
                      <td className="py-3 px-3 text-amber-600">Complicated</td>
                      <td className="py-3 px-3 text-green-600">Yes</td>
                      <td className="py-3 px-3 text-green-600">Yes</td>
                      <td className="py-3 px-3 text-amber-600">Possible</td>
                      <td className="py-3 px-3 text-green-600">Yes</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-3 font-medium">Income Requirement</td>
                      <td className="py-3 px-3 text-muted-foreground">~$2,500/mo</td>
                      <td className="py-3 px-3 text-muted-foreground">Job offer</td>
                      <td className="py-3 px-3 text-muted-foreground">~$1,000/mo pension</td>
                      <td className="py-3 px-3 text-muted-foreground">Proof of funds</td>
                      <td className="py-3 px-3 text-muted-foreground">~$50,000+ investment</td>
                    </tr>
                  </tbody>
                </table>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Individual Visa Deep Dives */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Detailed Visa Guides</h2>
              <p className="text-muted-foreground">
                Everything you need to know about each visa type
              </p>
            </div>

            <Tabs defaultValue="digital-nomad" className="w-full">
              <TabsList className="grid w-full grid-cols-3 sm:grid-cols-5 h-auto">
                <TabsTrigger value="digital-nomad">
                  <Icon name="wifi" size="sm" />
                  <span className="ml-1">Nomad</span>
                </TabsTrigger>
                <TabsTrigger value="work">
                  <Icon name="briefcase" size="sm" />
                  <span className="ml-1">Work</span>
                </TabsTrigger>
                <TabsTrigger value="retirement">
                  <Icon name="coffee" size="sm" />
                  <span className="ml-1">Retire</span>
                </TabsTrigger>
                <TabsTrigger value="student">
                  <Icon name="graduation-cap" size="sm" />
                  <span className="ml-1">Study</span>
                </TabsTrigger>
                <TabsTrigger value="investment">
                  <Icon name="trending-up" size="sm" />
                  <span className="ml-1">Invest</span>
                </TabsTrigger>
              </TabsList>

              {Object.entries(visaData).map(([key, visa]) => (
                <TabsContent key={key} value={key} className="mt-6">
                  <div className="space-y-8">
                    {/* Overview Card */}
                    <Card>
                      <CardHeader>
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                          <div>
                            <CardTitle className="text-2xl">{visa.name}</CardTitle>
                            <CardDescription>Complete application guide</CardDescription>
                          </div>
                          <div className="flex gap-2">
                            <Badge variant="secondary">
                              <Icon name="clock" size="sm" />
                              {visa.processing}
                            </Badge>
                            <Badge variant="outline">
                              <Icon name="dollar-sign" size="sm" />
                              {visa.cost}
                            </Badge>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="grid md:grid-cols-3 gap-4">
                          <div className="p-4 bg-muted rounded-lg">
                            <div className="text-base md:text-sm text-muted-foreground mb-1">Duration</div>
                            <div className="font-semibold">{visa.duration}</div>
                          </div>
                          <div className="p-4 bg-muted rounded-lg">
                            <div className="text-base md:text-sm text-muted-foreground mb-1">Work Allowed</div>
                            <div className="font-semibold">{visa.workAllowed}</div>
                          </div>
                          <div className="p-4 bg-muted rounded-lg">
                            <div className="text-base md:text-sm text-muted-foreground mb-1">Residency Path</div>
                            <div className="font-semibold">{visa.residencyPath}</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Who It's For */}
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Icon name="users" size="md" />
                          Who This Visa Is Actually For
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid md:grid-cols-2 gap-4">
                          {visa.whoFor.map((profile, i) => (
                            <div 
                              key={i} 
                              className={`p-4 rounded-lg border flex items-center gap-3 ${
                                profile.fit === "perfect" 
                                  ? "border-green-200 bg-green-50" 
                                  : profile.fit === "good"
                                  ? "border-amber-200 bg-amber-50"
                                  : "border-red-200 bg-red-50"
                              }`}
                            >
                              <Icon 
                                name={
                                  profile.fit === "perfect" 
                                    ? "check-circle" 
                                    : profile.fit === "good"
                                    ? "alert-circle"
                                    : "x"
                                } 
                                size="md"
                                className={
                                  profile.fit === "perfect" 
                                    ? "text-green-600" 
                                    : profile.fit === "good"
                                    ? "text-amber-600"
                                    : "text-red-500"
                                }
                              />
                              <div>
                                <div className="font-medium">{profile.profile}</div>
                                <div className="text-base md:text-sm text-muted-foreground capitalize">{profile.fit} fit</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    {/* Requirements & Steps */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <Icon name="file-text" size="md" />
                            Requirements Checklist
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-3">
                            {visa.requirements.map((req, i) => (
                              <li key={i} className="flex items-start gap-3">
                                <Icon name="check-circle" size="sm" className="text-green-500 mt-0.5 flex-shrink-0" />
                                <span>{req}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <Icon name="alert-triangle" size="md" />
                            Common Rejection Reasons
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            {visa.rejections.map((rejection, i) => (
                              <div key={i} className="p-3 bg-red-50 border border-red-100 rounded-lg">
                                <div className="font-medium text-red-900">{rejection.reason}</div>
                                <div className="text-base md:text-sm text-red-700 mt-1">
                                  <strong>Solution:</strong> {rejection.solution}
                                </div>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Application Steps */}
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Icon name="list-ordered" size="md" />
                          Step-by-Step Application Process
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {visa.steps.map((s, i) => (
                            <div key={i} className="flex gap-4">
                              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                                {s.step}
                              </div>
                              <div className="flex-1 pb-4 border-b last:border-0">
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                                  <h3 className="font-semibold text-base">{s.title}</h3>
                                  <Badge variant="secondary">{s.time}</Badge>
                                </div>
                                <p className="text-muted-foreground mt-1">{s.details}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    {/* Cost Breakdown */}
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Icon name="dollar-sign" size="md" />
                          Cost Breakdown
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h3 className="font-semibold text-base mb-3">Official Government Fees</h3>
                            <ul className="space-y-2">
                              {visa.costs.official.map((item, i) => (
                                <li key={i} className="flex justify-between">
                                  <span>{item.item}</span>
                                  <span className="font-medium">{item.cost}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h3 className="font-semibold text-base mb-3">Additional/Hidden Costs</h3>
                            <ul className="space-y-2">
                              {visa.costs.hidden.map((item, i) => (
                                <li key={i} className="flex justify-between">
                                  <span>{item.item}</span>
                                  <span className="font-medium">{item.cost}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Real Stories */}
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Icon name="message-square" size="md" />
                          Real Stories from Successful Applicants
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid md:grid-cols-2 gap-6">
                          {visa.stories.map((story, i) => (
                            <div key={i} className="p-4 bg-muted rounded-lg">
                              <div className="flex items-center gap-2 mb-3">
                                <FeatureIcon name="user" variant="primary" size="sm" />
                                <span className="font-semibold">{story.name}</span>
                              </div>
                              <p className="text-muted-foreground mb-3">&ldquo;{story.story}&rdquo;</p>
                              <div className="flex items-start gap-2 text-base md:text-sm">
                                <Icon name="lightbulb" size="sm" className="text-amber-500 mt-0.5 flex-shrink-0" />
                                <span className="text-amber-700"><strong>Tip:</strong> {story.tip}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </section>

      {/* Practical Sections */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Practical Information</h2>
              <p className="text-muted-foreground">
                What you need to know about the actual application process
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="before" className="bg-background rounded-lg border px-6">
                <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                  <div className="flex items-center gap-3">
                    <FeatureIcon name="file-text" variant="primary" />
                    Before You Apply
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold text-base mb-3">Documents You&apos;ll Need (All Visas)</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <Icon name="check-circle" size="sm" className="text-green-500 mt-0.5" />
                          <span><strong>Valid Passport:</strong> Must be valid for at least 6 months beyond your planned stay</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Icon name="check-circle" size="sm" className="text-green-500 mt-0.5" />
                          <span><strong>Passport Photos:</strong> 4x4cm, white background, no glasses, neutral expression. Get these in Argentina if possible - they know the exact requirements.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Icon name="check-circle" size="sm" className="text-green-500 mt-0.5" />
                          <span><strong>Criminal Background Check:</strong> From your country of residence. Must be apostilled and less than 90 days old when you apply.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Icon name="check-circle" size="sm" className="text-green-500 mt-0.5" />
                          <span><strong>Health Insurance:</strong> Must be valid in Argentina. Travel insurance often works for initial application.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Icon name="check-circle" size="sm" className="text-green-500 mt-0.5" />
                          <span><strong>Proof of Accommodation:</strong> Rental contract, hotel booking, or letter from host. Doesn&apos;t need to be long-term.</span>
                        </li>
                      </ul>
                    </div>

                    <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg">
                      <div className="flex items-start gap-3">
                        <Icon name="alert-triangle" size="md" className="text-amber-600 flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold text-base text-amber-900">The Apostille Process</h3>
                          <p className="text-amber-800 text-base md:text-sm mt-1">
                            This is where most people get stuck. Documents from your home country need an apostille 
                            (international certification). In the US, this is done by the Secretary of State in each state. 
                            Processing time: 1-8 weeks depending on the state. Start this FIRST.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold text-base mb-3">Certified Translations</h3>
                      <p className="text-muted-foreground">
                        All non-Spanish documents must be translated by a <strong>certified public translator (traductor público)</strong> in Argentina. 
                        Cost is typically $20-50 per page. You can find them through the Colegio de Traductores in your province. 
                        Don&apos;t use online translations or non-certified translators - Migraciones will reject them.
                      </p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="process" className="bg-background rounded-lg border px-6">
                <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                  <div className="flex items-center gap-3">
                    <FeatureIcon name="building" variant="primary" />
                    The Application Process at Migraciones
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold text-base mb-3">RADEX Online System (Recommended)</h3>
                      <p className="text-muted-foreground mb-3">
                        Most applications now go through RADEX, the online immigration system. 
                        Create an account at <Link href="https://www.migraciones.gov.ar" className="text-primary underline">migraciones.gov.ar</Link>.
                      </p>
                      <ol className="space-y-2 list-decimal list-inside text-muted-foreground">
                        <li>Create your account with email verification</li>
                        <li>Select your visa type from the menu</li>
                        <li>Upload all documents as PDFs (keep file sizes under 5MB)</li>
                        <li>Pay the fee online (credit card accepted)</li>
                        <li>Wait for email notifications about your case status</li>
                      </ol>
                    </div>

                    <div>
                      <h3 className="font-semibold text-base mb-3">In-Person Application (If Required)</h3>
                      <p className="text-muted-foreground mb-3">
                        Some visa types or situations require in-person visits. Main offices:
                      </p>
                      <ul className="space-y-2">
                        <li className="p-3 bg-muted rounded">
                          <strong>Buenos Aires:</strong> Av. Antártida Argentina 1205, Retiro (main office)
                          <br />
                          <span className="text-base md:text-sm text-muted-foreground">Open Mon-Fri 8am-2pm. Arrive early - lines form at 7am.</span>
                        </li>
                        <li className="p-3 bg-muted rounded">
                          <strong>Córdoba:</strong> Av. Colón 345
                          <br />
                          <span className="text-base md:text-sm text-muted-foreground">Usually less crowded than Buenos Aires.</span>
                        </li>
                        <li className="p-3 bg-muted rounded">
                          <strong>Mendoza:</strong> Patricias Mendocinas 550
                          <br />
                          <span className="text-base md:text-sm text-muted-foreground">Good option if you&apos;re in wine country.</span>
                        </li>
                      </ul>
                    </div>

                    <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                      <h3 className="font-semibold text-base text-blue-900 mb-2">What to Expect</h3>
                      <ul className="space-y-1 text-blue-800 text-base md:text-sm">
                        <li>• Processing times are estimates, not guarantees</li>
                        <li>• You may receive requests for additional documents</li>
                        <li>• Check your email (including spam) regularly</li>
                        <li>• Don&apos;t book flights until you have visa approval in hand</li>
                      </ul>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="after" className="bg-background rounded-lg border px-6">
                <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                  <div className="flex items-center gap-3">
                    <FeatureIcon name="check-circle" variant="primary" />
                    After Approval: Next Steps
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold text-base mb-3">Entering Argentina</h3>
                      <p className="text-muted-foreground">
                        Once approved, you typically have 90 days to enter Argentina. 
                        Print your approval letter and bring it with your passport. 
                        Immigration at the airport will see your visa status in their system, 
                        but having the paper helps if there are issues.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-base mb-3">Getting Your DNI (National ID) — 2026 Delays</h3>
                      <div className="p-4 bg-amber-50 dark:bg-amber-950/20 border border-amber-200 rounded-lg mb-4">
                        <p className="text-amber-800 dark:text-amber-200 text-sm">
                          <strong>⚠️ 2026 Reality:</strong> DNI processing is taking 6+ months in many cases due to 
                          system backlogs. Plan accordingly—banking, renting, and many services are difficult without DNI.
                        </p>
                      </div>
                      <p className="text-muted-foreground mb-3">
                        The DNI (Documento Nacional de Identidad) is essential for daily life in Argentina. 
                        You need it for:
                      </p>
                      <ul className="space-y-1 text-muted-foreground list-disc list-inside">
                        <li>Opening bank accounts (without DNI, you're limited to MercadoPago)</li>
                        <li>Signing rental contracts (most landlords require it)</li>
                        <li>Getting a local phone plan</li>
                        <li>Utilities in your name</li>
                        <li>Local travel discounts</li>
                      </ul>
                      <p className="text-muted-foreground mt-3">
                        Apply at RENAPER offices (separate from Migraciones). Bring your passport, 
                        visa approval, proof of address, and birth certificate. <strong>Processing now takes 4-8 weeks minimum, often 6+ months.</strong> 
                        You may get a temporary paper DNI, but the physical card is taking much longer in 2026.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-base mb-3">CUIT/CUIL (Tax ID)</h3>
                      <p className="text-muted-foreground">
                        If you plan to work, start a business, or buy property, you&apos;ll need a CUIT 
                        (Clave Única de Identificación Tributaria). Apply at AFIP offices or online 
                        once you have your DNI. This is your Argentine tax identification number.
                      </p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="problems" className="bg-background rounded-lg border px-6">
                <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                  <div className="flex items-center gap-3">
                    <FeatureIcon name="alert-circle" variant="primary" />
                    When Things Go Wrong
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold text-base mb-3">Visa Denied: Your Options</h3>
                      <div className="space-y-3">
                        <div className="p-3 border rounded-lg">
                          <div className="font-medium">1. Appeal the Decision (Recurso de Reposición)</div>
                          <p className="text-base md:text-sm text-muted-foreground">
                            You have 15 working days to file an appeal. Must be done through a lawyer. 
                            Success rate varies but is worth trying if you believe the denial was incorrect.
                          </p>
                        </div>
                        <div className="p-3 border rounded-lg">
                          <div className="font-medium">2. Reapply with Stronger Documentation</div>
                          <p className="text-base md:text-sm text-muted-foreground">
                            Often faster than appeal. Address the specific reason for denial and submit 
                            a new application with additional supporting documents.
                          </p>
                        </div>
                        <div className="p-3 border rounded-lg">
                          <div className="font-medium">3. Consider a Different Visa Type</div>
                          <p className="text-base md:text-sm text-muted-foreground">
                            If Digital Nomad was denied due to income, maybe Student visa works better? 
                            Or if Work visa fell through, maybe Investment if you have capital.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold text-base mb-3">Visa Expiring Soon?</h3>
                      <p className="text-muted-foreground mb-3">
                        Start renewal process 60 days before expiration. Overstaying even one day 
                        can result in fines and future entry bans.
                      </p>
                      <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                        <div className="flex items-start gap-3">
                          <Icon name="alert-triangle" size="md" className="text-red-600 flex-shrink-0" />
                          <div>
                            <h5 className="font-semibold text-red-900">Emergency: Already Overstayed?</h5>
                            <p className="text-red-800 text-base md:text-sm mt-1">
                              Go to Migraciones immediately to regularize your situation. 
                              You&apos;ll pay a fine (approximately ARS $150,000-300,000 depending on length) 
                              but it&apos;s much better than getting caught at the border. 
                              Consider hiring a lawyer for this process.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold text-base mb-3">Lost or Stolen Documents</h3>
                      <p className="text-muted-foreground">
                        If your passport with visa is lost/stolen: File a police report immediately, 
                        contact your embassy for a new passport, then visit Migraciones with the police 
                        report to get your visa status transferred to the new passport. This can take 
                        2-4 weeks, so don&apos;t plan travel during this time.
                      </p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Insider Tips from Successful Applicants</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Icon name="clock" size="md" className="text-primary" />
                    Timing Is Everything
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Apply at least 3 months before your planned move</li>
                    <li>• Avoid December-February (summer holidays - everything slows down)</li>
                    <li>• Start your background check first - it takes the longest</li>
                    <li>• Document validity: Most documents expire after 90 days</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Icon name="file-text" size="md" className="text-primary" />
                    Documentation Secrets
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Scan everything in high resolution (300 DPI minimum)</li>
                    <li>• Keep PDFs under 5MB for RADEX uploads</li>
                    <li>• Make a checklist and check it three times</li>
                    <li>• Apostille rules vary by US state - check yours</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Icon name="dollar-sign" size="md" className="text-primary" />
                    Money Matters
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Bring more money than the minimum requirement</li>
                    <li>• Have 6 months of bank statements ready</li>
                    <li>• Credit cards help show financial stability</li>
                    <li>• Budget for the unexpected - costs add up</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Icon name="users" size="md" className="text-primary" />
                    Getting Help
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Facebook groups: &ldquo;Argentine Expats&rdquo; and &ldquo;Expats in Buenos Aires&rdquo;</li>
                    <li>• Reddit: r/argentina and r/expats</li>
                    <li>• Consider a lawyer for complex cases (worth the $500-1500)</li>
                    <li>• Your embassy can&apos;t help with immigration, but expat groups can</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-16 bg-amber-50 dark:bg-amber-950/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card className="border-amber-200">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <Icon name="alert-triangle" size="lg" className="text-amber-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">
                      Important Legal Notice
                    </h3>
                    <p className="text-amber-800 dark:text-amber-200 text-base md:text-sm">
                      Visa requirements, fees, and processing times change frequently. 
                      This guide reflects information current as of 2026 but should not be
                      considered legal advice. Always verify current requirements on the official{" "}
                      <Link href="https://www.migraciones.gov.ar" className="underline" target="_blank" rel="noopener noreferrer">
                        Argentine Immigration website
                      </Link>{" "}
                      or consult with a qualified immigration attorney before making decisions. 
                      We are not responsible for changes in immigration law or individual application outcomes.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Links to All Visa Guides */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center">All Visa & Immigration Guides</h2>
            <p className="text-muted-foreground text-center mb-8">
              Detailed guides for every stage of your immigration journey
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { href: "/visas/tourist", title: "Tourist Visa", desc: "90-day entry & extensions" },
                { href: "/visas/digital-nomad", title: "Digital Nomad Visa", desc: "Remote work for 180 days" },
                { href: "/visas/work", title: "Work Visa", desc: "Employment with Argentine companies" },
                { href: "/visas/student", title: "Student Visa", desc: "University & language study" },
                { href: "/visas/retirement", title: "Retirement Visa", desc: "Pensioners & passive income" },
                { href: "/visas/investment", title: "Investment Visa", desc: "Business owners & investors" },
                { href: "/visas/temporary", title: "Temporary Residency", desc: "1-3 year renewable status" },
                { href: "/visas/permanent", title: "Permanent Residency", desc: "Long-term settlement" },
                { href: "/visas/citizenship", title: "Citizenship", desc: "Argentine naturalization" },
              ].map((visa) => (
                <Link key={visa.href} href={visa.href} className="group">
                  <Card className="h-full hover:shadow-md transition-shadow hover:border-primary/50">
                    <CardContent className="pt-5 pb-4">
                      <h3 className="font-semibold group-hover:text-primary transition-colors">{visa.title}</h3>
                      <p className="text-sm text-muted-foreground">{visa.desc}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
            <div className="text-center mt-6">
              <Button asChild variant="outline">
                <Link href="/visas/compare">
                  Compare Visa Types
                  <Icon name="arrow-right" size="sm" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Need Professional Help?</h2>
            <p className="text-primary-foreground/80 mb-8">
              Immigration law is complex and changes frequently. A qualified lawyer can 
              save you time, money, and stress - especially for business visas or if 
              you&apos;ve had previous immigration issues.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/resources/directory?category=legal">
                  Find Immigration Lawyers
                  <Icon name="arrow-right" size="sm" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/20 hover:bg-primary-foreground/10">
                <Link href="/contact">
                  Ask a Question
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
