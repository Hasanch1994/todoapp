import React, { Fragment } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = (props) => {
    return (
        <div className="headerc">
            <NavLink to="/about">درباه ی ما</NavLink>{" "}
            <NavLink to="/">ثبت وظیفه</NavLink>
            <h3>مدیریت برنامه روزانه</h3>
        </div>
    );
}

export default Header;
