import React from 'react';
import img from '../Images/cinema-2502213_1280.jpg';

const AboutUs = () => {
    return (
        <>
            <div className="container emp-profile">
                <div className="row">
                    <div className="col-md-4">
                        <div className="profile-img">
                            <img src={img} alt="ABC Cinema" />
                        </div>

                    </div>
                    <div className="col-md-6">
                        <div className="profile-head">
                            <h5>ABC Cinema</h5>
                            <p className="profile-rating mt3 mb-5">Ratings <span>9/10</span></p>
                        </div>
                    </div>
                    <div className="col-md-8 pl-5 about-info">
                        <div className="tab-content profile-tab">
                            <div className="tab-pane fade show active" role="tabpanel">
                                <div className="row">
                                    <div className="col-md-6">
                                        <p>
                                            ABC Cinemas are known for its quality services of moving show times around the country. With over 50 cinemas located over 30 different cities.
                                            We are in the buisness for more than a decade. Our first cinema was established in 1985 in Karachi. Infact first cinema in the country ever.
                                            Although its been a long history but our quality has never been compromised. Due to which we have received the best cinema in country in 1985-1996 and then from 2002-2009, 2012-19 counting the most best cinema awards in history.
                                    </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
export default AboutUs