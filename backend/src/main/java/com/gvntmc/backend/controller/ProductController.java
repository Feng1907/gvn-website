package com.gvntmc.backend.controller;

import com.gvntmc.backend.dto.response.ApiResponse;
import com.gvntmc.backend.dto.response.PageResponse;
import com.gvntmc.backend.entity.Product;
import com.gvntmc.backend.service.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/products")
@RequiredArgsConstructor
public class ProductController {

    private final ProductService service;

    // GET /api/v1/products?category=X&catSlug=Y&featured=true&page=0&size=12
    @GetMapping
    public ResponseEntity<ApiResponse<PageResponse<Product>>> list(
            @RequestParam(required = false) String category,
            @RequestParam(required = false) String catSlug,
            @RequestParam(required = false) Boolean featured,
            @RequestParam(defaultValue = "0")  int page,
            @RequestParam(defaultValue = "12") int size) {
        var result = service.list(category, catSlug, featured, page, size);
        return ResponseEntity.ok(ApiResponse.ok(new PageResponse<>(result)));
    }

    // GET /api/v1/products/{slug}
    @GetMapping("/{slug}")
    public ResponseEntity<ApiResponse<Product>> getOne(@PathVariable String slug) {
        return ResponseEntity.ok(ApiResponse.ok(service.getBySlug(slug)));
    }

    // POST /api/v1/products
    @PostMapping
    public ResponseEntity<ApiResponse<Product>> create(@RequestBody Product product) {
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(ApiResponse.ok(service.create(product)));
    }

    // PUT /api/v1/products/{id}
    @PutMapping("/{id}")
    public ResponseEntity<ApiResponse<Product>> update(
            @PathVariable String id,
            @RequestBody Product patch) {
        return ResponseEntity.ok(ApiResponse.ok(service.update(id, patch)));
    }

    // DELETE /api/v1/products/{id}
    @DeleteMapping("/{id}")
    public ResponseEntity<ApiResponse<Void>> delete(@PathVariable String id) {
        service.delete(id);
        return ResponseEntity.ok(ApiResponse.ok(null));
    }
}
