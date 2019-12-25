import React, {Component} from 'react';

class Pizza extends Component {

    render() {
        return (
            <p>
          <input type="radio" name="pizza"/> {this.props.pizza.name} {this.props.pizza.description}
            </p>

        );
    }

}

export default Pizza;
