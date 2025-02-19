"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"; // Adjust the import path as needed

interface Referral {
  name: string;
  profileImage: string;
  title: string;
  connection: string;
  message: string;
  date: string;
}

interface ReferralsProps {
  referrals: Referral[];
}

const Referrals: React.FC<ReferralsProps> = ({ referrals }) => {
  return (
    <section id="referrals" className="py-12 bg-secondary">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Referrals</h2>
        <Carousel
          className="relative"
          opts={{
            slidesToScroll: 1,
            containScroll: "trimSnaps",
            align: "start",
          }}
        >
          {/* Adjust the spacing here: add a negative left margin to offset the padding on items */}
          <CarouselContent className="-ml-2 flex">
            {referrals.map((referral, index) => (
              <CarouselItem
                key={index}
                className="pl-2 basis-1/3"  // Each card takes 1/3 of the width
              >
                <div className="bg-primary p-6 rounded shadow text-center">
                  <img
                    src={referral.profileImage}
                    alt={`${referral.name} profile picture`}
                    className="w-24 h-24 rounded-full mb-4 mx-auto"
                  />
                  <h3 className="text-lg font-semibold">{referral.name}</h3>
                  <p className="text-sm text-gray-300">{referral.title}</p>
                  <p className="text-xs text-gray-400 mb-2">
                    {referral.connection}
                  </p>
                  <p className="text-sm italic">{`"${referral.message}"`}</p>
                  <p className="text-xs text-gray-500 mt-2">{referral.date}</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2" />
          <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2" />
        </Carousel>
      </div>
    </section>
  );
};

export default Referrals;
