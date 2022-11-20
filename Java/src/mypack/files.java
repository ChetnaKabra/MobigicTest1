package mypack;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="files")
public class files 
{
	private String username,filename,filetype,lastmodified;
	private int file_no;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public String getusername() 
	{
		return username;
	}
	
	public String getfilename() 
	{
		return filename;
	}
	public void setfilename(String Filename) 
	{
		filename = Filename;
	}
	public String getfietype() 
	{
		return filetype;
	}
	public void setfiletype(String Filetype) 
	{
		filetype = Filetype;
	}
	public String getlastmodified() 
	{
		return lastmodified;
	}
	public void setlastmodifiede(String Lastmodified) 
	{
		lastmodified = Lastmodified;
	}
	public int getfile_no() 
	{
		return file_no;
	}
	public void setfile_no(int File_no) 
	{
		file_no = File_no;
	}
	
}
