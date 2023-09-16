// const fs = require('fs');
// const pako = require('pako');

// fs.readFile('encoded_data.txt', 'utf8', (err, data) => {
//     if (err) {
//         console.error('Error reading the file:', err);
//         return;
//     }

//     // Decode and decompress the data
//     const decodedData = decodeQRData(data);
//     console.log(decodedData);
//     const jsonData = JSON.parse(decodedData)
//     console.log({jsonData,encoded:data})
// });

import * as pako from 'pako'

export function decodeQRData(qrData) {
    console.log({QR_DATA:qrData})
    try{
        // Decode from Base64
        const compressedData = Buffer.from(qrData, 'base64');

        // Decompress using pako
        const decompressedData = pako.inflate(compressedData, { to: 'string' });
        console.log({decompressedData})
        return decompressedData;
    }catch{
        return null
    }

}
