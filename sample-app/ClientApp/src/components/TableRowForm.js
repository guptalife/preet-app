import React, { Component } from 'react';
import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, Table } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { Button } from '@mui/material';

export default function TableRowForm() {
  const [readOnly, setReadOnly] = useState(true)
  return (
    <tr>
      <th scope="row">
       <Button onClick={()=>{
           setReadOnly((x)=>!x)
       }}>
          {readOnly? 'Edit' : 'Save' }

       </Button>
       <Button sx= {{'marginLeft':'2px'}} >
          delete
       </Button>
      </th>
      <td>
        <TextField
          id="filled-read-only-input"

          defaultValue="7971"
          InputProps={{
            readOnly: readOnly,
          }}
          variant="filled"
        />
      </td>
      <td>
        <TextField
          id="filled-read-only-input"

          defaultValue="78"
          InputProps={{
            readOnly: readOnly,
          }}
          variant="filled"
        />
      </td>
      <td>
        <TextField
          id="filled-read-only-input"

          defaultValue="89"
          InputProps={{
            readOnly: readOnly,
          }}
          variant="filled"
        />
      </td>
    </tr>
  )}