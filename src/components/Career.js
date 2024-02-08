import React from 'react'
import Card from './Card'

const Career = () => {
  //Passing detailed data to Card
  const data=[
    {
      url:require('../image/24.jpg'),
      title:'Master JavaScript Frontend Roadmap: From Novice to Expert [2024]',
      description:'Are you eager to learn JavaScript? Want to dive deep into the JavaScript frontend roadmap?',
      date:'2 February 2024  No Comments'
    },
    {
      url:require('../image/25.webp'),
      title:'Top Technologies to Learn in 2024: Jumpstart a Successful Tech Career',
      description:'If your New Year resolution consists of building a successful tech career in 2024, then',
      date:'19 January 2024  No Comments'
    },
    {
      url:require('../image/26.jpg'),
      title:'UI/UX Designer Job Description and Roles & Responsibilities',
      description:'UI UX is the abbreviated word that’s been rocking the trend over the years, especially',
      date:'13 December 2023  No Comments'
    },
    {
      url:require('../image/27.webp'),
      title:'Top 5 IT Jobs for Economics Students',
      description:'In today’s digital age, the intersection of economics and technology offers exciting career opportunities for',
      date:'4 December 2023  No Comments'
    },
    {
      url:require('../image/28.webp'),
      title:'Top IT Jobs for Commerce Students: A Lucrative Career Path',
      description:'With the rapid advancement of technology, the demand for IT professionals has soared in recent',
      date:'2 December 2023  No Comments'
    },
    {
      url:require('../image/29.webp'),
      title:'Automation Test Engineer Resume: 10 Important Things To Consider',
      description:'The world is moving towards automating the testing of products in order to increase work',
      date:'1 December 2023  No Comments'
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

export default Career