import { useState } from "react"
import { useLocation } from "react-router-dom"
import {Card,CardBody,CardSubtitle,Button,CardTitle, CardText} from 'reactstrap' 
import {BsFillBasket2Fill} from "react-icons/bs";
import { useNavigate } from 'react-router-dom';

const ProductDetails = (props) => {
    const location=useLocation();
    const[details,setdetails]=useState(location.state.data)
    const navigate=useNavigate();
  return (
    <div className="row justify-content-center">
         <Card 
          className='my-2 mt-5 col-12'
          style={{
            width: '50%'
          }}
        >
            <div className="row align-items-center">
          <img className="col-lg-7 col-md-12"
            alt="Sample"
            src={details.src}
          />
          <CardBody className="col-lg-5 col-md-6">
            <CardSubtitle tag='h1'>
              {details.name}
            </CardSubtitle>
            <CardTitle className='fs-4 fw-bold'>
            Price: {details.price} $
            </CardTitle>
            <CardText>Available: {details.available}<br/>items add to the card: {details.count}</CardText>
            <CardText><span className="fs-5 fw-bold">Product Details:</span><br/> {details.detail}</CardText>
            <CardText >
              <Button color='success' className='me-5 my-2' onClick={()=>{navigate('/shop')}}>continue shopping</Button>
            <Button className='bg-transparent text-dark p-1 ms-4' onClick={()=>{props.add(details)}}>
              <BsFillBasket2Fill className='fs-3'/>
            </Button>
            </CardText>
          </CardBody>
          </div>
        </Card>
    </div>
  )
}

export default ProductDetails;