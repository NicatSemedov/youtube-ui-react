import React from 'react'
import '../style/Chips.css'

function Chips() {
    const chips = [
        'All',
        'Game',
        'JavaScript',
        'Computer Program',
        'Apple',
        'Astronomy',
        'Java',
        'Recently Uploaded',
        'Campfires',
        'Super Heroes',
        'Music',
        'Science Fiction',
        'PUBG',
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
