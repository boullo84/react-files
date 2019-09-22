  import React , {Component} from 'react';

class AboutCompany extends Component{

    render() {
        return(
            <div>
                <section className="p-4 text-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <i className="fa fa-users text-teal fa-4x"/>
                                <h3 className="text-teal font-weight-bold mt-2">Best Faculty Members</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam debitis delectus
                                    eaque eos, est eveniet expedita facere modi nulla quae quaerat reprehenderit soluta
                                    temporibus unde vero? Facilis fuga molestias sequi.</p>
                            </div>
                            <div className="col-md-4">
                                <i className="fa fa-code text-teal fa-4x"/>
                                <h3 className="text-teal font-weight-bold mt-2">Best Coding Skills</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam debitis delectus
                                    eaque eos, est eveniet expedita facere modi nulla quae quaerat reprehenderit soluta
                                    temporibus unde vero? Facilis fuga molestias sequi.</p>
                            </div>
                            <div className="col-md-4">
                                <i className="fa fa-book-reader text-teal fa-4x"/>
                                <h3 className="text-teal font-weight-bold mt-2">Best Course Material</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam debitis delectus
                                    eaque eos, est eveniet expedita facere modi nulla quae quaerat reprehenderit soluta
                                    temporibus unde vero? Facilis fuga molestias sequi.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
export default AboutCompany;