import { addInner, hide } from "https://jscroot.github.io/element/croot.js";

export const URLGetProfilePengguna =
  "https://asia-southeast2-proven-wavelet-401905.cloudfunctions.net/getpengguna";

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
                        <label for="#NAMALENGKAP#" class="form-label"><strong>Full Name</strong></label>
                        <p class="card-text">#NAMALENGKAP#</p>
                      </div>
                      <div class="mb-3">
                        <label for="#TANGGALLAHIR#" class="form-label"><strong>Date of Birth</strong></label>
                        <p class="card-text">#TANGGALLAHIR#</p>
                      </div>
                      <div class="mb-3">
                        <label for="#GENDER#" class="form-label"><strong>Gender</strong></label>
                        <p class="card-text">#GENDER#</p>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="mb-3">
                        <label for="#NOMORHP#" class="form-label"><strong>Phone Number</strong></label>
                        <p class="card-text">#NOMORHP#</p>
                      </div>
                      <div class="mb-3">
                        <label for="#ALAMAT#" class="form-label"><strong>Address</strong></label>
                        <p class="card-text">#ALAMAT#</p>
                      </div>
                      <div class="mb-3">
                        <label for="#EMAIL#" class="form-label"><strong>Email</strong></label>
                        <p class="card-text">#EMAIL#</p>
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
    .replace("#NAMALENGKAP#", value.namalengkap)
    .replace("#TANGGALLAHIR#", value.tanggallahir)
    .replace("#GENDER#", value.jeniskelamin)
    .replace("#NOMORHP#", value.nomorhp)
    .replace("#ALAMAT#", value.alamat)
    .replace("#EMAIL#", value.akun.email)
  addInner("profilePengguna", content);
}