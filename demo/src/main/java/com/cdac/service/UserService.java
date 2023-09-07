package com.cdac.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cdac.entity.User;
import com.cdac.repository.UserRepository;



@Service
public class UserService {
	
	@Autowired
	private UserRepository userRepository;
	
	public void add(User user) {
		userRepository.save(user);
	}
	
//	public List<User> getUser() {
//		return userRepository.findAll();
//	}

}
