package mypack;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;



@Repository
@Transactional

public interface UserRepository extends JpaRepository<User,String> 
{
	User save();
	
	@Query(value="select * from Users where username=:Username and password=:Password",nativeQuery=true)
	User findUser(@Param("username")String username,@Param("password")String password);
}