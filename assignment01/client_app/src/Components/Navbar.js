import '../App.css';
import { useState, useEffect } from "react";
import axios from "axios";
import Home from "./Home";

function Navbar() {
    const [country, setCountry] = useState("england-and-wales");
    const [event, setEvent] = useState("all")
    const [eventData, setEventData] = useState({})
    useEffect( () => {
        console.log(country, event)
        const  fetchEvent = async () =>{
           await axios.post('http://localhost:4000/', {
                country: country,
                event: event,
            })
                .then(function (response) {
                    setEventData(response.data.data)
                })
                .catch(function (error) {
                    console.log(error);
                });
         }
         fetchEvent();
    }, [country, event]);

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Home</a>
                    <div className=" navbar-collapse" >
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item me-4">
                                <select class="form-select"
                                    aria-label="Default select example"
                                    onChange={(e) => {
                                        setCountry(e.target.value)
                                    }}
                                >
                                    <option selected value="england-and-wales"  >England and Wales</option>
                                    <option value="northern-ireland"
                                    >Northern Ireland</option>
                                </select >
                            </li>
                            <li className="nav-item me-4">
                                <select class="form-select"
                                    aria-label="Default select example"
                                    onChange={(e) => {
                                        setEvent(e.target.value)
                                    }}
                                >
                                    <option selected value="all">All Events</option>
                                    <option value="yesterday">Yesterday Events</option>
                                    <option value="last7Day">Last 7 Days Events</option>
                                    <option value="Last30Days">Last 30 Days Events</option>
                                </select>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>
            <Home Data ={eventData} />
        </>
    );
}

export default Navbar;
