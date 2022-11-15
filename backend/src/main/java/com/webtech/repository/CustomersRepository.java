package com.webtech.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.webtech.model.Customers;

public interface CustomersRepository extends JpaRepository<Customers, String> {

}
