package com.cdac.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cdac.entity.Booking;
import com.cdac.service.BookingService;

@RestController
@CrossOrigin 
public class BookingController {
	
	@Autowired
	private BookingService bookingService;
	
	@PostMapping("/book-flight")
	public String bookFlight(@RequestBody Booking booking ) {
		bookingService.add(booking);
		return "Booking done sucessfully";
	}
}
