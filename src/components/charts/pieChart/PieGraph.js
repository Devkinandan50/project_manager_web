import { useState, useEffect } from "react";
import { ResponsivePie } from "@nivo/pie";

const PieGraph = (props) => {
    const { review, comp, inpro, remaining } = props;
    const [dataofchart, setdataofchart] = useState([{
        "id": "Under-Review",
        "label": "Under-Review",
        "value": review,
        "color": "hsl(303, 70%, 50%)"
    },
    {
        "id": "Completed",
        "label": "Completed",
        "value": comp,
        "color": "hsl(322, 70%, 50%)"
    },
    {
        "id": "In-Progress",
        "label": "In-Progress",
        "value": inpro,
        "color": "hsl(330, 70%, 50%)"
    },
    {
        "id": "Remaining",
        "label": "Remaining",
        "value": remaining,
        "color": "hsl(24, 70%, 50%)"
    }]);

    // const dataofchart = [{
    //     "id": "underreview",
    //     "label": "Under-Review",
    //     "value": review,
    //     "color": "hsl(303, 70%, 50%)"
    // },
    // {
    //     "id": "completed",
    //     "label": "Completed",
    //     "value": comp,
    //     "color": "hsl(322, 70%, 50%)"
    // },
    // {
    //     "id": "inprogress",
    //     "label": "In-Progress",
    //     "value": inpro,
    //     "color": "hsl(330, 70%, 50%)"
    // },
    // {
    //     "id": "remaining",
    //     "label": "Remaining",
    //     "value": remaining,
    //     "color": "hsl(24, 70%, 50%)"
    // }];

    // setdataofchart([{
    //     "id": "underreview",
    //     "label": "Under-Review",
    //     "value": review,
    //     "color": "hsl(303, 70%, 50%)"
    // },
    // {
    //     "id": "completed",
    //     "label": "Completed",
    //     "value": comp,
    //     "color": "hsl(322, 70%, 50%)"
    // },
    // {
    //     "id": "inprogress",
    //     "label": "In-Progress",
    //     "value": inpro,
    //     "color": "hsl(330, 70%, 50%)"
    // },
    // {
    //     "id": "remaining",
    //     "label": "Remaining",
    //     "value": remaining,
    //     "color": "hsl(24, 70%, 50%)"
    // }])

    return (
        <>
            <ResponsivePie
                data={dataofchart}
                margin={{ top: 40, right: 80, bottom: 150, left: 80 }}
                innerRadius={0.7}
                padAngle={0.7}
                cornerRadius={5}
                activeOuterRadiusOffset={8}
                borderWidth={1}
                borderColor={{
                    from: 'color',
                    modifiers: [
                        [
                            'darker',
                            0.2
                        ]
                    ]
                }}
                arcLinkLabelsSkipAngle={10}
                arcLinkLabelsTextColor="#333333"
                arcLinkLabelsThickness={2}
                arcLinkLabelsColor={{ from: 'color' }}
                arcLabelsSkipAngle={10}
                arcLabelsTextColor={{
                    from: 'color',
                    modifiers: [
                        [
                            'darker',
                            2
                        ]
                    ]
                }}
                defs={[
                    {
                        id: 'dots',
                        type: 'patternDots',
                        background: 'inherit',
                        color: 'rgba(255, 255, 255, 0.3)',
                        size: 4,
                        padding: 1,
                        stagger: true
                    },
                    {
                        id: 'lines',
                        type: 'patternLines',
                        background: 'inherit',
                        color: 'rgba(255, 255, 255, 0.3)',
                        rotation: -45,
                        lineWidth: 6,
                        spacing: 10
                    }
                ]}
                fill={[
                    {
                        match: {
                            id: 'Remaining'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: 'c'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: 'Under-Review'
                        },
                        id: 'lines'
                    },
                    {
                        match: {
                            id: 'In-Progress'
                        },
                        id: 'lines'
                    }
                ]}
                motionConfig="wobbly"
                legends={[
                    {
                        anchor: 'bottom',
                        direction: 'row',
                        justify: false,
                        translateX: 0,
                        translateY: 56,
                        itemsSpacing: 0,
                        itemWidth: 100,
                        itemHeight: 18,
                        itemTextColor: '#999',
                        itemDirection: 'left-to-right',
                        itemOpacity: 1,
                        symbolSize: 18,
                        symbolShape: 'circle',
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemTextColor: '#000'
                                }
                            }
                        ]
                    }
                ]}
            />

        </>
    )
}
export default PieGraph