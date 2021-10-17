import React, { useState } from 'react'
import Icon from './ui/Icon'
import Ellipsis from './icons/ellipsis'
function VideoItem() {

    const [ellipsis, setEllipsis] = useState(false)

    const text = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit'

    return (
        <div className="VideoItem"
            onMouseOver={() => setEllipsis(true)}
            onMouseLeave={() => setEllipsis(false)}>
            <div className="content">
                <img className="thumbnail" alt='' onError={() => this.style.opacity = '0'} />
                <div className="details">
                    <div className="chanel-photo" />
                    <div className="texts">
                        <div className="title">
                            {text}{text.length > 60 && '...'}
                        </div>
                        <div className="byline">
                            <div className="channel-name">Channel Name</div>
                            <div className="metaline">
                                <span>1M views</span>
                                <span className="dot">&#8226;</span>
                                <span>1 hour ago</span>
                            </div>
                            {ellipsis &&
                                <div className="ellipsis">
                                    <Icon icon={<Ellipsis />} />
                                </div>}
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default VideoItem
