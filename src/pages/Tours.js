import React, { useState, useContext } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Tours.css';
import Boracay from '../images/tours/img1.png';
import Palawan from '../images/tours/img2.png';
import Cebu from '../images/tours/img3.png';
import Shark from '../images/tours/img4.png';
import Choc from '../images/tours/img5.png';
import Albay from '../images/tours/img6.png';
import Scuba from '../images/tours/img7.png';

import TimeSheetIcon from '../images/icons/Timesheet.svg';
import ClockIcon from '../images/icons/Clock.svg';
import LanguageIcon from '../images/icons/Language.svg';
import Ok from '../images/icons/Ok.svg';
import Calender from '../images/icons/Calendar.svg';
import User from '../images/icons/User.svg';
import CartContext from '../context/CartContext';

function Tours() {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [numberOfPeople, setNumberOfPeople] = useState(1);
    const [cart, setCart] = useContext(CartContext);

    const [peopleCounts, setPeopleCounts] = useState([1, 1, 1, 1, 1, 1, 1]); // Assuming 7 tours

    const handlePeopleChange = (index, event) => {
        const newCounts = [...peopleCounts];
        newCounts[index] = event.target.value;
        setPeopleCounts(newCounts);
    }

    function addToCart(tourName, date, people, price) {
        const newCartItem = {
            tour: tourName,
            date: date,
            people: people,
            price: price
        };

        setCart([...cart, newCartItem]);
    }



    return (
        <div>
            <div className="container" style={{ marginTop: '20px' }}>

                <div className="row">
                    <div className="col-md-6">
                        <div className="text-section">

                            <h1 style={{ color: 'blue' }}><b>Experience Paradise at the Beaches of Boracay</b></h1>


                            <p>See the best beaches of Boracay Island and explore the
                                nearby pristine waters on this shared tour. This Boracay island
                                hopping tour is perfect for those who want to see more of
                                Boracay beyond the famous White Beach. This tour includes
                                boat transfers, entrance fees to each island, the use of a
                                snorkeling mask and a mermaid tail, a kawa hot bath, and a
                                complimentary lunch.</p>
                            <div className="row">
                                <div className="col">
                                    <h3>Unwind</h3>
                                    <p>Relax on the powdery while sands,
                                        soak up the sun, ond sw1m 1n
                                        turquoise waters.</p>
                                </div>
                                <div className="col">
                                    <h3>Explore</h3>
                                    <p>Embark on thrilling witner sports
                                        adventures or take a boal tour to
                                        nearby islands.</p>
                                </div>
                            </div>
                            <div className="icon-section">
                                <div className="row">
                                    <div className="col-3">
                                        <img style={{ width: '40%' }} src={ClockIcon} alt="Clock" className="icon" />
                                        <p><b>Starting Time:</b></p>
                                        <p style={{ marginLeft: '20px', marginTop: '-15px', width: '50%' }}>At 8.00</p>

                                    </div>
                                    <div className="col-3">
                                        <img style={{ width: '40%' }} src={LanguageIcon} alt="Language" className="icon" />
                                        <p><b>Language:</b></p>
                                        <p style={{ marginTop: '-15px' }}>English</p>
                                    </div>
                                    <div className="col-3">
                                        <img style={{ width: '40%' }} src={TimeSheetIcon} alt="TimeSheet" className="icon" />
                                        <p><b>Duration:</b></p>
                                        <p style={{ marginTop: '-15px' }}>4 hours</p>
                                    </div>
                                    <div className="col-3">
                                        <img style={{ width: '40%' }} src={Ok} alt="Ok" className="icon" />
                                        <p><b>Available:</b></p>
                                        <p style={{ marginTop: '-15px' }}>All year</p>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-3">
                                        <p style={{ marginBottom: '1px' }}><b>3000</b> php</p>
                                        <button
                                            onClick={() => addToCart("Beaches of Boracay", selectedDate, numberOfPeople, 3000)}
                                            style={{
                                                backgroundColor: 'transparent',
                                                color: 'blue',
                                                border: '2px solid red',
                                                boxShadow: '2px 2px 4px #888888'
                                            }}>
                                            Book
                                        </button>
                                    </div>
                                    <div className="col-3">
                                        <div className="icon-input-container">
                                            <img style={{ width: '40%' }} src={Calender} alt="Calender" className="icon" />
                                            <DatePicker
                                                className="input-smallerdate"
                                                selected={selectedDate}
                                                onChange={date => setSelectedDate(date)}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className="icon-input-container">
                                            <img style={{ width: '40%' }} src={User} alt="User" className="icon" />
                                            <input
                                                className="input-smaller"
                                                type="number"
                                                value={peopleCounts[0]}
                                                onChange={(e) => handlePeopleChange(0, e)}
                                                min="1" // minimum number of people
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img
                            src={Boracay}
                            className="img-fluid" // Bootstrap class for full-width image
                            alt="Filipino Adventure"
                        />
                    </div>
                </div>


            </div>


            <div className="container" style={{ marginTop: '20px' }}>

                <div className="row">
                    <div className="col-md-6">
                        <div className="text-section">

                            <h1 style={{ color: 'blue' }}><b>Discover the Enchanting Beauty of Palawan</b></h1>


                            <p>Explore the world-famous Puerto Princesa Underground River
                                in Palawan by going on this day tour. This is the perfect
                                experience for travelers who want to see this UNESCO World
                                Heritage Site up close, as you will get to cruise down the river.
                                Along with the use of a boat, the tour comes with the service
                                of a guide, private land t ransfers, a set local lunch, and free
                                pick-up and drop-off within Puerto Princesa.</p>
                            <div className="row">
                                <div className="col">
                                    <h3>Wander</h3>
                                    <p>through rainforests and swim in
                                        hidden lagoons between t01Nerin9
                                        limestone cliffs.</p>
                                </div>
                                <div className="col">
                                    <h3>Marvel</h3>
                                    <p>Cruise the subterranean river, explore
                                        caves winding through mountains
                                        filled with rock formations.</p>
                                </div>
                            </div>
                            <div className="icon-section">
                                <div className="row">
                                    <div className="col-3">
                                        <img style={{ width: '40%' }} src={ClockIcon} alt="Clock" className="icon" />
                                        <p><b>Starting Time:</b></p>
                                        <p style={{ marginLeft: '20px', marginTop: '-15px', width: '50%' }}>At 7.00</p>

                                    </div>
                                    <div className="col-3">
                                        <img style={{ width: '40%' }} src={LanguageIcon} alt="Language" className="icon" />
                                        <p><b>Language:</b></p>
                                        <p style={{ marginTop: '-15px' }}>English</p>
                                    </div>
                                    <div className="col-3">
                                        <img style={{ width: '40%' }} src={TimeSheetIcon} alt="TimeSheet" className="icon" />
                                        <p><b>Duration:</b></p>
                                        <p style={{ marginTop: '-15px' }}>6 hours</p>
                                    </div>
                                    <div className="col-3">
                                        <img style={{ width: '40%' }} src={Ok} alt="Ok" className="icon" />
                                        <p><b>Available:</b></p>
                                        <p style={{ marginTop: '-15px' }}>All year</p>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-3">
                                        <p style={{ marginBottom: '1px' }}><b>3000</b> php</p>
                                        <button
                                            onClick={() => addToCart("Beauty Of Palawan", selectedDate, numberOfPeople, 3000)}

                                            style={{
                                                backgroundColor: 'transparent',
                                                color: 'blue',
                                                border: '2px solid red',
                                                boxShadow: '2px 2px 4px #888888'
                                            }}>
                                            Book
                                        </button>
                                    </div>
                                    <div className="col-3">
                                        <img style={{ width: '40%' }} src={Calender} alt="Calender" className="icon" />
                                        <DatePicker
                                            className="input-smallerdate"
                                            selected={selectedDate}
                                            onChange={date => setSelectedDate(date)}
                                        />
                                    </div>
                                    <div className="col-3">
                                        <div className="icon-input-container">
                                            <img style={{ width: '40%' }} src={User} alt="User" className="icon" />
                                            <input
                                                className="input-smaller"
                                                type="number"
                                                value={peopleCounts[1]}
                                                onChange={(e) => handlePeopleChange(1, e)}
                                                min="1" // minimum number of people
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img
                            src={Palawan}
                            className="img-fluid" // Bootstrap class for full-width image
                            alt="Palawan Adventure"
                        />
                    </div>
                </div>


            </div>




            <div className="container" style={{ marginTop: '20px' }}>

                <div className="row">
                    <div className="col-md-6">
                        <div className="text-section">

                            <h1 style={{ color: 'blue' }}><b>Cebu Alegria Falls Canyoneering</b></h1>


                            <p>Explore the waterfalls in the municipality of Alegria when you
                                book this tour in Cebu. This Alegria Falls canyoneering
                                experience includes air-conditioned van transfers, entrance
                                fees, complimentary lunch with one round of drinks, all
                                entrance fees, the use of safety gear and a towel, and the
                                assistance of a guide, so all you have to do is show up and
                                enjoy the activity!</p>
                            <div className="row">
                                <div className="col">
                                    <h3>Rappel</h3>
                                    <p>Descend flowing waterfalls and
                                        traverse challenging rock formations
                                        using ropes and body strength.</p>
                                </div>
                                <div className="col">
                                    <h3>Trek</h3>
                                    <p>Pass through lush tropical rainforests.
                                        crossing streams and swimming in
                                        Crystal clear waters along jungl& trails.</p>
                                </div>
                            </div>
                            <div className="icon-section">
                                <div className="row">
                                    <div className="col-3">
                                        <img style={{ width: '40%' }} src={ClockIcon} alt="Clock" className="icon" />
                                        <p><b>Starting Time:</b></p>
                                        <p style={{ marginLeft: '20px', marginTop: '-15px', width: '50%' }}>At 8.00</p>

                                    </div>
                                    <div className="col-3">
                                        <img style={{ width: '40%' }} src={LanguageIcon} alt="Language" className="icon" />
                                        <p><b>Language:</b></p>
                                        <p style={{ marginTop: '-15px' }}>English</p>
                                    </div>
                                    <div className="col-3">
                                        <img style={{ width: '40%' }} src={TimeSheetIcon} alt="TimeSheet" className="icon" />
                                        <p><b>Duration:</b></p>
                                        <p style={{ marginTop: '-15px' }}>5 hours</p>
                                    </div>
                                    <div className="col-3">
                                        <img style={{ width: '40%' }} src={Ok} alt="Ok" className="icon" />
                                        <p><b>Available:</b></p>
                                        <p style={{ marginTop: '-15px' }}>All year</p>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-3">
                                        <p style={{ marginBottom: '1px' }}><b>3000</b> php</p>
                                        <button
                                            onClick={() => addToCart("Cebu Canyoneering", selectedDate, numberOfPeople, 3000)}

                                            style={{
                                                backgroundColor: 'transparent',
                                                color: 'blue',
                                                border: '2px solid red',
                                                boxShadow: '2px 2px 4px #888888'
                                            }}>
                                            Book
                                        </button>
                                    </div>
                                    <div className="col-3">
                                        <img style={{ width: '40%' }} src={Calender} alt="Calender" className="icon" />
                                        <DatePicker
                                            className="input-smallerdate"
                                            selected={selectedDate}
                                            onChange={date => setSelectedDate(date)}
                                        />
                                    </div>
                                    <div className="col-3">
                                        <div className="icon-input-container">
                                            <img style={{ width: '40%' }} src={User} alt="User" className="icon" />
                                            <input
                                                className="input-smaller"
                                                type="number"
                                                value={peopleCounts[2]}
                                                onChange={(e) => handlePeopleChange(2, e)}
                                                min="1" // minimum number of people
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img
                            src={Cebu}
                            className="img-fluid" // Bootstrap class for full-width image
                            alt="Cebu Adventure"
                        />
                    </div>
                </div>


            </div>

            <div className="container" style={{ marginTop: '20px' }}>

                <div className="row">
                    <div className="col-md-6">
                        <div className="text-section">

                            <h1 style={{ color: 'blue' }}><b>Swim with Majestic Whale Sharks in the Philippines</b></h1>


                            <p>See Oslob's Whale Sharks and visit Tumalog Falls in this 10-
                                hour day tour from Cebu City. This tour comes with the use of
                                an air-conditioned van, roundtrip boat transfers, entrance
                                fees, the assistance of a guide, a light breakfast, and lunch, so
                                you don't have to worry about arranging anything else for
                                your day.</p>
                            <div className="row">
                                <div className="col">
                                    <h3>Marvel</h3>
                                    <p>Snorkel and swim alongside gentle,
                                        spotted giants peacefully gliding
                                        through blue waters.</p>
                                </div>
                                <div className="col">
                                    <h3>Trek</h3>
                                    <p>Hike forest trails to a powerful
                                        watertall, pausing to enjoy tropical
                                        views along the way.</p>
                                </div>
                            </div>
                            <div className="icon-section">
                                <div className="row">
                                    <div className="col-3">
                                        <img style={{ width: '40%' }} src={ClockIcon} alt="Clock" className="icon" />
                                        <p><b>Starting Time:</b></p>
                                        <p style={{ marginLeft: '20px', marginTop: '-15px', width: '50%' }}>At 6.00</p>

                                    </div>
                                    <div className="col-3">
                                        <img style={{ width: '40%' }} src={LanguageIcon} alt="Language" className="icon" />
                                        <p><b>Language:</b></p>
                                        <p style={{ marginTop: '-15px' }}>English</p>
                                    </div>
                                    <div className="col-3">
                                        <img style={{ width: '40%' }} src={TimeSheetIcon} alt="TimeSheet" className="icon" />
                                        <p><b>Duration:</b></p>
                                        <p style={{ marginTop: '-15px' }}>10 hours</p>
                                    </div>
                                    <div className="col-3">
                                        <img style={{ width: '40%' }} src={Ok} alt="Ok" className="icon" />
                                        <p><b>Available:</b></p>
                                        <p style={{ marginTop: '-15px' }}>All year</p>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-3">
                                        <p style={{ marginBottom: '1px' }}><b>3000</b> php</p>
                                        <button
                                            onClick={() => addToCart("Swim With Sharks", selectedDate, numberOfPeople, 3000)}
                                            style={{
                                                backgroundColor: 'transparent',
                                                color: 'blue',
                                                border: '2px solid red',
                                                boxShadow: '2px 2px 4px #888888'
                                            }}>
                                            Book
                                        </button>
                                    </div>
                                    <div className="col-3">
                                        <img style={{ width: '40%' }} src={Calender} alt="Calender" className="icon" />
                                        <DatePicker
                                            className="input-smallerdate"
                                            selected={selectedDate}
                                            onChange={date => setSelectedDate(date)}
                                        />
                                    </div>
                                    <div className="col-3">
                                        <div className="icon-input-container">
                                            <img style={{ width: '40%' }} src={User} alt="User" className="icon" />
                                            <input
                                                className="input-smaller"
                                                type="number"
                                                value={peopleCounts[3]}
                                                onChange={(e) => handlePeopleChange(3, e)}
                                                min="1" // minimum number of people
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img
                            src={Shark}
                            className="img-fluid" // Bootstrap class for full-width image
                            alt="Shark Adventure"
                        />
                    </div>
                </div>


            </div>

            <div className="container" style={{ marginTop: '20px' }}>

                <div className="row">
                    <div className="col-md-6">
                        <div className="text-section">

                            <h1 style={{ color: 'blue' }}><b>Discover Beauty of the Chocolate Hills</b></h1>


                            <p>Go on a quick adventure in Bohol w ith t his private Bohol
                                Countryside & Chocolate Hills Adventure Park day tour. This
                                tour is inclusive of air-conditioned transfers, all entrance fees,
                                a free shared Loboc River Cruise lunch, and the services of a
                                guide.</p>
                            <div className="row">
                                <div className="col">
                                    <h3>Explore</h3>
                                    <p>Embark on a journey to the Chocolate
                                        Hills and witness nature's masterpiece.</p>
                                </div>
                                <div className="col">
                                    <h3>Book</h3>
                                    <p>Don't miss out on the opportunity to
                                        experience the enchanting beauty of
                                        the Chocolate Hills.</p>
                                </div>
                            </div>
                            <div className="icon-section">
                                <div className="row">
                                    <div className="col-3">
                                        <img style={{ width: '40%' }} src={ClockIcon} alt="Clock" className="icon" />
                                        <p><b>Starting Time:</b></p>
                                        <p style={{ marginLeft: '20px', marginTop: '-15px', width: '50%' }}>At 8.00</p>

                                    </div>
                                    <div className="col-3">
                                        <img style={{ width: '40%' }} src={LanguageIcon} alt="Language" className="icon" />
                                        <p><b>Language:</b></p>
                                        <p style={{ marginTop: '-15px' }}>English</p>
                                    </div>
                                    <div className="col-3">
                                        <img style={{ width: '40%' }} src={TimeSheetIcon} alt="TimeSheet" className="icon" />
                                        <p><b>Duration:</b></p>
                                        <p style={{ marginTop: '-15px' }}>4 hours</p>
                                    </div>
                                    <div className="col-3">
                                        <img style={{ width: '40%' }} src={Ok} alt="Ok" className="icon" />
                                        <p><b>Available:</b></p>
                                        <p style={{ marginTop: '-15px' }}>All year</p>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-3">
                                        <p style={{ marginBottom: '1px' }}><b>3000</b> php</p>
                                        <button
                                            onClick={() => addToCart("Chocolate Hills", selectedDate, numberOfPeople, 3000)}
                                            style={{
                                                backgroundColor: 'transparent',
                                                color: 'blue',
                                                border: '2px solid red',
                                                boxShadow: '2px 2px 4px #888888'
                                            }}>
                                            Book
                                        </button>
                                    </div>
                                    <div className="col-3">
                                        <img style={{ width: '40%' }} src={Calender} alt="Calender" className="icon" />
                                        <DatePicker
                                            className="input-smallerdate"
                                            selected={selectedDate}
                                            onChange={date => setSelectedDate(date)}
                                        />
                                    </div>
                                    <div className="col-3">
                                        <div className="icon-input-container">
                                            <img style={{ width: '40%' }} src={User} alt="User" className="icon" />
                                            <input
                                                className="input-smaller"
                                                type="number"
                                                value={peopleCounts[4]}
                                                onChange={(e) => handlePeopleChange(4, e)}
                                                min="1" // minimum number of people
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img
                            src={Choc}
                            className="img-fluid" // Bootstrap class for full-width image
                            alt="Chocolate Adventure"
                        />
                    </div>
                </div>






            </div>

            <div className="container" style={{ marginTop: '20px' }}>

                <div className="row">
                    <div className="col-md-6">
                        <div className="text-section">

                            <h1 style={{ color: 'blue' }}><b>Discover the Breathtaking Views of Albay</b></h1>


                            <p>Enjoy a day of sightseeing in tourist spots around Mayon
                                Volcano and learn about the culture of Al bay when you book
                                this day tour. This best views of Mayon sightseeing and
                                culture tour is perfect for those who want to see the beauty of
                                the iconic Mayon Volcano, as this includes stops in several
                                viewing spots that will allow you to appreciate its perfect
                                cone.</p>
                            <div className="row">
                                <div className="col">
                                    <h3>Marvel</h3>
                                    <p>Gaze at the perfoct cone of the active
                                        Mayon Volcano rising from vibrant
                                        green landscapes.</p>
                                </div>
                                <div className="col">
                                    <h3>Explore</h3>
                                    <p>Visit historic Gagsawa Ruins and learn
                                        about the eruption that buried a town,
                                        leaving just a belfry.</p>
                                </div>
                            </div>
                            <div className="icon-section">
                                <div className="row">
                                    <div className="col-3">
                                        <img style={{ width: '40%' }} src={ClockIcon} alt="Clock" className="icon" />
                                        <p><b>Starting Time:</b></p>
                                        <p style={{ marginLeft: '20px', marginTop: '-15px', width: '50%' }}>At 6.00</p>

                                    </div>
                                    <div className="col-3">
                                        <img style={{ width: '40%' }} src={LanguageIcon} alt="Language" className="icon" />
                                        <p><b>Language:</b></p>
                                        <p style={{ marginTop: '-15px' }}>English</p>
                                    </div>
                                    <div className="col-3">
                                        <img style={{ width: '40%' }} src={TimeSheetIcon} alt="TimeSheet" className="icon" />
                                        <p><b>Duration:</b></p>
                                        <p style={{ marginTop: '-15px' }}>6 hours</p>
                                    </div>
                                    <div className="col-3">
                                        <img style={{ width: '40%' }} src={Ok} alt="Ok" className="icon" />
                                        <p><b>Available:</b></p>
                                        <p style={{ marginTop: '-15px' }}>All year</p>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-3">
                                        <p style={{ marginBottom: '1px' }}><b>3000</b> php</p>
                                        <button
                                            onClick={() => addToCart("Views Of Albay", selectedDate, numberOfPeople, 3000)}
                                            style={{
                                                backgroundColor: 'transparent',
                                                color: 'blue',
                                                border: '2px solid red',
                                                boxShadow: '2px 2px 4px #888888'
                                            }}>
                                            Book
                                        </button>
                                    </div>
                                    <div className="col-3">
                                        <img style={{ width: '40%' }} src={Calender} alt="Calender" className="icon" />
                                        <DatePicker
                                            className="input-smallerdate"
                                            selected={selectedDate}
                                            onChange={date => setSelectedDate(date)}
                                        />
                                    </div>
                                    <div className="col-3">
                                        <div className="icon-input-container">
                                            <img style={{ width: '40%' }} src={User} alt="User" className="icon" />
                                            <input
                                                className="input-smaller"
                                                type="number"
                                                value={peopleCounts[5]}
                                                onChange={(e) => handlePeopleChange(5, e)}
                                                min="1" // minimum number of people
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img
                            src={Albay}
                            className="img-fluid" // Bootstrap class for full-width image
                            alt="Albay Adventure"
                        />
                    </div>
                </div>





            </div>

            <div className="container" style={{ marginTop: '20px' }}>

                <div className="row">
                    <div className="col-md-6">
                        <div className="text-section">

                            <h1 style={{ color: 'blue' }}><b>Boracay Discover Scuba Diving</b></h1>


                            <p>Explore what's beneath the surface of Boracay Island's crystal
                                blue waters by booking this Discover Scuba Diving tour.
                                Boracay is known for its powdery white sand beaches, and it's
                                also one of the country's best scuba diving spots, journeyed
                                by many from all over the globe. As the home to a thriving,
                                biodiverse marine landscape, the experience allows you to get
                                up and close to the residents of the sea through scuba diving
                                without the need for a PADI license.</p>
                            <div className="row">
                                <div className="col">
                                    <h3>Dive</h3>
                                    <p>Plunge into clear blue waters and
                                        discover vibrant coral reefs teeming
                                        with exotic marine life.</p>
                                </div>
                                <div className="col">
                                    <h3>Explore</h3>
                                    <p>Get up close with sea turtles, tropical
                                        fish, sea stars. and more on your
                                        underwater adventure.</p>
                                </div>
                            </div>
                            <div className="icon-section">
                                <div className="row">
                                    <div className="col-3">
                                        <img style={{ width: '40%' }} src={ClockIcon} alt="Clock" className="icon" />
                                        <p><b>Starting Time:</b></p>
                                        <p style={{ marginLeft: '20px', marginTop: '-15px', width: '50%' }}>At 6.00</p>

                                    </div>
                                    <div className="col-3">
                                        <img style={{ width: '40%' }} src={LanguageIcon} alt="Language" className="icon" />
                                        <p><b>Language:</b></p>
                                        <p style={{ marginTop: '-15px' }}>English</p>
                                    </div>
                                    <div className="col-3">
                                        <img style={{ width: '40%' }} src={TimeSheetIcon} alt="TimeSheet" className="icon" />
                                        <p><b>Duration:</b></p>
                                        <p style={{ marginTop: '-15px' }}>6 hours</p>
                                    </div>
                                    <div className="col-3">
                                        <img style={{ width: '40%' }} src={Ok} alt="Ok" className="icon" />
                                        <p><b>Available:</b></p>
                                        <p style={{ marginTop: '-15px' }}>All year</p>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-3">
                                        <p style={{ marginBottom: '1px' }}><b>3000</b> php</p>
                                        <button
                                            onClick={() => addToCart("Scuba Diving", selectedDate, numberOfPeople, 3000)}
                                            style={{
                                                backgroundColor: 'transparent',
                                                color: 'blue',
                                                border: '2px solid red',
                                                boxShadow: '2px 2px 4px #888888'
                                            }}>
                                            Book
                                        </button>
                                    </div>
                                    <div className="col-3">
                                        <img style={{ width: '40%' }} src={Calender} alt="Calender" className="icon" />
                                        <DatePicker
                                            className="input-smallerdate"
                                            selected={selectedDate}
                                            onChange={date => setSelectedDate(date)}
                                        />
                                    </div>
                                    <div className="col-3">
                                        <div className="icon-input-container">
                                            <img style={{ width: '40%' }} src={User} alt="User" className="icon" />
                                            <input
                                                className="input-smaller"
                                                type="number"
                                                value={peopleCounts[6]}
                                                onChange={(e) => handlePeopleChange(6, e)}
                                                min="1" // minimum number of people
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img
                            src={Scuba}
                            className="img-fluid" // Bootstrap class for full-width image
                            alt="Scuba Adventure"
                        />
                    </div>
                </div>





            </div>
        </div>
    );
}

export default Tours;
