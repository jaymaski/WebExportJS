import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import React, { useEffect, useState } from "react";
import {Collapse} from 'react-bootstrap'

import { faChartArea, faCog, faWrench, faFolder, faTable, faLaughWink, faTachometerAlt} from '@fortawesome/free-solid-svg-icons'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function SideBar() {
    const [open, setOpen] = useState(false);

    return (
        <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
            {/*  Sidebar - Brand */}
            <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div class="sidebar-brand-icon rotate-n-15">
                    <i><FontAwesomeIcon icon={faLaughWink} /></i>
                </div>
                <div class="sidebar-brand-text mx-3">GTASS <sup>v2</sup></div>
            </a>

            {/*  Divider */}
            <hr class="sidebar-divider my-0"></hr>
         
            {/*  Nav Item - Dashboard */}
            <li class="nav-item active">
                <a class="nav-link" href="/home">
                <i><FontAwesomeIcon icon={faTachometerAlt} /></i>
                <span>Dashboard</span></a>
            </li>

            {/*  Divider */}
            <hr class="sidebar-divider"></hr>

            {/*  Heading */}
            <div class="sidebar-heading">
                Interface
            </div>

            {/*  Nav Item - Pages Collapse Menu */}
            <li class="nav-item">
                <a class="nav-link collapsed" href="#" 
                   onClick={() => setOpen(!open)}
                   aria-controls="componmentsCollapse"
                   aria-expanded={open} >
                   <i><FontAwesomeIcon icon={faCog} /></i>
                   <span>Requests</span>
                </a>
                <Collapse in={open}>
                    <div id="componmentsCollapse" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                        <div class="bg-white py-2 collapse-inner rounded">
                            <h6 class="collapse-header">Ticket Requests:</h6>
                            <a class="collapse-item" href="/ticketing">Exportations</a>
                            <a class="collapse-item" href="cards.html">Database/Table</a>
                            <a class="collapse-item" href="cards.html">Process Model</a>
                        </div>
                    </div>
                </Collapse>
            </li>

            {/*  Divider */}
            <hr class="sidebar-divider"></hr>

            {/*  Heading */}
            <div class="sidebar-heading">
                Addons
            </div>

            {/*  Nav Item - Pages Collapse Menu */}
            <li class="nav-item">
                <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages"
                    aria-expanded="true" aria-controls="collapsePages">
                    <i><FontAwesomeIcon icon={faFolder} /></i>
                    <span>Pages</span>
                </a>
                <div id="collapsePages" class="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                    <div class="bg-white py-2 collapse-inner rounded">
                        <h6 class="collapse-header">Login Screens:</h6>
                        <a class="collapse-item" href="login.html">Login</a>
                        <a class="collapse-item" href="register.html">Register</a>
                        <a class="collapse-item" href="forgot-password.html">Forgot Password</a>
                        <div class="collapse-divider"></div>
                        <h6 class="collapse-header">Other Pages:</h6>
                        <a class="collapse-item" href="404.html">404 Page</a>
                        <a class="collapse-item" href="blank.html">Blank Page</a>
                    </div>
                </div>
            </li>

            {/*  Nav Item - Charts */}
            <li class="nav-item">
                <a class="nav-link" href="charts.html">
                    <i><FontAwesomeIcon icon={faChartArea} /></i>
                    <span>Charts</span></a>
            </li>

            {/*  Nav Item - Tables */}
            <li class="nav-item">
                <a class="nav-link" href="/ticketing">
                <i><FontAwesomeIcon icon={faTable} /></i>
                <span>Ticketing</span></a>
            </li>

            {/*  Divider */}
            <hr class="sidebar-divider d-none d-md-block"></hr>
        </ul>
    );
}

export default SideBar;