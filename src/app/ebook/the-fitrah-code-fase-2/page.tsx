import type { Metadata } from "next";
import EbookReader from "./ebook-reader";

export const metadata: Metadata = {
  title: "The Fitrah Code — Fase II: The Glitch — Tim GenSa",
};

export default function FitrahCodeFase2ReaderPage() {
  return <EbookReader />;
}
