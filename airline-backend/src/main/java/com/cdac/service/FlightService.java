package com.cdac.service;

import java.time.LocalDate;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cdac.entity.Flight;
import com.cdac.repository.FlightRepository;

@Service
//@Component - even this is okay, there is no difference
public class FlightService {

	@Autowired
	private FlightRepository flightRepo;
	
	public void add(Flight flight) {
		flightRepo.save(flight);
	}
	
	public List<Flight> getFlights(String source, String destination, LocalDate date) {
		return flightRepo.findBySourceAndDestination(source, destination, date);
	}
	
//	public List<Flight> findAllFlights(){
//		return flightRepo.findAll();
//	};
	
	public List<Flight> findAllFlights(){
		return flightRepo.findFlight();
	};
	
	public void deleteById(String id) {
		int newId = Integer.parseInt(id);
		flightRepo.deleteById(newId);
	}
	
	@Transactional
	public void updateById(Flight flight) {
		int newId = flight.getId();
		flightRepo.updateByid(flight.getAirlineName(),flight.getSource(),flight.getDestination(),flight.getDate(),flight.getDepartureTime(),flight.getArrivalTime(),flight.getPrice(),flight.getAvailableSeat(),newId);
	}
}
