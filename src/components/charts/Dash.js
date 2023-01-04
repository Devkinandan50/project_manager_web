import React, { useContext } from 'react'
import Widgets from './widget/Widgets';

const Dash = (props) => {
    const { data } = props;
    return (
        <>
            {data.Projectname == "All" ? (
                <div className="container" style={{ boxShadow: '2px 10px 20px rgba(0, 0, 0, 0.1)', borderRadius: '1rem', padding: '2rem 1rem 1rem 1rem' }} >
                    <div style={{ marginBottom: '1rem' }}>
                        <Widgets data={data} />
                    </div>

                    <div class="row mt-4">
                        <div class="col-lg-7 mb-lg-0 mb-4">
                            <div class="dev" style={{ height: '25rem', boxShadow: '2px 10px 20px rgba(0, 0, 0, 0.2)', borderRadius: '1rem' }}>
                                <div style={{ background: 'linear-gradient(82.59deg, #ff647c 0%, #0084f4 100%)', height: '0.5rem', borderRadius: '1rem' }}></div>
                                <div style={{ marginLeft: '2rem' }}>
                                    <h4> Project vs Progess </h4>
                                    {/* <h4> {data.Projectname} </h4> */}
                                </div>
                                {/* <PieGraph board={props.selectedboard}  /> */}
                            </div>
                        </div>
                        <div class="col-lg-5">
                            <div class="dev" style={{ height: '25rem', boxShadow: '2px 10px 20px rgba(0, 0, 0, 0.2)', borderRadius: '1rem' }}>
                                <div style={{ background: 'linear-gradient(69.83deg, #0084f4 0%, #00c48c 100%)', height: '0.5rem', borderRadius: '1rem' }}></div>
                                <div style={{ marginLeft: '2rem' }}>
                                    <h4> Project Items status Summary </h4>
                                    {/* <h4> {data.description} </h4> */}
                                </div>

                                {/* <Tableofdata board={props.selectedboard} /> */}
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="container" style={{ boxShadow: '2px 10px 20px rgba(0, 0, 0, 0.1)', borderRadius: '1rem', padding: '2rem 1rem 1rem 1rem' }} >
                    <div style={{ marginBottom: '1rem' }}>
                        <Widgets data={data} />
                    </div>

                    <div class="row mt-4">
                        <div class="col-lg-7 mb-lg-0 mb-4">
                            <div class="dev" style={{ height: '25rem', boxShadow: '2px 10px 20px rgba(0, 0, 0, 0.2)', borderRadius: '1rem' }}>
                                <div style={{ background: 'linear-gradient(82.59deg, #ff647c 0%, #0084f4 100%)', height: '0.5rem', borderRadius: '1rem' }}></div>
                                <div style={{ marginLeft: '2rem' }}>
                                    <h4> Project Items status Summary </h4>
                                    {/* <h4> {data.Projectname} </h4> */}
                                </div>
                                {/* <PieGraph board={props.selectedboard}  /> */}
                            </div>
                        </div>
                        <div class="col-lg-5">
                            <div class="dev" style={{ height: '25rem', boxShadow: '2px 10px 20px rgba(0, 0, 0, 0.2)', borderRadius: '1rem' }}>
                                <div style={{ background: 'linear-gradient(69.83deg, #0084f4 0%, #00c48c 100%)', height: '0.5rem', borderRadius: '1rem' }}></div>
                                <div style={{ marginLeft: '2rem' }}>
                                    <h4> Project Items status Summary </h4>
                                    {/* <h4> {data.description} </h4> */}
                                </div>

                                {/* <Tableofdata board={props.selectedboard} /> */}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
export default Dash