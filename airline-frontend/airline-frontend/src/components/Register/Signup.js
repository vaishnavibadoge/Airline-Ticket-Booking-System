import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import "./Signup.css";
import Header from "../Navbar/Header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Signup() {
	let [isPasswordValid, setIsPasswordValid] = useState(true);
	const [user, setUser] = useState({
		username: "",
		password: "",
		email: "",
		mobile: "",
	});

	const successMsg = () => {
		toast.success(`${errors.success}`, {
			position: "top-center",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "colored",
		});
	};

	const errorMsg = () => {
		toast.error(`${errors.error}`, {
			position: "top-center",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "colored",
		});
	};

	const [errors, setErrors] = useState({});

	const formRef = useRef();

	const validateField = (fieldName, value) => {
		let error = null;

		if (fieldName === "username") {
			error = value ? null : "Please enter a username";
		} else if (fieldName === "password") {
			error = value ? null : "Please enter a password";
		} else if (fieldName === "email") {
			if (!value) {
				error = "Please enter an email";
			} else if (!/\S+@\S+\.\S+/.test(value)) {
				error = "Please enter a valid email";
			}
		} else if (fieldName === "mobile") {
			// if (!value) {
			// 	error = "Please enter a mobile number";
			// } else if ("^\\+?(91)?[6-9]\\d{9}$".test(value)) {
			// 	error = "Please enter a valid 10-digit mobile number";
			// }
			if (!value) {
				error = "Please enter a mobile number";
			} else if (!/^(\+91)?[6-9]\d{9}$/.test(value)) {
				error = "Please enter a valid 10-digit mobile number";
			}
		}

		return error;
	};

	const handleUsernameAction = (e) => {
		const value = e.target.value;
		const error = validateField("username", value);

		setErrors((prevErrors) => ({
			...prevErrors,
			username: error,
		}));

		setUser((prevUser) => ({
			...prevUser,
			username: value,
		}));
	};

	const handlePasswordAction = (e) => {
		let newuser = { ...user, password: e.target.value };
		setUser(newuser);
		// setPassword(e.target.value);

		// Validate password
		const passwordRegex =
			/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$&]).{8,}$/;
		const isValid = passwordRegex.test(e.target.value);
		setIsPasswordValid(isValid);
	};

	const handleEmailAction = (e) => {
		const value = e.target.value;
		const error = validateField("email", value);

		setErrors((prevErrors) => ({
			...prevErrors,
			email: error,
		}));

		setUser((prevUser) => ({
			...prevUser,
			email: value,
		}));
	};

	const handleMobileAction = (e) => {
		const value = e.target.value;
		const error = validateField("mobile", value);

		setErrors((prevErrors) => ({
			...prevErrors,
			mobile: error,
		}));

		setUser((prevUser) => ({
			...prevUser,
			mobile: value,
		}));
	};

	const registerAction = async () => {
		try {
			const validationErrors = {};
			Object.keys(user).forEach((key) => {
				const error = validateField(key, user[key]);
				if (error) {
					validationErrors[key] = error;
				}
			});

			if (Object.keys(validationErrors).length > 0) {
				setErrors(validationErrors);
				return;
			}

			const url = "http://localhost:9090/registration";
			const data = {
				fname: user.username,
				password: user.password,
				email: user.email,
				mobile: user.mobile,
			};

			const res = await axios.post(url, data);

			if (res.status !== 200) {
				throw new Error("Server Error");
			} else {
				setUser({
					username: "",
					password: "",
					email: "",
					mobile: "",
				});
			}

			// formRef.current.classList.remove("was-validated");
			setErrors((prevErrors) => ({
				...prevErrors,
				success: "Registration successful!",
			}));
		} catch (err) {
			alert("Some error occured");
			setErrors((prevErrors) => ({
				...prevErrors,
				error: "Registration failed. Please try again later.",
			}));
		}
	};

	return (
		<>
			<Header />
			<div className="my-img2 d-flex flex-column">
				<Container>
					<Row
						className="justify-content-center flex-grow-1"
						style={{ marginTop: "10%" }}
					>
						<Col
							sm={12}
							md={6}
							className="align-item-center text-white pt-2"
							style={{
								background: "rgba(77, 86, 108, 0.6)",
								backdropFilter: "blur(8px)",
								borderRadius: "10px",
								padding: "20px",
							}}
						>
							<h1 className="text-center text-white">Sign Up</h1>
							<Form ref={formRef} className="needs-validation" noValidate>
								<Form.Control
									type="text"
									className={`form-control form-control-lg ${
										errors.username ? "is-invalid" : ""
									}`}
									placeholder="Enter Username"
									value={user.username}
									onChange={handleUsernameAction}
									required
								/>
								{errors.username && (
									<div className="invalid-feedback" style={{ color: "beige" }}>
										{errors.username}
									</div>
								)}

								<Form.Control
									type="password"
									className={`form-control form-control-lg mt-2 ${
										errors.password ? "is-invalid" : ""
									}`}
									placeholder="Enter Password"
									value={user.password}
									pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$&]).{8,}"
									isInvalid={!isPasswordValid}
									onChange={handlePasswordAction}
									required
								/>
								<Form.Control.Feedback type="invalid">
									<p className="fs-6 " style={{ color: "beige" }}>
										Please enter a valid password (minimum 8 characters, at
										least one uppercase letter, one lowercase letter, one digit,
										and one special character).
									</p>
								</Form.Control.Feedback>
								{errors.password && (
									<div className="invalid-feedback" style={{ color: "beige" }}>
										{errors.password}
									</div>
								)}

								<Form.Control
									type="text"
									className={`form-control form-control-lg mt-2 ${
										errors.email ? "is-invalid" : ""
									}`}
									placeholder="Enter E-mail"
									value={user.email}
									onChange={handleEmailAction}
									required
								/>
								{errors.email && (
									<div className="invalid-feedback" style={{ color: "beige" }}>
										{errors.email}
									</div>
								)}

								<Form.Control
									type="number"
									className={`form-control form-control-lg mt-2 ${
										errors.mobile ? "is-invalid" : ""
									}`}
									placeholder="Enter Mobile Number"
									value={user.mobile}
									pattern="^\\+?(91)?[6-9]\\d{9}$"
									onChange={handleMobileAction}
									required
								/>
								{errors.mobile && (
									<div className="invalid-feedback" style={{ color: "beige" }}>
										{errors.mobile}
									</div>
								)}

								<Row className="justify-conten-center">
									<Col className="justify-content-center">
										<div className="d-flex  mb-3 justify-content-center">
											<Button
												type="button"
												variant="secondary"
												className="mt-3 me-3"
												onClick={registerAction}
											>
												Register
											</Button>
										</div>
										<hr className="ms-auto me-auto w-50" />
										<div className="d-flex justify-content-center">
											<Link to={"/login"} className="btn btn-primary ">
												Login Here
											</Link>
										</div>
									</Col>
								</Row>
								{errors.success &&
									// <div className="alert alert-success mt-3 fs-5">
									// 	{errors.success}
									// </div>
									successMsg()}
								{errors.error &&
									// <div className="alert alert-danger mt-3 fs-5">
									// 	{errors.error}
									// </div>
									errorMsg()}
							</Form>
						</Col>
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
					theme="colored"
                    limit={1}
				/>
			</div>
		</>
	);
}

export default Signup;
