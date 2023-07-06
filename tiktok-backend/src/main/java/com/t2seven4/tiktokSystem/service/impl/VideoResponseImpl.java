package com.t2seven4.tiktokSystem.service.impl;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import com.t2seven4.tiktokSystem.model.Video;
import com.t2seven4.tiktokSystem.model.VideoResponse;
import com.t2seven4.tiktokSystem.repository.VideoResponseRepository;
import com.t2seven4.tiktokSystem.service.IVideoResponseService;
import com.t2seven4.tiktokSystem.utils.VideoUtils;

@Component
public class VideoResponseImpl implements IVideoResponseService {

	@Autowired
	private VideoResponseRepository videoResponseRepository;

	@Override
	public List<VideoResponse> getAllVideoResponse() {
		for (VideoResponse v : videoResponseRepository.findAll()) {
			System.out.println(v.getVideo().getId());
		}
		return videoResponseRepository.findAll();
	}

	@Override
	public String addVideoResponse(MultipartFile file, Video video) {
		VideoResponse fileData;
		try {
			fileData = videoResponseRepository.save(VideoResponse.builder().name(file.getOriginalFilename())
					.type(file.getContentType()).data(VideoUtils.compressImage(file.getBytes()))
					.video(video)
					.build());
			if (fileData != null) {
				return "file " + file.getContentType() + " uploaded successfully : " + file.getOriginalFilename();
			}
		} catch (IOException e) {
			e.printStackTrace();
		}
		return null;
	}

	@Override
	public VideoResponse updateVideoResponse(VideoResponse videoResponse, long id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public VideoResponse deleteVideoResponse(long id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public VideoResponse findOneVideoResponseById(long id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<VideoResponse> findAllVideoResponseByVideoId(long id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Optional<VideoResponse> findByName(String name) {
		// TODO Auto-generated method stub
		return Optional.empty();
	}
}
