import React, {useState, useEffect} from 'react';

import logo from "../images/logo.png";
import hsecourses from '../images/courses.png'
import hseclubs from '../images/clubs.png'
import hseprojects from '../images/projects.png'

import Clubs from './Clubs'
import Courses from './Courses'
import Projects from './Projects'
import Faq from './Faq';

import {Button, Menu, Dropdown} from 'antd';
import {CloseOutlined, MenuOutlined} from '@ant-design/icons';
const block = {display:"flex", justifyContent:"space-between", alignItems:"center", minWidth:"125px"}



const Navbar = () => {
    const [tab, setTab] = useState(0);
    const [drop, setDrop] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);

    const tabs = [
        {name: "Courses", image: <img src={hsecourses} style={{width:"20px"}}/>, component: <Courses/>},
        {name: "Clubs", image: <img src={hseclubs} style={{width:"20px"}}/>, component: <Clubs/>},
        {name: "Projects", image: <img src={hseprojects} style={{width:"20px"}}/>, component: <Projects/>},
        {name: "FAQ", image: <span style={{display: "inline-block", transform: "rotate(45deg) scale(1.2, .9)", filter: "drop-shadow(0 2px #b5daff)", color: "white"}}>&nbsp;?&nbsp;</span>, component: <Faq/>}
    ]
    window.addEventListener("resize", () => {setWidth(window.innerWidth)})
    

    return (
        <div className="App">
            <div style={{
                display:"flex", justifyContent:"space-between", alignItems:"center",
                background:"#357ac4", width:"100%",
                padding:"calc(.2vw + 10px) 25px", margin:"0 -5px"
            }}>
                <div style={block}>
                    <img src={logo} style={{width:"50px"}}/>
                    <div style={{color:"white", fontWeight:"500", fontSize:"24px"}}>HSE CS</div>
                </div>
                {width > 1200?
                    <>
                        <div style={{...block, height:"30px"}}>
                            <Menu 
                                mode="horizontal" 
                                style={{backgroundColor:"transparent", color: "white", borderBottom:"none", fontSize:"16px", width:"500px"}}
                                onClick={(e) => {setTab(e.key)}}
                                defaultActiveFirst={tab}
                            >
                                {tabs.map((item, index) => 
                                    <Menu.Item style={{color:"white"}} key={index}>
                                        <div style={{height:"calc(40px + .4vw + 20px)", display:"flex", alignItems:"center", paddingBottom:"2px"}}>
                                            {item.image}&nbsp; {item.name}
                                        </div>
                                    </Menu.Item>
                                )}
                            </Menu>
                        </div>

                        <div style={{...block, justifyContent: "flex-end"}}>
                            <a href="https://airtable.com/shrgzrUWtOtwXJ67J" target="_blank">
                                <Button ghost shape="round">
                                    Contact Us
                                </Button>
                            </a>
                        </div>
                    </>
                :
                    <>
                        <Dropdown
                            overlay= {
                                <Menu
                                    onClick={(e) => {setTab(e.key)}}
                                    style={{margin:"25px -10px 0 0", background:"gray", borderRadius:"10px"}}
                                >
                                    {tabs.map((item, index) => 
                                        <Menu.Item style={{color:"white", fontSize:"20px"}} key={index+1}>
                                            <div style={{display:"flex", alignItems:"center", padding:"5px 10px"}}>
                                                {item.image}&nbsp; {item.name}
                                            </div>
                                        </Menu.Item>
                                    )}
                                </Menu>
                            }
                            placement="bottomRight"
                            trigger={['click']}
                            onVisibleChange={(e) => {setDrop(e)}}
                        >
                            {drop? <CloseOutlined style={{fontSize:"28px", color:"white"}}/> : <MenuOutlined style={{fontSize:"28px", color:"white"}}/> }
                        </Dropdown>
                    </>
                }
            </div>
            
            
            {tabs[tab].component}
        </div>
    )
}

export default Navbar