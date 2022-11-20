package mypack;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="Users")
public class User 
{
	private String username,password;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public String getusername() 
	{
		return username;
	}
	
	public void setusername(String Username) 
	{
		System.out.println("In set username");
		username = Username;
	}
	public String getpassword() 
	{
		return password;
	}
	public void setpassword(String Password) 
	{
		password = Password;
	}
	
}
