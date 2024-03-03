import {useState} from "react";
import {useNavigate} from "react-router-dom";
export default function RegisterForm(){
    const [formValues, setFormValue] = useState({
        name:"",
        userName:"",
        email:"",
        mobile:"",
        checkbox:false,
    })
    const handleChange = (e) => {
        setFormValue({
            ...formValues, 
            [e.target.name]: e.target.value
        });
    };

    const [errors, setErrors] = useState({
        name:null,
        username:null,
        email:null,
        mobile:null,
        checkbox:null,
    });
    const navigate = useNavigate();
    const handleSignUp = () => {
        let isErrors = false;
        if(formValues.name.trim().length === 0){
            setErrors((prev) => ({...prev, name:"Name is required"}));
            isErrors = true;
        }else{
            setErrors((prev) => ({...prev,name:null}))
        }
        if(formValues.userName.trim().length === 0){
            setErrors((prev) => ({...prev, username:"Username is required"}));
            isErrors = true;
        }else{
            setErrors((prev) => ({...prev,username:null}))
        }
        if(formValues.email.trim().length === 0){
            setErrors((prev) => ({...prev, email:"Email is required"}));
            isErrors = true;
        }else{
            setErrors((prev) => ({...prev,email:null}))
        }
        if(formValues.mobile.trim().length === 0){
            setErrors((prev) => ({...prev, mobile:"Mobile is required"}));
            isErrors = true;
        }else{
            setErrors((prev) => ({...prev,mobile:null}))
        }
        if(formValues.checkbox === false){
            setErrors((prev) => ({...prev, checkbox:"Please accept the terms and conditions"}));
            isErrors = true;
        }else{
            setErrors((prev) => ({...prev,checkbox:null}))
        }

        if(!isErrors){
            navigate("/movies")
        }
    }
    return (
    <div
        style={{
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            gap: 12,
            width: 300,
        }}
    >
        <input type="text" placeholder="Name" value={formValues.name} onChange={handleChange} name="name" />
        {errors.name ? <p style={{color:"red"}}>{errors.name}</p> : <></>}
        <input type="text" placeholder="Username" value={formValues.userName} onChange={handleChange} name="userName" />
        {errors.username ? <p style={{color:"red"}}>{errors.username}</p> : <></>}
        <input type="email" placeholder="Email" value={formValues.email} onChange={handleChange} name="email" />
        {errors.email ? <p style={{color:"red"}}>{errors.email}</p> : <></>}
        <input type="text" placeholder="Mobile" values={formValues.mobile} onChange={handleChange} name="mobile" />
        {errors.mobile ? <p style={{color:"red"}}>{errors.mobile}</p> : <></>}
        <div style={{display:"flex"}}>
            <input type="checkbox" id="checkbox" name="checkbox" value={formValues.checkbox} onChange={handleChange} />
            <label htmlFor="checkbox" >
            {errors.checkbox ? <p style={{color:"red"}}>{errors.checkbox}</p> : <></>}
                Share my registration data with Superapp.
            </label>
        </div>
        <button onClick={handleSignUp}>Sign Up</button>
    </div>
    );
}