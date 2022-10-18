import React from 'react'
import{Card,CardBody,CardSubtitle,CardText,Button}from'reactstrap'
import {useNavigate} from 'react-router-dom'

function BestSell(props){
let best=props.best;
const navigate= useNavigate();
    return (
        <Card className='my-2'
        style={{
          width: '16rem'
        }}
      >
        <img
          alt="Sample"
          src={best.src}
        />
        <CardBody>
          <CardSubtitle
            className="mb-2 text-muted"
            tag="h6"
          >
            {best.name}
          </CardSubtitle>
          <CardText>
            {best.price} $ <Button className='ms-5' color='success' outline onClick={()=>navigate('/shop')}>shop now</Button>
          </CardText>
        </CardBody>
      </Card>
    )
  }


export default BestSell;