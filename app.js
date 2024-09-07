function startScan() {
    const scanner = new Html5Qrcode("preview");
    scanner.start(
        { facingMode: "environment" }, // Camera config, use the rear camera.
        { fps: 10, qrbox: 250 },       // Optional frame configuration.
        (decodedText, decodedResult) => {
            // Handle on QR Code decoded.
            alert(`Decoded text: ${decodedText}`, decodedResult);
            // Optionally, stop the scanner if you want to.
            scanner.stop().then(() => {
                alert("Scanner stopped.");
                // Process the decoded text, e.g., send it to the server.
                alert(decodedText);
                fetch('/api/verify', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ qrCode: decodedText })
                })
                .then(response => response.json())
                .then(data => {
                    alert(data.message); // Display a message to the user.
                })
                .catch(error => {
                    alert('Error:', error);
                });
            });
        },
        (errorMessage) => {
            // Handle errors.
            alert(`QR code scan error: ${errorMessage}`);
        }
    ).catch((err) => {
        alert(`Unable to start the scanner: ${err}`);
    });
}
