package com.gvntmc.backend.service;

import com.gvntmc.backend.entity.Product;
import com.gvntmc.backend.exception.ResourceNotFoundException;
import com.gvntmc.backend.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ProductService {

    private final ProductRepository repo;

    public Page<Product> list(String category, String catSlug, Boolean featured, int page, int size) {
        Pageable pageable = PageRequest.of(page, size, Sort.by(Sort.Direction.DESC, "createdAt"));

        if (featured != null && featured) {
            return category != null
                    ? repo.findByCategoryAndFeaturedTrue(category, pageable)
                    : repo.findByFeaturedTrue(pageable);
        }
        if (category != null) return repo.findByCategory(category, pageable);
        if (catSlug  != null) return repo.findByCatSlug(catSlug, pageable);
        return repo.findAll(pageable);
    }

    public Product getBySlug(String slug) {
        return repo.findBySlug(slug)
                .orElseThrow(() -> new ResourceNotFoundException("Sản phẩm không tồn tại: " + slug));
    }

    public Product create(Product product) {
        return repo.save(product);
    }

    public Product update(String id, Product patch) {
        Product existing = repo.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Sản phẩm không tồn tại: " + id));
        if (patch.getName()        != null) existing.setName(patch.getName());
        if (patch.getNameEn()      != null) existing.setNameEn(patch.getNameEn());
        if (patch.getDescription() != null) existing.setDescription(patch.getDescription());
        if (patch.getSpecs()       != null) existing.setSpecs(patch.getSpecs());
        if (patch.getFeatures()    != null) existing.setFeatures(patch.getFeatures());
        if (patch.getImages()      != null) existing.setImages(patch.getImages());
        return repo.save(existing);
    }

    public void delete(String id) {
        if (!repo.existsById(id)) {
            throw new ResourceNotFoundException("Sản phẩm không tồn tại: " + id);
        }
        repo.deleteById(id);
    }
}
