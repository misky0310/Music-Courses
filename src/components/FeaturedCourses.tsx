"use client";
import React from "react";
import { BackgroundGradient } from "@/components/ui/background-gradient";

import Image from "next/image";
import Link from "next/link";

export default function FeaturedCourses({course}:any) {
  return (
    <div>
      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200 text-center">
          {course.title}
        </p>

        <p className="text-sm text-neutral-600 dark:text-neutral-400 text-center md:h-[40%]">
          {course.description}
        </p>
        <Link href={`/courses/${course.slug}`}>
            <button className="rounded-full pl-4 pr-1 py-3 text-white flex justify-center items-center space-x-1 bg-black mt-4 text-sm font-bold dark:bg-zinc-800 w-1/2 mx-auto">
            Learn More
            </button>
        </Link>
      </BackgroundGradient>
    </div>
  );
}
