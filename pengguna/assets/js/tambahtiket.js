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

  // Create the HTML elements
  const container = document.createElement("div");
  container.classList.add("mb-3", "row");

  const label = document.createElement("label");
  label.setAttribute("for", "nama_tiket");
  label.classList.add("col-sm-3", "col-form-label");
  label.textContent = "Tujuan Event";

  const selectContainer = document.createElement("div");
  selectContainer.classList.add("col-sm-9");

  const select = document.createElement("select");
  select.classList.add("form-select");
  select.id = "tujuaneven";

  // Add the options to the select element
  const option1 = document.createElement("option");
  option1.value = "lokasi1";
  option1.textContent = "Pilih Tujuan Event";
  select.appendChild(option1);

  const option2 = document.createElement("option");
  option2.value = "option1";
  option2.textContent = "Adam's Family Musical";
  select.appendChild(option2);

  const option3 = document.createElement("option");
  option3.value = "option2";
  option3.textContent = "Magical Kecak Dance";
  select.appendChild(option3);

  const option4 = document.createElement("option");
  option4.value = "option3";
  option4.textContent = "IVE 1ST CONCERT WORLD TOUR";
  select.appendChild(option4);

  const option5 = document.createElement("option");
  option5.value = "option3";
  option5.textContent = "Marketers Tech For Business";
  select.appendChild(option5);

  // Append the select element to the container
  selectContainer.appendChild(select);
  container.appendChild(label);
  container.appendChild(selectContainer);

  // Append the container to the desired location in the document
  document.body.appendChild(container);

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

window.postTambahTiket = postTambahTiket;
