package com.cdac.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.cdac.entity.Flight;
import com.cdac.entity.LoginData;
import com.cdac.entity.Seller;
import com.cdac.service.SellerService;

@RestController
@CrossOrigin
public class SellerController {
	
	@Autowired
	private SellerService sellerService;
	
	@PostMapping("/login-by-seller")
	public ResponseEntity<LoginData> login(@RequestBody Seller seller ) {
		
		String email = seller.getEmail();
		
		LoginData message = sellerService.login(seller);
		return ResponseEntity.ok(message);
	}
	
//	@GetMapping("/seller-flight")
//	public List<Flight> sellerFlights(@RequestBody Seller seller){
//		
//		String email = seller.getEmail();
//		System.out.println(email);
//		
//		int atIndex = email.indexOf('@');
//		String name = email.substring(0, atIndex);
//		
//		List<Flight> bookingList = sellerService.findByName(name);
//		
//		return bookingList;
//	}
	
	@GetMapping("/seller-flight")
	public List<Flight> sellerFlights(@RequestParam String email){
		
		System.out.println(email);
		
//		int atIndex = email.indexOf('@');
//		String name = email.substring(0, atIndex);
//		
		List<Flight> bookingList = sellerService.findByName(email);
		
		return bookingList;
	}
}
