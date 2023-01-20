import React, { useContext, useEffect, useState } from 'react'
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import ReactTimeAgo from 'react-time-ago';

const MissingDueDate = () => {
    // const { data } = props;

    return (
        <>
            {/* <div style={{ height: '23rem', width: '100%', overflow: 'scroll' }}>

                <MDBTable align='middle'>
                    <MDBTableHead style={{ border:'1px solid black'}}>
                        <tr>
                            <th scope='col'>Task Name</th>
                            <th scope='col'>Task Assign To</th>
                            <th scope='col'>Task Create Date</th>
                        </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                        {data.length === 0 && 'No Tasks to display'}
                        {data.map((item) => {
                            return <tr className='table-primary'>
                                <td>
                                    <div className='d-flex align-items-center'>
                                        <div className='ms-3'>
                                            <p className='fw-bold mb-1'>
                                                {item.taskname}

                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <p className='fw-normal mb-1'>
                                        {item.task_assignto}
                                    </p>
                                </td>
                                <td>
                                    <div className='d-flex align-items-center'>
                                        <MDBBadge color='primary' pill>
                                            <ReactTimeAgo date={item.createdAt} locale="en-US" />
                                        </MDBBadge>
                                    </div>
                                </td>
                                <td>Senior</td>
                        <td>
                            <MDBBtn color='link' rounded size='sm'>
                            Edit
                            </MDBBtn>
                        </td>
                            </tr>
                        })}
                    </MDBTableBody>
                </MDBTable>
            </div> */}
        </>
    )
}
export default MissingDueDate