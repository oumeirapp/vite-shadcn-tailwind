// app/page.tsx
"use client"

import {
  ArrowRight,
  BrainCircuit,
  Sparkles,
  Wand2,
} from "lucide-react"


import { Button } from "@/components/ui/button"

import {
  Card,
  CardContent,
} from "@/components/ui/card"

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"


import ShowcaseSection from "@/components/showcase-section"


const showcase = [
  {
    title: "AI Chat",
    desc: "Smart conversations powered by advanced AI.",
  },
  {
    title: "Content Generation",
    desc: "Create articles, emails, and marketing copy.",
  },
  {
    title: "Automation",
    desc: "Automate workflows and repetitive tasks.",
  },
]

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground transition-colors">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-violet-500/5 via-transparent to-transparent dark:from-violet-500/10" />

      {/* Hero */}
      <section className="container mx-auto px-4 py-14 md:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-1 text-sm font-medium text-violet-600 dark:text-violet-300">
            <Sparkles className="mr-2 h-4 w-4" />
            AI Powered Productivity
          </div>

          <h1 className="text-5xl font-bold tracking-tight md:text-7xl leading-tight">
            Build smarter with
            <span className="bg-gradient-to-r from-violet-600 to-cyan-500 bg-clip-text text-transparent">
              {" "}
              AI tools
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            NeuroAI helps creators and teams generate
            content, automate workflows, and build faster
            using intelligent AI tools.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-violet-600 hover:bg-violet-700"
            >
              Start Free
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>

            <Button size="lg" variant="outline">
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      <Testimonial />

      <ShowcaseSection showcase={showcase} />

    </main>
  )
}

function Testimonial(){
  return(
    <section className="container mx-auto px-4 py-4 md:py-8">
      <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-6 items-stretch">
        {/* Left Layout */}
        <div className="hidden lg:block relative h-[520px] w-full max-w-[430px] mx-auto">

          {/* Top Right Card */}
          <div className="absolute top-0 right-0 h-[250px] w-[250px] sm:w-[280px] rounded-[40px] flex items-end justify-between border-4 border-background shadow-2xl">
            <img
              src="https://www.cisco.com/content/dam/cisco-cdc/site/images/heroes/learn/topics/artificial-intelligence/artificial-intel-800x450.png"
              alt="testimonial"
              className="h-full w-full object-cover rounded-[40px]"
            />
          </div>

          {/* Bottom Left Card */}
          <div className="absolute bottom-0 left-0 h-[250px] w-[250px] sm:w-[280px] rounded-[40px] flex items-end justify-between border-4 border-background shadow-2xl">
            <img
              src="https://www.shutterstock.com/image-vector/ai-generate-logo-artificial-intelligence-600nw-2519534733.jpg"
              alt="testimonial"
              className="h-full w-full object-cover rounded-[40px]"
            />
          </div>

        </div>

        {/* Right Content */}
        <div className="rounded-[40px] bg-muted p-8 md:p-12 flex flex-col justify-between min-h-[460px]">
          <div>
            <span className="text-6xl leading-none text-[#f7b19d]">
              “
            </span>

            <p className="mt-6 text-2xl md:text-4xl font-medium leading-snug tracking-tight max-w-4xl">
              Agent 4 unlocks true collaboration and real-time learning —
              now our teams can design and build with our closest partners
              live, turn instant feedback into measurable wins, and deliver
              outcomes that delight customers and partners.
            </p>
          </div>

          <div className="mt-10">
            <h3 className="text-2xl font-semibold">
              Doug Rodermund
            </h3>

            <p className="mt-1 text-lg text-muted-foreground">
              Principal Program Manager
            </p>

            <p className="mt-2 text-muted-foreground">
              Zillow
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}