package mypack;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserManagerImpl implements UserManager
{
	@Autowired
	UserRepository repository;
	
	@Override
	public void addUser(User user) 
	{
		repository.save(user);
	}
	
	@Override
	public User getUser(String username,String password) 
	{
		return repository.findUser(username,password);
	}
	
}
