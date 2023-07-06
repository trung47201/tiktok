package com.t2seven4.tiktokSystem.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.t2seven4.tiktokSystem.model.Video;

@Service
public interface IVideoService {
	public List<Video> getAllVideos();

	public Video addVideo(Video video);

	public Video updateVideo(Video video, long id);

	public Video deleteVideo(long id);

	public Video findOneVideoById(long id);

	public List<Video> findAllVideoByUserId(long id);

	public List<Video> findVideoByDescription(String description);

}
