package com.cdac.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cdac.entity.LoginData;
import com.cdac.entity.Passenger;
import com.cdac.service.PassengerService;

@RestController
@CrossOrigin
public class PassengerController {
	
	@Autowired
	private PassengerService passengerService;
	
	@GetMapping("/passengerlist")
	public List<Passenger> get(){
		return passengerService.getPassengers();
	}
	
	@PostMapping("/registration")
	public String add(@RequestBody Passenger passenger) {
		passengerService.add(passenger);
		return "Registration Successful";
	}
	
	@PostMapping("/login-by-user")
	public ResponseEntity<LoginData> login(@RequestBody Passenger passenger ) {
		
		
		
		LoginData message = passengerService.login(passenger);
		return ResponseEntity.ok(message);
	}
	
	
//	@PostMapping("/registration")
//	public String add(@RequestParam String username,@RequestParam String password,@RequestParam String email,@RequestParam int mobile) {
//		passengerService.add(username,password,email,mobile);
//		return "Registration Successful";
//	}
}