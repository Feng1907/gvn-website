package com.gvntmc.backend.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .csrf(AbstractHttpConfigurer::disable)
            .authorizeHttpRequests(auth -> auth
                // Public endpoints
                .requestMatchers(
                    "/api/v1/products/**",
                    "/api/v1/services/**",
                    "/api/v1/projects/**",
                    "/api/v1/news/**",
                    "/api/v1/contacts",
                    "/api/v1/search"
                ).permitAll()
                // Admin endpoints (Phase 10) — require auth
                .requestMatchers("/api/v1/admin/**").authenticated()
                .anyRequest().permitAll()
            );
        return http.build();
    }
}
