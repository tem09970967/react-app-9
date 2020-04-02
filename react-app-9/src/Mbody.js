import React from 'react'

class Mbody extends React.Component {
   constructor() {
       super()
       this.state={
           names: ['Kol','Yan','Sob','Pussy']
       }
   }

   render() {
       const Names = this.state.names.map((name,index) => {
           return <li key={index}>{name}</li>
       });
    
       return (
           
               <ul>
                   {Names}
               </ul>
           
       )
   }
}
export default Mbody