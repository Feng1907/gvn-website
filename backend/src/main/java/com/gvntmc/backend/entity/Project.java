package com.gvntmc.backend.entity;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.Instant;
import java.util.List;

@Getter
@Setter
@Document(collection = "projects")
public class Project {

    @Id
    private String id;

    private String title;
    private String titleEn;

    @Indexed(unique = true)
    private String slug;

    private String description;
    private String descriptionEn;
    private String client;
    private String category;
    private String categoryEn;
    private List<String> images;
    private String location;
    private String completedYear;
    private boolean featured = false;

    @CreatedDate
    private Instant createdAt;
}
