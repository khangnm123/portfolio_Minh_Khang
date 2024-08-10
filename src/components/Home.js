import React, { useRef } from 'react' 
import CustomHook from './CustomHook';
function Home() {
const scrollTab = useRef();
CustomHook(scrollTab);

return (
    <section ref={scrollTab} className='home'>
        <div className="content">
            <div className="name">
                MY NAME IS <span> Minh Khang</span>
            </div>
            <div className="des">
                {/* 30 */}
                
Full name: Nguyen Minh Khang | School: Cao Thang Technical College | Currently: Graduated and looking for an internship | Experience: 8 months of experience in Website programming with tools and languages ​​such as: HTML CSS JS PHP FrameWork ReactJS, WordPress.
            </div>
            
            <a href="/Nguyễn Minh Khang_CV.pdf" target="_blank" rel="noopener noreferrer" className='animation active '>
                Download My CV
            </a>
        </div>
        <div className="avatar">
            <div className="card">
                <img src="/453999555_486246077503537_881863214406047805_n.jpg" alt="" />
                <div className="info">
                    <div>Front-End Developer</div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Home
