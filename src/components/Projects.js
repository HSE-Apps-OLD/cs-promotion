import React from 'react'
import {section, title, projects} from '../Data'

import {Card} from 'antd'



const Projects = () => {
    return (
        <div className="body">
            {projects.map((category) => 
                <>
                    <div style={title}>{category.name}</div>
                    <div style={{...section, justifyContent:"space-evenly"}}>
                        {category.projects.map((item) => 
                            <Card 
                                style={{
                                    borderColor:"#d9d9d9", 
                                    borderRadius:"15px", 
                                    width: "28%"
                                }}
                                title={item.name}
                            >
                                <div>{item.description}</div>
                                <div style={{display:"flex", justifyContent:"center"}}>
                                    <img src={item.image} style={{margin:"30px 0", maxHeight:"200px", maxWidth:"100%"}}></img>
                                </div>
                                <div><a href={item.link} target="_blank">Learn More</a></div>
                            </Card>
                        )}
                    </div>
                </>
            )}
        </div>
    )
}

export default Projects
