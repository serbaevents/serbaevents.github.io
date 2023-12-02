import data from "../json/isipropo.json" assert { type: "json" };
import { setInner } from "https://jscroot.github.io/element/croot.js";

setInner("desap", data.desap);
setInner("isidesap", data.isidesap);

setInner("latarblakang", data.isi.latarblakang);
setInner("isilatar1", data.isi.isilatar1);
setInner("isilatar2", data.isi.isilatar2);
setInner("jdltujuan", data.isi.jdltujuan);
setInner("tujuan", data.isi.tujuan);
setInner("jdllingkup", data.isi.jdllingkup);
setInner("isilingkup", data.isi.isilingkup);

setInner("jdlkesimpulan", data.isi.jdlkesimpulan);
setInner("kesimpulan1", data.isi.kesimpulan1);
setInner("kesimpulan2", data.isi.kesimpulan2);





