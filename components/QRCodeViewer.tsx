'use client'
import { ChangeEvent, useState } from 'react';
import QRCode from 'qrcode.react';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';

import {decodeQRData} from '@/lib/decodeQR'

function QRCodeViewer() {
    const [encodedData, setEncodedData] = useState('');
    const [decodedData, setDecodedData] = useState('');

    const decode_QR = (data:string) => {
        
        let decoded = decodeQRData(data)
        decoded = decoded ? JSON.parse(decoded) : decoded
        return decoded
    }

    const handleQRInput = (e : ChangeEvent<HTMLTextAreaElement>) => {
        setEncodedData(e.target.value)
        setDecodedData(decode_QR(e.target.value))
    }

    return (
        <div className='flex flex-col gap-5'>
            <div>
                <Label className="text-center text-1xl leading-tight tracking-tighter md:text-1xl">
                    Enter Encoded QR Code Data:</Label>
                <Textarea
                    value={encodedData}
                    onChange={handleQRInput}
                    rows={4}
                    cols={50}
                />
            </div>
            <div >
                {decodedData && <QRCode value={encodedData} />}
                {decodedData ? 
                <pre>{JSON.stringify(decodedData,null,2)}</pre> :
                encodedData && <h3 className="text-center text-1xl font-bold leading-tight tracking-tighter text-red-400 md:text-1xl">Invalid QR Code</h3>
                }
            </div>
        </div>
    );
}

export default QRCodeViewer;
