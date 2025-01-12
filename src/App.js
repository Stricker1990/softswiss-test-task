import './App.scss';

function App() {
  return (
    <div className="container">
      <header>
        <Logo />
        <Navbar />
      </header>
      <main>
        <test>Test</test>
      </main>
      <footer>
        footer
      </footer>
    </div>
  );
}

function Logo() {
  return (
    <div className="logo">
      <svg className="logo__svg" xmlns="http://www.w3.org/2000/svg">
        <image className="svg-image" href="LOGO.svg" alt="Logo" />
      </svg>
    </div>
  )
}

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar__menu">
        <li className="navbar__menu-item">
          <a href="#" className="navbar__link">Home</a>
        </li>
        <li className="navbar__menu-item">
          <a href="#" className="navbar__link">Products</a>
        </li>
        <li className="navbar__menu-item">
          <a href="#" className="navbar__link">
            <svg className="navbar__image" xmlns="http://www.w3.org/2000/svg">
              <image className="svg-image" href="cart.svg" alt="Cart" />
            </svg>
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default App;
