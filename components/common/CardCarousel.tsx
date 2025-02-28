import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function CardCarousel() {
  return (
    <Carousel className="w-full max-w-[260px] sm:max-w-[280px] md:max-w-[320px] lg:max-w-[320px]">
      <CarouselContent>
        {Array.from({ length: 3 }).map((_, index) => (
          <CarouselItem key={index} className="basis-full">

              <Card className="  | bg-gradient-to-r from-gray-800 to-gray-900 |  text-white rounded-xl aspect-[5/3] flex flex-col justify-between p-4">
                {/* Bank Name & Type */}
                <div className="flex justify-between items-center text-xs">
                  <span className="font-semibold">Nimbus Bank</span>
                  <span className="opacity-70">Visa</span>
                </div>

                {/* Card Number */}
                <div className="text-base font-mono tracking-widest text-center">
                  •••• •••• •••• {4567 + index}
                </div>

                {/* Name & Expiry */}
                <div className="flex justify-between text-xs opacity-80">
                  <span>Gia Bao Tran</span>
                  <span>12/26</span>
                </div>


              </Card>

          </CarouselItem>
        ))}
      </CarouselContent>

      {/* Navigation Buttons */}
      <CarouselNext />
      <CarouselPrevious />
    </Carousel>
  );
}
