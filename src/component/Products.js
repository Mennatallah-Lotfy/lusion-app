import React, { Component } from 'react'
import {Card,CardBody,CardSubtitle,Button,CardTitle, CardText} from 'reactstrap' 
import { BsFillCartXFill} from "react-icons/bs";
import { BsFillCartPlusFill} from "react-icons/bs";
import { BsFillCartDashFill} from "react-icons/bs";

 class Products extends Component {
  render() {
    let data=this.props.m;
    return (
      <Card
          className='my-2'
          style={{
            width:'18rem'
          }}
        >
          <img
            alt="Sample"
            src={data.src}
          />
          <CardBody>
            <CardSubtitle tag="h2">
             Name: {data.name}
            </CardSubtitle>
            <CardTitle  tag="h2" >
            price: {data.price} $ <p className='fs-4'>Number of items: <span className='fs-5'>{data.count}</span></p>
            </CardTitle>
            <CardText>Available:{data.available}</CardText>
            <CardText className='row justify-content-evenly mb-3'>
            <Button color='success' className='col-2 text-center p-1' onClick={()=>{this.props.add(data)}}>
              <BsFillCartPlusFill/>
            </Button>
            <Button color='warning' className='col-2 text-center p-1 text-light' onClick={()=>{this.props.remove(data)}}>
              <BsFillCartDashFill/>
            </Button>    
            <Button color='danger' className='col-2 text-center p-1' onClick={()=>{this.props.del(data)}}>
              <BsFillCartXFill/>
            </Button>
            </CardText>
          </CardBody>
        </Card>
    
    )
  }
}
export default Products;