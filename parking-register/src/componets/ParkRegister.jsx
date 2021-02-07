import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import '@fortawesome/fontawesome-free/css/all.min.css';
import'bootstrap-css-only/css/bootstrap.min.css';
import'mdbreact/dist/css/mdb.css';
import axios from 'axios'

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBModalFooter,
  MDBIcon,
  MDBCardHeader,
  MDBBtn,
  MDBInput
} from "mdbreact";


export default class ParkRegister extends Component {


  constructor(props) {
    super(props);

    this.onchangename =this.onchangename.bind(this);
    this.onchangeemail =this.onchangeemail.bind(this)
    this.onchangenic =this.onchangenic.bind(this)
    this.onchangemobile =this.onchangemobile.bind(this)
    this.onSubmit = this.onSubmit.bind(this);


    this.state = {

       name: '',
       email:'',
       nic:'',
       mobile:'',

      }

      

      
  }


  onchangename(e){

    this.setState({name: e.target.value})

  }
  onchangeemail(e){

    this.setState({email: e.target.value})

  }
  onchangenic(e){

    this.setState({nic: e.target.value})

  }
  onchangemobile(e){

    this.setState({mobile: e.target.value})
  }

  onSubmit(e){

      e.preventDefault();

      const User = {

        name:this.state.name,
        email:this.state.emai,
        nic:this.state.nic,
        mobile:this.state.mobile,
      }


      axios.post('http://localhost:4000/User/add',User).then(res =>{

       console.log('added')
      }).catch(err=>{
        console.log('not aded')
        console.log(err)
      })

        this.setState({name:'',email:'',nic:'',mobile:''})

  }
      

    render() {
        return (
            <div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
               
    <MDBContainer>
        <center>
      <MDBRow>
        <MDBCol md="10">
          <MDBCard>
            <MDBCardBody>
              <MDBCardHeader className="form-header deep-blue-gradient rounded">
                <h3 className="my-3">
                  <MDBIcon icon="lock" /> Register:
                </h3>
              </MDBCardHeader>
              <form onSubmit={this.onSubmit}>
                <div className="grey-text">
                  <MDBInput
                    label="Type your name"
                    group
                    value={this.state.name}
                    onChange={this.onchangename}
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                  />

                    <MDBInput
                    label="Type your email"
                    value={this.state.email}
                    onChange={this.onchangeemail}
                    group
                    type="email"
                    validate
                    error="wrong"
                    success="right"
                  />


                <MDBInput
                    label="Type your NIC"
                    value={this.state.nic}
                    onChange={this.onchangenic}
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                  />


                <MDBInput
                    label="mobile NO"
                    value={this.state.mobile}
                    onChange={this.onchangemobile}
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                  />        
               
                </div>

              <div className="text-center mt-4">
                <MDBBtn
                  color="light-blue"
                  className="mb-3"
                  type="submit"
                >
                  Register
                </MDBBtn>
              </div>
              </form>
              <MDBModalFooter>
                <div className="font-weight-light">
               
                </div>
              </MDBModalFooter>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
      </center>
    </MDBContainer>
  
            </div>
          
        )
    }
}

