package com.t2seven4.tiktokSystem.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.t2seven4.tiktokSystem.service.IVideoResponseService;

@RestController
@RequestMapping(value = "/videoresponse")
public class VideoResponseController {

	@Autowired
	private IVideoResponseService iVideoResponseService;

	@GetMapping(value = { "", "/list" })
	public ResponseEntity<?> getAllVideoResponse() {
		return ResponseEntity.ok(iVideoResponseService.getAllVideoResponse());
	}
}
