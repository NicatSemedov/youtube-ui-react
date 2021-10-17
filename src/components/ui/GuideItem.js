import React, { useState } from 'react'

function GuideItem({ name, text }) {

    const Icon = name
    let url = '#'
    const [click, setClick] = useState('');

    const Iconclick = () => {
        setClick('click')
        setTimeout(() => {
            setClick('')
        }, 300);
    }
    return (
        <div className="item">
            <a href={url} className={click} onClick={() => Iconclick()}>
                <div className="guide-icon">{Icon}</div>
                <span>{text}</span>
            </a>
        </div>
    )
}

export default GuideItem
