import React from 'react'



const QRCodeGenerate = (props) => {
    return (
      <div>
        <div className="row">
          {/* <input
            type="text"
            placeholder='Enter text for generating QR Code'
            className="qr_textarea"
            value={props.text}
            onChange={(e) => props.QRCodeGen(e.target.value)}
          />
          <button
            className="qr_gen_btn"
            onClick={props.generateQRCode}
          >
            Generate QR Code
          </button> */}
        </div>
      </div>
    );
  };
  
  export default QRCodeGenerate;