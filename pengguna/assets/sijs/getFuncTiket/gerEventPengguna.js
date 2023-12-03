import { addInner, hide } from "https://jscroot.github.io/element/croot.js";

export const URLGetProfilePengguna =
  "https://asia-southeast2-proven-wavelet-401905.cloudfunctions.net/GetOrderTiket";

export const dataPengguna = `
<section id="contact" class="contact">
<div class="container" data-aos="fade-up">
    <div>
        <div class="card shadow-lg">
            <div class="card-header bg-primary text-white">
                <h4 class="m-0">Personal Information</h4>
            </div>
            <div class="card-body">
                <div class="row">
                    <div class="col-md-6">
                      <div class="mb-3">
                        <label for="#TUJUANEVEN#" class="form-label"><strong>Full Name</strong></label>
                        <p class="card-text">#TUJUANEVEN#</p>
                      </div>
                      <div class="mb-3">
                        <label for="#JEMPUTAN#" class="form-label"><strong>Gender</strong></label>
                        <p class="card-text">#JEMPUTAN#</p>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="mb-3">
                        <label for="#HARGA#" class="form-label"><strong>Address</strong></label>
                        <p class="card-text">#ALAMAT#</p>
                      </div>
                      <div class="mb-3">
                        <label for=#KETERANGAN#" class="form-label"><strong>Email</strong></label>
                        <p class="card-text">#KETERANGAN#</p>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</section>

`;

export function responseDataProfile(results) {
  console.log(results);
  isiRow(results);
  hide("skeletonLoader");
}

export function isiRow(value) {
  const content = dataPengguna
    .replace("#TUJUANEVEN#", value.tujuaneven)
    .replace("#JEMPUTAN#", value.jemputan)
    .replace("#HARGA#", value.harga)
    .replace("#KETERANGAN#", value.keterangan)
  addInner("profilePengguna", content);
}