import React from 'react';
import { ReactComponent as MessengerIcon } from './icons/messenger.svg';
import { ReactComponent as PlusIcon } from './icons/plus.svg';
function App(){
  return(
    <Navbar>
      <NavItem icon ={<PlusIcon /> }/>
      <NavItem icon ={<MessengerIcon />}/>
    </Navbar>
  );
}
function Navbar(props){
  return(
    <nav className="navbar">
      <ul className="navbar-nav">{props.children}</ul>
    </nav>
  )
}
function NavItem(props){
  return(
    <li className="nav-item">
      <a href="2" className="icon-button">
        {props.icon}   </a>
    </li>
  );
}
tfi7y7ututrduyuuftgfdu7jyftrdgytrtygtf54yrd6tygtfd6tystryufgfdstrdtydrdtfdyesre765tururey5rrrt7tfgfdsys67tdrreaerstdfgtft
export default App;