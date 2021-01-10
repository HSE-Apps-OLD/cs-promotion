import React from 'react'
import {section, title, projects} from '../Data'

import {Card} from 'antd'



const Projects = () => {
    return (
        <div className="body">
            {projects.map((category) => 
                <>
                    <div style={title}>{category.name}</div>
                    <div style={section}>
                        {category.projects.map((item) => 
                            <Card 
                                style={{
                                    borderColor:"#d9d9d9", 
                                    borderRadius:"15px", 
                                    width: 95/category.projects.length + "%"
                                }}
                                title={item.name}
                            >
                                <div>{item.description}</div>
                                <img src={item.image} style={{width:"100%", margin:"15px 0 15px 0", border:"1px solid #f0f0f0", borderRadius:"10px"}}></img>
                                <a href={item.link}>Learn More</a>
                            </Card>
                        )}
                    </div>
                </>
            )}
        </div>
    )
}

export default Projects
