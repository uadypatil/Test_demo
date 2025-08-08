import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Must be included globally (not imported twice)
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../../App.css';
import ShowQrCode from '../../utils/ShowQrCode';

function EventManagerHome() {
    // const [selectedQrData, setSelectedQrData] = useState(null);

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    // const handleShowQr = (data) => {
    //     setSelectedQrData(data);
    //     setTimeout(() => {
    //         const modalElement = document.getElementById('qrModal');
    //         console.log('Modal Element:', modalElement); // ✅ this must not be null
    //         if (modalElement) {
    //             const modal = new window.bootstrap.Modal(modalElement);
    //             modal.show();
    //         } else {
    //             console.warn("Modal element not found.");
    //         }
    //     }, 100);
    // };


    return (
        <div className="wrap-content h-100 w-100 border-3 border-secondary shadow rounded-5 py-3 m-1">
            {/* Top Header */}
            <div className="row d-flex justify-content-center w-100 mx-0">
                <div className="col-lg-6 col-md-6 col-sm-12 border-1 border-dark">
                    <h2 className="mb-2">Dashboard</h2>
                </div>
            </div>

            {/* Today's Registrations */}
            <div className="row d-flex justify-content-center w-100 mx-0">
                <div className="col-lg-6 col-md-6 col-sm-12 border-1 border-dark">
                    <div className="card">
                        <div className="card-body pb-0">
                            <h4>Today's Registrations</h4>
                            <div className="d-flex justify-content-between">
                                <p className="display-1 fw-semibold text-center text-success mt-2">17</p>

                                <div>
                                    <a href='/em/donation/new' className='btn btn-primary mt-3'>New Donation</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Recently Added Table */}
            <div className="row d-flex justify-content-center w-100 mx-0">
                <div className="col-lg-6">
                    <hr />
                    <div className="card">
                        <div className="card-body pb-0">
                            <h4>Recently added</h4>
                        </div>
                        <div className="card-body">
                            <div className="table-responsive" style={{ height: '45dvh', overflowY: 'scroll' }}>
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Reg. No</th>
                                            <th>Name</th>
                                            {/* <th>View QR</th> */}
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[1, 2, 3, 4, 5].map((_, idx) => (
                                            <tr key={idx}>
                                                <td>142</td>
                                                <td>Anishq Shubhashish</td>
                                                {/* <td>
                                                    <a
                                                        className='btn btn-primary'
                                                        onClick={() => handleShowQr(`https://example.com/user/142`)}
                                                        href="/em/loadqr">
                                                        Qr
                                                    </a>
                                                </td> */}
                                                <td>
                                                    <a href="/em/doner/profile" className="btn border-primary text-primary">
                                                        View
                                                    </a>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EventManagerHome;
