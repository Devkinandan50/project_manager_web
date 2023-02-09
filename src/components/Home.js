import React, { useContext, useEffect } from 'react'
import ProjectContext from "../context/pro_jects/projectContext";
import Dashboard from './charts/DashBoard';
import '../style/homepage.css';
import success from "../img/mainimg.png";
import successs from "../img/storage-service.jpg";


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


                    <section id="service" class="services pt-0">
                        <div class="container" data-aos="fade-up">

                            <div class="section-header">
                                <span>Features</span>
                                <h2>Features</h2>

                            </div>

                            <div class="row gy-4">

                                <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
                                    <div class="card">
                                        <div class="card-img">
                                            <img src={successs} alt="" class="img-fluid" />
                                        </div>
                                        <h3><a href="service-details.html" class="stretched-link">Storage</a></h3>
                                        <p>Cumque eos in qui numquam. Aut aspernatur perferendis sed atque quia voluptas quisquam repellendus temporibus itaqueofficiis odit</p>
                                    </div>
                                </div>
                                {/* <!-- End Card Item --> */}

                                <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
                                    <div class="card">
                                        <div class="card-img">
                                            <img src={successs} alt="" class="img-fluid" />
                                        </div>
                                        <h3><a href="service-details.html" class="stretched-link">Logistics</a></h3>
                                        <p>Asperiores provident dolor accusamus pariatur dolore nam id audantium ut et iure incidunt molestiae dolor ipsam ducimus occaecati nisi</p>
                                    </div>
                                </div>
                                {/* <!-- End Card Item --> */}

                                <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
                                    <div class="card">
                                        <div class="card-img">
                                            <img src={successs} alt="" class="img-fluid" />
                                        </div>
                                        <h3><a href="service-details.html" class="stretched-link">Cargo</a></h3>
                                        <p>Dicta quam similique quia architecto eos nisi aut ratione aut ipsum reiciendis sit doloremque oluptatem aut et molestiae ut et nihil</p>
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
                                            <img src={successs} alt="" class="img-fluid" />
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- End Card Item --> */}

                                <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
                                    <div class="card">
                                        <div class="card-img">
                                            <img src={successs} alt="" class="img-fluid" />
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- End Card Item --> */}

                                <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
                                    <div class="card">
                                        <div class="card-img">
                                            <img src={successs} alt="" class="img-fluid" />
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- End Card Item --> */}
                                <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
                                    <div class="card">
                                        <div class="card-img">
                                            <img src={successs} alt="" class="img-fluid" />
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
                                    <div class="card">
                                        <div class="card-img">
                                            <img src={successs} alt="" class="img-fluid" />
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
