package com.t2seven4.tiktokSystem.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.t2seven4.tiktokSystem.model.VideoResponse;
import com.t2seven4.tiktokSystem.repository.VideoResponseRepository;
import com.t2seven4.tiktokSystem.utils.VideoUtils;

@Service
public class StorageService {
	@Autowired
	private VideoResponseRepository videoResponseRepository;
	


	public byte[] downloadVideo(String fileName) {
		Optional<VideoResponse> dbImageData = videoResponseRepository.findByName(fileName);
		byte[] images = VideoUtils.decompressImage(dbImageData.get().getData());
		return images;
	}
	
}
