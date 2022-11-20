package mypack;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;


public interface fileRepository extends JpaRepository<files,String>
{
     files save(files file);
     
     List<files> findAll();
 	
 	
 	void deleteByNo(int file_no);
	
	@Query(value="select * from files where file_no=:fileno",nativeQuery=true)
	files getFiles(@Param("file_no")int file_no);
	
	
}
