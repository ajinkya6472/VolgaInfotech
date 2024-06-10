import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { deletEntry, filterTable } from '../actions/actions';

const Table = () => {
    const tableData = useSelector((state) => state.tableData)  //tableData
    const search = useSelector((state) => state.filter) //Search data

    const dispatch = useDispatch() //to dispatch action and perform operation
    const navigate = useNavigate() //To navigate to the given url

    const handleDelete = (index) => {       //Delete button operation
        dispatch(deletEntry(index));
    };

    const clickCreate = (data) => {             //to navigate on create button click
        navigate("/create")
    }

    const filteredTable = tableData.filter((entry) =>
        entry.email.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div style={{ margin: "30px" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <input className='search_input' value={search} onChange={(e) => dispatch(filterTable(e.target.value))} type='text' placeholder='Search by Email address' />
                <button className='create_btn' onClick={clickCreate}>CREATE</button>
            </div>
            <div>
                <table >
                    <thead >
                        <tr >
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody >
                        {filteredTable?.map((item, index) => (
                            <tr key={index}>
                                <td>{item?.name}</td>
                                <td>{item?.email}</td>
                                <td>{item?.phone}</td>
                                <td><button className='del_btn' onClick={() => handleDelete(index)}>DELETE</button></td>
                                <td><Link className='link' to={"/details/" + index} state={item}>Details</Link></td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
        </div>
    )
}

export default Table
