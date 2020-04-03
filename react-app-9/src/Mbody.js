import React from 'react'


class Mbody extends React.Component {
   constructor() {
       super()
       this.state={
           items:[1,2,3,4,5],
           value:''
       }
       this.handleChange = this.handleChange.bind(this)
       this.addItem = this.addItem.bind(this)

   }
   addItem(event) {
       this.state.items.push(this.state.value)
       this.setState({items: this.state.items})
       event.preventDefault()
   }
   handleChange(event) {
       this.setState({value: event.target.value})
   }
   render() {
       const list = this.state.items.map((item,index) =>{
         return <li key={index}>{item}</li>
       })
       
       return (
           <div>
               <ul>
                   {list}
               </ul>
              <form onSubmit={this.addItem}>
                 <input value={this.state.value} onChange={this.handleChange} />
                 <input type="submit" />
              </form>
           </div>
       )
   }

}
export default Mbody