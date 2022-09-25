const faceapi = require('face-api.js');
const path = require('path');
const fetch = require('node-fetch');
const { fetchImage } = require('face-api.js');

// const tf = require('@tensorflow/tfjs-node');
// const Canvas = require('canvas');
// const Image = require('canvas');
// const ImageData = require('canvas');

// faceapi.env.monkeyPatch({ Canvas, Image, ImageData })
faceapi.env.monkeyPatch({ fetch: fetch });
// faceapi.env.monkeyPatch({ Canvas, Image })

const MODELS_URL = path.join(__dirname, '/models');

const face_re = (storeImg, log_Img, name) => {
    Promise.all([
        async function loadAllmodel() {
            await faceapi.nets.ssdMobilenetv1.loadFromDisk(MODELS_URL);
            await faceapi.nets.faceLandmark68Net.loadFromDisk(MODELS_URL);
            await faceapi.nets.faceRecognitionNet.loadFromDisk(MODELS_URL);
            await faceapi.nets.faceExpressionNet.loadFromUri(MODELS_URL);
            await faceapi.nets.tinyFaceDetector.loadFromUri(MODELS_URL);
          }
      ])
        .then(start)
        .catch((e) => console.log(e));


        async function start() {
            console.log("start function")
            const labeledDescriptors = await loadLabeledImages()
            console.log(labeledDescriptors)
        }

        async function loadLabeledImages() {
            const descriptions = []

            // error in fetchImage
            // const img = await faceapi.fetchImage(storeImage)

            const detections = await faceapi.detectSingleFace(img).withFaceLandmarks().withFaceDescriptor()
            descriptions.push(detections.descriptor)
            console.log("description")
            console.log(descriptions)
            return new faceapi.LabeledFaceDescriptors(name, descriptions)
        }

    // temp add kiya qki error nahi aana chahiye
    if(storeImg == log_Img){
        return true;
    }
    else{
        return false;
    }
}


module.exports = face_re;



