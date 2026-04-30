package com.gvntmc.backend.repository;

import com.gvntmc.backend.entity.Article;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface ArticleRepository extends MongoRepository<Article, String> {

    Optional<Article> findBySlug(String slug);

    Page<Article> findByPublishedTrue(Pageable pageable);

    Page<Article> findByPublishedTrueAndCategory(String category, Pageable pageable);
}
