package com.webtech.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.webtech.model.Customers;
import com.webtech.service.CustomersInterface;


@CrossOrigin("*")
@RestController
@RequestMapping(path = "/customers")
public class CustomersController {
	
	@Autowired
	CustomersInterface customersInterface;
	
	//get list of customers API
	@GetMapping("/getAllCustomers")
	public List<Customers> getAllCustomers() 
	{
		System.out.println("Inside getAllCustomers");
		
		List<Customers> customers = (List<Customers>) customersInterface.fetchAllCustomers();
		return customers;
	}

	//login customer API
	@PostMapping("/login")
	public Boolean validateCustomer(@RequestBody Customers loginDetails) throws NoSuchFieldException
	{
		System.out.println("Inside validateCustomer");
		
		String customerEmail = loginDetails.getCustomerEmail();
		String customerPassword = loginDetails.getCustomerPassword();

		System.out.println(customerEmail + " " + customerPassword);

		Boolean customerLoginStatus = customersInterface.validateCustomer(customerEmail, customerPassword);
		return customerLoginStatus;
	}

	//register customer API
	@PostMapping("/addCustomer")
	public boolean addCustomer(@RequestBody Customers customer) 
	{
		System.out.println("Inside addCustomer");
		
		return customersInterface.saveCustomer(customer);
	}

	//delete customer by email API
	@DeleteMapping("/deleteCustomer/{customerEmail}")
	public void deleteCustomer(@PathVariable("customerEmail") String email) 
	{
		System.out.println("Inside deleteCustomer");
		
		Customers customer = customersInterface.findCustomerById(email);
		customersInterface.deleteCustomer(customer);

	}

	//update customer by email API
	@PutMapping("/updateCustomer/{customerEmail}")
	public boolean updateManager(@PathVariable("customerEmail") String email, @RequestBody String newPincode)
	{
		System.out.println("Inside updateManager");
		
		Customers customer = customersInterface.findCustomerById(email);
		customer.setCustomerPincode(newPincode);
		customersInterface.saveCustomer(customer);
		return true;
	}
	
}
