import logo from "../../../../image/logo/pikstack-logo.png";
const Footer = () => {
  return (
    <div className="bg-[#271F23] text-white font-semibold md:px-56 mx-auto pt-10">
      <footer className="footer grid grid-cols-2 md:grid-cols-5 p-5 md:p-0">
        <nav className="w-40 flex items-center justify-between">
          <img src={logo} alt="" />
        </nav>
        <nav>
          <header className="footer-title">Services</header>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <header className="footer-title">Company</header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <header className="footer-title">Legal</header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        <form>
          <header className="footer-title">
            Sign Up For Exclusive Deals & Offers
          </header>
          <fieldset className="form-control w-80">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="join">
              <input
                type="text"
                placeholder="pikstack@site.com"
                className="input input-bordered join-item"
              />
              <button className="btn btn-primary join-item">Subscribe</button>
            </div>
          </fieldset>
        </form>
      </footer>
      <hr className="mt-10" />
      <div className="pb-32 pt-5 md:py-16 text-center">
        Copyright © 2024 Pikstack Company All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
