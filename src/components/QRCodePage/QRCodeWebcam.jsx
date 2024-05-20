import { useState } from "react";
import QrReader from "react-qr-reader";
const QRCodeWebcam = () => {
  const [webcamResult, setWebcamResult] = useState();
  const webcamError = (error) => {
    if (error) {
      console.log(error);
    }
  };
  const webcamScan = (result) => {
    if (result) {
      setWebcamResult(result);
    }
  };
  return (
    <div className="qr_container">
      <div className="qr_header">
        <h3>Webcam Image</h3>
      </div>
      <div className="qr_box">
        <QrReader
          delay={300}
          onError={webcamError}
          onScan={webcamScan}
          legacyMode={false}
          facingMode={"environment"}
        />
      </div>
      <div className="qr_result">
        <h3>WebCam Result: <span>{webcamResult}</span> </h3>
      </div>
    </div>
  );
};

export default QRCodeWebcam;