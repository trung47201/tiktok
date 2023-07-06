package com.t2seven4.tiktokSystem.repository;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.t2seven4.tiktokSystem.model.Video;

public interface VideoRepository extends JpaRepository<Video, Long> {
	
	@Query("SELECT v FROM Video v order by v.id asc")
	List<Video> findAlll();
	
	@Query("SELECT v FROM Video v WHERE v.id = ?1")
	Video findById(long id);


	@Query("SELECT v FROM Video v WHERE v.video_description LIKE %?1%")
	List<Video> findByDescription(String description);

	@Query("SELECT v FROM Video v WHERE v.user.id = ?1")
	List<Video> findVideoByUserId(long id);
	
}
