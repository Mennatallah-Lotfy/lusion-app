import React, { Component } from 'react'
import f1 from '../images/f1.png'
import {Button} from 'reactstrap'

class Sale extends Component {
  render() {
    return (
<div className='row justify-content-evenly'>
<style>
            {`
            .lg{
                font-size:70px;
            }
            .md{
                font-size:70px;
                font-weight:lighter;
            }
            .bg{
                background-image:url(${f1});
                background-repeat: no-repeat;
                height:53vh;
            }
            `}
        </style>
       <div className='col-lg-6 col-md-8 col-sm-10 bg bg-secondary row align-items-center justify-content-center text-center mb-2 '>
        <p className='md col-12'> MERRY</p>
        <h3 className='lg col-12 text-danger'>Chrismas<span className='text-dark'> 40%</span> off</h3>
        <Button outline color='dark' className='col-3 mb-3'>shop now</Button>
       </div>
       <div className='col-lg-2 col-md-3 col-sm-6 bg-secondary text-center'>
       <p className='md'>Your Next</p>
        <h2>Purchase 10% off</h2>
        <Button outline color='dark'>shop now</Button>
       </div>
      </div>
    )
  }
}

export default Sale;