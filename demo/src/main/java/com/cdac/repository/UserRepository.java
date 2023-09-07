package com.cdac.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cdac.entity.User;

public interface UserRepository extends JpaRepository<User, Integer> {

	

}
