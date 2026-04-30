package com.gvntmc.backend;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.TestPropertySource;

@SpringBootTest
@TestPropertySource(properties = {
    "spring.data.mongodb.uri=mongodb://localhost:27017/gvntmc_test"
})
class GvnBackendApplicationTests {

    @Test
    void contextLoads() {
    }
}
