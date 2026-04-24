package com.gvntmc.backend.service;

import com.gvntmc.backend.entity.Article;
import com.gvntmc.backend.exception.ResourceNotFoundException;
import com.gvntmc.backend.repository.ArticleRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ArticleService {

    private final ArticleRepository repo;

    public Page<Article> list(Boolean published, String category, int page, int size) {
        Pageable pageable = PageRequest.of(page, size, Sort.by(Sort.Direction.DESC, "createdAt"));

        if (Boolean.TRUE.equals(published) && category != null) {
            return repo.findByPublishedTrueAndCategory(category, pageable);
        }
        if (Boolean.TRUE.equals(published)) {
            return repo.findByPublishedTrue(pageable);
        }
        return repo.findAll(pageable);
    }

    public Article getBySlug(String slug) {
        return repo.findBySlug(slug)
                .orElseThrow(() -> new ResourceNotFoundException("Bài viết không tồn tại: " + slug));
    }
}
