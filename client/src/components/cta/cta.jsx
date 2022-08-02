import React from 'react';
import './cta.css';

function Cta({heading, description, href, btnText}) {
    return (
        <div className='banner'>
            <h1>{heading}</h1>
            <p>{description}</p>
            <a href={href} className='button'>{btnText}</a>
        </div>
    )
}

export default Cta;