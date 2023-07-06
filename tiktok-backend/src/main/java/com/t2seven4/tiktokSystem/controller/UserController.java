package com.t2seven4.tiktokSystem.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.t2seven4.tiktokSystem.model.User;
import com.t2seven4.tiktokSystem.service.IUserService;

@RestController
@RequestMapping("/user")
public class UserController {
	@Autowired
	private IUserService iUserService;

	@GetMapping(value = { "/list", "" })
	public ResponseEntity<?> getAllUsers() {
		List<User> users = iUserService.getAllUsers();
		return ResponseEntity.ok(users);
	}

	@PostMapping(value = { "/add" })
	public ResponseEntity<?> addUser(@RequestBody User user) {
		return ResponseEntity.ok(iUserService.addUser(user));
	}

	@PutMapping(value = { "/update" })
	public ResponseEntity<?> updateUser(@RequestBody User user, @RequestParam("id") long id) {
		return ResponseEntity.ok(iUserService.updateUser(user, id));
	}

	@DeleteMapping(value = { "/delete/{id}" })
	public ResponseEntity<?> deleteUser(@PathVariable("id") long id) {
		return ResponseEntity.ok(iUserService.deleteUser(id));
	}

	@GetMapping(value = { "/user/{id}" })
	public ResponseEntity<?> getOneUser(@PathVariable("id") long id) {
		User user = iUserService.getOneUser(id);
		return ResponseEntity.ok(user);
	}

	@GetMapping(value = { "/search" })
	public ResponseEntity<?> getUserByFullname(@RequestParam("q") String q) {
		List<User> user = iUserService.getUserByFullname(q);
		return ResponseEntity.ok(user);
	}
}
