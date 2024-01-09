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




// export const printPage = (divId) => {
//     const divElement = document.getElementById(divId);
//     const divContent = divElement.innerHTML;

//     const printWindow = window.open('', '_blank');
//     printWindow.document.open();
//     printWindow.document.write(`
//         <html>
//         <head>
//             <title>Print Preview</title>
//             <style>
//                 body {
//                     display: flex;
//                     justify-content: center;
//                     align-items: center;
//                     height: fit-content;
//                     margin: 0;
//                     padding: 0;
//                 }
//                 @page {
//                     size: 'A4';
//                     margin: 0;

//                   }

//                   @media print {
//                     * {
//                         color-adjust: exact !important;
//                         -webkit-print-color-adjust: exact !important;
//                         print-color-adjust: exact !important;
//                     }
//                   }
//             </style>
//         </head>
//         <body>${divContent}</body>
//         </html>
//     `);
//     printWindow.document.close();

//     // Clone and apply computed styles for children elements
//     const sourceChildren = divElement.children;
//     const targetChildren = printWindow.document.body.children;
//     for (let i = 0; i < sourceChildren.length; i++) {
//         const sourceChild = sourceChildren[i];
//         const targetChild = targetChildren[i];
//         cloneStyles(sourceChild, targetChild);
//         copyChildrenStyles(sourceChild, targetChild);
//     }

//     printWindow.print();

// }

function getHTMLContentById(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        return element.outerHTML;
    } else {
        console.error(`Element with ID '${elementId}' not found.`);
        return null;
    }
}

// Function to extract font information from an HTML element
function extractFontInfo(element) {
    const computedStyle = window.getComputedStyle(element);
    return {
        fontFamily: computedStyle.fontFamily,
        fontStyle: computedStyle.fontStyle,
        fontWeight: computedStyle.fontWeight,
        // Add more font-related properties as needed (e.g., fontSize, lineHeight, etc.)
    };
}

// Function to recursively traverse through the DOM and extract font information
function traverseAndExtractFonts(node, fontMap) {
    if (node.nodeType === Node.ELEMENT_NODE) {
        const fontInfo = extractFontInfo(node);
        if (fontInfo.fontFamily) {
            fontMap[node.nodeName] = fontInfo;
        }
        const children = node.childNodes;
        for (let i = 0; i < children.length; i++) {
            traverseAndExtractFonts(children[i], fontMap);
        }
    }
}





export const printPage = (divId) => {
    debugger
    const htmlContent = getHTMLContentById(divId)
    // const fontsMap = {}; // Replace with the fonts object obtained from the client

    

    
    // const parsedHTML = new DOMParser().parseFromString(htmlContent, 'text/html');
    // traverseAndExtractFonts(parsedHTML.body, fontsMap);

    // Assuming 'htmlContent' variable contains HTML content from the client
    const requestData = {
        htmlContent: htmlContent , // Replace with the HTML content from the client
        fontURLs: ['https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap'],
      };

    fetch('http://localhost:7000/generate-pdf', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData),
    })
      .then(response => response.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'generated.pdf';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
      })
      .catch(error => console.error('Error:', error));
}

// https://pakistanconsulatebradford.com/assets/main-page-logo.png


