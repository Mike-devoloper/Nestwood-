import TabPanel from "@mui/lab/TabPanel";
import { Stack } from "@mui/material"
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


interface AdditionalInfoProps {
    setTab: (input: string) => void
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
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

function createData(
  weight?: string,
  dimensions?: string,
  size?: string,
  color?: string,
) {
  return { weight, dimensions, size, color};
}

const rows = [
    createData('Weight', "15kg"),
    createData('Dimensions', "120mm, 130mm, 1100mm"),
    createData('Size', "Large"),
    createData('Color', "yellow, black, red"),
  ];
  
export default function AdditionalInfo(props: AdditionalInfoProps) {
    const {setTab} = props;
  return (
    <TabPanel value="1">
        <TableContainer component={Paper} sx={{marginTop: "10px", marginBottom: "50px"}}>
      <Table sx={{ width: "1000px" }} aria-label="customized table">
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.weight}>
              <StyledTableCell component="th" scope="row">
                {row.weight}
              </StyledTableCell>
              <StyledTableCell align="right">{row.size}</StyledTableCell>
              <StyledTableCell align="right">{row.dimensions}</StyledTableCell>
              <StyledTableCell align="right">{row.size}</StyledTableCell>
              <StyledTableCell align="right">{row.color}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </TabPanel>
  );
}
