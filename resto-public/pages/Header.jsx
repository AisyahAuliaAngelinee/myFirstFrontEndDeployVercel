const Header = () => {
    return (
        <header>
            <a href="" class="logo"><i class="fas fa-utensils"></i>resto.</a>
            <nav class="navbar">
                <a href="">Homepage</a>
                <a href="">About Us</a>
                <a href="">Add Menu</a>
                <a href="">Profile</a>
            </nav>

            <div class="icons">
                <i class="fas fa-bars" id="menu-bars"></i>
                <i class="fas fa-search" id="search-icon"></i>
            </div>
        </header>
    )
}

export default Header;