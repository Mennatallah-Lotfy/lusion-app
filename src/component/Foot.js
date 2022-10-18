import React, { Component, Fragment } from 'react'
import fifth1 from '../images/fifth1.jpg'
import fifth2 from '../images/fifth2.jpg'
import fifth3 from '../images/fifth3.jpg'
import fifth4 from '../images/fifth4.jpg'
import fifth5 from '../images/fifth5.jpg'
import fifth6 from '../images/fifth6.jpg'

import{Card,CardGroup,CardImg}from'reactstrap';

class Foot extends Component {
  render() {
    return (
      <Fragment>
      <div className='col-12 row align-items-center justify-content-between text-center'>
      <CardGroup className='col-lg-6 col-md-10'>
  <Card>
    <CardImg
      alt="Card image cap"
      src={fifth1}
      top
      width="100%"
    />
  </Card>
  <Card>
    <CardImg
      alt="Card image cap"
      src={fifth2}
      top
      width="100%"
    />
  </Card>
</CardGroup>
<div className='col-lg-5 col-md-10 my-3'><h2>Vintage Style</h2></div></div>
<div className='col-12 row align-items-center justify-content-between'>
<CardGroup className='col-lg-6 col-md-10'>
  <Card>
    <CardImg
      alt="Card image cap"
      src={fifth3}
      top
      width="100%"
    />
  </Card>
  <Card>
    <CardImg
      alt="Card image cap"
      src={fifth4}
      top
      width="100%"
    />
  </Card>
</CardGroup>
<div className='col-lg-5 col-md-10 my-3'><h6>Lorem Ipspris simply dummy text of the
printing and typesetting industry Lorem
Ipsum has been the industry's standard
dummy text ever since the 1500s, when an
unknown printer</h6></div></div>
<div className='col-12 row align-items-center justify-content-between text-center'>
<CardGroup className='col-lg-6 col-md-10'>
  <Card>
    <CardImg
      alt="Card image cap"
      src={fifth5}
      top
      width="100%"
    />
  </Card>
  <Card>
    <CardImg
      alt="Card image cap"
      src={fifth6}
      top
      width="100%"
    />
  </Card>
</CardGroup>
<div className='col-lg-5 col-md-10 my-3'><h2>#Losiontheme</h2></div>

      </div>
     
      </Fragment>
    )
  }
}

export default Foot;