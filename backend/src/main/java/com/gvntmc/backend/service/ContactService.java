package com.gvntmc.backend.service;

import com.gvntmc.backend.dto.request.ContactRequest;
import com.gvntmc.backend.entity.Contact;
import com.gvntmc.backend.repository.ContactRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ContactService {

    private final ContactRepository repo;

    public Contact create(ContactRequest req) {
        Contact contact = new Contact();
        contact.setName(req.getName().trim());
        contact.setEmail(req.getEmail().trim().toLowerCase());
        contact.setPhone(req.getPhone() != null ? req.getPhone().trim() : "");
        contact.setCompany(req.getCompany() != null ? req.getCompany().trim() : "");
        contact.setSubject(req.getSubject() != null ? req.getSubject().trim() : "Yêu cầu báo giá");
        contact.setMessage(req.getMessage().trim());
        contact.setStatus("new");
        return repo.save(contact);
    }

    public Page<Contact> list(String status, int page, int size) {
        var pageable = PageRequest.of(page, size, Sort.by(Sort.Direction.DESC, "createdAt"));
        return status != null ? repo.findByStatus(status, pageable) : repo.findAll(pageable);
    }
}
