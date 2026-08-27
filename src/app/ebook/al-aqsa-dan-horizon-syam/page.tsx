import type { Metadata } from "next";
import EbookReader from "./ebook-reader";

export const metadata: Metadata = {
  title: "Al-Aqsa dan Horizon Syam — Tim GenSa",
};

export default function EbookReaderPage() {
  return <EbookReader />;
}
