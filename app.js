function startScan() {
    const scanner = new Html5Qrcode("reader", { formatsToSupport: [Html5QrcodeSupportedFormats.QR_CODE] });

    const qrCodeSuccessCallback = (decodedText, decodedResult) => {
        alert(`Decoded Text: ${decodedText}`);
        console.log(decodedResult);
    };

    const config = {
        fps: 10,
        qrbox: { width: 250, height: 250 }
    };

    setTimeout(() => {
        scanner.start({ facingMode: "environment" }, config, qrCodeSuccessCallback)
            .catch((err) => {
                console.error(`Error starting QR scanner: ${err}`);
                alert(`Error starting QR scanner: ${err}`);
            });
    }, 2000); // Delay scanning for 1000 ms to ensure the video stream is ready
}
