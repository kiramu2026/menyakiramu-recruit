"use client"

import { useEffect, useRef } from "react"

const processSteps = [
  {
    step: "01",
    title: "応募",
    description: "フォームから必要事項を入力して送信",
  },
  {
    step: "02",
    title: "ご連絡",
    description: "2〜3営業日以内にご希望の方法でご連絡",
  },
  {
    step: "03",
    title: "面談",
    description: "カジュアルな雰囲気で面談（30分程度）",
  },
  {
    step: "04",
    title: "採用決定",
    description: "条件を確認し、勤務開始日を調整",
  },
]

export function ApplicationProcess() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const children = entry.target.querySelectorAll(".animate-on-scroll")
            children.forEach((child, index) => {
              setTimeout(() => {
                child.classList.add("animate-fade-in-up")
              }, index * 100)
            })
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

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-background">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="neuro-outset-lg rounded-3xl p-8 bg-background">
            <h2 className="text-4xl md:text-6xl font-bold text-center animate-on-scroll opacity-0 text-balance text-foreground">
              応募後の流れ
            </h2>
          </div>

          <div className="space-y-6">
            {processSteps.map((item, index) => (
              <div
                key={index}
                className="neuro-outset rounded-3xl p-8 animate-on-scroll opacity-0 group bg-background hover:neuro-pressed transition-all duration-300"
              >
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-16 h-16 bg-accent rounded-full neuro-outset-sm flex items-center justify-center">
                    <span className="text-xl font-bold text-accent-foreground group-hover:scale-110 transition-transform duration-300">
                      {item.step}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold mb-2 group-hover:text-primary transition-colors duration-300 text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="neuro-outset-lg rounded-3xl p-8 text-center animate-on-scroll opacity-0 bg-muted">
            <p className="text-base font-medium leading-relaxed text-balance text-foreground">
              <strong>ご不明な点がございましたら、お気軽にお問い合わせください。</strong>
              <br />
              <strong>あなたからのご応募をお待ちしています。</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
