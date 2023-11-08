const Login = () => {
    return (
        <section class="login-page">
            <div class="wrapper">
                <form action="">
                    <h1>Login</h1>
                    <div class="input-box">
                        <input
                            type="text"
                            name="username"
                            placeholder="Username"
                            required />
                    </div>
                    <div class="input-box">
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            required />
                    </div>
                    <button class="btn-login">Login</button>
                    <div class="register-link">
                        <p>Don't have an account? <a href="#">Register</a></p>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Login;