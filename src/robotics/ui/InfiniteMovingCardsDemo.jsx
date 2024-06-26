"use client";

import React from "react";
import { InfiniteMovingCards } from "./InfiniteMovingCards";

const testimonials = [
  {
    quote:
      "Learning robotics has opened up a world of possibilities for my child. They are now more interested in STEM subjects and their problem-solving skills have improved dramatically.",
    name: "Sarah Johnson",
    title: "Parent",
  },
  {
    quote:
      "Our robotics program has empowered students to think creatively and work collaboratively. It's amazing to see their projects come to life!",
    name: "David Lee",
    title: "Robotics Instructor",
  },
  {
    quote:
      "Introducing robotics into the curriculum has made our students more engaged and excited about learning. They are eager to participate in every class.",
    name: "Emily Davis",
    title: "School Principal",
  },
  {
    quote:
      "Robotics is not just about building machines; it's about building future leaders and innovators. Our students are learning skills that will serve them for a lifetime.",
    name: "Michael Brown",
    title: "Educational Consultant",
  },
  {
    quote:
      "Seeing the joy and sense of accomplishment on my child's face after successfully programming their robot is priceless. Robotics education is truly transformative.",
    name: "Lisa White",
    title: "Parent",
  },
];

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <h1 className="text-2xl font-bold mb-4">Robotics in Children's Education</h1>
      <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
    </div>
  );
}
