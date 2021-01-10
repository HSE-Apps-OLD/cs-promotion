import React from 'react'
import {section, title, questionList} from '../Data'

import {Button, Card} from 'antd'
import {ArrowRightOutlined, CloseOutlined} from '@ant-design/icons'



const Faq = () => {
    return (
        <div className="body">
            {questionList.map((cat) => 
                <>
                    <div style={title}>{cat.type}</div>
                    <div style={{...section, display:"block"}}>
                        {cat.questions.map((question) => 
                            <div style={{display:"flex", justifyContent:"space-between", marginBottom:"20px", alignItems:"center"}}>
                                <Card title={question.q} style={{borderRadius:"15px", width: "calc(100% - 150px)", borderColor:"#d9d9d9"}}>
                                    {question.a}
                                </Card>
                                {question.link?
                                    <a href={question.link} target="_blank" style={{display:"flex", justifyContent:"center", width:"150px"}}>
                                        <Button ghost type="primary" style={{width:"70px", height:"70px", borderRadius:"15px", margin:"auto"}}>
                                            <ArrowRightOutlined/>
                                        </Button>
                                    </a>
                                :
                                    <Button style={{width:"70px", height:"70px", borderRadius:"15px", margin:"auto", borderColor:"#d9d9d9", color:"#d9d9d9"}}>
                                        <ArrowRightOutlined/>
                                    </Button>
                                }
                            </div>
                        )}
                    </div>
                </>
            )}
        </div>
    )
}

export default Faq

