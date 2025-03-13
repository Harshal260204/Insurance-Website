import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap
import "../styles/Home.css";

const Home = () => {
    return (
        <div>
            {/* Hero Section */}
            <section className="hero d-flex align-items-center">
                <div className="container text-center text-white">
                    <h1 className="display-4 fw-bold">Secure Your Future with Trusted Insurance</h1>
                    <p className="lead">Protect what matters the most with our flexible & affordable plans.</p>
                    <Link to="/plans" className="btn btn-light btn-lg">View Plans</Link>
                </div>
            </section>

            {/* Insurance Plans Overview */}
            <section className="container text-center my-5">
                <h2 className="fw-bold">Explore Our Insurance Plans</h2>
                <div className="row mt-4">
                    <div className="col-md-4">
                        <div className="card shadow-sm">
                            <div className="card-body">
                                <h3 className="text-primary">Health Insurance</h3>
                                <p>Comprehensive coverage for medical emergencies.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card shadow-sm">
                            <div className="card-body">
                                <h3 className="text-primary">Life Insurance</h3>
                                <p>Secure your family's future with the best plans.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card shadow-sm">
                            <div className="card-body">
                                <h3 className="text-primary">Car Insurance</h3>
                                <p>Protection against accidents & damages.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="bg-light py-5">
                <div className="container text-center">
                    <h2 className="fw-bold">How It Works</h2>
                    <div className="row mt-4">
                        <div className="col-md-4">
                            <div className="card border-0 shadow-sm p-3">
                                <span className="fs-1 text-primary">1</span>
                                <h4>Choose a Plan</h4>
                                <p>Select the best insurance plan that suits your needs.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card border-0 shadow-sm p-3">
                                <span className="fs-1 text-primary">2</span>
                                <h4>Apply Online</h4>
                                <p>Fill out the application and submit required documents.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card border-0 shadow-sm p-3">
                                <span className="fs-1 text-primary">3</span>
                                <h4>Get Insured</h4>
                                <p>Once approved, receive your insurance policy instantly.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="container text-center my-5">
                <h2 className="fw-bold">What Our Customers Say</h2>
                <div className="row mt-4 justify-content-center">
                    <div className="col-md-5">
                        <div className="testimonial-card p-3">
                            <p>"The best insurance service I've ever used. Quick & easy!"</p>
                            <h5 className="fw-bold">- Rohan S.</h5>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="testimonial-card p-3">
                            <p>"Great plans at affordable rates. Highly recommended!"</p>
                            <h5 className="fw-bold">- Priya M.</h5>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="container my-5">
                <h2 className="text-center fw-bold">Frequently Asked Questions</h2>
                <div className="accordion mt-4" id="faqAccordion">
                    {/* FAQ Item 1 */}
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
                                What types of insurance do you offer?
                            </button>
                        </h2>
                        <div id="faq1" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                            <div className="accordion-body">
                                We offer health, life, car, and property insurance with flexible plans tailored to your needs.
                            </div>
                        </div>
                    </div>

                    {/* FAQ Item 2 */}
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
                                How do I apply for insurance?
                            </button>
                        </h2>
                        <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                            <div className="accordion-body">
                                Simply select a plan, fill out the online application, and submit the required documents.
                            </div>
                        </div>
                    </div>

                    {/* FAQ Item 3 */}
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3">
                                How long does the approval process take?
                            </button>
                        </h2>
                        <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                            <div className="accordion-body">
                                Most applications are approved within 24-48 hours, depending on document verification.
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* Footer */}
            <footer className="bg-dark text-white text-center py-3">
                <div className="container">
                    <p className="mb-0">&copy; 2025 Insurance Co. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Home;
