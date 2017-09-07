import React from 'react';
import { NavLink } from 'react-router-dom';

const Link = ({ filter, children }) => (
    <li>
        <NavLink to={"/" + filter}>{children}</NavLink>
    </li>
);

export default Link;