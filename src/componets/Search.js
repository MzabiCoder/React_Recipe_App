import React, { Component } from 'react'

export default class Search extends Component {
  render() {
    const {handlechange,hundleSubmit,value}=this.props
    return (
      <React.Fragment>
       
       <div className="container pt-5 mx-auto">
       <div className="row">
       <div className="col-10 mx-auto col-md-8 text-center">
       <h1 className="text-slanted text-capitalize">
       search fro recipe with <strong> <div className="text-danger">
       food2Fork
       </div></strong>
       </h1>

       <form className="mt-4"  onSubmit={hundleSubmit}  className="text-capitalize">
       <label>type recipes...</label>
       <div className="input-group">
       <input onChange={handlechange} 
       className="form-control" value={value}
        type="text" name="search" 
       placeholder="chiken,onions,carrots..."/>
       <div className="input-group-append">
       <button  type="submit" className="input-group-text bg-primary text-white">
       <i className="fas fa-search"></i>
       </button>
       </div>
       </div>
       </form>
       
       </div>
       </div> 
       </div>
      </React.Fragment>
    )
  }
}
