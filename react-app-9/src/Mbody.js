import React from 'react'


class Mbody extends React.Component {
   constructor() {
       super()
       this.state={
        value: 'petuh'
       }
       this.handleChange = this.handleChange.bind(this)
   }
   handleChange(event) {
       console.log('OPa');
       this.setState({value: event.target.value})
   }
   render() {
       
       
       return (
            <div>
               
               <input value={this.state.value} onChange={this.handleChange}></input>
            </div>
       )
   }
}
export default Mbody