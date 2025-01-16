import './App.scss';

function App() {
  return (
    <div className="container">
      <header className="header white padding-lr-2">
        <Logo />
        <Navbar />
      </header>
      <main>
        <MainBanner />
        <Offers />
      </main>
      <Footer />
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
      <input type="checkbox" id="hamburger" className="navbar__hamburger" />
      <label id="hamburger_label" for="hamburger"></label>
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

function MainBanner() {
  return (
    <BaseBanner className="banner_large">
      <BaseBanner.Text buttonClassName='button_primary'>
        <div>
          <h3 className="banner__text_large">
            Discover the vast<br /> expanses of <span className="pink">space</span>
          </h3>
          <p className="banner__text_small">
            Where the posibilities are <span className="yellow">endless!</span>
          </p>
        </div>
      </BaseBanner.Text>
      <BaseBanner.Image />
    </BaseBanner>
  );
}

function Offers() {
  return (
    <div className="white padding-2">
      <h1>Offers</h1>
      <div className="offers-container">
        <div className="offers-container__item_large">
          <BannerOffer1 />
        </div>
        <div className="offers-container__item">
          <BannerOffer2 />
        </div>
        <div className="offers-container__item">
          <BannerOffer3 />
        </div>
        <div className="offers-container__item_large">
          <BannerOffer4 />
        </div>
      </div>
      <h3>Embark on a space journey</h3>
      <p className="opacity-60">
        Travelling into space is one of the most exciting and unforgettable adventures that can change your life forever. And if you have ever dreamed of exploring stars, planets and galaxies, then our company is ready to help you realize this dream. We offer a unique experience that will allow you to go on a space journey and see all the secrets of the universe. We guarantee that every moment in space will be filled with incredible impressions, excitement and new discoveries. Our team of professionals takes care of your safety and comfort so that you can fully enjoy your adventure in space. We offer various options for space excursions.
      </p>
      <button className="button label">Read more</button>
    </div>
  );
}

function BannerOffer1() {
  return (
    <SmallBanner
      className={"background_banner-1"}
      heading={"Move the borders of reality!"}
      text={"Go on a space adventure - it's possible with us!"}
    />
  );
}

function BannerOffer2() {
  return (
    <SmallBanner
      className={"background_banner-2"}
      heading={"Space is not just stars and planets"}
      text={"Go on a space adventure "}
    />
  );
}

function BannerOffer3() {
  return (
    <SmallBanner
      className={"background_banner-3"}
      heading={"For those who dream of stars"}
      text={"Our offer: make your dream come true"}
    />
  );
}

function BannerOffer4() {
  return (
    <SmallBanner
      className={"background_banner-4"}
      heading={"Fulfill your fantastic dreams"}
      text={"Space has never been so close"}
    />
  );
}

function SmallBanner({ className, heading, text }) {
  const classNameSmallBanner = `banner_small ${className}`;
  return (
    <BaseBanner className={classNameSmallBanner}>
      <BaseBanner.Text>
        <div className="banner_small__text-container">
          <h3 className="banner__text_large">
            {heading}
          </h3>
          <p className="banner__text_small">
            {text}
          </p>
        </div>
      </BaseBanner.Text>
    </BaseBanner>
  );
}

function BaseBanner(props) {
  const className = `banner white padding-l-2 ${props.className}`;

  return (
    <div className={className}>
      {props.children}
    </div>
  )
}
BaseBanner.Text = ({ children, buttonClassName = "button_secondary" }) => {
  return (
    <div className="banner__text">
      {children}
      <button className={`button ${buttonClassName}`}>Learn more</button>
    </div>)
};
BaseBanner.Image = () => <div className="banner__image"></div>;

function Footer() {
  return (
    <footer className="footer">
      <svg className="footer__image" xmlns="http://www.w3.org/2000/svg">
        <image className="svg-image" href="rocket.svg" alt="Rocket" />
      </svg>
      <span className="label">Exciting space adventure!</span>
    </footer>
  );
}

export default App;
