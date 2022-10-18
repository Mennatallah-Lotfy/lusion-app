import React, { Component } from 'react'
import Products from './Products';
import {BsFillExclamationOctagonFill} from "react-icons/bs";
import { Link } from 'react-router-dom';

class ShoppingCard extends Component {
  render() {
 let  data=this.props.theproducts.filter((f)=>f.count>0)
 let sum=0;
 data.map((m)=>{sum=sum+m.count*m.price });
 if(data.length===0){
return(
    <div className='shopping-bg'>
    <h1 className='text-center text-danger pb-5 pt-5'><span>
        <BsFillExclamationOctagonFill/> your Card Is Empty</span></h1>
    <h2 className='text-center'><span className=' bg-success bg-opacity-25 p-2 rounded border border-success border-2'>
      Total Price: {sum}</span></h2>
      <h3 className='text-center py-5'><span >
        <Link to='/Shop' className='Link fw-bold'>Continue Shopping</Link></span></h3>
  </div>
 )
 }else{
    return (
      <div className='shopping-bg'>
        <div className='container'>
       <div className='row justify-content-evenly pt-2'>
        {data.map((m)=>(
            <Products key={m.id} m={m} add={this.props.add} remove={this.props.remove} del={this.props.del}/>
        ))}
        </div> 
        </div>
            <h2 className='text-center pt-4'><span className=' bg-success bg-opacity-25 p-2 rounded border border-success border-2'>
                Total Price: {sum}</span></h2>
            <h3 className='text-center py-5'><span >
                <Link to='/Shop' className='Link fw-bold'>Continue Shopping</Link></span></h3>    
      </div>
    )
  }
}
}

export default ShoppingCard;