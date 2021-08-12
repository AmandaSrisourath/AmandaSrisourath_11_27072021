import React from "react";
import fullStar from "../../Assets/full-star.png";
import emptyStar from "../../Assets/empty-star.png";

class Rating extends React.Component {
    getStars (rating) {
        const stars = [];
        for (let i = 1; i <= 5; i ++) {
            if (i <= rating) {
                stars.push(<img className="rating" key={i} src={fullStar} alt="full-star" />);
            } else {
                stars.push(<img className="rating" key={i} src={emptyStar} alt="empty-star" />);
            }
        }
        return stars;
    }

    render() {
        const {rating} = this.props;
        return (
            <div id="rating">
                {this.getStars(rating)}
            </div>
        )
    }
}

export default Rating;