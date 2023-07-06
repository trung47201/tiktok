package com.t2seven4.tiktokSystem.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Lob;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "video_response")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class VideoResponse {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	@Column
	private String name;

	@Column
	private String type;

	@Lob
	@Column(name = "data", length = 10000000)
	@JsonIgnore
	private byte[] data;

	@ManyToOne
	@JoinColumn(name = "video_id")
	@JsonIgnore
	private Video video;

}
