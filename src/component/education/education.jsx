import React from "react"
import "./education.css"
import journey from "./journey.png"

class Education extends React.Component {
    render() {
        return (
            <div id="education">
                <h1>My Journey</h1>
                <div className='main'>
                    <img src={journey} alt="" />

                    <div className="box-parent">
                        <div className="box">
                            <div className="box-title">
                                <h2>Higher Education</h2>
                                <h3>2020 - Present</h3>
                            </div>
                            <p>I'm still studying at SMKN 5 TANGERANG majoring in multimedia</p>
                        </div>
                        <div className="box">
                            <div className="box-title">
                                <h2>Employee</h2>
                            </div>
                            <p>currently i study front-end at nutshell</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Education