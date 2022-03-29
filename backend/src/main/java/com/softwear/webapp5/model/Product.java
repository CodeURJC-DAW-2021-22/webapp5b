package com.softwear.webapp5.model;

import java.util.Set;

import javax.persistence.*;

import com.softwear.webapp5.data.ProductSize;

@Entity
public class Product{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
	
	@Column(nullable = false)
    private String name;

	@Column(nullable = false)
    private String description;

	@Column(nullable = false)
	private double price;

	@Column(nullable = false)
	private Long stock;
	
	@Column(nullable = false)
	private ProductSize size;

	@ManyToMany
    @JoinTable(
    	name="product_image",
        joinColumns = @JoinColumn(name="product_id"),
		inverseJoinColumns = @JoinColumn(name="image_id"))
	private Set<Image> image;
    
	public Product(String name, String description, double price, Long stock, 
			ProductSize size, Set<Image> image) {
		this.name = name;
		this.description = description;
		this.price = price;
		this.stock = stock;
		this.size = size;
		this.image = image;
	}

	public Product() {}

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

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Long getStock() {
		return stock;
	}

	public void setStock(Long stock) {
		this.stock = stock;
	}

	public ProductSize getSize() {
		return size;
	}

	public void setSize(ProductSize size) {
		this.size = size;
	}

	public Set<Image> getImage() {
		return image;
	}

	public void setImage(Set<Image> image) {
		this.image = image;
	}
}