import { useRef, useState } from "react";
import QrReader from "react-qr-reader";
const QRCodeFileScan = () => {
  const qrRef = useRef(null);
  const [fileResult, setFileResult] = useState();
  const openDialog = () => {
    qrRef.current.openImageDialog();
  };
  const fileError = (error) => {
    if (error) {
      console.log(error);
    }
  };
  const fileScan = (result) => {
    if (result) {
      setFileResult(result);
    }
  };
  return (
    <div className="qr_container">
      <div className="qr_header">
        <button className="qr_scan_btn" onClick={openDialog}>
          <h5>Open QR Code File</h5>
        </button>
      </div>
      <div className="qr_box">
        <QrReader
          ref={qrRef}
          delay={300}
          onError={fileError}
          onScan={fileScan}
          legacyMode={true}
        />
      </div>
      <div className="qr_result">
        <h3>Image Result: <span>{fileResult}</span> </h3>
      </div>
    </div>
  );
};

export default QRCodeFileScan;
