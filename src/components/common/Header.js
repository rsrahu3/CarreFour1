 import * as React from 'react';
 import { Link } from 'react-router-dom';
 
 export default class Header extends React.Component {
     render(){
         return (
             <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <ul className="nav navbar-nav">
                    <li className={this.props.active === 'home'?'active':""}><Link to="/home">Home</Link></li>
                    <li className={this.props.active === 'about'?'active':""}><Link to="/about">About</Link></li>
                    <li className={this.props.active === 'contact'?'active':""}><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
            </nav>
         )}
 }