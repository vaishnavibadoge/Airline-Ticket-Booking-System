import axios from "axios";
import { useState } from "react";
import Header from "./Navbar/Header";
import { Form, Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AddFlight() {
	const [source, setSource] = useState("");
	const successMsg = () => {
		toast.success("Flights details added successfully!", {
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

	const errorMsg = () => {
		toast.error("Some error occured!", {
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
	});

	function handleInput(event) {
		const { name, value } = event.target;

		setFlightData((prevValues) => ({
			...prevValues,
			[name]: value,
		}));
	}

	function sendData(event) {
		event.preventDefault();
		console.log(flightData);
		let url = "http://localhost:9090/add-flight";
		axios
			.post(url, flightData)
			.then((response) => {
				console.log(response.data);
				// alert("Data added Successfully");
				successMsg();
			})
			.catch((error) => {
				console.error(error);
				errorMsg();
			});
		event.target.reset();
	}

	return (
		<>
			<Header />

			<div className="row justify-content-center mt-5">
				<div className="col-8">
					<Form onSubmit={sendData}>
						<Form.Group controlId="airlineName">
							<Form.Label>Enter Airline name:</Form.Label>
							<Form.Control
								type="text"
								name="airlineName"
								onChange={handleInput}
								required
							/>
						</Form.Group>

						<Form.Group controlId="source">
							<Form.Label>Enter source:</Form.Label>
							<Form.Control
								as="select"
								name="source"
								onChange={handleInput}
								required
							>
								<option value="">Select source</option>
								<option value="Mumbai">Mumbai</option>
								<option value="Delhi">Delhi</option>
								<option value="Bangalore">Bangalore</option>
								<option value="Hyderabad">Hyderabad</option>
							</Form.Control>
						</Form.Group>

						<Form.Group controlId="destination">
							<Form.Label>Enter destination:</Form.Label>
							<Form.Control
								as="select"
								name="destination"
								onChange={handleInput}
								required
							>
								<option value="">Select destination</option>
								<option value="Mumbai">Mumbai</option>
								<option value="Delhi">Delhi</option>
								<option value="Bangalore">Bangalore</option>
								<option value="Hyderabad">Hyderabad</option>
							</Form.Control>
						</Form.Group>

						<Form.Group controlId="date">
							<Form.Label>Select date:</Form.Label>
							<Form.Control
								type="date"
								name="date"
								onChange={handleInput}
								required
							/>
						</Form.Group>

						<Form.Group controlId="departureTime">
							<Form.Label>Select departure time:</Form.Label>
							<Form.Control
								type="time"
								name="departureTime"
								onChange={handleInput}
							/>
						</Form.Group>

						<Form.Group controlId="arrivalTime">
							<Form.Label>Enter arrival time:</Form.Label>
							<Form.Control
								type="time"
								name="arrivalTime"
								onChange={handleInput}
							/>
						</Form.Group>

						<Form.Group controlId="price">
							<Form.Label>Enter Price:</Form.Label>
							<Form.Control
								type="number"
								name="price"
								onChange={handleInput}
								required
								min="500"
							/>
						</Form.Group>

						<Form.Group controlId="availableSeat">
							<Form.Label>Enter available seats:</Form.Label>
							<Form.Control
								name="availableSeat"
								onChange={handleInput}
								type="number"
								max="200"
								min="1"
								required
							/>
						</Form.Group>

						<Button variant="primary" type="submit" className="w-100 mt-3">
							Add
						</Button>
					</Form>
				</div>
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
		</>
	);
}
