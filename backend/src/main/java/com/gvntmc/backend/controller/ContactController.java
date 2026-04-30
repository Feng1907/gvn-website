package com.gvntmc.backend.controller;

import com.gvntmc.backend.dto.request.ContactRequest;
import com.gvntmc.backend.dto.response.ApiResponse;
import com.gvntmc.backend.dto.response.PageResponse;
import com.gvntmc.backend.entity.Contact;
import com.gvntmc.backend.service.ContactService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/v1/contacts")
@RequiredArgsConstructor
public class ContactController {

    private final ContactService service;

    // POST /api/v1/contacts
    @PostMapping
    public ResponseEntity<ApiResponse<Map<String, String>>> create(
            @Valid @RequestBody ContactRequest req) {
        Contact saved = service.create(req);
        return ResponseEntity.status(HttpStatus.CREATED).body(ApiResponse.ok(Map.of(
                "id",         saved.getId(),
                "message",    "Cảm ơn bạn! Chúng tôi sẽ liên hệ lại trong vòng 24 giờ.",
                "messageEn",  "Thank you! We will get back to you within 24 hours."
        )));
    }

    // GET /api/v1/contacts?status=new&page=0&size=20  (admin)
    @GetMapping
    public ResponseEntity<ApiResponse<PageResponse<Contact>>> list(
            @RequestParam(required = false) String status,
            @RequestParam(defaultValue = "0")  int page,
            @RequestParam(defaultValue = "20") int size) {
        return ResponseEntity.ok(ApiResponse.ok(new PageResponse<>(service.list(status, page, size))));
    }
}
