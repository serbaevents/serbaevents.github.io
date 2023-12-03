import { getValue } from "https://jscroot.github.io/element/croot.js";

function postSignUpPengguna(target_url, datajson, responseFunction) {
  var raw = JSON.stringify(datajson);

  var requestOptions = {
    method: "POST",
    body: raw,
    redirect: "follow",
  };

  fetch(target_url, requestOptions)
    .then((response) => response.text())
    .then((result) => responseFunction(JSON.parse(result)))
    .catch((error) => console.log("error", error));
}

const SignUpPengguna = () => {
    const target_url =
    "https://asia-southeast2-proven-wavelet-401905.cloudfunctions.net/testinsertb";

  const datainjson = {
    jemputan: getValue("jemputan"),
    keterangan: getValue("keterangan"),
    harga: getValue("harga"),
    tujuaneven: getValue("tujuaneven"),
  };
  console.log(datainjson);
  postSignUpPengguna(target_url, datainjson, responseData);
};

const responseData = (result) => {
  if (result.status) {
    Swal.fire({
      icon: "success",
      title: "Sign Up Successful",
      text: result.message,
    }).then(() => {
      window.location.href = "../signin.html";
    });
  } else {
    Swal.fire({
      icon: "error",
      title: "Sign Up Failed",
      text: result.message,
    });
  }
};

window.SignUpPengguna = SignUpPengguna;