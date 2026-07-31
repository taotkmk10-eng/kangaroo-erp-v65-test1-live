import{t as e}from"./runtimeBus-2EJwbL_u.js";import{a as t,n,o as r,r as i,t as a}from"./searchRuntime-CHhHjD_4.js";import{a as o,i as s,n as c,r as l,t as ee}from"./actionLock-BTZKYVnA.js";import{t as te}from"./runtimeCore-t2AnId75.js";function ne(){return r(`rpc_get_tao_don_bootstrap`,{},`Không tải được dữ liệu khởi tạo Tạo đơn`)}function re({search:e=null,limit:t=20}={}){return r(`rpc_search_tao_don_customers`,{p_search:String(e??``).trim()||null,p_limit:Math.max(1,Number(t)||20)},`Không tìm được khách hàng`)}function ie({search:e=null,categoryId:t=null,limit:n=30}={}){return r(`rpc_search_tao_don_products`,{p_search:String(e??``).trim()||null,p_id_danh_muc:t||null,p_limit:Math.max(1,Number(n)||30)},`Không tìm được sản phẩm`)}function ae(e,t){return r(`rpc_tao_khach_hang`,{p_request_key:t,p_payload:e},`Không tạo được khách hàng`)}function oe(e,t){return r(`rpc_sua_khach_hang`,{p_request_key:t,p_payload:e},`Không sửa được khách hàng`)}function se(e,t){return r(`rpc_tao_don`,{p_request_key:t,p_payload:e},`Không tạo được đơn hàng`)}function u(e={}){return e.name||e.ten_san_pham||e.product?.ten_san_pham||e.product?.model||`Sản phẩm`}function d(e={}){return Math.max(1,o(e.quantity??e.so_luong??1))}function f(e={}){return Math.max(0,o(e.unitPrice??e.don_gia??0))}function p(e={}){return Math.max(0,o(e.amount??e.thanh_tien??d(e)*f(e)))}function m(e={}){let t=Array.isArray(e.lines)?e.lines:[],n=o(e.subtotal??t.reduce((e,t)=>e+p(t),0)),r=o(e.shipping),i=o(e.install),a=o(e.vatAmount),s=o(e.total??n+r+i+a),c=o(e.paid);return{title:e.title||`PHIẾU BÁN HÀNG`,code:e.code||``,createdAt:e.createdAt||new Date,customer:{name:e.customer?.name||`Khách lẻ`,phone:e.customer?.phone||``,address:e.customer?.address||``,note:e.customer?.note||``},orderNote:String(e.orderNote??``).trim(),warrantyMonths:o(e.warrantyMonths),lines:t,subtotal:n,shipping:r,install:i,vatPercent:o(e.vatPercent),vatAmount:a,total:s,paid:c,remaining:Math.max(s-c,0)}}function h(e,n,r=``){return`
    <div class="sales-document-money-row ${r}">
      <span>${t(e)}</span>
      <strong>${t(l(n))}</strong>
    </div>
  `}function ce(e={},{printMode:n=!1}={}){let r=m(e);return`
    <article class="sales-document ${n?`is-print`:``}">
      <header class="sales-document-header">
        <h1>${t(r.title)}</h1>
        <p>
          ${r.code?`Mã đơn: ${t(r.code)}`:``}
          ${r.code?` · `:``}
          ${t(c(r.createdAt,``))}
        </p>
      </header>

      <section class="sales-document-customer">
        <div><span>Khách hàng</span><strong>${t(r.customer.name)}</strong></div>
        ${r.customer.phone?`<div><span>Số điện thoại</span><strong>${t(r.customer.phone)}</strong></div>`:``}
        ${r.customer.address?`<div><span>Địa chỉ</span><strong>${t(r.customer.address)}</strong></div>`:``}
        ${r.customer.note?`<div><span>Ghi chú khách hàng</span><strong>${t(r.customer.note)}</strong></div>`:``}
        ${r.orderNote?`<div><span>Ghi chú đơn</span><strong>${t(r.orderNote)}</strong></div>`:``}
        <div><span>Bảo hành</span><strong>${t(`${r.warrantyMonths} tháng`)}</strong></div>
      </section>

      <section class="sales-document-lines">
        ${r.lines.map(e=>`
          <div class="sales-document-line">
            <strong>${t(u(e))}</strong>
            <span>
              ${t(String(d(e)))} ×
              ${t(l(f(e)))} =
              ${t(l(p(e)))}
            </span>
          </div>
        `).join(``)}
      </section>

      <section class="sales-document-totals">
        ${h(`Tạm tính`,r.subtotal)}
        ${r.shipping>0?h(`Phí vận chuyển`,r.shipping):``}
        ${r.install>0?h(`Phí lắp đặt`,r.install):``}
        ${r.vatAmount>0?h(`VAT ${r.vatPercent}%`,r.vatAmount):``}
        ${h(`Tổng đơn`,r.total,`is-total`)}
        ${h(`Đã thanh toán`,r.paid)}
        ${h(`Cần thanh toán`,r.remaining,`is-remaining`)}
      </section>

      <footer class="sales-document-footer">
        Cảm ơn quý khách và hẹn gặp lại.
      </footer>
    </article>
  `}function g(){return`
    *{box-sizing:border-box}body{margin:0;padding:12px;font-family:Arial,sans-serif;color:#111;background:#fff}
    .sales-document{max-width:760px;margin:0 auto;border:1px solid #d1d5db;padding:16px}
    .sales-document-header{text-align:center;border-bottom:1px solid #d1d5db;padding-bottom:10px}.sales-document-header h1{margin:0;font-size:21px}.sales-document-header p{margin:5px 0 0;font-size:12px;color:#4b5563}
    .sales-document-customer{padding:10px 0;border-bottom:1px solid #d1d5db}.sales-document-customer div,.sales-document-money-row{display:grid;grid-template-columns:140px minmax(0,1fr);gap:12px;padding:3px 0;font-size:13px}.sales-document-customer strong{text-align:right}
    .sales-document-line{padding:9px 0;border-bottom:1px solid #e5e7eb}.sales-document-line strong{display:block;font-size:14px}.sales-document-line span{display:block;margin-top:4px;font-size:13px}
    .sales-document-totals{margin-top:8px;margin-left:auto;max-width:340px}.sales-document-money-row{grid-template-columns:1fr auto}.sales-document-money-row.is-total{font-size:15px;border-top:1px solid #111;margin-top:4px;padding-top:7px}.sales-document-money-row.is-remaining strong{font-weight:800}
    .sales-document-footer{text-align:center;margin-top:14px;padding-top:10px;border-top:1px solid #d1d5db;font-size:12px}
    @media print{body{padding:0}.sales-document{border:0;max-width:none}}
  `}function le(e={}){let n=window.open(``,`_blank`,`width=840,height=920`);if(!n)return!1;let r=m(e);return n.document.open(),n.document.write(`<!doctype html><html><head><meta charset="utf-8"><title>${t(r.code||r.title)}</title><style>${g()}</style></head><body>${ce(r,{printMode:!0})}<script>window.onload=()=>setTimeout(()=>window.print(),80);<\/script></body></html>`),n.document.close(),!0}var _=Object.freeze([[`GIA_BAN_LE`,`Giá bán lẻ`,`gia_ban_le`],[`GIA_BAN_1`,`Giá bán 1`,`gia_ban_1`],[`GIA_BAN_2`,`Giá bán 2`,`gia_ban_2`],[`GIA_BAN_3`,`Giá bán 3`,`gia_ban_3`],[`GIA_BAN_4`,`Giá bán 4`,`gia_ban_4`],[`GIA_BAN_5`,`Giá bán 5`,`gia_ban_5`]]),ue=Object.freeze([0,3,6,12,18,24]),de=Object.freeze([0,5e4,1e5,2e5,3e5,4e5]),fe=Object.freeze([{key:`GIAO_XONG_THU_LUON`,label:`Giao xong thu luôn`},{key:`THU_HO_COD`,label:`Thu hộ`},{key:`NGUOI_BAN_TU_THU`,label:`Người bán tự thu`}]);function v(e){let t=String(e??``).replace(/[^\d-]/g,``),n=Number.parseInt(t||`0`,10);return Number.isFinite(n)?n:0}function y(e){return String(e??``).normalize(`NFD`).replace(/\p{Diacritic}/gu,``).toLocaleLowerCase(`vi-VN`).trim()}function b(e){let t=Number(e?.so_luong_con_lai);return Number.isFinite(t)?Math.max(0,Math.trunc(t)):0}function x(e){return e?.het_hang===!0||b(e)<=0}function pe(e){return _.map(([t,n,r])=>{let i=e?.prices?.[r];if(i==null||i===``)return null;let a=Number(i);return!Number.isFinite(a)||a<0?null:{key:t,label:n,value:a}}).filter(Boolean)}function S(e){let t=pe(e);return t.find(e=>e.key===`GIA_BAN_LE`)??t[0]??null}function me(e){let t=S(e);return!t||x(e)?null:{key:`stock:${e.id_san_pham}`,product:e,priceType:t.key,listPrice:t.value,unitPrice:t.value,quantity:1}}function he(e){return{...e,product:e.product}}function ge(){return{loaiDon:`GIAO_HANG`,phiVanChuyen:0,phiLapDat:0,vatPercent:0,paid:0,warrantyMonths:null,collectionType:`GIAO_XONG_THU_LUON`,serviceFee:0,note:``}}function _e(e){let t=Math.max(0,Number(e)||0);return t===0?`0`:`${Math.round(t/1e3)}k`}function ve(e){let t=e?new Date(e):new Date;return Number.isNaN(t.getTime())?`Theo thời gian máy chủ`:new Intl.DateTimeFormat(`vi-VN`,{hour:`2-digit`,minute:`2-digit`,day:`numeric`,month:`numeric`,year:`numeric`}).format(t)}function C(e){return e?.data?.customer??e?.data?.khach_hang??e?.customer??e?.khach_hang??null}function ye(e){return e?.entity_id??e?.id_don_hang??null}function be(e){return e?.sdt?.trim()||`Chưa có số điện thoại`}function xe(e){return e?.dia_chi?.trim()||`Chưa có địa chỉ`}function w(e){let t=String(e??``).trim();if(!t)return``;let n=t.startsWith(`+`),r=t.replace(/\D/g,``);return n?`+${r}`:r}function T(e,t){return y(e)===y(t)}var E={id:`tao-don`,label:`Tạo đơn`,shortLabel:`TĐ`,render(r,o={}){let c={catalog:null,busy:!1,orderCode:null,phoneLookupTimer:null,phoneLookupToken:0,customerSearchRequestId:0,productSearchRequestId:0,customerSearchCache:new Map,productSearchCache:new Map,customerSearchLoading:!1,productSearchLoading:!1,customerSearchError:``,productSearchError:``,customerResults:[],productResults:[],error:null,screen:`loading`,customer:null,customerDraft:{name:`Khách lẻ`,phone:``,address:``,note:``},customerConflict:null,editingCustomer:null,lines:[],productDraft:[],search:``,order:ge(),createCustomerRequestKey:null,updateCustomerRequestKey:null,createOrderRequestKey:null,submittedDocument:null,createdOrderResponse:null},u=ee(),d=n();function f(){function e(e){let t=e.target.closest(`input, textarea`);!t||t.readOnly||t.disabled||requestAnimationFrame(()=>{try{t.select()}catch{}})}function t(e){let t=e.target.closest(`input, textarea`);t&&document.activeElement===t&&e.preventDefault()}function n(e){let t=e.target.closest(`[data-money-field]`);if(!t)return;let n=Math.max(0,v(t.value));t.dataset.rawValue=String(n),t.value=s(n)}return r.addEventListener(`focusin`,e),r.addEventListener(`pointerup`,t),r.addEventListener(`input`,n),()=>{r.removeEventListener(`focusin`,e),r.removeEventListener(`pointerup`,t),r.removeEventListener(`input`,n)}}let p=f();function m(){return typeof o?.isActive!=`function`||o.isActive()}let h=te({key:`tao-don-bootstrap`,runtime:o,initialData:null,load(){return ne()},normalize(e){return{...e&&typeof e==`object`?e:{},customers:Array.isArray(e?.customers)?e.customers:[],products:[]}}});function g(e){return String(e??``).trim().toLocaleLowerCase(`vi`)}function _(e,t,n,r){let i=Date.now(),a=e.get(t);if(a&&a.expiresAt>i)return a.promise;e.delete(t);let o={expiresAt:i+n,promise:null};return o.promise=Promise.resolve().then(r).catch(n=>{throw e.get(t)===o&&e.delete(t),n}),e.set(t,o),o.promise}function y(e={}){let t=JSON.stringify([g(e?.search),Math.max(1,Number(e?.limit)||20)]);return _(c.customerSearchCache,t,6e4,()=>re(e))}function pe(e={}){let t=JSON.stringify([g(e?.search),String(e?.categoryId??``).trim(),Math.max(1,Number(e?.limit)||30)]);return _(c.productSearchCache,t,15e3,()=>ie(e))}async function E(...e){let t=await ae(...e);return c.customerSearchCache.clear(),t}async function Se(...e){let t=await oe(...e);return c.customerSearchCache.clear(),t}async function Ce(...e){let t=await se(...e);return c.productSearchCache.clear(),t}let D=a({debounceMs:350,isActive:m,onApply(e){return ot(e)}}),O=a({debounceMs:350,isActive:m,onApply(e){return ut(e)}});o?.onCleanup?.(()=>{c.customerSearchRequestId+=1,c.productSearchRequestId+=1,c.phoneLookupToken+=1,c.customerSearchCache.clear(),c.productSearchCache.clear(),Ke&&=(r.removeEventListener(`submit`,qe),r.removeEventListener(`click`,$e),!1),tt&&=(r.removeEventListener(`change`,nt),r.removeEventListener(`input`,rt),!1),D.dispose(),O.dispose(),c.phoneLookupTimer&&=(clearTimeout(c.phoneLookupTimer),null),p()});function k(e){r.dispatchEvent(new CustomEvent(`kangaroo:page-chrome`,{bubbles:!0,detail:e}))}function we(){return(c.catalog?.allowed_actions??[]).includes(`TAO_DON_USE`)}function A(){if(c.catalog?.default_customer?.id_khach_hang)return c.catalog.default_customer;let e=c.catalog?.default_customer_id;return(c.catalog?.customers??[]).find(t=>t.la_khach_mac_dinh===!0||e&&t.id_khach_hang===e)??null}function Te(e){let t=e?.la_khach_mac_dinh===!0;return{name:e?.ten_khach_hang?.trim()||`Khách lẻ`,phone:t?``:w(e?.sdt),address:t?``:e?.dia_chi?.trim()||``,note:t?``:e?.ghi_chu?.trim()||``}}function j(e){c.customer=e??null,c.customerDraft=Te(e),c.customerConflict=null}function M(e,t=c.catalog?.customers??[]){let n=w(e);return n?t.find(e=>w(e.sdt)===n)??null:null}function Ee(){let e=c.customerDraft,t=String(e?.name??``).trim(),n=String(e?.phone??``).trim(),r=w(n);if(n&&!/^0[0-9]{9}$/.test(r))return`Số điện thoại phải gồm đúng 10 chữ số và bắt đầu bằng 0.`;if(r&&!t)return`Có số điện thoại thì phải nhập tên khách hàng.`;let i=Te(A());return!r&&(!T(t,i.name)||String(e?.address??``).trim()!==i.address||String(e?.note??``).trim()!==i.note)?`Muốn lưu tên, địa chỉ hoặc ghi chú khách hàng thì phải nhập số điện thoại.`:null}async function De(e){let t=w(e);if(!t)return null;let n=M(t);if(n)return n;let r=(await y({search:t,limit:20}))?.customers??[];return r.forEach(N),M(t,r)}function Oe(e,t){let n=t.address.trim()||e?.dia_chi?.trim()||``,r=t.note.trim()||e?.ghi_chu?.trim()||``;return!T(t.name,e.ten_khach_hang)||w(t.phone)!==w(e.sdt)||n!==(e.dia_chi?.trim()||``)||r!==(e.ghi_chu?.trim()||``)}async function ke(e,t){let n=w(t.phone),r={name:String(t.name??``).trim()||e.ten_khach_hang,phone:n,address:String(t.address??``).trim(),note:String(t.note??``).trim()};if(!Oe(e,r))return j(e),e;c.updateCustomerRequestKey??=i(`update-customer`);let a=C(await Se({id_khach_hang:e.id_khach_hang,expected_row_version:e.row_version,ten_khach_hang:r.name,sdt:r.phone,dia_chi:r.address||null,ma_so_thue:e.ma_so_thue||null,email:e.email||null,ghi_chu:r.note||null},c.updateCustomerRequestKey));if(!a?.id_khach_hang)throw Error(`RPC không trả về khách hàng đã sửa.`);return N(a),j(a),c.updateCustomerRequestKey=null,a}async function Ae(){let e=c.customerDraft,t=String(e?.name??``).trim()||`Khách lẻ`,n=w(e?.phone),r=A();if(!n){if(!r?.id_khach_hang)throw Error(`Không tìm thấy khách lẻ mặc định.`);return j(r),r}if(!/^0[0-9]{9}$/.test(n))throw Error(`Số điện thoại phải gồm đúng 10 chữ số và bắt đầu bằng 0.`);let a=await De(n),o=c.customer?.id_khach_hang?c.customer:null,s=o?.la_khach_mac_dinh===!0;if(o&&!s){if(a&&a.id_khach_hang!==o.id_khach_hang){c.customerConflict=a;let e=Error(`Số điện thoại ${n} đã thuộc khách "${a.ten_khach_hang}".`);throw e.code=`CUSTOMER_PHONE_CONFLICT`,e}return ke(o,{name:t,phone:n,address:e.address,note:e.note})}if(a){let e=T(t,`Khách lẻ`),r=T(t,a.ten_khach_hang);if(!e&&!r){c.customerConflict=a;let e=Error(`Số điện thoại ${n} đã thuộc khách "${a.ten_khach_hang}".`);throw e.code=`CUSTOMER_PHONE_CONFLICT`,e}return j(a),a}c.createCustomerRequestKey??=i(`create-customer`);let l=C(await E({ten_khach_hang:t,sdt:n,dia_chi:String(e.address??``).trim()||null,ma_so_thue:null,email:null,ghi_chu:String(e.note??``).trim()||null},c.createCustomerRequestKey));if(!l?.id_khach_hang)throw Error(`RPC không trả về khách hàng vừa tạo.`);return N(l),j(l),c.createCustomerRequestKey=null,l}function N(e){if(!e?.id_khach_hang)return;let t=c.catalog?.customers??[];c.catalog.customers=[e,...t.filter(t=>t.id_khach_hang!==e.id_khach_hang)],e.la_khach_mac_dinh&&(c.catalog.default_customer=e,c.catalog.default_customer_id=e.id_khach_hang),c.customer?.id_khach_hang===e.id_khach_hang&&(c.customer=e)}function P(){return d.reset(`main`,W)}async function je(){c.customerResults=[],c.customerSearchError=``,await d.open(`customer-picker`,ct),await D.reset(``,{force:!0,reason:`open`})}function Me(e){let t=e?.id_khach_hang?`edit-customer:${e.id_khach_hang}`:`new-customer`;return d.open(t,()=>Y(e))}async function Ne(){c.productResults=[],c.productSearchError=``,c.productDraft=c.lines.map(he),await d.open(`product-picker`,mt),await O.reset(``,{force:!0,reason:`open`})}function F(){let e=Le();return e?(H(e),Promise.resolve(!1)):d.open(`confirmation`,ht)}function I(e){return c.createdOrderResponse=e??c.createdOrderResponse,d.reset(`success`,()=>yt(c.createdOrderResponse))}function Pe(){return c.submittedDocument?d.open(`sales-document`,_t):I(c.createdOrderResponse)}function L(){return d.back()}async function R(){Fe(),await P()}function Fe(){c.phoneLookupTimer&&=(clearTimeout(c.phoneLookupTimer),null),c.phoneLookupToken+=1,c.orderCode=null,c.busy=!1,c.customerConflict=null,c.editingCustomer=null,c.lines=[],c.productDraft=[],c.order=ge(),c.search=``,c.createCustomerRequestKey=null,c.updateCustomerRequestKey=null,c.createOrderRequestKey=null,c.submittedDocument=null,c.createdOrderResponse=null,c.error=null,j(A())}function z(e){return e.product?.ten_san_pham??e.product?.model??`Sản phẩm`}function B(e){return b(e.product)}function V(){let e=c.lines.reduce((e,t)=>e+Math.max(0,v(t.unitPrice))*Math.max(1,v(t.quantity)),0),t=c.order.loaiDon===`GIAO_HANG`?Math.max(0,v(c.order.phiVanChuyen)):0,n=c.order.loaiDon===`LAP_DAT`?Math.max(0,v(c.order.phiLapDat)):0,r=Math.min(100,Math.max(0,Number(c.order.vatPercent)||0)),i=Math.round(e*r/100),a=e+t+n+i,o=Math.max(0,v(c.order.paid));return{goodsTotal:e,shipping:t,install:n,vatPercent:r,vat:i,total:a,paid:o,remaining:a-o}}function Ie(){let e=V().total;c.order.paid=Math.min(e,Math.max(0,v(c.order.paid)))}function Le(){let e=V();if(!we())return`Tài khoản không có quyền tạo đơn.`;let t=Ee();if(t)return t;if(c.lines.length===0)return`Đơn hàng phải có ít nhất một sản phẩm.`;for(let e of c.lines){if(v(e.quantity)<=0||v(e.unitPrice)<0)return`Số lượng hoặc đơn giá không hợp lệ.`;let t=B(e);if(t<=0)return`${z(e)} đã hết hàng.`;if(e.quantity>t)return`${z(e)} chỉ còn ${t} sản phẩm.`}return e.paid>e.total?`Đã thanh toán không được vượt tổng đơn.`:null}function Re(){let e=V(),t=e.total>0&&e.paid===e.total;return{id_khach_hang:c.customer.id_khach_hang,loai_don:c.order.loaiDon,kieu_thu_tien:t?`NGUOI_TAO_DA_THU`:c.order.collectionType,phi_van_chuyen:e.shipping,phi_lap_dat:e.install,vat_percent:e.vatPercent,so_tien_da_thanh_toan:e.paid,so_tien_cong_tham_chieu:Math.max(0,v(c.order.serviceFee)),bao_hanh_thang:Math.max(0,v(c.order.warrantyMonths)),ghi_chu:c.order.note.trim()||null,lines:c.lines.map(e=>{let t=Math.max(0,v(e.unitPrice));return{id_san_pham:e.product.id_san_pham,ma_loai_gia:e.priceType,don_gia_ap_dung:t,so_luong:Math.max(1,v(e.quantity)),ly_do_dieu_chinh_gia:t===e.listPrice?null:`Điều chỉnh giá tại màn Tạo đơn`}})}}function H(e){let t=r.querySelector(`[data-tao-don-message]`);t&&(t.hidden=!e,t.className=`tao-don-message is-error`,t.textContent=e??``)}function U(e){let t=r.querySelector(`[data-warranty-error]`),n=r.querySelector(`[data-warranty-section]`),i=r.querySelector(`[data-warranty-input]`);t&&(t.hidden=!e,t.textContent=e??``),n?.classList.toggle(`has-error`,!!e),e&&requestAnimationFrame(()=>{n?.scrollIntoView({behavior:`smooth`,block:`center`}),i?.focus({preventScroll:!0})})}function ze(){k({headerMode:`title`,title:`Tạo đơn`,showRightAction:!1,bottomActions:[{key:`reset`,label:`Xóa form`,variant:`secondary`,disabled:c.busy,async onClick(){await R()}},{key:`confirm`,label:`Xác nhận`,variant:`primary`,disabled:c.busy,onClick:F}]})}function Be(){c.screen=`load-error`,k({headerMode:`title`,title:`Tạo đơn`,showRightAction:!0,rightIcon:`↻`,rightLabel:`Tải lại`,onRightAction:bt,bottomActions:[]}),r.innerHTML=`
        <section class="tao-don-page">
          <div class="tao-don-state-card is-error">
            <strong>Không tải được dữ liệu Tạo đơn</strong>
            <p>${t(c.error?.message)}</p>

            <button
              class="tao-don-primary-button"
              type="button"
              data-action="retry-load"
            >
              Tải lại
            </button>
          </div>
        </section>
      `}function Ve(){let e=c.customerDraft;return c.customerConflict,`
        <div class="tao-don-inline-customer">
          <input
            class="tao-don-customer-input"
            data-customer-field="name"
            value="${t(e.name)}"
            placeholder="Tên khách hàng"
            autocomplete="name"
          />

          <input
            class="tao-don-customer-input"
            data-customer-field="phone"
            value="${t(e.phone)}"
            placeholder="Số điện thoại"
            inputmode="numeric"
            maxlength="10"
            pattern="0[0-9]{9}"
            autocomplete="tel"
          />

          <textarea
            class="tao-don-customer-input"
            data-customer-field="address"
            rows="2"
            placeholder="Địa chỉ"
          >${t(e.address)}</textarea>

          <textarea
            class="tao-don-customer-input"
            data-customer-field="note"
            rows="2"
            placeholder="Ghi chú khách hàng"
          >${t(e.note)}</textarea>

          <div data-customer-phone-match>
            ${We()}
          </div>
        </div>
      `}function He(){return c.lines.length===0?`
          <button
            class="tao-don-empty-card"
            type="button"
            data-action="open-products"
          >
            Chưa có sản phẩm.
            <span>Bấm Thêm để chọn sản phẩm.</span>
          </button>
        `:c.lines.map((e,n)=>{let r=B(e),i=r;return`
            <article
              class="tao-don-compact-line"
              data-line-index="${n}"
            >
              <div class="tao-don-compact-line-head">
                <div>
                  <strong>
                    ${t(z(e))}
                  </strong>

                  <span>Còn lại: ${r}</span>
                </div>

                <button
                  type="button"
                  data-action="remove-line"
                  data-index="${n}"
                  aria-label="Xóa sản phẩm"
                >
                  ×
                </button>
              </div>

              <div class="tao-don-compact-calculation">
                <div class="tao-don-stepper">
                  <button
                    type="button"
                    data-action="decrease-line"
                    data-index="${n}"
                  >
                    −
                  </button>

                  <input
                    type="number"
                    min="1"
                    ${i===``?``:`max="${i}"`}
                    value="${e.quantity}"
                    data-line-quantity="${n}"
                  />

                  <button
                    type="button"
                    data-action="increase-line"
                    data-index="${n}"
                    ${i!==``&&e.quantity>=i?`disabled`:``}
                  >
                    +
                  </button>
                </div>

                <span class="tao-don-calc-symbol">×</span>

                <input
                  class="tao-don-price-input"
                  type="text"
                  data-money-field
                  inputmode="numeric"
                  value="${s(e.unitPrice)}"
                  data-line-price="${n}"
                  aria-label="Đơn giá"
                />

                <span class="tao-don-calc-symbol">=</span>

                <strong class="tao-don-line-amount">
                  ${l(e.quantity*e.unitPrice)}
                </strong>
              </div>
            </article>
          `}).join(``)}function Ue(){let e=r.firstElementChild?.matches(`[data-tao-don-main-shell]`)?r.firstElementChild:null;e||=(r.innerHTML=`
          <section
            class="tao-don-page"
            data-tao-don-main-shell
          >
            <form
              id="tao-don-form"
              class="tao-don-form"
              novalidate
            ></form>
          </section>
        `,r.firstElementChild);let t=e?.querySelector(`#tao-don-form`);if(!t)throw Error(`Không dựng được form Tạo đơn.`);return t}function W(){c.screen=`main`,ze();let e=V(),n=c.order.loaiDon===`GIAO_HANG`?`Phí vận chuyển`:`Phí lắp đặt`,r=c.order.loaiDon===`GIAO_HANG`?c.order.phiVanChuyen:c.order.phiLapDat,i=Ue();i.innerHTML=`
            <div
              class="tao-don-message"
              data-tao-don-message
              hidden
            ></div>

            <div class="tao-don-meta-grid">
              <div class="tao-don-meta-item">
                <span>Mã đơn</span>
                <strong>
                  ${t(c.orderCode??`Tự động khi tạo`)}
                </strong>
              </div>

              <div class="tao-don-meta-item">
                <span>Ngày</span>
                <strong>
                  ${t(ve(c.catalog?.server_time))}
                </strong>
              </div>
            </div>

            <section class="tao-don-section">
              <h3>Loại đơn</h3>

              <div class="tao-don-segmented">
                <button
                  type="button"
                  class="${c.order.loaiDon===`GIAO_HANG`?`is-active`:``}"
                  data-order-type="GIAO_HANG"
                >
                  Giao hàng
                </button>

                <button
                  type="button"
                  class="${c.order.loaiDon===`LAP_DAT`?`is-active`:``}"
                  data-order-type="LAP_DAT"
                >
                  Lắp đặt
                </button>
              </div>
            </section>

            <section class="tao-don-section">
              <div class="tao-don-section-heading">
                <h3>Khách hàng</h3>

                <button
                  type="button"
                  data-action="choose-customer"
                >
                  Chọn khách
                </button>
              </div>

              ${Ve()}
            </section>

            <section class="tao-don-section">
              <div class="tao-don-section-heading">
                <h3>Sản phẩm</h3>

                <button
                  type="button"
                  data-action="open-products"
                >
                  Thêm
                </button>
              </div>

              <div class="tao-don-lines">
                ${He()}
              </div>
            </section>

            <section class="tao-don-section">
              <h3>Thanh toán khách</h3>

              <div class="tao-don-money-card">
                <div class="tao-don-money-row">
                  <span>Tạm tính</span>
                  <strong>${l(e.goodsTotal)}</strong>
                </div>

                <label class="tao-don-money-row">
                  <span>${n}</span>

                  <input
                    type="text"
                    inputmode="numeric"
                    data-money-field
                    value="${s(r)}"
                    data-order-money="service-fee"
                  />
                </label>

                <div class="tao-don-vat-row">
                  <label>
                    <span>VAT</span>

                    <input
                      type="number"
                      min="0"
                      max="100"
                      step="0.01"
                      value="${c.order.vatPercent}"
                      data-order-money="vat"
                    />

                    <small>%</small>
                  </label>

                  <strong>${l(e.vat)}</strong>
                </div>

                <div class="tao-don-vat-options">
                  ${[0,5,8,10].map(e=>`
                        <button
                          type="button"
                          class="${Number(c.order.vatPercent)===e?`is-active`:``}"
                          data-vat="${e}"
                        >
                          ${e}
                        </button>
                      `).join(``)}
                </div>

                <div class="tao-don-money-row is-total">
                  <span>Tổng đơn</span>
                  <strong>${l(e.total)}</strong>
                </div>

                <label class="tao-don-money-row">
                  <span>Đã thanh toán</span>

                  <input
                    type="text"
                    inputmode="numeric"
                    data-money-field
                    value="${s(e.paid)}"
                    data-order-money="paid"
                  />
                </label>

                <div class="tao-don-money-row is-remaining">
                  <span>Còn lại</span>
                  <strong>${l(e.remaining)}</strong>
                </div>
              </div>
            </section>

            <section class="tao-don-section">
              <h3>Ghi chú đơn</h3>

              <textarea
                class="tao-don-textarea"
                rows="4"
                placeholder="Ghi chú riêng cho đơn hàng nếu có"
                data-order-note
              >${t(c.order.note)}</textarea>
            </section>

            <div class="tao-don-desktop-actions">
              <button
                type="button"
                class="tao-don-secondary-button"
                data-action="reset-order"
              >
                Xóa form
              </button>

              <button
                type="submit"
                class="tao-don-primary-button"
              >
                Xác nhận
              </button>
            </div>
      `}function We(){let e=c.customerConflict;if(!e)return``;let n=e.dia_chi?` · ${t(e.dia_chi)}`:``;return`
        <div class="tao-don-customer-conflict">
          <div>
            <strong>
              Số điện thoại đã có trong danh bạ
            </strong>

            <span>
              ${t(e.ten_khach_hang)}${n}
            </span>
          </div>

          <button
            type="button"
            data-use-existing-customer
          >
            Dùng khách này
          </button>
        </div>
      `}function G(){let e=r.querySelector(`[data-customer-phone-match]`);e&&(e.innerHTML=We())}function Ge(e){if(!m())return;c.phoneLookupTimer&&clearTimeout(c.phoneLookupTimer),c.phoneLookupToken+=1;let t=c.phoneLookupToken;if(!/^0[0-9]{9}$/.test(e)){c.customerConflict=null,G();return}c.phoneLookupTimer=setTimeout(async()=>{try{let n=await De(e);if(t!==c.phoneLookupToken||!m())return;c.customerConflict=n??null,G()}catch{t===c.phoneLookupToken&&m()&&(c.customerConflict=null,G())}},250)}let Ke=!1;function K(e,t){let n=(e.target instanceof Element?e.target:null)?.closest(t)??null;return n&&r.contains(n)?n:null}function q(){Ie(),c.createOrderRequestKey=null}function qe(e){let t=K(e,`#tao-don-form`);if(e.target===t){e.preventDefault(),F();return}let n=K(e,`#tao-don-customer-form`);e.target===n&&(e.preventDefault(),lt())}function Je(e){return c.screen!==`load-error`||!K(e,`[data-action="retry-load"]`)?!1:(e.preventDefault(),bt(),!0)}function Ye(e){if(c.screen!==`confirmation`)return!1;let t=K(e,`[data-warranty]`);if(t)return e.preventDefault(),c.order.warrantyMonths=v(t.dataset.warranty),U(``),c.createOrderRequestKey=null,F(),!0;let n=K(e,`[data-service-fee-option]`);return n?(e.preventDefault(),c.order.serviceFee=v(n.dataset.serviceFeeOption),c.createOrderRequestKey=null,F(),!0):!1}function Xe(e){if(c.screen!==`confirmation`)return!1;let t=K(e,`[data-warranty-input]`);if(t){let e=t.value.trim();return c.order.warrantyMonths=e===``?null:Math.min(120,Math.max(0,v(e))),c.order.warrantyMonths!==null&&U(``),c.createOrderRequestKey=null,F(),!0}let n=K(e,`input[name="collection_type"]`);if(n)return c.order.collectionType=n.value,c.createOrderRequestKey=null,F(),!0;let r=K(e,`[data-service-fee]`);return r?(c.order.serviceFee=Math.max(0,v(r.value)),c.createOrderRequestKey=null,F(),!0):!1}function Ze(e){if(c.screen!==`product-picker`)return!1;let t=K(e,`[data-product-minus]`);if(t){e.preventDefault(),e.stopPropagation();let n=X(t.dataset.productMinus);return n&&(--n.quantity,n.quantity<=0&&(c.productDraft=c.productDraft.filter(e=>e!==n)),Q(),$()),!0}let n=K(e,`[data-product-plus]`);if(n){e.preventDefault(),e.stopPropagation();let t=X(n.dataset.productPlus);if(t){let e=b(t.product);t.quantity<e&&(t.quantity+=1),Q(),$()}return!0}if(K(e,`[data-product-counter]`))return!0;let r=K(e,`[data-product-card]`);return r?(ft(r.dataset.productCard),!0):!1}function Qe(e){if(c.screen!==`customer-picker`)return!1;let t=K(e,`[data-edit-customer]`);if(t){e.preventDefault();let n=c.customerResults.find(e=>e.id_khach_hang===t.dataset.editCustomer);return n&&Me(n),!0}let n=K(e,`[data-customer-id]`);if(!n)return!1;e.preventDefault();let r=c.customerResults.find(e=>e.id_khach_hang===n.dataset.customerId);return r&&(j(r),c.createOrderRequestKey=null,P()),!0}function $e(e){if(Je(e)||Ye(e)||Ze(e)||Qe(e)||c.screen!==`main`)return;if(K(e,`[data-use-existing-customer]`)){if(e.preventDefault(),!c.customerConflict)return;j(c.customerConflict),c.createOrderRequestKey=null,W();return}let t=K(e,`[data-order-type]`);if(t){e.preventDefault(),c.order.loaiDon=t.dataset.orderType,q(),W();return}let n=K(e,`[data-vat]`);if(n){e.preventDefault(),c.order.vatPercent=Number(n.dataset.vat),q(),W();return}let r=K(e,[`[data-action="choose-customer"]`,`[data-action="open-products"]`,`[data-action="reset-order"]`,`[data-action="remove-line"]`,`[data-action="decrease-line"]`,`[data-action="increase-line"]`].join(`,`));if(!r)return;e.preventDefault();let i=r.dataset.action;if(i===`choose-customer`){je();return}if(i===`open-products`){Ne();return}if(i===`reset-order`){Fe(),W();return}let a=v(r.dataset.index),o=c.lines[a];if(o){if(i===`remove-line`&&c.lines.splice(a,1),i===`decrease-line`&&(o.quantity=Math.max(1,o.quantity-1)),i===`increase-line`){let e=B(o);if(e!==null&&o.quantity>=e)return;o.quantity+=1}q(),W()}}function et(){Ke||=(r.addEventListener(`submit`,qe),r.addEventListener(`click`,$e),!0)}let tt=!1;function nt(e){if(Xe(e)||c.screen!==`main`)return;let t=K(e,`[data-line-quantity]`);if(t){let e=v(t.dataset.lineQuantity),n=c.lines[e];if(!n)return;let r=B(n),i=Math.max(1,v(t.value));r!==null&&(i=Math.min(r,i)),n.quantity=i,q(),W();return}let n=K(e,`[data-line-price]`);if(n){let e=v(n.dataset.linePrice),t=c.lines[e];if(!t)return;t.unitPrice=Math.max(0,v(n.value)),q(),W();return}let r=K(e,`[data-order-money]`);if(!r)return;let i=r.dataset.orderMoney,a=Math.max(0,v(r.value));i===`service-fee`&&(c.order.loaiDon===`GIAO_HANG`?c.order.phiVanChuyen=a:c.order.phiLapDat=a),i===`vat`&&(c.order.vatPercent=Math.min(100,Number(r.value)||0)),i===`paid`&&(c.order.paid=a),q(),W()}function rt(e){if(c.screen!==`main`)return;let t=K(e,`[data-customer-field]`);if(t){let e=t.dataset.customerField;if(e===`name`&&(c.customerDraft.name=t.value),e===`phone`){let e=t.value.replace(/\D/g,``).slice(0,10);t.value=e,c.customerDraft.phone=e,Ge(e)}e===`address`&&(c.customerDraft.address=t.value),e===`note`&&(c.customerDraft.note=t.value),c.createOrderRequestKey=null,c.createCustomerRequestKey=null,c.updateCustomerRequestKey=null;return}let n=K(e,`[data-order-note]`);n&&(c.order.note=n.value,c.createOrderRequestKey=null)}function it(){tt||=(r.addEventListener(`change`,nt),r.addEventListener(`input`,rt),!0)}function at(){et(),it()}at();async function ot(e){let t=c.customerSearchRequestId+1;c.customerSearchRequestId=t,c.customerSearchLoading=!0,c.customerSearchError=``,c.screen===`customer-picker`&&J();try{let n=await y({search:e,limit:20});if(t!==c.customerSearchRequestId||!m())return;let r=Array.isArray(n?.customers)?n.customers:[];r.forEach(N),c.customerResults=r}catch(e){if(t!==c.customerSearchRequestId||!m())return;c.customerResults=[],c.customerSearchError=e?.message||`Không tìm được khách hàng.`}finally{t===c.customerSearchRequestId&&m()&&(c.customerSearchLoading=!1,c.screen===`customer-picker`&&J())}}function st(){return c.customerResults}function J(){let e=r.querySelector(`[data-customer-list]`);if(!e)return;let n=st();if(c.customerSearchLoading){e.innerHTML=`
          <div class="tao-don-empty-card is-static">
            Đang tải khách hàng...
          </div>
        `;return}if(c.customerSearchError){e.innerHTML=`
          <div class="tao-don-empty-card is-static">
            ${t(c.customerSearchError)}
          </div>
        `;return}e.innerHTML=n.length?n.map(e=>`
                <article
                  class="tao-don-customer-picker-card"
                  data-customer-id="${e.id_khach_hang}"
                  tabindex="0"
                >
                  <div>
                    <strong>
                      ${t(e.ten_khach_hang)}
                    </strong>

                    <small>
                      ${t(be(e))}
                    </small>

                    <small>
                      ${t(xe(e))}
                    </small>
                  </div>

                  <button
                    type="button"
                    data-edit-customer="${e.id_khach_hang}"
                  >
                    Sửa
                  </button>
                </article>
              `).join(``):`
            <div class="tao-don-empty-card is-static">
              Chưa có khách phù hợp.
            </div>
          `}function ct(){c.screen=`customer-picker`,k({headerMode:`search`,placeholder:`Tìm tên hoặc số điện thoại...`,searchValue:D.snapshot().draft,showRightAction:!0,rightIcon:`+`,rightLabel:`Thêm khách`,onBack:L,onSearchInput(e){D.input(e)},onSearch(e){return D.submit(e)},onRightAction(){Me(null)},bottomActions:[]}),r.innerHTML=`
        <section class="tao-don-picker-page">
          <div
            class="tao-don-picker-list"
            data-customer-list
          ></div>
        </section>
      `,J()}function Y(e){let n=!!e;c.screen=n?`edit-customer`:`new-customer`,c.editingCustomer=e??null,k({headerMode:`title`,title:n?`Sửa khách hàng`:`Khách mới`,showRightAction:!1,onBack:L,bottomActions:[{key:`save-customer`,label:c.busy?`Đang lưu...`:`Lưu khách hàng`,variant:`primary`,disabled:c.busy,onClick:lt}]}),r.innerHTML=`
        <section class="tao-don-page">
          <form
            id="tao-don-customer-form"
            class="tao-don-form"
            novalidate
          >
            <div
              class="tao-don-message"
              data-tao-don-message
              hidden
            ></div>

            <section class="tao-don-section">
              <label class="tao-don-field">
                <span>Tên khách *</span>

                <input
                  name="ten_khach_hang"
                  required
                  value="${t(e?.ten_khach_hang??``)}"
                  ${e?.la_khach_mac_dinh?`readonly`:``}
                />
              </label>

              <label class="tao-don-field">
                <span>Số điện thoại *</span>

                <input
                  name="sdt"
                  inputmode="tel"
                  required
                  value="${t(e?.sdt??``)}"
                />
              </label>

              <label class="tao-don-field">
                <span>Địa chỉ</span>

                <textarea
                  name="dia_chi"
                  rows="3"
                >${t(e?.dia_chi??``)}</textarea>
              </label>

              <label class="tao-don-field">
                <span>Ghi chú khách hàng</span>

                <textarea
                  name="ghi_chu"
                  rows="4"
                >${t(e?.ghi_chu??``)}</textarea>
              </label>
            </section>
          </form>
        </section>
      `}async function lt(){let e=r.querySelector(`#tao-don-customer-form`);if(!e)return;let t=new FormData(e),n=String(t.get(`ten_khach_hang`)??``).trim(),a=w(t.get(`sdt`));if(!n||!a){H(`Tên khách và số điện thoại là bắt buộc.`);return}let o=M(a),s=c.editingCustomer;if(o&&o.id_khach_hang!==s?.id_khach_hang){H(`Số điện thoại đã thuộc khách "${o.ten_khach_hang}".`);return}let l={ten_khach_hang:n,sdt:a,dia_chi:String(t.get(`dia_chi`)??``).trim()||null,ma_so_thue:s?.ma_so_thue||null,email:s?.email||null,ghi_chu:String(t.get(`ghi_chu`)??``).trim()||null};if(u.acquire(`save-customer`)){c.busy=!0,Y(s);try{let e;s?(c.updateCustomerRequestKey??=i(`update-customer`),e=await Se({...l,id_khach_hang:s.id_khach_hang,expected_row_version:s.row_version},c.updateCustomerRequestKey)):(c.createCustomerRequestKey??=i(`create-customer`),e=await E(l,c.createCustomerRequestKey));let t=C(e);if(!t?.id_khach_hang)throw Error(`RPC không trả về khách hàng đã lưu.`);N(t),j(t),c.busy=!1,c.editingCustomer=null,c.createCustomerRequestKey=null,c.updateCustomerRequestKey=null,c.createOrderRequestKey=null,await P()}catch(e){c.busy=!1,Y(s),H(e.message)}finally{u.release(`save-customer`)}}}async function ut(e){let t=c.productSearchRequestId+1;c.productSearchRequestId=t,c.productSearchLoading=!0,c.productSearchError=``,c.screen===`product-picker`&&$();try{let n=await pe({search:e,limit:30});if(t!==c.productSearchRequestId||!m())return;c.productResults=Array.isArray(n?.products)?n.products:[]}catch(e){if(t!==c.productSearchRequestId||!m())return;c.productResults=[],c.productSearchError=e?.message||`Không tìm được sản phẩm.`}finally{t===c.productSearchRequestId&&m()&&(c.productSearchLoading=!1,c.screen===`product-picker`&&$())}}function dt(){return c.productResults}function X(e){return c.productDraft.find(t=>t.product.id_san_pham===e)}function Z(){return c.productDraft.reduce((e,t)=>e+v(t.quantity),0)}function Q(){let e=Z();k({headerMode:`search`,placeholder:`Tìm sản phẩm...`,searchValue:O.snapshot().draft,showRightAction:!1,onBack:L,onSearchInput(e){O.input(e)},onSearch(e){return O.submit(e)},bottomActions:[{key:`apply-products`,label:e>0?`Thêm ${e} sản phẩm vào đơn`:`Thêm vào đơn`,variant:`primary`,onClick:pt}]})}function $(){let e=r.querySelector(`[data-product-list]`),n=r.querySelector(`[data-product-selected-count]`);if(e){if(n&&(n.textContent=Z()),c.productSearchLoading){e.innerHTML=`
          <div class="tao-don-empty-card is-static">
            Đang tải sản phẩm...
          </div>
        `;return}if(c.productSearchError){e.innerHTML=`
          <div class="tao-don-empty-card is-static">
            ${t(c.productSearchError)}
          </div>
        `;return}e.innerHTML=dt().map(e=>{let n=X(e.id_san_pham),r=b(e),i=S(e),a=x(e),o=a||!i;return`
            <article
              class="
                tao-don-product-card
                ${n?`is-selected`:``}
                ${a?`is-out-of-stock`:``}
                ${i?``:`is-no-price`}
              "
              data-product-card="${e.id_san_pham}"
              tabindex="${o?`-1`:`0`}"
              aria-disabled="${o}"
            >
              <div class="tao-don-product-main">
                <div class="tao-don-product-title-row">
                  <strong>
                    ${t(e.ten_san_pham??e.model)}
                  </strong>

                  ${n?`
                        <span class="tao-don-selected-badge">
                          Đã chọn
                        </span>
                      `:``}
                </div>

                <span class="tao-don-product-stock ${a?`is-empty`:``}">
                  ${a?`Hết hàng`:`Còn lại: ${r}`}
                </span>

                <small>
                  ${i?l(i.value):`Chưa có bảng giá`}
                </small>
              </div>

              ${n?`
                    <div
                      class="tao-don-product-counter"
                      data-product-counter
                    >
                      <button
                        type="button"
                        data-product-minus="${e.id_san_pham}"
                      >
                        −
                      </button>

                      <strong>${n.quantity}</strong>

                      <button
                        type="button"
                        data-product-plus="${e.id_san_pham}"
                        ${n.quantity>=r?`disabled`:``}
                      >
                        +
                      </button>
                    </div>
                  `:``}
            </article>
          `}).join(``)}}function ft(e){let t=c.productResults.find(t=>t.id_san_pham===e);if(!t||x(t)||!S(t))return;let n=X(e);if(n)c.productDraft=c.productDraft.filter(e=>e!==n);else{let e=me(t);e&&c.productDraft.push(e)}Q(),$()}function pt(){c.lines=c.productDraft.map(he),Ie(),c.createOrderRequestKey=null,P()}function mt(){c.screen=`product-picker`,Q(),r.innerHTML=`
        <section class="tao-don-picker-page">
          <div class="tao-don-picker-summary">
            Đã chọn:
            <strong data-product-selected-count>
              ${Z()}
            </strong>
          </div>

          <div
            class="tao-don-product-list"
            data-product-list
          ></div>
        </section>
      `,$()}function ht(){c.screen=`confirmation`;let e=V(),n=e.total>0&&e.paid===e.total,i=c.order.loaiDon===`LAP_DAT`?`Lắp đặt`:`Giao hàng`;k({headerMode:`title`,title:`Xác nhận đơn`,showRightAction:!1,onBack:L,bottomActions:[{key:`back`,label:`Quay lại`,variant:`secondary`,disabled:c.busy,onClick:L},{key:`create`,label:c.busy?`Đang tạo...`:`Tạo đơn`,variant:`primary`,disabled:c.busy,onClick:vt}]}),r.innerHTML=`
        <section class="tao-don-page tao-don-confirm-page">
          <div
            class="tao-don-message"
            data-tao-don-message
            hidden
          ></div>

          <section class="tao-don-summary-card">
            <h3>Thông tin đơn</h3>

            <div class="tao-don-confirm-info-row">
              <span>Mã đơn</span>

              <strong>
                ${t(c.orderCode??`Tự động khi tạo`)}
              </strong>
            </div>

            <div class="tao-don-confirm-info-row">
              <span>Ngày tạo</span>

              <strong>
                ${t(ve(c.catalog?.server_time))}
              </strong>
            </div>

            <div class="tao-don-confirm-info-row">
              <span>Loại đơn</span>

              <strong>
                ${t(i)}
              </strong>
            </div>
          </section>

          <section class="tao-don-summary-card">
            <h3>Khách hàng</h3>

            <div class="tao-don-confirm-info-row">
              <span>Tên khách</span>

              <strong>
                ${t(c.customerDraft.name||`Khách lẻ`)}
              </strong>
            </div>

            ${c.customerDraft.phone?`
                  <div class="tao-don-confirm-info-row">
                    <span>Số điện thoại</span>

                    <strong>
                      ${t(c.customerDraft.phone)}
                    </strong>
                  </div>
                `:``}

            ${c.customerDraft.address?`
                  <div class="tao-don-confirm-info-row">
                    <span>Địa chỉ</span>

                    <strong>
                      ${t(c.customerDraft.address)}
                    </strong>
                  </div>
                `:``}

            ${c.customerDraft.note?.trim()?`
                  <div class="tao-don-confirm-note">
                    <span>Ghi chú khách hàng</span>
                    <p>${t(c.customerDraft.note.trim())}</p>
                  </div>
                `:``}

          </section>

          <section class="tao-don-summary-card">
            <h3>Sản phẩm</h3>

            <div class="tao-don-confirm-products">
              ${c.lines.map(e=>`
                    <article class="tao-don-confirm-product">
                      <strong
                        class="tao-don-confirm-product-name"
                      >
                        ${t(z(e))}
                      </strong>

                      <div
                        class="tao-don-confirm-product-money"
                      >
                        <span>${e.quantity}</span>
                        <span>×</span>

                        <span>
                          ${l(e.unitPrice)}
                        </span>

                        <span>=</span>

                        <strong>
                          ${l(e.quantity*e.unitPrice)}
                        </strong>
                      </div>

                    </article>
                  `).join(``)}
            </div>
          </section>

          <section class="tao-don-summary-card">
            <h3>Thanh toán</h3>

            <div class="tao-don-confirm-info-row">
              <span>Tạm tính</span>

              <strong>
                ${l(e.goodsTotal)}
              </strong>
            </div>

            ${e.shipping>0?`
                  <div class="tao-don-confirm-info-row">
                    <span>Phí vận chuyển</span>

                    <strong>
                      ${l(e.shipping)}
                    </strong>
                  </div>
                `:``}

            ${e.install>0?`
                  <div class="tao-don-confirm-info-row">
                    <span>Phí lắp đặt</span>

                    <strong>
                      ${l(e.install)}
                    </strong>
                  </div>
                `:``}

            ${e.vat>0?`
                  <div class="tao-don-confirm-info-row">
                    <span>
                      VAT ${e.vatPercent}%
                    </span>

                    <strong>
                      ${l(e.vat)}
                    </strong>
                  </div>
                `:``}

            <div
              class="
                tao-don-confirm-info-row
                is-total
              "
            >
              <span>Tổng đơn</span>

              <strong>
                ${l(e.total)}
              </strong>
            </div>

            <div class="tao-don-confirm-info-row">
              <span>Đã thanh toán</span>

              <strong>
                ${l(e.paid)}
              </strong>
            </div>

            <div
              class="
                tao-don-confirm-info-row
                is-remaining
              "
            >
              <span>Còn lại</span>

              <strong>
                ${l(e.remaining)}
              </strong>
            </div>
          </section>
            <section class="tao-don-summary-card">
              <h3>Ghi chú đơn</h3>

              <div class="tao-don-confirm-note">
                <p>
                  ${t(c.order.note?.trim()||`Không có`)}
                </p>
              </div>
            </section>


          <section
            class="tao-don-section tao-don-warranty-section"
            data-warranty-section
          >
            <div class="tao-don-warranty-heading">
              <h3>Bảo hành</h3>

              <label>
                <input
                  type="number"
                  inputmode="numeric"
                  min="0"
                  max="120"
                  step="1"
                  value="${c.order.warrantyMonths??``}"
                  placeholder="Chọn"
                  data-warranty-input
                />

                <span>Tháng</span>
              </label>
            </div>

            <div
              class="tao-don-warranty-error"
              data-warranty-error
              role="alert"
              hidden
            ></div>

            <div class="tao-don-option-grid is-six">
              ${ue.map(e=>`
                    <button
                      type="button"
                      class="${c.order.warrantyMonths===e?`is-active`:``}"
                      data-warranty="${e}"
                    >
                      ${e===0?`0`:e}
                    </button>
                  `).join(``)}
            </div>
          </section>

          <section class="tao-don-section">
            <h3>Hình thức thu tiền</h3>

            ${n?`
                  <div class="tao-don-paid-banner">
                    Người bán đã thu đủ tiền
                  </div>
                `:`
                  <div class="tao-don-radio-list">
                    ${fe.map(e=>`
                          <label
                            class="${c.order.collectionType===e.key?`is-active`:``}"
                          >
                            <input
                              type="radio"
                              name="collection_type"
                              value="${e.key}"
                              ${c.order.collectionType===e.key?`checked`:``}
                            />

                            <span>
                              ${t(e.label)}
                            </span>
                          </label>
                        `).join(``)}
                  </div>
                `}
          </section>

          <section class="tao-don-section">
            <h3>
              ${c.order.loaiDon===`LAP_DAT`?`Công lắp đặt`:`Công giao hàng`}
            </h3>

            <label class="tao-don-field">
              <span>Số tiền công</span>

              <input
                type="text"
                inputmode="numeric"
                data-money-field
                value="${s(c.order.serviceFee)}"
                data-service-fee
              />
            </label>

            <div class="tao-don-option-grid tao-don-service-fee-grid">
              ${de.map(e=>`
                    <button
                      type="button"
                      class="${c.order.serviceFee===e?`is-active`:``}"
                      data-service-fee-option="${e}"
                    >
                      ${_e(e)}
                    </button>
                  `).join(``)}
            </div>
          </section>
        </section>
      `}function gt(){let e=V();return{title:`HÓA ĐƠN BÁN HÀNG`,code:c.orderCode,createdAt:c.catalog?.server_time||new Date,customer:{name:c.customerDraft.name||`Khách lẻ`,phone:c.customerDraft.phone,address:c.customerDraft.address,note:c.customerDraft.note},orderNote:c.order.note.trim(),warrantyMonths:c.order.warrantyMonths,lines:c.lines.map(e=>({name:z(e),quantity:e.quantity,unitPrice:e.unitPrice,amount:e.quantity*e.unitPrice})),subtotal:e.goodsTotal,shipping:e.shipping,install:e.install,vatPercent:e.vatPercent,vatAmount:e.vat,total:e.total,paid:e.paid}}function _t(){if(!c.submittedDocument){I(c.createdOrderResponse);return}c.screen=`sales-document`,k({headerMode:`title`,title:`Hóa đơn bán hàng`,showRightAction:!0,rightIcon:`⎙`,rightLabel:`In`,onBack:L,onRightAction(){le(c.submittedDocument)},bottomActions:[{key:`print-sales-document`,label:`In hóa đơn`,variant:`secondary`,onClick(){le(c.submittedDocument)}},{key:`new-order`,label:`Tạo đơn mới`,variant:`primary`,async onClick(){await R()}}]}),r.innerHTML=`
        <section class="tao-don-page sales-document-page">
          ${ce(c.submittedDocument)}
        </section>
      `}async function vt(){let t=Le();if(t){H(t);return}if(c.order.warrantyMonths===null){let e=`Vui lòng chọn thời gian bảo hành.`;H(e),U(e);return}if(u.acquire(`create-order`)){c.busy=!0,c.createOrderRequestKey??=i(`create-order`),ht(),await new Promise(e=>{(globalThis.requestAnimationFrame??(e=>globalThis.setTimeout(e,0)))(()=>e())});try{c.customer=await Ae();let t=await Ce(Re(),c.createOrderRequestKey),n=t?.ma_don_hang??t?.data?.ma_don_hang??null;if(!n)throw Error(`RPC tạo đơn không trả về mã đơn hàng.`);c.orderCode=n,c.submittedDocument=gt(),c.busy=!1,c.createdOrderResponse=t,e(`order-created`,{idDonHang:ye(t),maDonHang:n,destination:`CHO_NHAN`,sourceModule:`tao-don`}),await I(t)}catch(e){if(c.busy=!1,e?.code===`CUSTOMER_PHONE_CONFLICT`){await P(),H(e.message);return}await F(),H(e.message)}finally{u.release(`create-order`)}}}function yt(e){c.screen=`success`;let n=e?.ma_don_hang??e?.data?.ma_don_hang??c.orderCode??null;k({headerMode:`title`,title:`Đã tạo đơn`,showRightAction:!1,async onBack(){await R()},bottomActions:[{key:`view-sales-document`,label:`Xem hóa đơn`,variant:`secondary`,onClick:Pe},{key:`new-order`,label:`Tạo đơn mới`,variant:`primary`,async onClick(){await R()}}]}),r.innerHTML=`
        <section class="tao-don-page tao-don-success-page">
          <div class="tao-don-success-card">
            <div class="tao-don-success-icon">✓</div>

            <h2>Tạo đơn thành công</h2>

            <p>
              Đơn đã chuyển sang
              <strong>Chờ nhận</strong>.
            </p>

            ${n?`
                    <small>
                      Mã đơn: ${t(n)}
                    </small>
                  `:``}

          </div>
        </section>
      `}async function bt({reason:e=`retry`}={}){if(!m())return;let t=h.snapshot();if(t.loading||t.refreshing)return;let n=null;if(!t.loaded&&e===`initial`){let e=globalThis.performance?.now?.()??Date.now();await P(),n=(globalThis.performance?.now?.()??Date.now())-e,o?.markReady?.({state:`ready`,bootstrapPending:!0,firstPaintMs:n}),console.info(`[KANGAROO Perf]`,{module:`tao-don`,phase:`first-paint`,durationMs:Number(n.toFixed(2))})}let r=globalThis.performance?.now?.()??Date.now(),i=t.loaded?h.refresh({reason:e}):h.load({reason:e});try{let e=await i,t=(globalThis.performance?.now?.()??Date.now())-r;if(e?.stale===!0||!m())return;if(c.catalog=e?.data&&typeof e.data==`object`?e.data:{customers:[],products:[]},c.customerResults=[],c.productResults=[],j(A()),!c.customer?.id_khach_hang)throw Error(`RPC chưa trả khách hàng mặc định.`);let a=globalThis.performance?.now?.()??Date.now();await P();let s=(globalThis.performance?.now?.()??Date.now())-a;console.info(`[KANGAROO Perf]`,{module:`tao-don`,phase:`bootstrap-hydrated`,firstPaintMs:n===null?null:Number(n.toFixed(2)),rpcMs:Number(t.toFixed(2)),renderMs:Number(s.toFixed(2))}),o?.markReady?.({state:`ready`,hasDefaultCustomer:!0,durationMs:e?.durationMs??null})}catch(e){if(!m())return;c.error=e,Be(),o?.markReady?.({state:`error`,message:e?.message||`Không tải được dữ liệu Tạo đơn.`})}}bt({reason:`initial`})}};export{E as default};