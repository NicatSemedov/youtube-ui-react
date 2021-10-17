import React from 'react'
import '../style/Contents.css'
import Content from './Content'

function Contents() {
    return (
        <div className="Contents">
            {[...Array(60)].map((x, i) =>
                <Content key={i} />
            )}
        </div>
    )
}

export default Contents
