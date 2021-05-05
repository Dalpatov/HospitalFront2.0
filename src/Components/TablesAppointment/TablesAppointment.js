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
import Delete from '../DeleteTables/Delete'
import DraggableDialog from '../EditWindow/EditWindow';
import DeletePic from '../../Img/DeletePic.svg';
import EditPic from '../../Img/EditPic.svg';
import AddFilter from '../../Img/AddFilter.svg';
import './TablesAppointment.css';

function TablesAppointment(props) {
  const { 
    appointment,
    showAllTabs,
    setFlagChange, 
    flagChange
  } = props;
  const [indexEdit, setIndexEdit] = useState(false);
  const [deleteFlag, setDeleteFlag] = useState(false);
  const [editFlag, setEditFlag] = useState(false);
  const [idDel, setIdDel] = useState(false);
  const [filter, setFilter] = useState(false);
  const [fromDate, setFromDate] = useState(false);
  const [byDate, setByDate] = useState(false);
  
  function edit(index) {
    setEditFlag(1);
    setIndexEdit(index);
    setFlagChange(1);
  } 

  const del = async(index) => {
    setDeleteFlag(1);
    setIdDel(appointment[index]._id);
    setFlagChange(1);
  }

  function filterFunc (fromDate, byDate) {
    let filterAppoint = appointment.filter( item => {
      let date2 = item.date.split('-');
      date2 = date2[2] + '-' + date2[1] + '-' + date2[0];
      if(!fromDate && !byDate) return 1;
      else if(fromDate && byDate) return (date2 >= fromDate && date2 <= byDate);
      else if(fromDate) return (date2 >= fromDate);
      else return (date2 <= byDate);
    });
    setTable(newArr);
  }

  return (
    <div>
      {!filter && 
        <div className='new-filter'>
          <img 
            src={AddFilter} 
            alt={"AddFilter"} 
            className='added-filter'
            onClick={() => setFilter(1)}
          />
        </div>
      }
      {filter && 
      <div className="from-box">
        

      }
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
      {deleteFlag && <Delete
        setDeleteFlag={setDeleteFlag}
        deleteFlag={deleteFlag}
        id={idDel}
        appointment={appointment}
        showAllTabs={showAllTabs}
      />
      }
      {editFlag && <DraggableDialog 
        setEditFlag={setEditFlag} 
        editFlag={editFlag} 
        appointment={appointment} 
        index={indexEdit}
        showAllTabs={showAllTabs}
      /> 
      }
    </div>
  );
}
export default TablesAppointment;
