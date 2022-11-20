import React from "react";
import html2canvas from "html2canvas";
import {jsPDF} from 'jspdf';
import Button from '@material-ui/core/Button'

const DownloadPage = ({rootelementId,downloadFileName})=>{
    const downloadFileDocument = ()=>{
        const input = document.getElementById(rootelementId)
        html2canvas(input).then((canvas)=>{
            const imgData=canvas.toDataURL("image/png")
            const pdf=new jsPDF("p","pt","a2")
            pdf.addImage(imgData,"JPEG",0,0)
            pdf.save('${downloadFileName}')
        })
    }
    return (
        <div>
            <Button variant="contained" color="secondary" onClick={downloadFileDocument}>Download</Button>
        </div>

    )
}

export default DownloadPage