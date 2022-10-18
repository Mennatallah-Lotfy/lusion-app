import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import MyCard from './MyCard';
import Shop1 from '../images/Shop1.jpg'
import{Card,CardImg,CardImgOverlay}from'reactstrap'

class Shop extends Component {
  render() {
    let data=this.props.data
    return (
      <div className='shopping-bg'>
        <div>
  <Card>
    <CardImg 
      alt="Card image cap"
      src={Shop1}
      style={{
        height:'auto'
      }}
      width="100%"
    />
    <CardImgOverlay className='row text-center align-items-center fw-bolder fs-5'>
      <div className='col-12'><h2>Shop</h2>
          <Link to='/' className='Link'>Home</Link> / <a className='Link' href='#shop'>Shop</a>
      </div>    
    </CardImgOverlay>
  </Card>
</div>
      
        <div className='container'><div className='row justify-content-evenly pt-2' id='shop'>{data.map((m)=>(<MyCard key={m.id} m={m} add={this.props.add}/>))}</div></div>
        <h3 className='text-center py-5'><span className=' bg-success bg-opacity-50 p-2 rounded border border-success border-2'>
                <Link to='/' className='Link'>Go Back Home</Link></span></h3>
      </div>
    )
  }
}


export default Shop;