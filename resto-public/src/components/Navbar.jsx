const Navbar = () => {
	return (
		<header>
			<a href="" className="logo">
				<i className="fas fa-utensils"></i>resto.
			</a>
			<nav className="navbar">
				<a href="/">Homepage</a>
				<a href="">About Us</a>
				<a href="">Add Menu</a>
				<a href="">Profile</a>
			</nav>

			<div className="icons">
				<i className="fas fa-bars" id="menu-bars"></i>
				<i className="fas fa-search" id="search-icon"></i>
			</div>
		</header>
	);
};

export default Navbar;
