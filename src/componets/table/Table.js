import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const TableBasic = ({alto, ancho, brand, disco, procesador, ram, resolucion, sku, wifi}) =>{ 

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 300, maxWidth:1200}} align='center' aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Especificaciones</TableCell>
            <TableCell align="center">Valor</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow>
                <TableCell align="center">alto</TableCell>
                <TableCell align="center">{alto}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell align="center">ancho</TableCell>
                <TableCell align="center">{ancho}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell align="center">brand</TableCell>
                <TableCell align="center">{brand}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell align="center">disco</TableCell>
                <TableCell align="center">{disco}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell align="center">procesador</TableCell>
                <TableCell align="center">{procesador}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell align="center">ram</TableCell>
                <TableCell align="center">{ram}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell align="center">resolucion</TableCell>
                <TableCell align="center">{resolucion}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell align="center">sku</TableCell>
                <TableCell align="center">{sku}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell align="center">wifi</TableCell>
                <TableCell align="center">{wifi}</TableCell>
            </TableRow>

         
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TableBasic