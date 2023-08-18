import axios from "axios";
import { useState } from "react";

export default function SearchForFlight() {
	let source = "",
		destination = "",
		date = ""; //useState for source and destination as well
	const [listOfFlight, setListOfFlight] = useState([]);

	function readSource(event) {
		source = event.target.value;
	}
	function readDestination(event) {
		destination = event.target.value;
	}

	function readDate(event) {
		date = event.target.value;
	}

	function search(event) {
		event.preventDefault();
		//alert(source + " , " + destination);
		let url = `http://localhost:9090/flights?source=${source}&destination=${destination}&date=${date}`;
		axios.get(url).then((response) => {
			//console.log(response.data);
			setListOfFlight(response.data);
		});
	}

	let t = [];
	for (let flight of listOfFlight) {
		t.push(
			<div>
				Flight No: {flight.id} <br />
				Airline Name : {flight.airlineName} <br />
				Departure Time : {flight.departureTime} <br />
				Arrival Time : {flight.arrivalTime} <br />
				Date : {flight.date} <br />
				Available Seats : {flight.availableSeat} <br />
			</div>
		);
	}

	return (    
		<div>
			<form onSubmit={search}>
				Enter source : <input onChange={readSource} /> <br />
				Enter destination : <input onChange={readDestination} /> <br />
				Enter Date : <input onChange={readDate} /> <br />
				<button type="submit">Search</button>
			</form>
			{t}
		</div>
	);
}
