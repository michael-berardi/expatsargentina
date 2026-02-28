import type { Metadata } from "next";
import HomepageClient from "./HomepageClient";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://expatsargentina.com/",
  },
};

export default function HomePage() {
  return <HomepageClient />;
}
