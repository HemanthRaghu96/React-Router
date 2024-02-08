import React from 'react'
import Card from './Card'

const CyberSecurity = () => {
  const data=[
    {
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

export default CyberSecurity