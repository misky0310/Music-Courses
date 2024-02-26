import React from 'react'
import { InfiniteMovingCards } from './ui/infinite-moving-cards';

function Testimonials() {

    const musicSchoolTestimonials = [
        {
          quote:
            'Joining the music school transformed my understanding of music and helped me to truly discover my own sound. The instructors are world-class!',
          name: 'Alex Johnson',
          title: 'Guitar Student',
        },
        {
          quote:
            "The community and support at this school are unmatched. I've grown not just as a pianist, but also as a performer, thanks to their comprehensive approach.",
          name: 'Samantha Lee',
          title: 'Piano Student',
        },
        {
          quote:
            "This school offered me the tools and confidence to take my singing to the next level. I'm endlessly grateful for the personalized coaching.",
          name: 'Michael Chen',
          title: 'Vocal Student',
        },
        {
          quote:
            'As a violinist, finding the right mentor can be challenging, but this school matched me with a teacher who truly understands my goals and challenges.',
          name: 'Emily Taylor',
          title: 'Violin Student',
        },
        {
          quote:
            'The production courses here opened my eyes to the intricacies of music production. Highly recommend for any aspiring producers!',
          name: 'Chris Morales',
          title: 'Music Production Student',
        },
      ];


  return (
    <div className='mt-10'>
        <div className='h-[40rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex flex-col items-center justify-center'>
            <h2 className='text-[3rem] pb-10 bg-clip-text text-transparent bg-gradient-to-b from-teal-200 to-slate-900 font-bold'>Hear our Harmony : Voices of Success</h2>
            <div className='h[-40rem]'>
                <InfiniteMovingCards
                    items={musicSchoolTestimonials}
                    direction="right"
                    speed="normal"
                    pauseOnHover={true}
                />
            </div>
        </div>
    </div>
  )
}

export default Testimonials