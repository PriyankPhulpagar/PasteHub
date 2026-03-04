function Login() {
  const handleLogin = () => {
    window.location.href = "http://localhost:5000/auth/google";
  };

  return (
    <div className="container text-center mt-5">
      <h2>Welcome to PasteHub</h2>
      <button className="btn btn-dark mt-3" onClick={handleLogin}>
        Login with Google
      </button>
    </div>
  );
}

export default Login;