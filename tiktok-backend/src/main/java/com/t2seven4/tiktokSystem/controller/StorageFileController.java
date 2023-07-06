package com.t2seven4.tiktokSystem.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.t2seven4.tiktokSystem.service.StorageService;

@RestController
public class StorageFileController {

	@Autowired
	private StorageService storageService;

	@GetMapping("/video/{fileName}")
	public ResponseEntity<?> downloadVideo(@PathVariable String fileName) {
		byte[] imageData = storageService.downloadVideo(fileName);
		return ResponseEntity.status(HttpStatusCode.valueOf(200)).contentType(MediaType.valueOf("video/mp4")).body(imageData);

	}
	
	@GetMapping("/image/{fileName}")
	public ResponseEntity<?> downloadImage(@PathVariable String fileName) {
		byte[] imageData = storageService.downloadVideo(fileName);
		return ResponseEntity.status(HttpStatusCode.valueOf(200)).contentType(MediaType.valueOf("image/png")).body(imageData);

	}

}
