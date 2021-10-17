import React, { useState, useEffect } from 'react'
import '../style/Header.css'
import Icon from './ui/Icon'
import Logo from './icons/logo'
import Menu from './icons/menu'
import Search from './icons/search'
import Mic from './icons/mic'
import Video from './icons/video'
import Apps from './icons/apps'
import Notification from './icons/notification'

function Header() {

    const [width, setWidth] = useState(window.innerWidth);

    const updateDimensions = () => {
        setWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);

    return (
        <header>
            <div className="start">
                <div className="menu">
                    <Icon icon={<Menu />} />
                    <div className="logo" title="YouTube Home">
                        <Logo />
                    </div>
                </div>
                <span className="country">EN</span>
            </div>
            <div className="center">
                {width > 656 && <>
                    <div className="search">
                        <input placeholder="Search"></input>
                    </div>
                    <div className="search-box">
                        <div className="search-icon">
                            <Search />
                        </div>
                    </div>
                    <Icon icon={<Mic />} cls="mic" tooltip="Search with your voice" />
                </>}
                {width <= 656 &&
                    <div className="md">
                        <Icon icon={<Search />} tooltip="Search" />
                        <Icon icon={<Mic />} tooltip="Search with your voice" />
                    </div>}
            </div>
            <div className="end">
                <Icon icon={<Video />} tooltip="Create" />
                <Icon icon={<Apps />} tooltip="Youtube apps" />
                <Icon icon={<Notification />} tooltip="Notification" />
                <div className="avatar">
                    <div className="photo" />
                </div>
            </div>
            <div className="overlay"></div>
        </header>
    )
}

export default Header