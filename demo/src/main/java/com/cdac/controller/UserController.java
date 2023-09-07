package com.cdac.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import org.springframework.web.bind.annotation.RestController;

import com.cdac.entity.User;
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
//	@GetMapping("/get-user")
//	public List<User> getUser() {
//		return userService.getUser();
//	}
//	
}