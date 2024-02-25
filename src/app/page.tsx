import FeaturedCourses from "@/components/FeaturedCourses";
import Hero from "@/components/Hero";
import Image from "next/image";
import music_courses from '@/data/music_courser.json'

export default function Home() {
  return (
    <>
      <Hero/>
      
      <div className="mt-16 featured bg-slate-900 py-10 ">
        <h3 className="text-center md:text-3xl text-xl mb-10 font-semibold">Featured Courses</h3>
        <h1 className="text-center md:text-[3rem] text-3xl mb-10 font-bold">Learn With the Best</h1>
        <div className="grid md:grid-cols-3 gap-5 md:ml-5 grid-cols-1 p-4">
          {music_courses.courses.map((item) => {
            if(item.isFeatured) {
              return (
                <FeaturedCourses key={item.id} course={item}/>
              )
            }
          })}
        </div>
      </div>

    </>
  )
}