import React, { useState, useContext } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Tours.css';
import Boracay from '../images/tours/img1.png';
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

    // Function to handle the change in number of people
    const handlePeopleChange = (event) => {
        setNumberOfPeople(event.target.value);
    }

    function addToCart() {
        const newCartItem = {
            tour: 'Beaches of Boracay',
            date: selectedDate,
            people: numberOfPeople,
            price: 3000 // or a dynamic value
        };
    
        setCart([...cart, newCartItem]);
    }
    

    return (
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
                                    <p>Price 3000 php</p>
                                    <button onClick={addToCart}>Book Now</button>
                                </div>
                                <div className="col-3">
                                    <img style={{ width: '40%' }} src={Calender} alt="Calender" className="icon" />
                                    <DatePicker
                                    className="input-small"
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
                                            value={numberOfPeople}
                                            onChange={handlePeopleChange}
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
    );
}

export default Tours;
