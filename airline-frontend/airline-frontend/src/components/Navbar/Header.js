import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import FlightIcon from "@mui/icons-material/Flight";
import SearchIcon from "@mui/icons-material/Search";
import "./Header.css";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Header() {
	let navigate = useNavigate();

	const logOutAction = () => {
		localStorage.removeItem("role");
		localStorage.removeItem("loginStatus");
		localStorage.removeItem("username");
		localStorage.removeItem("userId");
		navigate("/login", { replace: true });
	};

	let loginStatus = localStorage.getItem("loginStatus");

	return (
		<div>
			<Navbar collapseOnSelect expand="lg" className="gradient-background">
				<Navbar.Brand className="increase-size">
					<Link to={"/"} className="text-decoration-none">
						<Box display="flex" alignItems="center" className="ms-5">
							<FlightIcon className="text-white" fontSize="large" />
							&nbsp;
							<span>
								<h3 class="text-light">Skyscanner </h3>
							</span>
						</Box>
					</Link>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="me-auto"></Nav>

					{/* SEARCH BAR */}
					<form class="search-form me-4">
						<input type="text" placeholder="Search" />
						<button type="submit">
							{/* <img src="" alt="" id="search_icon" /> */}
							<SearchIcon />
						</button>
					</form>

					<Nav>
						<Nav.Link floating className="navbtn m-1 text-white" href="/home">
							Home
						</Nav.Link>

						{localStorage.getItem("role") === "Admin" ||
						localStorage.getItem("role") === "Seller" ? (
							<>
								<Nav.Link
									floating
									className="navbtn m-1 text-white"
									href="/add-flight"
								>
									Add Flight
								</Nav.Link>
							</>
						) : (
							<></>
						)}

						{localStorage.getItem("role") === "Admin" ? (
							<>
								<Nav.Link
									floating
									className="navbtn m-1 text-white"
									href="/flight-details"
								>
									Flights List
								</Nav.Link>
							</>
						) : (
							<></>
						)}

						{localStorage.getItem("role") === "Seller" ? (
							<Nav.Link
								floating
								className="navbtn m-1 text-white"
								href="/seller-flight-list"
							>
								Seller Flights List
							</Nav.Link>
						) : (
							<></>
						)}

						<Nav.Link floating className="navbtn m-1 text-white" href="aboutus">
							About Us
						</Nav.Link>
						<Nav.Link
							floating
							className="navbtn m-1 text-white"
							href="/contactus"
						>
							Contact Us
						</Nav.Link>
						{/* FLIGHT LISTING */}

						{/* //////////////////////////////////////////// */}
						{loginStatus ? (
							<>
								<Nav.Link
									floating
									className="navbtn m-1 text-white custom-height"
									style={{ fontWeight: "700" }}
								>
									Welcome: {localStorage.getItem("username")}
								</Nav.Link>

								<Nav.Link
									floating
									className="navbtn m-1 text-white custom-height"
									style={{ fontWeight: "700" }}
								>
									Role: {localStorage.getItem("role")}
								</Nav.Link>
							</>
						) : (
							<></>
						)}
						{/* //////////////////////////////////////////// */}
						{loginStatus ? (
							<Button
								className={"custom-height me-3"}
								variant="outline-light"
								onClick={logOutAction}
							>
								Logout
							</Button>
						) : (
							<div>
								<Link to={"/login"}>
									<Button className="custom-height" variant="outline-light">
										Log in
									</Button>
								</Link>
								&nbsp;&nbsp;
								<Link to={"/register"}>
									<Button
										className="custom-height me-4"
										variant="outline-light"
									>
										Sign Up
									</Button>
								</Link>
							</div>
						)}
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
}

export default Header;
