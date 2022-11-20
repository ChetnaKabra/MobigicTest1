
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useNavigate } from 'react-router-dom';
import LogoBar from './LogoBar';


export default function OrderHistory(){

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.warning.light,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const [files,setFile]=React.useState([])
const navigate=useNavigate()



React.useEffect(() => {


    var id = window.sessionStorage.getItem("file_no")
    


    fetch("https://localhost:8080/MiniApplications/File/" + file_no)
      .then(res => res.json())
      .then((data) => {
        setOrders(data)
      })

      window.scrollTo(0, 0)


  }, [])





  return (
    <div>

      <LogoBar/>

      {(orders.length!=0)?

    <div id="uploadhistory" className='container' style={{marginTop:"150px"}}>
   <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell ><strong style={{color:"black"}}>File Name</strong></StyledTableCell>
            <StyledTableCell align="right"><strong style={{color:"black"}}>File Type</strong></StyledTableCell>
            <StyledTableCell align="right"><strong style={{color:"black"}}>Last Modified:</strong></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {orders.map((img) => (
            <StyledTableRow key={img.O_P_Name}>
              <StyledTableCell component="th" id="productname" onClick={()=>{navigate('/Details/'+img.O_P_Name)}}scope="row">
              <strong style={{color:"black"}}>{img.filename}<br/> <span className='blockquote-footer'></span></strong>
              </StyledTableCell>
              <StyledTableCell align="right">{img.filetype}</StyledTableCell>
              <StyledTableCell align="right">{img.lastmodified}</StyledTableCell>
            </StyledTableRow>
          ))}
          
        </TableBody>
      </Table>
    </TableContainer>
    </div>:<h1 style={{marginTop:"200px",marginLeft:"600px"}}>No previous orders!</h1>}
    </div>
  );
}
