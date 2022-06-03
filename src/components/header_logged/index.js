import React from 'react';
import { Navbar, Container, Column, Button, Dropdown } from 'rbx';
import logoImage from '../../assets/images/logo-white.png';
import "../../styles/header.scss";
import UserService from '../../services/users';
import { Redirect, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';

