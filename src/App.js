import './App.scss';

function App() {
  return (
    <div className="container">
      <header className="header white padding-lr-2">
        <Logo />
        <Navbar />
      </header>
      <main>
        <Banner />
        <h1 className="white padding-lr-2">Offers</h1>
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

function Banner() {
  return (
    <div className="banner white padding-l-2">
      <div>
        <p>
          <span className="banner__text_large">
            Discover the vast<br/> expanses of <span className="pink">space</span><br/>
          </span>
          <span className="banner__text_small">
            Where the posibilities are <span className="yellow">endless!</span>
          </span>
        </p>
        <button className="button button_color_yellow">Learn more</button>
      </div>
      <div className="banner__image"></div>
    </div>
  )
}

export default App;
