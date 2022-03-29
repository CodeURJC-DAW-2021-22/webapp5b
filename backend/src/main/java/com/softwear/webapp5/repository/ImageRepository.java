package com.softwear.webapp5.repository;

import java.util.List;

import com.softwear.webapp5.model.Image;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ImageRepository extends JpaRepository<Image, Long> {
    public List<Image> findByRoute(String route);

    List<Image> imagesByProductsId(Long productID);

//    @Query(value="SELECT Image "
//                    + "FROM Image LEFT JOIN product_transaction "
//                    + "ON Image.id = image_id "
//                    + "WHERE product_id =:product.id ",
//            nativeQuery = true)
//    List<Image> findImagesByProduct(Product product);
}
