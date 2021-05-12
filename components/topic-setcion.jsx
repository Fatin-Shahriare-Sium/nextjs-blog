import React, { useEffect } from 'react'
import useSWR from 'swr'

const Topic = () => {
    let fetcher=(url)=>fetch(url).then(res=>res.json())
    let {data,error}=useSWR('http://localhost:5000/post/all',fetcher)
    return (
        <div className='section'>
            <div className="section__title">
                <p>Topics</p>
            </div>
            <div className="section__list">
                <ul>
                    <div className='section__list-item'>
                    <li>Digital Marketing</li>
                    <p>+2</p>
                    </div>

                    <div className='section__list-item'>
                    <li>Credit</li>
                    <p>+2</p>
                    </div>

                    <div className='section__list-item'>
                    <li>Money Earning</li>
                    <p>+2</p>
                    </div>

                    <div className='section__list-item'>
                    <li>Miscellaneous</li>
                    <p>+2</p>
                    </div>

                    <div className='section__list-item'>
                    <li>Civil Enginnering</li>
                    <p>+2</p>
                    </div>
                </ul>
            </div>
        </div>
    )
}

export default Topic;
