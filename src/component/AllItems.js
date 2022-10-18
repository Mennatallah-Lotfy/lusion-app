import React, { Component } from 'react'
import {Card,CardBody,CardImg,CardText,CardTitle}from'reactstrap'

 class AllItems extends Component {
  render() {
    let data=this.props.data;
    return (
       <Card className="bg-transparent border border-0">
    <CardImg
      alt="Card image cap"
      src={data.src}
      top
      width="100%"
    />
    <CardBody>
      <CardTitle tag="h5">
        {data.name}
      </CardTitle>
      <CardText>
      Items {data.item}
      </CardText>
    </CardBody>
  </Card>
      
    )
  }
}

export default AllItems;