package com.t2seven4.tiktokSystem.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import com.t2seven4.tiktokSystem.model.Video;
import com.t2seven4.tiktokSystem.repository.VideoRepository;
import com.t2seven4.tiktokSystem.service.IVideoService;

@Component
public class VideoServiceImpl implements IVideoService {

	@Autowired
	private VideoRepository videoRepository;

	@Override
	public List<Video> getAllVideos() {
		return videoRepository.findAll();
	}

	@Override
	public Video addVideo(Video video) {

		return videoRepository.save(video);
	}

	@Override
	public Video updateVideo(Video video, long id) {
		if (video != null) {
			Video nVideo = findOneVideoById(id);
			if (nVideo != null) {
//				
			}
		}
		return null;
	}

	@Override
	public Video deleteVideo(long id) {
		if (id >= 1) {
			videoRepository.deleteById(id);
		}
		return null;
	}

	@Override
	public Video findOneVideoById(long id) {
		//
		return videoRepository.findById(id);
	}

	@Override
	public List<Video> findAllVideoByUserId(long id) {
		//
		return videoRepository.findVideoByUserId(id);
	}

	@Override
	public List<Video> findVideoByDescription(String description) {
		//
		return videoRepository.findByDescription(description);
	}

}
