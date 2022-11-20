package mypack;



public interface UserManager 
{
	 User getUser(String username,String password);
	
	 void addUser(User user);
}
