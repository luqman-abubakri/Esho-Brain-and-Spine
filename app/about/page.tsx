import type { Metadata } from "next"
import AboutPage from "@/components/AboutPage"

export const metadata: Metadata = {
  title: "About | Esho Brain & Spine Centre",
  description: "About Esho Brain & Spine Centre, specialist neurological care in Osogbo, Nigeria.",
}

export default function Page() {
  return <AboutPage />
}
