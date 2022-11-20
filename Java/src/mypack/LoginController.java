package mypack;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController  
@CrossOrigin("http://localhost:3000")
public class LoginController
{
	
	@Autowired
	UserManager manager;

	@PostMapping(value = "/Login", headers = "Accept=application/json")  
	 public String addpro(@RequestBody User login)
	 {
		System.out.println("hiii");
		System.out.println(login.getusername());
		System.out.println(login.getpassword());
			
		 User l=manager.getUser(login.getusername(),login.getpassword());

		 if (l == null)
         {
			 System.out.println("null");
             return null;
         }
		 else
		 {	 
			 System.out.println(l.getusername());
           return l.getusername();
		 }
	 }
}
