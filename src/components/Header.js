const Header = ({ isAuthenticated }) => {
  return (
    <header className="header">
      <h1>GreatVines Coding Challenge</h1>
      <form>
        <h2>Login</h2>
        {!isAuthenticated && [
          <input type="text" placeholder="Username" />,
          <input type="text" placeholder="Password" />
        ]}
      </form>
    </header>
  )
}

export default Header;