import React from "react"
import './sidebar.css'
import logo from'./logo.png'

class Sidebar extends React.Component {
    render () {
    return(
        <div className = "sidebar">
            <div className = "sidebar-profile">
                <img src={logo} alt="Bp" />
                <h1>Bagus Pamungkas</h1>
                <p>baguspgg08@gmail.com</p>
                <div className = "sidebar-nav">
                    <a href="#about">About</a>
                    <a href="#interest">Skills</a>
                    <a href="#education">Journey</a>
                </div>   
            </div>
        </div>
    )}
}

export default Sidebar