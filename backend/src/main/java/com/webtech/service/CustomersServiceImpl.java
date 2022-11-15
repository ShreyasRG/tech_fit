package com.webtech.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.webtech.model.Customers;
import com.webtech.repository.CustomersRepository;

@Service
public class CustomersServiceImpl implements CustomersInterface{

	@Autowired
	CustomersRepository customersRepository;

	@Override
	public List<Customers> fetchAllCustomers() 
	{
		return customersRepository.findAll();
	}

	@Override
	public boolean saveCustomer(Customers customer)
	{
		try
		{
			customersRepository.save(customer);
			return true;
		} 
		catch (Exception e) 
		{
			System.out.println("Customer with Same Phone Already Exists: " + e);
			return false;
		}
	}

	@Override
	public Customers findCustomerById(String email) 
	{
		Customers customer = customersRepository.findById(email).orElse(null);
		return customer;
	}

	@Override
	public void deleteCustomer(Customers customer)
	{
		customersRepository.delete(customer);
	}

	@Override
	public Boolean validateCustomer(String customerEmail, String customerPassword) 
	{

		if (customersRepository.findById(customerEmail).isPresent()) 
		{
			Customers customer = customersRepository.findById(customerEmail).get();
			String dbPassword = customer.getCustomerPassword().toString();
			if (dbPassword.equals(customerPassword)) 
			{
				return true;
			}
		}
		return false;
	}


}
