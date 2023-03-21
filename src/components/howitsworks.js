import React from 'react'
import '../style/howitsworks.css';
import '../style/homepage.css';
import howitswork1 from "../img/howitswork1.png";
import howitswork2 from "../img/howitswork2.png";
import Galleryimg3 from "../img/Gallery3.png";
import Galleryimg5 from "../img/Gallery5.png";



const Howitsworks = () => {
    return (
        <div>
            <section id="service" class="services pt-0">
                <div class="container" data-aos="fade-up">

                    <div class="section-header">
                        <span>How Its Work</span>
                        <h2>How Its Work</h2>

                    </div>

                    <section id="features" class="features">
                        <div class="container">

                            <div class="row gy-4 align-items-center features-item" data-aos="fade-up">

                                <div class="col-md-5" style={{ border: "2px solid black" }}>
                                    <img src={howitswork1} class="img-fluid" alt="" />
                                </div>
                                <div class="col-md-7">
                                    <h3>1. Login with Valid Credentials</h3>
                                    <p class="fst-italic">
                                    </p>
                                    <ul>
                                        <li><i class="bi bi-check"></i> The user logs in using a unique biometric identifier, such as their fingerprint or facial recognition, for added security and convenience.</li>
                                        <li><i class="bi bi-check"></i> The user enters their email address and password to log in to the website or application.</li>
                                        <li><i class="bi bi-check"></i> The user logs in using their social media account (such as Facebook, Twitter, or Google+) instead of creating a separate account.</li>
                                    </ul>
                                </div>
                            </div>

                            <div class="row gy-4 align-items-center features-item" data-aos="fade-up">
                                <div class="col-md-5 order-1 order-md-2" style={{ border: "2px solid black" }}>
                                    <img src={howitswork2} class="img-fluid" alt="" />
                                </div>
                                <div class="col-md-7 order-2 order-md-1">
                                    <h3>2. Add Project Details and its Employee details and its tasks</h3>

                                    <p>
                                        The employee details page provides information about the employees involved in the project, including their name, job title, contact information, and any relevant skills or qualifications. It also includes a list of their assigned tasks, their progress on those tasks, and any deadlines or important dates.

                                    </p>
                                    <p>
                                        The task details page provides a detailed breakdown of each task involved in the project, including its name, description, due date, priority level, and status (such as "in progress" or "completed"). It also includes a list of the employees assigned to the task, any dependencies or related tasks, and any notes or comments related to the task.

                                    </p>
                                </div>
                            </div>

                            <div class="row gy-4 align-items-center features-item" data-aos="fade-up">
                                <div class="col-md-5" style={{ border: "2px solid black" }}>
                                    <img src={Galleryimg3} class="img-fluid" alt="" />
                                </div>
                                <div class="col-md-7">
                                    <h3>3. Analysis Progress using DashBoard</h3>
                                    <p>Dashboard that provides analysis of project progress can be a valuable tool for project managers to track the status of their projects and make informed decisions. By providing real-time updates, data visualizations, and drill-down capabilities, the dashboard can help the project manager identify issues early.</p>
                                </div>
                            </div>

                            <div class="row gy-4 align-items-center features-item" data-aos="fade-up">
                                <div class="col-md-5 order-1 order-md-2" style={{ border: "2px solid black" }}>
                                    <img src={Galleryimg5} class="img-fluid" alt="" />
                                </div>
                                <div class="col-md-7 order-2 order-md-1">
                                    <h3>4. Can Update and Delete in one click</h3>
                                    <p>
                                    The interface features a single button for updating and deleting items, usually represented by an icon such as a pencil or trash can. When the user clicks the button, a confirmation prompt appears asking them to confirm whether they want to update or delete the item. If the user selects the update option, they are directed to a form where they can make changes to the item. The form may include fields for editing text, selecting options from a drop-down menu, or uploading files. If the user selects the delete option, they are asked to confirm once more before the item is permanently deleted from the system.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </section>
                </div>
            </section>
        </div>
    )
}

export default Howitsworks