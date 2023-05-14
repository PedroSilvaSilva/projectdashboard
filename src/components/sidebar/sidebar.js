import React from "react";

const Sidebar = () => {
  return (
    <header className="test1">
      <div className="widget-sidebar">
        <div className="widget-sidebar__logo">
          <img src="https://schedulecreation.com/logo.png" alt="logo" />
        </div>
        <div className="widget-sidebar__menu">
          <ul className="widget-sidebar__menulist">
            <li>Overview</li>
            <li>Tasks</li>
            <li>User</li>
            <li>Chat</li>
            <li>Announcements</li>
            <li>Settings</li>
          </ul>
        </div>
        <button>Log Out</button>
      </div>
      <div>
        <button>
          <svg
            width="27"
            height="24"
            viewBox="0 0 27 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M25.8886 0H0.40856C0.26556 0 0.14856 0.122727 0.14856 0.272727V2.45455C0.14856 2.60455 0.26556 2.72727 0.40856 2.72727H25.8886C26.0316 2.72727 26.1486 2.60455 26.1486 2.45455V0.272727C26.1486 0.122727 26.0316 0 25.8886 0ZM25.8886 21.2727H0.40856C0.26556 21.2727 0.14856 21.3955 0.14856 21.5455V23.7273C0.14856 23.8773 0.26556 24 0.40856 24H25.8886C26.0316 24 26.1486 23.8773 26.1486 23.7273V21.5455C26.1486 21.3955 26.0316 21.2727 25.8886 21.2727ZM25.8886 10.6364H0.40856C0.26556 10.6364 0.14856 10.7591 0.14856 10.9091V13.0909C0.14856 13.2409 0.26556 13.3636 0.40856 13.3636H25.8886C26.0316 13.3636 26.1486 13.2409 26.1486 13.0909V10.9091C26.1486 10.7591 26.0316 10.6364 25.8886 10.6364Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Sidebar;
