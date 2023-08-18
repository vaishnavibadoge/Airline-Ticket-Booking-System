import React, { useEffect, useState } from "react";
import "./FlightRow.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import FlightLandIcon from "@mui/icons-material/FlightLand";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import BookIcon from "@mui/icons-material/Book";
import Button from "@mui/material/Button";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function FlightRow(props) {
	const navigate = useNavigate();

	const {
		id,
		airlineName,
		departureCity,
		arrivalCity,
		departureTime,
		arrivalTime,
		date,
		source,
		destination,
		price,
	} = props;

	const [passengerId, setPassengerId] = useState("");

	const storedPassengerId = localStorage.getItem("userId");

	const [booking, setBooking] = useState({
		flight: {
			id: parseInt(id),
		},
		passenger: {
			id: parseInt(storedPassengerId),
		},
		bookingDate: date,
	});

	const bookingSuccessMsg = () => {
		toast.success("Flight Booked Successfully", {
			position: "top-center",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "light",
		});
	};

	const bookFlight = (event) => {
		event.preventDefault();
		console.log(booking);
		let url = "http://localhost:9090/book-flight";
		axios.post(url, booking).then((response) => {
			console.log(response.data);
			// alert("Flight booked successfully");
			bookingSuccessMsg();
			setTimeout(function () {
				window.location.href = "/home";
				// navigate("/home");
			}, 5000);
		});
	};

	return (
		<div className="my-3 shadow-hover">
			<div
				className="row justify-content-center flight-row-container"
				style={{ backgroundColor: "#F8F8FF", borderRadius: "15px" }}
			>
				<div className="col-sm-12 col-md-10 p-4 d-flex mx-2 justify-content-between align-items-center">
					<div className="airline_name justify-content-center">
						<h5>Flight:</h5>
						<h6>{airlineName}</h6>
					</div>
					<div className="dotted_line"></div>
					<div className="departureTime justify-content-center">
						<FlightTakeoffIcon fontSize="small" />
						<h5>Departure time</h5>
						<p>{departureTime}</p>
					</div>
					<div className="dotted_line"></div>
					<div className="arrivalTime justify-content-center">
						<FlightLandIcon fontSize="small" />
						<h5>Arrival time</h5>
						<p>{arrivalTime}</p>
					</div>
					<div className="dotted_line"></div>
					<div className="price justify-content-center">
						<CurrencyRupeeIcon fontSize="small" />
						<h5>Price</h5>
						<p>{price}</p>
					</div>
					<div className="book_button">
						<form onSubmit={bookFlight}>
							<Button
								variant="contained"
								color="primary"
								type="submit"
								startIcon={<BookIcon />}
							>
								Book Ticket
							</Button>
						</form>
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

export default FlightRow;
