package com.softwear.webapp5.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.softwear.webapp5.data.ProductDTO;
import com.softwear.webapp5.service.ProductService;
import com.softwear.webapp5.model.Product;

@RestController
public class MainRESTController {

	@Autowired
    ProductService productService;
	
	@GetMapping("/products/{pageNumber}")
    public List<ProductDTO> users(Model model, @PathVariable int pageNumber){
        Page<Product> productPage = productService.findAllNames(PageRequest.of(pageNumber, 10));
        List<ProductDTO> listProduct= new ArrayList<>();
        for(Product p: productPage) {
        	listProduct.add(new ProductDTO(p));
        }
        return listProduct;
    }
}
