package com.cdac.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import com.cdac.entity.User;

public interface UserRepository extends JpaRepository<User, Integer> {

public Optional<User> findByEmailAndPassword(String email,String password);


	

}
