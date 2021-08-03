import React from "react";
import arrowOpen from "../../Assets/arrow-open.png";
import arrowClose from "../../Assets/arrow-close.png";

class Location extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isOpen: false};
    }

    handleClick = () => {
        this.setState({
            isOpen: !this.state.isOpen,
        });
    }

    render() {
        const {name} = this.props;
        const {description} = this.props;
        return (
            <div>
                <div onClick={this.handleClick} id="title">
                    <h1 >{name} </h1>
                    <img className="arrow" src={this.state.isOpen ? arrowOpen : arrowClose} />
                </div>
                {
                    this.state.isOpen && (
                        <div id="description">
                            <p className="description">{description} </p>
                        </div>
                    )
                }
            </div>
        )
    }
}

export default Description;