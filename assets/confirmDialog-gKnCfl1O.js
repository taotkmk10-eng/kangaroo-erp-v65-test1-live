import{i as e}from"./realtimeImpactRegistry-BgzWm3W7.js";var t=null;function n(){let e=document.querySelector(`#shared-confirm-dialog`);return e||(e=document.createElement(`dialog`),e.id=`shared-confirm-dialog`,e.className=`shared-confirm-dialog`,e.innerHTML=`
    <form
      method="dialog"
      class="shared-confirm-dialog__panel"
    >
      <div class="shared-confirm-dialog__content">
        <h2 data-confirm-title></h2>
        <p data-confirm-message></p>
      </div>

      <div class="shared-confirm-dialog__actions">
        <button
          type="button"
          class="shared-confirm-dialog__button"
          data-confirm-cancel
        ></button>

        <button
          type="button"
          class="shared-confirm-dialog__button is-primary"
          data-confirm-accept
        ></button>
      </div>
    </form>
  `,document.body.appendChild(e),e)}function r({title:r=`Xác nhận`,message:i=``,confirmLabel:a=`Xác nhận`,cancelLabel:o=`Hủy`,tone:s=`default`}={}){let c=n();t&&t();let l=c.querySelector(`[data-confirm-title]`),u=c.querySelector(`[data-confirm-message]`),d=c.querySelector(`[data-confirm-accept]`),f=c.querySelector(`[data-confirm-cancel]`);return l.textContent=r,u.textContent=i,d.textContent=a,f.textContent=o,d.classList.toggle(`is-danger`,s===`danger`),new Promise(n=>{let r=!1,i=i=>{r||(r=!0,e(),t===o&&(t=null),d.removeEventListener(`click`,a),f.removeEventListener(`click`,o),c.removeEventListener(`cancel`,o),c.removeEventListener(`click`,s),c.open&&c.close(),n(i))},a=()=>i(!0),o=e=>{e?.preventDefault(),i(!1)},s=e=>{e.target===c&&(e.preventDefault(),e.stopPropagation())};t=o,d.addEventListener(`click`,a),f.addEventListener(`click`,o),c.addEventListener(`cancel`,o),c.addEventListener(`click`,s);try{c.showModal(),d.focus()}catch{i(!1)}})}export{r as t};