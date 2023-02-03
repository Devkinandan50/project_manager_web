import React from 'react';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import ReactTimeAgo from 'react-time-ago';
import { BsGithub } from "react-icons/bs";

export default function missingdate(props) {
    const { data } = props;
    return (
        <>
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
                        <a href={item.github} className="far mx-2" target="_blank" rel="noreferrer"><BsGithub /></a>
                    </td>
                </tr>
            })}
        </>
    )
}
