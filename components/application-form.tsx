"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

type FormData = {
  name: string
  phone: string
  availability: string
  motivation: string
  contactMethod: string
  email: string
}

const INITIAL_FORM_DATA: FormData = {
  name: "",
  phone: "",
  availability: "",
  motivation: "",
  contactMethod: "",
  email: "",
}

const FORM_NAME = "kiramu-recruit"
const FORM_ACTION = "/__forms.html"
const FIELD_NAMES = {
  name: "お名前",
  email: "メールアドレス",
  phone: "電話番号",
  availability: "勤務開始可能日",
  motivation: "志望動機",
  contactMethod: "希望連絡方法",
} as const

export function ApplicationForm() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM_DATA)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSending, setIsSending] = useState(false)
  const [sendError, setSendError] = useState<string | null>(null)

  const totalSteps = 2

  const validateStep = (currentStep: number): boolean => {
    const newErrors: Record<string, string> = {}

    if (currentStep === 1) {
      if (!formData.name.trim()) newErrors.name = "お名前を入力してください"
      if (!formData.phone.trim()) newErrors.phone = "電話番号を入力してください"
      if (!formData.availability.trim()) newErrors.availability = "勤務開始可能日を入力してください"
    }

    if (currentStep === 2) {
      if (!formData.contactMethod) newErrors.contactMethod = "希望連絡方法を選択してください"
      if (formData.contactMethod === "メール") {
        if (!formData.email.trim()) {
          newErrors.email = "メールアドレスを入力してください"
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
          newErrors.email = "正しいメールアドレスを入力してください"
        }
      }
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    if (validateStep(step)) setStep(step + 1)
  }

  const handleBack = () => {
    setStep(step - 1)
    setErrors({})
    setSendError(null)
  }

  // ✅ Netlify Forms へ送信（最後のステップで実行）
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateStep(step)) return

    setIsSending(true)
    setSendError(null)

    try {
      const params = new URLSearchParams()
      params.set("form-name", FORM_NAME) // ← __forms.html の form name と一致
      params.set(FIELD_NAMES.name, formData.name)
      params.set(FIELD_NAMES.email, formData.email) // ✅ここが最重要（__forms.html と一致）
      params.set(FIELD_NAMES.phone, formData.phone)
      params.set(FIELD_NAMES.availability, formData.availability)
      params.set(FIELD_NAMES.motivation, formData.motivation)
      params.set(FIELD_NAMES.contactMethod, formData.contactMethod)
      params.set("bot-field", "") // honeypot

      const res = await fetch(FORM_ACTION, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params.toString(),
      })

      if (!res.ok) throw new Error(`Netlify Forms error: ${res.status}`)

      setIsSubmitted(true)
    } catch (err) {
      console.error(err)
      setSendError("送信に失敗しました。時間をおいて再度お試しください。")
    } finally {
      setIsSending(false)
    }
  }

  if (isSubmitted) {
    return (
      <section id="application-form" className="py-24 md:py-32 bg-muted">
        <div className="container px-4">
          <div className="max-w-2xl mx-auto">
            <div className="neuro-outset-lg rounded-3xl p-12 text-center space-y-6 bg-background">
              <div className="w-24 h-24 mx-auto bg-primary rounded-full neuro-outset flex items-center justify-center">
                <svg className="w-12 h-12 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">応募完了！</h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                ご応募ありがとうございます。
                <br />
                2〜3営業日以内に、ご指定の方法でご連絡します。
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="application-form" className="py-24 md:py-32 bg-muted">
      <div className="container px-4">
        <div className="max-w-2xl mx-auto space-y-12">
          <div className="neuro-outset-lg rounded-3xl p-8 bg-background">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground">応募フォーム</h2>
            <p className="text-center mt-4 font-medium text-muted-foreground">必須項目は＊マーク</p>
          </div>

          <div className="neuro-outset rounded-2xl p-6 bg-background">
            <div className="flex justify-between text-sm font-semibold mb-2 text-foreground">
              <span>
                ステップ {step} / {totalSteps}
              </span>
              <span>{Math.round((step / totalSteps) * 100)}%</span>
            </div>
            <div className="h-4 neuro-inset rounded-full overflow-hidden bg-background">
              <div
                className="h-full bg-primary rounded-full transition-all duration-500"
                style={{ width: `${(step / totalSteps) * 100}%` }}
              />
            </div>
          </div>

          <form
            name={FORM_NAME}
            method="POST"
            action={FORM_ACTION}
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="form-name" value={FORM_NAME} />
            <p className="hidden">
              <label>
                Don’t fill this out: <input name="bot-field" />
              </label>
            </p>

            <div className="neuro-outset rounded-3xl p-8 space-y-6 bg-background">
              {sendError && <p className="text-sm text-destructive font-semibold">{sendError}</p>}

              {step === 1 && (
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-base font-semibold text-foreground">
                      お名前 *
                    </Label>
                    <Input
                      id="name"
                      name={FIELD_NAMES.name}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="山田 太郎"
                      className="neuro-inset text-base p-6 rounded-2xl bg-background border-0"
                    />
                    {errors.name && <p className="text-sm text-destructive font-semibold">{errors.name}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-base font-semibold text-foreground">
                      電話番号 *
                    </Label>
                    <Input
                      id="phone"
                      name={FIELD_NAMES.phone}
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="090-1234-5678"
                      className="neuro-inset text-base p-6 rounded-2xl bg-background border-0"
                    />
                    {errors.phone && <p className="text-sm text-destructive font-semibold">{errors.phone}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="availability" className="text-base font-semibold text-foreground">
                      勤務開始可能日 *
                    </Label>
                    <Input
                      id="availability"
                      name={FIELD_NAMES.availability}
                      value={formData.availability}
                      onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
                      placeholder="即日、2週間後など"
                      className="neuro-inset text-base p-6 rounded-2xl bg-background border-0"
                    />
                    {errors.availability && <p className="text-sm text-destructive font-semibold">{errors.availability}</p>}
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="motivation" className="text-base font-semibold text-foreground">
                      志望動機（任意）
                    </Label>
                    <Textarea
                      id="motivation"
                      name={FIELD_NAMES.motivation}
                      value={formData.motivation}
                      onChange={(e) => setFormData({ ...formData, motivation: e.target.value })}
                      placeholder="希楽夢で働きたい理由をお聞かせください"
                      rows={5}
                      className="neuro-inset text-base p-6 rounded-2xl bg-background border-0"
                    />
                  </div>

                  <div className="space-y-3">
                    <Label className="text-base font-semibold text-foreground">希望連絡方法 *</Label>
                    {["電話", "メール"].map((method) => (
                      <label
                        key={method}
                        className="flex items-center gap-3 p-4 neuro-outset-sm rounded-2xl bg-background cursor-pointer hover:neuro-pressed transition-all"
                      >
                        <input
                          type="radio"
                          name={FIELD_NAMES.contactMethod}
                          value={method}
                          checked={formData.contactMethod === method}
                          onChange={(e) => setFormData({ ...formData, contactMethod: e.target.value })}
                          className="w-5 h-5"
                        />
                        <span className="font-medium text-foreground">{method}</span>
                      </label>
                    ))}
                    {errors.contactMethod && <p className="text-sm text-destructive font-semibold">{errors.contactMethod}</p>}
                  </div>

                  {formData.contactMethod === "メール" && (
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-base font-semibold text-foreground">
                        メールアドレス *
                      </Label>
                      <Input
                        id="email"
                        name={FIELD_NAMES.email}
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="example@email.com"
                        className="neuro-inset text-base p-6 rounded-2xl bg-background border-0"
                      />
                      {errors.email && <p className="text-sm text-destructive font-semibold">{errors.email}</p>}
                    </div>
                  )}
                </div>
              )}
            </div>

            <div className="flex gap-4 mt-8">
              {step > 1 && (
                <Button
                  type="button"
                  onClick={handleBack}
                  className="flex-1 neuro-outset rounded-full bg-background text-foreground hover:neuro-pressed text-base font-semibold py-6 border-0"
                >
                  ← 戻る
                </Button>
              )}

              {step < totalSteps ? (
                <Button
                  type="button"
                  onClick={handleNext}
                  className="flex-1 neuro-outset rounded-full bg-primary text-primary-foreground hover:neuro-pressed text-base font-semibold py-6 border-0"
                >
                  次へ →
                </Button>
              ) : (
                <Button
                  type="submit"
                  disabled={isSending}
                  className="flex-1 neuro-outset rounded-full bg-accent text-accent-foreground hover:neuro-pressed text-base font-semibold py-6 border-0"
                >
                  {isSending ? "送信中…" : "応募する！"}
                </Button>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
