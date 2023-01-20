import React, { useContext, useEffect, useState } from 'react'
import { ResponsiveWaffle } from '@nivo/waffle'


const WaffleChart = () => {
    // const { dataofchart } = props;

    const dataofchart = [
        {
          "id": "men",
          "label": "men",
          "value": 7.6097656961264475,
        //   "color": "#468df3"
        },
        {
          "id": "women",
          "label": "women",
          "value": 16.9265765880633,
        //   "color": "#ba72ff"
        },
        {
          "id": "children",
          "label": "children",
          "value": 0.1662339990873345,
        //   "color": "#a1cfff"
        },
        {
            "id": "menq",
            "label": "menq",
            "value": 7.6097656961264475,
          //   "color": "#468df3"
          },
          {
            "id": "menw",
            "label": "menw",
            "value": 7.6097656961264475,
          //   "color": "#468df3"
          },
          {
            "id": "menwa",
            "label": "menwa",
            "value": 7.6097656961264475,
          //   "color": "#468df3"
          }
      ];


    return (
        <>
            <ResponsiveWaffle
                data={dataofchart}
                total={100}
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