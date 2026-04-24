package com.gvntmc.backend.entity;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.Instant;

@Getter
@Setter
@Document(collection = "services")
public class ServiceEntity {

    @Id
    private String id;

    private String title;
    private String titleEn;

    @Indexed(unique = true)
    private String slug;

    private String description;
    private String descriptionEn;
    private String emoji;
    private String bg;
    private int    order;
    private boolean active = true;

    @CreatedDate
    private Instant createdAt;
}
