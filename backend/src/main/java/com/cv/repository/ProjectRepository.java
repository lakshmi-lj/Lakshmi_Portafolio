package com.cv.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cv.entity.Project;

public interface ProjectRepository extends JpaRepository<Project, Long> {

}
