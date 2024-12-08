"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export default function ServicesSection() {
  const cards = data.map((card, index) => (
    <Card key={card.title} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Explore Our Healthcare Services
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = ({ description }) => {
  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
        {description}
      </p>
    </div>
  );
};

const data = [
  {
    category: "Radiology",
    title: "Advanced Radiology Services",
    src: "/images/radiology.jpg", // Path should start with "/"
    content: (
      <DummyContent
        description={
          "Access diagnostic imaging services like X-rays, MRIs, CT scans, and ultrasounds. Essential for diagnosing fractures, internal injuries, tumors, and more."
        }
      />
    ),
  },
  {
    category: "Consultation",
    title: "Expert Medical Consultations",
    src: "/images/consultation.jpg", // Path should start with "/"
    content: (
      <DummyContent
        description={
          "Schedule virtual or in-person appointments with healthcare professionals for medical advice, routine check-ups, or specialized guidance."
        }
      />
    ),
  },
  {
    category: "Diagnostics",
    title: "Comprehensive Diagnostics",
    src: "/images/diagnostics.jpg", // Path should start with "/"
    content: (
      <DummyContent
        description={
          "Book laboratory tests and diagnostic procedures like blood tests, urine tests, and genetic screenings for early detection and prompt treatment."
        }
      />
    ),
  },
  {
    category: "Top Hospitals",
    title: "Find the Best Hospitals",
    src: "/images/hospital.jpg", // Path should start with "/"
    content: (
      <DummyContent
        description={
          "Explore a curated list of top hospitals with detailed profiles on departments, facilities, doctors, and specialized treatments."
        }
      />
    ),
  },
];

