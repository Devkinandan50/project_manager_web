import React, { useContext, useEffect } from 'react'
import ProjectContext from "../context/pro_jects/projectContext";
import Dashboard from './charts/DashBoard';
import { Link, useHistory } from 'react-router-dom'
import '../style/homepage.css';
import mainimg from "../img/mainimg.png";
import successs from "../img/storage-service.jpg";
import Galleryimg1 from "../img/Gallery1.png";
import Galleryimg2 from "../img/Gallery2.png";
import Galleryimg3 from "../img/Gallery3.png";
import Galleryimg4 from "../img/Gallery4.png";
import Galleryimg5 from "../img/Gallery5.png";
import Featimg2 from "../img/feature2.webp";
import Featimg3 from "../img/feature3.jpg";


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
                                        <h1>Analysis Project Progress that help grow businesses</h1>
                                        <h2>Web-application on which you can Analysis your project progress</h2>
                                        <Link to="/signup" class="btn-get-started scrollto">Get Started</Link>
                                    </div>
                                </div>
                                <div class="col-lg-6 order-1 order-lg-2 hero-img" data-aos="fade-left">
                                    {/* <img src="img/mainimg.png" className="img-fluid" alt="" /> */}
                                    <img src={mainimg} alt="success_img" className="img-fluid" />
                                </div>
                            </div>
                        </div>

                    </section>


                    <section id="service" class="services pt-0">
                        <div class="container" data-aos="fade-up">

                            <div class="section-header">
                                <span>Features</span>
                                <h2>Features</h2>

                            </div>

                            <div class="row gy-4">

                                <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
                                    <div class="card">
                                        <div class="card-img" style={{ height: "13rem"}}>
                                            <img src={Galleryimg3} alt="" class="img-fluid" />
                                        </div>
                                        <h3><a class="stretched-link">Responsive Dashboard</a></h3>
                                        <p> Designed a dynamic dashboard with responsive UI that allowed real-time monitoring of key performance metrics for business operations. DashBoard content dashboard with interactive charts and graphs to effectively communicate complex data to users and improve decision-making processes</p>
                                    </div>
                                </div>
                                {/* <!-- End Card Item --> */}

                                <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
                                    <div class="card">
                                        <div class="card-img" style={{ height: "13rem"}}>
                                            <img src={Featimg2} alt="" class="img-fluid" />
                                        </div>
                                        <h3><a class="stretched-link">Email Verification Signup System</a></h3>
                                        <p>Integrated email verification functionality into the signup process, reducing the risk of fake accounts and improving overall user experience.
                                        Security is of paramount importance when it comes to project management, so strong encryption and other security measures to protect sensitive project data.
                                        </p>

                                    </div>
                                </div>
                                {/* <!-- End Card Item --> */}

                                <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
                                    <div class="card">
                                        <div class="card-img" style={{ height: "13rem"}}>
                                            <img src={Featimg3} alt="" class="img-fluid" />
                                        </div>
                                        <h3><a class="stretched-link">Various Login Options</a></h3>
                                        <p>We use 3 login systems email login, face recognition login and google login system. The user enters their email address and password to log in to the website or application. The user logs in using a unique biometric identifier, such as their fingerprint or facial recognition, for added security and convenience.</p>
                                    </div>
                                </div>
                                {/* <!-- End Card Item --> */}

                            </div>

                        </div>
                    </section>
                    {/* <!-- End Services Section --> */}



                    <section id="service" class="services pt-0">
                        <div class="container" data-aos="fade-up">

                            <div class="section-header">
                                <span>GALLERY</span>
                                <h2>Gallery</h2>

                            </div>

                            <div class="row gy-4">

                                <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
                                    <div class="card">
                                        <div class="card-img">
                                            <img src={Galleryimg3} alt="" class="img-fluid" />
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- End Card Item --> */}

                                <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
                                    <div class="card">
                                        <div class="card-img">
                                            <img src={Galleryimg4} alt="" class="img-fluid" />
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- End Card Item --> */}

                                <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
                                    <div class="card">
                                        <div class="card-img">
                                            <img src={Galleryimg5} alt="" class="img-fluid" />
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- End Card Item --> */}
                                <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
                                    <div class="card">
                                        <div class="card-img">
                                            <img src={Galleryimg1} alt="" class="img-fluid" />
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
                                    <div class="card">
                                        <div class="card-img">
                                            <img src={Galleryimg2} alt="" class="img-fluid" />
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </section>
                </>
            )}
        </div>
    )
}
