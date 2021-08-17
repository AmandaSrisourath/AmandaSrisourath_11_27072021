import React from "react";
import arrowOpen from "../../Assets/arrow-open.png";
import arrowClose from "../../Assets/arrow-close.png";

class Collapse extends React.Component {
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
        const {name, description, equipments=[], className} = this.props;
        return (
            <div className={className}>
                <div id="title" onClick={this.handleClick}>
                    <h1 >{name} </h1>
                    <img className="arrow" src={this.state.isOpen ? arrowOpen : arrowClose} alt="arrow"/>
                </div>
                {
                    this.state.isOpen && (
                        <div className="descriptions">
                            <p className="description">{description} </p>
                            {equipments.map((equipment) =>
                                <p className="description equipments-description" key={equipment}>{equipment}</p>
                            )}
                        </div>
                    )
                }
            </div>
        )
    }
}

export default Collapse;