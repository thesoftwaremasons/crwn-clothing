import React from 'react'
import App from './App';
import './homepage.style.scss'

const HomePage=()=>(
    <div class="homepage">
        <div className="directory-menu">
            <div className="menu-item">
                <div className="content">
                    <div className="title">HATS</div>
                    <span className="subTitle">SHOP NOW</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <div className="title">JACKETS</div>
                    <span className="subTitle">SHOP NOW</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <div className="title">SNEAKERS</div>
                    <span className="subTitle">SHOP NOW</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <div className="title">WOMEN</div>
                    <span className="subTitle">SHOP NOW</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <div className="title">MEN</div>
                    <span className="subTitle">SHOP NOW</span>
                </div>
            </div>
        </div>
    </div>
);
export default HomePage