 import * as React from 'react';
 
 export default class Header extends React.Component {
     render(){
         return (
             <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <ul className="nav navbar-nav">
                    <li className={this.props.active === 'home'?'active':""}><a href="/home">Home</a></li>
                    <li className={this.props.active === 'about'?'active':""}><a href="/about">About</a></li>
                    <li className={this.props.active === 'contact'?'active':""}><a href="/contact">Contact</a></li>
                    </ul>
                </div>
            </nav>
         )}
 }