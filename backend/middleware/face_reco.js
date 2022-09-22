const faceapi = require('face-api.js');

const face_re = (storeImg, log_Img, name) => {
    if(storeImg == log_Img){
        return true;
    }
    else{
        return false;
    }
}


module.exports = face_re;