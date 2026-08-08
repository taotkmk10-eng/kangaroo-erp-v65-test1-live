import{i as e,t}from"./realtimeImpactRegistry-uvlr93CK.js";import{t as n}from"./runtimeBus-2EJwbL_u.js";import{c as r,n as i,o as a,r as o,t as s}from"./screenStack-BTwISuHL.js";import{t as c}from"./runtimeCore-t2AnId75.js";import{a as l,i as u,n as d,r as f,t as ee}from"./actionLock-BTZKYVnA.js";function te(){return a(`rpc_get_tao_don_bootstrap`,{},`Không tải được dữ liệu khởi tạo Tạo đơn`)}function ne({search:e=null,limit:t=20}={}){return a(`rpc_search_tao_don_customers`,{p_search:String(e??``).trim()||null,p_limit:Math.max(1,Number(t)||20)},`Không tìm được khách hàng`)}function re({search:e=null,categoryId:t=null,limit:n=30}={}){return a(`rpc_search_tao_don_products`,{p_search:String(e??``).trim()||null,p_id_danh_muc:t||null,p_limit:Math.max(1,Number(n)||30)},`Không tìm được sản phẩm`)}function ie(e,t){return a(`rpc_tao_khach_hang`,{p_request_key:t,p_payload:e},`Không tạo được khách hàng`)}function ae(e,t){return a(`rpc_sua_khach_hang`,{p_request_key:t,p_payload:e},`Không sửa được khách hàng`)}function oe(e,t){return a(`rpc_tao_don`,{p_request_key:t,p_payload:e},`Không tạo được đơn hàng`)}function p(e={}){return e.name||e.ten_san_pham||e.product?.ten_san_pham||e.product?.model||`Sản phẩm`}function m(e={}){return Math.max(1,l(e.quantity??e.so_luong??1))}function h(e={}){return Math.max(0,l(e.unitPrice??e.don_gia??0))}function g(e={}){return Math.max(0,l(e.amount??e.thanh_tien??m(e)*h(e)))}function _(e={}){let t=Array.isArray(e.lines)?e.lines:[],n=l(e.subtotal??t.reduce((e,t)=>e+g(t),0)),r=l(e.shipping),i=l(e.install),a=l(e.vatAmount),o=l(e.total??n+r+i+a),s=l(e.paid);return{title:e.title||`PHIẾU BÁN HÀNG`,code:e.code||``,createdAt:e.createdAt||new Date,customer:{name:e.customer?.name||`Khách lẻ`,phone:e.customer?.phone||``,address:e.customer?.address||``,note:e.customer?.note||``},orderNote:String(e.orderNote??``).trim(),warrantyMonths:l(e.warrantyMonths),lines:t,subtotal:n,shipping:r,install:i,vatPercent:l(e.vatPercent),vatAmount:a,total:o,paid:s,remaining:Math.max(o-s,0)}}function v(e,t,n=``){return`
    <div class="sales-document-money-row ${n}">
      <span>${r(e)}</span>
      <strong>${r(f(t))}</strong>
    </div>
  `}function se(e={},{printMode:t=!1}={}){let n=_(e);return`
    <article class="sales-document ${t?`is-print`:``}">
      <header class="sales-document-header">
        <h1>${r(n.title)}</h1>
        <p>
          ${n.code?`Mã đơn: ${r(n.code)}`:``}
          ${n.code?` · `:``}
          ${r(d(n.createdAt,``))}
        </p>
      </header>

      <section class="sales-document-customer">
        <div><span>Khách hàng</span><strong>${r(n.customer.name)}</strong></div>
        ${n.customer.phone?`<div><span>Số điện thoại</span><strong>${r(n.customer.phone)}</strong></div>`:``}
        ${n.customer.address?`<div><span>Địa chỉ</span><strong>${r(n.customer.address)}</strong></div>`:``}
        ${n.customer.note?`<div><span>Ghi chú khách hàng</span><strong>${r(n.customer.note)}</strong></div>`:``}
        ${n.orderNote?`<div><span>Ghi chú đơn</span><strong>${r(n.orderNote)}</strong></div>`:``}
        <div><span>Bảo hành</span><strong>${r(`${n.warrantyMonths} tháng`)}</strong></div>
      </section>

      <section class="sales-document-lines">
        ${n.lines.map(e=>`
          <div class="sales-document-line">
            <strong>${r(p(e))}</strong>
            <span>
              ${r(String(m(e)))} ×
              ${r(f(h(e)))} =
              ${r(f(g(e)))}
            </span>
          </div>
        `).join(``)}
      </section>

      <section class="sales-document-totals">
        ${v(`Tạm tính`,n.subtotal)}
        ${n.shipping>0?v(`Phí vận chuyển`,n.shipping):``}
        ${n.install>0?v(`Phí lắp đặt`,n.install):``}
        ${n.vatAmount>0?v(`VAT ${n.vatPercent}%`,n.vatAmount):``}
        ${v(`Tổng đơn`,n.total,`is-total`)}
        ${v(`Đã thanh toán`,n.paid)}
        ${v(`Cần thanh toán`,n.remaining,`is-remaining`)}
      </section>

      <footer class="sales-document-footer">
        Cảm ơn quý khách và hẹn gặp lại.
      </footer>
    </article>
  `}function ce(){return`
    *{box-sizing:border-box}body{margin:0;padding:12px;font-family:Arial,sans-serif;color:#111;background:#fff}
    .sales-document{max-width:760px;margin:0 auto;border:1px solid #d1d5db;padding:16px}
    .sales-document-header{text-align:center;border-bottom:1px solid #d1d5db;padding-bottom:10px}.sales-document-header h1{margin:0;font-size:21px}.sales-document-header p{margin:5px 0 0;font-size:12px;color:#4b5563}
    .sales-document-customer{padding:10px 0;border-bottom:1px solid #d1d5db}.sales-document-customer div,.sales-document-money-row{display:grid;grid-template-columns:140px minmax(0,1fr);gap:12px;padding:3px 0;font-size:13px}.sales-document-customer strong{text-align:right}
    .sales-document-line{padding:9px 0;border-bottom:1px solid #e5e7eb}.sales-document-line strong{display:block;font-size:14px}.sales-document-line span{display:block;margin-top:4px;font-size:13px}
    .sales-document-totals{margin-top:8px;margin-left:auto;max-width:340px}.sales-document-money-row{grid-template-columns:1fr auto}.sales-document-money-row.is-total{font-size:15px;border-top:1px solid #111;margin-top:4px;padding-top:7px}.sales-document-money-row.is-remaining strong{font-weight:800}
    .sales-document-footer{text-align:center;margin-top:14px;padding-top:10px;border-top:1px solid #d1d5db;font-size:12px}
    @media print{body{padding:0}.sales-document{border:0;max-width:none}}
  `}function le(e={}){let t=window.open(``,`_blank`,`width=840,height=920`);if(!t)return!1;let n=_(e);return t.document.open(),t.document.write(`<!doctype html><html><head><meta charset="utf-8"><title>${r(n.code||n.title)}</title><style>${ce()}</style></head><body>${se(n,{printMode:!0})}<script>window.onload=()=>setTimeout(()=>window.print(),80);<\/script></body></html>`),t.document.close(),!0}var ue=Object.freeze([[`GIA_BAN_LE`,`Giá bán lẻ`,`gia_ban_le`],[`GIA_BAN_1`,`Giá bán 1`,`gia_ban_1`],[`GIA_BAN_2`,`Giá bán 2`,`gia_ban_2`],[`GIA_BAN_3`,`Giá bán 3`,`gia_ban_3`],[`GIA_BAN_4`,`Giá bán 4`,`gia_ban_4`],[`GIA_BAN_5`,`Giá bán 5`,`gia_ban_5`]]),de=Object.freeze([0,3,6,12,18,24]),fe=Object.freeze([0,5e4,1e5,2e5,3e5,4e5]),pe=Object.freeze([{key:`GIAO_XONG_THU_LUON`,label:`Giao xong thu luôn`},{key:`THU_HO_COD`,label:`Thu hộ`},{key:`NGUOI_BAN_TU_THU`,label:`Người bán tự thu`}]);function y(e){let t=String(e??``).replace(/[^\d-]/g,``),n=Number.parseInt(t||`0`,10);return Number.isFinite(n)?n:0}function b(e){return String(e??``).normalize(`NFD`).replace(/\p{Diacritic}/gu,``).toLocaleLowerCase(`vi-VN`).trim()}function x(e){let t=Number(e?.so_luong_con_lai);return Number.isFinite(t)?Math.max(0,Math.trunc(t)):0}function S(e){return e?.het_hang===!0||x(e)<=0}function me(e){return ue.map(([t,n,r])=>{let i=e?.prices?.[r];if(i==null||i===``)return null;let a=Number(i);return!Number.isFinite(a)||a<0?null:{key:t,label:n,value:a}}).filter(Boolean)}function C(e){let t=me(e);return t.find(e=>e.key===`GIA_BAN_LE`)??t[0]??null}function he(e){let t=C(e);return!t||S(e)?null:{key:`stock:${e.id_san_pham}`,product:e,priceType:t.key,listPrice:t.value,unitPrice:t.value,quantity:1}}function ge(e){return{...e,product:e.product}}function _e(){return{loaiDon:`GIAO_HANG`,phiVanChuyen:0,phiLapDat:0,vatPercent:0,paid:0,warrantyMonths:null,collectionType:`GIAO_XONG_THU_LUON`,serviceFee:0,note:``}}function ve(e){let t=Math.max(0,Number(e)||0);return t===0?`0`:`${Math.round(t/1e3)}k`}function ye(e){let t=e?new Date(e):new Date;return Number.isNaN(t.getTime())?`Theo thời gian máy chủ`:new Intl.DateTimeFormat(`vi-VN`,{hour:`2-digit`,minute:`2-digit`,day:`numeric`,month:`numeric`,year:`numeric`}).format(t)}function w(e){return e?.data?.customer??e?.data?.khach_hang??e?.customer??e?.khach_hang??null}function be(e){return e?.entity_id??e?.id_don_hang??null}function xe(e){return e?.sdt?.trim()||`Chưa có số điện thoại`}function Se(e){return e?.dia_chi?.trim()||`Chưa có địa chỉ`}function T(e){let t=String(e??``).trim();if(!t)return``;let n=t.startsWith(`+`),r=t.replace(/\D/g,``);return n?`+${r}`:r}function E(e,t){return b(e)===b(t)}var Ce={id:`tao-don`,label:`Tạo đơn`,shortLabel:`TĐ`,render(a,l={}){let d={catalog:null,busy:!1,orderCode:null,phoneLookupTimer:null,phoneLookupToken:0,customerSearchRequestId:0,productSearchRequestId:0,customerSearchCache:new Map,productSearchCache:new Map,customerSearchLoading:!1,productSearchLoading:!1,customerSearchError:``,productSearchError:``,customerResults:[],productResults:[],error:null,screen:`loading`,customer:null,customerDraft:{name:`Khách lẻ`,phone:``,address:``,note:``},customerConflict:null,editingCustomer:null,lines:[],productDraft:[],search:``,order:_e(),createCustomerRequestKey:null,updateCustomerRequestKey:null,createOrderRequestKey:null,submittedDocument:null,createdOrderResponse:null},p=ee(),m=s();function h(){function e(e){let t=e.target.closest(`input, textarea`);!t||t.readOnly||t.disabled||requestAnimationFrame(()=>{try{t.select()}catch{}})}function t(e){let t=e.target.closest(`input, textarea`);t&&document.activeElement===t&&e.preventDefault()}function n(e){let t=e.target.closest(`[data-money-field]`);if(!t)return;let n=Math.max(0,y(t.value));t.dataset.rawValue=String(n),t.value=u(n)}return a.addEventListener(`focusin`,e),a.addEventListener(`pointerup`,t),a.addEventListener(`input`,n),()=>{a.removeEventListener(`focusin`,e),a.removeEventListener(`pointerup`,t),a.removeEventListener(`input`,n)}}let g=h();function _(){return typeof l?.isActive!=`function`||l.isActive()}let v=c({key:`tao-don-bootstrap`,runtime:l,initialData:null,load(){return te()},normalize(e){return{...e&&typeof e==`object`?e:{},customers:Array.isArray(e?.customers)?e.customers:[],products:[]}}});function ce(e){return String(e??``).trim().toLocaleLowerCase(`vi`)}function ue(e,t,n,r){let i=Date.now(),a=e.get(t);if(a&&a.expiresAt>i)return a.promise;e.delete(t);let o={expiresAt:i+n,promise:null};return o.promise=Promise.resolve().then(r).catch(n=>{throw e.get(t)===o&&e.delete(t),n}),e.set(t,o),o.promise}function b(e={}){let t=JSON.stringify([ce(e?.search),Math.max(1,Number(e?.limit)||20)]);return ue(d.customerSearchCache,t,6e4,()=>ne(e))}function me(e={}){let t=JSON.stringify([ce(e?.search),String(e?.categoryId??``).trim(),Math.max(1,Number(e?.limit)||30)]);return ue(d.productSearchCache,t,15e3,()=>re(e))}async function Ce(...e){let t=await ie(...e);return d.customerSearchCache.clear(),t}async function we(...e){let t=await ae(...e);return d.customerSearchCache.clear(),t}async function Te(...e){let t=await oe(...e);return d.productSearchCache.clear(),t}let D=i({debounceMs:350,isActive:_,onApply(e){return _t(e)}}),O=i({debounceMs:350,isActive:_,onApply(e){return Ct(e)}}),k=new Map,A=0;function Ee(){A&&=(globalThis.clearTimeout(A),0)}function De(e={}){let t=String(e?.entity_type??`UNKNOWN`).trim().toUpperCase(),n=String(e?.entity_id??``).trim(),r=String(e?.action_key??`UNKNOWN`).trim().toUpperCase();return t+`:`+(n||r)}function Oe(){Ee();let n=async()=>{if(A=0,!_()){k.clear();return}if(d.busy){A=globalThis.setTimeout(()=>{n()},180);return}let r=[...k.values()];k.clear();let i=!1,a=!1;for(let n of r){let r=e(n,`tao-don`);r.resources.includes(t.CUSTOMER_CACHE)&&(i=!0),r.resources.includes(t.PRODUCT_CACHE)&&(a=!0)}i&&(d.customerSearchCache.clear(),d.phoneLookupToken+=1,d.screen===`customer-picker`&&await _t(D.snapshot()?.draft??``).catch(e=>{console.warn(`[TaoDon] Realtime khách hàng lỗi.`,e)})),a&&(d.productSearchCache.clear(),d.screen===`product-picker`&&await Ct(O.snapshot()?.draft??``).catch(e=>{console.warn(`[TaoDon] Realtime tồn kho lỗi.`,e)})),k.size&&Oe()};A=globalThis.setTimeout(()=>{n()},160)}function ke(t={}){_()&&e(t,`tao-don`).shouldDispatch&&(k.set(De(t),t),Oe())}let j=0,M=!1,N=null;function Ae(){j&&=(globalThis.clearTimeout(j),0)}function je(){M=!0,Ae();let e=async()=>{if(j=0,!_())return M=!1,!1;if(d.busy)return j=globalThis.setTimeout(()=>{e()},180),!1;if(N)return N;if(!M)return!1;M=!1,d.customerSearchRequestId+=1,d.productSearchRequestId+=1,d.phoneLookupToken+=1,d.phoneLookupTimer&&=(globalThis.clearTimeout(d.phoneLookupTimer),null),d.customerSearchCache.clear(),d.productSearchCache.clear();let t=d.screen,n=Promise.resolve().then(async()=>t===`customer-picker`?(await _t(D.snapshot()?.draft??``),!0):(t===`product-picker`&&await Ct(O.snapshot()?.draft??``),!0)).catch(e=>(_()&&console.warn(`[TaoDon] Authoritative resume lỗi.`,e),!1)),r;return r=n.finally(()=>{N===r&&(N=null),_()&&M&&je()}),N=r,r};return j=globalThis.setTimeout(()=>{e()},0),!0}function Me(){return _()?je():!1}l?.onRealtimeInvalidation?.(ke),l?.onRealtimeResume?.(Me),l?.onCleanup?.(()=>{Ee(),Ae(),M=!1,k.clear(),d.customerSearchRequestId+=1,d.productSearchRequestId+=1,d.phoneLookupToken+=1,d.customerSearchCache.clear(),d.productSearchCache.clear(),rt&&=(a.removeEventListener(`submit`,it),a.removeEventListener(`click`,ut),!1),ft&&=(a.removeEventListener(`change`,pt),a.removeEventListener(`input`,mt),!1),D.dispose(),O.dispose(),d.phoneLookupTimer&&=(clearTimeout(d.phoneLookupTimer),null),g()});function P(e){a.dispatchEvent(new CustomEvent(`kangaroo:page-chrome`,{bubbles:!0,detail:e}))}function Ne(){return(d.catalog?.allowed_actions??[]).includes(`TAO_DON_USE`)}function F(){if(d.catalog?.default_customer?.id_khach_hang)return d.catalog.default_customer;let e=d.catalog?.default_customer_id;return(d.catalog?.customers??[]).find(t=>t.la_khach_mac_dinh===!0||e&&t.id_khach_hang===e)??null}function Pe(e){let t=e?.la_khach_mac_dinh===!0;return{name:e?.ten_khach_hang?.trim()||`Khách lẻ`,phone:t?``:T(e?.sdt),address:t?``:e?.dia_chi?.trim()||``,note:t?``:e?.ghi_chu?.trim()||``}}function I(e){d.customer=e??null,d.customerDraft=Pe(e),d.customerConflict=null}function L(e,t=d.catalog?.customers??[]){let n=T(e);return n?t.find(e=>T(e.sdt)===n)??null:null}function Fe(){let e=d.customerDraft,t=String(e?.name??``).trim(),n=String(e?.phone??``).trim(),r=T(n);if(n&&!/^0[0-9]{9}$/.test(r))return`Số điện thoại phải gồm đúng 10 chữ số và bắt đầu bằng 0.`;if(r&&!t)return`Có số điện thoại thì phải nhập tên khách hàng.`;let i=Pe(F());return!r&&(!E(t,i.name)||String(e?.address??``).trim()!==i.address||String(e?.note??``).trim()!==i.note)?`Muốn lưu tên, địa chỉ hoặc ghi chú khách hàng thì phải nhập số điện thoại.`:null}async function Ie(e){let t=T(e);if(!t)return null;let n=L(t);if(n)return n;let r=(await b({search:t,limit:20}))?.customers??[];return r.forEach(R),L(t,r)}function Le(e,t){let n=t.address.trim()||e?.dia_chi?.trim()||``,r=t.note.trim()||e?.ghi_chu?.trim()||``;return!E(t.name,e.ten_khach_hang)||T(t.phone)!==T(e.sdt)||n!==(e.dia_chi?.trim()||``)||r!==(e.ghi_chu?.trim()||``)}async function Re(e,t){let n=T(t.phone),r={name:String(t.name??``).trim()||e.ten_khach_hang,phone:n,address:String(t.address??``).trim(),note:String(t.note??``).trim()};if(!Le(e,r))return I(e),e;d.updateCustomerRequestKey??=o(`update-customer`);let i=w(await we({id_khach_hang:e.id_khach_hang,expected_row_version:e.row_version,ten_khach_hang:r.name,sdt:r.phone,dia_chi:r.address||null,ma_so_thue:e.ma_so_thue||null,email:e.email||null,ghi_chu:r.note||null},d.updateCustomerRequestKey));if(!i?.id_khach_hang)throw Error(`RPC không trả về khách hàng đã sửa.`);return R(i),I(i),d.updateCustomerRequestKey=null,i}async function ze(){let e=d.customerDraft,t=String(e?.name??``).trim()||`Khách lẻ`,n=T(e?.phone),r=F();if(!n){if(!r?.id_khach_hang)throw Error(`Không tìm thấy khách lẻ mặc định.`);return I(r),r}if(!/^0[0-9]{9}$/.test(n))throw Error(`Số điện thoại phải gồm đúng 10 chữ số và bắt đầu bằng 0.`);let i=await Ie(n),a=d.customer?.id_khach_hang?d.customer:null,s=a?.la_khach_mac_dinh===!0;if(a&&!s){if(i&&i.id_khach_hang!==a.id_khach_hang){d.customerConflict=i;let e=Error(`Số điện thoại ${n} đã thuộc khách "${i.ten_khach_hang}".`);throw e.code=`CUSTOMER_PHONE_CONFLICT`,e}return Re(a,{name:t,phone:n,address:e.address,note:e.note})}if(i){let e=E(t,`Khách lẻ`),r=E(t,i.ten_khach_hang);if(!e&&!r){d.customerConflict=i;let e=Error(`Số điện thoại ${n} đã thuộc khách "${i.ten_khach_hang}".`);throw e.code=`CUSTOMER_PHONE_CONFLICT`,e}return I(i),i}d.createCustomerRequestKey??=o(`create-customer`);let c=w(await Ce({ten_khach_hang:t,sdt:n,dia_chi:String(e.address??``).trim()||null,ma_so_thue:null,email:null,ghi_chu:String(e.note??``).trim()||null},d.createCustomerRequestKey));if(!c?.id_khach_hang)throw Error(`RPC không trả về khách hàng vừa tạo.`);return R(c),I(c),d.createCustomerRequestKey=null,c}function R(e){if(!e?.id_khach_hang)return;let t=d.catalog?.customers??[];d.catalog.customers=[e,...t.filter(t=>t.id_khach_hang!==e.id_khach_hang)],e.la_khach_mac_dinh&&(d.catalog.default_customer=e,d.catalog.default_customer_id=e.id_khach_hang),d.customer?.id_khach_hang===e.id_khach_hang&&(d.customer=e)}function z(){return m.reset(`main`,J)}async function Be(){d.customerResults=[],d.customerSearchError=``,await m.open(`customer-picker`,bt),await D.reset(``,{force:!0,reason:`open`})}function Ve(e){let t=e?.id_khach_hang?`edit-customer:${e.id_khach_hang}`:`new-customer`;return m.open(t,()=>xt(e))}async function He(){d.productResults=[],d.productSearchError=``,d.productDraft=d.lines.map(ge),await m.open(`product-picker`,Ot),await O.reset(``,{force:!0,reason:`open`})}function B(){let e=Ke();return e?(q(e),Promise.resolve(!1)):m.open(`confirmation`,kt)}function V(e){return d.createdOrderResponse=e??d.createdOrderResponse,m.reset(`success`,()=>Nt(d.createdOrderResponse))}function Ue(){return d.submittedDocument?m.open(`sales-document`,jt):V(d.createdOrderResponse)}function H(){return m.back()}async function U(){We(),await z()}function We(){d.phoneLookupTimer&&=(clearTimeout(d.phoneLookupTimer),null),d.phoneLookupToken+=1,d.orderCode=null,d.busy=!1,d.customerConflict=null,d.editingCustomer=null,d.lines=[],d.productDraft=[],d.order=_e(),d.search=``,d.createCustomerRequestKey=null,d.updateCustomerRequestKey=null,d.createOrderRequestKey=null,d.submittedDocument=null,d.createdOrderResponse=null,d.error=null,I(F())}function W(e){return e.product?.ten_san_pham??e.product?.model??`Sản phẩm`}function G(e){return x(e.product)}function K(){let e=d.lines.reduce((e,t)=>e+Math.max(0,y(t.unitPrice))*Math.max(1,y(t.quantity)),0),t=d.order.loaiDon===`GIAO_HANG`?Math.max(0,y(d.order.phiVanChuyen)):0,n=d.order.loaiDon===`LAP_DAT`?Math.max(0,y(d.order.phiLapDat)):0,r=Math.min(100,Math.max(0,Number(d.order.vatPercent)||0)),i=Math.round(e*r/100),a=e+t+n+i,o=Math.max(0,y(d.order.paid));return{goodsTotal:e,shipping:t,install:n,vatPercent:r,vat:i,total:a,paid:o,remaining:a-o}}function Ge(){let e=K().total;d.order.paid=Math.min(e,Math.max(0,y(d.order.paid)))}function Ke(){let e=K();if(!Ne())return`Tài khoản không có quyền tạo đơn.`;let t=Fe();if(t)return t;if(d.lines.length===0)return`Đơn hàng phải có ít nhất một sản phẩm.`;for(let e of d.lines){if(y(e.quantity)<=0||y(e.unitPrice)<0)return`Số lượng hoặc đơn giá không hợp lệ.`;let t=G(e);if(t<=0)return`${W(e)} đã hết hàng.`;if(e.quantity>t)return`${W(e)} chỉ còn ${t} sản phẩm.`}return e.paid>e.total?`Đã thanh toán không được vượt tổng đơn.`:null}function qe(){let e=K(),t=e.total>0&&e.paid===e.total;return{id_khach_hang:d.customer.id_khach_hang,loai_don:d.order.loaiDon,kieu_thu_tien:t?`NGUOI_TAO_DA_THU`:d.order.collectionType,phi_van_chuyen:e.shipping,phi_lap_dat:e.install,vat_percent:e.vatPercent,so_tien_da_thanh_toan:e.paid,so_tien_cong_tham_chieu:Math.max(0,y(d.order.serviceFee)),bao_hanh_thang:Math.max(0,y(d.order.warrantyMonths)),ghi_chu:d.order.note.trim()||null,lines:d.lines.map(e=>{let t=Math.max(0,y(e.unitPrice));return{id_san_pham:e.product.id_san_pham,ma_loai_gia:e.priceType,don_gia_ap_dung:t,so_luong:Math.max(1,y(e.quantity)),ly_do_dieu_chinh_gia:t===e.listPrice?null:`Điều chỉnh giá tại màn Tạo đơn`}})}}function q(e){let t=a.querySelector(`[data-tao-don-message]`);t&&(t.hidden=!e,t.className=`tao-don-message is-error`,t.textContent=e??``)}function Je(e){let t=a.querySelector(`[data-warranty-error]`),n=a.querySelector(`[data-warranty-section]`),r=a.querySelector(`[data-warranty-input]`);t&&(t.hidden=!e,t.textContent=e??``),n?.classList.toggle(`has-error`,!!e),e&&requestAnimationFrame(()=>{n?.scrollIntoView({behavior:`smooth`,block:`center`}),r?.focus({preventScroll:!0})})}function Ye(){P({headerMode:`title`,title:`Tạo đơn`,showRightAction:!1,bottomActions:[{key:`reset`,label:`Xóa form`,variant:`secondary`,disabled:d.busy,async onClick(){await U()}},{key:`confirm`,label:`Xác nhận`,variant:`primary`,disabled:d.busy,onClick:B}]})}function Xe(){d.screen=`load-error`,P({headerMode:`title`,title:`Tạo đơn`,showRightAction:!0,rightIcon:`↻`,rightLabel:`Tải lại`,onRightAction:Pt,bottomActions:[]}),a.innerHTML=`
        <section class="tao-don-page">
          <div class="tao-don-state-card is-error">
            <strong>Không tải được dữ liệu Tạo đơn</strong>
            <p>${r(d.error?.message)}</p>

            <button
              class="tao-don-primary-button"
              type="button"
              data-action="retry-load"
            >
              Tải lại
            </button>
          </div>
        </section>
      `}function Ze(){let e=d.customerDraft;return d.customerConflict,`
        <div class="tao-don-inline-customer">
          <input
            class="tao-don-customer-input"
            data-customer-field="name"
            value="${r(e.name)}"
            placeholder="Tên khách hàng"
            autocomplete="name"
          />

          <input
            class="tao-don-customer-input"
            data-customer-field="phone"
            value="${r(e.phone)}"
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
          >${r(e.address)}</textarea>

          <textarea
            class="tao-don-customer-input"
            data-customer-field="note"
            rows="2"
            placeholder="Ghi chú khách hàng"
          >${r(e.note)}</textarea>

          <div data-customer-phone-match>
            ${et()}
          </div>
        </div>
      `}function Qe(){return d.lines.length===0?`
          <button
            class="tao-don-empty-card"
            type="button"
            data-action="open-products"
          >
            Chưa có sản phẩm.
            <span>Bấm Thêm để chọn sản phẩm.</span>
          </button>
        `:d.lines.map((e,t)=>{let n=G(e),i=n;return`
            <article
              class="tao-don-compact-line"
              data-line-index="${t}"
            >
              <div class="tao-don-compact-line-head">
                <div>
                  <strong>
                    ${r(W(e))}
                  </strong>

                  <span>Còn lại: ${n}</span>
                </div>

                <button
                  type="button"
                  data-action="remove-line"
                  data-index="${t}"
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
                    data-index="${t}"
                  >
                    −
                  </button>

                  <input
                    type="number"
                    min="1"
                    ${i===``?``:`max="${i}"`}
                    value="${e.quantity}"
                    data-line-quantity="${t}"
                  />

                  <button
                    type="button"
                    data-action="increase-line"
                    data-index="${t}"
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
                  value="${u(e.unitPrice)}"
                  data-line-price="${t}"
                  aria-label="Đơn giá"
                />

                <span class="tao-don-calc-symbol">=</span>

                <strong class="tao-don-line-amount">
                  ${f(e.quantity*e.unitPrice)}
                </strong>
              </div>
            </article>
          `}).join(``)}function $e(){let e=a.firstElementChild?.matches(`[data-tao-don-main-shell]`)?a.firstElementChild:null;e||=(a.innerHTML=`
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
        `,a.firstElementChild);let t=e?.querySelector(`#tao-don-form`);if(!t)throw Error(`Không dựng được form Tạo đơn.`);return t}function J(){d.screen=`main`,Ye();let e=K(),t=d.order.loaiDon===`GIAO_HANG`?`Phí vận chuyển`:`Phí lắp đặt`,n=d.order.loaiDon===`GIAO_HANG`?d.order.phiVanChuyen:d.order.phiLapDat,i=$e();i.innerHTML=`
            <div
              class="tao-don-message"
              data-tao-don-message
              hidden
            ></div>

            <div class="tao-don-meta-grid">
              <div class="tao-don-meta-item">
                <span>Mã đơn</span>
                <strong>
                  ${r(d.orderCode??`Tự động khi tạo`)}
                </strong>
              </div>

              <div class="tao-don-meta-item">
                <span>Ngày</span>
                <strong>
                  ${r(ye(d.catalog?.server_time))}
                </strong>
              </div>
            </div>

            <section class="tao-don-section">
              <h3>Loại đơn</h3>

              <div class="tao-don-segmented">
                <button
                  type="button"
                  class="${d.order.loaiDon===`GIAO_HANG`?`is-active`:``}"
                  data-order-type="GIAO_HANG"
                >
                  Giao hàng
                </button>

                <button
                  type="button"
                  class="${d.order.loaiDon===`LAP_DAT`?`is-active`:``}"
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

              ${Ze()}
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
                ${Qe()}
              </div>
            </section>

            <section class="tao-don-section">
              <h3>Thanh toán khách</h3>

              <div class="tao-don-money-card">
                <div class="tao-don-money-row">
                  <span>Tạm tính</span>
                  <strong>${f(e.goodsTotal)}</strong>
                </div>

                <label class="tao-don-money-row">
                  <span>${t}</span>

                  <input
                    type="text"
                    inputmode="numeric"
                    data-money-field
                    value="${u(n)}"
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
                      value="${d.order.vatPercent}"
                      data-order-money="vat"
                    />

                    <small>%</small>
                  </label>

                  <strong>${f(e.vat)}</strong>
                </div>

                <div class="tao-don-vat-options">
                  ${[0,5,8,10].map(e=>`
                        <button
                          type="button"
                          class="${Number(d.order.vatPercent)===e?`is-active`:``}"
                          data-vat="${e}"
                        >
                          ${e}
                        </button>
                      `).join(``)}
                </div>

                <div class="tao-don-money-row is-total">
                  <span>Tổng đơn</span>
                  <strong>${f(e.total)}</strong>
                </div>

                <label class="tao-don-money-row">
                  <span>Đã thanh toán</span>

                  <input
                    type="text"
                    inputmode="numeric"
                    data-money-field
                    value="${u(e.paid)}"
                    data-order-money="paid"
                  />
                </label>

                <div class="tao-don-money-row is-remaining">
                  <span>Còn lại</span>
                  <strong>${f(e.remaining)}</strong>
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
              >${r(d.order.note)}</textarea>
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
      `}function et(){let e=d.customerConflict;if(!e)return``;let t=e.dia_chi?` · ${r(e.dia_chi)}`:``;return`
        <div class="tao-don-customer-conflict">
          <div>
            <strong>
              Số điện thoại đã có trong danh bạ
            </strong>

            <span>
              ${r(e.ten_khach_hang)}${t}
            </span>
          </div>

          <button
            type="button"
            data-use-existing-customer
          >
            Dùng khách này
          </button>
        </div>
      `}function tt(){let e=a.querySelector(`[data-customer-phone-match]`);e&&(e.innerHTML=et())}function nt(e){if(!_())return;d.phoneLookupTimer&&clearTimeout(d.phoneLookupTimer),d.phoneLookupToken+=1;let t=d.phoneLookupToken;if(!/^0[0-9]{9}$/.test(e)){d.customerConflict=null,tt();return}d.phoneLookupTimer=setTimeout(async()=>{try{let n=await Ie(e);if(t!==d.phoneLookupToken||!_())return;d.customerConflict=n??null,tt()}catch{t===d.phoneLookupToken&&_()&&(d.customerConflict=null,tt())}},250)}let rt=!1;function Y(e,t){let n=(e.target instanceof Element?e.target:null)?.closest(t)??null;return n&&a.contains(n)?n:null}function X(){Ge(),d.createOrderRequestKey=null}function it(e){let t=Y(e,`#tao-don-form`);if(e.target===t){e.preventDefault(),B();return}let n=Y(e,`#tao-don-customer-form`);e.target===n&&(e.preventDefault(),St())}function at(e){return d.screen!==`load-error`||!Y(e,`[data-action="retry-load"]`)?!1:(e.preventDefault(),Pt(),!0)}function ot(e){if(d.screen!==`confirmation`)return!1;let t=Y(e,`[data-warranty]`);if(t)return e.preventDefault(),d.order.warrantyMonths=y(t.dataset.warranty),Je(``),d.createOrderRequestKey=null,B(),!0;let n=Y(e,`[data-service-fee-option]`);return n?(e.preventDefault(),d.order.serviceFee=y(n.dataset.serviceFeeOption),d.createOrderRequestKey=null,B(),!0):!1}function st(e){if(d.screen!==`confirmation`)return!1;let t=Y(e,`[data-warranty-input]`);if(t){let e=t.value.trim();return d.order.warrantyMonths=e===``?null:Math.min(120,Math.max(0,y(e))),d.order.warrantyMonths!==null&&Je(``),d.createOrderRequestKey=null,B(),!0}let n=Y(e,`input[name="collection_type"]`);if(n)return d.order.collectionType=n.value,d.createOrderRequestKey=null,B(),!0;let r=Y(e,`[data-service-fee]`);return r?(d.order.serviceFee=Math.max(0,y(r.value)),d.createOrderRequestKey=null,B(),!0):!1}function ct(e){if(d.screen!==`product-picker`)return!1;let t=Y(e,`[data-product-minus]`);if(t){e.preventDefault(),e.stopPropagation();let n=Z(t.dataset.productMinus);return n&&(--n.quantity,n.quantity<=0&&(d.productDraft=d.productDraft.filter(e=>e!==n)),Q(),$()),!0}let n=Y(e,`[data-product-plus]`);if(n){e.preventDefault(),e.stopPropagation();let t=Z(n.dataset.productPlus);if(t){let e=x(t.product);t.quantity<e&&(t.quantity+=1),Q(),$()}return!0}if(Y(e,`[data-product-counter]`))return!0;let r=Y(e,`[data-product-card]`);return r?(Et(r.dataset.productCard),!0):!1}function lt(e){if(d.screen!==`customer-picker`)return!1;let t=Y(e,`[data-edit-customer]`);if(t){e.preventDefault();let n=d.customerResults.find(e=>e.id_khach_hang===t.dataset.editCustomer);return n&&Ve(n),!0}let n=Y(e,`[data-customer-id]`);if(!n)return!1;e.preventDefault();let r=d.customerResults.find(e=>e.id_khach_hang===n.dataset.customerId);return r&&(I(r),d.createOrderRequestKey=null,z()),!0}function ut(e){if(at(e)||ot(e)||ct(e)||lt(e)||d.screen!==`main`)return;if(Y(e,`[data-use-existing-customer]`)){if(e.preventDefault(),!d.customerConflict)return;I(d.customerConflict),d.createOrderRequestKey=null,J();return}let t=Y(e,`[data-order-type]`);if(t){e.preventDefault(),d.order.loaiDon=t.dataset.orderType,X(),J();return}let n=Y(e,`[data-vat]`);if(n){e.preventDefault(),d.order.vatPercent=Number(n.dataset.vat),X(),J();return}let r=Y(e,[`[data-action="choose-customer"]`,`[data-action="open-products"]`,`[data-action="reset-order"]`,`[data-action="remove-line"]`,`[data-action="decrease-line"]`,`[data-action="increase-line"]`].join(`,`));if(!r)return;e.preventDefault();let i=r.dataset.action;if(i===`choose-customer`){Be();return}if(i===`open-products`){He();return}if(i===`reset-order`){We(),J();return}let a=y(r.dataset.index),o=d.lines[a];if(o){if(i===`remove-line`&&d.lines.splice(a,1),i===`decrease-line`&&(o.quantity=Math.max(1,o.quantity-1)),i===`increase-line`){let e=G(o);if(e!==null&&o.quantity>=e)return;o.quantity+=1}X(),J()}}function dt(){rt||=(a.addEventListener(`submit`,it),a.addEventListener(`click`,ut),!0)}let ft=!1;function pt(e){if(st(e)||d.screen!==`main`)return;let t=Y(e,`[data-line-quantity]`);if(t){let e=y(t.dataset.lineQuantity),n=d.lines[e];if(!n)return;let r=G(n),i=Math.max(1,y(t.value));r!==null&&(i=Math.min(r,i)),n.quantity=i,X(),J();return}let n=Y(e,`[data-line-price]`);if(n){let e=y(n.dataset.linePrice),t=d.lines[e];if(!t)return;t.unitPrice=Math.max(0,y(n.value)),X(),J();return}let r=Y(e,`[data-order-money]`);if(!r)return;let i=r.dataset.orderMoney,a=Math.max(0,y(r.value));i===`service-fee`&&(d.order.loaiDon===`GIAO_HANG`?d.order.phiVanChuyen=a:d.order.phiLapDat=a),i===`vat`&&(d.order.vatPercent=Math.min(100,Number(r.value)||0)),i===`paid`&&(d.order.paid=a),X(),J()}function mt(e){if(d.screen!==`main`)return;let t=Y(e,`[data-customer-field]`);if(t){let e=t.dataset.customerField;if(e===`name`&&(d.customerDraft.name=t.value),e===`phone`){let e=t.value.replace(/\D/g,``).slice(0,10);t.value=e,d.customerDraft.phone=e,nt(e)}e===`address`&&(d.customerDraft.address=t.value),e===`note`&&(d.customerDraft.note=t.value),d.createOrderRequestKey=null,d.createCustomerRequestKey=null,d.updateCustomerRequestKey=null;return}let n=Y(e,`[data-order-note]`);n&&(d.order.note=n.value,d.createOrderRequestKey=null)}function ht(){ft||=(a.addEventListener(`change`,pt),a.addEventListener(`input`,mt),!0)}function gt(){dt(),ht()}gt();async function _t(e){let t=d.customerSearchRequestId+1;d.customerSearchRequestId=t,d.customerSearchLoading=!0,d.customerSearchError=``,d.screen===`customer-picker`&&yt();try{let n=await b({search:e,limit:20});if(t!==d.customerSearchRequestId||!_())return;let r=Array.isArray(n?.customers)?n.customers:[];r.forEach(R),d.customerResults=r}catch(e){if(t!==d.customerSearchRequestId||!_())return;d.customerResults=[],d.customerSearchError=e?.message||`Không tìm được khách hàng.`}finally{t===d.customerSearchRequestId&&_()&&(d.customerSearchLoading=!1,d.screen===`customer-picker`&&yt())}}function vt(){return d.customerResults}function yt(){let e=a.querySelector(`[data-customer-list]`);if(!e)return;let t=vt();if(d.customerSearchLoading){e.innerHTML=`
          <div class="tao-don-empty-card is-static">
            Đang tải khách hàng...
          </div>
        `;return}if(d.customerSearchError){e.innerHTML=`
          <div class="tao-don-empty-card is-static">
            ${r(d.customerSearchError)}
          </div>
        `;return}e.innerHTML=t.length?t.map(e=>`
                <article
                  class="tao-don-customer-picker-card"
                  data-customer-id="${e.id_khach_hang}"
                  tabindex="0"
                >
                  <div>
                    <strong>
                      ${r(e.ten_khach_hang)}
                    </strong>

                    <small>
                      ${r(xe(e))}
                    </small>

                    <small>
                      ${r(Se(e))}
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
          `}function bt(){d.screen=`customer-picker`,P({headerMode:`search`,placeholder:`Tìm tên hoặc số điện thoại...`,searchValue:D.snapshot().draft,showRightAction:!0,rightIcon:`+`,rightLabel:`Thêm khách`,onBack:H,onSearchInput(e){D.input(e)},onSearch(e){return D.submit(e)},onRightAction(){Ve(null)},bottomActions:[]}),a.innerHTML=`
        <section class="tao-don-picker-page">
          <div
            class="tao-don-picker-list"
            data-customer-list
          ></div>
        </section>
      `,yt()}function xt(e){let t=!!e;d.screen=t?`edit-customer`:`new-customer`,d.editingCustomer=e??null,P({headerMode:`title`,title:t?`Sửa khách hàng`:`Khách mới`,showRightAction:!1,onBack:H,bottomActions:[{key:`save-customer`,label:d.busy?`Đang lưu...`:`Lưu khách hàng`,variant:`primary`,disabled:d.busy,onClick:St}]}),a.innerHTML=`
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
                  value="${r(e?.ten_khach_hang??``)}"
                  ${e?.la_khach_mac_dinh?`readonly`:``}
                />
              </label>

              <label class="tao-don-field">
                <span>Số điện thoại *</span>

                <input
                  name="sdt"
                  inputmode="tel"
                  required
                  value="${r(e?.sdt??``)}"
                />
              </label>

              <label class="tao-don-field">
                <span>Địa chỉ</span>

                <textarea
                  name="dia_chi"
                  rows="3"
                >${r(e?.dia_chi??``)}</textarea>
              </label>

              <label class="tao-don-field">
                <span>Ghi chú khách hàng</span>

                <textarea
                  name="ghi_chu"
                  rows="4"
                >${r(e?.ghi_chu??``)}</textarea>
              </label>
            </section>
          </form>
        </section>
      `}async function St(){let e=a.querySelector(`#tao-don-customer-form`);if(!e)return;let t=new FormData(e),n=String(t.get(`ten_khach_hang`)??``).trim(),r=T(t.get(`sdt`));if(!n||!r){q(`Tên khách và số điện thoại là bắt buộc.`);return}let i=L(r),s=d.editingCustomer;if(i&&i.id_khach_hang!==s?.id_khach_hang){q(`Số điện thoại đã thuộc khách "${i.ten_khach_hang}".`);return}let c={ten_khach_hang:n,sdt:r,dia_chi:String(t.get(`dia_chi`)??``).trim()||null,ma_so_thue:s?.ma_so_thue||null,email:s?.email||null,ghi_chu:String(t.get(`ghi_chu`)??``).trim()||null};if(p.acquire(`save-customer`)){d.busy=!0,xt(s);try{let e;s?(d.updateCustomerRequestKey??=o(`update-customer`),e=await we({...c,id_khach_hang:s.id_khach_hang,expected_row_version:s.row_version},d.updateCustomerRequestKey)):(d.createCustomerRequestKey??=o(`create-customer`),e=await Ce(c,d.createCustomerRequestKey));let t=w(e);if(!t?.id_khach_hang)throw Error(`RPC không trả về khách hàng đã lưu.`);R(t),I(t),d.busy=!1,d.editingCustomer=null,d.createCustomerRequestKey=null,d.updateCustomerRequestKey=null,d.createOrderRequestKey=null,await z()}catch(e){d.busy=!1,xt(s),q(e.message)}finally{p.release(`save-customer`)}}}async function Ct(e){let t=d.productSearchRequestId+1;d.productSearchRequestId=t,d.productSearchLoading=!0,d.productSearchError=``,d.screen===`product-picker`&&$();try{let n=await me({search:e,limit:30});if(t!==d.productSearchRequestId||!_())return;d.productResults=Array.isArray(n?.products)?n.products:[]}catch(e){if(t!==d.productSearchRequestId||!_())return;d.productResults=[],d.productSearchError=e?.message||`Không tìm được sản phẩm.`}finally{t===d.productSearchRequestId&&_()&&(d.productSearchLoading=!1,d.screen===`product-picker`&&$())}}function wt(){return d.productResults}function Z(e){return d.productDraft.find(t=>t.product.id_san_pham===e)}function Tt(){return d.productDraft.reduce((e,t)=>e+y(t.quantity),0)}function Q(){let e=Tt();P({headerMode:`search`,placeholder:`Tìm sản phẩm...`,searchValue:O.snapshot().draft,showRightAction:!1,onBack:H,onSearchInput(e){O.input(e)},onSearch(e){return O.submit(e)},bottomActions:[{key:`apply-products`,label:e>0?`Thêm ${e} sản phẩm vào đơn`:`Thêm vào đơn`,variant:`primary`,onClick:Dt}]})}function $(){let e=a.querySelector(`[data-product-list]`),t=a.querySelector(`[data-product-selected-count]`);if(e){if(t&&(t.textContent=Tt()),d.productSearchLoading){e.innerHTML=`
          <div class="tao-don-empty-card is-static">
            Đang tải sản phẩm...
          </div>
        `;return}if(d.productSearchError){e.innerHTML=`
          <div class="tao-don-empty-card is-static">
            ${r(d.productSearchError)}
          </div>
        `;return}e.innerHTML=wt().map(e=>{let t=Z(e.id_san_pham),n=x(e),i=C(e),a=S(e),o=a||!i;return`
            <article
              class="
                tao-don-product-card
                ${t?`is-selected`:``}
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
                    ${r(e.ten_san_pham??e.model)}
                  </strong>

                  ${t?`
                        <span class="tao-don-selected-badge">
                          Đã chọn
                        </span>
                      `:``}
                </div>

                <span class="tao-don-product-stock ${a?`is-empty`:``}">
                  ${a?`Hết hàng`:`Còn lại: ${n}`}
                </span>

                <small>
                  ${i?f(i.value):`Chưa có bảng giá`}
                </small>
              </div>

              ${t?`
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

                      <strong>${t.quantity}</strong>

                      <button
                        type="button"
                        data-product-plus="${e.id_san_pham}"
                        ${t.quantity>=n?`disabled`:``}
                      >
                        +
                      </button>
                    </div>
                  `:``}
            </article>
          `}).join(``)}}function Et(e){let t=d.productResults.find(t=>t.id_san_pham===e);if(!t||S(t)||!C(t))return;let n=Z(e);if(n)d.productDraft=d.productDraft.filter(e=>e!==n);else{let e=he(t);e&&d.productDraft.push(e)}Q(),$()}function Dt(){d.lines=d.productDraft.map(ge),Ge(),d.createOrderRequestKey=null,z()}function Ot(){d.screen=`product-picker`,Q(),a.innerHTML=`
        <section class="tao-don-picker-page">
          <div class="tao-don-picker-summary">
            Đã chọn:
            <strong data-product-selected-count>
              ${Tt()}
            </strong>
          </div>

          <div
            class="tao-don-product-list"
            data-product-list
          ></div>
        </section>
      `,$()}function kt(){d.screen=`confirmation`;let e=K(),t=e.total>0&&e.paid===e.total,n=d.order.loaiDon===`LAP_DAT`?`Lắp đặt`:`Giao hàng`;P({headerMode:`title`,title:`Xác nhận đơn`,showRightAction:!1,onBack:H,bottomActions:[{key:`back`,label:`Quay lại`,variant:`secondary`,disabled:d.busy,onClick:H},{key:`create`,label:d.busy?`Đang tạo...`:`Tạo đơn`,variant:`primary`,disabled:d.busy,onClick:Mt}]}),a.innerHTML=`
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
                ${r(d.orderCode??`Tự động khi tạo`)}
              </strong>
            </div>

            <div class="tao-don-confirm-info-row">
              <span>Ngày tạo</span>

              <strong>
                ${r(ye(d.catalog?.server_time))}
              </strong>
            </div>

            <div class="tao-don-confirm-info-row">
              <span>Loại đơn</span>

              <strong>
                ${r(n)}
              </strong>
            </div>
          </section>

          <section class="tao-don-summary-card">
            <h3>Khách hàng</h3>

            <div class="tao-don-confirm-info-row">
              <span>Tên khách</span>

              <strong>
                ${r(d.customerDraft.name||`Khách lẻ`)}
              </strong>
            </div>

            ${d.customerDraft.phone?`
                  <div class="tao-don-confirm-info-row">
                    <span>Số điện thoại</span>

                    <strong>
                      ${r(d.customerDraft.phone)}
                    </strong>
                  </div>
                `:``}

            ${d.customerDraft.address?`
                  <div class="tao-don-confirm-info-row">
                    <span>Địa chỉ</span>

                    <strong>
                      ${r(d.customerDraft.address)}
                    </strong>
                  </div>
                `:``}

            ${d.customerDraft.note?.trim()?`
                  <div class="tao-don-confirm-note">
                    <span>Ghi chú khách hàng</span>
                    <p>${r(d.customerDraft.note.trim())}</p>
                  </div>
                `:``}

          </section>

          <section class="tao-don-summary-card">
            <h3>Sản phẩm</h3>

            <div class="tao-don-confirm-products">
              ${d.lines.map(e=>`
                    <article class="tao-don-confirm-product">
                      <strong
                        class="tao-don-confirm-product-name"
                      >
                        ${r(W(e))}
                      </strong>

                      <div
                        class="tao-don-confirm-product-money"
                      >
                        <span>${e.quantity}</span>
                        <span>×</span>

                        <span>
                          ${f(e.unitPrice)}
                        </span>

                        <span>=</span>

                        <strong>
                          ${f(e.quantity*e.unitPrice)}
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
                ${f(e.goodsTotal)}
              </strong>
            </div>

            ${e.shipping>0?`
                  <div class="tao-don-confirm-info-row">
                    <span>Phí vận chuyển</span>

                    <strong>
                      ${f(e.shipping)}
                    </strong>
                  </div>
                `:``}

            ${e.install>0?`
                  <div class="tao-don-confirm-info-row">
                    <span>Phí lắp đặt</span>

                    <strong>
                      ${f(e.install)}
                    </strong>
                  </div>
                `:``}

            ${e.vat>0?`
                  <div class="tao-don-confirm-info-row">
                    <span>
                      VAT ${e.vatPercent}%
                    </span>

                    <strong>
                      ${f(e.vat)}
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
                ${f(e.total)}
              </strong>
            </div>

            <div class="tao-don-confirm-info-row">
              <span>Đã thanh toán</span>

              <strong>
                ${f(e.paid)}
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
                ${f(e.remaining)}
              </strong>
            </div>
          </section>
            <section class="tao-don-summary-card">
              <h3>Ghi chú đơn</h3>

              <div class="tao-don-confirm-note">
                <p>
                  ${r(d.order.note?.trim()||`Không có`)}
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
                  value="${d.order.warrantyMonths??``}"
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
              ${de.map(e=>`
                    <button
                      type="button"
                      class="${d.order.warrantyMonths===e?`is-active`:``}"
                      data-warranty="${e}"
                    >
                      ${e===0?`0`:e}
                    </button>
                  `).join(``)}
            </div>
          </section>

          <section class="tao-don-section">
            <h3>Hình thức thu tiền</h3>

            ${t?`
                  <div class="tao-don-paid-banner">
                    Người bán đã thu đủ tiền
                  </div>
                `:`
                  <div class="tao-don-radio-list">
                    ${pe.map(e=>`
                          <label
                            class="${d.order.collectionType===e.key?`is-active`:``}"
                          >
                            <input
                              type="radio"
                              name="collection_type"
                              value="${e.key}"
                              ${d.order.collectionType===e.key?`checked`:``}
                            />

                            <span>
                              ${r(e.label)}
                            </span>
                          </label>
                        `).join(``)}
                  </div>
                `}
          </section>

          <section class="tao-don-section">
            <h3>
              ${d.order.loaiDon===`LAP_DAT`?`Công lắp đặt`:`Công giao hàng`}
            </h3>

            <label class="tao-don-field">
              <span>Số tiền công</span>

              <input
                type="text"
                inputmode="numeric"
                data-money-field
                value="${u(d.order.serviceFee)}"
                data-service-fee
              />
            </label>

            <div class="tao-don-option-grid tao-don-service-fee-grid">
              ${fe.map(e=>`
                    <button
                      type="button"
                      class="${d.order.serviceFee===e?`is-active`:``}"
                      data-service-fee-option="${e}"
                    >
                      ${ve(e)}
                    </button>
                  `).join(``)}
            </div>
          </section>
        </section>
      `}function At(){let e=K();return{title:`HÓA ĐƠN BÁN HÀNG`,code:d.orderCode,createdAt:d.catalog?.server_time||new Date,customer:{name:d.customerDraft.name||`Khách lẻ`,phone:d.customerDraft.phone,address:d.customerDraft.address,note:d.customerDraft.note},orderNote:d.order.note.trim(),warrantyMonths:d.order.warrantyMonths,lines:d.lines.map(e=>({name:W(e),quantity:e.quantity,unitPrice:e.unitPrice,amount:e.quantity*e.unitPrice})),subtotal:e.goodsTotal,shipping:e.shipping,install:e.install,vatPercent:e.vatPercent,vatAmount:e.vat,total:e.total,paid:e.paid}}function jt(){if(!d.submittedDocument){V(d.createdOrderResponse);return}d.screen=`sales-document`,P({headerMode:`title`,title:`Hóa đơn bán hàng`,showRightAction:!0,rightIcon:`⎙`,rightLabel:`In`,onBack:H,onRightAction(){le(d.submittedDocument)},bottomActions:[{key:`print-sales-document`,label:`In hóa đơn`,variant:`secondary`,onClick(){le(d.submittedDocument)}},{key:`new-order`,label:`Tạo đơn mới`,variant:`primary`,async onClick(){await U()}}]}),a.innerHTML=`
        <section class="tao-don-page sales-document-page">
          ${se(d.submittedDocument)}
        </section>
      `}async function Mt(){let e=Ke();if(e){q(e);return}if(d.order.warrantyMonths===null){let e=`Vui lòng chọn thời gian bảo hành.`;q(e),Je(e);return}if(p.acquire(`create-order`)){d.busy=!0,d.createOrderRequestKey??=o(`create-order`),kt(),await new Promise(e=>{(globalThis.requestAnimationFrame??(e=>globalThis.setTimeout(e,0)))(()=>e())});try{d.customer=await ze();let e=await Te(qe(),d.createOrderRequestKey),t=e?.ma_don_hang??e?.data?.ma_don_hang??null;if(!t)throw Error(`RPC tạo đơn không trả về mã đơn hàng.`);d.orderCode=t,d.submittedDocument=At(),d.busy=!1,d.createdOrderResponse=e,n(`order-created`,{idDonHang:be(e),maDonHang:t,destination:`CHO_NHAN`,sourceModule:`tao-don`}),await V(e)}catch(e){if(d.busy=!1,e?.code===`CUSTOMER_PHONE_CONFLICT`){await z(),q(e.message);return}await B(),q(e.message)}finally{p.release(`create-order`)}}}function Nt(e){d.screen=`success`;let t=e?.ma_don_hang??e?.data?.ma_don_hang??d.orderCode??null;P({headerMode:`title`,title:`Đã tạo đơn`,showRightAction:!1,async onBack(){await U()},bottomActions:[{key:`view-sales-document`,label:`Xem hóa đơn`,variant:`secondary`,onClick:Ue},{key:`new-order`,label:`Tạo đơn mới`,variant:`primary`,async onClick(){await U()}}]}),a.innerHTML=`
        <section class="tao-don-page tao-don-success-page">
          <div class="tao-don-success-card">
            <div class="tao-don-success-icon">✓</div>

            <h2>Tạo đơn thành công</h2>

            <p>
              Đơn đã chuyển sang
              <strong>Chờ nhận</strong>.
            </p>

            ${t?`
                    <small>
                      Mã đơn: ${r(t)}
                    </small>
                  `:``}

          </div>
        </section>
      `}async function Pt({reason:e=`retry`}={}){if(!_())return;let t=v.snapshot();if(t.loading||t.refreshing)return;let n=null;if(!t.loaded&&e===`initial`){let e=globalThis.performance?.now?.()??Date.now();await z(),n=(globalThis.performance?.now?.()??Date.now())-e,l?.markReady?.({state:`ready`,bootstrapPending:!0,firstPaintMs:n}),console.info(`[KANGAROO Perf]`,{module:`tao-don`,phase:`first-paint`,durationMs:Number(n.toFixed(2))})}let r=globalThis.performance?.now?.()??Date.now(),i=t.loaded?v.refresh({reason:e}):v.load({reason:e});try{let e=await i,t=(globalThis.performance?.now?.()??Date.now())-r;if(e?.stale===!0||!_())return;if(d.catalog=e?.data&&typeof e.data==`object`?e.data:{customers:[],products:[]},d.customerResults=[],d.productResults=[],I(F()),!d.customer?.id_khach_hang)throw Error(`RPC chưa trả khách hàng mặc định.`);let a=globalThis.performance?.now?.()??Date.now();await z();let o=(globalThis.performance?.now?.()??Date.now())-a;console.info(`[KANGAROO Perf]`,{module:`tao-don`,phase:`bootstrap-hydrated`,firstPaintMs:n===null?null:Number(n.toFixed(2)),rpcMs:Number(t.toFixed(2)),renderMs:Number(o.toFixed(2))}),l?.markReady?.({state:`ready`,hasDefaultCustomer:!0,durationMs:e?.durationMs??null})}catch(e){if(!_())return;d.error=e,Xe(),l?.markReady?.({state:`error`,message:e?.message||`Không tải được dữ liệu Tạo đơn.`})}}Pt({reason:`initial`})}};export{Ce as default};