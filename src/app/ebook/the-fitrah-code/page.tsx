import type { Metadata } from "next";
import EbookReader from "./ebook-reader";

export const metadata: Metadata = {
  title: "The Fitrah Code — Fase I: The Blueprint — Tim GenSa",
};

export default function FitrahCodeReaderPage() {
  return <EbookReader />;
}
