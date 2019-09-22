import React , {Component} from 'react';

class Footer extends Component{
    render() {
        return(
            <div>
                <footer className="p-3 bg-teal text-white text-center">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-9">
                                <h3>Copyright &copy; 2019 , UiBrains.com</h3>
                                <h6>All Rights Reserved</h6>
                                <h6>Developed & Maintained by
                                    <a className="text-warning" href="https://github.com/thenaveensaggam"
                                       target="_blank">
                                        <i className="fa fa-users"/> UiBrains.com
                                    </a>
                                </h6>
                            </div>
                            <div className="col-md-3">
                                <a href="#" className="btn btn-outline-white btn-block" data-toggle="modal"
                                   data-target="#contact-modal">Contact</a>
                            </div>
                        </div>
                    </div>
                </footer>

            </div>

        );
    }
}
export default Footer;