package com.t2seven4.tiktokSystem.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.t2seven4.tiktokSystem.model.Video;
import com.t2seven4.tiktokSystem.model.VideoResponse;

@Service
public interface IVideoResponseService {
	public List<VideoResponse> getAllVideoResponse();

	public String addVideoResponse(MultipartFile file, Video video);

	public VideoResponse updateVideoResponse(VideoResponse videoResponse, long id);

	public VideoResponse deleteVideoResponse(long id);

	public VideoResponse findOneVideoResponseById(long id);

	public List<VideoResponse> findAllVideoResponseByVideoId(long id);

	Optional<VideoResponse> findByName(String name) ;
}
