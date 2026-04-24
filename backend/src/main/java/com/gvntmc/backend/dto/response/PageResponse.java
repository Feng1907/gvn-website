package com.gvntmc.backend.dto.response;

import lombok.Getter;
import org.springframework.data.domain.Page;

import java.util.List;

@Getter
public class PageResponse<T> {

    private final List<T> items;
    private final long    total;
    private final int     page;
    private final int     size;
    private final int     totalPages;

    public PageResponse(Page<T> page) {
        this.items      = page.getContent();
        this.total      = page.getTotalElements();
        this.page       = page.getNumber();
        this.size       = page.getSize();
        this.totalPages = page.getTotalPages();
    }
}
