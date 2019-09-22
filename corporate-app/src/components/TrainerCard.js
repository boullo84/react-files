import React ,{Component} from 'react';

class TrainerCard extends Component{
    render() {
        return(
            <div>
                <div className="card t_card">
                    <div className="card-body">
                        <img src={this.props.address} alt='' className="img-fluid img-thumbnail w-50 rounded-circle t_image"/>
                            <h3 className="mt-2">{this.props.name}</h3>
                            <p className="lead">Trainer</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi dolore, ducimus eos esse
                                eum explicabo ipsum nihil recusandae reiciendis soluta.</p>
                            <div className="d-flex flex-row justify-content-between">
                                <div className="p-2">
                                    <i className="fab fa-facebook-f fa-2x text-teal"/>
                                </div>
                                <div className="p-2">
                                    <i className="fab fa-github fa-2x text-teal"/>
                                </div>
                                <div className="p-2">
                                    <i className="fab fa-twitter fa-2x text-teal"/>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default TrainerCard;