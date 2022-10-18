import React, { Component } from 'react';
import { FaExclamationTriangle } from "react-icons/fa";
class Notfound extends Component {
  render() {
    return (
      <div className='shopping-bg'>
      <h1 className='text-center text-danger pt-5'><FaExclamationTriangle className='mb-3'/> Bage Not Found !!</h1>  
      </div>
    )
  }
}

export default Notfound;