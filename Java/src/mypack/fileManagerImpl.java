package mypack;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
@Service
public class fileManagerImpl implements fileManager
{
	@Autowired
	fileRepository repository;
	
	@Override
	public void addFile(files file) 
	{
		repository.save(file);
	}
	
	@Override
	public files getFile(int file_no) 
	{
		return repository.getFiles(file_no);
	}
	
	@Override
	public void delete(int file_no) {
		repository.deleteByNo(file_no);
	}
}
