function Navbar() {
  return (
    <nav className="container">
      <div className="logo">
        <img src="images/logo.png" alt="logo" />
      </div>
      <ul>
        <li>
          <a href="#">Menu</a>
        </li>
        <li>
          <a href="#">Location</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contac</a>t
        </li>
      </ul>
      <button>Login</button>
    </nav>
  );
}

export default Navbar;
