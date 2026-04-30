package com.gvntmc.backend.entity;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.Instant;

@Getter
@Setter
@Document(collection = "contacts")
public class Contact {

    @Id
    private String id;

    private String name;
    private String email;
    private String phone;
    private String company;
    private String subject;
    private String message;
    private String status = "new";   // new | reading | replied | closed

    @CreatedDate
    private Instant createdAt;
}
