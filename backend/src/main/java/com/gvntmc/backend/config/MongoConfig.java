package com.gvntmc.backend.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.config.EnableMongoAuditing;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@Configuration
@EnableMongoAuditing
@EnableMongoRepositories(basePackages = "com.gvntmc.backend.repository")
public class MongoConfig {
    // Spring Boot auto-configures the MongoClient from application.yml
    // @EnableMongoAuditing activates @CreatedDate / @LastModifiedDate
}
