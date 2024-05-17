import React from 'react'
import QrCodeFooter from './QrCodeFooter'
import QrCodeHeader from './QrCodeHeader'
import QRCodeEx from './QRCodeEx'
import { Box } from '@mui/material'
import '../QRCodePage/qrcode.css'

const QrCodeMain = () => {
  return (
    <Box>
        <QrCodeHeader/>
        <QRCodeEx/>
        <QrCodeFooter/>
    </Box>
  )
}

export default QrCodeMain