import React, { useContext, useEffect, useState } from 'react'
import './Widgets.css'


const Widgets = () => {

    return (
        <>
            <div className="row">
                <div className="col-12">
                    <div className="row justify-content-between">
                        <div className="c-dashboardInfo col-lg-3 col-md-6">
                            <div className="wrap">
                                <h4 className="heading heading5 hind-font medium-font-weight c-dashboardInfo__title">Total Project Int</h4>
                                <span className="hind-font caption-12 c-dashboardInfo__count">dfeff</span>
                            </div>
                        </div>

                        <div className="c-dashboardInfo col-lg-3 col-md-6">
                            <div className="wrap">
                                <h4 className="heading heading5 hind-font medium-font-weight c-dashboardInfo__title">Total Project Ite ompleted</h4>
                                <span className="hind-font caption-12 c-dashboardInfo__count">dfeff</span>
                            </div>
                        </div>

                        <div className="c-dashboardInfo col-lg-3 col-md-6">
                            <div className="wrap">
                                <h4 className="heading heading5 hind-font medium-font-weight c-dashboardInfo__title">New Project Items Added in last 2 days</h4>
                                <span className="hind-font caption-12 c-dashboardInfo__count">dfeff</span>
                            </div>
                        </div>

                        <div className="c-dashboardInfo col-lg-3 col-md-6">
                            <div className="wrap">
                                <h4 className="heading heading5 hind-font medium-font-weight c-dashboardInfo__title">Updated Project Items in last 2 days</h4>
                                <span className="hind-font caption-12 c-dashboardInfo__count">dfeff</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};
export default Widgets;