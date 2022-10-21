import React, { Component } from 'react';
import Navbar from '../components/Navbar.js';
//import Footer from '../components/Footer.js';
import './About.css';
import PostForm from './PostForm.js';

class About extends Component {
    render() {
        return (
            <div>
                <div id="top-nav">
                    <Navbar />
                </div>
                {/* <div className="container">
                    <h2>About Page</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                </div> */}
                <h1 id="head1">We always deliver more than expected</h1>
                <h2 id="head2">-----Amenities And Services-----</h2>
                <div className=" about" style={{ backgroundImage: "url(https://img.freepik.com/premium-photo/abstract-blur-luxury-hotel-lobby-background_1339-98449.jpg?w=740')" }}>

                </div>
                <div>
                    <div class="container">
                        <div class="d-lg-flex"> <div class="card border-0 me-lg-4 mb-lg-0 mb-4 opacity-75 ">
                            <div class="backgroundEffect"></div> <div class="pic ">
                                <img class="" src="https://i.pinimg.com/originals/30/6a/f3/306af3bc7c6ab631736ee2a660f28a3f.jpg" alt="" />
                                <div class="date"> <span class="day">Sweet</span> <span class="month"></span> <span class="year">Room</span>
                                </div> </div>
                            <div class="content "> <p class="h-1 mt-4 ">Lavish Sweet Rooms</p>
                                <p class="text-muted mt-3">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                <div class="d-flex align-items-center justify-content-between mt-3 pb-3 "> <div class="btn btn-primary">
                                    Read More<span class="fas fa-arrow-right"></span></div> <div class="d-flex align-items-center justify-content-center foot">
                                        <p class="admin">Admin</p> <p class="ps-3 icon text-muted"><span class="fas fa-comment-alt pe-1"></span>3</p> </div> </div>
                            </div> </div> <div class="card border-0 me-lg-4 mb-lg-0 mb-4 opacity-75"> <div class="backgroundEffect"></div> <div class="pic">
                                <img class="" src="https://static4.depositphotos.com/1008939/323/i/600/depositphotos_3232226-stock-photo-hotel-room.jpg" alt="" />
                                <div class="date"> <span class="day">Twin</span> <span class="month"></span> <span class="year">Room</span> </div> </div>
                                <div class="content"> <p class="h-1 mt-4">Classy Twin Rooms</p> <p class="text-muted mt-3">
                                    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                    <div class="d-flex align-items-center justify-content-between mt-3 pb-3"> <div class="btn btn-primary">Read More
                                        <span class="fas fa-arrow-right"></span></div> <div class="d-flex align-items-center justify-content-center foot">
                                            <p class="admin">Admin</p> <p class="ps-3 icon text-muted"><span class="fas fa-comment-alt pe-1"></span>3</p> </div> </div> </div> </div>
                            <div class="card border-0 mb-lg-0 mb-4 opacity-75"> <div class="backgroundEffect"></div> <div class="pic">
                                <img class="" src="https://media.architecturaldigest.com/photos/573c8bc392bce8d4717e8a54/master/pass/dubai-suites-02-edit.jpg" alt="" />
                                <div class="date"> <span class="day">Deluxe</span> <span class="month"></span> <span class="year">Rooms</span> </div> </div> <div class="content"> <p class="h-1 mt-4"> Premium Deluxe Rooms </p> <p class="text-muted mt-3">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p> <div class="d-flex align-items-center justify-content-between mt-3 pb-3"> <div class="btn btn-primary">Read More<span class="fas fa-arrow-right"></span></div> <div class="d-flex align-items-center justify-content-center foot"> <p class="admin">Admin</p> <p class="ps-3 icon text-muted"><span class="fas fa-comment-alt pe-1"></span>3</p> </div> </div> </div> </div> </div> </div>
                </div>
                <h1 >Free Wi-Fi</h1>
                <p className='text'>It’s 2017, free Wi-Fi is a wonderful luxury to stay in touch with family and friends,<br></br> share updates on your trip, do research on the resort and country and so on.<br></br> This adds a measure of convenience which most guests highly appreciate.</p>

                <img src="https://i0.wp.com/amberlair.com/wp-content/uploads/2016/02/amberlair-crowdsourced-crowdfunded-boutique-hotel-Blue-Karma-resort-wifi.jpg?ssl=1" id="gym" />

                <h1 id="wellness">Wellness Facilities</h1>
                <p className='text'>Health and wellness is important to many travelers and this amenity often sets great resorts apart from the others.<br></br> On site Spas and Fitness Centres are wonderful for those guests who wish to keep up with their wellness regimes.<br></br> Resorts such as The Crane also have Juice Bars with healthier food and beverage options, in addition to their wellness facilities.</p>
                <img src="https://www.claridges.com/assets/img/pictures/experience-gym.jpg" id="gym" />
                <h1 >Daily Housekeeping </h1>
                <p className='text'>While on a getaway, clean surroundings add to the experience. Great resorts offer daily housekeeping as an amenity for guests.<br></br> Accommodations which are kept clean, attractive and comfortable allow you to relax and enjoy your stay.</p>
                <img src="https://assets1.hospitalitytech.com/styles/max_width_320/s3/2022-05/shutterstock_1628546512.jpg?itok=ZPUdnrZV" id="gym"></img>
                <h1 >Entertainment </h1>
                <p className='text'>Great resorts offer guests entertainment on some nights, which does not require guests to leave the resort. <br></br>This is great for mingling with other guests and locals, and in some instances, getting a taste of the country’s culture. <br></br>Examples of some types of entertainment include live bands, dancing, karaoke, culinary displays and many others.</p>
                <img src="data:image/jpeg;base64,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" id="gym"></img>
                <h1 >Multiple Restaurants</h1>
                <p className='text'>Several on site food outlet options is always a plus when choosing a good resort. For guests who do not wish to dine outside of the resort regularly,<br></br> multiple restaurants are a wonderful amenity. It eliminates the need to venture outside the resort and gives the guests several different convenient food options.<br></br> The Crane Resort in Barbados has five restaurants, a café, a juice bar, as well as in-room dining for the guests’ convenience.<br></br></p>
                <div><br></br></div>
                <img src="https://media.disneylandparis.com/d4th/en-usd/images/hd14950_2050dec31_world_disney-new-york-art-of-marvel-hotel_manhattan-restaurant-with-people-concept-art_16-9_tcm1861-195153.jpg?w=1960" id="gym"></img>
            </div >
        );
    }
}

export default About;