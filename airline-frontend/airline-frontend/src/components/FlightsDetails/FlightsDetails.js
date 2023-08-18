import React, { useEffect, useState } from "react";
import Header from "../Navbar/Header.js";
import { useNavigate, Navigate } from "react-router-dom";
// import { useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function FlightsDetails() {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const navigate = useNavigate();

	const deleteSuccessMsg = () => {
		toast.success("Deleted Successfully!", {
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
		toast.error("Some error occured", {
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

	// const history = useHistory();

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
			getAllFlightAction();
		} catch (err) {
			// alert("Some error occured");
            handleClose();
            errorMsg();
		}
	};

	// const editUserAction = async (item) => {
	// 	try {
	// 		let url = `http://localhost:9090/update-flight?id=${item.id}`;
	// 		let res = await fetch(url);

	// 		if (res.status === 500) {
	// 			let erroMessage = await res.text();
	// 			throw new Error(erroMessage);
	// 		}

	// 		alert("success");

	// 		//REDIRECT TO UpdateFlight

	// 	} catch (err) {
	// 		alert(err.message);
	// 	}
	// };

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

	// const editUserAction = (item) => {
	// 	const data = {
	// 		airlineName: item.airlineName,
	// 		source: item.source,
	// 		destination: item.destination,
	// 		date: item.date,
	// 		departureTime: item.departureTime,
	// 		arrivalTime: item.arrivalTime,
	// 		availableSeat: item.availableSeat,
	// 		price: item.price,
	// 		id: item.id,
	// 	};
	// 	history.push("/update-flight", data);
	// };

	const [flightList, setFlightList] = useState([]);

	useEffect(() => {
		getAllFlightAction();
	}, []);

	const getAllFlightAction = async () => {
		let url = `http://localhost:9090/find-all-flights`;
		let res = await fetch(url);
		let list = await res.json();

		setFlightList([...list]);
	};

	return (
		<div>
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
							{flightList.map((item, index) => (
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
									</td>
									<td>
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
	);
}

export default FlightsDetails;
