import { Link, Outlet } from 'react-router-dom';

function LoginLayout() {
  return (
    <div className="Login">
      <h2>Welcome</h2>

      {/* Links to nested routes */}
      <nav style={{  marginBottom: '20px' }}>
        <Link to="/login" style={{ color: 'black', marginRight: 10 }}>Login</Link>
        <Link to="/login/signup" style={{  color: 'black',marginRight: 10 }}>Signup</Link>
      </nav>

      {/* Nested routes render here */}
      <Outlet />
    </div>
  );
}

export default LoginLayout;
