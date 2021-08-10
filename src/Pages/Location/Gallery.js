import React from "react";
import arrowPrevious from "../../Assets/arrow-previous.png";
import arrowNext from "../../Assets/arrow-next.png";

class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {pictures:[], currentIndex:0};
    }

    previousClick = () => {
        this.setState({
            currentIndex: this.state.currentIndex === 0 ? this.props.pictures.length -1 : this.state.currentIndex -1,
        });
    }

    nextClick = () => {
        this.setState({
            currentIndex: this.state.currentIndex === this.props.pictures.length -1 ? 0 : this.state.currentIndex +1,
        });
    }

    render() {
        console.log(this.state.currentIndex);
        const {pictures = []} = this.props;
        return (
            <div>
                <img id="location-banner" className="banner" src={pictures[this.state.currentIndex]} alt="location-banner" />
                <img className="arrow-previous" onClick={this.previousClick} src={pictures.length > 1 && arrowPrevious} />
                <img className="arrow-next" onClick={this.nextClick} src={pictures.length > 1 && arrowNext} />
                <p className="carrousel-text">{this.state.currentIndex +1}/{pictures.length} </p>
            </div>
        )
    }
}

export default Gallery;