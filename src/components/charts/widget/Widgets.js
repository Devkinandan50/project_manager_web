import React, { useContext, useEffect, useState } from 'react'
import './Widgets.css'


const Widgets = (props) => {
    const {data} = props;
    return (
        <>
            <div className="row">
                <div className="col-12">
                    <div className="row justify-content-between">
                        <div className="c-dashboardInfo col-lg-3 col-md-6">
                            <div className="wrap">
                                { data.Projectname == "All" ? (
                                    <h4 className="heading heading5 hind-font medium-font-weight c-dashboardInfo__title">Performance</h4>
                                ) : (
                                    <h4 className="heading heading5 hind-font medium-font-weight c-dashboardInfo__title">Progess</h4>
                                ) }
                                
                                <span className="hind-font caption-12 c-dashboardInfo__count">{data.totalCompleted + data.totalremaining} </span>
                            </div>
                        </div>

                        <div className="c-dashboardInfo col-lg-3 col-md-6">
                            <div className="wrap">
                                <h4 className="heading heading5 hind-font medium-font-weight c-dashboardInfo__title">Total Task</h4>
                                <span className="hind-font caption-12 c-dashboardInfo__count">dfeff</span>
                            </div>
                        </div>

                        <div className="c-dashboardInfo col-lg-3 col-md-6">
                            <div className="wrap">
                                <h4 className="heading heading5 hind-font medium-font-weight c-dashboardInfo__title">Total Employees</h4>
                                <span className="hind-font caption-12 c-dashboardInfo__count">dfeff</span>
                            </div>
                        </div>

                        <div className="c-dashboardInfo col-lg-3 col-md-6">
                            <div className="wrap">
                                { data.Projectname == "All" ? (
                                    <h4 className="heading heading5 hind-font medium-font-weight c-dashboardInfo__title">Total Project</h4>
                                ) : (
                                    <h4 className="heading heading5 hind-font medium-font-weight c-dashboardInfo__title">Due Date</h4>
                                ) }
                                <span className="hind-font caption-12 c-dashboardInfo__count">{data.tag}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};
export default Widgets;