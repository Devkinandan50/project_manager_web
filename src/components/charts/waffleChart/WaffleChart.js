import React, { useContext, useEffect, useState } from 'react'
import { ResponsiveWaffle } from '@nivo/waffle'



const WaffleChart = (props) => {
    const { data, Count } = props;

    return (
        <>
            <ResponsiveWaffle
                data={data}
                total={Count}
                rows={10}
                columns={21}
                fillDirection="top"
                margin={{ top: 10, right: 30, bottom: 60, left: 120 }}
                colors={{ scheme: 'set2' }}
                borderColor={{
                    from: 'color',
                    modifiers: [
                        [
                            'darker',
                            0.3
                        ]
                    ]
                }}
                animate={true}
                emptyOpacity={0.65}
                motionStiffness={90}
                motionDamping={11}
                legends={[
                    {
                        anchor: 'top-left',
                        direction: 'column',
                        justify: false,
                        translateX: -100,
                        translateY: 0,
                        itemsSpacing: 4,
                        itemWidth: 100,
                        itemHeight: 20,
                        itemDirection: 'left-to-right',
                        itemOpacity: 1,
                        itemTextColor: '#777',
                        symbolSize: 20,
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemTextColor: '#000',
                                    itemBackground: '#f7fafb'
                                }
                            }
                        ]
                    }
                ]}
            />

        </>
    )
}
export default WaffleChart