import React from 'react'

const SideDash = () => {
  return (
    <div className='col-md-6'>
      <div className="info-box mb-3 bg-warning">
        <span className="info-box-icon"><i className="fas fa-tag"></i></span>

        <div className="info-box-content">
          <span className="info-box-text">Inventory</span>
          <span className="info-box-number">5,200</span>
        </div>
      </div>
      <div className="info-box mb-3 bg-success">
        <span className="info-box-icon"><i className="far fa-heart"></i></span>

        <div className="info-box-content">
          <span className="info-box-text">Mentions</span>
          <span className="info-box-number">92,050</span>
        </div>
      </div>
      <div className="info-box mb-3 bg-danger">
        <span className="info-box-icon"><i className="fas fa-cloud-download-alt"></i></span>

        <div className="info-box-content">
          <span className="info-box-text">Downloads</span>
          <span className="info-box-number">114,381</span>
        </div>
      </div>
      <div className="info-box mb-3 bg-info">
        <span className="info-box-icon"><i className="far fa-comment"></i></span>

        <div className="info-box-content">
          <span className="info-box-text">Direct Messages</span>
          <span className="info-box-number">163,921</span>
        </div>
      </div>
    </div>
  )
}

export default SideDash
