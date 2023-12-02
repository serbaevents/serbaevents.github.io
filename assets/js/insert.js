import data from "../json/data.json" assert { type: "json" };
import { setInner } from "https://jscroot.github.io/element/croot.js";

setInner("greeting", data.greeting);
setInner("deskripsi", data.deskripsi);
setInner("about", data.about);
setInner("isiabou", data.isiabou);

