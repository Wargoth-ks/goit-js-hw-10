const e={listCats:document.querySelector(".breed-select"),catInfo:document.querySelector(".cat-info"),catLoader:document.querySelector(".loader"),catError:document.querySelector(".error")},{BASE_URL:n,API_KEY:t}={BASE_URL:"https://api.thecatapi.com/v1",API_KEY:""},{catLoader:r,listCats:a}=e;async function d(e){r.hidden=!1,a.hidden=!0;const d=await fetch(`${n}/images/search?breed_ids=${e}&api_key=${t}`);if(!d.ok)throw new Error(d.statusText);return await d.json()}const{listCats:o,catError:i,catLoader:c,catInfo:s}=e;o.hidden=!0,i.hidden=!0,c.hidden=!1,async function(){const e=await fetch(`${n}/breeds`);if(!e.ok)throw new Error(e.statusText);return await e.json()}().then((e=>{c.hidden=!0,o.hidden=!1,o.insertAdjacentHTML("beforeend",e.map((({id:e,name:n})=>`<option value=${e}>\n                ${n}\n            </option>`)).join(""))})).catch((e=>{i.hidden=!1,c.hidden=!0,console.dir(e)})),o.addEventListener("change",(function(e){s.innerHTML="";d(e.currentTarget.value).then((e=>{const n=e[0].breeds;c.hidden=!0,o.hidden=!1,s.insertAdjacentHTML("beforeend",n.map((({name:e,description:n,temperament:t,reference_image_id:r})=>`<h2>${e}</h2>\n            <p>${n}</p>\n            <p>Temperament: ${t}</p>\n            <img src="${r}" alt="${r}">`)).join(""))})).catch((e=>{i.hidden=!1,c.hidden=!0,console.dir(e)}))}));
//# sourceMappingURL=index.65c6cd28.js.map
