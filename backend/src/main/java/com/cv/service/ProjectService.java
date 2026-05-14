package com.cv.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.cv.entity.Project;
import com.cv.repository.ProjectRepository;

@Service
public class ProjectService {

    private final ProjectRepository repo;

    public ProjectService(ProjectRepository repo) {
        this.repo = repo;
    }

    public List<Project> getAllProjects() {
        return repo.findAll();
    }

    public Project saveProject(Project project) {
        return repo.save(project);
    }

}
