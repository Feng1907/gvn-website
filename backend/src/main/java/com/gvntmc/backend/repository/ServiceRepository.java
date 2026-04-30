package com.gvntmc.backend.repository;

import com.gvntmc.backend.entity.ServiceEntity;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
import java.util.Optional;

public interface ServiceRepository extends MongoRepository<ServiceEntity, String> {

    Optional<ServiceEntity> findBySlug(String slug);

    List<ServiceEntity> findByActiveTrueOrderByOrderAsc();

    List<ServiceEntity> findAllByOrderByOrderAsc();
}
