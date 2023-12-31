package com.cdac.entity;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "tbl_user")
public class User {

	@Id //pk
	@GeneratedValue(strategy = GenerationType.IDENTITY) //auto generate pk value
	@Column(name = "user_id")
	private int id;
	
	@Column(name = "user_name")
	private String name;
	
	@Column(name = "email_address")
	private String email;
		
	@Column(name = "phone_number")
	private String phoneNumber;
	
	@Column(name = "password")
	private String password;
	
//	@Column(name = "confirm_password")
//	private String confirm_password;
	
	@OneToMany(mappedBy = "user")//, cascade = CascadeType.ALL )
	
	private List<GoalPlan> goalplan;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}


	public String getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

//	public String getConfirm_password() {
//		return confirm_password;
//	}
//
//	public void setConfirm_password(String confirm_password) {
//		this.confirm_password = confirm_password;
//	}

	public List<GoalPlan> getGoalplan() {
		return goalplan;
	}

	public void setGoalplan(List<GoalPlan> goalplan) {
		this.goalplan = goalplan;
	}

	@Override
	public String toString() {
		return "User [id=" + id + ", name=" + name + ", email=" + email + ", phoneNumber=" + phoneNumber + ", password="
				+ password + ", goalplan=" + goalplan + "]";
	}

	
	
	
	
	
	
}