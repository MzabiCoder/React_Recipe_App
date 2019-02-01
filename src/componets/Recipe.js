import React, { Component } from 'react'

export default class Recipe extends Component {
  render() {
    const {image_url,title,publisher,source_url}=this.props.recipe
    return (
      <React.Fragment>
       <div className="col-12 col-lg-4 col-md-6 col-xs-12 mx-auto m-3">  
        <div className="card">
        <img src={image_url} style={{height:'14rem'}}alt="" className="card-img-top"/>
        <div className="card-body text-capitalize">
        <h6>{title}</h6>
        <h6 className="text-warning text-slanted">Provided by :{publisher}</h6>
       </div>
        <div class="card-footer text-muted d-flex dispaly-content-between">
     <button className="btn btn-primary text-capitalize">Details</button>
     <a href={source_url} className="btn btn-success mx-2 text-capitalize" target="_blank">Recipe URL</a>

      </div>
        </div>
       
  

       </div>
       </React.Fragment>
    )
  }
}
