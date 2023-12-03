const urlParams = new URLSearchParams(window.location.search);
const tiketId = urlParams.get("tiketId");

export const urlFetch =
  "https://asia-southeast2-proven-wavelet-401905.cloudfunctions.net/getdataevent?id=" +
  tiketId;
//isi dengan url gcf get tiket by id