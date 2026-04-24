package com.gvntmc.backend.service;

import com.gvntmc.backend.entity.Project;
import com.gvntmc.backend.exception.ResourceNotFoundException;
import com.gvntmc.backend.repository.ProjectRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ProjectService {

    private final ProjectRepository repo;

    public Page<Project> list(String category, Boolean featured, int page, int size) {
        Pageable pageable = PageRequest.of(page, size, Sort.by(Sort.Direction.DESC, "createdAt"));
        if (Boolean.TRUE.equals(featured)) return repo.findByFeaturedTrue(pageable);
        if (category != null)             return repo.findByCategory(category, pageable);
        return repo.findAll(pageable);
    }

    public Project getBySlug(String slug) {
        return repo.findBySlug(slug)
                .orElseThrow(() -> new ResourceNotFoundException("Dự án không tồn tại: " + slug));
    }
}
