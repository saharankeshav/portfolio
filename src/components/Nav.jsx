import "./Nav.scss";

const Nav = () => {
  return (
    <header className="mac-menu-bar">
      {/* LEFT */}
      <div className="menu-left">
        <span className="apple-logo"></span>x

        <span className="menu-item app-name">Keshav Saharan</span>
        <span className="menu-item">File</span>
        <span className="menu-item">Window</span>
        <span className="menu-item">Terminal</span>
        
      </div>

      {/* RIGHT */}
      <div className="menu-right">
        
        <span className="sys-icon"><img src="/navbar-icons/wifi.svg" alt="" /></span>
        <span className="time">Sun Feb 1 12:51 PM</span>
      </div>
    </header>
  );
};

export default Nav;
