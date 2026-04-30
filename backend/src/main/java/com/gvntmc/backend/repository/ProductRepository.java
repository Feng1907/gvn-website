package com.gvntmc.backend.repository;

import com.gvntmc.backend.entity.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface ProductRepository extends MongoRepository<Product, String> {

    Optional<Product> findBySlug(String slug);

    Page<Product> findByCategory(String category, Pageable pageable);

    Page<Product> findByCatSlug(String catSlug, Pageable pageable);

    Page<Product> findByFeaturedTrue(Pageable pageable);

    Page<Product> findByCategoryAndFeaturedTrue(String category, Pageable pageable);
}
