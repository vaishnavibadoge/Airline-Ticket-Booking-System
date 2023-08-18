package com.cdac.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cdac.entity.Admin;
import com.cdac.entity.LoginData;
import com.cdac.service.AdminService;


@RestController
@CrossOrigin
public class AdminController {
	
	@Autowired
	private AdminService adminService;
	
	
	@PostMapping("/login-by-admin")
	public ResponseEntity<LoginData> login(@RequestBody Admin admin ) {
		
		
		
		LoginData message = adminService.login(admin);
		return ResponseEntity.ok(message);
	}
	
}
