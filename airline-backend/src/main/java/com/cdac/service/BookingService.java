package com.cdac.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cdac.entity.Booking;
import com.cdac.repository.BookingRepository;

@Service
public class BookingService {
	@Autowired
	private BookingRepository bookingRepo;
	
	public void add(Booking booking) {
		bookingRepo.save(booking);
	}
}
