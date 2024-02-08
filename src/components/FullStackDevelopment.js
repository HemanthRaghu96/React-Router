import React from 'react'
import Card from './Card'

const FullStackDevelopment = () => {
  //Passing detailed data to Card
  const data=[
    {
      url:require('../image/1.webp'),
      title:'Introduction to HTML Tags: A Comprehensive Guide With Examples [2024]',
      description:'Creating a website on our own must have been on everyone’s bucket list since the',
      date:'6 February 2024  No Comments'
    },
    {
      url:require('../image/7.webp'),
      title:'Web Components: A Deep Dive into Reusable and Custom Elements [2024]',
      description:'As a full-stack developer, have you ever got bored of using the same HTML, CSS,',
      date:'22 January 2024  No Comments'
    },
    {
      url:require('../image/8.webp'),
      title:'Top Ways to Assess Soft Skills in Full Stack Developers in 2024',
      description:'When you’re hiring a full-stack developer, what are the most important things you look for?',
      date:'15 November 2023  No Comments'
    },
    {
      url:require('../image/9.webp'),
      title:'Top Differences: Full Stack Developer vs Software Engineer 2024',
      description:'A Full Stack Developer is a tech all-rounder. They work on both the front and',
      date:'15 November 2023  No Comments'
    },
    {
      url:require('../image/10.webp'),
      title:'Horizontal vs Vertical Scaling for Efficient System Design',
      description:'In the world of system design, envision a digital skyscraper – a multifaceted structure built',
      date:'10 November 2023  No Comments'
    },
    {
      url:require('../image/11.webp'),
      title:'Best Books to Learn Full-Stack Development',
      description:'Are you interested in becoming a full-stack developer but not sure where to start? In',
      date:'9 November 2023  No Comments'
    },
  ]
  return (
    <section>
    <div className='w-96 md:w-11/12 mt-11 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
    {/* Maping all the data to Card */}
    {data.map((data,index)=>(
      <Card 
      key={index}
      data={data}
      />
    ))}
    </div>
    </section>
  )
}

export default FullStackDevelopment