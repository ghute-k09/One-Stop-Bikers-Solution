package com.cdac.entity;



import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import javax.persistence.Table;

@Entity
@Table(name = "tbl_GoalPlan_plan")
public class GoalPlan {
     
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY) //auto generate pk value
	@Column(name = "plan_id")
	private int id;
	
	@Column(name = "plan_name")
	private String task;
	
	@Column(name = "plan_discription")
	private String discription;
	
	
	
	@ManyToOne
	@JoinColumn(name = "user_id")
	private User user;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}



	public String getTask() {
		return task;
	}

	public void setTask(String task) {
		this.task = task;
	}

	public String getDiscription() {
		return discription;
	}

	public void setDiscription(String discription) {
		this.discription = discription;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}


	
	
		
}