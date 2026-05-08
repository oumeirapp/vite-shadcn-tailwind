// app/about/page.tsx
"use client"

import {
  BrainCircuit,
  Sparkles,
  Rocket,
  ShieldCheck,
  Users,
} from "lucide-react"

import { Button } from "@/components/ui/button"

import {
  Card,
  CardContent,
} from "@/components/ui/card"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import { toast } from "sonner"

const values = [
  {
    icon: BrainCircuit,
    title: "AI First",
    description:
      "We build intelligent tools that help people create faster and work smarter.",
  },

  {
    icon: Rocket,
    title: "Fast Innovation",
    description:
      "Modern workflows and rapid iteration allow us to ship powerful features quickly.",
  },

  {
    icon: ShieldCheck,
    title: "Secure & Reliable",
    description:
      "Your data privacy and reliability are at the core of our platform.",
  },

  {
    icon: Users,
    title: "Built for Teams",
    description:
      "Designed for creators, startups, and enterprises collaborating with AI.",
  },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-violet-500/5 via-transparent to-transparent" />
      
      {/* Hero */}
      <section className="container mx-auto px-4 pt-24 pb-16">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-4 inline-flex items-center rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-1 text-sm font-medium text-violet-600 dark:text-violet-300">
            <Sparkles className="mr-2 h-4 w-4" />
            About NeuroAI
          </div>

          <h1 className="text-5xl font-bold tracking-tight md:text-6xl">
            Building the future of
            <span className="bg-gradient-to-r from-violet-600 to-cyan-500 bg-clip-text text-transparent">
              {" "}
              AI productivity
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            NeuroAI helps teams and creators unlock the
            power of artificial intelligence through
            modern tools designed for speed, automation,
            and creativity.
          </p>

          <div className="mt-10 flex justify-center">
            <Button
              size="lg"
              className="bg-violet-600 hover:bg-violet-700"
              onClick={() =>
                toast("Welcome to NeuroAI", {
                  description:
                    "Thanks for exploring our platform.",
                })
              }
            >
              Join the Platform
            </Button>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-4xl font-bold">
              Our Mission
            </h2>

            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              We believe AI should feel intuitive,
              accessible, and genuinely useful. NeuroAI
              was created to simplify complex workflows
              and empower people to focus on creativity,
              strategy, and innovation instead of
              repetitive tasks.
            </p>

            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              From intelligent content generation to AI
              automation, our platform is designed to help
              individuals and teams move faster while
              staying in control.
            </p>
          </div>

          <Card className="border bg-card">
            <CardContent className="p-10">
              <div className="grid gap-8 sm:grid-cols-2">
                <div>
                  <h3 className="text-4xl font-bold text-violet-600">
                    10K+
                  </h3>

                  <p className="mt-2 text-muted-foreground">
                    Active users
                  </p>
                </div>

                <div>
                  <h3 className="text-4xl font-bold text-violet-600">
                    120+
                  </h3>

                  <p className="mt-2 text-muted-foreground">
                    AI workflows
                  </p>
                </div>

                <div>
                  <h3 className="text-4xl font-bold text-violet-600">
                    99.9%
                  </h3>

                  <p className="mt-2 text-muted-foreground">
                    Platform uptime
                  </p>
                </div>

                <div>
                  <h3 className="text-4xl font-bold text-violet-600">
                    24/7
                  </h3>

                  <p className="mt-2 text-muted-foreground">
                    Global support
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Values */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h2 className="text-4xl font-bold">
            What we value
          </h2>

          <p className="mt-4 text-muted-foreground">
            Principles that shape how we build NeuroAI.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => {
            const Icon = value.icon

            return (
              <Card
                key={value.title}
                className="border bg-card transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <CardContent className="p-8">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/10">
                    <Icon className="h-6 w-6 text-violet-600" />
                  </div>

                  <h3 className="text-xl font-semibold">
                    {value.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>

      {/* FAQ */}
      <section className="container mx-auto px-4 py-24">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <h2 className="text-4xl font-bold">
              Frequently Asked Questions
            </h2>

            <p className="mt-4 text-muted-foreground">
              Everything you need to know about NeuroAI.
            </p>
          </div>

          <div className="mt-12 rounded-2xl border bg-card p-6">
            <Accordion
              type="single"
              collapsible
              className="w-full"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  What is NeuroAI?
                </AccordionTrigger>

                <AccordionContent className="text-muted-foreground">
                  NeuroAI is an AI-powered productivity
                  platform that helps users generate
                  content, automate workflows, and build
                  faster with intelligent tools.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>
                  Is there a free plan?
                </AccordionTrigger>

                <AccordionContent className="text-muted-foreground">
                  Yes. We offer a free Starter plan so
                  users can explore the platform before
                  upgrading.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>
                  Can teams collaborate?
                </AccordionTrigger>

                <AccordionContent className="text-muted-foreground">
                  Absolutely. Our Pro and Enterprise plans
                  include collaboration tools for teams
                  and organizations.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>
                  Which AI models do you support?
                </AccordionTrigger>

                <AccordionContent className="text-muted-foreground">
                  NeuroAI supports multiple advanced AI
                  models optimized for chat, automation,
                  and content generation.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger>
                  Is my data secure?
                </AccordionTrigger>

                <AccordionContent className="text-muted-foreground">
                  Yes. Security and privacy are core
                  priorities. We use modern encryption and
                  secure infrastructure to protect your
                  data.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 pb-24">
        <Card className="mx-auto max-w-5xl border bg-gradient-to-br from-violet-500/10 to-cyan-500/10">
          <CardContent className="flex flex-col items-center p-12 text-center">
            <h2 className="text-4xl font-bold">
              Ready to build with AI?
            </h2>

            <p className="mt-4 max-w-2xl text-muted-foreground">
              Join thousands of creators and teams already
              using NeuroAI to work smarter and faster.
            </p>

            <Button
              size="lg"
              className="mt-8 bg-violet-600 hover:bg-violet-700"
              onClick={() =>
                toast("Getting Started", {
                  description:
                    "Your AI workspace is almost ready.",
                })
              }
            >
              Start Free
            </Button>
          </CardContent>
        </Card>
      </section>
    </main>
  )
}