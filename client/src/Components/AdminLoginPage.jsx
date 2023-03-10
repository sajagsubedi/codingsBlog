import React from 'react'


export default function AdminLoginPage(props) {
  return (
    <section className="AdminLoginPage">
      <h2>Enter your information below to login as admin .</h2>
      <form method="POST" action="/api/auth/adminlogin">
        <input
          className="inputField"
          type="email"
          placeholder="Enter your email"
          required
        />
        <input
          className="inputField"
          type="password"
          placeholder="Enter your password"
          required
        />
        <button type="submit" className="LoginButton">
          Log In
        </button>
      </form>
    </section>
  );
}
