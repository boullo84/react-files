import React , {Component} from 'react';

class Navbar extends Component{

    render() {
        return(
            <div>
                {/*  NAVBAR   */}
                <nav className="navbar navbar-expand-md navbar-dark bg-teal">
                    <a className="navbar-brand" href="/">Corporate Website</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="/">Home</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;