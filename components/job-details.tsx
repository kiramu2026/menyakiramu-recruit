"use client"

import { useState } from "react"

const jobDetails = [
  {
    title: "仕事内容",
    content:
      "主婦活躍中！ブランクOK！扶養内勤務◎\n\n◆平日メイン募集◆\n土日はお出かけやプライベートに使える♪\n16時までなので、買い物や夜ご飯の準備にも間に合います★\n短時間OKなので、ブランク明けでも大丈夫！\n※もちろん土日も入ってガッツリ稼ぎたい、という方も歓迎！\n\n週1日～OK！シフト融通★賄い付き！\n券売機なのでオーダー取りなし！\n淡麗系ラーメン店スタッフ大募集！\n\n＜具体的な仕事内容＞\n・テーブル案内\n・配膳\n・カンタンな仕込み・調理補助\n・洗い場 など\n\nメインは接客業務と調理です。券売機導入なので、オーダー取りやレジ業務はなし。お冷もセルフで、サイドメニューもなし。座席18席とこぢんまりとしたお店です。未経験の方はまずできることからでOK! イチから丁寧に教えますので安心してくださいね。",
  },
  {
    title: "勤務地・アクセス",
    content:
      "麺屋 希楽夢\n610-0241 京都府綴喜郡宇治田原町南亥子90-1\n京都京阪バス『亥子停』徒歩1分\nJR『山城青谷駅』『山城多賀駅』より国道307号を車13分\n◎車通勤OK",
  },
  {
    title: "勤務時間",
    content:
      "9:00～16:00（シフト制）\n＊週1日～OK\n＊シフト融通OK!\n＊扶養内勤務OK！\n＊ランチタイムのみの営業店舗です。\n◆定休日/火曜日\n◆年末年始休暇あり",
  },
  {
    title: "給与",
    content:
      "時給1,200円～1,300円\n土日は時給＋50円\n\n【給与例】\n＜平日週4日パート＞\n時給1200円、週4日、1日5時間で勤務。\n月々9万6000円の収入。\n(月4週換算で計算した目安金額です。)",
  },
  {
    title: "待遇・福利厚生",
    content:
      "【保険制度】\n労災保険\n※適用されない社会保険がある理由：法令に則り適用\n【福利厚生】\n交通費規定支給（1日1000円まで）\n美味しい賄いあり（ラーメン・チャーシュー丼など）",
  },
  {
    title: "応募資格・歓迎",
    content:
      "未経験、大歓迎！\n現在スタッフ4名（主婦さん2名・高校生2名）が活躍中！\n＊学生、主婦(夫)、フリーター歓迎！\n＊ブランクOK！久々の仕事復帰も応援\n＊WワークOK！\n『とにかくラーメンが好き』『Wワークで働きたい』『長期で働きたい』など大歓迎！",
  },
  {
    title: "試用期間",
    content:
      "試用期間あり（60時間／時給1122円、本採用と異なる。期間は能力次第で短縮あり）",
  },
]

export function JobDetails() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto space-y-12">
          <div className="neuro-outset-lg rounded-3xl p-8 bg-background">
            <h2
              className="text-4xl md:text-6xl font-bold text-center text-foreground"
              style={{ fontFamily: 'Zen Kurenaido, sans-serif' }}
            >募集要項</h2>
          </div>

          <div className="space-y-4">
            {jobDetails.map((detail, index) => (
              <div key={index} className="neuro-outset rounded-2xl bg-background overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full p-6 md:p-8 lg:p-10 text-left flex justify-between items-center gap-4 hover:bg-muted/50 transition-colors rounded-2xl"
                >
                  <span
                    className="text-xl md:text-3xl lg:text-4xl font-extrabold text-foreground"
                    style={{ fontFamily: 'Zen Kurenaido, sans-serif' }}
                  >{detail.title}</span>
                  <span className="text-2xl font-bold text-primary">{openIndex === index ? "−" : "+"}</span>
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-6 md:px-8 md:pb-8 neuro-inset rounded-b-2xl mx-4 mb-4">
                    <p
                      className="pt-4 text-lg md:text-2xl leading-relaxed whitespace-pre-line text-muted-foreground font-bold"
                      style={{ fontFamily: 'Zen Kurenaido, sans-serif' }}
                    >
                      {detail.content}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


