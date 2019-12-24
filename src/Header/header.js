import React from 'react';
import {Link} from "react-router-dom";

const Header = (props) => {
    return (
        <header>
            <nav className="navbar navbar-expand-md navbar-dark navbar-fixed bg-dark">
                {/*<a className="navbar-brand">Home</a>*/}
                <Link className="nav-link" to={"/"}>Home</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
                        aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            {/*<a className="nav-link">Pizzas</a>*/}
                            <Link className="nav-link" to={"/pizzas"}>Pizzas</Link>
                        </li>
                        <li className="nav-item ">
                            {/*<a className="nav-link">Ingredients</a>*/}
                            <Link className="nav-link" to={"/ingredients"}>Ingredients</Link>
                        </li>
                    </ul>
                    <form className="form-inline mt-2 mt-md-0 ml-3">
                        {/*<a className="btn btn-outline-info my-2 my-sm-0" href="#">Login</a>*/}
                    </form>
                </div>
            </nav>
        </header>
    )
}
export default Header;
