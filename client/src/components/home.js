import React, { useState } from "react";
import { Button } from "react-bootstrap";

function Register(props){
    const pnameRef = React.useRef();
    const phoneRef = React.useRef();
    const genderRef = React.useRef();
    const dobRef = React.useRef();
    const bloodRef = React.useRef()
    const dnameRef = React.useRef();
    const facultyRef =React.useRef();
    const dphoneRef = React.useRef();
    const hnameRef = React.useRef();
    const licenseRef = React.useRef();
    const [err, Seterr]= useState();
    const [derr,Setderr] = useState();
    
//     const pchangehandler = (event)=>{
//     let phone = event.target.value
//     let err =""
//     if(Number(phone)){
//     if(phone.length!==10){
//         err = <h5>Must be 10 digit</h5>;
//         // alert("Your number")
//     }}
//     else 
//     err = <h5> Should be valid number</h5>
//     Seterr(err);
// }
//     const dchangehandler = (event)=>{
//         let phone = event.target.value
//         let derr =""
//         if(Number(phone)){
//         if(phone.length!==10){
//             derr = <h5 >Must be 10 digit</h5>;
//         }}
//         else 
//         derr = <h5> Should be valid number</h5>
//         Setderr(derr);
    
        
//     }
    
    return(
        <div className="Main">

        <div className="Register">
            
            {/* <Navbar/> */}

            <div></div>
            <div className="heading">

            <h2> Signup/Login</h2>
            </div>
            <div className="b-container">

            <div className="Patient">
                <h3> Add Patient</h3>
                <form 
                // onSubmit  ={(event)=>{
                //     event.preventDefault();
                //     const name = pnameRef.current.value;
                //     const phone = phoneRef.current.value;
                //     const gender = genderRef.current.value;
                //     const dob = dobRef.current.value;
                //     const blood = bloodRef.current.value;
                //     props.patientRegister(name,phone,gender,dob,blood);}}
                    >
                <label>Name: </label>
                <input type="text" name ="name" placeholder="Enter the patient's name"
                ref={pnameRef}  required 
                >
                    </input>
                    <br/>
                    <label>PhoneNo: </label>
                    <input type ="text" placeholder="9746025484"
                    ref ={phoneRef} required/>


                    <br/>
                    <label>DateofBirth:</label>
                    <input type = "Date" placeholder="2021-05-01" 
                    ref ={dobRef}required/>
                    <br/>
                    <label>Blood Group: </label>
                    <input type ="text" placeholder="O+ve"
                    ref ={bloodRef} required
                    />
                    <br/>
                    <label id ="gender"> Gender:</label>
                    <select ref ={genderRef} placeholder="Select"
                    required >
                        {/* <option value="Select " >Select</option> */}
                        <option value ="Female">Female</option>
                        <option value ="Male">Male</option>
                        <option value = "Others"> Others</option>
                        </select>
                        <br/>

                    <Button  onClick ={(event)=>{
                    event.preventDefault();
                    const name = pnameRef.current.value;
                    const phone = phoneRef.current.value;
                    const gender = genderRef.current.value;
                    const dob = dobRef.current.value;
                    const blood = bloodRef.current.value;
                    props.patientRegister(name,phone,gender,dob,blood);
                }}> 
                Submit </Button>
                </form>
                <Button onClick ={()=>{
                    props.phandlelogin()
                }}
                >Login
                 </Button>
            </div>
            <br/>
            {/* Doctor login/signup
            */}
            <div className="Doctor">
                <h3> Add Doctor</h3>
                <form
                //  onSubmit={(event)=>{
                //     event.preventDefault();
                //     const name = dnameRef.current.value;
                //     const contact = dphoneRef.current.value;
                //     const faculty = facultyRef.current.value;
                //     const hname = hnameRef.current.value;
                //     props.doctorRegister(name, hname,faculty,contact);}}
                    >
                    <label>Name: </label>
                <input type="text"  name ="name" placeholder="Enter your name" required 
                ref={dnameRef}>

                    </input>
                    <br/>
                    <label>Hospital Name:</label>
                    <input type ="text" placeholder ="Name of the hospital"
                    ref ={hnameRef} required/>
                    <br/>
                    <label> ContactNo:</label>
                    <input type ="text" placeholder="9746025484"
                    ref ={dphoneRef} required/>
                   
                    {derr}
                    <br/>
                    <label>Faculty: </label>
                    <input type="text"  name ="faculty"placeholder="Enter your faculty" 
                    ref ={facultyRef} required/>
                    <br/>
                    <label> License Number: </label>
                    <input type="number" placeholder="License Number" 
                    ref ={licenseRef} required
                    />
                    <br/>
                    <Button onClick ={(event)=>{
                    event.preventDefault();
                    const name = dnameRef.current.value;
                    const contact = dphoneRef.current.value;
                    const faculty = facultyRef.current.value;
                    const hname = hnameRef.current.value;
                    const license = licenseRef.current.value;
                    props.doctorRegister(name, hname,faculty,contact,license); }}>Submit</Button>
                </form>
                <Button onClick ={()=>{
                    props.dhandlelogin()
                }}
                >Login
                 </Button>
                 {/* <Button onClick={props.verify}>Verify</Button> */}
            </div>
            <br/>
            <div className="doctorverify">
                <h3> Login as government agency</h3>
                <Button onClick ={()=>{
                    props.handleverifier()
                }}>Login</Button>
            </div>
            </div>
             <div>    
            </div>
        </div>
        </div>

    )

}
export default Register;