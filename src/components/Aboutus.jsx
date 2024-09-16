import { info } from 'autoprefixer'
import React from 'react'
const about={
  Topic1:{
    Heading:"About Us",
    Text:"Welcome to Virtual Ca, your trusted partner in navigating the complexities of the tax world. We are dedicated to providing reliable, accurate, and efficient tax services to individuals, businesses, and organizations. Our mission is to simplify the tax process, maximize your financial benefits, and ensure full compliance with the latest tax laws and regulations."
  } ,
  Topic2:{
    Heading:'Our Story',
    Text:"Founded by a team of experienced tax professionals, [Your Tax Website Name] was born out of a passion for helping people understand and manage their taxes more effectively. We understand that tax-related matters can be overwhelming, which is why we are here to provide personalized guidance and support at every step of the way."
  },
  Team:{
    CEO:{
      name:"Dhruv Akte",
      info:'extremely smart and talented individual ',
      pos:"ceo"
    },
    CTO:{
      name:"Prakhar Panchal",
      info:'extremely smart and talented individual ',
      pos:"cto"
    },
    CFO:{
      name:"Mohit Parihar",
      info:'extremely smart and talented individual ',
      pos:"cfo"
    },
    CMO:{
      name:"Sourabh Patil",
      info:'extremely smart and talented individual ',
      pos:"cmo"
    }
  }


}

const Aboutus = () => {
  return (
      
   
    <div >
      <div className=" bg-slate-100 p-10 mt-10 font-mono">
      <h1 className='text-xxl text-slate-800 pl-10 pr-10'>
        {about.Topic1.Heading}  
      </h1>
      <br />
      <p className='text-xs pl-10 pr-10  text-slate-900 '>{about.Topic1.Text}</p>
      </div>
      <div className='bg-slate-200 p-10 '>
        <h1 className='text-center '>OUR TEAM:</h1>
        <div className='flex justify-center'>
          <div className='p-10'>
            <h1>{about.Team.CEO.name}</h1>
            <p>{about.Team.CEO.info}</p>
            <h1>{about.Team.CEO.pos}</h1>
          </div>
          <div className='p-10'>
            <h1>{about.Team.CTO.name}</h1>
            <p>{about.Team.CTO.info}</p>
            <h1>{about.Team.CTO.pos}</h1>
          </div>
          <div className='p-10'>
            <h1>{about.Team.CFO.name}</h1>
            <p>{about.Team.CFO.info}</p>
            <h1>{about.Team.CFO.pos}</h1>
          </div>
          <div className='p-10'>
            <h1>{about.Team.CMO.name}</h1>
            <p>{about.Team.CMO.info}</p>
            <h1>{about.Team.CMO.pos}</h1>
          </div>
        </div>
      </div>


     
    </div>
  )
}

export default Aboutus
