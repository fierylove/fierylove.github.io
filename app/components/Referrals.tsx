// app/components/Referrals.tsx
"use client";

import React from "react";

const Referrals = () => {
  return (
    <section id="referrals" className="py-12 bg-secondar">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Referrals</h2>

        {/* Use "flex flex-row" (the default is row), and optionally "flex-wrap" if you want them to wrap on smaller screens */}
        <div className="flex flex-wrap items-center justify-center gap-6">

          {/* Card 1 */}
          <div className="bg-primary p-6 rounded shadow w-64 text-center">
            <img
              src="https://placehold.co/30x30?text=V"
              alt="Vulkan Logo"
              className="w-8 h-8 mb-4 mx-auto"
            />
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-primary p-6 rounded shadow w-64 text-center">
            <img
              src="https://placehold.co/30x30?text=O"
              alt="OpenGL Logo"
              className="w-8 h-8 mb-4 mx-auto"
            />
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-primary p-6 rounded shadow w-64 text-center">
            <img
              src="https://placehold.co/30x30?text=U"
              alt="Unity Logo"
              className="w-8 h-8 mb-4 mx-auto"
            />
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-primary p-6 rounded shadow w-64 text-center">
            <img
              src="https://placehold.co/30x30?text=U"
              alt="Unity Logo"
              className="w-8 h-8 mb-4 mx-auto"
            />
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Referrals;
