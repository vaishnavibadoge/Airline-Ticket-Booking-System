package com.cdac.repository;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.cdac.entity.Booking;
import com.cdac.entity.Flight;

public interface FlightRepository extends JpaRepository<Flight, Integer>{

	@Query("select f from Flight f where f.source = ?1  and f.destination = ?2 and f.date = ?3")
	public List<Flight> findBySourceAndDestination(String source, String destination, LocalDate date);

	 @Modifying
	@Query("update Flight f set f.airlineName=?1,f.source=?2,f.destination=?3,f.date=?4,f.departureTime=?5,f.arrivalTime=?6,f.price=?7,f.availableSeat=?8 where f.id=?9")
	public void updateByid(String airlineName, String source, String destination, LocalDate date, LocalTime departureTime, LocalTime arrivalTime, int price, int availableSeat, int newId);
	
	@Query("select f from Flight f")
	public List<Flight> findFlight();

	@Query("select f from Flight f where f.airlineName=?1")
	public List<Flight> findFlightByName(String name);
}
