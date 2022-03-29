package com.softwear.webapp5.data;

import java.util.Set;

import com.softwear.webapp5.model.Image;
import com.softwear.webapp5.model.Product;

public class ProductDTO {
	
	private Long id;
	private String name;
	private String description;
	private double price;
	private long stock;
	private ProductSize size;
	private Set<Image> images;
		
	public ProductDTO(Product product) {
		this.id = product.getId();
		this.name = product.getName();
		this.description = product.getDescription();
		this.price = product.getPrice();
		this.stock = product.getStock();
		this.size = product.getSize();
		this.images = product.getImage();
	}
	
	public ProductDTO(Long id, String name, String description, double price, long stock, ProductSize size,
			Set<Image> images) {
		this.id = id;
		this.name = name;
		this.description = description;
		this.price = price;
		this.stock = stock;
		this.size = size;
		this.images = images;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}
	public long getStock() {
		return stock;
	}
	public void setStock(long stock) {
		this.stock = stock;
	}
	public ProductSize getSize() {
		return size;
	}
	public void setSize(ProductSize size) {
		this.size = size;
	}
	public Set<Image> getImages() {
		return images;
	}
	public void setImages(Set<Image> images) {
		this.images = images;
	}
	
	

}