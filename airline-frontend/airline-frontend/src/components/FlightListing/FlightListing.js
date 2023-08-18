import React from "react";
import Header from "../Navbar/Header";
import FlightRow from "../FlightRow/FlightRow";
import "./FlightListing.css";
import Footer from "../Footer/Footer.js";

import { useLocation } from "react-router-dom";

function FlightListing(props) {
	const location = useLocation();
	const { from, to, date, listOfFlight } = location.state;

	console.log(listOfFlight);

	return (
		<div className="flight-listing-container">
			{/* HEADER */}
			<Header />

			<div className="container mt-5 mb-4">
				<h3 className="mb-5">These are your flight details</h3>
				<div className="flight-details">
					<div className="flight-details-section">
						<div className="flight-details-item">
							<h5>From:</h5>&nbsp;&nbsp;
							<h5 className="fs-6">{from}</h5>
						</div>
						<div className="flight-details-item">
							<h5>To:</h5>&nbsp;&nbsp;
							<h5 className="fs-6">{to}</h5>
						</div>
					</div>
					<div className="flight-details-section align-items-center">
						<div className="flight-details-item mx-5">
							<h5>Date:</h5>&nbsp;&nbsp;
							<h5 className="fs-6">{date}</h5>
						</div>
					</div>
				</div>

				{listOfFlight.length !== 0 ? (
					listOfFlight.map((flight, index) => (
						<FlightRow
							key={index}
							id={flight.id}
							airlineName={flight.airlineName}
							departureCity={flight.departureCity}
							arrivalCity={flight.arrivalCity}
							departureTime={flight.departureTime}
							arrivalTime={flight.arrivalTime}
							date={flight.date}
							source={flight.source}
							destination={flight.destination}
							price={flight.price}
						/>
					))
				) : (
					<div className="no-flights-found mb-2">
						<h1>No Flights Found</h1>
					</div>
				)}
			</div>

			<Footer />
		</div>
	);
}

export default FlightListing;
