import React from 'react'
import {Card,CardBody,CardSubtitle,Button,CardTitle, CardText} from 'reactstrap' 
import {BsFillBasket2Fill} from "react-icons/bs";
import { useNavigate } from 'react-router-dom';

 function MyCard (props) {
        const navigate=useNavigate();
        let data=props.m
        return (
          <Card
          className='my-2'
          style={{
            width: '21rem'
          }}
        >
          <img
            alt="Sample"
            src={data.src}
          />
          <CardBody>
            <CardSubtitle>
              {data.name}
            </CardSubtitle>
            <CardTitle  tag="h6"className='fs-3 fw-bold'>
            $ {data.price}
            </CardTitle>
            <CardText>Available: {data.available}</CardText>
            <CardText >
              <Button color='warning' className='me-5' onClick={()=>{navigate('/ProductDetails',{state:{data:data}})}}>show details</Button>
            <Button className='bg-transparent text-dark p-1 ms-5' onClick={()=>{props.add(data)}}>
              <BsFillBasket2Fill className='fs-3'/>
            </Button>
            </CardText>
          </CardBody>
        </Card>
        
        )
      }


export default MyCard;