package mypack;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

public class RegistrationController 
{
	@Autowired
	UserManager manager;
	
	@PostMapping(value = "Users", headers = "Accept=application/json")  
	 public User addUser(@RequestBody User user)
	 {
		System.out.println("adduser called");
		manager.addUser(user);
		return user;
	 }
}
