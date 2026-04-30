package com.gvntmc.backend.repository;

import com.gvntmc.backend.entity.Contact;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ContactRepository extends MongoRepository<Contact, String> {

    Page<Contact> findByStatus(String status, Pageable pageable);
}
