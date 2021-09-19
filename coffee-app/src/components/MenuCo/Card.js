import React from 'react'
import './Card.css'
import ReactCardFlip from 'react-card-flip';


class Card extends React.Component {
    constructor() {
        super();
          this.state = {
          isFlipped: false
        };
        this.handleClick = this.handleClick.bind(this);
      }
    
      handleClick(e) {
        e.preventDefault();
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
      }
    
    render() {
    return (
        <ReactCardFlip className="CardComponents" isFlipped={this.state.isFlipped} flipDirection="horizontal" >
        <div className="front" onClick={this.handleClick}>
        <div className="cardheader">
                    <h3>{this.props.name}</h3>
                </div>
                <div className="cardimage">
                    <img class="cardimage" src={this.props.image} alt=""></img>
                </div>
                <div>
                    <p className="cardtext">{this.props.description}</p>
                </div>
        </div>

        <div className="back" onClick={this.handleClick}>
                <h5>Calories: {this.props.calories}</h5>
                <h5>Fat: {this.props.fat}</h5>
                <h5>Cholesterol: {this.props.cholesterol}</h5>
                <h5>Sodium: {this.props.sodium}</h5>
                <h5>Carbohydrates: {this.props.carbohydrates}</h5>
                <h5>Sugar: {this.props.sugar}</h5>
                <h5>Protein: {this.props.protein}</h5>
                <h5>Caffeine: {this.props.caffeine}</h5>
                <h6>Substitutions are available upon request</h6>
                <h6>*2,000 calories a day is used for general nutrtion</h6>
                </div>
        </ReactCardFlip>
    )
}
}

export default Card
