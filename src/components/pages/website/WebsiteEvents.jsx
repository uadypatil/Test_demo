import { React, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Required for dropdowns & toggler
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../../App.css';
import NavbarCustom from '../includes/NavbarCustom';
import EventCard from '../../utils/EventCard'

import image1 from '../../../assets/event1.jpeg';
import image2 from '../../../assets/event2.jpeg';
import image3 from '../../../assets/event5.jpeg';



const cardData = [
    {
        image: image1,
        title: 'Shivtandav Ganeshotsav',
        description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
        address: 'Ravivar Karanja, Panchavati, Nashik',
        link: 'https://example.com',
    },
    {
        image: image2,
        title: 'Ganga Aarti',
        description: 'Ganga aarti at godavari ghat, Ram Kund, panchavati.',
        address: 'Ram Kund, Panchavati, Nashik',
        link: 'https://example.com/second',
    },
    {
        image: image3,
        title: 'Colours Holi',
        description: 'Play colors holi in nashik.',
        address: 'Chandicha Ganpati, Ravivar Karanja, Nashik',
        link: 'https://example.com/second',
    },
    // Add more objects as needed
];


function WebsiteEvents() {
    useEffect(() => {
        AOS.init({
            duration: 1000, // animation duration in ms
            once: true,     // whether animation should happen only once
        });
    }, []);

    return (
        <>
            <NavbarCustom />

            <div className="website-events-main-wrapper">
                <div className="container">
                    <div className="row mt-3 mx-2">
                        <div className="col-12">
                            <h1 className="text-center">
                                Live Events
                            </h1>
                        </div>
                    </div>

                    {/* SEARCH NERABY EVENTS */}
                    <div className="row mt-3 card py-4 mx-2 shadow">
                        <div className="col-12">
                            <h3 className="text-center">
                                Search nearby events
                            </h3>
                        </div>
                        <div className="col-12 mt-3">
                            <div className="d-flex justify-content-center">
                                <div className="d-flex gap-4 w-75 search-nearby-events-fields">
                                    <select name="" id="" className='form-control'>
                                        <option value="" selected disabled>Select city name</option>
                                    </select>
                                    <select name="" id="" className='form-control'>
                                        <option value="" selected disabled>Select event name</option>
                                    </select>
                                    <button className="btn btn-success">Search</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container mt-3">
                    <div className="row justify-content-center">
                        {cardData.map((card, index) => (
                            <EventCard
                                key={index}
                                image={card.image}
                                title={card.title}
                                description={card.description}
                                address={card.address}
                                link={card.link}
                            />
                        ))}
                        {/* You can duplicate this block to add more cards */}
                    </div>
                </div>

            </div>


        </>
    );
}

export default WebsiteEvents;