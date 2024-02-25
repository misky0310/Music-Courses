import React from 'react'
import music_courses from '@/data/music_courses.json'
import FeaturedCourses from "@/components/FeaturedCourses"
import Link from 'next/link';
const FeaturedArea = () => {

    interface Course {
        id: number;
        title: string;
        description: string;
        slug: string;
        isFeatured: boolean;
    }

    const featuredCards= music_courses.courses.filter((course:Course) => course.isFeatured)

  return (
    <div className="mt-16 featured bg-slate-900 py-10  ">
        
        <div>
            <h3 className="text-center md:text-3xl text-xl mb-10 font-semibold text-teal-600">Featured Courses</h3>
            <h1 className="text-center md:text-[3rem] text-3xl mb-10 font-bold">Learn With the Best</h1>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 md:ml-5 grid-cols-1 sm:grid-cols-2 p-4">
          {featuredCards.map((course:Course) => (
            <FeaturedCourses key={course.id} course={course} />
          ))}
        </div>

        <div>
            <Link href={'/courses'}>
                <button className="rounded-full pl-4 pr-1 py-3 text-white flex justify-center items-center space-x-1 bg-black mt-10 text-md font-bold dark:bg-zinc-800 w-[20%] mx-auto">
                Explore Courses
                </button>
            </Link>
        </div>

      </div>
  )
}

export default FeaturedArea;