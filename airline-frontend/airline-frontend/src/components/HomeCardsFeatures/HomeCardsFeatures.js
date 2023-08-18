import React from "react";
import "./HomeCardsFeatures.css";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";

function HomeCardsFeatures() {
	return (
		<div className="container">
			<header className="">
				<div className="mb-3 d-flex align-items-center justify-content-center">
					<h3>
						<EmojiObjectsIcon fontSize="large" className="mr-2" /> What
						Skyscanner brings to the table.
					</h3>
				</div>
			</header>
			<div className="row ">
				<div className="col-md-3 mb-3 ">
					<div className="card p-3 hover-card-feature feature_card">
						<div className="text-center">
							<svg
								viewBox="0 0 200 200"
								width="30px"
								height="30px"
								xmlns="http://www.w3.org/2000/svg"
								role="img"
							>
								<path
									d="M130.44 169.197c-24.86 0-45-20.141-45-44.996s20.14-45.004 45-45.004c24.852 0 45 20.149 45 45.004s-20.148 44.996-45 44.996zm25-39.245l-6.898-8.278l-12.714 10.595V99.234h-10.775v33.035l-12.714-10.595l-6.898 8.278c22.763 18.969 22.233 19.208 25 19.208c2.735 0 2.187-.198 24.999-19.208zm-3.564-71.164c-5.59 0-10.13-4.564-10.13-10.194c0-5.638 4.54-10.202 10.13-10.202c5.59 0 10.13 4.564 10.13 10.202c0 5.63-4.54 10.194-10.13 10.194zm24.784-26.91c-.337-3.277-2.721-5.78-5.959-6.254l-55.065-5.622c-2.023-.047-4.069.734-5.52 2.132l-87.932 85.027c-2.689 2.598-2.979 6.886-.4 9.594l58.405 61.259c2.58 2.708 6.845 2.59 9.526-.008l10.467-10.123a53.305 53.305 0 0 1-22.62-43.682c0-29.414 23.671-53.26 52.877-53.26c18.723 0 35.181 9.807 44.574 24.597l2.642-2.55c1.451-1.406 2.305-3.427 2.344-5.472l-3.339-55.638z"
									fill="green"
								></path>
							</svg>
						</div>
						<div className="card-body">
							<h5 className="card-title text-black">
								Search for the best flight deals
							</h5>
							<p className="card-text">
								Search for the best flight deals from 900+ travel sites. No need
								to search multiple websites, Skyscanner allows you to compare all of
								them in one place.
							</p>
						</div>
					</div>
				</div>
				<div className="col-md-3 mb-3">
					<div className="card p-3 hover-card-feature feature_card">
						<div className="text-center">
							<svg
								viewBox="0 0 200 200"
								width="30px"
								height="30px"
								xmlns="http://www.w3.org/2000/svg"
								role="img"
							>
								<path
									d="M150 110c-22.091 0-40 17.909-40 40s17.909 40 40 40s40-17.909 40-40s-17.909-40-40-40zm-23.25 48.524l6.066-7.849l8.741 6.688L165.925 131l7.325 6.701c-35.158 38.037-26.63 36.023-46.5 20.823zM56.646 56.354h27.203v15c-42.169 0-50.569 2.5-50.569-7.5V21h15v22.672C96.286 1.138 173.508 32.229 177.355 96.626a59.513 59.513 0 0 0-15.688-5.478c-8.166-49.03-68.755-69.207-105.021-34.794zm40.533 122.079c-43.898-1.615-77.604-38.829-74.483-82.475l14.962 1.07c-2.274 31.801 19.86 59.967 51.485 65.516c5.488.963-.922-.685 8.036 15.889z"
									fill="green"
								></path>
							</svg>
						</div>
						<div className="card-body">
							<h5 className="card-title text-black">Book with flexibility</h5>
							<p className="card-text">
								Our platform provides you with the convenience of easily finding
								and filtering flights that cater to your specific requirements.
								Whether you're seeking flights with flexible cancellation
								policies.
							</p>
						</div>
					</div>
				</div>
				<div className="col-md-3 mb-3">
					<div className="card p-3 hover-card-feature feature_card">
						<div className="text-center">
							<svg
								viewBox="0 0 200 200"
								width="30px"
								height="30px"
								xmlns="http://www.w3.org/2000/svg"
								role="img"
							>
								<path d="M180 100c0 44.187-35.813 80-80 80s-80-35.813-80-80s35.813-80 80-80s80 35.813 80 80zm-14.545 0c0-36.091-29.363-65.455-65.455-65.455S34.546 63.909 34.546 100S63.908 165.455 100 165.455s65.455-29.364 65.455-65.455z"></path>
								<path
									d="M132.006 61.559l-48.974 53.26l-17.569-13.51l-12.191 15.855c22.199 17.07 30.128 26.802 38.284 17.932l55.172-60l-14.722-13.537z"
									fill="green"
								></path>
							</svg>
						</div>
						<div className="card-body">
							<h5 className="card-title text-black">Trusted and free</h5>
							<p className="card-text">
								We offer our services with complete freedom, meaning there are
								no hidden charges or fees involved. You can enjoy our offerings
								without any financial obligations or unexpected costs.
							</p>
						</div>
					</div>
				</div>
				<div className="col-md-3 mb-3">
					<div className="card p-3 hover-card-feature feature_card">
						<div className="text-center">
							<svg
								viewBox="0 0 200 200"
								width="30px"
								height="30px"
								xmlns="http://www.w3.org/2000/svg"
								role="img"
							>
								<path
									d="M49 71.18a34.83 34.83 0 00-34.78 34.89c0 19.26 34.46 61 34.46 61s35.09-41.78 35.09-61A34.83 34.83 0 0049 71.18zm13 52.33H35.91V97.34H62zm87.4-106.42A34.83 34.83 0 00114.63 52c0 19.27 34.46 61.05 34.46 61.05s35.08-41.78 35.08-61a34.82 34.82 0 00-34.77-34.96zm13 52.33h-26.04V43.25h26.08zM106.21 182a3.87 3.87 0 010-7.73q3.83 0 7.56-.24a3.81 3.81 0 014.06 3.65a3.85 3.85 0 01-3.65 4.06c-2.59.15-5.23.23-7.88.26zm-15.44-.49h-.3q-4-.3-7.89-.81a3.87 3.87 0 01-3.33-4.34a3.8 3.8 0 014.33-3.36c2.47.32 5 .58 7.48.77a3.87 3.87 0 01-.29 7.72zm38.55-1.2a3.86 3.86 0 01-.53-7.69c2.59-.36 5.08-.77 7.44-1.22a3.87 3.87 0 111.44 7.6c-2.48.47-5.09.89-7.81 1.27a4.9 4.9 0 01-.54.04zm-61.4-2.52a3.74 3.74 0 01-1-.13q-4-1-7.7-2.38a3.87 3.87 0 012.62-7.28q3.42 1.23 7.07 2.19a3.87 3.87 0 01-1 7.6zm64.57-24.39a3.91 3.91 0 01-1.88-.49c-1.94-1.08-4.18-2.16-6.61-3.21a3.87 3.87 0 013.08-7.09c2.68 1.17 5.16 2.35 7.3 3.55a3.87 3.87 0 01-1.89 7.24zM111 141.86a3.84 3.84 0 01-2.14-.65c-3.71-2.48-5.62-5.06-5.84-7.91a8.64 8.64 0 01.15-2.14a3.86 3.86 0 017.55 1.65a16.41 16.41 0 002.43 2a3.86 3.86 0 01-2.15 7.08zm9.6-11.51a3.86 3.86 0 01-.45-7.7c2.35-.29 5-.51 7.93-.68a3.82 3.82 0 014.08 3.63a3.86 3.86 0 01-3.63 4.08q-4.14.24-7.47.64a3.55 3.55 0 01-.43.03zm23.15-1.16a3.87 3.87 0 01-.05-7.73h7.77h0a3.87 3.87 0 010 7.73l-7.69.05zm24.94 30.86a11.59 11.59 0 11-11.59-11.59a11.59 11.59 0 0111.62 11.59z"
									fill="green"
								></path>
							</svg>
						</div>
						<div className="card-body">
							<h5 className="card-title text-black">
								Easy to use trip planning tools
							</h5>
							<p className="card-text">
								With useful tools like trip planner, flight tracker and bag
								measure, Skyscanner is more than just a flight search site - it is
								your complete travel partner.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default HomeCardsFeatures;
