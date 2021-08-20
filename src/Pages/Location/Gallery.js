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
        const {pictures = []} = this.props;
        return (
            <div>
                <img id="location-banner" className="banner" src={pictures[this.state.currentIndex]} alt="location-banner" />
                {pictures.length > 1 && (
                    <React.Fragment>
                        <img className="arrow-previous" onClick={this.previousClick} src={arrowPrevious} alt="arrow-previous" />
                        <img className="arrow-next" onClick={this.nextClick} src={arrowNext} alt="arrow-next"/>
                        <p className="carrousel-text">{this.state.currentIndex +1}/{pictures.length} </p>
                    </React.Fragment>
                )}
            </div>
        )
    }
}

export default Gallery;