import { React, useEffect, useRef } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import '../../../App.css';
import 'aos/dist/aos.css';
import logo from '../../../assets/logo.png';
import event1 from '../../../assets/event1.jpeg';
import event2 from '../../../assets/event2.jpeg';
// import event3 from '../../../assets/event3.jpeg';
import event4 from '../../../assets/event4.jpeg';
// import event5 from '../../../assets/event5.jpeg';
// import event6 from '../../../assets/event6.jpeg';
import EventRegistrationForm from './EventRegistrationForm';
import ClientCarousel from './ClientCarousel';

function Home() {
    useEffect(() => {
        AOS.init({
            duration: 1000, // animation duration in ms
            once: true,     // whether animation should happen only once
        });
    }, []);

    const captionRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const captionContainer = captionRef.current;
            if (!captionContainer) return;

            const rect = captionContainer.getBoundingClientRect();
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;

            const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
            const totalHeight = rect.height;
            const percentVisible = (visibleHeight / totalHeight) * 100;

            if (percentVisible >= 80) {
                captionContainer.classList.remove('expanded');
            } else {
                captionContainer.classList.add('expanded');
            }
        };

        window.addEventListener('scroll', handleScroll);
        // Trigger once initially
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div className="hero">
                {/* This is search bar */}
                <div className="container my-3" data-aos="fade-up">
                    <div className="bg-white rounded-3 shadow px-4 py-3 d-flex align-items-center">

                        {/* Search icon and input */}
                        <div className="flex-grow-1 d-flex align-items-center">
                            <i className="bi bi-search fs-5 text-muted me-2"></i>
                            <input
                                type="text"
                                className="form-control border-1 border-secondary-emphasis fw-semibold fs-5"
                                placeholder="Type an event you want to enroll"
                                style={{ outline: 'none', boxShadow: 'none' }}
                            />
                        </div>

                        {/* Search button */}
                        <button className="btn btn-teal ms-3 px-4 rounded">Enroll Event</button>

                        {/* Pricing info box */}
                        <div className="d-flex align-items-center ms-4 px-3 py-2 bg-light rounded-3">
                            <i className="bi bi-briefcase-fill fs-5 text-muted me-2"></i>
                            <div className="text-start">
                                <div className="fw-semibold">250+ events</div>
                                <small className="text-muted">
                                    enrolled for <span className="text-success">free</span>
                                </small>
                            </div>
                        </div>

                    </div>
                </div>
                {/* SEARCH BAR ENDS  */}

                {/* hero background  */}
                <div className="" data-aos="fade-up">
                    <div className="caption-container rounded-3 caption-box expanded" id="captionContainer" ref={captionRef}>
                        <div className="caption text-white text-center">
                            <img src={logo} alt="" style={{ width: '250px', height: 'auto' }} />
                            <p className="fs-1 fw-bold">The web based receipt book</p>
                            <p className="fs-2 fw-bold">- Free Enrollment</p>
                            <p>Receipt record handling dashboard</p>
                            <p>Income and expenditure handler</p>
                            <p className="pb-5">Animated receipt</p>

                            <div className="hero-banner mb-5">
                                <div className="row justify-content-center w-100">
                                    <div className="col-lg-6 rounded-3 bg-white text-dark">
                                        <div className="d-flex justify-content-between mx-3 my-2">
                                            <div className="d-flex align-items-center">
                                                <p className="fs-3 m-0">Enroll Event</p>
                                            </div>
                                            <div className="d-flex align-items-center gap-2">
                                                <span className="fs-5 text-success">Free</span>
                                                <button className="btn btn-dark">Enroll Now</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* HERO SECTION ENDS */}

                {/* MORE FESTIVALS CARDS */}
                <div className="container event-gallery-container mt-5 pt-5">
                    <p className="text-center fs-4 fw-semibold">Make your list of festivals special and innovative</p>
                    <div className="row h-50">
                        <div className="col-lg-6">
                            <div className="image-container" data-aos="fade-right">
                                <img src={event4} alt="" className="event-image p-1 rounded-4" />
                                <div className="event-image-caption">The great jejuri festival</div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="image-container" data-aos="fade-down-left">
                                <img src={event1} alt="" className="event-image p-1 rounded-4" />
                                <div className="event-image-caption">The great Ganpati festival</div>
                            </div>
                            <div className="image-container" data-aos="fade-up-left">
                                <img src={event2} alt="" className="event-image p-1 rounded-4" />
                                <div className="event-image-caption">The great Ganga aarti pujan</div>
                            </div>
                        </div>
                    </div>
                    <br /><br /><br />
                </div>

                <div className="container-fluid festival-block">
                    <div className="row h-100">
                        <div className="col-lg-6 h-100">
                            <img src={event2} alt="" className="festival-img" data-aos="fade-right" />
                        </div>
                        <div className="col-lg-6 text-end">
                            <p className="fs-2" data-aos="fade-right">Great Software for Great Festivals</p>
                            <div className="d-flex justify-content-end" data-aos="fade-left">
                                <div className="w-50">
                                    <p className="text-justify" style={{ textAlign: 'justify' }}>
                                        The Dengi receipt maintaining software is designed to streamline the process of managing
                                        financial contributions during festivals and events. It includes modules for registering
                                        events and authorized users, ensuring that every activity is securely tracked and
                                        managed.
                                        Users can generate and issue receipts for individual donations, with each receipt linked
                                        to its
                                        corresponding event. The software also allows for categorization and management of
                                        donations under specific purposes, enabling better financial organization. The system is
                                        designed
                                        with user roles in mind, providing admin-level access for full control and limited
                                        access for
                                        secondary users.
                                    </p>
                                </div>
                            </div>
                            <div className="d-flex justify-content-end" data-aos="fade-left">
                                <div className="w-50">
                                    <p style={{ textAlign: 'justify' }}>
                                        A key highlight of the application is the ability to generate QR codes for each receipt,
                                        which link to a visually appealing animated receipt that can be shared online through
                                        various
                                        platforms. This enhances transparency and convenience for both donors and organizers.
                                        Additionally, the software maintains a clear record of income and expenditure, providing
                                        users with the ability to generate detailed reports and summaries. These features help
                                        in ensuring
                                        accountability, making it an ideal tool for community-driven or religious event
                                        organizers
                                        who handle public donations and need a reliable system to manage funds effectively.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br /><br />

                {/* EVENT REGISTRATION FORM */}
                <EventRegistrationForm />

                {/* CLIENT CAROUSEL */}
                <ClientCarousel />

                {/* FOOTER */}
                <footer className="footer mt-5 py-4 text-center text-white bg-dark">
                    <div className="container">
                        <p className="mb-1">© 2025 Dengi Receipt System. All Rights Reserved.</p>
                        <small>Developed by Uday Patil</small>
                    </div>
                </footer>


            </div>
        </>
    )
}

export default Home
