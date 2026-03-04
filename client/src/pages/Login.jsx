function Login() {
  const handleLogin = () => {
    // Redirect to backend Google auth
    window.location.href = `${process.env.REACT_APP_API_URL.replace("/api", "")}/auth/google`;
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