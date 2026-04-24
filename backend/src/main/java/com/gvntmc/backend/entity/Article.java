package com.gvntmc.backend.entity;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.Instant;

@Getter
@Setter
@Document(collection = "articles")
public class Article {

    @Id
    private String id;

    private String title;
    private String titleEn;

    @Indexed(unique = true)
    private String slug;

    private String excerpt;
    private String excerptEn;
    private String content;
    private String contentEn;
    private String category;
    private String categoryEn;
    private String emoji;
    private String bg;
    private int    readTime;
    private boolean published = false;

    @CreatedDate
    private Instant createdAt;

    @LastModifiedDate
    private Instant updatedAt;
}
