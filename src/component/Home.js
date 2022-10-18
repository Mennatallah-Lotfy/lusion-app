import React, { Component } from 'react'
import AllItems from './AllItems';
import Caros from './Caros';
import s1 from'../images/s1.jpg';
import s2 from'../images/s2.jpg';
import s3 from'../images/s3.jpg';
import s4 from'../images/s4.jpg';

import t1 from'../images/t1.jpg';
import t2 from'../images/t2.jpg';
import t3 from'../images/t3.jpg';
import t4 from'../images/t4.jpg';

import { CardGroup } from 'reactstrap';
import BestSell from './BestSell';
import Sale from './Sale';
import Foot from './Foot';

 class Home extends Component {
  state={
    items:[
      {id:0 ,name:'Clothing' ,item:5 ,src:s1},
      {id:1 ,name:'Bag Brand' ,item:20 ,src:s2},
      {id:2 ,name:'Accessories' ,item:6 ,src:s3},
      {id:3 ,name:'Shoes' ,item:8 ,src:s4},
    ],
    bestsell:[
      {id:0 ,name:'Quilted Gilet With Hood' ,price:150 ,src:t1},
      {id:1 ,name:'Quilted Gilet With Hood' ,price:110 ,src:t2},
      {id:2 ,name:'Quilted Gilet With Hood' ,price:200 ,src:t3},
      {id:3 ,name:'Quilted Gilet With Hood' ,price:250 ,src:t4},
    ]
  }
  
  
  render() {
    return (
      <div className='shopping-bg'>
        <style>
          {`
          .side{
            writing-mode: vertical-rl;
            outline-style: groove;
            position: absolute;
            right:0px;
            margin:3px;
            margin-top: 80px;
          }
          `}
        </style>
        <Caros/>
        <div className='py-5 px-3'><CardGroup>{this.state.items.map((m)=>(<AllItems key={m.id} data={m}/>))}</CardGroup></div>
        <h1 className='ps-5 mb-5'>Best Sellings</h1>
        <h2 className='side'>All <br/>Products</h2> 
        <div className='container'><div className='row justify-content-evenly pb-5'>
          {this.state.bestsell.map((m)=>(<BestSell best={m} key={m.id}/>))}</div>
        </div>
        
        <div className='container pb-5'><Sale/></div>
        <div className='container '><div className='row justify-content-evenly '><Foot/></div></div>

      </div>
    )
  }
}
export default Home;