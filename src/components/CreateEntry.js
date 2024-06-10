import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { addNewEntry } from '../actions/actions';

const CreateEntry = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();

    const [formData, setformData] = useState({
        name: "",
        email: "",
        phone: "",
        address: ""
    })          //State for the fields in the form for managing data onChange

    const [dataOnSubmit, setDataOnSubmit] = useState()

    const onChangeInput = (e) => {
        setformData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addNewEntry(formData))
        setformData({
            name: "",
            email: "",
            phone: "",
            address: ""
        })          //For reseting the values in form 
        navigate("/")
    }
    return (
        <div>
            <Link className='link' to="/">Home</Link>
            <form onSubmit={handleSubmit}>
                <label>Name : </label>
                <input type='text' value={formData?.name} name='name' onChange={onChangeInput}></input><br />
                <label>Email : </label>
                <input type='text' value={formData?.email} name='email' onChange={onChangeInput}></input><br />
                <label>Phone : </label>
                <input type='number' value={formData?.phone} name='phone' onChange={onChangeInput}></input><br />
                <label>Address : </label>
                <input type='text' value={formData?.address} name='address' onChange={onChangeInput}></input><br />
                <button className='submit_btn' type='submit'>Add Entry</button>
            </form>
        </div>
    )
}

export default CreateEntry
