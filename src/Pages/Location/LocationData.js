import React from "react";
import arrowOpen from "../../Assets/arrow-open.png";
import arrowClose from "../../Assets/arrow-close.png";

class LocationData extends React.Component {
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
        const {name, description, equipments =[]} = this.props;
        return (
            <div>
                <div className="data" onClick={this.handleClick} id="title">
                    <h1>{name} </h1>
                    <img className="arrow location-arrow" src={this.state.isOpen ? arrowOpen : arrowClose} alt="arrow"/>
                </div>

                {
                    this.state.isOpen && (
                        <div id="description" className="location-data">
                            <p className="description location-description">{description}</p>
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

export default LocationData;