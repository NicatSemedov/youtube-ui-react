import React, {useRef, useLayoutEffect} from 'react'
import '../style/Chips.css'

function Chips() {
    const chipRef = useRef(null)
    
    useLayoutEffect(() => {
        chipRef.current.offsetWidth > 100 ?? chipRef.classList.add('bigChip')
    }, [])
    
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
                    <div ref={chipRef} className={`chip ${i === 0 ? 'first' : ''}`} key={i}>
                        <span>{chip}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Chips
