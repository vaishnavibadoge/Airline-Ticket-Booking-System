import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useRef, useState } from "react";
import Header from "../Navbar/Header";
import axios from "axios";

function Registration() {
	// let formRef = useRef();
	let [user, setUser] = useState({
		fname: "",
		lname: "",
		email: "",
		password: "",
		mobile: "",
	});
	const myStyle = {
		backgroundImage: "url('./airplane3.jpg')",
		height: "100vh",
		marginTop: "0px",
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
	};

	// let handlerFNameAction = (e) => {
	// 	let newUser = { ...user, fname: e.target.value };
	// 	setUser(newUser);
	// };
	// let handlerLNameAction = (e) => {
	// 	let newUser = { ...user, lname: e.target.value };
	// 	setUser(newUser);
	// };
	// let handlerEmailAction = (e) => {
	// 	let newUser = { ...user, email: e.target.value };
	// 	setUser(newUser);
	// };
	// let handlerMobileAction = (e) => {
	// 	let newUser = { ...user, mobile: e.target.value };
	// 	setUser(newUser);
	// };
	// let handlerPasswordAction = (e) => {
	// 	let newUser = { ...user, pass: e.target.value };
	// 	setUser(newUser);
	// };

	// const [isSuccess, setIsSuccess] = useState(false);
	// const [isError, setIsError] = useState(false);

	// let registerAction = async () => {
	// 	try {
	// 		formRef.current.classList.add("was-validated");
	// 		let formStatus = formRef.current.checkValidity();
	// 		if (!formStatus) {
	// 			return;
	// 		}

	// 		// BACKEND
	// 		let url = `http://localhost:9090/registration?fname=${user.fname}&lname=${user.lname}&password=${user.password}&email=${user.email}&mobile=${user.mobile}`;

	// 		let res = await fetch(url);

	// 		if (res.status !== 200) {
	// 			let serverMsg = await res.text();
	// 			throw new Error(serverMsg);
	// 		}

	// 		let newuser = {
	// 			fname: "",
	// 			lname: "",
	// 			password: "",
	// 			email: "",
	// 			mobile: "",
	// 		};
	// 		setUser(newuser);

	// 		formRef.current.classList.remove("was-validated");

	// 		alert("success");
	// 		setIsSuccess(true);
	// 	} catch (err) {
	// 		alert(err.message);
	// 		setIsError(true);
	// 	} finally {
	// 		setTimeout(() => {
	// 			setIsSuccess(false);
	// 			setIsError(false);
	// 		}, 5000);
	// 	}
	// };

	function handleInput(event) {
		setUser((prevValues) => {
			return {
				...prevValues,
				[event.target.name]: event.target.value,
			};
		});
	}

	function registerAction(event) {
		event.preventDefault();
		console.log(user);
		let url = "http://localhost:9090/registration";
		axios.post(url, user).then((response) => {
			console.log(response.data);
			alert("success");
			// event.target.reset();
		});
	}

	return (
		<>
			<Header />
			<div style={myStyle}>
				<Row style={{ height: "6rem" }}></Row>
				<Container className="">
					<Row>
						<Col></Col>
						<Col
							style={{ background: "rgba(150,180,250,0.7)" }}
							className="text-dark pt-2"
							xs={8}
							md={5}
						>
							<Row>
								<Col></Col>
								<Col>
									<h1>REGISTRATION</h1>
								</Col>
								<Col></Col>
							</Row>
							<Form className="my-1">
								<div className="d-flex justify-content-around">
									<Form.Group controlId="fname" className="mt-1">
										<Form.Label className="fs-5">First Name</Form.Label>
										<Form.Control
											type="text"
											name="fname"
											placeholder="Enter First Name"
											id="fname"
											value={user.fname}
											autoComplete="off"
											onChange={handleInput}
											pattern="^[A-Za-z\s]{3,20}"
											title="Do not Enter numeric value"
											minLength="3"
											maxLength="20"
											required
										/>
									</Form.Group>
									<Form.Group controlId="lname" className="mt-1">
										<Form.Label className="fs-5">Last Name</Form.Label>
										<Form.Control
											type="text"
											name="lname"
											placeholder="Enter Last Name"
											id="lname"
											value={user.lname}
											autoComplete="off"
											onChange={handleInput}
											pattern="[A-Za-z ]{3,25}"
											title="Do not Enter numeric value"
											minLength="3"
											maxLength="25"
											required
										/>
									</Form.Group>
								</div>
								<div className="d-flex justify-content-around">
									<Form.Group controlId="formBasicEmail" className="mt-1">
										<Form.Label className="fs-5">Email address</Form.Label>
										<Form.Control
											type="email"
											name="email"
											placeholder="Enter Valid Email Id"
											id="email"
											value={user.email}
											autoComplete="off"
											pattern="[a-z]+@[a-z0-9-]+\.[a-z]{5,}$"
											title="Enter valid email id"
											onChange={handleInput}
											required
										/>
									</Form.Group>
									<Form.Group controlId="mobileno" className="mt-1">
										<Form.Label className="fs-5">Mobile Number</Form.Label>
										<Form.Control
											type="number"
											name="mobile"
											id="mobile"
											autoComplete="off"
											value={user.mobile}
											title="Enter 10 digit valid number"
											placeholder="Enter Mobile Number "
											pattern="[789][0-9]{9}"
											minLength="10"
											maxLength="10"
											onChange={handleInput}
											required
										/>
									</Form.Group>
								</div>
								<div className="d-flex justify-content-around">
									{/* <Form.Group controlId="formBasicPassword" className="mt-1">
										<Form.Label className="fs-5">Password</Form.Label>
										<Form.Control
											type="password"
											name="pass"
											id="pass"
											placeholder="Create New Password"
											pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$&]).{8,30}"
											title="Min 8 charaters, Must contain: 1st letter Upper case, 1 lower case, 1 number, 1 symbol(!@#$&)"
											// value={user.password}
											autoComplete="off"
											onChange={handleInput}
											minLength="8"
											maxLength="30"
											required
										/>
									</Form.Group> */}
									<Form.Group controlId="formBasicPassword" className="mt-1">
										<Form.Label className="fs-5">Confirm Password</Form.Label>
										<Form.Control
											type="password"
											name="password"
											id="password"
											placeholder="Confirm Password"
											pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$&]).{8,30}"
											title="Min 8 charaters, Must contain: 1st letter Upper case, 1 lower case, 1 number, 1 symbol(!@#$&)"
											value={user.password}
											autoComplete="off"
											onChange={handleInput}
											minLength="8"
											maxLength="30"
											required
										/>
									</Form.Group>
								</div>
								<Row>
									<Col></Col>
									<Col>
										<div className="d-flex gap-5 mb-3">
											<Button
												variant="primary"
												type="submit"
												className="mt-3 me-3"
												onSubmit={registerAction}
											>
												Submit
											</Button>
											<Button variant="primary" type="submit" className="mt-3">
												Cancel
											</Button>
										</div>
										<p style={{ fontSize: "18px" }}>
											Existing User? <a className=""> Login Here</a>
										</p>
									</Col>
									<Col></Col>
								</Row>
							</Form>
						</Col>
						<Col></Col>
					</Row>
				</Container>
				<Row style={{ height: "2rem" }}></Row>
			</div>
		</>
	);
}
export default Registration;
