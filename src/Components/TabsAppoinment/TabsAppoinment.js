import React, { useState } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeletePic from '../../Img/DeletePic.svg';
import EditPic from '../../Img/EditPic.svg';
import './TabsAppointment.css';

function TabsAppoinment({
  appointment,
  setYourCheck,
}) {
  
  return (
    <TableContainer className="r"component={Paper} >
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
            <TableRow key={`appointment-${value.patient}`}>
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
export default TabsAppoinment;




