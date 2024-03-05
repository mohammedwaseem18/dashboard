
import React from 'react'
import './AddEmployee.css'

function AddEmployee() {
  return (
  
      <div className="contact-form">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
         
          placeholder="Enter your name"
         
         
        />
        <label htmlFor="email">Email:</label>
        <input
          type="text"
         
          placeholder="Enter your email"
         
      
        />
          <label htmlFor="email">Password:</label>
        <input
          type="text"
         
          placeholder="Enter your password"
         
      
        />
          <label htmlFor="email">Position:</label>
        <input
          type="text"
         
          placeholder="Position"
         
      
        />
         <label htmlFor="image">Image:</label>
      <input
        type="file"
        id="image"
        accept="image/*"
      />
        
    
        <button>Submit</button>
      </div>
   
  )
}

export default AddEmployee
