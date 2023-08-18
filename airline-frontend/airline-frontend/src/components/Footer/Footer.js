import React from "react";
import {
	MDBFooter,
	MDBContainer,
	MDBCol,
	MDBRow,
	MDBBtn,
} from "mdb-react-ui-kit";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import LocalPrintshopRoundedIcon from "@mui/icons-material/LocalPrintshopRounded";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

function Footer() {
	return (
		<div>
			<MDBFooter className="text-center" color="white" bgColor="dark">
				<MDBContainer className="p-4">
					<section className="mb-4">
						<MDBBtn
							outline
							color="light"
							className="m-1"
							href="#!"
							role="button"
						>
							<FacebookIcon />
						</MDBBtn>

						<MDBBtn
							outline
							color="light"
							className="m-1"
							href="#!"
							role="button"
						>
							<TwitterIcon />
						</MDBBtn>

						<MDBBtn
							outline
							color="light"
							className="m-1"
							href="#!"
							role="button"
						>
							<GoogleIcon />
						</MDBBtn>

						<MDBBtn
							outline
							color="light"
							className="m-1"
							href="#!"
							role="button"
						>
							<InstagramIcon />
						</MDBBtn>

						<MDBBtn
							outline
							color="light"
							className="m-1"
							href="#!"
							role="button"
						>
							<LinkedInIcon />
						</MDBBtn>

						<MDBBtn
							outline
							color="light"
							className="m-1"
							href="#!"
							role="button"
						>
							<GitHubIcon />
						</MDBBtn>
					</section>

					<section className="mb-4">
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
							distinctio earum repellat quaerat voluptatibus placeat nam,
							commodi optio pariatur est quia magnam eum harum corrupti dicta,
							aliquam sequi voluptate quas.
						</p>
					</section>

					<section className="">
						<MDBRow>
							<MDBCol lg="3" md="6" className="mb-4 mb-md-0">
								<h5 className="text-uppercase">Airlines</h5>
								<p>AeroBook</p>
								<p>FlightEase</p>
								<p>AirReserve</p>
								<p>JetConnect</p>
								<p>TravelSky</p>
							</MDBCol>

							<MDBCol lg="3" md="6" className="mb-4 mb-md-0">
								<h5 className="text-uppercase">Help</h5>

								<ul className="list-unstyled mb-0">
									<li>
										<p>
											<a href="#!" className="text-white ">
												Home
											</a>
										</p>
									</li>
									<li>
										<p>
											<a href="#!" className="text-white ">
												About Us
											</a>
										</p>
									</li>
									<li>
										<a href="#!" className="text-white">
											Contact Us
										</a>
									</li>
								</ul>
							</MDBCol>

							<MDBCol lg="3" md="6" className="mb-4 mb-md-0">
								<h5 className="text-uppercase">Buisness Partners</h5>

								<p>Vaibhav Yergude</p>
								<p>Vaishnavi Badoge</p>
								<p>Mayur Bhole</p>
							</MDBCol>

							<MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
								<h6 className="text-uppercase fw-bold mb-4">Contact Us</h6>
								<p>
									<HomeRoundedIcon className="me-2" />
									CDAC JUHU, Mumbai
								</p>
								<p>
									<MailOutlineRoundedIcon className="me-3" />
									Skyscanner@abc.com
								</p>
								<p>
									<LocalPhoneRoundedIcon className="me-3" /> + 01 234 567 88
								</p>
								<p>
									<LocalPrintshopRoundedIcon className="me-3" /> + 01 234 567 89
								</p>
							</MDBCol>
						</MDBRow>
					</section>
				</MDBContainer>

				<div
					className="text-center p-3"
					style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
				>
					© 2023 Copyright : &nbsp;&nbsp;
					<a className="text-white" href="https://www.makemytrip.com">
						Skyscanner.com
					</a>
				</div>
			</MDBFooter>
		</div>
	);
}

export default Footer;
