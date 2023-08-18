package com.cdac.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.cdac.entity.Passenger;

public interface PassengerRepository extends JpaRepository<Passenger, Integer>{

//	@Query("select p from Passenger p where p.email=?1 and p.password=?2")
//	Passenger findByFnameandPass(String email, String password);
	
	Optional<Passenger> findOneByEmailAndPassword(String email, String password);
	
	Passenger findByEmail(String email);
	
	
}

//select * from tbl_passenger where email="newuser@gmail.com" and password="password";
