import React from 'react'
import { useState } from "react";
import qrcode from "qrcode";
//  import "bootstrap/dist/css/bootstrap.css"
//  import "bootstrap/dist/js/bootstrap.js"

import QRCodeGenerate from "../QRCodePage/QRCodeGenerate";
import QRCodeDisplay from "../QRCodePage/QRCodeDisplay";
import QRCodeFileScan from "../QRCodePage/QRCodeFileScan";
import QRCodeWebcam from "../QRCodePage/QRCodeWebcam";


const QRCodeEx = () => {
    const [text, setText] = useState();
    const [imageQR, setImageQR] = useState();
    const QRCodeGen = (value) => {
      setText(value);
    };
    const generateQRCode = async () => {
      const image = await qrcode.toDataURL(text);
      setImageQR(image);
    };
  
    return (
      <div className="qr_area">
        <QRCodeGenerate
          text={text}
          QRCodeGen={QRCodeGen}
          generateQRCode={generateQRCode}
        />
        <div className="row">
          <QRCodeDisplay imageQR={imageQR} />
          <QRCodeFileScan />
          <QRCodeWebcam />
        </div>
      </div>
    );
  };
  
  export default QRCodeEx;