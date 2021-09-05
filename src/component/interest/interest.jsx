import React from "react"
import './interest.css'

class Interest extends React.Component {
    render() {
        return(
            <div id= "interest">
                <h1>What I Do?</h1>
                <div className="box-parent">
                    <div className= "box">
                        <h2>Web Development</h2>
                        <p>I am front end web developer and build websites using HTML, CSS, Javasctipt and ReactJs</p>
                        <div></div>
                    </div>
                    <div className= "box">
                        <h2>Other Interest</h2>
                        <p>I also have a little knowledge of manipulation and vector design with adobe photshop and coreldraw</p>
                        <div></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Interest