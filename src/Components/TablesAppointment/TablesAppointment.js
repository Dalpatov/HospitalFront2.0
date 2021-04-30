import React, { useState } from 'react';
import { 
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
 } from '@material-ui/core';
import DeletePic from '../../Img/DeletePic.svg';
import EditPic from '../../Img/EditPic.svg';
import './TablesAppointment.css';

function TablesAppointment({
  appointment,
  setYourCheck,
}) {
  
  return (
    <TableContainer className="all-tables" component={Paper} >
      <Table 
        className="tables-style"
        aria-label="a dense table"
      >
        <TableHead >
          <TableRow className="tables-row-style">
            <TableCell className="appoint-patient1">Имя</TableCell>
            <TableCell className="appoint-patient1">Врач</TableCell>
            <TableCell className="appoint-patient2" >Дата</TableCell>
            <TableCell className="appoint-patient3">Жалобы</TableCell>
            <TableCell className="appoint-patient4"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {appointment.map((value, index) => (
            <TableRow 
              key={`appointment-${value.patient}`}
            >
              <TableCell
                className="appoint-foot"
              >
                {value.patient}
              </TableCell>
              <TableCell
                className="appoint-foot"
              >
                {value.doctor}
              </TableCell>
              <TableCell
                className="appoint-foot"
              >
                {value.date}
              </TableCell>
              <TableCell
                className="appoint-foot"
              >
                {value.sick}
              </TableCell>
              <TableCell 
                className="appoint-foot"
              >
                <img 
                  src={EditPic} 
                  alt={"EditPic"} 
                  onClick={() => edit(index)}
                />
                <img 
                  className='delete-padding'
                  src={DeletePic}
                  alt={"DeletePic"} 
                  onClick={() => del(index)}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default TablesAppointment;