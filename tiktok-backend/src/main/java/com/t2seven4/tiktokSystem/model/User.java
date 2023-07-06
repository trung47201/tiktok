package com.t2seven4.tiktokSystem.model;

import java.sql.Timestamp;
import java.util.Set;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "users")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	@Column
	private String full_name;
	@Column
	private String nickname;
	@Column
	private String avatar;
	@Column
	private String bio;
	@Column
	private long tick;
	@Column
	private long following_count;
	@Column
	private long follower_count;
	@Column
	private long likes_count;

	@Column
	@CreationTimestamp
	@Temporal(TemporalType.TIMESTAMP)
	private Timestamp created_at;
	
	@Column
	@UpdateTimestamp
	@Temporal(TemporalType.TIMESTAMP)
	private Timestamp updated_at;
	
	@OneToMany(mappedBy = "user")
	private Set<Video> video;

}
