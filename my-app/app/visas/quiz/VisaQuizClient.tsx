"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRightIcon,
  CheckCircleIcon,
  GlobeIcon,
  BriefcaseIcon,
  CoffeeIcon,
  GraduationCapIcon,
  TrendingUpIcon,
  WifiIcon,
  DollarSignIcon,
  CalendarIcon,
  UsersIcon,
  FileTextIcon,
  UserIcon,
  HomeIcon,
  HelpCircleIcon,
  WalletIcon,
  ClockIcon,
  PiggyBankIcon,
  BuildingIcon,
  ZapIcon,
  AlertCircleIcon,
} from "@/components/ui/icon";
import { FeatureIcon } from "@/components/ui/icon";

// -------------------------------------------------------------------
// Types
// -------------------------------------------------------------------

type QuizAnswers = {
  nationality?: string;
  purpose?: string;
  incomeSource?: string;
  ageRange?: string;
  duration?: string;
  jobOffer?: string;
  monthlyIncome?: string;
};

type VisaResult = {
  name: string;
  slug: string;
  matchPercent: number;
  reasons: string[];
  summary: string;
};

// -------------------------------------------------------------------
// Questions
// -------------------------------------------------------------------

const questions = [
  {
    id: "nationality" as const,
    question: "Where are you from?",
    subtitle: "Your nationality affects which visa pathways are available.",
    options: [
      {
        value: "mercosur",
        label: "Mercosur Country",
        description: "Brazil, Paraguay, Uruguay, Bolivia, Chile, etc.",
        iconName: "globe" as const,
      },
      {
        value: "north-america",
        label: "North America",
        description: "USA, Canada, Mexico",
        iconName: "globe" as const,
      },
      {
        value: "europe",
        label: "Europe",
        description: "EU/EEA countries, UK, etc.",
        iconName: "globe" as const,
      },
      {
        value: "other",
        label: "Other",
        description: "Asia, Africa, Oceania, other regions",
        iconName: "globe" as const,
      },
    ],
  },
  {
    id: "purpose" as const,
    question: "What is your main reason for moving to Argentina?",
    subtitle: "This helps us narrow down the best visa category for you.",
    options: [
      {
        value: "work-remote",
        label: "Work Remotely",
        description: "Continue my remote job or freelance career",
        iconName: "wifi" as const,
      },
      {
        value: "work-local",
        label: "Work Locally",
        description: "Get a job with an Argentine company",
        iconName: "briefcase" as const,
      },
      {
        value: "study",
        label: "Study",
        description: "Attend university or language school",
        iconName: "graduation-cap" as const,
      },
      {
        value: "retire",
        label: "Retire",
        description: "Live on pension or passive income",
        iconName: "coffee" as const,
      },
      {
        value: "invest",
        label: "Start a Business or Invest",
        description: "Open a business or make a significant investment",
        iconName: "trending-up" as const,
      },
    ],
  },
  {
    id: "incomeSource" as const,
    question: "What is your primary source of income?",
    subtitle: "Visa requirements often depend on how you fund your stay.",
    options: [
      {
        value: "remote-job",
        label: "Remote Job (foreign employer)",
        description: "Salary from a company outside Argentina",
        iconName: "wifi" as const,
      },
      {
        value: "freelance",
        label: "Freelance / Self-employed",
        description: "Multiple clients, contract work",
        iconName: "zap" as const,
      },
      {
        value: "pension",
        label: "Pension / Retirement Income",
        description: "Regular pension payments",
        iconName: "piggy-bank" as const,
      },
      {
        value: "local-job",
        label: "Argentine Employer",
        description: "I have or expect a job offer in Argentina",
        iconName: "building" as const,
      },
      {
        value: "savings",
        label: "Savings / Investments",
        description: "Living off savings or investment returns",
        iconName: "wallet" as const,
      },
      {
        value: "none",
        label: "Student / No Current Income",
        description: "Supported by family, scholarship, or loans",
        iconName: "alert-circle" as const,
      },
    ],
  },
  {
    id: "monthlyIncome" as const,
    question: "What is your approximate monthly income (in USD)?",
    subtitle:
      "Some visas have minimum income requirements. This helps us check eligibility.",
    options: [
      {
        value: "under-1000",
        label: "Under $1,000",
        description: "Budget-conscious or student income",
        iconName: "dollar-sign" as const,
      },
      {
        value: "1000-2000",
        label: "$1,000 - $2,000",
        description: "Comfortable for most of Argentina",
        iconName: "dollar-sign" as const,
      },
      {
        value: "2000-3500",
        label: "$2,000 - $3,500",
        description: "Above average, flexible lifestyle",
        iconName: "dollar-sign" as const,
      },
      {
        value: "3500-plus",
        label: "$3,500+",
        description: "High income, maximum flexibility",
        iconName: "dollar-sign" as const,
      },
    ],
  },
  {
    id: "ageRange" as const,
    question: "What is your age range?",
    subtitle: "Certain visa categories are tailored to specific life stages.",
    options: [
      {
        value: "18-25",
        label: "18 - 25",
        description: "Student or early career",
        iconName: "user" as const,
      },
      {
        value: "26-40",
        label: "26 - 40",
        description: "Working professional",
        iconName: "briefcase" as const,
      },
      {
        value: "41-59",
        label: "41 - 59",
        description: "Established career or pre-retirement",
        iconName: "trending-up" as const,
      },
      {
        value: "60-plus",
        label: "60+",
        description: "Retirement age",
        iconName: "coffee" as const,
      },
    ],
  },
  {
    id: "duration" as const,
    question: "How long do you plan to stay in Argentina?",
    subtitle:
      "Short stays may not need a visa. Longer stays require proper residency.",
    options: [
      {
        value: "under-6",
        label: "Less than 6 months",
        description: "Short-term or trial period",
        iconName: "clock" as const,
      },
      {
        value: "6-12",
        label: "6 to 12 months",
        description: "Extended stay, one year or less",
        iconName: "calendar" as const,
      },
      {
        value: "1-3-years",
        label: "1 to 3 years",
        description: "Medium-term relocation",
        iconName: "calendar" as const,
      },
      {
        value: "long-term",
        label: "Long-term / Permanently",
        description: "I want to make Argentina my home",
        iconName: "home" as const,
      },
      {
        value: "unsure",
        label: "Not sure yet",
        description: "I want to keep my options open",
        iconName: "help-circle" as const,
      },
    ],
  },
  {
    id: "jobOffer" as const,
    question: "Do you have a job offer or business plan in Argentina?",
    subtitle: "This determines whether employer-sponsored paths are available.",
    options: [
      {
        value: "yes-job",
        label: "Yes, I have a job offer",
        description: "An Argentine company wants to hire me",
        iconName: "check-circle" as const,
      },
      {
        value: "yes-business",
        label: "Yes, I have a business plan",
        description: "I want to start or invest in a business",
        iconName: "trending-up" as const,
      },
      {
        value: "no",
        label: "No",
        description: "I will work remotely, study, or retire",
        iconName: "globe" as const,
      },
    ],
  },
];

// -------------------------------------------------------------------
// Scoring Engine
// -------------------------------------------------------------------

function calculateResults(answers: QuizAnswers): VisaResult[] {
  const scores: Record<string, number> = {
    "Digital Nomad": 0,
    Work: 0,
    Retirement: 0,
    Student: 0,
    Investment: 0,
    Tourist: 0,
  };

  // Nationality
  if (answers.nationality === "mercosur") {
    scores["Work"] += 3; // Mercosur fast-track
    scores["Investment"] += 2;
  }

  // Purpose
  switch (answers.purpose) {
    case "work-remote":
      scores["Digital Nomad"] += 4;
      scores["Tourist"] += 1;
      break;
    case "work-local":
      scores["Work"] += 4;
      break;
    case "study":
      scores["Student"] += 4;
      break;
    case "retire":
      scores["Retirement"] += 4;
      break;
    case "invest":
      scores["Investment"] += 4;
      break;
  }

  // Income source
  switch (answers.incomeSource) {
    case "remote-job":
    case "freelance":
      scores["Digital Nomad"] += 3;
      break;
    case "pension":
      scores["Retirement"] += 3;
      break;
    case "local-job":
      scores["Work"] += 3;
      break;
    case "savings":
      scores["Investment"] += 1;
      scores["Retirement"] += 1;
      scores["Tourist"] += 1;
      break;
    case "none":
      scores["Student"] += 2;
      scores["Tourist"] += 1;
      break;
  }

  // Monthly income
  switch (answers.monthlyIncome) {
    case "under-1000":
      scores["Student"] += 1;
      scores["Tourist"] += 1;
      break;
    case "1000-2000":
      scores["Digital Nomad"] += 1;
      break;
    case "2000-3500":
      scores["Digital Nomad"] += 2;
      scores["Retirement"] += 1;
      break;
    case "3500-plus":
      scores["Investment"] += 2;
      scores["Retirement"] += 2;
      scores["Digital Nomad"] += 1;
      break;
  }

  // Age range
  switch (answers.ageRange) {
    case "18-25":
      scores["Student"] += 2;
      break;
    case "26-40":
      scores["Digital Nomad"] += 1;
      scores["Work"] += 1;
      break;
    case "41-59":
      scores["Investment"] += 1;
      scores["Work"] += 1;
      break;
    case "60-plus":
      scores["Retirement"] += 3;
      break;
  }

  // Duration
  switch (answers.duration) {
    case "under-6":
      scores["Tourist"] += 3;
      scores["Digital Nomad"] += 2;
      break;
    case "6-12":
      scores["Digital Nomad"] += 2;
      scores["Student"] += 1;
      break;
    case "1-3-years":
      scores["Work"] += 1;
      scores["Student"] += 1;
      scores["Investment"] += 1;
      break;
    case "long-term":
      scores["Work"] += 2;
      scores["Retirement"] += 2;
      scores["Investment"] += 2;
      break;
    case "unsure":
      scores["Digital Nomad"] += 1;
      scores["Tourist"] += 1;
      break;
  }

  // Job offer / business plan
  switch (answers.jobOffer) {
    case "yes-job":
      scores["Work"] += 3;
      break;
    case "yes-business":
      scores["Investment"] += 3;
      break;
    case "no":
      scores["Digital Nomad"] += 1;
      scores["Tourist"] += 1;
      break;
  }

  // Build results
  const maxScore = Math.max(...Object.values(scores));

  const visaInfo: Record<
    string,
    { slug: string; summary: string; reasons: string[] }
  > = {
    "Digital Nomad": {
      slug: "digital-nomad",
      summary:
        "The Digital Nomad Visa lets you live and work remotely in Argentina for up to 180 days (renewable). You must prove foreign income of at least $1,500/month. No local employer needed.",
      reasons: [
        "You work remotely for a foreign company or freelance internationally",
        "Your income comes from outside Argentina",
        "You want legal status without local employment",
        "It is renewable and does not require giving up your home-country tax residency",
      ],
    },
    Work: {
      slug: "work",
      summary:
        "The Work Visa (Temporary Residency) is for those employed by an Argentine company or who qualify through Mercosur agreements. It leads to permanent residency after 2-3 years.",
      reasons: [
        "You have a job offer from an Argentine employer",
        "Mercosur nationals get fast-tracked through bilateral agreements",
        "It provides a clear path to permanent residency and citizenship",
        "Allows you to work legally and access the local social security system",
      ],
    },
    Retirement: {
      slug: "retirement",
      summary:
        "The Retirement Visa (Pensionado) is for those with provable pension or passive income. It requires approximately $500+ USD/month in pension income and leads to permanent residency.",
      reasons: [
        "You have stable pension or retirement income",
        "Argentina offers excellent healthcare at a fraction of US/European costs",
        "Your cost of living decreases dramatically while quality of life increases",
        "Direct path to permanent residency with minimal bureaucratic hurdles",
      ],
    },
    Student: {
      slug: "student",
      summary:
        "The Student Visa allows you to study at Argentine universities (many are free, even for foreigners). Part-time work is permitted. Can lead to other visa categories.",
      reasons: [
        "You want to study at an Argentine institution",
        "Argentine public universities are tuition-free for all nationalities",
        "You can work part-time (up to 20 hours/week) on this visa",
        "It is a gateway to longer-term residency if you decide to stay",
      ],
    },
    Investment: {
      slug: "investment",
      summary:
        "The Investment Visa is for entrepreneurs and investors committing capital to Argentine businesses. Requirements vary but generally need a viable business plan and substantial investment.",
      reasons: [
        "You want to start or invest in a business in Argentina",
        "Argentina offers undervalued assets and a growing startup ecosystem",
        "The visa provides maximum flexibility for business activities",
        "It leads to permanent residency and strong legal standing",
      ],
    },
    Tourist: {
      slug: "tourist",
      summary:
        "Many nationalities can enter Argentina visa-free for 90 days (extendable to 180). This is ideal for short stays, scouting trips, or testing the waters before committing to a longer visa.",
      reasons: [
        "You plan to stay less than 6 months",
        "You want to explore before committing to a longer-term visa",
        "Many nationalities get 90 days visa-free on arrival",
        "You can extend once for an additional 90 days at Migraciones",
      ],
    },
  };

  const results: VisaResult[] = Object.entries(scores)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .filter(([, score]) => score > 0)
    .map(([name, score]) => ({
      name: `${name} Visa`,
      slug: visaInfo[name].slug,
      matchPercent: Math.min(97, Math.round((score / maxScore) * 95) + 5),
      reasons: visaInfo[name].reasons,
      summary: visaInfo[name].summary,
    }));

  return results;
}

// -------------------------------------------------------------------
// Icon lookup helper
// -------------------------------------------------------------------

const iconComponentMap: Record<string, React.ComponentType<{ size?: "sm" | "md" | "lg" | "xl"; className?: string }>> = {
  globe: GlobeIcon,
  wifi: WifiIcon,
  briefcase: BriefcaseIcon,
  "graduation-cap": GraduationCapIcon,
  coffee: CoffeeIcon,
  "trending-up": TrendingUpIcon,
  "dollar-sign": DollarSignIcon,
  calendar: CalendarIcon,
  clock: ClockIcon,
  user: UserIcon,
  users: UsersIcon,
  home: HomeIcon,
  "help-circle": HelpCircleIcon,
  "check-circle": CheckCircleIcon,
  wallet: WalletIcon,
  "piggy-bank": PiggyBankIcon,
  building: BuildingIcon,
  zap: ZapIcon,
  "alert-circle": AlertCircleIcon,
};

// -------------------------------------------------------------------
// Component
// -------------------------------------------------------------------

export default function VisaQuizClient() {
  const [step, setStep] = useState(-1); // -1 = intro screen
  const [answers, setAnswers] = useState<QuizAnswers>({});

  const totalSteps = questions.length;
  const isIntro = step === -1;
  const isComplete = step >= totalSteps;

  const results = useMemo(() => {
    if (!isComplete) return [];
    return calculateResults(answers);
  }, [isComplete, answers]);

  const handleSelect = (value: string) => {
    const currentQ = questions[step];
    setAnswers((prev) => ({ ...prev, [currentQ.id]: value }));
    setStep((prev) => prev + 1);
  };

  const handleBack = () => {
    if (step > 0) {
      setStep((prev) => prev - 1);
    } else if (step === 0) {
      setStep(-1);
    }
  };

  const handleRestart = () => {
    setStep(-1);
    setAnswers({});
  };

  // Intro screen
  if (isIntro) {
    return (
      <div className="flex flex-col min-h-screen">
        <section className="py-16 md:py-24 bg-gradient-to-b from-teal-50 to-white dark:from-teal-950/20 dark:to-background">
          <div className="container mx-auto px-5">
            <div className="max-w-2xl mx-auto text-center">
              <Badge variant="secondary" className="mb-4">
                <FileTextIcon size="sm" className="mr-1" />
                Interactive Quiz
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Which Argentina Visa Is Right for You?
              </h1>
              <p className="text-xl text-muted-foreground mb-4">
                Answer 7 quick questions and we will recommend the best visa
                options for your situation, with match percentages and direct
                links to detailed guides.
              </p>
              <p className="text-sm text-muted-foreground mb-8">
                Takes about 2 minutes. No sign-up required.
              </p>
              <Button size="lg" onClick={() => setStep(0)}>
                Start the Quiz
                <ArrowRightIcon size="sm" className="ml-2" />
              </Button>
              <div className="mt-10 grid grid-cols-3 gap-4 text-center text-sm text-muted-foreground">
                <div>
                  <p className="text-2xl font-bold text-primary mb-1">7</p>
                  <p>Questions</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary mb-1">6</p>
                  <p>Visa Types</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary mb-1">2 min</p>
                  <p>To Complete</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // Results screen
  if (isComplete) {
    return (
      <div className="flex flex-col min-h-screen">
        <section className="py-16 md:py-24 bg-gradient-to-b from-teal-50 to-white dark:from-teal-950/20 dark:to-background">
          <div className="container mx-auto px-5">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-10">
                <Badge variant="secondary" className="mb-4">
                  <CheckCircleIcon size="sm" className="mr-1" />
                  Quiz Complete
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  Your Visa Recommendations
                </h1>
                <p className="text-xl text-muted-foreground">
                  Based on your answers, here are the best visa options for your
                  move to Argentina.
                </p>
              </div>

              <div className="space-y-6">
                {results.map((result, index) => (
                  <Card
                    key={result.slug}
                    className={
                      index === 0
                        ? "border-primary shadow-md"
                        : "border-border"
                    }
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          {index === 0 ? (
                            <FeatureIcon
                              name="check-circle"
                              variant="primary"
                              size="lg"
                            />
                          ) : (
                            <FeatureIcon
                              name="file-text"
                              variant="muted"
                              size="lg"
                            />
                          )}
                          <div>
                            <CardTitle className="text-xl">
                              {index === 0 && (
                                <span className="text-primary mr-2">
                                  Best Match:
                                </span>
                              )}
                              {result.name}
                            </CardTitle>
                            <CardDescription>
                              {result.summary}
                            </CardDescription>
                          </div>
                        </div>
                        <div className="text-right shrink-0 ml-4">
                          <div
                            className={`text-2xl font-bold ${
                              index === 0
                                ? "text-primary"
                                : "text-muted-foreground"
                            }`}
                          >
                            {result.matchPercent}%
                          </div>
                          <div className="text-xs text-muted-foreground">
                            match
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {/* Match bar */}
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className={`h-2 rounded-full transition-all duration-500 ${
                            index === 0 ? "bg-primary" : "bg-muted-foreground/40"
                          }`}
                          style={{ width: `${result.matchPercent}%` }}
                        />
                      </div>

                      {/* Reasons */}
                      <div>
                        <h3 className="font-semibold text-sm mb-2">
                          Why this fits your situation:
                        </h3>
                        <ul className="space-y-2">
                          {result.reasons.map((reason, i) => (
                            <li
                              key={i}
                              className="text-sm text-muted-foreground flex gap-2"
                            >
                              <CheckCircleIcon
                                size="sm"
                                className="text-primary shrink-0 mt-0.5"
                              />
                              {reason}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Button asChild className="w-full">
                        <Link href={`/visas/${result.slug}`}>
                          Read Full {result.name} Guide
                          <ArrowRightIcon size="sm" className="ml-2" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Actions */}
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline" onClick={handleRestart}>
                  Retake Quiz
                </Button>
                <Button asChild variant="outline">
                  <Link href="/visas/compare">Compare All Visa Types</Link>
                </Button>
                <Button asChild>
                  <Link href="/visas">
                    Browse All Visas
                    <ArrowRightIcon size="sm" className="ml-2" />
                  </Link>
                </Button>
              </div>

              {/* Disclaimer */}
              <p className="text-xs text-muted-foreground text-center mt-8">
                This quiz provides general guidance based on common visa
                categories. Immigration requirements change frequently. For
                personalized legal advice, consult an immigration attorney.{" "}
                <Link
                  href="https://lucerolegal.org"
                  className="underline hover:text-foreground"
                >
                  Lucero Legal
                </Link>{" "}
                specializes in Argentine immigration law.
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // Quiz step
  const currentQuestion = questions[step];
  const progressPercent = ((step + 1) / totalSteps) * 100;

  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-12 md:py-20 bg-gradient-to-b from-teal-50 to-white dark:from-teal-950/20 dark:to-background">
        <div className="container mx-auto px-5">
          <div className="max-w-2xl mx-auto">
            {/* Progress bar */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-muted-foreground">
                  Question {step + 1} of {totalSteps}
                </span>
                <span className="text-sm text-muted-foreground">
                  {Math.round(progressPercent)}% complete
                </span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div
                  className="bg-primary h-2 rounded-full transition-all duration-300"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>

            {/* Question */}
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                {currentQuestion.question}
              </h2>
              <p className="text-muted-foreground">
                {currentQuestion.subtitle}
              </p>
            </div>

            {/* Options */}
            <div className="space-y-3">
              {currentQuestion.options.map((option) => {
                const IconComp = iconComponentMap[option.iconName];
                const isSelected =
                  answers[currentQuestion.id as keyof QuizAnswers] ===
                  option.value;
                return (
                  <button
                    key={option.value}
                    onClick={() => handleSelect(option.value)}
                    className={`w-full text-left p-4 rounded-xl border transition-all duration-200 hover:border-primary/50 hover:bg-primary/5 flex items-start gap-4 ${
                      isSelected
                        ? "border-primary bg-primary/5 ring-1 ring-primary/20"
                        : "border-border bg-card"
                    }`}
                  >
                    <div className="shrink-0 mt-0.5 w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                      {IconComp && <IconComp size="md" />}
                    </div>
                    <div>
                      <p className="font-medium">{option.label}</p>
                      <p className="text-sm text-muted-foreground">
                        {option.description}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Navigation */}
            <div className="mt-8 flex justify-between">
              <Button variant="ghost" onClick={handleBack}>
                Back
              </Button>
              <div className="flex gap-1.5">
                {questions.map((_, i) => (
                  <div
                    key={i}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      i < step
                        ? "bg-primary"
                        : i === step
                          ? "bg-primary/50"
                          : "bg-muted-foreground/20"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
