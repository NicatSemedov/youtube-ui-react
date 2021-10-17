import React from 'react'
import '../style/MiniGuide.css'
import Item from './ui/GuideItem'
import Home from './icons/home'
import Explore from './icons/explore'
import Subs from './icons/subs'
import Library from './icons/library'

function MiniGuide() {
    return (
        <aside>
            <div className="items">
                <Item name={<Home />} text="Home" />
                <Item name={<Explore />} text="Explore" />
                <Item name={<Subs />} text="Subscriptions" />
                <Item name={<Library />} text="Library" />
            </div>
        </aside>
    )
}

export default MiniGuide
