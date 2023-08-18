package com.cdac.controller;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.cdac.entity.Flight;
import com.cdac.service.FlightService;

@RestController
@CrossOrigin // required for our frontend code which will be running on different server to
				// be able to communicate with our backend rest api
public class FlightController {

	@Autowired
	private FlightService flightService;

	// http://localhost:9090/Flights?source=Mumbai&destination=Delhi
	// @RequestMapping("/Flights")
	@GetMapping("/flights")
	public List<Flight> get(@RequestParam String source, @RequestParam String destination, @RequestParam String date) {

		DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
		LocalDate localDate = LocalDate.parse(date, formatter);

		return flightService.getFlights(source, destination, localDate);
	}

	// localhost:9090/add-Flight
	// In the Body section in Postman, we need to send the data like this:
	/*
	 * { "name" : "Ndls Garibrath Express", "departureTime" : "11:30:00",
	 * "arrivalTime" : "08:00:00", "source" : "Mumbai", "destination" : "Delhi" }
	 */
	@PostMapping("/add-flight")
	public String add(@RequestBody Flight flight) {
		flightService.add(flight);
		return "Flight details added successfully!";
	}

	@GetMapping("/find-all-flights")
	public List<Flight> get() {
		return flightService.findAllFlights();
	}

	@GetMapping("/delete-flight")
	public String deleteFlight(@RequestParam String id) {
		flightService.deleteById(id);
		return "Deleted Successfully";
	}

	@PostMapping("/update-flight")
	public String updateFlight(@RequestBody Flight flight) {
		flightService.updateById(flight);
		return "Flight updated successfully";
	}
}
