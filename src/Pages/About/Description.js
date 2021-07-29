import React from "react";
import arrowOpen from "../../Assets/arrow-open.png";
import arrowClose from "../../Assets/arrow-close.png";

class Description extends React.Component {
    render() {
        const {name} = this.props;
        const {description} = this.props;
        return (
            <div>
                <div id="title">
                    <h1>{ name }</h1>
                    <img className="arrow" src={ arrowOpen } />
                    <img className="arrow" src={ arrowClose } />
                </div>
                <div id="description">
                    <p className="description">{ description }</p>
                </div>
            </div>
        )
    }
}

export default Description;