package com.softwear.webapp5;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class UserController {
	
	@GetMapping("/userProfile") //falta id
	public String user(Model model) {
	    return "userProfile";
	}
	
	@GetMapping("/")
	public String index(Model model) {
	    return "index";
	}
	
	@GetMapping("/login")
	public String login(Model model) {
	    return "login";
	}
	
	@GetMapping("/manageUsers")
	public String greeting(Model model) {
	    return "manageUsers";
	}
	
	
}
