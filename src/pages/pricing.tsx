// app/pricing/page.tsx
"use client"

import {
  Check,
  Sparkles,
  Zap,
  Crown,
} from "lucide-react"

import { Button } from "@/components/ui/button"

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"

import {
  Tabs,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

import { toast } from "sonner"

const plans = [
  {
    name: "Starter",
    price: "$0",
    description: "Perfect for individuals exploring AI.",
    icon: Sparkles,
    features: [
      "5 AI requests/day",
      "Basic AI chat",
      "Community support",
      "Limited automation",
    ],
    button: "Get Started",
    popular: false,
  },

  {
    name: "Pro",
    price: "$29",
    description: "For creators and growing teams.",
    icon: Zap,
    features: [
      "Unlimited AI requests",
      "Advanced AI models",
      "Automation workflows",
      "Priority support",
      "Custom templates",
    ],
    button: "Start Pro",
    popular: true,
  },

  {
    name: "Enterprise",
    price: "Custom",
    description: "Advanced AI infrastructure for companies.",
    icon: Crown,
    features: [
      "Unlimited everything",
      "Private AI deployment",
      "Team management",
      "Dedicated support",
      "Custom integrations",
    ],
    button: "Contact Sales",
    popular: false,
  },
]

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-violet-500/5 via-transparent to-transparent" />
      
      {/* Hero */}
      <section className="container mx-auto px-4 pt-24 pb-14">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-1 text-sm font-medium text-violet-600 dark:text-violet-300">
            <Sparkles className="mr-2 h-4 w-4" />
            Simple Pricing
          </div>

          <h1 className="text-5xl font-bold tracking-tight md:text-6xl">
            Pricing built for
            <span className="bg-gradient-to-r from-violet-600 to-cyan-500 bg-clip-text text-transparent">
              {" "}
              modern AI teams
            </span>
          </h1>

          <p className="mt-6 text-lg text-muted-foreground">
            Start free and scale as your AI workflows grow.
            No hidden fees. Cancel anytime.
          </p>

          {/* Billing Tabs */}
          <div className="mt-10 flex justify-center">
            <Tabs defaultValue="monthly">
              <TabsList>
                <TabsTrigger value="monthly">
                  Monthly
                </TabsTrigger>

                <TabsTrigger value="yearly">
                  Yearly
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="container mx-auto px-4 pb-24">
        <div className="grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => {
            const Icon = plan.icon

            return (
              <Card
                key={plan.name}
                className={`relative overflow-hidden border transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${
                  plan.popular
                    ? "border-violet-500 shadow-lg shadow-violet-500/10"
                    : ""
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute right-4 top-4 rounded-full bg-violet-600 px-3 py-1 text-xs font-medium text-white">
                    Most Popular
                  </div>
                )}

                <CardHeader className="pb-4">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/10">
                    <Icon className="h-6 w-6 text-violet-600" />
                  </div>

                  <CardTitle className="text-2xl">
                    {plan.name}
                  </CardTitle>

                  <CardDescription>
                    {plan.description}
                  </CardDescription>

                  <div className="mt-6">
                    <span className="text-5xl font-bold">
                      {plan.price}
                    </span>

                    {plan.price !== "Custom" && (
                      <span className="ml-2 text-muted-foreground">
                        /month
                      </span>
                    )}
                  </div>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-4">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-3 text-sm"
                      >
                        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-violet-500/10">
                          <Check className="h-3 w-3 text-violet-600" />
                        </div>

                        <span className="text-muted-foreground">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter>
                  <Button
                    className={`w-full ${
                      plan.popular
                        ? "bg-violet-600 hover:bg-violet-700"
                        : ""
                    }`}
                    variant={
                      plan.popular ? "default" : "outline"
                    }
                    onClick={() =>
                      toast(plan.name, {
                        description: `${plan.button} clicked`,
                      })
                    }
                  >
                    {plan.button}
                  </Button>
                </CardFooter>
              </Card>
            )
          })}
        </div>
      </section>

      {/* FAQ */}
      <section className="container mx-auto px-4 pb-24">
        <div className="mx-auto max-w-3xl rounded-3xl border bg-card p-10">
          <h2 className="text-3xl font-bold">
            Frequently Asked Questions
          </h2>

          <div className="mt-10 space-y-8">
            <div>
              <h3 className="font-semibold">
                Can I cancel anytime?
              </h3>

              <p className="mt-2 text-muted-foreground">
                Yes, you can cancel your subscription at
                any time with no extra fees.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Do you offer team plans?
              </h3>

              <p className="mt-2 text-muted-foreground">
                Yes, the Enterprise plan includes advanced
                collaboration and admin tools.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Is there a free trial?
              </h3>

              <p className="mt-2 text-muted-foreground">
                The Starter plan is completely free to use.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}