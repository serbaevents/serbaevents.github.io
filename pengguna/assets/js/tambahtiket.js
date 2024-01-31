import { postWithToken } from "https://jscroot.github.io/api/croot.js";

const postTambahTiket = () => {
  const target_url = "https://asia-southeast2-proven-wavelet-401905.cloudfunctions.net/testinsertb";
  const tokenvalue = getCookie("Authorization");
  const tokenkey = "Authorization";
  const tujuaneven = document.getElementById("tujuaneven");
  const jemputan = document.getElementById("jemputan");
  const harga = document.getElementById("harga");
  const keterangan = document.getElementById("keterangan");
  const datainjson = {
    tujuaneven: tujuaneven.options[tujuaneven.selectedIndex].value,
    jemputan: jemputan.options[jemputan.selectedIndex].value,
    keterangan: keterangan.options[keterangan.selectedIndex].value,
    harga: harga.options[harga.selectedIndex].value,
  };
  postWithToken(target_url, tokenkey, tokenvalue, datainjson, responseData);
  console.log(datainjson);
};

const responseData = (result) => {
  if (result.status) {
    Swal.fire({
      icon: "success",
      title: "Insert Successful",
      text: result.message,
    }).then(() => {
      // Redirect to the success URL
      window.location.href = "../waitinglist.html";
    });
  } else {
    Swal.fire({
      icon: "error",
      title: "Insert Failed",
      text: result.message,
    }).then(() => {
      // Reload the page on failure
      window.location.reload();
    });
  }
};

// Add event listener to the submit button
window.postTambahTiket = postTambahTiket;

// Get the cookie function from the external file
import { getCookie } from "https://jscroot.github.io/cookie/croot.js";
window.getCookie = getCookie;

// Make sure the getCookie function is accessible from the global scope
window.getCookie = getCookie;