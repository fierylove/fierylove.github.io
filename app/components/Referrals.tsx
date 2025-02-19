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
  message: string;
  date: string;
}

interface ReferralsProps {
  referrals: Referral[];
}

const Referrals: React.FC<ReferralsProps> = ({ referrals }) => {
  // If there are fewer than 3 referrals, no carousel is needed.
  if (referrals.length < 3) {
    return (
      <section id="referrals" className="py-12 bg-secondary">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Referrals</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {referrals.map((referral, index) => (
              <div
                key={index}
                className="bg-primary p-6 rounded shadow text-center w-full sm:w-1/2 md:w-1/3"
              >
                <img
                  src={referral.profileImage}
                  alt={`${referral.name} profile picture`}
                  className="w-24 h-24 rounded-full mb-4 mx-auto"
                />
                <h3 className="text-lg font-semibold">{referral.name}</h3>
                <p className="text-sm text-gray-400">{referral.title}</p>
                <p className="text-sm italic">{`"${referral.message}"`}</p>
                <p className="text-xs text-gray-500 mt-2">{referral.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // If there are 3 or more referrals, render the carousel.
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
          {/* Negative margin to offset the left padding on items */}
          <CarouselContent className="-ml-2 flex">
            {referrals.map((referral, index) => (
              <CarouselItem key={index} className="pl-2 basis-1/3">
                <div className="bg-primary p-6 rounded shadow text-center">
                  <img
                    src={referral.profileImage}
                    alt={`${referral.name} profile picture`}
                    className="w-24 h-24 rounded-full mb-4 mx-auto"
                  />
                  <h3 className="text-lg font-semibold">{referral.name}</h3>
                  <p className="text-sm text-gray-400">{referral.title}</p>
                  {/* <p className="text-xs text-gray-400 mb-2">
                    {referral.connection}
                  </p> */}
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
