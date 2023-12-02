import { postWithToken } from "https://jscroot.github.io/api/croot.js";
import { setInner, getValue } from "https://jscroot.github.io/element/croot.js";
import { setCookieWithExpireHour } from "https://jscroot.github.io/cookie/croot.js";

export default function PostSignUp() {
    let target_url = "https://asia-southeast2-proven-wavelet-401905.cloudfunctions.net/bdevent";
    let tokenkey = "token";
    let tokenvalue = "18d0c9a7c3db13200a9aab5267a7a1a31cde6499af04f934d255b373ce360a8f";
    let datainjson = {
        "username": getValue("username"),
        "password": getValue("password")
    }

    postWithToken(target_url,tokenkey,tokenvalue,datainjson,responseData);
}


function responseData(result) {

    // setInner("pesan", result.message);
    if (result.message == "Selamat Datang") {
        setCookieWithExpireHour("token", result.token, 2);
        alert("Login Successfully " + result.message)
        window.location.href = "dashboard.html";
    } else {
        alert("Gagal Masuk " + "wrong username or password")
        console.log(result.message);
    }
}

// function setCookieWithExpireHour(cname, cvalue, exhour) {
//     const d = new Date();
//     d.setTime(d.getTime() + (exhour * 60 * 60 * 1000));
//     let expires = "expires=" + d.toUTCString();
//     document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/" + "secure; HttpOnly; samesite=Strict";
//     // Set-Cookie: id=a3fWa; Expires=Thu, 21 Oct 2021 07:28:00 GMT; Secure; HttpOnly; SameSite=Strict
// }