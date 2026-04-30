package com.gvntmc.backend.service;

import com.gvntmc.backend.entity.ServiceEntity;
import com.gvntmc.backend.exception.ResourceNotFoundException;
import com.gvntmc.backend.repository.ServiceRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ServiceEntityService {

    private final ServiceRepository repo;

    public List<ServiceEntity> list(Boolean active) {
        if (Boolean.TRUE.equals(active)) return repo.findByActiveTrueOrderByOrderAsc();
        return repo.findAllByOrderByOrderAsc();
    }

    public ServiceEntity getBySlug(String slug) {
        return repo.findBySlug(slug)
                .orElseThrow(() -> new ResourceNotFoundException("Dịch vụ không tồn tại: " + slug));
    }
}
