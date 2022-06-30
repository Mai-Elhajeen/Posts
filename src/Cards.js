import React from 'react'
import './style.css'
function Cards(props) {
    return (
        <div className='cards'>
            <div className='div-img'>
                <img src={props.img} alt='portfolio' />
            </div>

            <div className='content'>
                <div className='head-content'>
                    <h3>{props.title}</h3>
                    <span className='date'>{props.date}</span>
                </div>

                <div className='main-content'>
                    <div className='view'>
                        <i class="ri-eye-fill"></i>
                        <span>{props.view}</span>
                    </div>

                    <div className='like'>
                        <i class="ri-heart-fill"></i>
                        <span>{props.like}</span>
                    </div>

                    <div className='comment'>
                        <i class="ri-message-3-fill"></i>
                        <span>{props.comment}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards