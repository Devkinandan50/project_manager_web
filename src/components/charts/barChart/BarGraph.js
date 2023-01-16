import { useState, useEffect } from "react";
import { ResponsiveBar } from '@nivo/bar'

const bargraph = (props) => {
    const { dataofchart, keys } = props;

    return (
        <>
            <ResponsiveBar
                data={dataofchart}
                keys={keys}
                indexBy="projectname"
                margin={{ top: 50, right: 30, bottom: 90, left: 60 }}
                padding={0.3}
                // groupMode="grouped"
                // innerPadding={18}
                valueScale={{ type: 'linear' }}
                indexScale={{ type: 'band', round: true }}
                colors={{ scheme: 'set3' }}
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
                axisBottom={null}
                axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'food',
                    legendPosition: 'middle',
                    legendOffset: -40
                }}
                enableLabel={false}
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
            
                tooltip={({ id, value, color }) => (
                    <div
                        style={{
                            padding: 12,
                            color,
                            background: '#222222',
                        }}
                    >
                        <span>Click</span>
                        <br />
                        <strong>
                            {id}: {value}
                        </strong>
                    </div>
                )}
                motionConfig="molasses"
            />

        </>
    )
}
export default bargraph