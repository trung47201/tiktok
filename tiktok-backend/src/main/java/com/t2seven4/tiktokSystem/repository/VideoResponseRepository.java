package com.t2seven4.tiktokSystem.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.t2seven4.tiktokSystem.model.VideoResponse;

public interface VideoResponseRepository extends JpaRepository<VideoResponse, Long> {
	Optional<VideoResponse> findByName(String fileName);
	
}
