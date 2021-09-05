import React from 'react'
import { Carousel } from 'react-responsive-carousel'; 
import "../../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css";
import hello from './hello.jpg'
import pencil from './pencil.jpg'
import './carousel.css'

class Slide extends React.Component {
    render () {
        return (
            <Carousel className="carousel"   infiniteLoop   transitionTime = {1300}    useKeyboardArrows   autoPlay   interval = {5000}   showThumbs = {false}   showStatus = {false} emulateTouch swipeable>
                <div className="carousel-1">
                    <img src={hello} alt="" />
                    <div className="text">
                        <h1>I'm Bagus</h1>
                        <a href="https://www.google.com">View CV</a>
                    </div>
                </div>
                <div className="carousel-2">
                    <img src={pencil} alt="" />
                    <div className="text">
                        <h1>I Like To Make Something</h1>
                        <a href="https://github.com/BagussP">My Projects</a>
                    </div>
                </div> 
            </Carousel>
        )
    }
}

export default Slide