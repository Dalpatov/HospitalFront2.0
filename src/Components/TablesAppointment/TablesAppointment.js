import React, { useState } from 'react';
import { 
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField, 
  MenuItem
} from '@material-ui/core';
import Delete from '../DeleteTables/Delete'
import DraggableDialog from '../EditWindow/EditWindow';
import DeletePic from '../../Img/DeletePic.svg';
import EditPic from '../../Img/EditPic.svg';
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
  const [sort, setSort] = useState(false);
  const [sortBy, setSortBy] = useState(false);
  const [noneSort, setNoneSort] = useState(false);

  
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

  function Sorting (e) {
    setSort(e.target.value);
    appointment.sort((a, b) => {
      if(e.target.value === 'date') {
        let date2 = a.date.split('-');
        date2 = date2[2] + '-' + date2[1] + '-' + date2[0];
        let date3 = b.date.split('-');
        date3 = date3[2] + '-' + date3[1] + '-' + date3[0];
        return (date2 > date3? 1 : (date2 < date3) ? -1 :  0)
      } else {
        return (a[e.target.value] > b[e.target.value]) ? 1 :
        (a[e.target.value] < b[e.target.value]) ? -1 : 0 
      }
    })
    if(e.target.value !== '_id') {
      setSortBy(1);
    } else {
      showAllTabs();
      setSortBy('');
      setSort('');
      setNoneSort(0);
    }
  }

  function SortingBy (e) {
    setSortBy(e.target.value);
      if(e.target.value === "asc") {
        appointment.sort((a, b) => {
          if(sort === 'date') {
            let date2 = a.date.split('-');
            date2 = date2[2] + '-' + date2[1] + '-' + date2[0];
            let date3 = b.date.split('-');
            date3 = date3[2] + '-' + date3[1] + '-' + date3[0];
            return (date2 > date3 ? 1 :
            (date2 < date3) ? -1 :  0)
          } else {
            return (a[sort] > b[sort]) ? 1 :
            (a[sort] < b[sort]) ? -1 : 0 
          }  
        })
      } else {
        appointment.sort((a, b) => {
          if(sort === 'date') {
            let date2 = a.date.split('-');
            date2 = date2[2] + '-' + date2[1] + '-' + date2[0];
            let date3 = b.date.split('-');
            date3 = date3[2] + '-' + date3[1] + '-' + date3[0];
            return (date2 < date3? 1 :
            (date2 > date3) ? -1 : 0)
          } else {
            return (a[sort] < b[sort]) ? 1 : 
            (a[sort] > b[sort]) ? -1 : 0 
          }
          })  
      } 
  }  

  const appoitntmentSort = [
    {key: 'patient', value: 'Имя'},
    {key: 'doctor', value: 'Врач'},
    {key: 'date', value: 'Дата'},
    {key: '_id', value: 'None'},
  ];

  const appoitntmentSortBy = [
    {key: 'asc', value: 'По возрастанию'},
    {key: 'desc', value: 'По убыванию'}
  ];
 
  return (
    <div>
      <div className='all-content'>
        <div className='sort-content'>
          <span className='text-content'>
            Сортировать по:
          </span>
            <TextField
              className="field-content"
              select
              value={sort}
              onChange={(e) => Sorting(e)}
              variant="outlined"
            >
              {appoitntmentSort.map((item, index) => (
                <MenuItem 
                  key={`sorting-${index}`} 
                  value={item.key}
                >
                  {item.value}
                </MenuItem>
              ))}
            </TextField>
            {sort && <>
              <span className='text-content'>
                Направление:
              </span>
                <TextField
                  className="field-content"
                  select
                  value={sortBy? sortBy : appoitntmentSortBy[0].key}
                  onChange={(e) => SortingBy(e)}
                  variant="outlined"
                >
                  {appoitntmentSortBy.map((item2, index) => (
                    <MenuItem 
                      key={`sorting-direction-${index}`} 
                      value={item2.key}
                    >
                      {item2.value}
                    </MenuItem>
                  ))}
                </TextField>
            </>
            }
        </div>
      </div>
      <TableContainer 
        className="all-tables" 
        component={Paper} 
      >
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
