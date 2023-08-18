import React from "react";
import "./HomeCards.css";
// import LocationOnIcon from '@mui/icons-material/LocationOn';
import ExploreIcon from '@mui/icons-material/Explore';

function HomeCards() {
	return (
		<div className="row justify-content-center">
			<div className="">
				<div className="row">
					<div className="col justify-content-center align-items-center">
						<h1 className="text-center mb-5 mt-5"><ExploreIcon fontSize="large"/> Popular Destinations</h1>
					</div>
				</div>

				<div className="row justify-content-center">
					<div className="col-lg-2 col-md-6 col-sm-12 mb-4">
						<div className="card hover-card">
							<img
								src="https://fastui.cltpstatic.com/image/upload/w_176,h_178,f_auto,q_auto,c_fill,e_sharpen:80,g_auto,fl_progressive/hotels/places/cities/images/Mumbai_2000_1328.png"
								alt="Mumbai"
								className="card-img-top"
							/>
							<div className="card-body">
								<h5 className="card-title text-center mt-3" style={{color:"black"}}>Mumbai</h5>
								<p className="card-text text-center">
									Mumbai is the financial capital of India, known for its
									bustling city life, Bollywood film industry, and iconic
									landmarks.
								</p>
							</div>
						</div>
					</div>

					<div className="col-lg-2 col-md-6 col-sm-12 mb-4">
						<div className="card hover-card">
							<img
								src="https://fastui.cltpstatic.com/image/upload/w_176,h_178,f_auto,q_auto,c_fill,e_sharpen:80,g_auto,fl_progressive/hotels/places/cities/images/Delhi_2000_1328.png"
								alt="Delhi"
								className="card-img-top"
							/>
							<div className="card-body">
								<h5 className="card-title text-center mt-3" style={{color:"black"}}>Delhi</h5>
								<p className="card-text text-center">
									Delhi is the capital city of India, known for its rich history
									and cultural landmarks. And historical monuments.
								</p>
							</div>
						</div>
					</div>
					<div className="col-lg-2 col-md-6 col-sm-12 mb-4">
						<div className="card hover-card">
							<img
								style={{ height: "238px" }}
								src={require("../../img/banglore.jpg")}
								alt="Banglore"
								className="card-img-top img-fluid"
							/>
							<div className="card-body">
								<h5 className="card-title text-center mt-3" style={{color:"black"}}>Bangalore</h5>
								<p className="card-text text-center">
									Bangalore, is the IT hub of India, renowned for its
									technological advancements, pleasant weather.
								</p>
							</div>
						</div>
					</div>
					<div className="col-lg-2 col-md-6 col-sm-12 mb-4">
						<div className="card hover-card">
							<img
								style={{ height: "238px" }}
								src={require("../../img/hyderabad.jpg")}
								alt="Hyderabad"
								className="card-img-top img-fluid"
							/>
							<div className="card-body">
								<h5 className="card-title text-center mt-3" style={{color:"black"}}>Hyderabad</h5>
								<p className="card-text text-center">
									Hyderabad is a historic city in India, famous for its
									magnificent monuments, delectable cuisine, and the iconic
									Charminar.
								</p>
							</div>
						</div>
					</div>
				</div>

				<div className="row">
					<div className="col">
						<hr />
					</div>
				</div>
			</div>
		</div>
	);
}

export default HomeCards;
