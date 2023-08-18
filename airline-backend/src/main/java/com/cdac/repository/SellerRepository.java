package com.cdac.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cdac.entity.Admin;
import com.cdac.entity.Seller;

public interface SellerRepository extends JpaRepository<Seller, Integer> {
	
Optional<Seller> findOneByEmailAndPassword(String email, String password);
	
	Seller findByEmail(String email);
}
