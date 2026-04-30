package com.gvntmc.backend.controller;

import com.gvntmc.backend.dto.response.ApiResponse;
import com.gvntmc.backend.dto.response.PageResponse;
import com.gvntmc.backend.entity.Article;
import com.gvntmc.backend.service.ArticleService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/news")
@RequiredArgsConstructor
public class ArticleController {

    private final ArticleService service;

    // GET /api/v1/news?published=true&category=X&page=0&size=10
    @GetMapping
    public ResponseEntity<ApiResponse<PageResponse<Article>>> list(
            @RequestParam(required = false) Boolean published,
            @RequestParam(required = false) String category,
            @RequestParam(defaultValue = "0")  int page,
            @RequestParam(defaultValue = "10") int size) {
        var result = service.list(published, category, page, size);
        return ResponseEntity.ok(ApiResponse.ok(new PageResponse<>(result)));
    }

    // GET /api/v1/news/{slug}
    @GetMapping("/{slug}")
    public ResponseEntity<ApiResponse<Article>> getOne(@PathVariable String slug) {
        return ResponseEntity.ok(ApiResponse.ok(service.getBySlug(slug)));
    }
}
