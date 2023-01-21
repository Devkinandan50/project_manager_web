import React, { useContext, useEffect, useState } from 'react'
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import ReactTimeAgo from 'react-time-ago';
import { BsGithub } from "react-icons/bs";

const MissingDueDate = (props) => {
    const { data } = props;

    return (
        <>
            <div style={{ height: '23rem', width: '100%', overflow: 'scroll' }}>

                <MDBTable align='middle'>
                    <MDBTableHead style={{ border:'1px solid black'}}>
                        <tr className='table-active'>
                            <th scope='col'>Project Name</th>
                            <th scope='col'>Progress</th>
                            <th scope='col'>Expires</th>
                            <th scope='col'>Github</th>
                        </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                        {data.length === 0 && 'No Tasks to display'}
                        {data.map((item) => {
                            return <tr className={item.datemiss}>
                                <td>
                                    <div className='d-flex align-items-center'>
                                        <div className='ms-3'>
                                            <p className='fw-bold mb-1'>
                                                {item.projectname}

                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <p className='fw-normal mb-1'>
                                        {item.progress}
                                    </p>
                                </td>
                                <td>
                                    <div className='d-flex align-items-center'>
                                    
                                        <MDBBadge color={item.datemiss.slice(6)} pill>
                                            <ReactTimeAgo date={item.duedate} locale="en-US" />
                                        </MDBBadge>
                                    </div>
                                </td>
                                {/* <td>Senior</td> */}
                        <td>
                            <a href={item.github} className="far mx-2" target="_blank" rel="noreferrer"><BsGithub/></a>
                        </td>
                            </tr>
                        })}
                    </MDBTableBody>
                </MDBTable>
            </div>
        </>
    )
}
export default MissingDueDate