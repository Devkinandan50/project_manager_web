import { useState, useEffect } from "react";
// import { useState, useEffect } from "react";
// import { ResponsivePie } from "@nivo/pie";

// const PieGraph = (props) => {
//     const baseUrl = process.env.REACT_APP_HEROKU_URL;
//     const [board, setBoard] = useState([]);
//     const [count1, setCount1] = useState(0);
//     const [count2, setCount2] = useState(0);
//     const [count3, setCount3] = useState(0);
//     const [count4, setCount4] = useState(0);
//     const [count5, setCount5] = useState(0);
//     const [count6, setCount6] = useState(0);
//     const [dataofchart, setdataofchart] = useState([{
//         data: [
//             {
//                 id: "To-Do",
//                 label: "To-Do",
//                 value: count1,
//                 color: "hsl(48, 70%, 50%)",
//             },
//             {
//                 id: "Ready",
//                 label: "Ready",
//                 value: count2,
//                 color: "hsl(285, 70%, 50%)",
//             },
//             {
//                 id: "In-Progress",
//                 label: "In-Progress",
//                 value: count3,
//                 color: "hsl(126, 70%, 50%)",
//             },
//             {
//                 id: "Under Review",
//                 label: "Under Review",
//                 value: count4,
//                 color: "hsl(280, 70%, 50%)",
//             },
//             {
//                 id: "Done",
//                 label: "Done",
//                 value: count5,
//                 color: "hsl(300, 70%, 50%)",
//             },
//         ],
//     }]);

//     let usremail = window.localStorage.getItem("email");
//     let projectid = window.localStorage.getItem("PROJECT_ID");

//     const getdataofchart = () => {
//         // http://127.0.0.1:8000/getStatus?board=All&email=jagtapdevkinandan50@gmail.com&prjId=21
//         fetch(baseUrl + "/getStatus" + "?board=" + props.board + "&email=" + usremail + "&prjId=" + projectid)
//             .then((response) =>
//                 response.json().then((data) => {
//                     setBoard(data);
//                 })
//             )
//             .catch((err) => console.log(err));
//     }

//     useEffect(() => {
//         getdataofchart();
//     }, [props.board]);

//     useEffect(() => {
//         setCount1(board.Todo);
//         setCount2(board.Ready);
//         setCount3(board.InProgress);
//         setCount4(board.UnderReview);
//         setCount5(board.Withdrawn);
//         setCount6(board.Completed);
//         var newData = [
//             {
//                 id: "To-Do",
//                 label: "To-Do",
//                 value: board.Todo,
//                 color: "hsl(48, 70%, 50%)",
//             },
//             {
//                 id: "Ready",
//                 label: "Ready",
//                 value: board.Ready,
//                 color: "hsl(285, 70%, 50%)",
//             },
//             {
//                 id: "In-Progress",
//                 label: "In-Progress",
//                 value: board.InProgress,
//                 color: "hsl(126, 70%, 50%)",
//             },
//             {
//                 id: "Under Review",
//                 label: "Under Review",
//                 value: board.UnderReview,
//                 color: "hsl(280, 70%, 50%)",
//             },
//             {
//                 id: "Done",
//                 label: "Done",
//                 value: board.Completed,
//                 color: "hsl(300, 70%, 50%)",
//             },
//             {
//                 id: "Withdrawn",
//                 label: "Withdrawn",
//                 value: board.Withdrawn,
//                 color: "hsl(320, 70%, 50%)",
//             },
//         ];

//         setdataofchart({ data: newData });
//     }, [board]);

//     return (
//         <>
//             {props.board == "" ? (
//                 <></>
//             ) : (
//                 <>
//                     <ResponsivePie
//                         data={dataofchart.data}
//                         margin={{ top: 40, right: 60, bottom: 80, left: 60 }}
//                         height={400}
//                         width={865}
//                         // startAngle={88}
//                         // endAngle={-90}
//                         fit={false}
//                         innerRadius={0.8}
//                         padAngle={0.7}
//                         cornerRadius={3}
//                         colors={{ scheme: "nivo" }}
//                         borderWidth={1}
//                         arcLinkLabelsSkipAngle={12}
//                         arcLabelsSkipAngle={12}
//                         borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
//                         radialLabelsSkipAngle={0}
//                         radialLabelsTextColor="#333333"
//                         radialLabelsLinkColor={{ from: "color" }}
//                         sliceLabelsSkipAngle={10}
//                         sliceLabelsTextColor="#333333"

//                         isInteractive={true}
//                         activeOuterRadiusOffset={31}


//                         onClick={(data, e) => {
//                             // console.log({ is: 'mouseenter', data, event: e })
//                             // setprintlist({ is: 'mouseenter', data, event: e })

//                         }}
//                         // onClick={(data, e) => {
//                         //   // console.log({ is: 'mouseleave', data, event: e })
//                         //   setprintlist({ is: 'mouseleave', data, event: e })
//                         // }}
//                         defs={[
//                             {
//                                 id: "dots",
//                                 type: "patternDots",
//                                 background: "inherit",
//                                 color: "rgba(255, 255, 255, 0.3)",
//                                 size: 4,
//                                 padding: 1,
//                                 stagger: true,
//                             },
//                             {
//                                 id: "lines",
//                                 type: "patternLines",
//                                 background: "inherit",
//                                 color: "rgba(255, 255, 255, 0.3)",
//                                 rotation: -45,
//                                 lineWidth: 6,
//                                 spacing: 10,
//                             },
//                         ]}

//                         legends={[
//                             {
//                                 anchor: 'right',
//                                 direction: 'column',
//                                 justify: false,
//                                 translateX: 60,
//                                 translateY: 32,
//                                 itemsSpacing: 0,
//                                 itemWidth: 100,
//                                 itemHeight: 30,
//                                 anchor: 'right',
//                                 itemTextColor: '#999',
//                                 itemDirection: 'left-to-right',
//                                 itemOpacity: 1,
//                                 symbolSize: 18,
//                                 symbolShape: 'circle',
//                                 effects: [
//                                     {
//                                         on: 'hover',
//                                         style: {
//                                             itemTextColor: '#000'
//                                         }
//                                     }
//                                 ]
//                             },
//                         ]}
//                     />
//                 </>
//             )
//             }
//         </>
//     )
// }
// export default PieGraph


// import { ResponsivePie } from "@nivo/pie";

const PieGraph = (props) => {
    return (
        <p> pie Chart</p>
    )
}
export default PieGraph