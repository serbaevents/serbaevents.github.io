
    async function fetchData() {
        try {
            const response = await fetch('https://asia-southeast2-proven-wavelet-401905.cloudfunctions.net/insertbus');
            const data = await response.json();

            // Manipulasi data atau tampilkan di HTML
            document.getElementById('databis').innerHTML = JSON.stringify(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
