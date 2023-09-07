package com.cdac.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cdac.entity.GoalPlan;

public interface GoalRepository extends JpaRepository<GoalPlan, Integer> {

}
