import React, { Component} from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import Naav from './component/Naav';
import Notfound from './component/Notfound';
import ProductDetails from './component/ProductDetails';
import Shop from './component/Shop';
import ShoppingCard from './component/ShoppingCard';
import shopC1 from'./images/shopC1.jpg';
import shopC2 from'./images/shopC2.jpg';
import shopC3 from'./images/shopC3.jpg';
import shopC4 from'./images/shopC4.jpg';
import shopC5 from'./images/shopC5.jpg';
import shopC6 from'./images/shopC6.jpg';
import shopC7 from'./images/shopC7.jpg';
import shopC8 from'./images/shopC8.jpg';

class App extends Component {
  state={
    Products: [
      { id: 0, name: "Hood", count: 0, src:shopC1 ,price:200,available:10, 
      detail:"Soft and smooth texture Easy to clean and maintain Colour will not fade Ensures optimal comfort"},
      { id: 1, name: "Shirt", count: 0, src:shopC2 ,price:100,available:14,  
      detail:"Soft and smooth texture Easy to clean and maintain Colour will not fade Ensures optimal comfort"},
      { id: 2, name: "Shirt", count: 0, src:shopC3 ,price:150,available:12,  
      detail:"Soft and smooth texture Easy to clean and maintain Colour will not fade Ensures optimal comfort"},
      { id: 3, name: "Shirt", count: 0, src:shopC4 ,price:260,available:13,  
      detail:"Soft and smooth texture Easy to clean and maintain Colour will not fade Ensures optimal comfort"},
      { id: 4, name: "Shirt", count: 0, src:shopC5 ,price:120,available:9, 
      detail:"Soft and smooth texture Easy to clean and maintain Colour will not fade Ensures optimal comfort"},
      { id: 5, name: "Shirt", count: 0, src:shopC6 ,price:300,available:10, 
      detail:"Soft and smooth texture Easy to clean and maintain Colour will not fade Ensures optimal comfort"},
      { id: 6, name: "Jeans", count: 0, src:shopC7 ,price:320,available:11, 
      detail:"Soft and smooth texture Easy to clean and maintain Colour will not fade Ensures optimal comfort"},
      { id: 7, name: "Jeans", count: 0, src:shopC8 ,price:350,available:20, 
      detail:"Soft and smooth texture Easy to clean and maintain Colour will not fade Ensures optimal comfort"},
      { id: 8, name: "Shirt", count: 0, src:shopC1 ,price:200,available:16, 
      detail:"Soft and smooth texture Easy to clean and maintain Colour will not fade Ensures optimal comfort"},
    ],
  }
  
  add=(obj)=>{
    let Products=this.state.Products
    Products=Products.map((m)=>{
      if(obj.id===m.id&&m.available>0){m.count++;m.available--}
      return m
    })
    this.setState({Products})
  }

  remove=(obj)=>{
    let Products=this.state.Products
    Products=Products.map((m)=>{
      if(obj.id===m.id && m.count>0){m.count--;m.available++}
      return m
    })
    this.setState({Products})
  }

  del=(obj)=>{
    let Products=this.state.Products
    Products=Products.filter((f)=>{
      if(obj.id===f.id){f.available=f.available+f.count; f.count=0;}
      return f
    })
    this.setState({Products})
  }

  render() {
    return (
      <div className='shopping-bg'>
        
    <Naav theproducts={this.state.Products}/>
<Routes>
  <Route path="/ShoppingCard" element={<ShoppingCard theproducts={this.state.Products} add={this.add} remove={this.remove} del={this.del}/>}/>
  <Route path="/" element={<Home/>}/>
  <Route path='/ProductDetails' element={<ProductDetails add={this.add}/>}/>
  <Route path="/Shop" element={<Shop data={this.state.Products} add={this.add}/>}/>
  <Route path="*" element={<Notfound/>}/>
</Routes>
      </div>
    )
  }
}


export default App;
