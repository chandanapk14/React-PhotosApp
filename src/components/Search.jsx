import React from 'react'
import Navbar from './Navbar'

const Search = () => {
  return (
    <div>
        <Navbar/><br></br>
        <h5 align="center"><u>Search Photo</u></h5>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row">
                        <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                            <center><label htmlFor="" className="form-label">Photo ID</label></center>
                            <input type="text" className="form-control" />
                        </div>
                        <center><div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"><br></br>
                            <button className="btn btn-primary">Search</button>
                        </div></center>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Search