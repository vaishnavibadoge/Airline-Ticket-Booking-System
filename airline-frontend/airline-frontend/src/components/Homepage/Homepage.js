import React from "react";
import "./Homepage.css";
import HomepageSearch from "../HomepageSearch/HomepageSearch";
import Header from "../Navbar/Header.js";
import Footer from "../Footer/Footer.js";
import HomeCards from "../HomeCards/HomeCards";
import HomeBanner from "../HomeBanner/HomeBanner";
import HomeCardsFeatures from "../HomeCardsFeatures/HomeCardsFeatures";

function Homepage() {
	return (
		<>
			<Header />
			<HomepageSearch />
			<hr />
            <HomeCardsFeatures/>
            <hr />
			<HomeCards />
			<HomeBanner />
			<Footer />
		</>
	);
}

export default Homepage;
