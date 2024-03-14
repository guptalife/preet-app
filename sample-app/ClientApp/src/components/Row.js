import React, { Component } from 'react';
import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink,Table } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';
import TableRowForm from './TableRowForm';

export default class Row extends Component {
    render() {
        return (
            <Table
            >
                <thead>
                    <tr>
                        <th>
                            OP
                        </th>
                        <th>
                            OG
                        </th>
                        <th>
                            MINq
                        </th>
                        <th>
                            MAXq
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <TableRowForm />
                    <TableRowForm />
                    <TableRowForm />
                </tbody>
            </Table>
        );
    }
}
