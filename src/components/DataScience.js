import React from 'react'
import Card from './Card'

const DataScience = () => {
  const data=[
    {
      url:'https://www.guvi.in/blog/wp-content/uploads/2023/11/Top-10-Data-Science-Tools-1-2048x1072.png',
      title:'Introduction to HTML Tags: A Comprehensive Guide With Examples [2024]',
      description:'Creating a website on our own must have been on everyone’s bucket list since the',
      date:'6 February 2024  No Comments'
    },
    {
      url:'https://www.guvi.in/blog/wp-content/uploads/2023/11/Top-10-Data-Science-Tools-1-2048x1072.png',
      title:'Introduction to HTML Tags: A Comprehensive Guide With Examples [2024] ',
      description:'Creating a website on our own must have been on everyone’s bucket list since the',
      date:'6 February 2024  No Comments'
    },
    {
      url:'https://www.guvi.in/blog/wp-content/uploads/2023/11/Top-10-Data-Science-Tools-1-2048x1072.png',
      title:'Introduction to HTML Tags: A Comprehensive Guide With Examples [2024]',
      description:'Creating a website on our own must have been on everyone’s bucket list since the',
      date:'6 February 2024  No Comments'
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

export default DataScience