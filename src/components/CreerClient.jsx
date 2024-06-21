import React, { Component } from 'react'
import { AiOutlineClose } from "react-icons/ai";
import { DataContext } from '../context/DataContext';

export class CreerClient extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors:{}
    }
  }
  handleSubmit(e,clientsData,updateData) {
    e.preventDefault()
    const formData = new FormData(e.currentTarget);
    const formDataObject = Object.fromEntries(formData.entries());
    const combinedData = [...clientsData,formDataObject]
    updateData('clients',combinedData)
  }
  render() {
    return (
      <DataContext.Consumer>{({clientsData,updateData})=>(
      <div className="flex justify-center pt-20 backdrop-blur-sm bg-opacity-10 bg-slate-900 w-full h-screen z-1 absolute top-0 left-0">
      <form onSubmit={(e)=>this.handleSubmit(e,clientsData,updateData)} action="" className="flex flex-col w-2/6 h-3/5 justify-between bg-slate-50 p-3">
        
        <button className="self-end" onClick={this.props.handleToggle}><AiOutlineClose/></button>
        <legend className="self-center">Creer Client</legend>
        <label htmlFor="name">Name</label>
        <input className="ml-11" type="text" name="name" id="name" />
        <label htmlFor="email">Email</label>
        <input className="ml-11" type="text" name="email" id="email" />
        <label htmlFor="phone">Phone</label>
        <input className="ml-11" type="text" name="phone" id="phone" />
        <label htmlFor="address">Address</label>
        <input className="ml-11" type="text" name="address" id="address" />
        
        <button className="self-end p-1 border-2 border-blue-600 mt-3" type="submit">Terminer</button>
      </form>
      </div>
      )
        }

      </DataContext.Consumer>
    )
  }
}

export default CreerClient