function calculatePrice() {
  const ticketType = document.getElementById("ticketType").value;
  const ticketPriceField = document.getElementById("ticketPrice");

  // Set ticket prices based on the ticket type
  if (ticketType === "VIP") {
    ticketPriceField.value = "550.000";
  } else if (ticketType === "Regular") {
    ticketPriceField.value = "255.000";
  }
}

function generateTicket() {
  const username = document.getElementById("username").value;
  const ticketType = document.getElementById("ticketType").value;
  const ticketPrice = document.getElementById("ticketPrice").value;
  const ticketQuantity = document.getElementById("ticketQuantity").value;
  const notes = document.getElementById("notes").value;

  const ticketDisplay = document.getElementById("ticketDisplay");
  const ticketHTML = `
        <h2>Tiket</h2>
        <p><strong>Username:</strong> ${username}</p>
        <p><strong>Tiket:</strong> ${ticketType}</p>
        <p><strong>Harga Tiket:</strong> Rp. ${ticketPrice}</p>
        <p><strong>Jumlah Tiket:</strong> ${ticketQuantity}</p>
        <p><strong>Keterangan:</strong> ${notes}</p>
    `;

  ticketDisplay.innerHTML = ticketHTML;

  // Download the ticket as an image (you can use a library like html2canvas)
  html2canvas(ticketDisplay).then(function (canvas) {
    const imgData = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = imgData;
    link.download = "tiket_konser.png";
    link.click();
  });
}

function generateTicket() {
  const username = document.getElementById("username").value;
  const ticketType = document.getElementById("ticketType").value;
  const ticketPrice = document.getElementById("ticketPrice").value;
  const ticketQuantity = document.getElementById("ticketQuantity").value;
  const notes = document.getElementById("notes").value;

  const ticketDisplay = document.getElementById("ticketDisplay");
  const ticketHTML = `
        <div>
            <h2>Tiket</h2>
            <p><strong>Username:</strong> ${username}</p>
            <p><strong>Tiket:</strong> ${ticketType}</p>
            <p><strong>Harga Tiket:</strong> Rp. ${ticketPrice}</p>
            <p><strong>Jumlah Tiket:</strong> ${ticketQuantity}</p>
            <p><strong>Keterangan:</strong> ${notes}</p>
        </div>
    `;

  ticketDisplay.innerHTML = ticketHTML;

  // Use html2canvas to capture the content of the ticketDisplay element
  html2canvas(ticketDisplay, { backgroundColor: "#fff" }).then(function (canvas) {
    // Convert canvas to image data URL
    const imgData = canvas.toDataURL("image/png");

    // Create a link element to trigger the download
    const link = document.createElement("a");
    link.href = imgData;
    link.download = "tiket_konser.png";

    // Trigger the download
    link.click();
  });
}
