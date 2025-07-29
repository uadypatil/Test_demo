import { React } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../App.css';

function GuideUtility() {

    return (
        <>

            <div className="col-lg-4">
                {/* SEARCH NERABY EVENTS */}
                <div className="row mt-3 card py-4 mx-2 shadow" style={{ height: '70dvh' }}>
                    <ul className='' style={{ listStyleType: 'none' }}>
                        <li>
                            <h5>Event Organizer</h5>
                            <ul style={{ listStyleType: 'none' }}>
                                <li>
                                    <a href="#organizer">
                                        create account/ sign in
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        Create Event
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        Dashboard
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        Generating Reports
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        Managing Event Mangers
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        Reviewing Revenues
                                    </a>
                                </li>
                            </ul>
                        </li>

                        <li>
                            <h5>Event Manager</h5>
                            <ul style={{ listStyleType: 'none' }}>
                                <li>
                                    <a href="#manager">
                                        create account/ sign in
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        Generate Receipt
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        Generate qr & share Receipt
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        Trace Revenue
                                    </a>
                                </li>
                            </ul>
                        </li>

                        <li>
                            <h5>Doner</h5>
                            <ul style={{ listStyleType: 'none' }}>
                                <li>
                                    <a href="#doner">
                                        Donate
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        Generate Animated Receipt
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        share Receipt
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>

                </div>
            </div>

            <div className="col-lg-8">
                {/* SEARCH NERABY EVENTS */}
                <div className="row mt-3 card py-4 mx-2 shadow" style={{ height: '70dvh', overflowY: 'scroll' }}>
                    <div className="col-12">
                        <h3 className="text-center">
                            Common Guidelines
                        </h3>

                        <div className="" style={{ height: '' }}>

                            <div className="guide-3 h-100" id="doner">
                                <h4>Doner Guidelines</h4>
                                <p>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, sunt nobis neque animi, consectetur harum voluptatem accusantium maiores fuga incidunt distinctio quia, quod quibusdam similique illum nemo. Quo quaerat at suscipit illum architecto, eligendi mollitia quidem voluptas nobis beatae quibusdam eius vitae rerum, distinctio ducimus quae laborum explicabo. Eius, molestias.
                                </p>
                                <p>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, sunt nobis neque animi, consectetur harum voluptatem accusantium maiores fuga incidunt distinctio quia, quod quibusdam similique illum nemo. Quo quaerat at suscipit illum architecto, eligendi mollitia quidem voluptas nobis beatae quibusdam eius vitae rerum, distinctio ducimus quae laborum explicabo. Eius, molestias.
                                </p>
                                <p>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, sunt nobis neque animi, consectetur harum voluptatem accusantium maiores fuga incidunt distinctio quia, quod quibusdam similique illum nemo. Quo quaerat at suscipit illum architecto, eligendi mollitia quidem voluptas nobis beatae quibusdam eius vitae rerum, distinctio ducimus quae laborum explicabo. Eius, molestias.
                                </p>
                            </div>

                            <div className="guide-2 mt-5" id="manager">
                                <h4>Event Manager Guidelines</h4>
                                <p>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, sunt nobis neque animi, consectetur harum voluptatem accusantium maiores fuga incidunt distinctio quia, quod quibusdam similique illum nemo. Quo quaerat at suscipit illum architecto, eligendi mollitia quidem voluptas nobis beatae quibusdam eius vitae rerum, distinctio ducimus quae laborum explicabo. Eius, molestias.
                                </p>
                                <p>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, sunt nobis neque animi, consectetur harum voluptatem accusantium maiores fuga incidunt distinctio quia, quod quibusdam similique illum nemo. Quo quaerat at suscipit illum architecto, eligendi mollitia quidem voluptas nobis beatae quibusdam eius vitae rerum, distinctio ducimus quae laborum explicabo. Eius, molestias.
                                </p>
                                <p>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, sunt nobis neque animi, consectetur harum voluptatem accusantium maiores fuga incidunt distinctio quia, quod quibusdam similique illum nemo. Quo quaerat at suscipit illum architecto, eligendi mollitia quidem voluptas nobis beatae quibusdam eius vitae rerum, distinctio ducimus quae laborum explicabo. Eius, molestias.
                                </p>
                            </div>

                            <div className="guide-1 mt-5" id='organizer'>
                                <h4>Event Organizer Guide Lines</h4>
                                <p>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, sunt nobis neque animi, consectetur harum voluptatem accusantium maiores fuga incidunt distinctio quia, quod quibusdam similique illum nemo. Quo quaerat at suscipit illum architecto, eligendi mollitia quidem voluptas nobis beatae quibusdam eius vitae rerum, distinctio ducimus quae laborum explicabo. Eius, molestias.
                                </p>
                                <p>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, sunt nobis neque animi, consectetur harum voluptatem accusantium maiores fuga incidunt distinctio quia, quod quibusdam similique illum nemo. Quo quaerat at suscipit illum architecto, eligendi mollitia quidem voluptas nobis beatae quibusdam eius vitae rerum, distinctio ducimus quae laborum explicabo. Eius, molestias.
                                </p>
                                <p>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, sunt nobis neque animi, consectetur harum voluptatem accusantium maiores fuga incidunt distinctio quia, quod quibusdam similique illum nemo. Quo quaerat at suscipit illum architecto, eligendi mollitia quidem voluptas nobis beatae quibusdam eius vitae rerum, distinctio ducimus quae laborum explicabo. Eius, molestias.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GuideUtility
