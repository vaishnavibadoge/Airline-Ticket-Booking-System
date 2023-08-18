package com.cdac;

import java.time.LocalDate;
import java.time.LocalTime;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.cdac.entity.Flight;
import com.cdac.repository.FlightRepository;

@SpringBootTest
class AirlineBackendApplicationTests {

	@Autowired
	private FlightRepository flightRepo;
	
	@Test
	void addFlight() {
		Flight flight = new Flight();
		flight.setAirlineName("Air India");
		flight.setSource("Hyderabad");
		flight.setDestination("Mumbai");
		flight.setDepartureTime(LocalTime.of(12, 00));
		flight.setArrivalTime(LocalTime.of(13, 00));
		flight.setAvailableSeat(50);
		flight.setDate(LocalDate.of(2023, 07, 15));
		
		flightRepo.save(flight);
	}

}
