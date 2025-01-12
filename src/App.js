import './App.scss';

function App() {
  return (
    <div className="container">
      <header>
      <nav class="navbar">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">
            <svg height="20" width="30" xmlns="http://www.w3.org/2000/svg">
              <image height="20" width="30" href="cart.svg" alt="Cart"/>
            </svg>
          </a></li>
        </ul>
      </nav>
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

export default App;
