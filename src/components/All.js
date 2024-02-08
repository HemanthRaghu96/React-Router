import React from 'react'
import Card from './Card'

const All = () => {
  
  // Passing detailed data to card
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
    },{
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
    },{
      url:require('../image/18.webp'),
      title:'Non-Coding Jobs in Cybersecurity: A Comprehensive Guide',
      description:'In the rapidly evolving field of cybersecurity, there is a common misconception that coding skills',
      date:'4 December 2023  No Comments'
    },
    {
      url:require('../image/19.webp'),
      title:'What Is Hacking? Types of Hacking & More',
      description:'Have you ever wondered what hacking is all about? It’s a big deal in today’s',
      date:'25 September 2023  No Comments'
    },
    {
      url:require('../image/20.webp'),
      title:'Cybersecurity Vs Ethical Hacking: Top 10 Differences',
      description:'Cybersecurity & Ethical hacking and have been key in making sure that your data online',
      date:'27 December 2022  No Comments'
    },
    {
      url:require('../image/21.gif'),
      title:'What is Cybersecurity? Importance and its uses & the growing challenges in 2023!',
      description:'Look around today, you will witness that we are more reliant on technology and devices',
      date:'20 December 2022  1 Comment'
    },
    {
      url:require('../image/22.webp'),
      title:'8 Different Types of Cybersecurity and Threats Involved',
      description:'Cybersecurity refers to the protection of devices, processes, infrastructure, and assets of the organization from',
      date:'9 November 2022  1 Comment'
    },
    {
      url:require('../image/23.webp'),
      title:'Is coding required for cybersecurity? If yes, how crucial is coding for cybersecurity?',
      description:'Many people ask how important is coding for cybersecurity, and the lawyerly answer is: Well,',
      date:'22 June 2022  No Comments'
    },{
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
    <div className='w-96 md:w-11/12 mt-11 md:mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
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

export default All