import type { Metadata } from "next";
import VisaQuizClient from "./VisaQuizClient";

export const metadata: Metadata = {
  title: "Visa Finder Quiz - Which Argentina Visa Is Right for You?",
  description:
    "Answer 5 simple questions to find the best Argentina visa for your situation. Personalized recommendations for digital nomads, retirees, workers, students, and more.",
  keywords: [
    "Argentina visa quiz",
    "which Argentina visa",
    "Argentina visa finder",
    "best visa Argentina",
    "Argentina visa recommendation",
  ],
  openGraph: {
    title: "Argentina Visa Finder Quiz - Find Your Perfect Visa",
    description:
      "Take our interactive quiz to discover which Argentina visa type best matches your situation, goals, and timeline.",
  },
  alternates: {
    canonical: "https://expatsargentina.com/visas/quiz/",
  },
};

export default function VisaQuizPage() {
  return <VisaQuizClient />;
}
