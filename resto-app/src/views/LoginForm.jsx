import "../App.css";
import loginSubmit from "../components/Login";

const LoginForm = ({ username, password }) => {
	return (
		<>
			<section className="login-page">
				<div className="wrapper">
					<form action="">
						<h1>Login</h1>
						<div className="input-box">
							<input
								onChange={loginSubmit}
								type="text"
								name="username"
								placeholder="Username"
								value={username}
								required
							/>
						</div>
						<div className="input-box">
							<input
								onChange={loginSubmit}
								type="password"
								name="password"
								placeholder="Password"
								value={password}
								required
							/>
						</div>
						<button className="btn-login">Login</button>
						<div className="register-link">
							<p>
								Don't have an account? <a href="#">Register</a>
							</p>
						</div>
					</form>
				</div>
			</section>
		</>
	);
};

export default LoginForm;
