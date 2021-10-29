import React, { useState } from "react";

const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    return (
        <>
            <form action="">
                
                <div className="form-group text-center mt-2 col-lg-6 offset-lg-3">
                    <label htmlFor="">First Name:</label>
                    <input className="form-control" type="text" onChange={(e) => setFirstName(e.target.value)} />
                    {
                        firstName.length<2 && firstName.length >0?
                        <p className="text-danger">First Name must be atleast 2 characters long!</p>
                        : ""
                    }
                </div>

                <div className="form-group text-center col-lg-6 offset-lg-3 mt-2">
                    <label>Last Name: </label>
                    <input className="form-control" type="text" onChange={(e) => setLastName(e.target.value)} />
                    {
                        lastName.length<2 && lastName.length >0?
                        <p className="text-danger">Last Name must be atleast 2 characters long!</p>
                        : ""
                    }
                </div>

                <div className="form-group text-center col-lg-6 offset-lg-3 mt-2">
                    <label>Email Address: </label>
                    <input className="form-control" type="text" onChange={(e) => setEmail(e.target.value)} />
                    {
                        email.length<2 && email.length >0?
                        <p className="text-danger">Email must be atleast 2 characters long!</p>
                        : ""
                    }
                </div>

                <div className="form-group text-center col-lg-6 offset-lg-3 mt-2">
                    <label>Password: </label>
                    <input className="form-control"
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}

                    />
                    {
                        password.length<8 && password.length >0?
                        <p className="text-danger">Password must be atleast 2 characters long!</p>
                        : ""
                    }
                </div>
                <div className="form-group text-center col-lg-6 offset-lg-3 mt-2">
                    <label>ConfirmPassword: </label>
                    <input className="form-control"
                        type="password"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    {
                        confirmPassword.length<8 && confirmPassword.length >0?
                        <p className="text-danger">Password must match!</p>
                        : ""
                    }
                </div>

                <div className="text-center col-lg-6 offset-lg-3 mt-3"><input className="form-control text-center mt-2" className="btn btn-primary " type="submit" value="Create User" /></div>
            </form>
            <div className="text-center mt-4 text-dark">
            <h2>Your Typed Information</h2>
            <p>FirstName: {firstName}</p>
            <p>LastName: {lastName}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>ConfirmPassword: {confirmPassword}</p>

        </div>
        </>
    );
};

export default UserForm;
