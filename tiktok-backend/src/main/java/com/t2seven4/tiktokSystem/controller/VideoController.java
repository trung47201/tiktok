package com.t2seven4.tiktokSystem.controller;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.t2seven4.tiktokSystem.model.Video;
import com.t2seven4.tiktokSystem.service.IUserService;
import com.t2seven4.tiktokSystem.service.IVideoResponseService;
import com.t2seven4.tiktokSystem.service.IVideoService;

@RestController
@RequestMapping("/video")
public class VideoController {

	@Autowired
	private IVideoService iVideoService;

	@Autowired
	private IVideoResponseService iVideoResponseService;

	@Autowired
	private IUserService iUserService;

	@GetMapping(value = { "/", "list" })
	public ResponseEntity<?> getAllVideos() {
		List<Video> videos = iVideoService.getAllVideos();
		return ResponseEntity.ok(videos);
	}

	@PostMapping(value = { "/{userId}/add" })
	public ResponseEntity<?> addVideo(@PathVariable long userId,
			@RequestParam(name = "files", required = false) MultipartFile[] files, @RequestParam String videos)
			throws IOException {

		ObjectMapper mapper = new ObjectMapper();

		try {
			String msg = "";
			Video nVideo = mapper.readValue(videos, Video.class);
			nVideo.setUser(iUserService.getOneUser(userId));
			iVideoService.addVideo(nVideo);
			for (MultipartFile file : files) {
				msg = iVideoResponseService.addVideoResponse(file, nVideo);
			}
			return ResponseEntity.ok(msg);
		} catch (Exception e) {
			e.printStackTrace();
			System.out.println(e);
			return ResponseEntity.ok(e.getMessage());
		}
	}

	@GetMapping(value="/search/{id}")
	public ResponseEntity<?> findOneVideoById(@PathVariable long id) {
		return ResponseEntity.ok(iVideoService.findOneVideoById(id));
	}
}
