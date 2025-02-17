// app/components/ReadMore.tsx
"use client";

import { useState } from "react";

interface ReadMoreProps {
  children: React.ReactNode;
  collapsedHeight?: number;
}

const ReadMore = ({ children, collapsedHeight = 120 }: ReadMoreProps) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div>
      <div
        style={{
          maxHeight: expanded ? "none" : `${collapsedHeight}px`,
          overflow: "hidden",
          transition: "max-height 0.3s ease",
        }}
      >
        {children}
      </div>
      <button
        onClick={() => setExpanded((prev) => !prev)}
        className="text-blue-400 underline mt-2 focus:outline-none"
      >
        {expanded ? "Read Less" : "Read More"}
      </button>
    </div>
  );
};

export default ReadMore;
