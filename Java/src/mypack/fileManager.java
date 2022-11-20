package mypack;

public interface fileManager 
{
	files getFile(int file_no);
	void addFile(files file);
	void delete(int file_no);
	
}
