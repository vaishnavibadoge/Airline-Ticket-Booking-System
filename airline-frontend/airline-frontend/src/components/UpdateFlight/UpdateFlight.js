import axios from "axios";
import { useState, useEffect } from "react";
import Header from "../Navbar/Header";
import { Form, Button } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AddFlight(props) {
	const navigate = useNavigate();
	const location = useLocation();

	const successMsg = () => {
		toast.success("Data updated successfully!", {
			position: "top-center",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "dark",
		});
	};

	const [flightData, setFlightData] = useState({
		airlineName: "",
		source: "",
		destination: "",
		date: "",
		departureTime: "",
		arrivalTime: "",
		price: "",
		availableSeat: "",
		id: "",
	});

	useEffect(() => {
		setFlightData({
			airlineName: location.state.airlineName,
			source: location.state.source,
			destination: location.state.destination,
			date: location.state.date,
			departureTime: location.state.departureTime,
			arrivalTime: location.state.arrivalTime,
			price: location.state.price,
			availableSeat: location.state.availableSeat,
			id: location.state.id,
		});
	}, [location.state]);

	function handleInput(event) {
		setFlightData((prevValues) => {
			return {
				...prevValues,
				[event.target.name]: event.target.value,
			};
		});
	}

	function sendData(event) {
		event.preventDefault();
		console.log(flightData);
		let url = "http://localhost:9090/update-flight";
		axios.post(url, flightData).then((response) => {
			console.log(response.data);
			// alert("Data updated Successfully");
			successMsg();
			// navigate("/flight-details");
			event.target.reset();
		});
	}

	return (
		<>
			<Header />

			<div className="row justify-content-center mt-5">
				<div className="col-8">
					<Form onSubmit={sendData}>
						<Form.Group controlId="airlineName">
							<Form.Label>Entered Id:</Form.Label>
							<Form.Control
								type="number"
								name="id"
								onChange={handleInput}
								value={flightData.id}
								disabled={true}
							/>
						</Form.Group>

						<Form.Group controlId="airlineName">
							<Form.Label>Enter Airline name:</Form.Label>
							<Form.Control
								type="text"
								name="airlineName"
								onChange={handleInput}
								value={flightData.airlineName}
								required
							/>
						</Form.Group>

						<Form.Group controlId="source">
							<Form.Label>Enter source:</Form.Label>
							<Form.Control
								type="text"
								name="source"
								onChange={handleInput}
								value={flightData.source}
								required
							/>
						</Form.Group>

						<Form.Group controlId="destination">
							<Form.Label>Enter destination:</Form.Label>
							<Form.Control
								name="destination"
								onChange={handleInput}
								value={flightData.destination}
							/>
						</Form.Group>

						<Form.Group controlId="date">
							<Form.Label>Select date:</Form.Label>
							<Form.Control
								type="date"
								name="date"
								onChange={handleInput}
								value={flightData.date}
								required
							/>
						</Form.Group>

						<Form.Group controlId="departureTime">
							<Form.Label>Select departure time:</Form.Label>
							<Form.Control
								type="time"
								name="departureTime"
								onChange={handleInput}
								value={flightData.departureTime}
								required
							/>
						</Form.Group>

						<Form.Group controlId="arrivalTime">
							<Form.Label>Enter arrival time:</Form.Label>
							<Form.Control
								type="time"
								name="arrivalTime"
								onChange={handleInput}
								value={flightData.arrivalTime}
							/>
						</Form.Group>

						<Form.Group controlId="price">
							<Form.Label>Enter Price:</Form.Label>
							<Form.Control
								name="price"
								onChange={handleInput}
								value={flightData.price}
								required
								min="500"
							/>
						</Form.Group>

						<Form.Group controlId="availableSeat">
							<Form.Label>Enter available seats:</Form.Label>
							<Form.Control
								name="availableSeat"
								onChange={handleInput}
								value={flightData.availableSeat}
								max="200"
								min="1"
								required
							/>
						</Form.Group>

						<Button variant="primary" type="submit" className="w-100 mt-3">
							Update
						</Button>
					</Form>
				</div>
				<ToastContainer
					position="top-center"
					autoClose={5000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
					theme="dark"
				/>
			</div>
		</>
	);
}
