import React from 'react'
import './NewsLetters.css'
const NewsLetters = () => {
    return (
        <div className='newsletter'>
            <h1>Get Exclusive Offers on Your E-mail</h1>
            <p>Subscribe to our newletter and stay updated</p>
            <div>
                < input type="email" placeholder='Your Email Id' />
                <button>Subscribe</button>
            </div>
        </div>
    )
}

export default NewsLetters
