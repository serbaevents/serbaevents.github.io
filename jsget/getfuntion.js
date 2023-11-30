import { get } from "https://jscroot.github.io/api/croot.js";
import {setInner,addChild } from "https://jscroot.github.io/element/croot.js";

export let URLGeoJson = "https://asia-southeast2-proven-wavelet-401905.cloudfunctions.net/insertbus";
export let tableTag="tr";
export let tableRowClass="content is-small";
export let tableTemplate=`
<td>#TYPE#</td>
<td>#NAME#</td>
<td>#KORDINAT#</td>
`

export function responseData(results){
    console.log(results);
    results.forEach(isiRow);
}

export function isiRow(value) {
    let content = tableTemplate
        .replace("#TYPE#", value.nokursi)
        .replace("#NAME#", value.jemputan)
        .replace("#KORDINAT#", value.jamgo);
    console.log(content);
    addChild("databis", tableTag, tableRowClass, content);
}
