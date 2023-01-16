import { useState, useEffect } from "react";
import { ResponsiveStream } from '@nivo/stream'

const Streamgraph = (props) => {
    const { data } = props;
    // const [dataofchart, setdataofchart] = useState([]);

    const tickValues = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ];


    return (
        <>
            <ResponsiveStream
                data={data}
                keys={[
                    'Remaining',
                    'InProgress',
                    'UnderReview',
                    'Completed'
                ]}
                margin={{ top: 20, right: 50, bottom: 100, left: 60 }}
                axisTop={null}
                axisRight={null}
                axisBottom={{
                    orient: 'bottom',
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: '',
                    legendOffset: 60,
                    format: d => tickValues[d]
                }}
                axisLeft={{
                    orient: 'left',
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'No of Tasks',
                    legendOffset: -40
                }}
                // enableGridX={true}
                // enableGridY={true}
                offsetType="diverging"
                colors={{ scheme: 'nivo' }}
                fillOpacity={0.85}
                borderColor={{ theme: 'background' }}
                defs={[
                    {
                        id: 'dots',
                        type: 'patternDots',
                        background: 'inherit',
                        color: '#2c998f',
                        size: 4,
                        padding: 2,
                        stagger: true
                    },
                    {
                        id: 'squares',
                        type: 'patternSquares',
                        background: 'inherit',
                        color: '#e4c912',
                        size: 6,
                        padding: 2,
                        stagger: true
                    }
                ]}
                fill={[
                    {
                        match: {
                            id: 'Remainin'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: 'Marcel'
                        },
                        id: 'squares'
                        
                    },
                    {
                        match: {
                            id: 'InProgres'
                        },
                        id: 'squares'
                        
                    }
                ]}
                dotSize={8}
                dotColor={{ from: 'color' }}
                dotBorderWidth={2}
                dotBorderColor={{
                    from: 'color',
                    modifiers: [
                        [
                            'darker',
                            0.7
                        ]
                    ]
                }}
            // legends={[
            //     {
            //         anchor: 'bottom-right',
            //         direction: 'column',
            //         translateX: 100,
            //         itemWidth: 80,
            //         itemHeight: 20,
            //         itemTextColor: '#999999',
            //         symbolSize: 12,
            //         symbolShape: 'circle',
            //         effects: [
            //             {
            //                 on: 'hover',
            //                 style: {
            //                     itemTextColor: '#000000'
            //                 }
            //             }
            //         ]
            //     }
            // ]}
            />

        </>
    )
}
export default Streamgraph