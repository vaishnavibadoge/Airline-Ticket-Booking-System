import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage.js";
import AboutUs from "./components/AboutUs/AboutUs.js";
import ContactUs from "./components/ContactUs/ContactUs.js";
import SearchForFlight from "./components/SearchForFlights";
import AddFlight from "./components/AddFlight";
import FlightListing from "./components/FlightListing/FlightListing";
import Login from "./components/Login/Login.js";
// import Registration from "./components/Register/Registration.js";
import Signup from "./components/Register/Signup";
import FlightsDetails from "./components/FlightsDetails/FlightsDetails";
import UpdateFlight from "./components/UpdateFlight/UpdateFlight";
import SellerFlightDetails from "./components/SellerFlightDetails/SellerFlightDetails";

function App() {
	let loginStatus = localStorage.getItem("loginStatus");
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					{/* {loginStatus ? (
						<Route path="/" element={<Homepage />} />
					) : (
						<Route path="/" element={<Login />} />
					)} */}

					<Route path="/" element={<Homepage />} />

					<Route path="/home" element={<Homepage />} />
					<Route path="/aboutus" element={<AboutUs />} />
					<Route path="/contactus" element={<ContactUs />} />
					<Route path="/add-flight" element={<AddFlight />} />
					<Route path="/search-flight" element={<SearchForFlight />} />
					<Route path="/flight-listing" element={<FlightListing />} />
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Signup />} />
					<Route path="/flight-details" element={<FlightsDetails />} />
					<Route path="/update-flight" element={<UpdateFlight />} />
					<Route path="/seller-flight-list" element={<SellerFlightDetails />} />
				</Routes>
			</BrowserRouter>

			{/* <AddFlight /> */}
		</div>
	);
}

export default App;
