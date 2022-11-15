package com.webtech.service;

import java.util.List;

import com.webtech.model.Customers;

public interface CustomersInterface {
	
	List<Customers> fetchAllCustomers();

	boolean saveCustomer(Customers customer);

	Customers findCustomerById(String email);

	void deleteCustomer(Customers customer);

	Boolean validateCustomer(String customerEmail, String customerPassword);
}
