import React from 'react'

function Index() {
  return (
    <div>
        <div className="auth">
      <div className="auth-container">
        <p>Add another way to log in using any of the following services. </p>
        <div className="sign-options">
          <div  className="single-option">
            <img
              alt="google"
              src="https://image.flaticon.com/icons/png/512/281/281764.png"
            />
            <p>{loading ? "Signing in..." : "Login with Google"}</p>
          </div>
          <div className="single-option">
            <img
              alt="github"
              src="https://image.flaticon.com/icons/png/512/270/270798.png"
            />
            <p>Login with Github</p>
          </div>
          <div className="single-option">
            <img
              alt="facebook"
              src="https://image.flaticon.com/icons/png/512/733/733547.png"
            />
            <p>Login with Facebook</p>
          </div>
        </div>
        <div className="auth-login">
          <div className="auth-login-container">
            {register ? (
              <>
                {" "}
                <div className="input-field">
                  <p>Username</p>
                  <input
                    type="text"
                  />
                </div>
                <div className="input-field">
                  <p>Email</p>
                  <input
                    type="text"
                  />
                </div>
                <div className="input-field">
                  <p>Password</p>
                  <input
                    
                    type="password"
                  />
                </div>
              </>
            ) : (
              <>
                <div className="input-field">
                  <p>Email</p>
                  <input type="text" />
                </div>
                <div className="input-field">
                  <p>Password</p>
                  <input type="password" />
                </div>
                <button
                  onClick={handleSignIn}
                  disabled={loading}
                  style={{
                    marginTop: "10px",
                  }}
                >
                  {loading ? "Logging in..." : "Login"}
                </button>
              </>
            )}

            <p
              onClick={() => setRegister(!register)}
              style={{
                marginTop: "10px",
                textAlign: "center",
                color: "#0095ff",
                textDecoration: "underline",
                cursor: "pointer",
              }}
            >
              {register ? "Login" : "Register"} ?
            </p>
          </div>
        </div>
        {error !== "" && (
          <p
            style={{
              color: "red",
              fontSize: "14px",
            }}
          >
            {error}
          </p>
        )}
      </div>
    </div>
    </div>
  )
}

export default Index