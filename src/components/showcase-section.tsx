"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ShowcaseCarousel({
  showcase
}: {
  showcase: any
}) {
  const [api, setApi] = React.useState<CarouselApi>();

  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(false);

  React.useEffect(() => {
    if (!api) return;

    const update = () => {
      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
    };

    update();

    api.on("select", update);
    api.on("reInit", update);

    return () => {
      api.off("select", update);
      api.off("reInit", update);
    };
  }, [api]);

  const showArrows = canScrollPrev || canScrollNext;

  return (
    <section className="container mx-auto px-4 py-12 md:py-20">
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-bold">
          Built for modern teams
        </h2>

        <p className="mt-4 text-muted-foreground">
          Everything you need to scale with AI.
        </p>
      </div>

      <div className="relative mx-auto max-w-5xl">
        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
          }}
        >
          <CarouselContent>
            {showcase.map((item, index) => (
              <CarouselItem
                key={index}
                className="basis-full sm:basis-1/2 lg:basis-1/3"
              >
                <Card className="h-full">
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
        </Carousel>

        {showArrows && (
          <>
            <button
              onClick={() => api?.scrollPrev()}
              disabled={!canScrollPrev}
              className="absolute left-[-42px] top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border bg-background shadow-md transition-opacity disabled:opacity-40"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <button
              onClick={() => api?.scrollNext()}
              disabled={!canScrollNext}
              className="absolute right-[-42px] top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border bg-background shadow-md transition-opacity disabled:opacity-40"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </>
        )}
      </div>
    </section>
  );
}