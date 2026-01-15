"use client"

import { useEffect, useRef } from "react"

const benefits = [
  {
    title: "温かいチーム",
    description: "経験豊富な先輩たちが、あなたの成長を全力でサポートします。困ったときはいつでも相談できる環境です。",
  },
  {
    title: "成長できる環境",
    description: "調理技術から接客スキルまで、幅広く学べます。将来の夢に繋がる経験が積めます。",
  },
  {
    title: "柔軟なシフト",
    description: "学生さんやWワークの方も歓迎。あなたのライフスタイルに合わせたシフト調整が可能です。",
  },
  {
    title: "安心の待遇",
    description: "昇給制度あり、交通費支給、まかない付き。頑張りをしっかり評価します。",
  },
]

export function Benefits() {
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
    <section ref={sectionRef} className="py-24 md:py-32 bg-muted">
      <div className="container px-4">
        <div className="max-w-5xl mx-auto space-y-16">
          <div className="neuro-outset-lg rounded-3xl p-8 bg-background">
            <h2
              className="text-4xl md:text-6xl font-bold text-center text-foreground"
              style={{ fontFamily: 'Zen Kurenaido, sans-serif' }}
            >
              希楽夢で働く魅力
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="neuro-outset rounded-3xl p-8 animate-on-scroll opacity-0 group bg-background hover:neuro-pressed transition-all duration-300"
              >
                <h3
                  className="text-2xl font-bold mb-4 text-primary group-hover:text-accent transition-colors duration-300"
                  style={{ fontFamily: 'Zen Kurenaido, sans-serif' }}
                >
                  {benefit.title}
                </h3>
                <p
                  className="text-sm leading-relaxed text-muted-foreground"
                  style={{ fontFamily: 'Zen Kurenaido, sans-serif' }}
                >
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
