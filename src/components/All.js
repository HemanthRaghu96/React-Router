import React from 'react'
import Card from './Card'

const All = () => {
  const data=[
    {
      url:require('../image/1.webp'),
      title:'Introduction to HTML Tags: A Comprehensive Guide With Examples [2024]',
      description:'Creating a website on our own must have been on everyone’s bucket list since the',
      date:'6 February 2024  No Comments'
    },
    {
      url:require('../image/2.webp'),
      title:'Top 17 Best IoT Project Ideas',
      description:'The Internet of Things, or IoT, is all about connecting everyday objects to the internet',
      date:'6 February 2024  No Comments'
    },
    {
      url:require('../image/3.png'),
      title:'Brainstorming in Design Thinking – A Complete Guide',
      description:'Brainstorming is a group activity where we all share ideas to solve problems, especially',
      date:'5 February 2024  No Comments'
    },
    {
      url:require('../image/4.webp'),
      title:'Top 15 B2B Digital Marketing Strategies in 2024 [Updated]',
      description:'It was found that 89% of the B2B buyers research the products online while making the',
      date:'3 February 2024  No Comments'
    },
    {
      url:require('../image/5.jpg'),
      title:'Master JavaScript Frontend Roadmap: From Novice to Expert [2024]',
      description:'Are you eager to learn JavaScript? Want to dive deep into the JavaScript frontend roadmap?',
      date:'2 February 2024  No Comments'
    },
    {
      url:require('../image/6.webp'),
      title:'Best Software Tools for Writing: Elevate Your Writing Skills',
      description:'Whether you’re penning your next bestseller, crafting an engaging blog post, or just jotting down',
      date:'1 February 2024  No Comments'
    },
  ]
  return (
    <section>
    <div className='w-5/6 mx-auto mt-11 grid grid-cols-3'>
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

export default All