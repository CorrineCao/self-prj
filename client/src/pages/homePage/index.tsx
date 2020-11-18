import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import StatePng from 'images/base/state.png';
import AudioListPng from 'images/base/audio-list.png';
import './index.less';

const HomePage =(props: RouteComponentProps) => {
//   const [count, setCount] = useState(0);

  return (
    <div className="self-home-page">
        <header>
            <img className="base-header-image" src={StatePng} alt="" />
        </header>
        <article>
            <h1>欢迎来到CorrineCao个人主页</h1>
        </article>
        <footer className="btn-area">
            <div>
                <div className="base-icon audio-list"></div>
                <div>音乐</div>
            </div>
            <div>
                <div className="base-icon record"></div>
                <div>录制</div>
            </div>
            <div>
                <div className="base-icon shopping"></div>
                <div>购物</div>
            </div>
            <div>
                <div className="base-icon more"></div>
                <div>更多</div>
            </div>
        </footer>
    </div>
  );
}

export default HomePage;