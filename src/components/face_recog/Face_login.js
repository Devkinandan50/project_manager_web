import React, { useContext, useState } from 'react'
import Webcam from 'react-webcam';
import ProjectContext from "../../context/pro_jects/projectContext"


const WebcamCapture = () => {
    const context = useContext(ProjectContext);

    // context mese set_login function lekar aao
    const { facelogin_email} = context;


    const webcamRef = React.useRef(null);
    // const [imgSrc, setImgSrc] = React.useState(null);
    const videoConstraints = {
        width: 200,
        height: 200,
        facingMode: 'user'
    }
    const capture = React.useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        const email = facelogin_email;
        console.log(email, imageSrc);
    }, [webcamRef]);

    return (
        <>
            <div>
                <div className='d-flex justify-content-center p-5'>
                    <Webcam
                        style={{
                            border: '5px solid black',
                            borderRadius: '20px'
                        }}
                        audio={false}
                        height={500}
                        ref={webcamRef}
                        screenshotFormat="image/jpeg"
                        // width={500}
                        videoConstraints={videoConstraints}
                    />
                </div>
                    <p className='d-flex justify-content-center ml-1'> Login using {facelogin_email}</p>
                <div className='d-flex justify-content-center ml-1'>
                    <button onClick={capture}>Capture photo</button>
                </div>
            </div>
        </>
    );
};
export default WebcamCapture
