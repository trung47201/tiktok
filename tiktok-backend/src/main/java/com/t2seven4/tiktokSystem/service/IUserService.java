package com.t2seven4.tiktokSystem.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.t2seven4.tiktokSystem.model.User;

@Service
public interface IUserService {
	public User addUser(User user);

	public User updateUser(User user, long id);

	public User deleteUser(long id);

	public List<User> getAllUsers();

	public User getOneUser(long id);
	
	public List<User> getUserByFullname(String search);
}
