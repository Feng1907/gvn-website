package com.gvntmc.backend.repository;

import com.gvntmc.backend.entity.Project;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface ProjectRepository extends MongoRepository<Project, String> {

    Optional<Project> findBySlug(String slug);

    Page<Project> findByCategory(String category, Pageable pageable);

    Page<Project> findByFeaturedTrue(Pageable pageable);
}
