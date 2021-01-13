import React from 'react'
import {section, title, courses, recommendations, resources} from '../Data'

import pathways from '../images/Cs_Pathways_2.png'
import headerImage from '../images/headerImage.png'
import {List, Timeline, Descriptions, Card} from 'antd'


const Courses = () => {
    return (
        <div className="body">
            <div style={{backgroundImage: "linear-gradient(to bottom, #f7f5ffa6, #ffffff), url(" + headerImage + ")",
              width:"100vw", height:"32vw", backgroundRepeat: 'no-repeat', backgroundSize: "cover",
              backgroundPosition: "center", top: "0px", zIndex: "-1", position: "absolute"}}></div>

            <div style={{...title, width: "fit-content", margin: "auto", fontSize: "30px"}}>Why Take Computer Science?</div>
            <video controls autoPlay muted controlsList="nodownload" style={{width:"inherit", margin: "40px auto 70px auto", boxShadow: "10px 10px 0px 0px #00000080, 20px 20px 0px 0px #59595936", outline: "none"}}>
                <source src="https://videos.code.org/cs-principles/what-is-cs-principles.mp4" type='video/mp4' />
            </video>

            <div style={title}>Computing Courses At HSE</div>
            <div style={section}>
                <List
                    style={{width:"100%", borderRadius:"15px", marginLeft: "auto", marginRight: "auto"}}
                    dataSource={courses}
                    bordered={true}
                    renderItem={item =>
                        <List.Item >
                            <List.Item.Meta
                                title={item.name}
                                description={item.description}
                            />
                            <a style={{marginLeft:"20px"}} href={item.url} target="_blank">More Info</a>
                        </List.Item>
                    }
                ></List>
            </div>

            <div style={title}>Computer Science Pathways (Prerequisites Web)</div>
            <img src={pathways} style={{width: "80%", margin:"40px 0 80px", boxShadow: "12px 12px 0px 0px #00000080, 24px 24px 0px 0px #59595936", background: "#fafafa"}}/>

            <div style={title}>Sample Schedules for Certain Paths</div>
            <div style={{fontWeight: "500", fontSize: "10px", color: "rgba(0, 0, 0, 0.45)"}}>All courses listed in a particular year are not required</div>
            <div style={section}>
                {["CS", "IT Support"].map((cat) =>
                    <div style={{width:"47.5%"}}>
                        <div style={{textAlign:"center", padding:"10px", fontWeight:"500", border:"1px solid lightgray", borderRadius:"15px 15px 0 0"}}>{cat} Students</div>
                            <Descriptions bordered column={1} style={{marginTop:"-1px"}}>
                            {recommendations[cat].map((item) =>
                                <Descriptions.Item label={item.name}>
                                    <div style={{display:"flex", justifyContent:"space-between", width:"100%"}}>
                                        {[0,1].map((evenOdd) =>
                                            <div style={{width:"50%", display:"flex", flexDirection:"column", alignItems:"center"}}>
                                                {item.courses.map((courseName, index) =>
                                                    <div>
                                                        {index%2==evenOdd &&
                                                            <div>{courseName}</div>
                                                        }
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                </Descriptions.Item>
                            )}
                        </Descriptions>
                    </div>
                )}
            </div>

            <div style={title}>Other Learning Resources</div>
            <div style={{...section, border:"1px solid #d9d9d9", borderRadius:"15px", padding:"15px", display:"block"}}>
                {[0,1].map((evenOdd) =>
                    <div style={{display:"flex", justifyContent:"space-between"}}>
                        {resources.map((item, index) => {
                            if (index%2==evenOdd) {
                                return(
                                    <div style={{backgroundColor:"#fafafa", padding:"10px 20px 10px 20px", margin:"10px", borderRadius:"10px", width: 95/(resources.length/2) + "%"}}>
                                        <div>{item.name}</div>
                                        <div style={{color:"gray", fontSize:"13px"}}>{item.description}</div>
                                        <a style={{fontSize:"13px"}} href={item.link} target="_blank">Learn More</a>
                                    </div>
                                )
                            }
                        })}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Courses
