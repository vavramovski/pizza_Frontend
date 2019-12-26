import React, {Component} from 'react';
import $ from "jquery";

class Pizza extends Component {

    constructor(props) {
        super(props);
    }


    funk=()=> {
        var checkedVals = $('.liki:checkbox:checked').map(function () {
            return this.value;
        }).get();
        if (checkedVals.length ===2 ) {
            $("#compare").prop("disabled", false);
            this.props.pici(checkedVals); //MY HOOK
        }
        else $("#compare").prop("disabled", true);
    }

    render() {
        return (
            <p>
                <input onClick={this.funk} className={"liki"} type="checkbox"
                       name="pizza" value={this.props.pizza.name}/> {this.props.pizza.name} {this.props.pizza.description}
            </p>

        );
    }

}

export default Pizza;
