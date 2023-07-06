package com.t2seven4.tiktokSystem.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.t2seven4.tiktokSystem.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
	@Query("SELECT u FROM User u WHERE u.id = ?1 ") // case insensitive
	User findById(long id);

	@Query("SELECT u FROM User u WHERE UPPER(u.full_name) LIKE %?1% or  UPPER(u.nickname) LIKE %?1% ") // case
	List<User> findByFullnameWithIgnoreCase(String search);
}
