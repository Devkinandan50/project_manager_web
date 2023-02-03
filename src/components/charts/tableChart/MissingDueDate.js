import React, { useContext, useEffect, useState } from 'react'
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import ReactTimeAgo from 'react-time-ago';
import { BsGithub } from "react-icons/bs";
import Missingdate from './Missingdate'

const MissingDueDate = (props) => {
    const { data, filter } = props;

    // const [filtermissingdate, setfiltermissingdate] = useState([])}

    const filterdate = data.filter((element) => {
        return element.datemiss == "table-danger";
    })

    return (
        <>
            <div style={{ height: '23rem', width: '100%', overflow: 'scroll' }}>

                <MDBTable align='middle'>
                    <MDBTableHead style={{ border: '1px solid black' }}>
                        <tr className='table-active'>
                            <th scope='col'>Project Name</th>
                            <th scope='col'>Progress</th>
                            <th scope='col'>Expires</th>
                            <th scope='col'>Github</th>
                        </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                        {filter ? (
                            <>
                                <Missingdate data={filterdate}/>
                            </>
                        ) : (
                            <>
                                <Missingdate data={data} />
                            </>
                        )}

                    </MDBTableBody>
                </MDBTable>
            </div>
        </>
    )
}
export default MissingDueDate