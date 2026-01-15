"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const scrollToForm = () => {
    const formElement = document.getElementById("application-form")
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden"
    >
      <div className="absolute inset-0">
        <Image
          src="/images/tenpogaikan.png"
          alt="麺屋 希楽夢 店舗外観"
          fill
          className="object-cover opacity-20"
          priority
        />
      </div>

      <div className="relative z-10 container px-4 py-20">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="flex justify-center">
            <p
              className="w-72 md:w-96 text-center text-3xl md:text-4xl font-semibold uppercase tracking-[0.3em] text-muted-foreground"
              style={{ fontFamily: 'Futura, \"Trebuchet MS\", sans-serif' }}
            >
              recruit
            </p>
          </div>

          <div className="flex justify-center">
            <div className="neuro-outset rounded-3xl p-8 bg-background">
              <Image
                src="/images/toukalogo.png"
                alt="麺屋 希楽夢 ロゴ"
                width={400}
                height={160}
                className="w-72 md:w-96 h-auto"
              />
            </div>
          </div>

          <div className="neuro-outset-lg rounded-3xl p-8 md:p-12 bg-background">
            {/* ✅ここだけ筆文字 */}
            <h1
              className="text-4xl md:text-6xl lg:text-7xl tracking-tight text-center mb-6 text-foreground font-normal leading-[1.05]"
              style={{ fontFamily: 'Zen Kurenaido, sans-serif' }}
            >
              心を込めた一杯を、
              <br />
              あなたの手で。
            </h1>
            <p
              className="text-lg md:text-xl text-center font-medium text-muted-foreground"
              style={{ fontFamily: 'Zen Kurenaido, sans-serif' }}
            >
              麺屋 希楽夢で、あなたの想いを形にしませんか
            </p>
          </div>

          <div className="flex justify-center">
            <Button
              size="lg"
              onClick={scrollToForm}
              className="text-lg px-12 py-7 font-semibold neuro-outset rounded-full bg-primary hover:neuro-pressed text-primary-foreground transition-all duration-200"
            >
              応募する →
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
