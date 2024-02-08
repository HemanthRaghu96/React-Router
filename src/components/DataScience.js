import React from 'react'
import Card from './Card'

const DataScience = () => {
  const data=[
    {
      url:require('../image/12.webp'),
      title:'Top 10 High Paying Non-Coding Jobs in Data Science in 2024',
      description:'Are you someone who’s not interested in coding, but wants to get placed in tech',
      date:'28 November 2023  No Comments'
    },
    {
      url:require('../image/13.webp'),
      title:'Impact of Certification Programs on Hiring Data Scientists',
      description:'Data scientists are the creators behind transforming the raw data into edible data insights. These',
      date:'15 November 2023  No Comments'
    },
    {
      url:require('../image/14.webp'),
      title:'Top Product-Based Companies for Data Science Freshers',
      description:'In today’s data-driven world, data science has emerged as a crucial field, with companies harnessing',
      date:'10 November 2023  No Comments'
    },
    {
      url:require('../image/15.webp'),
      title:'What is the Difference between Data Science and Data Engineering?',
      description:'India has been making some serious waves in the world of data. Just like the',
      date:'8 November 2023  No Comments'
    },
    {
      url:require('../image/16.webp'),
      title:'Top 10 Data Science Tools in 2024',
      description:'Data Science is an in-demand profession and will continue growing in the coming years. From',
      date:'1 November 2023  No Comments'
    },
    {
      url:require('../image/17.webp'),
      title:'Best Data Science Books to Learn in 2024',
      description:'Today, we’re going to talk about something really cool: data science. It’s all about using',
      date:'26 October 2023  No Comments'
    },
  ]
  return (
    <section>
    <div className='w-96 md:w-11/12 mt-11 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
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

export default DataScience