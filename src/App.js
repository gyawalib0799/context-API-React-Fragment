import React, { Component } from 'react'

//first we will make new context

const MyContext = React.createContext();

// then create a provider compoennt
class MyProvider extends Component {
  state ={
    name: 'Bijay',
    age : 26,
    cool: true
  }
  render(){
    return(
      //value field is how yoy passs data down to consumer component
      <MyContext.Provider value={{
        state: this.state,
        //what if you want to update state
        growAYearOlder: ()=>this.setState({
          age: this.state.age +1
        })
      }}>
        {this.props.children}
      </MyContext.Provider>
    )
  }
}


const Family = (props) =>(
  <div className='family'>
    <Person />
  </div>
)

class Person extends Component {
  render(){
    return (
      <div>
        <MyContext.Consumer>
          {(Context)=>(
            // if React.Fragment is not used only name or age can be rendered basically it is used to return multiple elements without adding extra nodes
            <React.Fragment>
            <p>I Am here {Context.state.name}</p>
            <p>I Am here {Context.state.age}</p>
            <button onClick={Context.growAYearOlder}>Click To Increase Age</button>
            </React.Fragment>
            
          )}
        </MyContext.Consumer>
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <MyProvider>
        <div>
          <p>Hello</p>
          <Family />
        </div>
      </MyProvider>
      
    )
  }
}


// THIS IS EXAMPLE OF PROPS DRILLING WHERE WE ARE PASSING PROPS ON DIFFERENT LEVEL

// const Family = (props) =>(
//   <div className='family'>
//     <Person name={props.name}/>
//   </div>
// )

// class Person extends Component {
//   render(){
//     return (
//       <div>
//         <p>Hey I'm {this.props.name}</p>
//       </div>
//     )
//   }
// }

// class App extends Component {
//   state={
//     name: 'Dari Bhai',
//     age: 22,
//     cool: false
//   }
//   render() {
//     return (
//       <div>
//         <p>Hello</p>
//         <Family name={this.state.name}/>
//       </div>
//     )
//   }
// }

export default App;
