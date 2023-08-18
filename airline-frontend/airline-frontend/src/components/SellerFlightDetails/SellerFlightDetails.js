import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "../Navbar/Header";
import { useNavigate, Navigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SellerFlightDetails() {
	const navigate = useNavigate();
	const [listOfFlight, setListOfFlight] = useState([]);

	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const deleteSuccessMsg = () => {
		toast.success("Deleted Sucessfully", {
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
		toast.error("As this flight have bookings; it cannot be deleted", {
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

	function capitalizeFirstLetter(str) {
		return str.charAt(0).toUpperCase() + str.slice(1);
	}
	console.log(localStorage.getItem("name"));
	const name = capitalizeFirstLetter(localStorage.getItem("name"));

	const loadOnStart = () => {
		let url = `http://localhost:9090/seller-flight?email=${name}`;
		axios.get(url).then((response) => {
			console.log(response.data);
			setListOfFlight(response.data);
		});
	};

	useEffect(() => {
		loadOnStart();
	}, []);

	const editUserAction = (item) => {
		navigate("/update-flight", {
			state: {
				airlineName: item.airlineName,
				source: item.source,
				destination: item.destination,
				date: item.date,
				departureTime: item.departureTime,
				arrivalTime: item.arrivalTime,
				availableSeat: item.availableSeat,
				price: item.price,
				id: item.id,
			},
		});
	};

	const deleteUserAction = async (item) => {
		try {
			// backend call delete this user.
			let url = `http://localhost:9090/delete-flight?id=${item.id}`;
			let res = await fetch(url);

			if (res.status === 500) {
				let erroMessage =
					"This flight could not be deleted because it has booking";
				throw new Error(erroMessage);
			}

			handleClose();
			// alert("success");
			deleteSuccessMsg();

			// refresh the page on success
			// getAllFlightAction();
			loadOnStart();
		} catch (err) {
			// alert("Some error occured");
			errorMsg();
		}
	};

	return (
		<>
			<Header />
			<div className="row justify-content-center mt-5">
				<div className="col-sm-12 col-md-11">
					<h3>Flights List</h3>
					<table className="table">
						<thead>
							<tr>
								<th scope="col">#</th>
								<th scope="col">Airline Name</th>
								<th scope="col">Source</th>
								<th scope="col">Destination</th>
								<th scope="col">Date</th>
								<th scope="col">Departure Time</th>
								<th scope="col">Arrival Time</th>
								<th scope="col">Price</th>
								<th scope="col">Edit</th>
								<th scope="col">Delete</th>
							</tr>
						</thead>
						<tbody>
							{listOfFlight.map((item, index) => (
								<tr>
									<th scope="row">{index + 1}</th>
									<td className="text-capitalize">{item.airlineName}</td>
									<td>{item.source}</td>
									<td>{item.destination}</td>
									<td>{item.date}</td>
									<td>{item.departureTime}</td>
									<td>{item.arrivalTime}</td>
									<td>{item.price}</td>
									<td className="fs-5">
										<input
											type="button"
											value="✏️"
											onClick={() => editUserAction(item)}
											style={{
												backgroundColor: "transparent",
												border: "none",
											}}
										/>

										{/* <input
											type="button"
											value="🗑️"
											// onClick={deleteUserAction}
											onClick={() => deleteUserAction(item)}
											style={{
												backgroundColor: "transparent",
												border: "none",
											}}
										/> */}
									</td>
									<td className="fs-5">
										<div>
											<Button variant="" onClick={handleShow}>
												🗑️
											</Button>

											<Modal show={show} onHide={handleClose}>
												<Modal.Header closeButton>
													<Modal.Title>Delete Action</Modal.Title>
												</Modal.Header>
												<Modal.Body>Do you really wanna delete</Modal.Body>
												<Modal.Footer>
													<Button variant="secondary" onClick={handleClose}>
														Close
													</Button>
													<Button
														variant="primary"
														onClick={() => deleteUserAction(item)}
													>
														Delete
													</Button>
												</Modal.Footer>
											</Modal>
										</div>
									</td>
								</tr>
							))}
						</tbody>
					</table>
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

export default SellerFlightDetails;
