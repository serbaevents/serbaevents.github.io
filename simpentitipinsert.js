import { postWithToken } from "https://jscroot.github.io/api/croot.js";
import { getValue } from "https://jscroot.github.io/element/croot.js";
import { getCookie } from "https://jscroot.github.io/cookie/croot.js";

const postTambahTiket = () => {
  const target_url = "https://asia-southeast2-proven-wavelet-401905.cloudfunctions.net/testinsertb";
  const tokenvalue = getCookie("Authorization");
  const tokenkey = "Authorization";
  const datainjson = {
    tujuaneven: getValue("tujuaneven"),
    jemputan: getValue("jemputan"),
    keterangan: getValue("keterangan"),
    harga: getValue("harga"),
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
      window.location.href = "waitinglist.html";
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

window.postTambahTiket = postTambahTiket;
