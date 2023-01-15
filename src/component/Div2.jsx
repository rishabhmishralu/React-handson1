import React from 'react'
import { Component } from 'react';
import  './Function.css'


class Div2 extends Component {
  render() {
    return (
      <div>
    <div className='div2'>
      <div>
               <h4>This is created using Class Component</h4>
              <p>this is done using external CSS</p>
              <p style={{color:"gold"}}>this is done using inline CSS</p>
         </div>
         </div>
         </div>
    )
  }
}

export default Div2;






// const Div2 = () => {
//   return (
//     <div>
//         <div className='div2'>
//                 <h4>This is created using functional Component</h4>
//                 <p>this is done using external CSS</p>
//                 <p>this is done using inline CSS</p>
//             </div>
//     </div>
//   )
// }

// export default Div2