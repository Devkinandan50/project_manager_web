import React, { useContext, useEffect, useState } from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './Widgets.css'


const Widgets = (props) => {
    const { data } = props;
    return (
        <>
            <div className="row">
                <div className="col-12">
                    <div className="row justify-content-between">
                        <div className="c-dashboardInfo col-lg-3 col-md-6">
                            <div className="wrap">
                                {data.Projectname == "All" ? (
                                    <>
                                        <h4 className="heading heading5 hind-font medium-font-weight c-dashboardInfo__title">Performance</h4>
                                        {/* <div style={{ width: 100, height: 100, margin: '0px auto' }}>
                                            <CircularProgressbar value={data.totalCompleted * 100 / (data.totalCompleted + data.totalremaining + data.totalinprogess + data.totalunderreview)} text={`${Math.round(data.totalCompleted * 100 / (data.totalCompleted + data.totalremaining + data.totalinprogess + data.totalunderreview))}%`} />
                                        </div> */}
                                        <span className="hind-font caption-12 c-dashboardInfo__count">{`${Math.round(data.completedTask * 100 / (data.completedTask + data.remainingTask + data.inprogressTask + data.underreviewTask))}%`} </span>
                                    </>
                                ) : (
                                    <>
                                        <h4 className="heading heading5 hind-font medium-font-weight c-dashboardInfo__title">Progess</h4>
                                        {/* <div style={{ width: 100, height: 100, margin: '0px auto' }}>
                                            <CircularProgressbar value={data.progess} text={`${Math.round(data.progess)}%`} />
                                        </div> */}
                                        <span className="hind-font caption-12 c-dashboardInfo__count">{`${Math.round(data.progess)}%`} </span>
                                    </>
                                )}
                            </div>
                        </div>

                        <div className="c-dashboardInfo col-lg-3 col-md-6">
                            <div className="wrap">
                                <h4 className="heading heading5 hind-font medium-font-weight c-dashboardInfo__title">Total Tasks</h4>
                                    <span className="hind-font caption-12 c-dashboardInfo__count">{data.completedTask + data.inprogressTask + data.underreviewTask + data.remainingTask}</span>
                            </div>
                        </div>

                        <div className="c-dashboardInfo col-lg-3 col-md-6">
                            <div className="wrap">
                                <h4 className="heading heading5 hind-font medium-font-weight c-dashboardInfo__title">Total Employees</h4>
                                { data.Projectname == "All" ? (
                                    <span className="hind-font caption-12 c-dashboardInfo__count">{data.totalemployee}</span>
                                    ) : (
                                    <span className="hind-font caption-12 c-dashboardInfo__count">{data.project_members.length}</span>
                                )}
                            </div>
                        </div>

                        <div className="c-dashboardInfo col-lg-3 col-md-6">
                            <div className="wrap">
                                {data.Projectname == "All" ? (
                                    <>
                                    <h4 className="heading heading5 hind-font medium-font-weight c-dashboardInfo__title">Total Projects</h4>
                                    <span className="hind-font caption-12 c-dashboardInfo__count">{data.TotalProject}</span>
                                    </>
                                ) : (
                                    <>
                                    <h4 className="heading heading5 hind-font medium-font-weight c-dashboardInfo__title">Project Tag</h4>
                                    <span className="hind-font caption-12 c-dashboardInfo__count">{data.tag}</span>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};
export default Widgets;