package com.ericlemanski.supplychainhub;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class})
public class SupplychainHubApplication {
    public static void main(String[] args) {
        SpringApplication.run(SupplychainHubApplication.class, args);
    }
}
