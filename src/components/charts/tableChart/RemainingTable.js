import React, { useContext, useEffect, useState } from 'react'
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import ReactTimeAgo from 'react-time-ago';

const RemainingTable = (props) => {
    const { data } = props;

    return (
        <>
            <MDBTable align='middle'>
                <MDBTableHead>
                    <tr>
                        <th scope='col'>Task Name</th>
                        <th scope='col'>Task Assign To</th>
                        <th scope='col'>Task Create Date</th>
                    </tr>
                </MDBTableHead>
                <MDBTableBody>
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
                                    <ReactTimeAgo date={item.createdAt} locale="en-US"/>
                                </MDBBadge>
                            </div>
                        </td>
                        {/* <td>Senior</td>
                        <td>
                            <MDBBtn color='link' rounded size='sm'>
                                Edit
                            </MDBBtn>
                        </td> */}
                    </tr>
                    })}
                </MDBTableBody>
            </MDBTable>
        </>
    )
}
export default RemainingTable