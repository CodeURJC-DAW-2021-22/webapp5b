package com.softwear.webapp5.service;

import java.sql.Blob;

import org.springframework.stereotype.Service;

@Service
public class ImageService {

    public Blob getImageFromRoute(String route, Long productID, Long imageID){
        
    }

    public String getFirstImageRoute(){
        return "";
    }

    public String getNonFirstImagesRoutes(){
        return "";
    }

    public Blob getFirstImage(){
        return null;
    }

    public Blob getNonFirstImages(){
        return null;
    }
}
