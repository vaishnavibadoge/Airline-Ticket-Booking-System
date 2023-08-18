package com.cdac.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cdac.entity.Flight;
import com.cdac.entity.LoginData;
import com.cdac.entity.Seller;
import com.cdac.repository.FlightRepository;
import com.cdac.repository.SellerRepository;

@Service
public class SellerService {

	@Autowired
	private SellerRepository sellerRepo;
	
	@Autowired
	private FlightRepository flightRepo;

	public LoginData login(Seller seller) {

//		String msg="";

		LoginData loginData = new LoginData();

		String email = seller.getEmail();
//		String role = passenger.role;

//				passengerRepo.findByFnameandPass(email,password);
		Seller sellerObject = sellerRepo.findByEmail(email);

		String id = String.valueOf(sellerObject.getId());
		loginData.setId(id);

		if (sellerObject != null) {
			String newemail = sellerObject.getEmail();
			String password = sellerObject.getPassword();

//            String encodedPassword = employee1.getPassword();
//            Boolean isPwdRight = passwordEncoder.matches(password, encodedPassword);
			if (password.equals(seller.getPassword())) {
				Optional<Seller> traveller = sellerRepo.findOneByEmailAndPassword(newemail, password);
				if (traveller.isPresent()) {
					loginData.setMessage("Login Success");
					return loginData;
				} else {
					loginData.setMessage("Login Failed");
					return loginData;
				}
			} else {
				loginData.setMessage("password Not Match");
				return loginData;
			}
		} else {
			loginData.setMessage("Email not exits");
			;
			return loginData;
		}
	}

	public List<Flight> findByName(String name) {
		
		return flightRepo.findFlightByName(name);
	}

}
