import { useState } from "react";
import axios from "axios";
import "../App.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	// const RESTO_ADMIN_SERVER_URL = "https://phase2-aio.vercel.app";
	// const adminApi = axios.create({ baseURL: RESTO_ADMIN_SERVER_URL });

	// ?NAVIGASI SETELAH LOGIN
	const navigate = useNavigate();

	// ?LOGIN EVENT
	const isEmail = (event) => {
		setEmail(event.target.value);
	};

	const isPassword = (event) => {
		setPassword(event.target.value);
	};

	// const token =

	const loginSubmit = async (event) => {
		event.preventDefault();
		console.log(email, password, "<<<<<<<<<");

		try {
			const response = await axios.post(
				`https://phase2-aio.vercel.app/apis/login`,
				{
					email,
					password,
				}
			);
			console.log(response, "<<LOGIN INPUT>>");

			localStorage.setItem("token", response.data.data.access_token);

			// NAVIGATE TO HOMEPAGE (SERVER)
			navigate("/mainTable");
		} catch (error) {
			console.log(error.message);
		}
	};

	return (
		<>
			<section className="login-page">
				<div className="wrapper">
					<form action="" onSubmit={loginSubmit}>
						<h1>Login</h1>
						<div className="input-box">
							<input
								onChange={isEmail}
								type="text"
								name="username"
								placeholder="Username"
								value={email}
								required
							/>
						</div>
						<div className="input-box">
							<input
								onChange={isPassword}
								type="password"
								name="password"
								placeholder="Password"
								value={password}
								required
							/>
						</div>
						<button className="btn-login" type="submit">
							Login
						</button>
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

export default Login;
