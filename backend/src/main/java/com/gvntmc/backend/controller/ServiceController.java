package com.gvntmc.backend.controller;

import com.gvntmc.backend.dto.response.ApiResponse;
import com.gvntmc.backend.entity.ServiceEntity;
import com.gvntmc.backend.service.ServiceEntityService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/services")
@RequiredArgsConstructor
public class ServiceController {

    private final ServiceEntityService service;

    // GET /api/v1/services?active=true
    @GetMapping
    public ResponseEntity<ApiResponse<List<ServiceEntity>>> list(
            @RequestParam(required = false) Boolean active) {
        return ResponseEntity.ok(ApiResponse.ok(service.list(active)));
    }

    // GET /api/v1/services/{slug}
    @GetMapping("/{slug}")
    public ResponseEntity<ApiResponse<ServiceEntity>> getOne(@PathVariable String slug) {
        return ResponseEntity.ok(ApiResponse.ok(service.getBySlug(slug)));
    }
}
