package com.gvntmc.backend.controller;

import com.gvntmc.backend.dto.response.ApiResponse;
import com.gvntmc.backend.dto.response.PageResponse;
import com.gvntmc.backend.entity.Project;
import com.gvntmc.backend.service.ProjectService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/projects")
@RequiredArgsConstructor
public class ProjectController {

    private final ProjectService service;

    // GET /api/v1/projects?category=X&featured=true&page=0&size=12
    @GetMapping
    public ResponseEntity<ApiResponse<PageResponse<Project>>> list(
            @RequestParam(required = false) String category,
            @RequestParam(required = false) Boolean featured,
            @RequestParam(defaultValue = "0")  int page,
            @RequestParam(defaultValue = "12") int size) {
        return ResponseEntity.ok(ApiResponse.ok(new PageResponse<>(service.list(category, featured, page, size))));
    }

    // GET /api/v1/projects/{slug}
    @GetMapping("/{slug}")
    public ResponseEntity<ApiResponse<Project>> getOne(@PathVariable String slug) {
        return ResponseEntity.ok(ApiResponse.ok(service.getBySlug(slug)));
    }
}
