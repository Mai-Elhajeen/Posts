import React from 'react'

function Cards(props) {
    return (
        <div className='Cards'>
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
                        <i></i>
                        <span>{props.view}</span>
                    </div>

                    <div className='like'>
                        <i></i>
                        <span>{props.like}</span>
                    </div>

                    <div className='comment'>
                        <i></i>
                        <span>{props.comment}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards