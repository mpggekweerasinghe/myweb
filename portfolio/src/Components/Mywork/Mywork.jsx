import React from 'react'
import './Mywork.css'
import theme from '../../assets/theme.png'
import mywork_data from '../../assets/mywork_data'
import arrow from '../../assets/arrow2.png'

const Mywork = () => {
  return (
    <div className='mywork'>
        <div className="mywork-title">
            <h1>My latest work</h1>
            <img src={theme} alt=''/>
        </div>
      <div className="mywork-container">
        {mywork_data.map((work, index)=>{
            return <img key={index} src={work.w_img} alt=""/>
        })}

      </div>
      <div className="mywork-showmore">
        <p>Show More</p>
        <img src={arrow} alt=''/>
      </div>
    </div>
  )
}

export default Mywork
