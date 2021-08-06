import React from "react";
import arrowPrevious from "../../Assets/arrow-previous.png";
import arrowNext from "../../Assets/arrow-next.png";

class Gallery extends React.Component {
    componentDidMount() {
        const {pictures} = this.props;
        console.log(pictures);
    }

    constructor(props) {
        super(props);
        this.state = {pictures:[], currentIndex:0};
    }

    render() {
        const {pictures = []} = this.props;
        return (
            <div>
                <img id="location-banner" className="banner" src={pictures[this.state.currentIndex]} alt="location-banner"  />
                <img className="arrow-previous prev-next" src={arrowPrevious}/>
                <img className="arrow-next prev-next" src={arrowNext}/>
            </div>
        )
    }
}

export default Gallery;