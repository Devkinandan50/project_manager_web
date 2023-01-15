import React, { useContext } from 'react'
import Widgets from './widget/Widgets';
import PieGraph from './pieChart/PieGraph';
import Streamgraph from './streamChart/StreamChart';
import Bargraph from './barChart/BarGraph';
const Dash = (props) => {
    const { data } = props;
    return (
        <>
            <div className="container" style={{ boxShadow: '2px 10px 20px rgba(0, 0, 0, 0.1)', borderRadius: '1rem', padding: '2rem 1rem 1rem 1rem' }} >
                <div style={{ marginBottom: '1rem' }}>
                    <Widgets data={data} />
                </div>

                <div class="row mt-4">
                    <div class="col-lg-7 mb-lg-0 mb-4">
                        <div class="dev" style={{ height: '25rem', boxShadow: '2px 10px 20px rgba(0, 0, 0, 0.2)', borderRadius: '1rem' }}>
                            <div style={{ background: 'linear-gradient(82.59deg, #ff647c 0%, #0084f4 100%)', height: '0.5rem', borderRadius: '1rem' }}></div>
                            {data.Projectname == "All" ? (
                                <>
                                    <div style={{ marginLeft: '2rem' }}>
                                        <h4> Project vs Progress </h4>
                                    </div>
                                    <Bargraph data={data.barchart}></Bargraph>

                                </>
                            ) : (
                                <>
                                    <div style={{ marginLeft: '2rem' }}>
                                        <h4> Stream Chart </h4>
                                    </div>
                                    <Streamgraph data={data.streamchart}></Streamgraph>
                                </>
                            )}
                        </div>
                    </div>
                    <div class="col-lg-5">
                        <div class="dev" style={{ height: '25rem', boxShadow: '2px 10px 20px rgba(0, 0, 0, 0.2)', borderRadius: '1rem' }}>
                            <div style={{ background: 'linear-gradient(69.83deg, #0084f4 0%, #00c48c 100%)', height: '0.5rem', borderRadius: '1rem' }}></div>
                            <div style={{ marginLeft: '2rem' }}>
                                <h4> Task Status Summary </h4>
                            </div>
                            <PieGraph review={data.underreviewTask} comp={data.completedTask} inpro={data.inprogressTask} remaining={data.remainingTask} />
                        </div>
                    </div>
                </div>

                <div class="row mt-4">
                    <div class="col-lg-7 mb-lg-0 mb-4">
                        <div class="dev" style={{ height: '25rem', boxShadow: '2px 10px 20px rgba(0, 0, 0, 0.2)', borderRadius: '1rem' }}>
                            <div style={{ background: 'linear-gradient(82.59deg, #ff647c 0%, #0084f4 100%)', height: '0.5rem', borderRadius: '1rem' }}></div>
                            {data.Projectname == "All" ? (
                                <div style={{ marginLeft: '2rem' }}>
                                    <h4> missing deadline </h4>
                                </div>
                            ) : (
                                <div style={{ marginLeft: '2rem' }}>
                                    <h4> Remaining Tasks</h4>
                                </div>
                            )}
                        </div>
                    </div>
                    <div class="col-lg-5">
                        <div class="dev" style={{ height: '25rem', boxShadow: '2px 10px 20px rgba(0, 0, 0, 0.2)', borderRadius: '1rem' }}>
                            <div style={{ background: 'linear-gradient(69.83deg, #0084f4 0%, #00c48c 100%)', height: '0.5rem', borderRadius: '1rem' }}></div>
                            <div style={{ marginLeft: '2rem' }}>
                                <h4> Summary </h4>
                            </div>
                            <PieGraph review={data.underreviewTask} comp={data.completedTask} inpro={data.inprogressTask} remaining={data.remainingTask} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Dash