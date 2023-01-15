import { useState, useEffect } from "react";
import { ResponsiveBar } from '@nivo/bar'

const bargraph = (props) => {
    // const { data } = props;
    const dataofchart = [{
        "country": "hot dog",
        "hot dog": 99,
        "hot dogColor": "hsl(28, 70%, 50%)",
      },
      {
        "country": "fries",
        "fries": 59,
        "friesColor": "hsl(309, 70%, 50%)",
      },
      {
        "country": "kebab",
        "kebab": 109,
        "kebabColor": "hsl(276, 70%, 50%)",
      },
      {
        "country": "burger",
        "burger": 110,
        "burgerColor": "hsl(345, 70%, 50%)",
      },
      {
        "country": "sandwich",
        "sandwich": 154,
        "sandwichColor": "hsl(146, 70%, 50%)",
      },
      {
        "country": "donut",
        "donut": 24,
        "donutColor": "hsl(118, 70%, 50%)"
      },
      {
        "country": "Student Attendence data Management",
        "Student Attendence data Management": 159,
        "hot dogColor": "hsl(129, 70%, 50%)",
      }];


    return (
        <>
            <ResponsiveBar
                data={dataofchart}
                keys={[
                    'hot dog',
                    'burger',
                    'sandwich',
                    'kebab',
                    'fries',
                    'donut',
                    'Student Attendence data Management'
                ]}
                indexBy="country"
                margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                padding={0.3}
                // groupMode="grouped"
                // innerPadding={18}
                valueScale={{ type: 'linear' }}
                indexScale={{ type: 'band', round: true }}
                colors={{ scheme: 'nivo' }}
                defs={[
                    {
                        id: 'dots',
                        type: 'patternDots',
                        background: 'inherit',
                        color: '#38bcb2',
                        size: 4,
                        padding: 1,
                        stagger: true
                    },
                    {
                        id: 'lines',
                        type: 'patternLines',
                        background: 'inherit',
                        color: '#eed312',
                        rotation: -45,
                        lineWidth: 6,
                        spacing: 10
                    }
                ]}
                fill={[
                    {
                        match: {
                            id: 'fries'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: 'sandwich'
                        },
                        id: 'lines'
                    }
                ]}
                borderColor={{
                    from: 'color',
                    modifiers: [
                        [
                            'darker',
                            1.6
                        ]
                    ]
                }}
                axisTop={null}
                axisRight={null}
                axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'country',
                    legendPosition: 'middle',
                    legendOffset: 32
                }}
                axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'food',
                    legendPosition: 'middle',
                    legendOffset: -40
                }}
                label={d => `${d.id}`}
                labelSkipWidth={7}
                labelSkipHeight={12}
                labelTextColor={{
                    from: 'color',
                    modifiers: [
                        [
                            'darker',
                            '3'
                        ]
                    ]
                }}
                legends={[
                    {
                        dataFrom: 'keys',
                        anchor: 'bottom-right',
                        direction: 'column',
                        justify: false,
                        translateX: 120,
                        translateY: 0,
                        itemsSpacing: 2,
                        itemWidth: 100,
                        itemHeight: 20,
                        itemDirection: 'left-to-right',
                        itemOpacity: 0.85,
                        symbolSize: 20,
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemOpacity: 1
                                }
                            }
                        ]
                    }
                ]}
                isInteractive={false}
                motionConfig="stiff"
                role="application"
                ariaLabel="Nivo bar chart demo"
                barAriaLabel={function (e) { return e.id + ": " + e.formattedValue + " in country: " + e.indexValue }}
            />

        </>
    )
}
export default bargraph