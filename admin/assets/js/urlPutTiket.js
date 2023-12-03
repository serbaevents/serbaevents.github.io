const urlParams = new URLSearchParams(window.location.search);
const tiketId = urlParams.get("tiketId");

export const urlPUT = "https://asia-southeast2-proven-wavelet-401905.cloudfunctions.net/getdataevent?id=" + tiketId;

export const AmbilResponse = (result) => {
  if (result.status) {
    console.log(result); // menampilkan response API pada console
    Swal.fire({
      icon: "success",
      title: "Data berhasil diubah",
      showConfirmButton: false,
      timer: 1500,
    }).then(() => {
      window.location.href = "datatiket.html";
    });
  } else {
    Swal.fire({
      icon: "error",
      title: "error",
      text: result.message,
    });
  }
};
