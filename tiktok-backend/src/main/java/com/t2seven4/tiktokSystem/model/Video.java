package com.t2seven4.tiktokSystem.model;

import java.sql.Timestamp;
import java.util.List;

import org.hibernate.annotations.CreationTimestamp;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "video")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Video {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	@Column
	@CreationTimestamp
	@Temporal(TemporalType.TIMESTAMP)
	private Timestamp create_time;

	@Column(name = "video_description", length = 500)
	private String video_description;

	@Column
	private long duration;

	@Column
	private long like_count;

	@Column
	private long comment_count;

	@Column
	private long share_count;

	@Column
	private long view_count;

	@ManyToOne
	@JoinColumn(name = "user_id")
	private User user;

	@OneToMany(mappedBy = "video", cascade = CascadeType.ALL)
	private List<VideoResponse> videoResponse;

}
