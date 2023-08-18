import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import FlightLandIcon from "@mui/icons-material/FlightLand";
import EventIcon from "@mui/icons-material/Event";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function HomepageSearch() {
	const [from, setFrom] = useState("");
	const [to, setTo] = useState("");
	const [date, setDate] = useState("");
	const [listOfFlight, setListOfFlight] = useState([]);
	const navigate = useNavigate();

	const loginStatus = localStorage.getItem("loginStatus");

	function search(event) {
		event.preventDefault();

		const error = () => {
			if (loginStatus) {
				toast.warn("Select data correctly", {
					position: "top-center",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "light",
				});
			} else {
				toast.error("Login first!", {
					position: "top-center",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "dark",
				});
			}
		};

		let url = `http://localhost:9090/flights?source=${from}&destination=${to}&date=${date}`;
		// axios.get(url).then((response) => {
		// 	console.log(response.data);
		// 	setListOfFlight(response.data);

		// 	if (loginStatus) {
		// 		navigate("/flight-listing", {
		// 			state: {
		// 				from,
		// 				to,
		// 				date,
		// 				listOfFlight: response.data,
		// 			},
		// 		});
		// 	} else {
		// 		alert("Login First");
		// 		navigate("/login");
		// 	}
		// });

		axios
			.get(url)
			.then((response) => {
				console.log(response.data);
				setListOfFlight(response.data);

				if (loginStatus) {
					navigate("/flight-listing", {
						state: {
							from,
							to,
							date,
							listOfFlight: response.data,
						},
					});
				} else {
					// alert("Login First");
					error();
					// navigate("/login");
				}
			})
			.catch((e) => {
				error();
			});
	}

	return (
		<div className="row justify-content-center mt-5">
			<div className="col-md-8 col-sm-10">
				<div className="booking_box p-4 bg-light rounded shadow">
					<h4 className="text-center mb-4">Flight Search</h4>
					<div className="row">
						<div className="col-md-6 col-sm-12 mb-3">
							<div className="input-group">
								<span className="input-group-text bg-danger text-white">
									<FlightTakeoffIcon fontSize="small" />
								</span>
								<select
									className="form-select options custom-select-border-none"
									aria-label="From"
									value={from}
									onChange={(e) => setFrom(e.target.value)}
								>
									<option value="">Select Departure City</option>
									<option value="Mumbai">Mumbai</option>
									<option value="Delhi">Delhi</option>
									<option value="Bangalore">Bangalore</option>
									<option value="Hyderabad">Hyderabad</option>
								</select>
							</div>
						</div>
						<div className="col-md-6 col-sm-12 mb-3">
							<div className="input-group">
								<span className="input-group-text bg-danger text-white">
									<FlightLandIcon fontSize="small" />
								</span>
								<select
									className="form-select options custom-select-border-none"
									aria-label="To"
									value={to}
									onChange={(e) => setTo(e.target.value)}
								>
									<option value="">Select Destination City</option>
									<option value="Mumbai">Mumbai</option>
									<option value="Delhi">Delhi</option>
									<option value="Bangalore">Bangalore</option>
									<option value="Hyderabad">Hyderabad</option>
								</select>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-6 col-sm-12 mb-3">
							<div className="input-group">
								<span className="input-group-text bg-danger text-white">
									<EventIcon fontSize="small" />
								</span>
								<Form.Control
									type="date"
									value={date}
									onChange={(e) => setDate(e.target.value)}
									required
								/>
							</div>
						</div>
					</div>
					<div className="row justify-content-center">
						<Button variant="danger" onClick={search}>
							Search Flights
						</Button>
					</div>
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
				theme="light"
			/>
		</div>
	);
}

export default HomepageSearch;
