import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserData } from "../../redux/reducer/users";

const SignupPage = () => {
    const [formData, setFormData] =  useState({
        name: '',
        email:'',
        password: '',
    })

const onChange = (event) => {
    setFormData({...formData, [event.target.name]:event?.target?.value})
};
const displach = useDispatch();
const submit = (event) => {
    event.preventDefault();
    displach(setUserData(formData))
    console.log('submit Data')
};

const data = useSelector((e)=> e.users.userData);

console.log('data',data)
    return (
        <>
            <div className="auth">
                <div className="auth__title">
                    <h1>Sign up</h1>
                </div>
                <form onSubmit={submit}>
                    <div>
                    <input type="text" name="name" placeholder="User name" onChange={(event)=>onChange(event)}/>
                    </div>
                    <div>
                        <input type="email" name="email" placeholder="Email" onChange={(event)=>onChange(event)} />
                    </div>
                    <div>
                        <input type="password" name="password" placeholder="Password" onChange={(event)=>onChange(event)}/>
                    </div>
                    <div>
                        <button type="submit">Sign up</button>
                    </div>
                </form>
            </div>
        </>
    )
};

export default SignupPage