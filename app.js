function startScan() {
    const scanner = new Html5Qrcode("reader", { formatsToSupport: [Html5QrcodeSupportedFormats.QR_CODE] });
    
    const qrCodeSuccessCallback = (decodedText, decodedResult) => {
        // Here you can handle the decoded text and result, showing an alert or updating the DOM
        alert(`Decoded Text: ${decodedText}`);
        console.log(decodedResult);
    };

    const config = {
        fps: 10, // frames per second, adjust as needed for performance vs. responsiveness
        qrbox: { width: 250, height: 250 } // Set QR box size, scanning area within the video frame
    };

    scanner.start({ facingMode: "environment" }, config, qrCodeSuccessCallback)
        .catch((err) => {
            // Handle errors in case the camera was not accessible or no device supporting the specified configuration was found
            console.error(`Error starting QR scanner: ${err}`);
            alert(`Error starting QR scanner: ${err}`);
        });
}
