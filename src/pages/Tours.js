import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Tours.css';
import Boracay from '../images/img1.png';
import TimeSheetIcon from '../images/icons/Timesheet.svg';
import ClockIcon from '../images/icons/Clock.svg';
import LanguageIcon from '../images/icons/Language.svg';

function Tours() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="text-section">
                        <h1>Experience Paradise at the Beaches of Boracay</h1>
                        <p>See the best beaches of Boracay Island and explore the
                            nearby pristine waters on this shared tour. This Boracay island
                            hopping tour is perfect for those who want to see more of
                            Boracay beyond the famous White Beach. This tour includes
                            boat transfers, entrance fees to each island, the use of a
                            snorkeling mask and a mermaid tail, a kawa hot bath, and a
                            complimentary lunch.</p>
                        <DatePicker />
                        <div className="icon-section">
                            <img src={ClockIcon} alt="Clock" className="icon" />
                            <img src={LanguageIcon} alt="Language" className="icon" />
                            <img src={TimeSheetIcon} alt="TimeSheet" className="icon" />
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
