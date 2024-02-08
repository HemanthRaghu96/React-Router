import React from 'react'

const Card = ({data}) => {

  //Destructuring props from all the menus.
    const {url,title,description,date}=data 

  return (
    <section>
    {/* Passing all props details into the designed layout */}
    <div  className='w-64 md:w-11/12 h-smallcard md:h-smallcard xl:h-cardheight my-6  mx-6 md:mx-auto shadow-md rounded-md relative'>
        <img src={url} alt={title} className='object-cover rounded-md rounded-bl-none rounded-br-none h-40 w-full'/>
        <h1 className='px-4 py-4 text-xl font-medium font-poppins'>{title}</h1>
        <p className='px-4 text-base text-slate-500 font-light font-poppins'>{description}</p>
        <button className='px-4 py-2 text-green-600 text-sm font-bold font-poppins'>READ MORE</button>
        <div className='absolute bottom-0 w-full'>
        <hr />
        <p className='px-4 py-3 text-sm text-slate-500 font-light font-poppins'>{date}</p>

        </div>
        
        </div>
    </section>
  )
}

export default Card