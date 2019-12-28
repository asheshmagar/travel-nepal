import React,{Component} from "react"
import {Link} from "react-router-dom"


class Contact extends Component{
    render(){
        return(
            <div id="colorlib-main">
                <section className="ftco-section ftco-no-pt ftco-no-pb">
                    <div className="container px-0">
                        <div className="row no-gutters block-9">
                        <div className="col-lg-6 order-md-last">
                            <form action="/contact" method="POST" className="bg-primary p-5 contact-form">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Your Name"/>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Your Email"/>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Subject"/>
                            </div>
                            <div className="form-group">
                                <textarea name="" id="" cols="30" rows="7" className="form-control" placeholder="Message"></textarea>
                            </div>
                            <div className="form-group">
                                <input type="submit" value="Send Message" onClick="alert('message')" className="btn btn-white py-3 px-5"/>
                            </div>
                            </form>
                        
                        </div>

                        <div className="col-lg-6 d-flex">
                            <div id="map" className="bg-light"></div>
                        </div>
                        </div>

                        <div className="row d-flex mb-5 px-4 px-md-4 contact-info mt-5">
                        <div className="col-md-12 mb-4">
                            <h2 className="h3">Contact Information</h2>
                        </div>
                        <div className="w-100"></div>
                        <div className="col-lg-6 col-xl-3 mb-4">
                            <div className="info">
                                <p><span>Address:</span>Kathmandu, Nepal</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-3 mb-4">
                            <div className="info">
                                <p><span>Phone:</span> <Link to="tel://9808888667">+9779808888667</Link></p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-3 mb-4">
                            <div className="info">
                                <p><span>Email:</span> <Link to="mailto:asheshmagar8888667@gmail.com">asheshmagar8888667@gmail.com</Link></p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-3 mb-4">
                            <div className="info">
                                <p><span>Website</span> <Link to="#">www.travel-nepal.com</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
		</div>
        )
    }
}


export default Contact