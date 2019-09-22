import React , {Component} from 'react';
import TrainerCard from "./TrainerCard";

class TrainersSection extends Component{
    render() {
        return(
            <div>
                <section className='p-3 text-center'>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <h1 className='text-teal'>Meet The Trainers</h1>
                                <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, rerum!</p>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-md-3">
                                <TrainerCard address='../images/person1.jpg' name='Laura '/>
                            </div>
                            <div className="col-md-3">
                                <TrainerCard address='../images/person2.jpg' name='Smitha Jones'/>
                            </div>
                            <div className="col-md-3">
                                <TrainerCard address='../images/person3.jpg' name='John Cena'/>
                            </div>
                            <div className="col-md-3">
                                <TrainerCard address='../images/person4.jpg' name='Tom Wilson'/>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
export default TrainersSection;