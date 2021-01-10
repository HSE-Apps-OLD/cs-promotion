import React from 'react'
import {section, title, clubs, meetings, events, otherClubInfo} from '../Data'
import {Calendar, Badge, Card, Collapse} from 'antd'
const {Panel} = Collapse


const Clubs = () => {
    const getListData = (value) => {
        const date = {day: value.date(), month: value.month()+1}
        const meetingsFound = meetings.filter((meeting) => {
            return meeting.day == date.day && meeting.month == date.month
        })

        const formattedMeetings = []
        meetingsFound.map((meeting) => {
            var newName = meeting.club.name
            if (newName.indexOf("(") != -1) {
                newName = newName.slice(0, newName.indexOf("(")-1)
            }
            
            formattedMeetings.push({
                type: meeting.club.type,
                content: newName + " @ " + meeting.time
            })
        })

        return formattedMeetings
    }
    
    return (
        <div className="body">
            <div style={title}>CS Clubs At HSE</div>
            <div style={{...section, alignItems:"start"}}>
                <Card style={{borderRadius:"15px", width:"70%", borderColor:"#d9d9d9"}}>
                    <Calendar dateCellRender={(value) =>
                        <div>
                            {getListData(value).map(item => 
                                <Badge status={item.type} text={item.content} />
                            )}
                        </div>
                    }/>
                </Card>
                <div style={{width:"25%"}}>
                    <Collapse style={{backgroundColor:"transparent", borderRadius:"15px", border:"1px solid #d9d9d9"}}>
                        {clubs.map((item, index) => 
                            <Panel
                                header={
                                    <div style={{display:"flex", justifyContent:"space-between"}}>
                                        <div>{item.name}</div>
                                        <a style={{color:"gray", fontWeight:"400"}} href={item.url} target="_blank">Sign Up</a>
                                    </div>
                                }
                                key={index+1}
                            >
                                {item.description}
                            </Panel>
                        )}
                    </Collapse>
                    <Card title="Other Info" size="small" style={{borderColor:"#d9d9d9", borderRadius:"15px", marginTop:"40px", padding:"10px"}}>
                        {otherClubInfo.links.map((item) => 
                            <div style={{margin:"10px 0 10px 0", display:"flex", justifyContent:"space-between"}}>
                                <div>{item.name}</div>
                                <a href="https://zoomer">Link</a>
                            </div>
                        )}
                        <div style={{marginTop:"15px"}}>{otherClubInfo.description}</div>
                    </Card>
                </div>
            </div>

            <div style={title}>Other CS Events</div>
            <div style={{...section, border:"1px solid #d9d9d9", borderRadius:"15px", padding:"15px", display:"block"}}>
                {[0,1].map((evenOdd) => 
                    <div style={{display:"flex", justifyContent:"space-between"}}>
                        {events.map((item, index) => {
                            if (index%2==evenOdd) {
                                return(
                                    <div style={{backgroundColor:"#fafafa", padding:"10px 20px 10px 20px", margin:"10px", borderRadius:"10px", width: 95/(events.length/2) + "%"}}>
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

export default Clubs
