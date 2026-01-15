"use client"

import Image from "next/image"

export function JobDescription() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="neuro-outset-lg rounded-3xl p-8 bg-background">
            <h2
              className="text-4xl md:text-6xl font-bold text-center text-foreground"
              style={{ fontFamily: 'Zen Kurenaido, sans-serif' }}
            >仕事内容</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="neuro-outset rounded-3xl overflow-hidden bg-background">
              <Image src="/images/tokusio.jpg" alt="特製ラーメン" width={600} height={450} className="w-full h-auto" />
            </div>
            <div className="neuro-outset rounded-3xl p-8 flex flex-col justify-center bg-background">
              <h3
                className="text-2xl md:text-3xl font-bold mb-4 text-foreground"
                style={{ fontFamily: 'Zen Kurenaido, sans-serif' }}
              >一杯に込める想い</h3>
              <p
                className="text-lg md:text-xl leading-relaxed text-muted-foreground"
                style={{ fontFamily: 'Zen Kurenaido, sans-serif' }}
              >
                私たちは一杯一杯に真心を込めて、お客様に最高のラーメンを提供しています。自家製麺にこだわり、じっくり煮込んだスープで、ここでしか味わえない一杯をお届けします。
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "ホール",
                desc: "お客様のご案内、オーダー受付、配膳、レジ対応などをお任せします。明るい笑顔で、お客様に心地よい時間を提供してください。",
              },
              {
                title: "キッチン",
                desc: "調理補助から始めて、徐々に麺の茹で、盛り付け、本格的な調理まで習得していただきます。一つひとつ丁寧に指導します。",
              },
              {
                title: "仕込み",
                desc: "スープやトッピングの仕込み作業を担当。朝の静かな時間に、お店の味を支える大切な仕事です。",
              },
              {
                title: "未経験歓迎",
                desc: "経験は問いません。やる気と笑顔があれば大丈夫です。先輩スタッフが一から丁寧に教えます。",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="neuro-outset rounded-3xl p-8 bg-background hover:neuro-pressed transition-all duration-300"
              >
                <h3
                  className="text-xl md:text-2xl font-bold mb-4 bg-primary text-primary-foreground inline-block px-6 py-2 rounded-full neuro-inset"
                  style={{ fontFamily: 'Zen Kurenaido, sans-serif' }}
                >
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed mt-4 text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="neuro-outset rounded-3xl overflow-hidden bg-background flex flex-col items-center">
              <Image
                src="/images/noren.jpeg"
                alt="麺屋 希楽夢 暖簾"
                width={600}
                height={600}
                className="w-full h-auto"
              />
              <Image
                src="/images/toukalogo.png"
                alt="麺屋 希楽夢 ロゴ"
                width={400}
                height={160}
                className="w-72 md:w-96 h-auto mt-6 rounded-2xl shadow-lg"
                priority
              />



            </div>
            <div className="neuro-outset rounded-3xl overflow-hidden bg-background">
              <Image src="/images/jikaseimen.jpeg" alt="自家製麺" width={600} height={600} className="w-full h-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
