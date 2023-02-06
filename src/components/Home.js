import React, { useContext, useEffect } from 'react'
import ProjectContext from "../context/pro_jects/projectContext";
import Dashboard from './charts/DashBoard';
import '../style/homepage.css';
import success from "../img/mainimg.png";


export const Home = () => {
    const context = useContext(ProjectContext);
    const { checK_loginOr_not } = context;

    return (
        <div>
            {checK_loginOr_not ? (
                <>
                    <div className="my-3">
                        < Dashboard />
                    </div>
                </>
            ) : (
                <>
                    <section id="hero">

                        <div class="container">
                            <div class="row">
                                <div class="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center" data-aos="fade-up">
                                    <div>
                                        <h1>We design digital products that help grow businesses</h1>
                                        <h2>We are team of talented designers making websites with Bootstrap</h2>
                                        <a href="/signup" class="btn-get-started scrollto">Get Started</a>
                                    </div>
                                </div>
                                <div class="col-lg-6 order-1 order-lg-2 hero-img" data-aos="fade-left">
                                    {/* <img src="img/mainimg.png" className="img-fluid" alt="" /> */}
                                    <img src={success} alt="success_img" className="img-fluid" />
                                </div>
                            </div>
                        </div>

                    </section>
                </>
            )}
        </div>
    )
}
