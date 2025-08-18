import React, { useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { useParams } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../../App.css';
import qrcode from '../../../assets/qrcode.png'
import ganesha from '../../../assets/animatedganesha.png'
import html2canvas from "html2canvas";
// import { decryptData } from '../../utils/Encryption'; // adjust path as needed

function DonerAnimatedReceipt() {
    useEffect(() => {
        AOS.init({
            duration: 1000, // animation duration in ms
            once: true,     // whether animation should happen only once
        });
    }, []);
    const receiptRef = useRef(null);


    const handleDownload = async (e) => {
        e.preventDefault();

        if (window.confirm("Do you want to download this receipt as image?")) {
            const element = receiptRef.current;

            // Hide elements before capture
            const hiddenEls = element.querySelectorAll(".hide-on-download");
            hiddenEls.forEach(el => el.classList.add("download-hidden"));

            const canvas = await html2canvas(element, { scale: 2 });
            const dataURL = canvas.toDataURL("image/png");

            // Restore elements after capture
            hiddenEls.forEach(el => el.classList.remove("download-hidden"));

            const link = document.createElement("a");
            link.href = dataURL;
            link.download = "donation-receipt.png";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    };


    return (
        <div ref={receiptRef} className="bg-animated-receipt">
            <div className="animated-receipt-container" ref={receiptRef} >
                <header className="animated-receipt-header">
                    <h1 className="animated-receipt-donor-name">SONAL NIKAM</h1>
                    <p className="animated-receipt-subtitle">Your contribution makes a difference</p>
                    <p className="animated-receipt-thankyou">Thank You</p>
                    <p className="animated-receipt-for">for donating to</p>
                    <h2 className="animated-receipt-org">
                        CHANDICHA GANPATI GANESH <br /> MITRA MANDAL
                    </h2>
                </header>

                <section className="animated-receipt-details">
                    <div className="animated-receipt-amount">
                        ₹ 500 <span>Donated</span>
                    </div>
                    <ul className="animated-receipt-meta">
                        <li>
                            <strong>Date/Time:</strong> 18/08/2025 10:30 AM
                        </li>
                        <li>
                            <strong>Receipt No:</strong> 123456789
                        </li>
                        <li>
                            <strong>Event:</strong> Ganesh Chaturthi
                        </li>
                    </ul>
                </section>

                <div className="animated-receipt-centerpiece">
                    <div className="animated-receipt-ganesha" aria-hidden="true">
                        <img
                            className="img-fluid"
                            src={ganesha}
                            alt="Scan to download or verify receipt"
                        />
                    </div>
                </div>

                <aside className="animated-receipt-qr-wrap hide-on-download" >
                    <img
                        className="animated-receipt-qr"
                        src={qrcode}
                        alt="Scan to download or verify receipt"
                    />
                    <p className="animated-receipt-qr-caption">
                        <a
                            href="#download"
                            className="text-decoration-none"
                            onClick={handleDownload}
                        >
                            Scan or click here Download/Verify Receipt
                        </a>
                    </p>
                </aside>

                <footer className="animated-receipt-footer">
                    <p className="animated-receipt-tagline">
                        Your support keeps our tradition alive.
                    </p>
                </footer>
            </div>
        </div>
    );
}


export default DonerAnimatedReceipt;