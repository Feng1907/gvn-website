package com.gvntmc.backend.entity;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.Instant;
import java.util.List;

@Getter
@Setter
@Document(collection = "products")
public class Product {

    @Id
    private String id;

    private String name;
    private String nameEn;

    @Indexed(unique = true)
    private String slug;

    private String category;
    private String catSlug;
    private String tag;
    private String tagColor;
    private String description;
    private String descriptionEn;
    private List<String> images;
    private List<String> imageFallbacks;
    private List<ProductSpec> specs;
    private List<String> features;
    private List<String> featuresEn;
    private List<String> relatedSlugs;
    private Double price;
    private String emoji;
    private String bg;
    private boolean inStock  = true;
    private boolean featured = false;

    @CreatedDate
    private Instant createdAt;

    @LastModifiedDate
    private Instant updatedAt;

    @Getter
    @Setter
    public static class ProductSpec {
        private String label;
        private String labelEn;
        private String value;
        private String valueEn;
    }
}
