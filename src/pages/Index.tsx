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

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


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

      {/* Tabs */}
      <section className="container mx-auto px-4 py-8 md:py-16">
        <Tabs
          defaultValue="chat"
          className="mx-auto max-w-4xl"
        >
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="chat">
              AI Chat
            </TabsTrigger>

            <TabsTrigger value="generate">
              Generate
            </TabsTrigger>

            <TabsTrigger value="automate">
              Automate
            </TabsTrigger>
          </TabsList>

          <TabsContent value="chat">
            <FeatureCard
              icon={
                <BrainCircuit className="h-10 w-10 text-violet-500" />
              }
              title="Intelligent Conversations"
              desc="Get instant answers, coding help, and creative support from advanced AI."
            />
          </TabsContent>

          <TabsContent value="generate">
            <FeatureCard
              icon={
                <Sparkles className="h-10 w-10 text-cyan-500" />
              }
              title="Generate Content"
              desc="Create blogs, emails, social posts, and product descriptions instantly."
            />
          </TabsContent>

          <TabsContent value="automate">
            <FeatureCard
              icon={
                <Wand2 className="h-10 w-10 text-pink-500" />
              }
              title="Workflow Automation"
              desc="Automate repetitive tasks and connect your tools using AI."
            />
          </TabsContent>
        </Tabs>
      </section>

      {/* Carousel */}
      <section className="container mx-auto px-4  py-12 md:py-20">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold">
            Built for modern teams
          </h2>

          <p className="mt-4 text-muted-foreground">
            Everything you need to scale with AI.
          </p>
        </div>

        <Carousel className="mx-auto max-w-5xl">
          <CarouselContent>
            {showcase.map((item, index) => (
              <CarouselItem
                key={index}
                className="md:basis-1/2 lg:basis-1/3"
              >
                <Card className="h-full border bg-card">
                  <CardContent className="flex h-64 flex-col justify-between p-6">
                    <div>
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/10">
                        <Sparkles className="h-6 w-6 text-violet-500" />
                      </div>

                      <h3 className="text-xl font-semibold">
                        {item.title}
                      </h3>

                      <p className="mt-3 text-muted-foreground">
                        {item.desc}
                      </p>
                    </div>

                    <Button
                      variant="ghost"
                      className="justify-start px-0"
                    >
                      Learn more →
                    </Button>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>
    </main>
  )
}

function FeatureCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode
  title: string
  desc: string
}) {
  return (
    <Card className="mt-6">
      <CardContent className="flex items-start gap-4 p-8">
        {icon}

        <div>
          <h3 className="text-xl font-semibold">
            {title}
          </h3>

          <p className="mt-2 text-muted-foreground">
            {desc}
          </p>
        </div>
      </CardContent>
    </Card>
  )
}