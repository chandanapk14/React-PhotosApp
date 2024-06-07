import React from 'react'
import Navbar from './Navbar'

const AddPhoto = () => {
  return (
    <div>
        <Navbar/><br></br>
        <h3 align="center"><u>Add Photo</u></h3><br></br>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row">
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Album ID</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Photo ID</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Title</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Upload Image</label>
                        <input type="file" name="" id="" className="form-control" />
                        
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Folder</label>
                        <select name="" id="" className="form-control">
                            <option value="-Select-">-Select-</option>
                            <option value="Favourite">Favourite</option>
                            <option value="Latest">Latest</option>
                            <option value="Old">Old</option>
                        </select>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Date Of Upload</label>
                        <input type="date" name="" id="" className="form-control" />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6"><br></br>
                        <button className="btn btn-success">Submit</button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddPhoto