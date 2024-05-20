import React from "react";



const QRCodeDisplay = ({ imageQR }) => {

  
      
  return (
    <div className="qr_container">
      <div className="qr_header">
        <h3>QrCode Image</h3>
      </div>
      <div className="qr_box">
        {imageQR && (
          <a href={imageQR} download>
            <img src={imageQR} width="70%" alt="qr code pic is here" />
          </a>
        )}
      </div>
    </div>
  );
};

export default QRCodeDisplay;
