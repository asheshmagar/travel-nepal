import React, {Component} from "react"
import {Link} from "react-router-dom"

class PageWrapper extends Component{
    render(){
        return(
            <div id="colorlib-page">
                <Link to="#" className="js-colorlib-nav-toggle colorlib-nav-toggle"></Link>
                <aside id="colorlib-aside" role="complementary" className="js-fullheight img">
                    <h1 id="colorlib-logo" className="mb-4"><Link to="/">Nepal </Link></h1>
                    <nav id="colorlib-main-menu" role="navigation">
                        <ul>
                            <li className="colorlib-active"><Link to="/">Home</Link></li>
                            <li><Link to="/travel">Travel</Link></li>
                            <li><Link to="/lifestyle">Lifestyle</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </nav>

                    <div className="colorlib-footer">
                        <div className="mb-4">
                            <h3>Subscribe for newsletter</h3>
                            <form action="#" className="colorlib-subscribe-form">
                                <div className="form-group d-flex">
                                    <div className="icon">
                                        <span className="icon-paper-plane"></span>
                                    </div>
                                    <input type="text" className="form-control" placeholder="Enter Email Address" />
                                </div>
                            </form>
                        </div>
                    </div>
                        
                </aside>
                {this.props.children}
			</div>
        )
    }
}
export default PageWrapper