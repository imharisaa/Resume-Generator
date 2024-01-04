import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export const generatePDF = (pdfRef) => {
    const input = pdfRef.current;
    debugger

    html2canvas(input).then((canvas) => {
        debugger

        canvas.style.fontSmooth = 'always';
        const imgData = canvas.toDataURL('image/png');
        // const pdf = new jsPDF('p', 'mm', 'a4', true);
        const pdf = new jsPDF({
            orientation: 'portrait', // or 'landscape'
            unit: 'mm', // Use a smaller unit for higher resolution
            format: 'a4', // or an array of [width, height] in units
            precision: 20, // Higher precision for better resolution
        })
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
        const imgWidth = canvas.width;
        const imgHeight = canvas.height;
        const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
        const imgX = (pdfWidth - imgWidth * ratio) / 2;
        const imgY = 0;
        pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
        pdf.save('Cv.pdf')
    })
}

function cloneStyles(element, clone) {
    const styles = getComputedStyle(element);
    for (let i = 0; i < styles.length; i++) {
        const prop = styles[i];
        clone.style[prop] = styles[prop];
    }
}

function copyChildrenStyles(sourceElement, targetElement) {
    const sourceChildren = sourceElement.children;
    const targetChildren = targetElement.children;

    for (let i = 0; i < sourceChildren.length; i++) {
        const sourceChild = sourceChildren[i];
        const targetChild = targetChildren[i];

        cloneStyles(sourceChild, targetChild);
        copyChildrenStyles(sourceChild, targetChild);
    }
}




export const printPage = (divId) => {
    const divElement = document.getElementById(divId);
    const divContent = divElement.innerHTML;

    const printWindow = window.open('', '_blank');
    printWindow.document.open();
    printWindow.document.write(`
        <html>
        <head>
            <title>Print Preview</title>
            <style>
                body {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: fit-content;
                    margin: 0;
                    padding: 0;
                }
            </style>
        </head>
        <body>${divContent}</body>
        </html>
    `);
    printWindow.document.close();

    // Clone and apply computed styles for children elements
    const sourceChildren = divElement.children;
    const targetChildren = printWindow.document.body.children;
    for (let i = 0; i < sourceChildren.length; i++) {
        const sourceChild = sourceChildren[i];
        const targetChild = targetChildren[i];
        cloneStyles(sourceChild, targetChild);
        copyChildrenStyles(sourceChild, targetChild);
    }

    printWindow.print();

}

// https://pakistanconsulatebradford.com/assets/main-page-logo.png