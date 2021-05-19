import { useEffect, useState } from 'react'
import Loading from './hooks/loading'
const Topic = () => {
    
    let[topics,setTopics]=useState('')
    useEffect(()=>{
        fetch('https://next-blogx.herokuapp.com/topic')
        .then(res=>res.json())
        .then(data=>setTopics(data.topic))
        
    },[])
   
    return (
        <div className='section'>
            <div className="section__title">
                <p>Topics</p>
            </div>
           {topics?  <div className="section__list">
                <ul>
                    <div className='section__list-item'>
                    <li>Digital Marketing</li>
                    <p>{topics.digital.length}</p>
                    </div>

                    <div className='section__list-item'>
                    <li>Credit</li>
                    <p>{topics.credit.length}</p>
                    </div>

                    <div className='section__list-item'>
                    <li>Money Earning</li>
                    <p>{topics.money.length}</p>
                    </div>

                    <div className='section__list-item'>
                    <li>Miscellaneous</li>
                    <p>{topics.miscellaneous.length}</p>
                    </div>

                    <div className='section__list-item'>
                    <li>Civil Enginnering</li>
                    <p>{topics.civil.length}</p>
                    </div>
                </ul>
            </div> :<Loading/>}
        </div>
    )
}

export default Topic;
