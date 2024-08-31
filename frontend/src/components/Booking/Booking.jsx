import React,{useState ,useRef, useContext} from 'react'
import emailjs from '@emailjs/browser'
import "./booking.css"
import {Form,FormGroup,ListGroup,ListGroupItem,Button} from "reactstrap"
import { useNavigate } from 'react-router-dom'
import{AuthContext}from "../../context/AuthContext";
import { BASE_URL } from '../../utils/config';

const Booking = ({tour ,avgRating}) => {
    const {price , reviews,title} =tour;

    const navigate = useNavigate() 
    const {user} =useContext(AuthContext)
 
    const [booking, setBooking] = useState({ 
          userId:user && user._id,
          userEmail:user && user.email,
          tourName :title,
          fullName :" ",
          phone:'',
          guestSize:1,
          bookAt:''
    });

     
     const[error, setError]= useState()
    const handleChange = e => {
    //      if( booking.guestSize<1){
    //   console.log(booking.guestSize);
    //   alert('number of Guest should not be negative ');

    // }
    // if(booking.phone.length<10){
    //   alert("Incorrect phone number");
        
    // }
 
  
    if(booking.fullName ===""){
      error.name = "Name is required"
    }

        setBooking(prev=>({...prev,[e.target.id]:e.target.value}));

    };
    // const totalAmount='';
    const serviceFee =199
    // if(Number(booking.guestSize)<=0){
    // totalAmount= Number(serviceFee);
    // }
     const totalAmount = Number(price) * Number(booking.guestSize)+Number(serviceFee)
    // send data to the server

    const handleClick = async e=>{

    //    if(booking.phone.length<10){
    //   alert("Incorrect phone number");
        
    // }
        e.preventDefault();

        console.log(booking);
        console.log(user.email);
        console.log(booking.fullName);
        console.log(totalAmount);

        try {
            
          if(!user || user ===undefined || user ===null){
            return alert ('Please sign in')
          }   
          const res = await fetch (`${BASE_URL}/booking`,{
            method:'post',
            headers:{
                'content-type': 'application/json',
            },
            credentials:'include',
            body: JSON.stringify(booking)
          })
          const result = await res.json()
          // if(!res.ok){
          //   return alert(result.message) 
          // }
        
        
      //  navigate("/thank-you");

        } catch (err) {
            alert(err.message);
            
        }

    };
    //  const [ guestSize,newsize]= useState("")
    //   // let size = document.getElementById("guestSize")
    // if( booking.guestSize<1){
    //   console.log(booking.guestSize.value);
    //   // alert('number of Guest should not be negative ');

    // }
    const info=
"Thank you for using the TRAVEL BUDDY."+" "+"We'vesuccessfully processed your payment of Rs."+ totalAmount+ "/-";

    const form = useRef();
    const sendEmail=async(e)=>{
        // e.preventdefault();
        emailjs.sendForm('service_h2hu4jx','template_kgrdymr',form.current,'4EA2aVMQCBip0y61V')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        navigate("/thank-you");
    
    }
  

  return  <div className="booking">
    <div className="booking__top d-flex align-items-center justify-content-between">
        <h3>Rs.{price}<span>/per person</span></h3>
        <span className="tour__rating d-flex align-items-center gap-1">
                <i class="ri-star-fill"></i>
                {avgRating ===0 ? null :avgRating}({reviews?.length})
                
               
                </span>
    </div>

        {/* Booking Form */}
<div className="booking__form">
    <h5>Information</h5>
    <Form className="booking__info-form" onSubmit={handleClick}>
        <FormGroup>
            <input type="text" name='fullName' autoComplete="off" placeholder='Full Name' id='fullName' required onChange={handleChange} />
        </FormGroup>
        <FormGroup>
            <input type="number" autoComplete="off"  placeholder='Phone' id='phone' required onChange={handleChange}  />
            {/* <input type="number" maxLength="10" minLength= "10"  placeholder='Phone' id='phone' required onChange={handleChange} /> */}
        </FormGroup>
        <FormGroup className='d-flex align-items-center gap-3'>
            <input type="date" autoComplete="off"  min={new Date().toISOString().split('T')[0]} placeholder='' id='bookAt' required onChange={handleChange} />
            {/* <input type="date" autoComplete="off" placeholder='' id='bookAt' required onChange={handleChange} /> */}
            <input type="number" autoComplete="off" placeholder='Guest' id='guestSize' required onChange={handleChange} />
            {/* <input type="number" autoComplete="off" value ={booking.guestSize} placeholder='Guest' id='guestSize' required onChange={handleChange} /> */}
           
        </FormGroup>
    </Form>
</div>

              {/* Booking bottom */}

              <div className="booking__bottom">
                <ListGroup>
                    <ListGroupItem className='border-0 px-0'>
                    <h5 className='d-flex align-items-center gap-1'>Rs.{price} <i class="ri-close-fill"></i> 1 person</h5>
                         <span>Rs.{price}</span>
                    </ListGroupItem>
                    <ListGroupItem className='border-0 px-0'>
                    <h5>Service Charge</h5>
                         <span>Rs.{serviceFee}</span>
                    </ListGroupItem>
                    <ListGroupItem className='border-0 px-0 total'>
                    <h5>Total</h5>
                         <span>Rs.{totalAmount}</span>
                    </ListGroupItem>
                </ListGroup>
                <Button className="btn primary__btn w-100 mt-4" onClick={()=> {sendEmail(); handleClick()}} >Book Now</Button>
                {/* <Button className="btn primary__btn w-100 mt-4" onClick={handleClick} >Book Now</Button> */}

              </div>
              <div>
    <form className="myform" ref={form}>
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email"  name = 'email'  value={user.email}class="form-control" id="exampleInputEmail1"/>
    
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="text" name = 'to_name'   value={booking.fullName} class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="text" name = 'message'   value={info} class="form-control" id="exampleInputPassword1"/>
  </div>
  
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
    </div>

  </div>

}

export default Booking