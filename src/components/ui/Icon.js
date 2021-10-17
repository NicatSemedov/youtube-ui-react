import React, { useState } from 'react'

function Icon({ icon, tooltip, cls }) {
    const Icon = icon

    const [click, setClick] = useState('');
    const [hover, setHover] = useState(false);

    const Iconclick = () => {
        setClick('icon-click')
        setTimeout(() => {
            setClick('')
        }, 300);
    }

    return (
        <div className={`icon ${cls ? cls : ''} ${click}`}
            onClick={() => Iconclick()}
            onMouseOver={() => setHover(true)}
            onMouseLeave={() => setHover(false)}>
            <span>{Icon}</span>
            {tooltip && hover && <div className="tooltip">{tooltip}</div>}
        </div>
    )
}

export default Icon
