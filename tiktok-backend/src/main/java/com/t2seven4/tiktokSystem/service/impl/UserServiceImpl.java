package com.t2seven4.tiktokSystem.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.t2seven4.tiktokSystem.model.User;
import com.t2seven4.tiktokSystem.repository.UserRepository;
import com.t2seven4.tiktokSystem.service.IUserService;

@Component
public class UserServiceImpl implements IUserService {

	@Autowired
	private UserRepository userRepository;

	@Override
	public User addUser(User user) {
		if (user != null) {
			userRepository.save(user);
		}
		return null;
	}

	@Override
	public User updateUser(User user, long id) {
		if (user != null) {
			User u = userRepository.findById(id);
			if (u != null) {
				if (user.getFull_name() != null) {
					u.setFull_name(user.getFull_name());
				}
				if (user.getNickname() != null) {
					u.setNickname(user.getNickname());
				}
				if (user.getAvatar() != null) {
					u.setAvatar(user.getAvatar());
				}
				if (user.getBio() != null) {
					u.setBio(user.getBio());
				}

				userRepository.save(u);
			}
		}
		return null;
	}

	@Override
	public User deleteUser(long id) {
		if (id >= 1) {
			User user = getOneUser(id);
			userRepository.delete(user);
		}
		return null;
	}

	@Override
	public List<User> getAllUsers() {
		return userRepository.findAll();
	}

	@Override
	public User getOneUser(long id) {
		return userRepository.findById(id);
	}

	@Override
	public List<User> getUserByFullname(String search) {
		return userRepository.findByFullnameWithIgnoreCase(search);
	}

}
