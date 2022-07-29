import React from 'react'
import '../style/Chips.css'

function Chips() {
    const chips = [
        'All',
        'Game',
        'JavaScript',
        'Computer',
        'Apple',
        'Astronomy',
        'Java',
        'Science',
        'Campfires',
        'Python',
        'Super Heroes',
        'Music',
        'PUBG',
        'React',
        'Next Js',
        'Building'
    ]
    return (
        <div className="ChipHeader">
            <div className="Slider">
                <div className="border" />
                {chips.map((chip, i) => (
                    <div className={`chip ${i === 0 ? 'first' : ''}`} key={i}>
                        {chip}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Chips
