package mypack;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;



@RestController
@CrossOrigin("http://localhost:3000")
public class UserController 
{
	@Autowired
	UserManager manager;
	
	@GetMapping(value = "Users/{username}", headers = "Accept=application/json")  
	 public Boolean geUserByUName(@PathVariable String username,@PathVariable String password)
	 {
		User u = manager.getUser(username,password);
		if (u != null)
		{
			return false;
		}
		else
		{
			return true;
		}
	 }
}
