package com.cdac.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import org.springframework.web.bind.annotation.RestController;

import com.cdac.entity.Messege;
import com.cdac.entity.User;
import com.cdac.repository.UserRepository;
import com.cdac.service.UserService;

@RestController
@CrossOrigin
public class UserController {
	@Autowired
	private UserService userService;
	
	@PostMapping("/add-user")
	public String add(@RequestBody User user) {
	
		System.out.println(user.getPhoneNumber());
		userService.add(user);
		return "user details added successfully!";
	}
	

//	
	
	
	@Autowired
    private UserRepository userRepository;

	  @PostMapping("/login")
	    public ResponseEntity<Messege>login( @RequestBody User loginUser) {
	        Optional<User> userFromDb = userRepository.findByEmailAndPassword(loginUser.getEmail(),loginUser.getPassword());
	       if(userFromDb !=null) {
	        Messege m=new Messege("Logged in successfully");     
	           
	        return ResponseEntity.ok(m);
	       }
	       return null;
	       
	    }
	
//	@GetMapping("/get-user")
//	public List<User> getUser() {
//		return userService.getUser();
//	}
//	
}