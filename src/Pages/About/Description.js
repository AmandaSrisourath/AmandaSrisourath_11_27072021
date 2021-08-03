import React from "react";
import arrowOpen from "../../Assets/arrow-open.png";
import arrowClose from "../../Assets/arrow-close.png";

class Description extends React.Component {
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
            <div id="be">
                <div onClick={this.handleClick} id="title" className="width-margin-about">
                    <h1 >{name} </h1>
                    <img className="arrow" src={this.state.isOpen ? arrowOpen : arrowClose} alt="arrow"/>
                </div>
                {
                    this.state.isOpen && (
                        <div id="description" className="width-margin-about">
                            <p className="description">{description} </p>
                        </div>
                    )
                }
            </div>
        )
    }
}

export default Description;