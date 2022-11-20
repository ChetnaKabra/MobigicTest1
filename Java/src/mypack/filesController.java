package mypack;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;



@RestController
@CrossOrigin("http://localhost:3000")
public class filesController 
{
	@Autowired
	fileManager manager;
	
	@GetMapping(value = "files/{file_no}", headers = "Accept=application/json")  
	 public files getFileByNo(@PathVariable int file_no)
	 {
		files u = manager.getFile(file_no);
		
		{
			return u;
		}
		
	 }
	
	@PostMapping(value = "files", headers = "Accept=application/json")  
	 public files addFile(@RequestBody files file)
	 {
		manager.addFile(file);
		return file;
	 }
	
	@DeleteMapping(value = "files/{file_no}", headers = "Accept=application/json71297"
			+ "")  
	 public void removefile(@PathVariable int file_no)
	 {
		manager.delete(file_no);
	 }
}
