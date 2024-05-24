import React from "react";

const QRCodeDisplay = ({ imageQR, ...props }) => {
  return (
    <div className="qr_container">
      <div className="qr_header">
        <h3>QrCode Image</h3>
      </div>
      <div className="qr_box">
        <div className="qr_img">
          {imageQR && (
            <a href={imageQR} download>
              <img src={imageQR} width="70%" alt="qr code pic is here" />
            </a>
          )}
        </div>
      </div>
      <div className="qr_result">
        <div className="qr_row">
          <input
            type="text"
            placeholder="Enter code here"
            className="qr_textarea"
            value={props.text}
            onChange={(e) => props.QRCodeGen(e.target.value)}
          />
          <button className="qr_gen_btn" onClick={props.generateQRCode}>
            Generate QR Code
          </button>
        </div>
      </div>
    </div>
  );
};

export default QRCodeDisplay;
