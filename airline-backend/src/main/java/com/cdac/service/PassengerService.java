package com.cdac.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cdac.entity.LoginData;
import com.cdac.entity.Passenger;
import com.cdac.repository.PassengerRepository;

@Service
public class PassengerService {
	
	@Autowired
	private PassengerRepository passengerRepo;
	
	public void add(Passenger passenger) {
		passengerRepo.save(passenger);
	}
	
//	public void add(String fname,String email, String password, int mobile) {
//		
//		Passenger passenger = new Passenger();
//		passenger.setFname(fname);
//		passenger.setEmail(email);
//		passenger.setPassword(password);
//		passenger.setMobile(mobile);
//		
//		passengerRepo.save(passenger);
//	}
	
	
//	public void login(Passenger passenger) {
//		String email = passenger.getEmail();
//		String password = passenger.getPassword();
//		
//		passengerRepo.findByFnameandPass(email,password);
//	}
	
	
	public LoginData login(Passenger passenger) {
		
//		String msg="";
		
		LoginData loginData = new LoginData();
		
		String email = passenger.getEmail();
//		String role = passenger.role;
		
//				passengerRepo.findByFnameandPass(email,password);
		Passenger passEmail = passengerRepo.findByEmail(email);
		
		String id = String.valueOf(passEmail.getId());
		loginData.setId(id);
		
		if(passEmail != null) {
			String newemail = passEmail.getEmail();
			String password = passEmail.getPassword();
			
//            String encodedPassword = employee1.getPassword();
//            Boolean isPwdRight = passwordEncoder.matches(password, encodedPassword);
            if (password.equals( passenger.getPassword())) {
                Optional<Passenger> traveller = passengerRepo.findOneByEmailAndPassword(newemail, password);
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
	
	public List<Passenger> getPassengers(){
		return passengerRepo.findAll();
	}
}
