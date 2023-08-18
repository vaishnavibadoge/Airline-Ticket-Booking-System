import React from "react";
import "./HomeBanner.css";

const HomeBanner = () => {
	return (
		<div className="cardBanner">
			<div className="card">
				<img
					className="card-img-top main-img child lazyloaded"
					src="https://www.airindia.com/adobe/dynamicmedia/deliver/dm-aid--36c38bc9-fdca-4292-82ec-6ebb892afccd/fly-non-stop-image.webp"
					alt="FLY NON-STOP"
				/>
				<div className="card-img-overlay">
					<div className="banner_body">
						<div className="row">
							<div className="col-sm-12 col-md-6 col-lg-6 offset-sm-0 offset-md-3 offset-lg-6">
								<h2 className="card-title fly">FLY</h2>
								<h3 className="card-title nonStop">Nonstop</h3>
								<p className="card-title banner_text">
									Spend less time getting there, and more time being there. Our
									nonstop network connects India with destinations in Asia,
									Australia, Europe, Middle East, North America, and more.
								</p>
								<div className="mt-3">
									<a
										href="/in/en/destinations/non-stop-international-flights.html"
										id="cardBannerLink"
										className="learn-more-button"
										org_title=""
										title=""
									>
										EXPLORE ROUTES
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomeBanner;
