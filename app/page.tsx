"use client"

import { HeroSection } from "@/components/hero-section"
import { JobDescription } from "@/components/job-description"
import { Benefits } from "@/components/benefits"
import { JobDetails } from "@/components/job-details"
import { ApplicationForm } from "@/components/application-form"
import { ApplicationProcess } from "@/components/application-process"

export default function RecruitmentPage() {
  return (
    <>
      <main className="min-h-screen bg-background">
        <HeroSection />
        <JobDescription />
        <Benefits />
        <JobDetails />
        <ApplicationForm />
        <ApplicationProcess />
      </main>
      {/* LP最下部のバナーとボタン */}
      <footer className="flex flex-col items-center gap-8 py-12 bg-background">
        <a href="https://line.me/R/ti/p/@091wotfr" target="_blank" rel="noopener noreferrer">
          <img
            src="/images/bana.png"
            alt="LINE公式アカウント バナー"
            width={520}
            height={146}
            className="shadow-md hover:scale-105 transition-transform"
            style={{ maxWidth: '98vw', height: 'auto' }}
          />
        </a>
        <a
          href="https://menya-kiramu.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-4 bg-primary text-primary-foreground text-xl font-bold rounded-full shadow-lg hover:bg-primary/80 transition-colors"
        >
          希楽夢ホームページに戻る
        </a>
      </footer>
    </>
  )
}
