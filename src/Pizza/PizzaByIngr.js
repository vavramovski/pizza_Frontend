import React, {Component} from 'react';

class PizzaByIngr extends Component {

    render() {
        return (
            <div>
                <p>{this.props.pizza.name}  {this.props.pizza.description}</p>

            </div>

        );
    }

}

export default PizzaByIngr;
