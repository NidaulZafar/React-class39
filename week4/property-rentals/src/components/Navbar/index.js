import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
} from './NavbarElements';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPeopleRoof } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
return (
	<>
	<Nav>
		<Bars />
		<NavMenu>
		<NavLink to='/'>
					<FontAwesomeIcon icon={faPeopleRoof} style={{color: 'white', fontSize: '50px'}} />
		</NavLink>
		<NavLink to='/about'>
			About
		</NavLink>
		<NavLink to='/favorites'>
			Favorites
		</NavLink>
		<NavLink to='/contact'>
			Contact
		</NavLink>
		</NavMenu>
	</Nav>
	</>
);
};

export default Navbar;
