import React from 'react'

const FlashSales = () => {
  return (
    <div className="flash-sales-container">
      <div className="sales-header">
        <div className="small-heading">Today's</div>
        <h1 className="main-title">Flash Sales</h1>
      </div>
      
      <div className="timer-container">
        <div className="timer-section">
          <div className="timer-label">Days</div>
          <div className="timer-value">03</div>
        </div>
        
        <div className="timer-separator">:</div>
        
        <div className="timer-section">
          <div className="timer-label">Hours</div>
          <div className="timer-value">23</div>
        </div>
        
        <div className="timer-separator">:</div>
        
        <div className="timer-section">
          <div className="timer-label">Minutes</div>
          <div className="timer-value">19</div>
        </div>
        
        <div className="timer-separator">:</div>
        
        <div className="timer-section">
          <div className="timer-label">Seconds</div>
          <div className="timer-value">56</div>
        </div>
      </div>

      <div className="arrows">
        <button className="arrow-btn left-arrow">
            <span className="arrow-icon">&larr;</span>
        </button>
        <button className="arrow-btn right-arrow">
            <span className="arrow-icon">&rarr;</span>
        </button>
        </div>
    </div>
  )
}

export default FlashSales