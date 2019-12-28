import React,{Component} from "react"

class About extends Component{
    render(){
        return(
            <div>
                <div id="colorlib-main">
                    <section className="ftco-section ftco-no-pt ftco-no-pb">
                    <div className="container px-0">
                        <div className="row no-gutters">
                            <div className="col-md-5 ftco-about d-flex flex-column-reverse">
                                <div className="img" style={{backgroundImage: `url(images/ashesh.jpg)` }}></div>
                                <div className="text p-4">
                                    <h3 className="mb-4">Hi! I'm <span>Ashesh Magar</span> I am from Nepal.</h3>
                                    <p>Nepal is a small country but rich in natural resources. Surrounded by himalayas/mountains , Nepal has the tallest mountain of the world i.e Mt. Everest also called Sagarmatha in nepali.</p>
                                    
                                </div>
                            </div>
                            <div className="col-md-7">
                                <div className="row justify-content-end">
                                    <div className="col-md-7 ftco-about">
                                        <div className="img img-2" style={{ backgroundImage: `url(images/ashesh.jpg)` }}></div>
                                        <div className="text p-4">
                                            <h3 className="mb-4">Javascript is the top programming langauges.</h3>
                                            <p>Nepal is a small country but rich in natural resources. Surrounded by himalayas/mountains , Nepal has the tallest mountain of the world i.e Mt. Everest also called Sagarmatha in nepali.</p>
                                        </div>
                                    </div>
                                    <div className="col-md-12 ftco-about">
                                        <div className="text p-4">
                                        <p>Nepal is a small country but rich in natural resources. Surrounded by himalayas/mountains , Nepal has the tallest mountain of the world i.e Mt. Everest also called Sagarmatha in nepali.</p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row px-4 pt-5 mt-md-4 mb-5">
                            <div className="col-md-4">
                                <div className="services text-center">
                                    <h3>Javascript</h3>
                                    <p>This is the description</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="services text-center">
                                    <h3>Python</h3>
                                    <p>This is the description</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="services text-center">
                                    <h3>PHP</h3>
                                    <p>This is the descrpition</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
		</div>
            </div>
        )
    }
}

export default About