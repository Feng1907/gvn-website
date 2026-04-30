package com.gvntmc.backend.service;

import com.gvntmc.backend.entity.Article;
import com.gvntmc.backend.entity.Product;
import com.gvntmc.backend.entity.ServiceEntity;
import com.gvntmc.backend.repository.ArticleRepository;
import com.gvntmc.backend.repository.ProductRepository;
import com.gvntmc.backend.repository.ServiceRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.regex.Pattern;

@Service
@RequiredArgsConstructor
public class SearchService {

    private final ProductRepository  productRepo;
    private final ArticleRepository  articleRepo;
    private final ServiceRepository  serviceRepo;

    public Map<String, Object> search(String q) {
        if (q == null || q.isBlank()) {
            return Map.of("products", List.of(), "articles", List.of(), "services", List.of());
        }

        // Case-insensitive regex for MongoDB text-like search
        var regex = Pattern.compile(q.trim(), Pattern.CASE_INSENSITIVE);

        List<Product> products = productRepo.findAll(PageRequest.of(0, 20))
                .stream()
                .filter(p -> regex.matcher(p.getName()).find()
                          || (p.getNameEn() != null && regex.matcher(p.getNameEn()).find())
                          || (p.getCategory() != null && regex.matcher(p.getCategory()).find()))
                .limit(8)
                .toList();

        List<Article> articles = articleRepo.findByPublishedTrue(PageRequest.of(0, 20))
                .stream()
                .filter(a -> regex.matcher(a.getTitle()).find()
                          || (a.getTitleEn() != null && regex.matcher(a.getTitleEn()).find())
                          || (a.getExcerpt() != null && regex.matcher(a.getExcerpt()).find()))
                .limit(5)
                .toList();

        List<ServiceEntity> services = serviceRepo.findByActiveTrueOrderByOrderAsc()
                .stream()
                .filter(s -> regex.matcher(s.getTitle()).find()
                          || (s.getTitleEn() != null && regex.matcher(s.getTitleEn()).find()))
                .limit(4)
                .toList();

        Map<String, Object> result = new HashMap<>();
        result.put("products", products);
        result.put("articles", articles);
        result.put("services", services);
        return result;
    }
}
