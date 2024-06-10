import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Details = () => {
    const location = useLocation()
    const { name, email, phone, address } = location.state || {}
    return (
        <div>
            <Link className='link' to="/">Home</Link><br />
            <Link className='link' to="/create">Add New Entry</Link>
            <div className='details_div'>
                <h2><i><u>Details of {name}</u></i></h2>
                <div className='details'>
                    <p><strong>Name : </strong>{name}</p>
                    <p><strong>Email : </strong>{email}</p>
                    <p><strong>Phone : </strong>{phone}</p>
                    <p><strong>Address : </strong>{address}</p>
                </div>
            </div>
        </div>
    )
}

export default Details
