import React from "react";

const Header = (props) => {
  return (
    <nav className="navbar navbar-light bg-primary">
      <a className="navbar-brand white text-white" href="#!">
        Bootstrap
      </a>
      <div>{props.isAuth ? <p>{props.login}</p> : <p>Login</p>}</div>
    </nav>
  );
};

export default Header;
