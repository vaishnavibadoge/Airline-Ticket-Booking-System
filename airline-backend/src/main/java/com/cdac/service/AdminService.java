package com.cdac.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cdac.entity.Admin;
import com.cdac.entity.LoginData;
import com.cdac.repository.AdminRepository;

@Service
public class AdminService {
	
	@Autowired
	private AdminRepository adminRepo;
	
public LoginData login(Admin admin) {
		
//		String msg="";
		
		LoginData loginData = new LoginData();
		
		String email = admin.getEmail();
//		String role = passenger.role;
		
//				passengerRepo.findByFnameandPass(email,password);
		Admin adminObject = adminRepo.findByEmail(email);
		
		String id = String.valueOf(adminObject.getId());
		loginData.setId(id);
		
		if(adminObject != null) {
			String newemail = adminObject.getEmail();
			String password = adminObject.getPassword();
			
//            String encodedPassword = employee1.getPassword();
//            Boolean isPwdRight = passwordEncoder.matches(password, encodedPassword);
            if (password.equals( admin.getPassword())) {
                Optional<Admin> traveller = adminRepo.findOneByEmailAndPassword(newemail, password);
                if (traveller.isPresent()) {
                    loginData.setMessage("Login Success");
                    return loginData;
                } else {
                    loginData.setMessage("Login Failed");
                    return loginData;
                }
            } else {
                loginData.setMessage("password Not Match");
                return loginData;
            }
        }else {
            loginData.setMessage("Email not exits"); ;
            return loginData;
        }
	}

}
