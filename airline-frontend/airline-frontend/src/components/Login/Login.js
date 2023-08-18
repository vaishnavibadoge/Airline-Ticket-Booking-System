import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Header from "../Navbar/Header";
import Alert from "react-bootstrap/Alert";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
	const [error, setError] = useState(false);
	const isError = () => {
		toast.error("Wrong Email, Password or Role", {
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

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [role, setRole] = useState("");

	const navigate = useNavigate();
	let formRef = useRef();
	let [isEmailValid, setIsEmailValid] = useState(true);
	let [isPasswordValid, setIsPasswordValid] = useState(true);

	let [user, setUser] = useState({
		email: "",
		password: "",
	});

	let name = extractNameFromEmail(email);

	localStorage.setItem("name", name);

	const myStyle = {
		backgroundImage: "url('./airplane3.jpg')",
		height: "100vh",
		marginTop: "0px",
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
	};

	let handlerPasswordAction = (e) => {
		let newuser = { ...user, password: e.target.value };
		setUser(newuser);
		setPassword(e.target.value);

		// Validate password
		const passwordRegex =
			/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$&]).{8,}$/;
		const isValid = passwordRegex.test(e.target.value);
		setIsPasswordValid(isValid);
	};

	let handlerEmailAction = (e) => {
		let newuser = { ...user, email: e.target.value };
		setUser(newuser);
		setEmail(e.target.value);

		// Validate email
		const emailRegex = /^[a-z]+@[a-z0-9-]+\.[a-z]{2,}$/;
		const isValid = emailRegex.test(e.target.value);
		setIsEmailValid(isValid);
	};

	function extractNameFromEmail(email) {
		var atIndex = email.indexOf("@");
		if (atIndex !== -1) {
			return email.substring(0, atIndex);
		} else {
			console.error("Invalid email address");
			return null;
		}
	}

	let url = "";
	if (role === "User") {
		url = "http://localhost:9090/login-by-user";
	} else if (role === "Admin") {
		url = "http://localhost:9090/login-by-admin";
	} else if (role === "Seller") {
		url = "http://localhost:9090/login-by-seller";
	}

	async function login(event) {
		event.preventDefault();

		// Check if email and password are valid
		if (!isEmailValid || !isPasswordValid) {
			alert("Please enter valid email and password");
			return;
		}

		try {
			await axios
				.post(url, {
					email: user.email,
					password: user.password,
					role: role,
				})
				.then(
					(res) => {
						console.log(res.data.message);
						localStorage.setItem("userId", res.data.id);

						// LOCAL STORAGE///////////////////////////
						localStorage.setItem("role", `${role}`);
						localStorage.setItem("loginStatus", "true");
						let nameUpperCase = name.toUpperCase();
						localStorage.setItem("username", nameUpperCase);

						if (res.data.message === "Email not exits") {
							alert("Email not exits");
						} else if (res.data.message === "Login Success") {
							navigate("/home");
						} else {
							alert("Incorrect Email and Password not match");
						}
					},
					(fail) => {
						// console.error(fail); // Error!
						// alert("Wrong email, password or role");
						isError();
					}
				);
		} catch (err) {
			alert(err);
		}
	}

	return (
		<>
			<Header />
			<div style={myStyle}>
				<Row style={{ height: "8rem" }}></Row>
				<Container className="">
					<Row>
						<Col></Col>
						<Col
							style={{
								background: "rgba(77, 86, 108, 0.6)",
								backdropFilter: "blur(8px)",
								borderRadius: "10px",
								padding: "20px",
							}}
							className="text-white pt-2"
							xs={8}
							md={5}
						>
							<Row>
								<Col></Col>
								<Col>
									<h1>LOGIN</h1>
								</Col>
								<Col></Col>
							</Row>

							<select
								className="form-select options custom-select-border-none"
								aria-label="From"
								value={role}
								onChange={(e) => setRole(e.target.value)}
							>
								<option value="">Select Role</option>
								<option value="Admin">Admin</option>
								<option value="Seller">Flight Agent</option>
								<option value="User">User</option>
							</select>

							<Form ref={formRef} className="needs-validation my-1">
								<Form.Group controlId="formBasicEmail" className="">
									<Form.Label className="fs-5">Email address</Form.Label>
									<Form.Control
										type="email"
										placeholder="Enter email"
										value={user.email}
										onChange={handlerEmailAction}
										pattern="[a-z]+@[a-z0-9-]+\.[a-z]{2,}$"
										required
										isInvalid={!isEmailValid}
									/>
									<Form.Control.Feedback type="invalid">
										<p className="fs-6" style={{ color: "beige" }}>
											Please enter a valid email address.
										</p>
									</Form.Control.Feedback>
								</Form.Group>

								<Form.Group controlId="formBasicPassword" className="mt-3">
									<Form.Label className="fs-5">Password</Form.Label>
									<Form.Control
										type="password"
										value={user.password}
										onChange={handlerPasswordAction}
										placeholder="Password"
										pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$&]).{8,}"
										required
										isInvalid={!isPasswordValid}
									/>
									<Form.Control.Feedback type="invalid">
										<p className="fs-6 " style={{ color: "beige" }}>
											Please enter a valid password (minimum 8 characters, at
											least one uppercase letter, one lowercase letter, one
											digit, and one special character).
										</p>
									</Form.Control.Feedback>
								</Form.Group>
								<Row>
									<Col></Col>
									<Col className="justify-content-center">
										<div className="d-flex  mb-3 justify-content-center">
											<Button
												variant="primary"
												type="submit"
												className="mt-3 me-3"
												onClick={login}
											>
												Login
											</Button>
											{/* <Button variant="primary" type="submit" className="mt-3">
												Cancel
											</Button> */}
										</div>
										<hr />
										{role === "Admin" || role === "Seller" ? (
											<></>
										) : (
											<Link to={"/register"} className="btn btn-primary">
												Register Here
											</Link>
										)}
									</Col>
									<Col></Col>
								</Row>
							</Form>
						</Col>
						<Col></Col>
					</Row>
				</Container>
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
				<Row style={{ height: "4rem" }}></Row>
			</div>
		</>
	);
}

export default Login;
