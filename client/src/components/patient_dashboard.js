import React, { useRef, useState } from  "react";
import {Tabs, Tab, Row, Nav, Navbar,Card,Button} from "react-bootstrap";
import {withStyles,makeStyles} from '@material-ui/core/styles';
import {Table, TableBody,TableCell,TableContainer,TableHead,TableRow}from "@material-ui/core";
import Paper from '@material-ui/core/Paper';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../logo.png'

function Patient(props){
   const dnameRef = useRef();
   const reasonRef = useRef();
   const dateRef = useRef();
   const addressRef = useRef();
    console.log(props.records);
    console.log(props.patient);
    const doctorRef = useRef();
    const grantRef = useRef();
  const useStyles = makeStyles({
    table:{
      minWidth:700,
    },
    root:{
      width:"100%"

    },
    container:{
      maxHeight:440,
    }
  });
  const classes = useStyles();
    const StyledTablecell = withStyles((theme)=>({
      head:{
          backgroundColor:theme.palette.info.main,
          color : theme.palette.common.blue,
      },
      body:{
          fontSIze:14,
      },
   })) (TableCell);

   const StyledTableRow = withStyles((theme)=>({
       root:{
           "&:nth-of-type(odd)":{
               backgroundColor: theme.palette.action.hover,
               color: theme.palette.common.pink,
           },
       },
   }))(TableRow)


    
    const Details = ()=>{
        return(
          <div className="Details">
            <h2>
                  Your Details

                  </h2>

            <Card > 
                    <Card.Body>
                   <b> Name:</b>
                  <br/>
                   <b>Phone: </b>
                  <br/>
                  <b>Gender:</b> 
                  <br/>
                <b> Date of Birth:</b> 
                <br/> 
               <b> Blood Group: </b> 
             </Card.Body>
            </Card>
            </div>

        )
    }

    const Upload =()=>{
        return(
            <div className="ReportUpload">
              <h2> Report Upload</h2>
              <Card className="card">

              <div className="upload">
                <label> Upload your report to IPFS</label>
    <form >
      <label> 
        </label>
        <input type= "file"  
       
        />
        <br/>
         <Button >Submit</Button>
         </form>
         </div>

         {/* Upload file to blockchain */}
         <form>
         <label> Upload your record to blockchain  </label><br/>
          Name:<input 
         type ="text"placeholder="Name of the doctor" 
         ref={dnameRef}/><br/>

         Reason: <input 
         type="text" placeholder="Reason to visit hospital"
         ref ={reasonRef}
         />
          <br/>
         VisitedDate: <input type="date" 
         ref ={dateRef}/>
             <br/>
         Your address:<input 
         type ="text"
         placeholder="Your address"
         ref ={addressRef}/>
         <br/>
         {/* <input type ="submit"/> */}
         <Button>Submit</Button>
         </form>
         </Card>
         </div>
        )
    }

  const Report =()=>{
    // props.getPatientRecord();
    // if(props.records.length  === 0){
    //   return(
    //     <div> 
    //       <h2>
    //       Your Report
    //     </h2>
    //     <p> Your record will appear here.</p>
    //      <p> loading........</p>
    //     </div>
    //   )
    // }
    
    return(
      <div className="Report">
        <h2>
          Your Report
        </h2>
        <Paper className={classes.root}>
        <TableContainer  className={classes.container}>
                <Table className = {classes.table} size ="small" stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                          <StyledTablecell> #</StyledTablecell>
                            <StyledTablecell>
                                Doctor name
                            </StyledTablecell>
                            <StyledTablecell>Reason to visit doctor </StyledTablecell>
                            <StyledTablecell>VisitedDate</StyledTablecell>
                            <StyledTablecell>Records</StyledTablecell>
                        </TableRow>
                    </TableHead>
                    {/* {props.records.map((record,key)=>(  */}

                    <TableBody>

                        <StyledTableRow >
                          <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell> </TableCell>
                        <TableCell><a href={`https://ipfs.io/ipfs/`} target="_blank"> click here to view your record</a></TableCell>
                        </StyledTableRow>
                    </TableBody>
                    {/* ))} */}
                </Table>
            </TableContainer>
            </Paper>
      </div>
    )
  }
  const Access=()=>{
return(
  <div>
    <h2>Grant/Revoke Access</h2>
    <Card>

            <form >
                <label>Provide Access: </label>
                <input type="text" placeholder=" Address to grant access"
                ref ={grantRef}/> 
                <Button> Submit</Button>
                </form>

                <br/>
                <form 
                // onSubmit ={(event)=>{
                //     event.preventDefault();
                //     const doctor = doctorRef.current.value;
                //     props.revokeAccess(doctor);
                // }}
                >
                    <label> Revoke Access: </label>
                    <input type="text" placeholder=" Address to revoke access from"
                    ref={doctorRef}/>
                <Button > Submit</Button>
                </form>
                </Card>

  </div>
)
  }
    return(
        
        <div className="patient_main">

            <Navbar
            // bg="light" 
            color="purple"
            expand="lg" 
            >
              <img src={logo}
              width="250"
              height="60"
              className="d-inline-block align-top"
              />
            {/* patient */}
            <Navbar.Toggle/>
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text > <b>Welcome </b> </Navbar.Text>
              <Nav.Link href ="/" width="250"> <b>Logout</b></Nav.Link>
              </Navbar.Collapse>
              </Navbar>

            <div className ="tab-wrapper">
            <Tab.Container  defaultActiveKey="details">
                    <div className ="row">
                        <div className="col-sm-3">
                          <Nav  className="flex-column">
                            <Nav.Item>
                            <Nav.Link eventKey="details">Details</Nav.Link><hr/>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="profile">AccessRecord</Nav.Link> <hr/></Nav.Item>                           
                            <Nav.Item><Nav.Link eventKey="uploadRecord">UploadRecord</Nav.Link><hr/></Nav.Item>
                            <Nav.Item><Nav.Link eventKey="access">Grant/Revoke Acccess</Nav.Link><hr/>
                            </Nav.Item>

                            </Nav> 
                          </div>

                          <div className = "col-sm-9">
                          <h1> Welcome to Medossier</h1>

                            <Tab.Content>
                {/* <Tabs defaultActiveKey="details" id ="uncontrolled-tab-example"> */}
                <Tab.Pane eventKey="details" title ="Details" >
                <Details/>
                </Tab.Pane>
                <Tab.Pane eventKey="profile" title ="AcessRecord" >
                  <Report/>
                </Tab.Pane>

                <Tab.Pane eventKey ="uploadRecord"  title="UploadRecord">
              <Upload/>
             </Tab.Pane>
             <Tab.Pane eventKey="access" title="Grant/Revoke Acccess">
               <Access/>
             </Tab.Pane>
             {/* </Tabs> */}
             </Tab.Content>
            </div> 
 </div>
</Tab.Container>
  </div>
 
</div>
)}
export default Patient;