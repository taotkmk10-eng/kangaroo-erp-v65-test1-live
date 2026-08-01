import{a as e,r as t}from"./realtimeImpactRegistry-BgzWm3W7.js";import{a as n,i as r,n as i,o as a,r as o,t as s}from"./searchRuntime-C7VufGsy.js";import{B as c,E as l,F as u,H as d,I as f,L as p,M as m,N as h,P as ee,R as g,T as _,U as v,V as y,j as b,k as x,l as te,n as S,o as C,r as ne,t as w,u as re,z as ie}from"./deliveryCheckSummary-BHavTlhI.js";import{n as T,r as E,t as ae}from"./actionLock-BTZKYVnA.js";import{t as D}from"./toast-DvZC7wAk.js";function oe(e){let t=Number(e);return Number.isSafeInteger(t)&&t>0?t:1}function O(e,t){let n=String(e??``).trim();return/^data-[a-z0-9-]+$/.test(n)?n:t}function se({pageNumber:e=1,canGoPrevious:t=!1,hasMore:r=!1,loading:i=!1,previousAttribute:a=`data-cursor-page-previous`,nextAttribute:o=`data-cursor-page-next`,previousLabel:s=`Trang trước`,nextLabel:c=`Trang sau`}={}){let l=oe(e),u=O(a,`data-cursor-page-previous`),d=O(o,`data-cursor-page-next`);if(!(l>1||t===!0||r===!0))return``;let f=t!==!0||i===!0,p=r!==!0||i===!0;return`
    <nav
      class="cursor-pager"
      aria-label="Phân trang"
      data-cursor-pager
    >
      <button
        type="button"
        class="cursor-pager__button"
        ${u}
        ${f?`disabled`:``}
      >
        ${n(s)}
      </button>

      <span
        class="cursor-pager__status"
        aria-live="polite"
      >
        Trang ${n(l)}
      </span>

      <button
        type="button"
        class="cursor-pager__button"
        ${d}
        ${p?`disabled`:``}
      >
        ${n(c)}
      </button>
    </nav>
  `}function k(e){return String(e??``).trim()}function ce(e){let t=Number(e);return!Number.isSafeInteger(t)||t<=0?10:Math.min(t,100)}function A(e){return!e||typeof e!=`object`||Array.isArray(e)?null:{...e}}function j(e=null){return{cursor:A(e),nextCursor:null,items:[],hasMore:!1,loaded:!1,loading:!1,error:``,meta:null}}function M(e){return{items:Array.isArray(e?.items)?e.items:[],cursor:A(e?.cursor),hasMore:e?.hasMore===!0,meta:e?.meta??null}}function le({fetchPage:e,initialTabKey:t=`default`,pageSize:n=10}={}){if(typeof e!=`function`)throw TypeError(`createCursorListRuntime cần fetchPage.`);let r=ce(n),i=new Map,a=k(t)||`default`,o=``,s=0,c=!1;function l(e=a,t=o){return JSON.stringify([k(e)||`default`,k(t)])}function u(){let e=l();return i.has(e)||i.set(e,{key:e,tabKey:a,search:o,pageIndex:0,pages:[j()]}),i.get(e)}function d(){let e=u();return e.pages[e.pageIndex]??e.pages[0]}function f({stale:e=!1}={}){let t=u(),n=d();return Object.freeze({tabKey:t.tabKey,search:t.search,pageSize:r,pageNumber:t.pageIndex+1,items:[...n.items],cursor:A(n.cursor),nextCursor:A(n.nextCursor),hasMore:n.hasMore,canGoPrevious:t.pageIndex>0,loading:n.loading,loaded:n.loaded,error:n.error,meta:n.meta,stale:e})}function p(e,t,n){return!c&&e===s&&t.key===l()&&t.pageIndex===n}async function m({force:t=!1}={}){if(c)throw Error(`Cursor list runtime đã đóng.`);let n=u(),i=n.pageIndex,a=d();if(a.loaded&&!t)return f();let o=s+1;s=o,a.loading=!0,a.error=``;let l;try{l=await e({tabKey:n.tabKey,search:n.search,cursor:A(a.cursor),limit:r})}catch(e){if(a.loading=!1,!p(o,n,i))return f({stale:!0});throw a.error=e?.message||`Không tải được danh sách.`,e}if(a.loading=!1,!p(o,n,i))return f({stale:!0});let m=M(l);return a.items=m.items,a.nextCursor=m.cursor,a.hasMore=m.hasMore,a.meta=m.meta,a.loaded=!0,a.error=``,f()}function h(e){let t=k(e);if(!t)throw TypeError(`Thiếu tabKey.`);return t===a?f():(s+=1,a=t,f())}function ee(e){let t=k(e);return t===o?f():(s+=1,o=t,f())}async function g(){let e=u(),t=d();if(t.loaded||await m(),!t.hasMore||!t.nextCursor)return f();let n=e.pageIndex+1;return e.pages[n]||e.pages.push(j(t.nextCursor)),s+=1,e.pageIndex=n,m()}function _(){let e=u();return e.pageIndex<=0?f():(s+=1,--e.pageIndex,f())}async function v(){let e=d();return e.loaded=!1,m({force:!0})}function y({tabKey:e,search:t,all:n=!1}={}){if(s+=1,n)return i.clear(),f();let r=l(e??a,t??o);return i.delete(r),f()}function b(e,{all:t=!1}={}){if(c)throw Error(`Cursor list runtime đã đóng.`);if(typeof e!=`function`)throw TypeError(`reconcileItems cần callback.`);return s+=1,(t?[...i.values()]:[u()]).forEach(t=>{t.pages.forEach((n,r)=>{if(!n.loaded)return;let i=e([...n.items],Object.freeze({tabKey:t.tabKey,search:t.search,pageNumber:r+1,isActive:t.key===l()&&t.pageIndex===r}));if(!Array.isArray(i))throw TypeError(`reconcileItems phải trả về mảng.`);n.items=[...i],n.loading=!1,n.error=``})}),f()}function x(){c=!0,s+=1,i.clear()}return Object.freeze({load:m,next:g,previous:_,refresh:v,reconcileItems:b,invalidate:y,setTab:h,setSearch:ee,snapshot:f,dispose:x,get pageSize(){return r}})}async function ue({search:e=null,statuses:t=null,tabKey:n=null,cursor:r=null,limit:i=10,currentEmployeeId:o=``}={}){let s=r&&typeof r==`object`&&!Array.isArray(r)?{updated_at:String(r.updated_at??``).trim()||null,id:String(r.id??``).trim()||null}:null,c=Number.isSafeInteger(Number(i))?Math.min(100,Math.max(1,Number(i))):10,l=await a(`rpc_get_hoa_don_worklist`,{p_search:e||null,p_status:Array.isArray(t)&&t.length?t:null,p_tab_key:String(n??``).trim()||null,p_cursor_updated_at:s?.updated_at??null,p_cursor_id:s?.id??null,p_limit:c},`Không tải được danh sách Hóa đơn`),u=String(l?.current_employee_id??o??``).trim(),d=Array.isArray(l?.cards)?l.cards:[];return{...l,current_employee_id:u,cards:d.map(e=>({...e,current_employee_id:String(e?.current_employee_id??u??``).trim()}))}}async function de(e){let t=[...new Set((Array.isArray(e)?e:[e]).map(e=>String(e??``).trim()).filter(Boolean))];if(!t.length)return[];if(t.length>20)throw RangeError(`Chỉ được đọc tối đa 20 hóa đơn mỗi lần.`);let n=await a(`rpc_get_hoa_don_cards_by_ids`,{p_ids:t},`Không tải được card Hóa đơn`);return Array.isArray(n?.cards)?n.cards:[]}async function fe(e){let t=String(e??``).trim();if(!t)throw TypeError(`Thiếu ID hóa đơn.`);let n=await a(`rpc_get_hoa_don_detail`,{p_id_hoa_don:t},`Không tải được chi tiết Hóa đơn`);try{let e=await a(`rpc_get_hoa_don_settlement_context`,{p_id_hoa_don:t},`Không tải được dữ liệu tất toán`);return{...n,settlement_context:e,settlement_products:Array.isArray(e?.products)?e.products:[]}}catch{return n}}function pe({requestKey:e,invoiceId:t,rowVersion:n,mode:r,amount:i=null,cashFlowId:o=null}={}){let s=String(e??``).trim(),c=String(t??``).trim(),l=String(r??``).trim().toUpperCase(),u=Number(n);if(!s||!c||!l||!Number.isSafeInteger(u)||u<1)throw TypeError(`Dữ liệu xác nhận dòng tiền không hợp lệ.`);let d={id_hoa_don:c,expected_row_version:u,mode:l};if(o&&(d.id_dong_tien=String(o).trim()),i!=null){let e=Number(i);if(!Number.isSafeInteger(e)||e<=0)throw TypeError(`Số tiền xác nhận không hợp lệ.`);d.so_tien=e}return a(`rpc_thu_tien_hoa_don`,{p_request_key:s,p_payload:d},`Không cập nhật được dòng tiền Hóa đơn`)}function N({requestKey:e,invoiceId:t,rowVersion:n}={}){let r=String(e??``).trim(),i=String(t??``).trim(),a=Number(n);if(!r||!i||!Number.isSafeInteger(a)||a<1)throw TypeError(`Dữ liệu thao tác Hóa đơn không hợp lệ.`);return{requestKey:r,invoiceId:i,rowVersion:a}}function me(e){let t=String(e??``).trim();if(!t)throw TypeError(`Thiếu nhân viên nhận.`);return t}function he(e){let t=Number(e);if(!Number.isSafeInteger(t)||t<=0)throw TypeError(`Số tiền không hợp lệ.`);return t}function ge(e){let t=(Array.isArray(e)?e:[]).map(e=>{let t={id_san_pham:String(e?.id_san_pham??``).trim(),so_luong:Number(e?.so_luong??0)};return e?.don_gia_tat_toan!==void 0&&e?.don_gia_tat_toan!==null&&(t.don_gia_tat_toan=Number(e.don_gia_tat_toan)),t}).filter(e=>e.id_san_pham&&Number.isSafeInteger(e.so_luong)&&e.so_luong>0&&(e.don_gia_tat_toan===void 0||Number.isSafeInteger(e.don_gia_tat_toan)&&e.don_gia_tat_toan>=0));if(!t.length)throw TypeError(`Thiếu sản phẩm cần xử lý.`);return t}function _e(){return a(`rpc_get_hoa_don_transfer_requests`,{},`Không tải được yêu cầu chuyển Hóa đơn`)}function ve({transferId:e,accept:t,requestKey:n,storagePaths:r=[]}={}){let i=String(e??``).trim(),o=String(n??``).trim(),s=t===!0,c=Array.isArray(r)?r.map(e=>String(e??``).trim()).filter(Boolean):[];if(!i||!o)throw TypeError(`Dữ liệu xác nhận chuyển tiền không hợp lệ.`);if(c.length>5)throw TypeError(`Chỉ được chọn tối đa 5 ảnh chứng từ.`);if(!s&&c.length)throw TypeError(`Không được đính kèm ảnh xác nhận khi từ chối chuyển tiền.`);return a(`rpc_xac_nhan_chuyen_tien_noi_bo`,{p_request_key:o,p_payload:{id_chuyen_tien_noi_bo:i,accept:s,storage_paths:c}},s?`Không xác nhận được chuyển tiền`:`Không từ chối được chuyển tiền`)}function ye({handoverId:e,rowVersion:t,accept:n,requestKey:r,handoverType:i=`THU_TIEN`}={}){let o=String(e??``).trim(),s=String(r??``).trim(),c=Number(t),l=String(i??``).trim().toUpperCase();if(!o||!s||!Number.isSafeInteger(c)||c<1||![`THU_TIEN`,`XU_LY_TAT_TOAN`].includes(l))throw TypeError(`Dữ liệu xác nhận bàn giao không hợp lệ.`);return a(`rpc_xac_nhan_ban_giao_hoa_don`,{p_request_key:s,p_payload:{id_ban_giao:o,expected_row_version:c,loai_ban_giao:l,accept:n===!0}},n===!0?`Không xác nhận được bàn giao`:`Không từ chối được bàn giao`)}function be({transferId:e,requestKey:t}={}){let n=String(e??``).trim(),r=String(t??``).trim();if(!n||!r)throw TypeError(`Dữ liệu hủy chuyển tiền không hợp lệ.`);return a(`rpc_huy_chuyen_tien_noi_bo`,{p_request_key:r,p_payload:{id_chuyen_tien_noi_bo:n}},`Không hủy được chuyển tiền`)}function xe({handoverId:e,rowVersion:t,requestKey:n,handoverType:r=`THU_TIEN`}={}){let i=String(e??``).trim(),o=String(n??``).trim(),s=Number(t),c=String(r??``).trim().toUpperCase();if(!i||!o||!Number.isSafeInteger(s)||s<1||![`THU_TIEN`,`XU_LY_TAT_TOAN`].includes(c))throw TypeError(`Dữ liệu hủy bàn giao không hợp lệ.`);return a(`rpc_huy_ban_giao_hoa_don`,{p_request_key:o,p_payload:{id_ban_giao:i,expected_row_version:s,loai_ban_giao:c}},`Không hủy được bàn giao`)}function Se(e){let t=String(e??``).trim();if(!t)throw TypeError(`Thiếu Hóa đơn cần lấy danh sách nhân viên.`);return a(`rpc_get_hoa_don_transfer_candidates`,{p_id_hoa_don:t},`Không tải được danh sách nhân viên nhận chuyển`)}function Ce({requestKey:e,invoiceId:t,rowVersion:n,receiverId:r,amount:i}={}){let o=N({requestKey:e,invoiceId:t,rowVersion:n});return a(`rpc_tao_chuyen_tien_noi_bo`,{p_request_key:o.requestKey,p_payload:{id_hoa_don:o.invoiceId,expected_row_version:o.rowVersion,id_nguoi_nhan:me(r),so_tien:he(i)}},`Không tạo được chuyển tiền nội bộ`)}function we({requestKey:e,invoiceId:t,rowVersion:n,holderId:r,amount:i,note:o=``}={}){let s=N({requestKey:e,invoiceId:t,rowVersion:n});return a(`rpc_yeu_cau_chuyen_tien_noi_bo`,{p_request_key:s.requestKey,p_payload:{id_hoa_don:s.invoiceId,expected_row_version:s.rowVersion,id_nguoi_chuyen:me(r),so_tien:he(i),ghi_chu:String(o??``).trim()||null}},`Không tạo được yêu cầu chuyển tiền nội bộ`)}function Te({requestKey:e,invoiceId:t,rowVersion:n,receiverId:r}={}){let i=N({requestKey:e,invoiceId:t,rowVersion:n});return a(`rpc_tao_ban_giao_hoa_don`,{p_request_key:i.requestKey,p_payload:{id_hoa_don:i.invoiceId,expected_row_version:i.rowVersion,id_nguoi_nhan:me(r),loai_ban_giao:`THU_TIEN`}},`Không chuyển được quyền thu tiền`)}function Ee({requestKey:e,invoiceId:t,rowVersion:n,laborAmount:r=0,lines:i,note:o=``,storagePaths:s=[]}={}){let c=N({requestKey:e,invoiceId:t,rowVersion:n}),l=Number(r??0),u=Array.isArray(s)?s.map(e=>String(e??``).trim()).filter(Boolean):[];if(!Number.isSafeInteger(l)||l<0)throw TypeError(`Tiền công thực tế không hợp lệ.`);if(u.length>5)throw TypeError(`Chỉ được chọn tối đa 5 ảnh xác nhận.`);return a(`rpc_tat_toan_cong_ty`,{p_request_key:c.requestKey,p_payload:{id_hoa_don:c.invoiceId,expected_row_version:c.rowVersion,tien_cong_thuc_te:l,lines:ge(i),ghi_chu:String(o??``).trim()||null,storage_paths:u}},`Không tất toán được Hóa đơn`)}function De({requestKey:e,invoiceId:t,rowVersion:n,reason:r,lines:i}={}){let o=N({requestKey:e,invoiceId:t,rowVersion:n}),s=String(r??``).trim();if(!s)throw TypeError(`Thiếu lý do hoàn đơn.`);let c=ge(i);return a(`rpc_tao_phieu_hoan_don`,{p_request_key:o.requestKey,p_payload:{id_hoa_don:o.invoiceId,expected_row_version:o.rowVersion,ly_do:s,lines:c}},`Không tạo được phiếu hoàn đơn`)}var P=`kangaroo-evidence`,Oe=5,ke=new Set([`yeu-cau-chuyen`,`xac-nhan-chuyen`,`tat-toan-cong-ty`]);function Ae(e){let t=String(e??``).trim();if(!t)throw TypeError(`Thiếu id Hóa đơn.`);return t}function je(e){let t=String(e??``).trim();if(!ke.has(t))throw TypeError(`Loại ảnh chứng từ không hợp lệ.`);return t}function F(){return globalThis.crypto?.randomUUID?globalThis.crypto.randomUUID():`${Date.now()}-`+Math.random().toString(16).slice(2)}async function I(){let{data:t,error:n}=await e.auth.getUser();if(n)throw n;let r=String(t?.user?.id??``);if(!r)throw Error(`Phiên đăng nhập không hợp lệ.`);return r}async function Me(t){let n=Array.isArray(t)?t.filter(Boolean):[];if(!n.length)return;let{error:r}=await e.storage.from(P).remove(n);if(r)throw r}async function Ne({invoiceId:t,stage:n,files:r}){let i=Ae(t),a=je(n),o=Array.isArray(r)?r:[];if(!o.length)return[];if(o.length>Oe)throw TypeError(`Chỉ được chọn tối đa ${Oe} ảnh.`);let s=await I(),c=[];try{for(let t of o){let n=await C(t),r=[s,i,a,`${F()}.webp`].join(`/`),{error:o}=await e.storage.from(P).upload(r,n,{contentType:n.type,cacheControl:`3600`,upsert:!1});if(o)throw o;c.push(r)}return c}catch(e){throw c.length&&await Me(c).catch(()=>{}),e}}async function Pe(t){let n=[...new Set((Array.isArray(t)?t:[]).map(e=>String(e??``).trim()).filter(Boolean))],r=[];for(let t of n){let{data:n,error:i}=await e.storage.from(P).createSignedUrl(t,600);if(i)throw i;n?.signedUrl&&r.push({storagePath:t,url:n.signedUrl})}return r}var L=Object.freeze({CHUA_THANH_TOAN:`Chưa thanh toán`,THANH_TOAN_MOT_PHAN:`Thanh toán một phần`,DA_THANH_TOAN:`Đã thanh toán`,CHO_THU_HO:`Chờ thu hộ`,CHUA_TAT_TOAN:`Chưa tất toán`,DANG_TAT_TOAN:`Đang tất toán`,TAT_TOAN_MOT_PHAN:`Tất toán một phần`,DA_TAT_TOAN:`Đã tất toán`,CHO_XAC_NHAN:`Chờ xác nhận`,DA_XAC_NHAN:`Đã xác nhận`,TU_CHOI:`Đã từ chối`,DA_TU_CHOI:`Đã từ chối`,DA_HUY:`Đã hủy`,ACTIVE:`Đang hiệu lực`,VOIDED:`Đã vô hiệu`,DANG_XU_LY:`Đang xử lý`,HOAN_TAT:`Hoàn tất`,NGUOI_TAO_DA_THU:`Người bán đã thu`,GIAO_XONG_THU_LUON:`Giao xong thu luôn`,THU_HO_COD:`Thu hộ COD`,NGUOI_BAN_TU_THU:`Người bán tự thu`,NGUYEN_VEN:`Nguyên vẹn`,DA_MO_HOP:`Đã mở hộp`,CAN_XLH:`Cần xử lý hàng`,HANG_LOI:`Hàng lỗi`,KHONG_NHAP_LAI:`Không nhập lại`});function R(e,t=``){let n=String(e??``).trim().toUpperCase();return n?(L[n]??t)||n.toLowerCase().split(`_`).filter(Boolean).map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(` `):t}Object.freeze({CHUA_THANH_TOAN:`Chưa thanh toán`,THANH_TOAN_MOT_PHAN:`Thanh toán một phần`,DA_THANH_TOAN:`Đã thanh toán`}),Object.freeze({CHUA_TAT_TOAN:`Chưa tất toán`,DANG_TAT_TOAN:`Đang tất toán`,DA_TAT_TOAN:`Đã tất toán`,DA_HUY:`Đã hủy tất toán`}),Object.freeze({NGUOI_TAO_DA_THU:`Người bán đã thu`,GIAO_XONG_THU_LUON:`Giao xong thu luôn`,THU_HO_COD:`Thu hộ COD`,NGUOI_BAN_TU_THU:`Người bán tự thu`}),Object.freeze({THU_KHACH:`Thu tiền khách`,THU_NO:`Thu nợ`,XAC_NHAN_COD:`Xác nhận COD`,CHUYEN_NOI_BO:`Chuyển tiền nội bộ`,TAT_TOAN:`Tất toán`,HOAN_TIEN:`Hoàn tiền`}),Object.freeze({HOA_DON_THU_TIEN:`đã thu tiền khách`,HOA_DON_CHUYEN_QUYEN_THU:`đã chuyển quyền thu tiền`,HOA_DON_CHUYEN_TIEN:`đã tạo chuyển tiền nội bộ`,HOA_DON_YEU_CAU_CHUYEN_TIEN:`đã yêu cầu chuyển tiền để tất toán`,HOA_DON_BAN_GIAO_XU_LY:`đã bàn giao xử lý tất toán`,HOA_DON_TAT_TOAN_CONG_TY:`đã tất toán công ty`,HOA_DON_HOAN_DON:`đã hoàn đơn`,HOA_DON_TAO_HOAN_DON:`đã tạo yêu cầu hoàn đơn`,HOA_DON_VOID_TAT_TOAN:`đã đảo tất toán`,HOA_DON_DAO_CHUYEN_TIEN:`đã đảo chuyển tiền nội bộ`});function z(e){return e!=null&&String(e).trim()!==``}function B(e,t=``){return z(e)?String(e).trim():t}function V(e){if(!z(e))return``;let t=Number(e);return Number.isFinite(t)?E(t):String(e)}function H(e){return z(e)?T(e,``):``}function Fe(e){return R(e,B(e))}function Ie(e){return R(e,B(e))}function Le(e){return R(e,B(e))}function Re(e,t){return(Array.isArray(e?.products)?e.products:[]).map(e=>{let n=Number(e?.so_luong??e?.quantity??0),r=Number.isFinite(n)?n:0,i=e?.don_gia_ap_dung??e?.don_gia??e?.unit_price,a=e?.thanh_tien??e?.amount,o=`${r} sản phẩm`;return t&&z(i)&&(o=`${r} x `+V(i),z(a)&&(o+=` = ${V(a)}`)),{title:B(e?.ten_san_pham_snapshot)||B(e?.name)||B(e?.ma_san_pham_snapshot)||B(e?.model)||`Sản phẩm`,subtitle:o,variant:`product`,stacked:!0}})}function ze(e){let t=Array.isArray(e?.money_events)?e.money_events:[],n=[...Array.isArray(e?.cash_flows)?e.cash_flows.filter(e=>e?.trang_thai_dong_tien===`DA_XAC_NHAN`&&!!e?.confirmed_at).map(e=>({id:e?.id_dong_tien,label:B(e?.ten_nguoi_giu_tien,`Nhân viên`)+` thu`,amount:e?.so_tien,occurred_at:e?.confirmed_at})):[],...Array.isArray(e?.transfers)?e.transfers.filter(e=>e?.trang_thai_chuyen===`DA_XAC_NHAN`&&!!e?.confirmed_at).map(e=>({id:e?.id_chuyen_tien_noi_bo,label:B(e?.ten_nguoi_chuyen,`Nhân viên`)+` chuyển `+B(e?.ten_nguoi_nhan,`nhân viên`),amount:e?.so_tien,occurred_at:e?.confirmed_at})):[],...Array.isArray(e?.settlement_rounds)?e.settlement_rounds.filter(e=>e?.trang_thai_lan===`ACTIVE`&&!e?.voided_at&&Number(e?.tong_so_tien??0)>0).map(e=>({id:e?.id_lan_doi_soat,label:B(e?.ten_nguoi_tat_toan,`Nhân viên`)+` tất toán`,amount:e?.tong_so_tien,occurred_at:e?.created_at})):[]],r=t.length?t:n,i=new Set;return r.map(e=>({id:B(e?.id_event??e?.id),label:B(e?.label,`Dòng tiền`),amount:e?.amount??e?.so_tien,occurredAt:e?.occurred_at??e?.confirmed_at})).sort((e,t)=>(Date.parse(e?.occurredAt??``)||0)-(Date.parse(t?.occurredAt??``)||0)).filter(e=>{let t=[e.id,e.label,String(e.amount??``),String(e.occurredAt??``)].join(`|`);return i.has(t)?!1:(i.add(t),!0)}).map(e=>({title:[e.label,z(e.amount)?V(e.amount).replace(/\s+(đ|₫)$/u,`$1`):``].filter(Boolean).join(` `),value:H(e.occurredAt)}))}function Be(e){let t=e?.header??{},n=e?.order??{},r=e?.customer??{},i=e?.roles??{},a=e?.internal_reconciliation??null;a?.root,a?.labor,a?.profit;let o=e?.transfer_summary??null,s=e?.company_settlement??null,c=Array.isArray(e?.settlement_rounds)?e.settlement_rounds:[],l=e?.delivery??null,u=Array.isArray(l?.photos)?l.photos:[],d=l?.check??null,f=e?.permission_mask?.fields??{},p=Object.prototype.hasOwnProperty.call(f,`payment_summary`),m=f.HOA_DON_VIEW_MONEY===!0,h=B(e?.permission_mask?.profile).toUpperCase()===`TRANSFER_RECEIVER_PENDING`,ee=!p||f.customer===!0,g=p?f.product_price===!0:m,_=p?f.payment_summary===!0:m,v=p?f.settlement_summary===!0:m,y=p?f.money_flows===!0:m,b=!p||f.delivery_check===!0,x=!p||f.completion===!0,te={title:`Thông tin đơn`,rows:[{label:`Mã đơn hàng`,value:B(n?.ma_don_hang),copyValue:n?.ma_don_hang},{label:`Người bán`,value:B(i?.creator_name)},h?{label:`Người giao`,value:B(i?.assignee_name)}:null,h?{label:`Ngày giao`,value:H(l?.completed_at??n?.completed_at)}:null,h?null:{label:`Hình thức thu tiền`,value:Le(n?.kieu_thu_tien)}].filter(e=>e&&z(e.value))},C={title:`Sản phẩm`,items:Re(e,g)},ne=h?{title:`Thanh toán`,rows:[{label:`Trạng thái`,value:R(o?.status,B(o?.status))},{label:`Số tiền chuyển`,value:V(o?.amount),emphasis:!0},{label:`Thời gian`,value:H(o?.confirmed_at??o?.created_at)}].filter(e=>z(e.value))}:_?{title:`Thanh toán`,rows:[{label:`Trạng thái`,value:Fe(t?.state)},{label:`Tổng phải thu`,value:V(t?.total)},{label:`Đã thu khách`,value:V(t?.collected)},{label:`Đã hoàn khách`,value:V(t?.refunded)},{label:`Còn phải thu`,value:V(t?.remaining),emphasis:!0}].filter(e=>z(e.value))}:null,re=h?{title:`Tất toán công ty`,rows:[{label:`Trạng thái`,value:Ie(s?.trang_thai_tat_toan)||`Chưa tất toán`}]}:v&&(s||c.length)?{title:`Tất toán công ty`,rows:[{label:`Trạng thái`,value:Ie(s?.trang_thai_tat_toan)}].filter(e=>z(e.value)),items:c.map(e=>({title:B(e?.ma_lan_tat_toan??e?.display_code,`Lần tất toán`),subtitle:[V(e?.tong_so_tien),H(e?.created_at)].filter(Boolean).join(` · `),trailing:`›`,actionKey:`HOA_DON_XEM_LAN_TAT_TOAN`,actionValue:e?.id_lan_doi_soat}))}:null,ie=b?w({check:d,actionKey:`HOA_DON_XEM_KIEM_HANG`}):null,T=x&&l?{title:`Ảnh hoàn thành`,rows:[{label:`Người giao`,value:B(i?.assignee_name)},{label:`Ngày giao`,value:H(l?.completed_at??n?.completed_at)},z(l?.completion_note)?{label:`Ghi chú`,value:B(l?.completion_note),multiline:!0}:null,u.length?{label:`Ảnh`,value:`Xem ${u.length} ảnh`,trailing:`›`,actionKey:`HOA_DON_XEM_ANH_GIAO_HANG`}:null].filter(e=>e&&z(e.value))}:null,E=ze(e),ae=[te,C,ne,re],D=[te,ee?S({customer:{...r,name:B(r?.name)||B(n?.ten_khach_hang_snapshot)},note:n?.note}):null,C,ne,re,ie,T,y&&E.length?{title:`Dòng tiền`,items:E}:null];return{blocks:(h?ae:D).filter(e=>e?Array.isArray(e.rows)&&e.rows.length>0||Array.isArray(e.items)&&e.items.length>0:!1),emptyText:`Chưa có dữ liệu hóa đơn.`}}function Ve(e,t){let n=(Array.isArray(e?.settlement_rounds)?e.settlement_rounds:[]).find(e=>String(e?.id_lan_doi_soat??``)===String(t??``));if(!n)return{blocks:[],emptyText:`Không tìm thấy lần tất toán.`};let r=Array.isArray(n?.details)?n.details:[],i=B(n?.trang_thai_lan).toUpperCase(),a=B(n?.ma_lan_tat_toan??n?.display_code,`Lần tất toán`),o=B(n?.ghi_chu),s=Array.isArray(n?.storage_paths)?n.storage_paths.map(e=>String(e??``).trim()).filter(Boolean):[];return{blocks:[{title:`Thông tin tất toán`,rows:[{label:`Mã tất toán`,value:a,copyValue:a},{label:`Người tất toán`,value:B(n?.ten_nguoi_tat_toan)},{label:`Tổng tiền`,value:V(n?.tong_so_tien)},{label:`Trạng thái`,value:i===`ACTIVE`?`Đang hiệu lực`:i===`VOIDED`?`Đã hủy`:R(n?.trang_thai_lan,``)},{label:`Thời gian`,value:H(n?.created_at)},z(o)?{label:`Ghi chú`,value:o,multiline:!0}:null,s.length?{label:`Ảnh chứng từ`,value:`Xem ${s.length} ảnh`,trailing:`›`,actionKey:`HOA_DON_XEM_ANH_TAT_TOAN`}:null].filter(e=>e&&z(e.value))},r.length?{title:`Sản phẩm tất toán`,items:r.map(e=>({title:B(e?.name,`Sản phẩm`),subtitle:B(e?.so_luong_tat_toan,`0`)+` x `+V(e?.don_gia_tat_toan_thuc_te)+` = `+V(e?.thanh_tien_tat_toan),variant:`product`,stacked:!0}))}:null].filter(Boolean),emptyText:`Lần tất toán chưa có chi tiết.`}}var He=Object.freeze({HOA_DON_CHUYEN_TIEN:`Chuyển nội bộ`,HOA_DON_YEU_CAU_CHUYEN_TIEN:`Yêu cầu chuyển tiền`,HOA_DON_CHUYEN_QUYEN_THU:`Chuyển đơn`,HOA_DON_TAT_TOAN_CONG_TY:`Tất toán`,HOA_DON_HOAN_DON:`Hoàn đơn`});function U(e){let t=Number(e??0);return Number.isFinite(t)?Math.max(0,t):0}function W(e){return Math.max(0,Math.trunc(U(e)))}function G(e){return`${new Intl.NumberFormat(`vi-VN`).format(U(e))} đ`}function K(e){return String(e??``).replace(/\D+/g,``)}function Ue(e,t={}){return b({employees:e,...t})}function We(e,t=``){let i=String(t??``).trim();return(Array.isArray(e)?e:[]).filter(e=>{let t=String(e?.id_nhan_vien??``).trim(),n=String(e?.trang_thai??``).trim().toUpperCase();return t&&t!==i&&n===`ACTIVE`&&U(e?.so_du_kha_dung)>0}).map(e=>{let t=String(e?.id_nhan_vien??``).trim(),i=String(e?.ten_nhan_vien??e?.ten_dang_nhap??`Nhân viên`).trim(),a=W(e?.so_du_kha_dung);return`
        <option
          value="${r(t)}"
          data-holder-available="${r(a)}"
        >
          ${n(`${i} - đang giữ ${G(a)}`)}
        </option>
      `}).join(``)}function Ge(e){let t=e?.settlement_context?.products;return Array.isArray(t)&&t.length?t:Array.isArray(e?.settlement_products)&&e.settlement_products.length?e.settlement_products:Array.isArray(e?.products)?e.products:[]}function Ke(e){return e?.is_current_employee?`Bạn`:String(e?.ten_nhan_vien??e?.ho_ten??e?.ten_dang_nhap??e?.name??`Nhân viên`).trim()}function qe(e,t,n){let r=String(n??``).trim();return(Array.isArray(t)?t:[]).map(e=>{let t=String(e?.id_nhan_vien??e?.employee_id??e?.id??``).trim();return t?{...e,id_nhan_vien:t,ten_nhan_vien:e?.ten_nhan_vien??e?.employee_name??e?.name??`Nhân viên`,so_du_kha_dung:U(e?.so_du_kha_dung??e?.available_balance??e?.available),is_current_employee:!!(e?.is_current_employee??(r&&t===r))}:null}).filter(e=>e&&U(e?.so_du_kha_dung)!==0)}function q(e){let t=(Array.isArray(e)?e:[]).filter(e=>U(e?.so_du_kha_dung)>0);return t.length?t.map(e=>`
        <div class="hoa-don-settlement-holder-row">
          <span>
            ${n(Ke(e))} đang giữ
          </span>

          <strong>
            ${n(G(e?.so_du_kha_dung))}
          </strong>
        </div>
      `).join(``):`
      <p class="hoa-don-settlement-holder-empty">
        Chưa có người đang giữ tiền.
      </p>
    `}function Je(e){let t=String(e??``).trim();if(!t)return`—`;let n=new Date(t);return Number.isNaN(n.getTime())?t:new Intl.DateTimeFormat(`vi-VN`).format(n)}function Ye(e){let t=e?.header??e?.invoice??{},r=e?.order??{},i=e?.customer??{},a=e?.roles??{},o=t?.ma_hoa_don??t?.order_code??r?.ma_don_hang??r?.order_code??`—`,s=i?.name??i?.ten_khach_hang??t?.ten_khach_hang??r?.customer_name??`—`,c=a?.creator_name??a?.seller_name??t?.ten_nguoi_ban??t?.seller_name??`—`,l=a?.assignee_name??a?.delivery_name??t?.ten_nguoi_giao??t?.delivery_name??`—`,u=e?.delivery?.ngay_hoan_thanh??e?.delivery?.completed_at??t?.ngay_hoan_thanh??t?.completed_at??r?.ngay_hoan_thanh??r?.completed_at??``;return`
    <section class="hoa-don-settlement-order-block">
      <h3>Thông tin đơn</h3>

      <div>
        <span>Mã đơn</span>
        <strong>${n(o)}</strong>
      </div>

      <div>
        <span>Khách hàng</span>
        <strong>${n(s)}</strong>
      </div>

      <div>
        <span>Người bán</span>
        <strong>${n(c)}</strong>
      </div>

      <div>
        <span>Người giao</span>
        <strong>${n(l)}</strong>
      </div>

      ${u?`
            <div>
              <span>Ngày hoàn thành</span>

              <strong>
                ${n(Je(u))}
              </strong>
            </div>
          `:``}
    </section>
  `}function Xe(e){return Ge(e).map(e=>{let t=String(e?.id_san_pham??``).trim(),i=W(e?.so_luong_don??e?.quantity??e?.so_luong),a=W(e?.so_luong_da_tat_toan),o=W(e?.so_luong_con_lai??Math.max(0,i-a)),s=W(e?.gia_cong_ty_tham_chieu??e?.gia_cong_ty??e?.reference_price),c=e?.name||e?.ten_san_pham||e?.ten_san_pham_snapshot||e?.product_name||e?.ma_san_pham_snapshot||`Sản phẩm`,l=o,u=s>0?new Intl.NumberFormat(`vi-VN`).format(s):``,d=l*s;return!t||i<=0||o<=0?``:`
        <article
          class="hoa-don-settlement-product"
          data-invoice-product-row
          data-invoice-settlement-row
        >
          <strong
            class="hoa-don-settlement-product__name"
          >
            ${n(c)}
          </strong>

          <small
            class="hoa-don-settlement-product__company-price"
          >
            Giá công ty:
            ${n(G(s))}
          </small>

          <div
            class="hoa-don-settlement-product__editor"
          >
            <button
              type="button"
              class="hoa-don-settlement-product__step"
              hidden
              data-invoice-product-step="-1"
              aria-label="Giảm số lượng"
            >
              −
            </button>

            <input
              class="hoa-don-settlement-product__quantity"
              type="number"
              min="${r(o)}"
              max="${r(o)}"
              step="1"
              inputmode="numeric"
              readonly
                tabindex="-1"
              aria-readonly="true"
              value="${r(l)}"
              data-invoice-product-quantity
              data-invoice-product-id="${r(t)}"
              data-invoice-product-max="${r(o)}"
              aria-label="Số lượng tất toán cố định"
            >

            <button
              type="button"
              class="hoa-don-settlement-product__step"
              hidden
              data-invoice-product-step="1"
              aria-label="Tăng số lượng"
            >
              +
            </button>

            <span
              class="hoa-don-settlement-product__operator"
            >
              ×
            </span>

            <input
              class="hoa-don-settlement-product__price"
              type="text"
              inputmode="numeric"
              autocomplete="off"
              value="${r(u)}"
              data-invoice-product-price
              aria-label="Đơn giá tất toán"
            >

            <span
              class="hoa-don-settlement-product__operator"
            >
              =
            </span>

            <strong
              class="hoa-don-settlement-product__line-total"
              data-invoice-line-total
            >
              ${n(G(d))}
            </strong>
          </div>
        </article>
      `}).join(``)}function Ze(e){return(Array.isArray(e?.products)?e.products:[]).map(e=>{let t=String(e?.id_san_pham??``).trim(),i=W(e?.quantity??e?.so_luong);return!t||i<=0?``:`
        <div class="hoa-don-action-line" data-invoice-product-row>
          <span class="hoa-don-action-line__name">
            <strong>${n(e?.name||e?.model||`Sản phẩm`)}</strong>
            <small>Tối đa ${i}</small>
          </span>
          <input
            type="number"
            min="0"
            max="${r(i)}"
            step="1"
            value="0"
            data-invoice-product-quantity
            data-invoice-product-id="${r(t)}"
            data-invoice-product-max="${r(i)}"
          >
        <label
          class="hoa-don-action-full-amount hoa-don-action-full-quantity"
        >
          <input
            type="checkbox"
            data-invoice-product-full
          >
          <span>Đủ</span>
        </label>
      </div>
      `}).join(``)}function J(e){return He[String(e??``).trim().toUpperCase()]??`Xử lý hóa đơn`}function Qe({actionKey:e,detail:t,employees:i=[],currentEmployeeId:a=``,photos:o=[]}={}){let s=String(e??``).trim().toUpperCase(),c=t?.order??{},l=t?.header??{},u=t?.customer??{},d=t?.roles??{},f=U((t?.settlement_context?.actor_balance??t?.actor_balance??{})?.available);t?.settlement_context?.settlement??t?.company_settlement,t?.settlement_context?.actor;let p=t?.roles??t?.settlement_context?.roles??{},h=String(p?.creator_id??t?.header?.id_nguoi_tao_chot??t?.invoice?.id_nguoi_tao_chot??``).trim(),ee=String(p?.assignee_id??t?.header?.id_nguoi_nhan_chot??t?.invoice?.id_nguoi_nhan_chot??``).trim(),g=!!(h&&h===ee),_=t?.internal_reconciliation?.labor??t?.labor??{};g||W(_?.tien_cong_tham_chieu_snapshot);let v=W(t?.header?.total??t?.invoice?.tong_tien_phai_thu??t?.money?.total??0);(Array.isArray(t?.transfers)?t.transfers:[]).filter(e=>String(e?.trang_thai_chuyen??``).trim().toUpperCase()===`DA_XAC_NHAN`&&!!String(e?.id_but_toan??``).trim());let y=``;if((s===`HOA_DON_CHUYEN_TIEN`||s===`HOA_DON_CHUYEN_QUYEN_THU`)&&(y+=`
      <label class="hoa-don-action-field">
        <span>Người nhận</span>
        <select data-invoice-action-employee>
          <option value="">Chọn nhân viên</option>
          ${Ue(i,{currentEmployeeId:a,creatorId:d?.creator_id,assigneeId:d?.assignee_id})}
        </select>
      </label>
    `),s===`HOA_DON_YEU_CAU_CHUYEN_TIEN`&&(y+=`
      <section class="hoa-don-settlement-flow-block">
        <h3>Dòng tiền</h3>

        ${q(i)}
      </section>

      <label class="hoa-don-action-field">
        <span>Chọn người đang giữ tiền</span>

        <select data-invoice-action-employee>
          <option value="">
            Chọn người đang giữ tiền
          </option>

          ${We(i,a)}
        </select>
      </label>

      <strong
        hidden
        data-invoice-request-holder-available
      >
        0 đ
      </strong>
    `),s===`HOA_DON_CHUYEN_TIEN`&&(y+=`

      <section class="hoa-don-action-balance">
        <div>
          <span>Số tiền đang giữ</span>
          <strong>${n(G(f))}</strong>
        </div>
      </section>

      <div class="hoa-don-action-field">
        <span>Số tiền chuyển</span>

        <div class="hoa-don-action-amount-row">
          <input
            type="text"
            inputmode="numeric"
            autocomplete="off"
            placeholder="Nhập số tiền"
            data-invoice-action-amount
          >

          <label class="hoa-don-action-full-amount">
            <input
              type="checkbox"
              data-invoice-action-full-amount
            >
            <span>Đủ</span>
          </label>
        </div>
      </div>

      <div class="hoa-don-action-preview">
        <span>Còn lại sau chuyển</span>
        <strong data-invoice-transfer-remaining>${n(G(f))}</strong>
      </div>
    `),s===`HOA_DON_YEU_CAU_CHUYEN_TIEN`&&(y+=`
      <label class="hoa-don-action-field">
        <span>Số tiền</span>

        <input
          type="text"
          inputmode="numeric"
          autocomplete="off"
          placeholder="Nhập số tiền"
          data-invoice-action-amount
        >
      </label>

      <label class="hoa-don-action-field">
        <span>Ghi chú</span>

        <textarea
          rows="3"
          maxlength="500"
          placeholder="Nhập ghi chú"
          data-invoice-action-note
        ></textarea>
      </label>
    `),s===`HOA_DON_CHUYEN_QUYEN_THU`&&(y+=`<div class="hoa-don-action-note">Chuyển quyền thu phần tiền còn thiếu. Tiền đã thu vẫn thuộc người đang giữ tiền.</div>`),s===`HOA_DON_TAT_TOAN_CONG_TY`){let e=t?.pendingTransfer??null,s=qe(t,i,a),c=String(a??``).trim(),l=U(s.find(e=>!!e?.is_current_employee||c&&String(e?.id_nhan_vien??``).trim()===c)?.so_du_kha_dung),u=new Set([...Array.isArray(t?.available_actions)?t.available_actions:[],...Array.isArray(t?.allowed_actions)?t.allowed_actions:[],...Array.isArray(t?.header?.available_actions)?t.header.available_actions:[]].map(e=>String(e??``).trim().toUpperCase())),d=!e&&u.has(`HOA_DON_YEU_CAU_CHUYEN_TIEN`)&&s.some(e=>String(e?.id_nhan_vien??``).trim()!==c&&U(e?.so_du_kha_dung)>0);y+=`
      <section
        data-invoice-settlement-main
        data-invoice-settlement-available="${r(String(l))}"
      >
        ${Ye(t)}

        <section class="hoa-don-settlement-flow-block">
          <h3>Dòng tiền</h3>

          ${q(s)}

          ${e?`
                <article class="hoa-don-settlement-pending">
                  <span>
                    Đang chờ
                    ${n(e?.ten_nguoi_chuyen??e?.sender_name??e?.from_name??`người giữ tiền`)}
                    chuyển
                  </span>

                  <strong>
                    ${n(G(e?.so_tien??e?.amount))}
                  </strong>
                </article>
              `:d?`
                  <button
                    type="button"
                    class="hoa-don-settlement-request-button"
                    data-invoice-settlement-request-open
                  >
                    Yêu cầu chuyển tiền
                  </button>
                `:``}
        </section>

        <section class="hoa-don-settlement-products-block">
          <h3>Tất toán sản phẩm</h3>

          <div class="hoa-don-action-lines">
            ${Xe(t)}
          </div>
        </section>

        <input
          type="hidden"
          value="0"
          data-invoice-settlement-labor
        >

        <strong
          hidden
          data-invoice-settlement-profit
        >
          0 đ
        </strong>

        <section class="hoa-don-settlement-summary">
          <div>
            <span>Tạm tính</span>

            <strong data-invoice-settlement-total>
              0 đ
            </strong>
          </div>

          <div>
            <span>Số dư đang giữ</span>

            <strong>
              ${n(G(l))}
            </strong>
          </div>

          <div>
            <span data-invoice-settlement-remaining-label>
              Còn lại
            </span>

            <strong data-invoice-settlement-remaining>
              ${n(G(l))}
            </strong>
          </div>
        </section>

        <p
          class="hoa-don-settlement-warning"
          data-invoice-settlement-warning
          hidden
        ></p>

        <section class="hoa-don-action-field">
          <span>Ảnh xác nhận</span>

          ${m({photos:o,maxPhotos:5,addLabel:`Thêm ảnh`,addTitle:`Thêm ảnh xác nhận tất toán`})}
        </section>

        <label class="hoa-don-action-field">
          <span>Ghi chú</span>

          <textarea
            rows="3"
            maxlength="500"
            placeholder="Nhập ghi chú"
            data-invoice-action-note
          ></textarea>
        </label>
      </section>


    `}return s===`HOA_DON_HOAN_DON`&&(y+=`
      <label class="hoa-don-action-field">
        <span>Lý do hoàn đơn</span>
        <textarea rows="3" maxlength="500" placeholder="Nhập lý do" data-invoice-action-reason></textarea>
      </label>
      <div class="hoa-don-action-note">Nhập số lượng cần hoàn. Thao tác tạo phiếu hoàn chờ xử lý, chưa tự nhập kho hoặc hoàn tiền.</div>
      <div class="hoa-don-action-lines">${Ze(t)}</div>
    `),`
    <section class="hoa-don-action-page" data-invoice-action-page="${r(s)}" data-invoice-available-balance="${r(f)}" data-invoice-total="${r(v)}">
      ${s===`HOA_DON_TAT_TOAN_CONG_TY`||s===`HOA_DON_YEU_CAU_CHUYEN_TIEN`?``:`
            <article class="hoa-don-action-summary">
              <strong>
                ${n(c?.ma_don_hang||`Đơn hàng`)}
              </strong>

              <span>
                ${n(u?.name||c?.customer_name||``)}
              </span>

              <small>
                ${n(R(l?.state,``))}
              </small>
            </article>
          `}
      <div class="hoa-don-action-form">${y}</div>
      <button type="button" class="hoa-don-action-submit app-inline-action${s===`HOA_DON_HOAN_DON`?` is-danger`:``}" data-invoice-action-submit>
        ${n(s===`HOA_DON_YEU_CAU_CHUYEN_TIEN`?`Xác nhận`:J(s))}
      </button>
    </section>
  `}function $e(e){let t=e.querySelector(`[data-invoice-action-page]`);if(!t)return;let n=U(t.getAttribute(`data-invoice-available-balance`)),r=t.querySelector(`[data-invoice-action-amount]`),i=t.querySelector(`[data-invoice-transfer-remaining]`),a=t.querySelector(`[data-invoice-action-full-amount]`),o=t.querySelector(`[data-invoice-action-employee]`),s=t.querySelector(`[data-invoice-request-holder-available]`),c=()=>{if(!o||!s)return;let e=o.selectedOptions?.[0];n=U(e?.getAttribute(`data-holder-available`)),t.setAttribute(`data-invoice-available-balance`,String(W(n))),s.textContent=G(n),r&&(r.value=``,r.dispatchEvent(new Event(`input`,{bubbles:!0})))},l=e=>{let t=K(e.value);e.value=t?new Intl.NumberFormat(`vi-VN`).format(Number(t)):``};r&&r.addEventListener(`input`,()=>{let e=W(K(r.value));e=Math.min(W(n),e),r.value=e>0?new Intl.NumberFormat(`vi-VN`).format(e):``,i&&(i.textContent=G(Math.max(0,n-e))),a&&(a.checked=n>0&&e===W(n))}),o&&s&&(o.addEventListener(`change`,c),c()),a&&r&&a.addEventListener(`change`,()=>{a.checked&&(r.value=new Intl.NumberFormat(`vi-VN`).format(n),r.dispatchEvent(new Event(`input`,{bubbles:!0})))});let u=()=>{let e=0;t.querySelectorAll(`[data-invoice-settlement-row]`).forEach(t=>{let n=t.querySelector(`[data-invoice-product-quantity]`),r=t.querySelector(`[data-invoice-product-price]`),i=t.querySelector(`[data-invoice-line-total]`),a=t.querySelector(`[data-invoice-product-full]`),o=W(n?.getAttribute(`data-invoice-product-max`)),s=W(n?.value);s=o>0?Math.min(o,s):0,n&&(n.value=String(s)),a&&(a.checked=o>0&&s===o);let c=W(K(r?.value));r&&(r.value=c>0?new Intl.NumberFormat(`vi-VN`).format(c):``);let l=s*c;e+=l,i&&(i.textContent=G(l))});let r=t.querySelector(`[data-invoice-settlement-total]`),i=t.querySelector(`[data-invoice-settlement-remaining]`),a=t.querySelector(`[data-invoice-settlement-remaining-label]`),o=t.querySelector(`[data-invoice-settlement-warning]`);r&&(r.textContent=G(e));let s=n-e;a&&(a.textContent=s>=0?`Còn lại`:`Thiếu`),i&&(i.textContent=G(Math.abs(s)),i.dataset.state=s>=0?`remaining`:`shortage`),o&&(o.hidden=s>=0,o.textContent=s>=0?``:`Tạm tính vượt số dư đang giữ `+G(Math.abs(s))+`.`)};t.querySelectorAll(`[data-invoice-product-price]`).forEach(e=>{e.addEventListener(`input`,()=>{l(e),u()}),e.addEventListener(`focus`,()=>{e.select()})}),t.querySelectorAll(`[data-invoice-product-quantity]`).forEach(e=>{e.addEventListener(`input`,()=>{let t=W(e.getAttribute(`data-invoice-product-max`)),n=W(e.value);n=t>0?Math.min(t,n):0,e.value=String(n);let r=e.closest(`[data-invoice-product-row]`)?.querySelector(`[data-invoice-product-full]`);r&&(r.checked=t>0&&n===t),u()}),e.addEventListener(`focus`,()=>{e.select()})}),t.querySelectorAll(`[data-invoice-product-step]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.closest(`[data-invoice-settlement-row]`)?.querySelector(`[data-invoice-product-quantity]`);if(!t)return;let n=Number(e.getAttribute(`data-invoice-product-step`)),r=W(t.getAttribute(`data-invoice-product-max`)),i=W(t.value),a=Math.min(r,Math.max(0,i+(Number.isFinite(n)?n:0)));t.value=String(a),t.dispatchEvent(new Event(`input`,{bubbles:!0}))})}),t.querySelectorAll(`[data-invoice-product-full]`).forEach(e=>{e.addEventListener(`change`,()=>{if(!e.checked)return;let t=e.closest(`[data-invoice-product-row]`)?.querySelector(`[data-invoice-product-quantity]`);if(!t)return;let n=W(t.getAttribute(`data-invoice-product-max`));t.value=String(n),t.dispatchEvent(new Event(`input`,{bubbles:!0}))})}),t.querySelectorAll(`[data-invoice-product-quantity]`).forEach(e=>{e.dispatchEvent(new Event(`input`,{bubbles:!0}))}),u();let d=t.querySelector(`[data-invoice-settlement-labor]`),f=t.querySelector(`[data-invoice-settlement-profit]`),p=U(t.getAttribute(`data-invoice-total`)),m=()=>{if(!f)return;let e=Array.from(t.querySelectorAll(`[data-invoice-settlement-row]`)).reduce((e,t)=>e+U(t.querySelector(`[data-invoice-product-quantity]`)?.value)*U(K(t.querySelector(`[data-invoice-product-price]`)?.value)),0),n=U(K(d?.value)),r=Math.max(p-e-n,0);f.textContent=G(r),d?.setCustomValidity(``)};d?.addEventListener(`input`,()=>{d.type!==`hidden`&&l(d),m()}),t.querySelectorAll(`[data-invoice-product-price]`).forEach(e=>{e.addEventListener(`input`,m)}),m()}function et(e,t){let n=String(t??``).trim().toUpperCase(),r=String(e.querySelector(`[data-invoice-action-employee]`)?.value??``).trim(),i=Number(K(e.querySelector(`[data-invoice-action-amount]`)?.value)||0),a=String(e.querySelector(`[data-invoice-action-reason]`)?.value??``).trim(),o=String(e.querySelector(`[data-invoice-action-note]`)?.value??``).trim(),s=String(e.querySelector(`[data-invoice-reverse-ledger]`)?.value??``).trim(),c=Array.from(e.querySelectorAll(`[data-invoice-product-row]`)).map(e=>{let t=e.querySelector(`[data-invoice-product-quantity]`),r=Number(t?.value??0),i=Number(t?.getAttribute(`data-invoice-product-max`)??0),a=String(t?.getAttribute(`data-invoice-product-id`)??``).trim();if(n===`HOA_DON_TAT_TOAN_CONG_TY`&&(!Number.isSafeInteger(i)||i<=0||r!==i))throw TypeError(`Hóa đơn phải tất toán toàn bộ số lượng còn lại.`);if(!Number.isSafeInteger(r)||r<=0)return null;if(Number.isSafeInteger(i)&&i>0&&r>i)throw TypeError(`Số lượng vượt quá số lượng còn lại.`);let o={id_san_pham:a,so_luong:r};if(n===`HOA_DON_TAT_TOAN_CONG_TY`){let t=Number(K(e.querySelector(`[data-invoice-product-price]`)?.value)||0);if(!Number.isSafeInteger(t)||t<0)throw TypeError(`Đơn giá tất toán không hợp lệ.`);o.don_gia_tat_toan=t}return o}).filter(Boolean),l=Number(K(e.querySelector(`[data-invoice-settlement-labor]`)?.value)||0);if(n===`HOA_DON_TAT_TOAN_CONG_TY`&&(!Number.isSafeInteger(l)||l<0))throw TypeError(`Tiền công thực tế không hợp lệ.`);return{actionKey:n,receiverId:r,amount:i,reason:a,note:o,ledgerId:s,laborAmount:l,lines:c}}var tt=Object.freeze({CHUA_THANH_TOAN:`Chưa thanh toán`,THANH_TOAN_MOT_PHAN:`Thanh toán một phần`,DA_THANH_TOAN:`Đã thanh toán`}),nt=Object.freeze({CHUA_TAT_TOAN:`Chưa tất toán`,DANG_TAT_TOAN:`Đang tất toán`,DA_TAT_TOAN:`Đã tất toán`,DA_HUY:`Đã hủy tất toán`}),rt=Object.freeze([{key:`dang-xu-ly`,label:`Đang xử lý`,statuses:[`CHUA_THANH_TOAN`,`THANH_TOAN_MOT_PHAN`,`DA_THANH_TOAN`]},{key:`da-tat-toan`,label:`Đã tất toán`,statuses:[`DA_THANH_TOAN`]},{key:`loi-nhuan`,label:`Lợi nhuận`,statuses:[`CHUA_THANH_TOAN`,`THANH_TOAN_MOT_PHAN`,`DA_THANH_TOAN`]},{key:`thong-ke`,label:`Thống kê`,statuses:[]}]);function Y(e,t){e.dispatchEvent(new CustomEvent(`kangaroo:page-chrome`,{bubbles:!0,detail:t}))}function it(e){return rt.find(t=>t.key===e)??rt[0]}function X(e){if(e==null||e===``)return``;let t=Number(e);return Number.isFinite(t)?E(t):String(e)}function at(e){let t=String(e??``).trim();return tt[t]??t??`Chưa xác định`}function ot(e){let t=String(e??``).trim();return nt[t]??t}function st(e,t,n){let r=String(e??``).trim(),i=String(n??``).trim();return r&&i&&r===i?`Bạn`:String(t??`Nhân viên`).trim()}function Z(e,t,n,r){let i=String(e??``),a=String(n??``).trim(),o=st(t,a,r);return!i||!a||o===a?i:i.split(a).join(o)}function ct(e){let t=e?.collection_task;if(!t||typeof t!=`object`||!t?.status_label&&!t?.summary_label&&!t?.action_key)return null;let n=String(t?.action_key??``).trim().toUpperCase();if(n&&!lt(e).has(n))return null;let r=String(e?.current_employee_id??``).trim(),i=String(t?.holder_id??t?.id_nguoi_giu??t?.id_nguoi_thu??t?.employee_id??``).trim(),a=String(t?.holder_name??t?.ten_nguoi_giu??t?.collector_name??t?.employee_name??``).trim(),o=st(i,a,r),s=e=>Z(e,i,a,r);return{...t,action_key:n||null,holder_name:o,status_label:s(t?.status_label),summary_label:s(t?.summary_label),button_label:s(t?.button_label)}}function lt(e){let t=[...Array.isArray(e?.allowed_actions)?e.allowed_actions:[],...Array.isArray(e?.available_actions)?e.available_actions:[]];return new Set(t.map(e=>String(e??``).trim().toUpperCase()).filter(Boolean))}function ut(e,t){if(t!==`dang-xu-ly`)return[];let n=lt(e),r=[],i=ct(e),a=String(i?.action_key??``).trim().toUpperCase();a&&n.has(a)&&r.push({actionKey:a,label:i?.button_label||`Xác nhận thu`,kind:`collection`,className:`is-primary`});for(let e of[{actionKey:`HOA_DON_TAT_TOAN_CONG_TY`,label:`Tất toán`,className:`is-primary`},{actionKey:`HOA_DON_CHUYEN_TIEN`,label:`Chuyển tiền`,className:``},{actionKey:`HOA_DON_CHUYEN_QUYEN_THU`,label:`Chuyển COD`,className:``}])n.has(e.actionKey)&&r.push({...e,kind:`business`});return r}function dt(e){switch(String(e??``).trim().toUpperCase()){case`HOA_DON_XAC_NHAN_TIEN_DANG_GIU`:return`XAC_NHAN_TIEN_DANG_GIU`;case`HOA_DON_XAC_NHAN_DA_THU`:return`XAC_NHAN_DA_THU`;case`HOA_DON_XAC_NHAN_COD`:return`XAC_NHAN_COD`;case`HOA_DON_THU_TIEN`:return`THU_TIEN`;default:return``}}function ft(e){return String(e??``).replace(/\D+/g,``)}function pt(e){let t=ft(e);if(!t)return 0;let n=Number(t);return Number.isSafeInteger(n)?n:0}function mt(e){let t=Number(e??0);return!Number.isSafeInteger(t)||t<=0?``:new Intl.NumberFormat(`vi-VN`).format(t)}function ht(e){return`
    <nav class="hoa-don-tabs">
      ${rt.map(t=>`
            <button
              type="button"
              class="${t.key===e?`is-active`:``}"
              data-invoice-tab="${r(t.key)}"
            >
              ${n(t.label)}
            </button>
          `).join(``)}
    </nav>
  `}function gt(e){let t=String(e??``).trim(),n=t.replace(/\D+/g,``);return!t.includes(`*`)&&n.length>=8?`tel:${n}`:``}function _t(e){let t=String(e??``).trim();return t?`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(t)}`:``}function vt(e,t){let n=String(e?.entity_id??``),r=ct(e),i=ut(e,t),a=_(e),o=e?.money&&typeof e.money==`object`?e.money:{},s=Number(o?.collected??0),c=Number(o?.remaining??0),l=Number.isFinite(s)?Math.max(0,s):0,u=Number.isFinite(c)?Math.max(0,c):0,p=String(e?.roles?.collector_name??r?.holder_name??e?.roles?.assignee_name??e?.roles?.creator_name??`Nhân viên`).trim(),m=String(e?.current_employee_id??``).trim(),h=(Array.isArray(e?.money_holders)?e.money_holders:[]).map(e=>{let t=String(e?.id_nhan_vien??``).trim(),n=Number(e?.so_du_kha_dung??0);return{...e,id_nhan_vien:t,is_current_employee:!!(e?.is_current_employee??(t&&t===m)),so_du_kha_dung:Number.isFinite(n)?Math.max(0,n):0}}).filter(e=>e.id_nhan_vien&&e.so_du_kha_dung>0).sort((e,t)=>Number(!!t?.is_current_employee)-Number(!!e?.is_current_employee)),ee=String(e?.customer_phone??e?.phone??``).trim(),g=String(e?.customer_address??e?.address??``).trim(),v=[],y=gt(ee),b=_t(g);y&&v.push({href:y,label:`Gọi khách hàng`,icon:d.phone}),b&&v.push({href:b,label:`Mở bản đồ`,icon:d.map,external:!0});let x=[];if(t===`dang-xu-ly`&&r)x.push({label:r?.summary_label||`Cần xử lý tiền`,value:X(r?.amount),tone:`warning`});else if(t===`dang-xu-ly`){if(h.length)h.forEach(e=>{let t=String(e?.ten_nhan_vien??e?.ten_dang_nhap??`Nhân viên`).trim();x.push({label:e?.is_current_employee?`Bạn đang giữ`:`${t} đang giữ`,value:X(e?.so_du_kha_dung)})});else if(l>0){let t=String(e?.roles?.collector_id??r?.holder_id??``).trim();x.push({label:t&&t===m?`Bạn đang giữ`:`${p} đang giữ`,value:X(l)})}l>0&&u>0&&x.push({label:`Còn lại`,value:X(u)})}else t===`da-tat-toan`&&x.push({label:`Tất toán`,value:ot(e?.settlement_state)});let te=[...i.filter(e=>!String(e?.className??``).split(/\s+/).includes(`is-primary`)),...i.filter(e=>String(e?.className??``).split(/\s+/).includes(`is-primary`))].map(e=>({label:e.label,className:e.className,data:{"invoice-action":e.actionKey,"invoice-id":n}}));return f({id:n,title:e?.order_code||`Đơn hàng`,titleIcon:d.order,typeLabel:a?.label,typeIcon:a?.icon,typeKey:a?.key,status:r?.status_label||at(e?.state),statusKey:r?.status_key||e?.state,subtitle:e?.customer_name||`Khách lẻ`,subtitleIcon:d.user,timestamp:T(e?.completed_at,``),lines:[{icon:d.phone,text:e?.customer_phone},{icon:d.map,text:e?.address}],rows:x.filter(e=>e.value!==``),tools:v,actions:te,ariaLabel:`Mở chi tiết `+(e?.order_code||`đơn hàng`)})}var yt={id:`hoa-don`,label:`Hóa đơn`,shortLabel:`HĐ`,render(e,a={}){let _=i(),b=ae(),S={cards:[],transferRequests:[],transferRequestsLoaded:!1,pendingTransferCount:0,transferError:``,transferConfirmRequest:null,activeTab:`dang-xu-ly`,search:``,searchByTab:new Map(rt.map(e=>[e.key,``])),detail:null,detailId:null,detailReadOnly:!1,orderHistory:null,checkHistory:null,checkHistoryError:``,invoiceCheckContext:null,invoiceCheckError:``,deliveryViewerImages:[],deliveryViewerIndex:0,evidenceViewerImages:[],evidenceViewerIndex:0,detailSettlementRoundId:null,collectionCard:null,actionKey:``,actionDetail:null,actionEmployees:[],actionCurrentEmployeeId:``,actionEvidencePhotos:[],actionEvidenceSequence:0,actionSource:`list`,error:``,busy:!1,worklistBusy:!1,worklistPhase:`idle`,worklistRequestId:0,transferRequestId:0},C=le({initialTabKey:S.activeTab,pageSize:10,async fetchPage({tabKey:e,search:t,cursor:n,limit:r}){let i=it(e),o=await ue({search:t||null,statuses:i.statuses,tabKey:e,cursor:n,limit:r,currentEmployeeId:a?.identity?.id_nhan_vien??``});return{items:Array.isArray(o?.cards)?o.cards:[],cursor:o?.cursor??null,hasMore:o?.has_more===!0,meta:{permissionMask:o?.permission_mask??null,serverTime:o?.server_time??null,pendingTransferCount:Math.max(0,Number(o?.pending_transfer_count??0)||0)}}}});function w(){return typeof a?.isActive!=`function`||a.isActive()}let E=new Set([`CHUA_THANH_TOAN`,`THANH_TOAN_MOT_PHAN`,`DA_THANH_TOAN`]);function oe(e,t){let n=it(t).key,r=String(e?.state??``).trim().toUpperCase(),i=String(e?.settlement_state??``).trim().toUpperCase();return n===`dang-xu-ly`?E.has(r)&&i!==`DA_TAT_TOAN`:n===`da-tat-toan`?r===`DA_THANH_TOAN`&&i===`DA_TAT_TOAN`:n===`loi-nhuan`&&E.has(r)&&(e?.benefit_state!=null||e?.profit!=null)}async function O(e,{throwOnReadError:t=!1}={}){let n=String(e??``).trim();if(!n)return C.invalidate({all:!0}),null;try{let e=await de([n]);if(!w())return null;let t=e.find(e=>String(e?.entity_id??``)===n)??null,r=C.reconcileItems((e,r)=>{let i=e.findIndex(e=>String(e?.entity_id??``)===n),a=e.filter(e=>String(e?.entity_id??``)!==n);if(!t||!oe(t,r.tabKey))return a;let o=!!String(r.search??``).trim();if(!(o?i>=0:r.pageNumber===1))return a;let s=o&&i>=0?Math.min(i,a.length):0;return a.splice(s,0,t),a},{all:!0});return S.cards=Array.isArray(r?.items)?r.items:S.cards,S.worklistPhase=`ready`,S.error=``,t}catch(e){if(C.invalidate({all:!0}),t)throw e;return null}}let k=s({initialValue:S.search,debounceMs:700,isActive:w,onApply(e,t){S.search=e,S.searchByTab.set(S.activeTab,e);let n=String(t?.reason??``);if(n===`tab-sync`)return null;let r=n===`debounce`||n===`submit`;return $({silent:r,allowWhileBusy:r,force:t?.force===!0,reason:n})}}),ce=new Set([`CHUYEN_TIEN_NOI_BO`,`CHUYEN_QUYEN_THU_TIEN`,`CHUYEN_QUYEN_XU_LY_TAT_TOAN`,`BAN_GIAO_HOA_DON`,`NHIEM_VU_BAN_GIAO_TIEN`]),A=new Map,j=null,M=0;function N(e={}){let t=String(e?.entity_type??`UNKNOWN`).trim().toUpperCase(),n=String(e?.entity_id??``).trim(),r=String(e?.action_key??`UNKNOWN`).trim().toUpperCase();return t+`:`+(n||r)}function me(){M&&=(globalThis.clearTimeout(M),0)}function he(e=180){w()&&(me(),M=globalThis.setTimeout(()=>{M=0;let e=A.values().next().value;e&&je(e)},e))}function ge(e){return e.includes(`CHUYEN`)||e.includes(`BAN_GIAO`)||e.includes(`YEU_CAU`)}async function P(e){let t=String(e??``).trim();if(!t||_.currentKey()!==`detail:${t}`)return!1;let n=await fe(t);return!w()||_.currentKey()!==`detail:${t}`?!1:(S.detailId=t,S.detail=n,Rt(),!0)}async function Oe(e,{refreshTransfers:t=!1}={}){return C.invalidate({all:!0}),t&&(S.transferRequestsLoaded=!1),!w()||S.busy?null:(t&&await G().catch(()=>null),$({silent:!0,force:!0,reason:e}))}async function ke(e={}){if(!w())return;let t=String(e?.entity_type??``).trim().toUpperCase(),n=String(e?.entity_id??``).trim(),r=String(e?.action_key??`UNKNOWN`).trim().toUpperCase(),i=ge(r),a=ce.has(t);if(S.busy){C.invalidate({all:!0}),(i||a)&&(S.transferRequestsLoaded=!1),A.set(N(e),e),he();return}if(t===`HOA_DON`&&n){i&&await G().catch(e=>{console.warn(`[HoaDon] Realtime transfer refresh lỗi.`,e)});try{await O(n,{throwOnReadError:!0}),await P(n),_.currentKey()===`list`&&Z();return}catch(e){console.warn(`[HoaDon] Targeted Realtime card sync lỗi.`,e)}}if(a&&n){let e=transferRequestById(n),t=String(e?.id_hoa_don??``).trim();if(await G().catch(()=>null),!w())return;let r=transferRequestById(n),i=t||String(r?.id_hoa_don??``).trim();if(i)try{await O(i,{throwOnReadError:!0}),await P(i),_.currentKey()===`list`&&Z();return}catch(e){console.warn(`[HoaDon] Realtime transfer card sync lỗi.`,e)}}await Oe(`realtime:`+(t||`unknown`)+`:`+r.toLowerCase(),{refreshTransfers:i||a})}async function Ae(){if(w()){if(S.busy){C.invalidate({all:!0}),he();return}for(;w()&&A.size;){let e=[...A.values()];A.clear();for(let t of e)try{await ke(t)}catch(e){console.warn(`[HoaDon] Realtime entity sync lỗi.`,e)}}}}function je(e={}){if(!t(e,`hoa-don`).shouldDispatch||!w())return null;String(e?.entity_type??`UNKNOWN`).trim().toUpperCase(),String(e?.entity_id??``).trim(),String(e?.action_key??`UNKNOWN`).trim().toUpperCase();let n=N(e);return A.set(n,e),j||=Promise.resolve().then(Ae).finally(()=>{if(j=null,w()&&A.size){let e=A.values().next().value;e&&(S.busy?he():je(e))}}),j}let F=0,I=!1,L=null;function R(){F&&=(globalThis.clearTimeout(F),0)}function z(){I=!0,R();let e=async()=>{if(F=0,!w())return I=!1,!1;if(S.busy)return F=globalThis.setTimeout(()=>{e()},180),!1;if(L)return L;if(!I)return!1;I=!1;let t=String(_.currentKey()??``),n=String(S.detailId??``).trim(),r=(async()=>(await Oe(`authoritative-resume`,{refreshTransfers:!0}),w()?(n&&t===`detail:${n}`&&await P(n),!0):!1))().catch(e=>(w()&&console.warn(`[HoaDon] Authoritative resume lỗi.`,e),!1)),i;return i=r.finally(()=>{L===i&&(L=null),w()&&I&&z()}),L=i,i};return F=globalThis.setTimeout(()=>{e()},0),!0}function B(){return w()?z():!1}a?.onRealtimeInvalidation?.(je),a?.onRealtimeResume?.(B),a?.onCleanup?.(()=>{S.worklistRequestId+=1,S.transferRequestId+=1,me(),R(),I=!1,A.clear(),Ye&&=(e.removeEventListener(`click`,nt),e.removeEventListener(`keydown`,at),!1),k.dispose(),C.dispose(),Q()});function V(e){return e?.type===`invoice-action`}function H({actionKey:e,detail:t,employees:n=[],currentEmployeeId:r=``,source:i=`list`,parentContext:a=null}={}){return{type:`invoice-action`,actionKey:e??``,actionDetail:t??null,actionEmployees:Array.isArray(n)?n:[],actionCurrentEmployeeId:String(r??``).trim(),actionEvidencePhotos:[],actionEvidenceSequence:0,actionSource:i===`detail`?`detail`:`list`,draft:null,scrollTop:0,parentContext:V(a)?a:null}}function Fe(t,n=null){V(t)&&(t.actionKey=S.actionKey,t.actionDetail=S.actionDetail,t.actionEmployees=S.actionEmployees,t.actionCurrentEmployeeId=S.actionCurrentEmployeeId,t.actionEvidencePhotos=S.actionEvidencePhotos,t.actionEvidenceSequence=S.actionEvidenceSequence,t.actionSource=S.actionSource,t.draft=n,t.scrollTop=Number(e.scrollTop??0))}function Ie(e){return V(e)?(S.actionKey=e.actionKey,S.actionDetail=e.actionDetail,S.actionEmployees=e.actionEmployees,S.actionCurrentEmployeeId=e.actionCurrentEmployeeId,S.actionEvidencePhotos=e.actionEvidencePhotos,S.actionEvidenceSequence=e.actionEvidenceSequence,S.actionSource=e.actionSource,!0):!1}function Le(e){return(Array.isArray(e?.requests)?e.requests:[]).filter(e=>e?.trang_thai_chuyen===`CHO_XAC_NHAN`&&e?.id_request)}function Re(){return ee({count:S.pendingTransferCount,dataAttribute:`data-invoice-transfer-notice`,showWhenEmpty:!0})}function ze(e){let t=[e?.ten_nguoi_chuyen,e?.sdt_nguoi_chuyen].filter(Boolean).join(` · `),n=[e?.ten_nguoi_nhan,e?.sdt_nguoi_nhan].filter(Boolean).join(` · `);return String(e?.kieu_chuyen??``).trim().toUpperCase()===`YEU_CAU_CHUYEN`?e?.is_receiver===!0?{label:`Người đang giữ tiền`,value:t}:e?.is_sender===!0?{label:`Người yêu cầu`,value:n}:{label:`Luồng yêu cầu`,value:[t,n].filter(Boolean).join(` → `)}:e?.is_receiver===!0?{label:`Người chuyển`,value:t}:e?.is_sender===!0?{label:`Chuyển cho`,value:n}:{label:`Luồng chuyển`,value:[t,n].filter(Boolean).join(` → `)}}function He(e){let t=String(e?.id_request??``),n=String(e?.kieu_chuyen??``).trim().toUpperCase()===`YEU_CAU_CHUYEN`,r=[];return e?.can_cancel===!0&&r.push({label:n?`Hủy yêu cầu`:`Hủy chuyển`,className:`is-danger`,data:{"transfer-id":t,"invoice-transfer-action":`cancel`}}),e?.can_reject===!0&&r.push({label:`Từ chối`,className:`is-danger`,data:{"transfer-id":t,"invoice-transfer-action":`reject`}}),e?.can_accept===!0&&r.push({label:n?`Xác nhận chuyển`:`Xác nhận`,className:`is-primary`,data:{"transfer-id":t,"invoice-transfer-action":`accept`}}),Array.isArray(e?.evidence)&&e.evidence.length&&r.push({label:`Xem ảnh`,data:{"transfer-id":t,"invoice-transfer-action":`evidence`}}),r}function U(e){let t=String(e?.id_hoa_don??``),n=e?.order_code||`Hóa đơn`,r=e?.request_type===`CHUYEN_TIEN_NOI_BO`,i=e?.request_type===`CHUYEN_QUYEN_XU_LY_TAT_TOAN`,a=String(e?.kieu_chuyen??``).trim().toUpperCase()===`YEU_CAU_CHUYEN`,o=ze(e),s=[{label:`Nghiệp vụ`,value:a?`Yêu cầu chuyển tiền`:r?`Chuyển nội bộ`:i?`Bàn giao xử lý tất toán`:`Chuyển đơn`}];o.value&&s.push(o),e?.amount!==null&&e?.amount!==void 0&&s.push({label:r?`Số tiền chuyển`:`Tiền còn phải thu`,value:X(e.amount)});let c=[],l=gt(e?.customer_phone);l&&c.push({href:l,label:`Gọi khách hàng`,icon:d.phone});let u=_t(e?.address);return u&&c.push({href:u,label:`Mở bản đồ`,icon:d.map,external:!0}),f({id:t,title:n,titleIcon:d.order,status:`Chờ xác nhận`,statusKey:`CHO_XAC_NHAN_CHUYEN`,timestamp:T(e?.created_at,``),subtitle:e?.customer_name||``,subtitleIcon:d.user,lines:[{icon:d.phone,text:e?.customer_phone},{icon:d.map,text:e?.address}],rows:s,tools:c,actions:He(e),ariaLabel:`Mở chi tiết ${n}`})}function W(e){return S.transferRequests.find(t=>String(t?.id_request??``)===String(e??``))??null}async function G(){if(!w())return S.transferRequests;let e=S.transferRequestId+1;S.transferRequestId=e;let t=await _e();return e!==S.transferRequestId||!w()?S.transferRequests:(S.transferRequests=Le(t),S.transferError=``,S.transferRequestsLoaded=!0,S.pendingTransferCount=S.transferRequests.length,S.transferRequests)}async function K(e,t){let n=String(e?.id_request??``);if(!n||![`accept`,`reject`,`cancel`].includes(t))return;let r=t===`accept`,i=t===`cancel`,a=e?.request_type===`CHUYEN_QUYEN_XU_LY_TAT_TOAN`?`XU_LY_TAT_TOAN`:`THU_TIEN`,s=`hoa-don-transfer:`+t+`:`+n;if(b.acquire(s)){S.busy=!0;try{e?.request_type===`CHUYEN_TIEN_NOI_BO`?i?await be({transferId:n,requestKey:o(`hoa-don-huy-chuyen-tien`)}):await ve({transferId:n,accept:r,requestKey:o(r?`hoa-don-xac-nhan-chuyen-tien`:`hoa-don-tu-choi-chuyen-tien`)}):i?await xe({handoverId:n,rowVersion:e?.row_version,requestKey:o(a===`XU_LY_TAT_TOAN`?`hoa-don-huy-ban-giao-xu-ly`:`hoa-don-huy-chuyen-don`),handoverType:a}):await ye({handoverId:n,rowVersion:e?.row_version,accept:r,requestKey:o(a===`XU_LY_TAT_TOAN`?r?`hoa-don-xac-nhan-ban-giao-xu-ly`:`hoa-don-tu-choi-ban-giao-xu-ly`:r?`hoa-don-xac-nhan-chuyen-don`:`hoa-don-tu-choi-chuyen-don`),handoverType:a}),await G(),await O(e?.id_hoa_don),q(),D(i?`Đã hủy yêu cầu chuyển`:r?`Đã xác nhận yêu cầu chuyển`:`Đã từ chối yêu cầu chuyển`)}catch(e){D(e?.message||`Không xử lý được yêu cầu chuyển.`)}finally{S.busy=!1,b.release(s)}}}async function Ue(e){Q(),S.actionEvidenceSequence=0,S.transferConfirmRequest=e??null,await _.open(`invoice-transfer-confirm`,Ge)}async function We(){let e=S.transferConfirmRequest,t=String(e?.id_request??``).trim(),n=String(e?.id_hoa_don??``).trim();if(S.busy||!t||!n)return;let r=`hoa-don-transfer-confirm:`+t;if(!b.acquire(r))return;S.busy=!0;let i=[];try{i=await Ne({invoiceId:n,stage:`xac-nhan-chuyen`,files:S.actionEvidencePhotos.map(e=>e.file)}),await ve({transferId:t,accept:!0,requestKey:o(`hoa-don-xac-nhan-chuyen-tien`),storagePaths:i}),Q(),S.actionEvidenceSequence=0,S.transferConfirmRequest=null,await G(),await O(n),await _.back(),D(`Đã xác nhận yêu cầu chuyển`)}catch(e){i.length&&await Me(i).catch(()=>{}),D(e?.message||`Không xác nhận được chuyển tiền.`)}finally{S.busy=!1,b.release(r)}}function Ge(){let t=S.transferConfirmRequest;if(!t){_.back();return}let r=String(t?.order_code??`Hóa đơn`);Y(e,{headerMode:`title`,title:`Xác nhận chuyển tiền`,showRightAction:!1,onBack:Ke,bottomActions:[]}),e.innerHTML=`
        <section class="hoa-don-action-page">
          <article class="hoa-don-action-summary">
            <strong>${n(r)}</strong>
            <span>Số tiền chuyển: ${n(X(t?.amount))}</span>
          </article>

          <div class="hoa-don-action-form">
            <section class="hoa-don-action-field">
              <span>Ảnh chứng từ xác nhận (không bắt buộc)</span>
              ${m({photos:S.actionEvidencePhotos,maxPhotos:5,addLabel:`Thêm ảnh`,addTitle:`Thêm ảnh xác nhận chuyển tiền`})}
            </section>

            <div class="hoa-don-action-note">
              Tiền chỉ được dịch chuyển sau khi bạn xác nhận thao tác này.
            </div>
          </div>

          <button
            type="button"
            class="hoa-don-action-submit"
            data-invoice-transfer-confirm-submit
          >
            Xác nhận chuyển
          </button>
        </section>
      `;let i=e.querySelector(`[data-photo-picker-input]`);i?.addEventListener(`change`,()=>{qt(i.files),i.value=``}),e.querySelectorAll(`[data-photo-picker-remove]`).forEach(e=>{e.addEventListener(`click`,()=>{Jt(e.dataset.photoId)})}),e.querySelector(`[data-invoice-transfer-confirm-submit]`)?.addEventListener(`click`,()=>{We()})}async function Ke(){Q(),S.actionEvidenceSequence=0,S.transferConfirmRequest=null,await _.back()}async function qe(){if(!S.busy){S.busy=!0,S.transferError=``;try{await G()}catch(e){S.transferError=e?.message||`Không tải được đơn chờ xác nhận.`}finally{S.busy=!1,q()}}}function q(){Y(e,{headerMode:`title`,title:`Đơn chờ xác nhận`,onBack:()=>_.back(),showRightAction:!0,rightIcon:`↻`,rightLabel:`Tải lại`,onRightAction:qe,bottomActions:[]}),e.innerHTML=u({requests:S.transferRequests,error:S.transferError,renderCard:U})}async function Je(){await _.open(`transfer-requests`,q),S.transferRequestsLoaded||await qe()}let Ye=!1,Xe=0;function Ze(e){let t=String(e?.dataset?.recordCard??``).trim();t&&Qt(t,{readOnly:_.currentKey()===`transfer-requests`})}function tt(e){let t=it(e?.dataset?.invoiceTab||`dang-xu-ly`).key;if(t===S.activeTab)return;let n=++Xe;S.worklistRequestId+=1,S.searchByTab.set(S.activeTab,S.search),S.activeTab=t;let r=S.searchByTab.get(t)??``;S.search=r,C.setTab(t),C.setSearch(r);let i=C.snapshot();S.cards=i?.loaded===!0&&Array.isArray(i?.items)?i.items:[],S.error=i?.error||``,S.worklistPhase=t===`thong-ke`||i?.loaded===!0?`ready`:`loading`,Z(),k.reset(r,{force:!0,reason:`tab-sync`}),(typeof globalThis.requestAnimationFrame==`function`?globalThis.requestAnimationFrame.bind(globalThis):e=>globalThis.setTimeout(e,0))(()=>{!w()||n!==Xe||t!==S.activeTab||$({reason:`tab-change`})})}function nt(t){let n=t.target instanceof Element?t.target:null;if(!n)return;let r=n.closest(`[data-cursor-page-previous]`);if(r&&e.contains(r)){t.preventDefault(),r.disabled||$({pageAction:`previous`});return}let i=n.closest(`[data-cursor-page-next]`);if(i&&e.contains(i)){t.preventDefault(),i.disabled||$({pageAction:`next`});return}let a=n.closest(`[data-invoice-transfer-notice]`);if(a&&e.contains(a)){t.preventDefault(),Je();return}let o=n.closest(`[data-invoice-transfer-action]`);if(o&&e.contains(o)){t.preventDefault(),t.stopPropagation();let e=W(o.getAttribute(`data-transfer-id`)),n=o.getAttribute(`data-invoice-transfer-action`);if(!e||![`accept`,`reject`,`cancel`,`evidence`].includes(n))return;if(n===`evidence`){yt(e);return}if(n===`cancel`&&!window.confirm(`Hủy yêu cầu chuyển này?`))return;n===`accept`&&e?.request_type===`CHUYEN_TIEN_NOI_BO`?Ue(e):K(e,n);return}let s=n.closest(`[data-invoice-tab]`);if(s&&e.contains(s)){t.preventDefault(),tt(s);return}let c=n.closest(`[data-invoice-action]`);if(c&&e.contains(c)){t.preventDefault(),t.stopPropagation();let e=String(c.getAttribute(`data-invoice-id`)??``).trim(),n=String(c.getAttribute(`data-invoice-action`)??``).trim().toUpperCase(),r=S.cards.find(t=>String(t?.entity_id??``)===e);if(!r||!n)return;if(dt(n)){Bt(r);return}Xt({actionKey:n,invoiceId:r.entity_id,source:`list`,authorizationSource:r});return}let l=n.closest(`[data-record-card]`);!l||!e.contains(l)||n.closest([`a`,`button`,`input`,`select`,`textarea`,`[data-record-tool]`,`[data-invoice-action]`,`[data-invoice-transfer-action]`].join(`,`))||Ze(l)}function at(t){if(t.key!==`Enter`&&t.key!==` `)return;let n=t.target instanceof Element?t.target:null,r=n?.closest(`[data-record-card]`);!r||n!==r||!e.contains(r)||(t.preventDefault(),Ze(r))}function ot(){Ye||=(e.addEventListener(`click`,nt),e.addEventListener(`keydown`,at),!0)}ot();function st(){let t=e.querySelector(`[data-hoa-don-list-shell]`);t||=(e.innerHTML=`
          <section
            class="hoa-don-page"
            data-hoa-don-list-shell
          >
            <div
              data-hoa-don-list-tabs
            ></div>

            <div
              data-hoa-don-transfer-notice-slot
            ></div>

            <div
              data-hoa-don-list-status
            ></div>

            <div
              class="hoa-don-list"
              data-hoa-don-list-items
            ></div>

            <div
              data-hoa-don-list-pager
            ></div>
          </section>
        `,e.querySelector(`[data-hoa-don-list-shell]`));let n={shell:t,tabs:t?.querySelector(`[data-hoa-don-list-tabs]`),transferNotice:t?.querySelector(`[data-hoa-don-transfer-notice-slot]`),status:t?.querySelector(`[data-hoa-don-list-status]`),items:t?.querySelector(`[data-hoa-don-list-items]`),pager:t?.querySelector(`[data-hoa-don-list-pager]`)};if(!n.shell||!n.tabs||!n.transferNotice||!n.status||!n.items||!n.pager)throw Error(`Không dựng được vùng danh sách Hóa đơn.`);return n}function Z(){Y(e,{headerMode:`search`,placeholder:`Tìm mã đơn hoặc tên khách hàng.`,searchValue:k.snapshot().draft,showRightAction:!0,rightIcon:`↻`,rightLabel:`Tải lại`,onSearchInput(e){k.input(e)},onSearch(e){return k.submit(e)},onRightAction:()=>k.submit(k.snapshot().draft,{force:!0,reason:`refresh`}),bottomActions:[]});let t=S.cards,r=S.activeTab===`thong-ke`?null:C.snapshot(),i=it(S.activeTab),a=S.activeTab===`thong-ke`?`Thống kê sẽ được cấu hình sau.`:`Chưa có hóa đơn ở tab `+i.label,o=st();o.tabs.innerHTML=ht(S.activeTab),o.transferNotice.innerHTML=Re(),o.status.innerHTML=`
        ${S.error?`
              <div
                class="hoa-don-message is-error"
              >
                ${n(S.error)}
              </div>
            `:``}

        ${S.worklistPhase===`refreshing`?`
              <div class="hoa-don-message">
                <span>
                  Đang cập nhật danh sách...
                </span>
              </div>
            `:``}
      `,o.items.innerHTML=t.length?t.map(e=>vt(e,S.activeTab)).join(``):S.worklistPhase===`loading`?`
              <div class="hoa-don-empty">
                <strong>
                  Đang tải danh sách...
                </strong>
              </div>
            `:`
              <div class="hoa-don-empty">
                <strong>
                  ${n(a)}
                </strong>
              </div>
            `,o.pager.innerHTML=r?se({pageNumber:r.pageNumber,canGoPrevious:r.canGoPrevious,hasMore:r.hasMore,loading:r.loading}):``}function ut(){let e=`HOA_DON_HOAN_DON`;return lt(S.detail).has(e)?[{key:e,label:J(e),variant:`danger`,disabled:S.busy,onClick:()=>Xt({actionKey:e,invoiceId:S.detailId,source:`detail`,detail:S.detail})}]:[]}function ft(){let t=S.evidenceViewerImages,n=t.length;n&&S.evidenceViewerIndex>=n&&(S.evidenceViewerIndex=0),Y(e,{headerMode:`title`,title:`Ảnh chứng từ`,showRightAction:!1,onBack:()=>_.back(),bottomActions:[]}),e.innerHTML=h({images:t,index:S.evidenceViewerIndex,title:`Ảnh chứng từ`}),e.querySelector(`[data-image-viewer-close]`)?.addEventListener(`click`,()=>_.back()),e.querySelector(`[data-image-viewer-prev]`)?.addEventListener(`click`,()=>{S.evidenceViewerIndex=(S.evidenceViewerIndex-1+n)%n,ft()}),e.querySelector(`[data-image-viewer-next]`)?.addEventListener(`click`,()=>{S.evidenceViewerIndex=(S.evidenceViewerIndex+1)%n,ft()})}async function yt(e){let t=Array.isArray(e?.evidence)?e.evidence:[],n=t.map(e=>e?.storage_path).filter(Boolean);if(!n.length){D(`Chưa có ảnh chứng từ.`);return}if(S.busy)return;let r=String(e?.id_request??``).trim();``+r,S.busy=!0;let i=!1;try{let e=await Pe(n);S.evidenceViewerImages=e.map((e,n)=>{let r=t.find(t=>t?.storage_path===e.storagePath),i=String(r?.loai_chung_tu??``).trim().toUpperCase();return{url:e.url,title:(i===`XAC_NHAN_CHUYEN`?`Ảnh xác nhận chuyển `:`Ảnh yêu cầu chuyển `)+(n+1)}}),S.evidenceViewerIndex=0,i=S.evidenceViewerImages.length>0}catch(e){D(e?.message||`Không tải được ảnh chứng từ.`)}finally{S.busy=!1}i&&await _.open(`evidence-photos:`+r,ft)}function bt(){let t=S.deliveryViewerImages,n=t.length;n&&S.deliveryViewerIndex>=n&&(S.deliveryViewerIndex=0),Y(e,{headerMode:`title`,title:`Ảnh giao hàng`,showRightAction:!1,onBack:()=>_.back(),bottomActions:[]}),e.innerHTML=h({images:t,index:S.deliveryViewerIndex,title:`Ảnh giao hàng`}),e.querySelector(`[data-image-viewer-close]`)?.addEventListener(`click`,()=>_.back()),e.querySelector(`[data-image-viewer-prev]`)?.addEventListener(`click`,()=>{S.deliveryViewerIndex=(S.deliveryViewerIndex-1+n)%n,bt()}),e.querySelector(`[data-image-viewer-next]`)?.addEventListener(`click`,()=>{S.deliveryViewerIndex=(S.deliveryViewerIndex+1)%n,bt()})}async function xt(){let e=(Array.isArray(S.detail?.delivery?.photos)?S.detail.delivery.photos:[]).map(e=>e?.storage_path).filter(Boolean);if(!e.length){D(`Đơn chưa có ảnh giao hàng.`);return}if(S.busy)return;`${S.detailId}`,S.busy=!0;let t=!1;try{let n=await ne(e);S.deliveryViewerImages=n.map((e,t)=>({url:e.url,title:`Ảnh giao hàng ${t+1}`})),S.deliveryViewerIndex=0,t=S.deliveryViewerImages.length>0}catch(e){D(e?.message||`Không tải được ảnh giao hàng.`)}finally{S.busy=!1}t&&await _.open(`delivery-photos:${S.detailId}`,bt)}function St(){return String(S.detail?.delivery?.id_phieu_giao_hang??S.detail?.delivery?.id??S.detail?.header?.id_phieu_giao_hang??``).trim()}function Ct(){let e=S.checkHistory??{};return(Array.isArray(e)?e:Array.isArray(e?.events)?e.events:Array.isArray(e?.history)?e.history:Array.isArray(e?.items)?e.items:[]).map(e=>({...e,time_text:e?.time_text||T(e?.created_at??e?.occurred_at??e?.event_at??e?.action_at??e?.updated_at)}))}function wt(){Y(e,{headerMode:`title`,title:`Lịch sử kiểm hàng`,onBack:()=>_.back(),rightActions:[{key:`refresh`,icon:`↻`,label:`Tải lại`,dispatchRefresh:!1,onAction:Dt}],bottomActions:[]}),e.innerHTML=`
        <section
          class="hoa-don-page hoa-don-detail-page"
        >
          ${l({events:Ct(),error:S.checkHistoryError})}
        </section>
      `}async function Tt(){let e=St();if(!e)return D(`Không xác định được phiếu giao hàng.`),``;if(S.busy)return``;let t=`hoa-don:check-history:`+e;if(!b.acquire(t))return``;S.busy=!0,S.checkHistoryError=``;try{S.checkHistory=await re(e)}catch(e){S.checkHistory=null,S.checkHistoryError=e?.message||`Không tải được lịch sử kiểm hàng.`,D(S.checkHistoryError)}finally{S.busy=!1,b.release(t)}return e}async function Et(){let e=await Tt();e&&await _.open(`invoice-check-history:${e}`,wt)}async function Dt(){await Tt()&&wt()}function Ot(){let e=S.invoiceCheckContext?.products;return Array.isArray(e)?e:[]}async function kt(){let e=St();if(!e)return D(`Không xác định được phiếu giao hàng.`),``;if(S.busy)return``;let t=`hoa-don:check-context:`+e;if(!b.acquire(t))return``;S.busy=!0,S.invoiceCheckError=``;try{S.invoiceCheckContext=await te(e)}catch(e){S.invoiceCheckContext=null,S.invoiceCheckError=e?.message||`Không tải được dữ liệu kiểm hàng.`,D(S.invoiceCheckError)}finally{S.busy=!1,b.release(t)}return e}async function At(){let e=await kt();e&&await _.open(`invoice-check:${e}`,jt)}function jt(){Y(e,{headerMode:`title`,title:`Kiểm hàng`,onBack:()=>_.back(),rightActions:[{key:`check-history`,icon:`◷`,label:`Lịch sử kiểm hàng`,dispatchRefresh:!1,onAction:()=>Et()},{key:`refresh`,icon:`↻`,label:`Tải lại`,dispatchRefresh:!1,onAction:async()=>{await kt()&&jt()}}],bottomActions:[]}),e.innerHTML=`
        <section class="hoa-don-page">
          ${x({products:Ot(),error:S.invoiceCheckError,desktopActions:[]})}
        </section>
      `}async function Mt(){if(!S.detailId||S.busy)return;let e=String(S.detail?.order?.id_don_hang??``).trim();if(!e){D(`Không xác định được ID đơn hàng.`);return}let t=`hoa-don:order-history:`+e;if(b.acquire(t)){S.busy=!0,S.orderHistory=null;try{S.orderHistory=await v(e)}catch(e){D(e?.message||`Không tải được lịch sử đơn hàng.`)}finally{S.busy=!1,b.release(t)}await _.open(`invoice-history:${e}`,Nt)}}function Nt(){let t=g(S.orderHistory??{});Y(e,{headerMode:`title`,title:`Lịch sử`,showRightAction:!1,onBack:()=>_.back(),bottomActions:[]}),e.innerHTML=`
        <section
          class="hoa-don-page hoa-don-detail-page"
        >
          ${c(t)}
        </section>
      `}async function Pt(){let e=(Array.isArray(S.detail?.settlement_rounds)?S.detail.settlement_rounds:[]).find(e=>String(e?.id_lan_doi_soat??``)===String(S.detailSettlementRoundId??``)),t=Array.isArray(e?.storage_paths)?e.storage_paths.map(e=>String(e??``).trim()).filter(Boolean):[];if(!t.length){D(`Lần tất toán chưa có ảnh chứng từ.`);return}if(S.busy)return;``+S.detailSettlementRoundId,S.busy=!0;let n=!1;try{let e=await Pe(t);S.evidenceViewerImages=e.map((e,t)=>({url:e.url,title:`Ảnh tất toán ${t+1}`})),S.evidenceViewerIndex=0,n=S.evidenceViewerImages.length>0}catch(e){D(e?.message||`Không tải được ảnh chứng từ.`)}finally{S.busy=!1}n&&await _.open(`settlement-evidence-photos:`+S.detailSettlementRoundId,ft)}function Ft(){Y(e,{headerMode:`title`,title:`Chi tiết tất toán`,showRightAction:!1,onBack:()=>_.back(),bottomActions:[]}),e.innerHTML=`
        <section
          class="hoa-don-page hoa-don-detail-page"
        >
          ${y(Ve(S.detail,S.detailSettlementRoundId))}
        </section>
      `,Lt()}async function It(e,t){switch(e){case`HOA_DON_XEM_ANH_GIAO_HANG`:await xt();break;case`HOA_DON_XEM_ANH_TAT_TOAN`:await Pt();break;case`HOA_DON_XEM_KIEM_HANG`:await At();break;case`HOA_DON_XEM_LICH_SU`:await Mt();break;case`HOA_DON_XEM_LAN_TAT_TOAN`:if(S.detailSettlementRoundId=String(t??``).trim(),!S.detailSettlementRoundId){D(`Không tìm thấy lần tất toán.`);break}await _.open(`invoice-settlement-round:`+S.detailSettlementRoundId,Ft);break;default:break}}function Lt(){e.querySelectorAll(`[data-copy-value]`).forEach(e=>{e.addEventListener(`click`,async t=>{t.preventDefault(),t.stopPropagation(),D(await p(e.dataset.copyValue)?`Đã copy`:`Không thể sao chép`)})}),e.querySelectorAll(`[data-record-detail-action]`).forEach(e=>{e.addEventListener(`click`,t=>{t.preventDefault(),t.stopPropagation();let n=String(e.getAttribute(`data-record-detail-action`)??``).trim().toUpperCase(),r=e.getAttribute(`data-record-detail-value`);n&&It(n,r)})})}function Rt(){let t=Be(S.detail);Y(e,{headerMode:`title`,title:`Chi tiết hóa đơn`,onBack:()=>_.back(),rightActions:[...(S.detail?.permission_mask?.fields??{}).history===!0?[ie(()=>It(`HOA_DON_XEM_LICH_SU`))]:[],{key:`refresh`,icon:`↻`,label:`Tải lại`,dispatchRefresh:!1,onAction:$t}],bottomActions:S.detailReadOnly?[]:ut()}),e.innerHTML=`
        <section
          class="hoa-don-page hoa-don-detail-page"
        >
          ${y(t)}
        </section>
      `,Lt()}function zt(){let t=S.collectionCard,i=ct(t);if(!t||!i){_.back();return}let a=i?.requires_amount===!1,o=a?Number(i?.amount??0):0;Y(e,{headerMode:`title`,title:i?.button_label||`Xử lý tiền`,showRightAction:!1,onBack:()=>_.back(),bottomActions:[]}),e.innerHTML=`
        <section class="hoa-don-collection-page">
          <article class="hoa-don-collection-card">
            <h2>
              ${n(t?.order_code||`Đơn hàng`)}
            </h2>

            <p>
              ${n(i?.summary_label||`Khoản tiền cần xử lý`)}
            </p>

            <strong>
              ${n(X(i?.amount))}
            </strong>
          </article>

          <div class="hoa-don-money-field">
            <span>Số tiền</span>

            <div class="hoa-don-collection-amount-row">
              <input
                type="text"
                inputmode="numeric"
                autocomplete="off"
                data-invoice-money-input
                value="${r(mt(o))}"
                ${a?`readonly`:``}
              >

              ${a?``:`
                      <label
                        class="hoa-don-collection-full-amount"
                      >
                        <input
                          type="checkbox"
                          data-invoice-collection-full-amount
                        >
                        <span>Đủ</span>
                      </label>
                    `}
            </div>

            <small>
              Không được vượt quá
              ${n(X(i?.amount))}
            </small>
          </div>

          <button
            type="button"
            class="hoa-don-collection-submit"
            data-invoice-collection-submit
          >
            ${n(i?.button_label||`Xác nhận`)}
          </button>
        </section>
      `;let s=e.querySelector(`[data-invoice-money-input]`),c=e.querySelector(`[data-invoice-collection-full-amount]`);if(s&&!a){let e=Math.max(0,Math.trunc(Number(i?.amount??0))),t=()=>{let t=Math.min(e,pt(s.value));s.value=mt(t),c&&(c.checked=e>0&&t===e)};s.addEventListener(`input`,t),c?.addEventListener(`change`,()=>{c.checked&&(s.value=mt(e),s.dispatchEvent(new Event(`input`,{bubbles:!0})),s.focus())}),t(),s.focus()}e.querySelector(`[data-invoice-collection-submit]`)?.addEventListener(`click`,()=>{Vt()})}async function Bt(e){!ct(e)?.action_key||S.busy||(S.collectionCard=e,await _.open(`collection:`+String(e?.entity_id??``),zt))}async function Vt(){let t=S.collectionCard,n=ct(t);if(!t||!n?.action_key||S.busy)return;let r=e.querySelector(`[data-invoice-money-input]`),i=n?.requires_amount===!1?Number(n?.amount??0):pt(r?.value),a=Number(n?.amount??0);if(!Number.isSafeInteger(i)||i<=0||Number.isSafeInteger(a)&&a>0&&i>a){D(`Số tiền không hợp lệ.`);return}let s=dt(n?.action_key);if(!s){D(`Nghiệp vụ thu tiền không hợp lệ.`);return}let c=`hoa-don-collection:`+String(t?.entity_id??``);if(!b.acquire(c))return;let l=!1;S.busy=!0;try{let e=await pe({requestKey:o(`hoa-don-thu-tien`),invoiceId:t.entity_id,rowVersion:t.row_version,mode:s,amount:i,cashFlowId:n?.id_dong_tien??null}),r=String(t?.entity_id??``),a=S.cards.findIndex(e=>String(e?.entity_id??``)===r),c=e?.card??e?.invoice_card??e?.data?.card??null;if(a>=0&&c&&typeof c==`object`)S.cards[a]=c;else if(a>=0){let e=S.cards[a],t=e?.money&&typeof e.money==`object`?e.money:{},r=Number(t?.collected??0),o=Number(t?.remaining??0),s=Number.isFinite(r)?Math.max(0,r):0,c=Number(t?.total??s+(Number.isFinite(o)?Math.max(0,o):i)),l=Number.isFinite(c)&&c>0?c:s+i,u=Math.min(l,s+i),d=Math.max(0,l-u);S.cards[a]={...e,state:d===0?`DA_THANH_TOAN`:`THANH_TOAN_MOT_PHAN`,row_version:Number(e?.row_version??0)+1,updated_at:new Date().toISOString(),collection_task:null,roles:{...e?.roles??{},collector_id:n?.holder_id??e?.roles?.collector_id??null,collector_name:n?.holder_name??e?.roles?.collector_name??e?.roles?.assignee_name??e?.roles?.creator_name??null},money:{...t,collected:u,remaining:d}}}S.activeTab=`dang-xu-ly`,S.collectionCard=null,S.busy=!1,await _.back(),Z(),D(`Đã cập nhật dòng tiền.`),l=!0}catch(e){D(e?.message||`Không cập nhật được dòng tiền.`)}finally{S.busy=!1,b.release(c),l&&queueMicrotask(()=>{O(t?.entity_id).then(()=>{w()&&_.currentKey()===`list`&&Z()})})}}function Ht(e){return e===`HOA_DON_CHUYEN_TIEN`||e===`HOA_DON_YEU_CAU_CHUYEN_TIEN`||e===`HOA_DON_TAT_TOAN_CONG_TY`||e===`HOA_DON_CHUYEN_QUYEN_THU`}function Ut(){return S.actionEvidenceSequence=Number(S.actionEvidenceSequence??0)+1,`invoice-evidence-${Date.now()}-`+S.actionEvidenceSequence}function Q(){S.actionEvidencePhotos.forEach(e=>{e?.previewUrl&&URL.revokeObjectURL(e.previewUrl)}),S.actionEvidencePhotos=[]}async function Wt(){Q(),S.actionEvidenceSequence=0,await _.back()}function Gt(){let t=e.querySelector(`[data-invoice-settlement-main]`);return t?{note:String(e.querySelector(`[data-invoice-action-note]`)?.value??``),labor:String(t.querySelector(`[data-invoice-settlement-labor]`)?.value??``),lines:Array.from(t.querySelectorAll(`[data-invoice-settlement-row]`)).map(e=>{let t=e.querySelector(`[data-invoice-product-quantity]`);return{id:String(t?.getAttribute(`data-invoice-product-id`)??``).trim(),quantity:String(t?.value??``),price:String(e.querySelector(`[data-invoice-product-price]`)?.value??``)}})}:null}function Kt(t){if(!t)return;let n=e.querySelector(`[data-invoice-settlement-main]`);if(!n)return;let r=e.querySelector(`[data-invoice-action-note]`);r&&(r.value=t.note??``);let i=n.querySelector(`[data-invoice-settlement-labor]`);i&&(i.value=t.labor??``,i.dispatchEvent(new Event(`input`,{bubbles:!0})));let a=new Map((Array.isArray(t.lines)?t.lines:[]).filter(e=>e?.id).map(e=>[e.id,e]));n.querySelectorAll(`[data-invoice-settlement-row]`).forEach(e=>{let t=e.querySelector(`[data-invoice-product-quantity]`),n=String(t?.getAttribute(`data-invoice-product-id`)??``).trim(),r=a.get(n);if(!r)return;t&&(t.value=r.quantity);let i=e.querySelector(`[data-invoice-product-price]`);i&&(i.value=r.price,i.dispatchEvent(new Event(`input`,{bubbles:!0})))})}function qt(e){let t=S.transferConfirmRequest?null:Gt(),n=Array.from(e??[]).filter(e=>String(e?.type??``).startsWith(`image/`));if(!n.length){D(`Vui lòng chọn tệp ảnh hợp lệ.`);return}let r=Math.max(0,5-S.actionEvidencePhotos.length),i=n.slice(0,r);S.actionEvidencePhotos=[...S.actionEvidencePhotos,...i.map(e=>({id:Ut(),file:e,name:e.name,previewUrl:URL.createObjectURL(e)}))],n.length>i.length&&D(`Chỉ được chọn tối đa 5 ảnh.`),S.transferConfirmRequest?Ge():(Yt(),Kt(t))}function Jt(e){let t=S.transferConfirmRequest?null:Gt(),n=String(e??``),r=S.actionEvidencePhotos.find(e=>e.id===n);r?.previewUrl&&URL.revokeObjectURL(r.previewUrl),S.actionEvidencePhotos=S.actionEvidencePhotos.filter(e=>e.id!==n),S.transferConfirmRequest?Ge():(Yt(),Kt(t))}function Yt({context:t=null}={}){let n=V(t)?t:null;if(n&&Ie(n),!S.actionKey||!S.actionDetail){_.back();return}Y(e,{headerMode:`title`,title:J(S.actionKey),showRightAction:!1,onBack:Wt,bottomActions:[{key:`invoice-action-submit`,label:S.actionKey===`HOA_DON_YEU_CAU_CHUYEN_TIEN`?`Xác nhận`:J(S.actionKey),variant:S.actionKey===`HOA_DON_HOAN_DON`?`danger`:`primary`,disabled:S.busy,onClick:Zt}]}),e.innerHTML=Qe({actionKey:S.actionKey,detail:{...S.actionDetail,pendingTransfer:S.transferRequests.find(e=>String(e?.id_hoa_don??``).trim()===String(S.actionDetail?.header?.id_hoa_don??S.detailId??``).trim())??null},employees:S.actionEmployees,currentEmployeeId:S.actionCurrentEmployeeId,photos:S.actionEvidencePhotos}),$e(e,S.actionKey,S.actionDetail),n&&(Kt(n.draft),e.scrollTop=Number(n.scrollTop??0));let r=e.querySelector(`[data-photo-picker-input]`);r?.addEventListener(`change`,()=>{qt(r.files),r.value=``}),e.querySelectorAll(`[data-photo-picker-remove]`).forEach(e=>{e.addEventListener(`click`,()=>{Jt(e.dataset.photoId)})}),e.querySelector(`[data-invoice-settlement-request-open]`)?.addEventListener(`click`,()=>{let e=String(S.actionDetail?.header?.id_hoa_don??S.detailId??``).trim();if(!e){D(`Không xác định được Hóa đơn.`);return}let t=_.currentContext();Fe(t,Gt()),Xt({actionKey:`HOA_DON_YEU_CAU_CHUYEN_TIEN`,invoiceId:e,source:S.actionSource??`list`,detail:S.actionDetail,authorizationSource:S.actionDetail,parentContext:t})}),e.querySelector(`[data-invoice-action-submit]`)?.addEventListener(`click`,()=>{Zt()})}async function Xt({actionKey:e,invoiceId:t,source:n=`list`,detail:r=null,authorizationSource:i=null,parentContext:a=null}={}){let o=String(e??``).trim().toUpperCase(),s=String(t??``).trim();if(!(!o||!s||S.busy)){``+o+s,S.busy=!0;try{let e=r??await fe(s);if(!lt(i??e).has(o))throw Error(`Thao tác không còn khả dụng. Hãy tải lại Hóa đơn.`);let t=[],c=``;if(Ht(o)){let e=await Se(s);t=Array.isArray(e?.employees)?e.employees:[],c=String(e?.current_employee_id??``).trim()}let l=H({actionKey:o,detail:e,employees:t,currentEmployeeId:c,source:n,parentContext:a});S.busy=!1,await _.open(`invoice-action:`+o+`:`+s,Yt,l)}catch(e){D(e?.message||`Không mở được thao tác Hóa đơn.`)}finally{S.busy=!1}}}async function Zt(){if(S.busy||!S.actionKey||!S.actionDetail)return;if(S.actionKey===`HOA_DON_TAT_TOAN_CONG_TY`){let t=e.querySelector(`[data-invoice-settlement-main]`),n=Number(t?.getAttribute(`data-invoice-settlement-available`)??0),r=Array.from(e.querySelectorAll(`[data-invoice-settlement-row]`)).reduce((e,t)=>e+Number(String(t.querySelector(`[data-invoice-product-quantity]`)?.value??`0`).replace(/\D+/g,``))*Number(String(t.querySelector(`[data-invoice-product-price]`)?.value??`0`).replace(/\D+/g,``)),0);if(Number.isFinite(n)&&r>n){D(`Tạm tính vượt số dư đang giữ `+new Intl.NumberFormat(`vi-VN`).format(r-n)+` đ.`);return}}let t;try{t=et(e,S.actionKey)}catch(e){D(e?.message||`Dữ liệu thao tác không hợp lệ.`);return}let n=S.actionDetail?.header??{},r=String(n?.id_hoa_don??S.detailId??``).trim(),i=Number(n?.row_version);if(!r||!Number.isSafeInteger(i)||i<1){D(`Phiên bản Hóa đơn không hợp lệ. Hãy tải lại.`);return}if((S.actionKey===`HOA_DON_CHUYEN_TIEN`||S.actionKey===`HOA_DON_CHUYEN_QUYEN_THU`)&&!t.receiverId){D(`Hãy chọn nhân viên nhận.`);return}if(S.actionKey===`HOA_DON_YEU_CAU_CHUYEN_TIEN`&&!t.receiverId){D(`Hãy chọn người đang giữ tiền.`);return}if(S.actionKey===`HOA_DON_CHUYEN_TIEN`){let e=Number(S.actionDetail?.actor_balance?.available??0);if(!Number.isSafeInteger(t.amount)||t.amount<=0||Number.isFinite(e)&&e>0&&t.amount>e){D(`Số tiền chuyển không hợp lệ.`);return}}if(S.actionKey===`HOA_DON_YEU_CAU_CHUYEN_TIEN`){let e=S.actionEmployees.find(e=>String(e?.id_nhan_vien??``).trim()===t.receiverId),n=Number(e?.so_du_kha_dung??0);if(!Number.isSafeInteger(n)||n<=0||!Number.isSafeInteger(t.amount)||t.amount<=0||t.amount>n){D(`Số tiền yêu cầu vượt quá số dư người đang giữ.`);return}}if(S.actionKey===`HOA_DON_TAT_TOAN_CONG_TY`&&!t.lines.length){D(`Hãy nhập số lượng sản phẩm cần tất toán.`);return}if(S.actionKey===`HOA_DON_HOAN_DON`){if(!t.reason){D(`Hãy nhập lý do hoàn đơn.`);return}if(!t.lines.length){D(`Hãy nhập số lượng sản phẩm cần hoàn.`);return}}let a=S.actionKey,s=S.actionSource,c=a===`HOA_DON_CHUYEN_TIEN`||a===`HOA_DON_YEU_CAU_CHUYEN_TIEN`||a===`HOA_DON_CHUYEN_QUYEN_THU`,l=`hoa-don-action-submit:`+a+`:`+r;if(b.acquire(l)){S.busy=!0;try{switch(a){case`HOA_DON_CHUYEN_TIEN`:await Ce({requestKey:o(`hoa-don-chuyen-tien`),invoiceId:r,rowVersion:i,receiverId:t.receiverId,amount:t.amount});break;case`HOA_DON_YEU_CAU_CHUYEN_TIEN`:await we({requestKey:o(`hoa-don-yeu-cau-chuyen-tien`),invoiceId:r,rowVersion:i,holderId:t.receiverId,amount:t.amount,note:t.note});break;case`HOA_DON_CHUYEN_QUYEN_THU`:await Te({requestKey:o(`hoa-don-chuyen-quyen-thu`),invoiceId:r,rowVersion:i,receiverId:t.receiverId});break;case`HOA_DON_TAT_TOAN_CONG_TY`:{let e=[];try{e=await Ne({invoiceId:r,stage:`tat-toan-cong-ty`,files:S.actionEvidencePhotos.map(e=>e.file)}),await Ee({requestKey:o(`hoa-don-tat-toan-cong-ty`),invoiceId:r,rowVersion:i,laborAmount:t.laborAmount,lines:t.lines,note:t.note,storagePaths:e})}catch(t){throw e.length&&await Me(e).catch(()=>{}),t}break}case`HOA_DON_HOAN_DON`:await De({requestKey:o(`hoa-don-hoan-don`),invoiceId:r,rowVersion:i,reason:t.reason,lines:t.lines});break;default:throw Error(`Nghiệp vụ Hóa đơn chưa được hỗ trợ.`)}c&&(S.transferRequests=[],S.transferRequestsLoaded=!1,S.transferError=``),Q(),S.actionEvidenceSequence=0,S.actionKey=``,S.actionDetail=null,S.actionEmployees=[],S.actionCurrentEmployeeId=``,S.busy=!1,c&&await G(),await O(r),c?await _.reset(`list`,Z):(await _.back(),s===`detail`&&await $t()),D(`Đã `+J(a).toLowerCase()+`.`)}catch(e){D(e?.message||`Không thực hiện được thao tác Hóa đơn.`)}finally{S.busy=!1,b.release(l)}}}async function $(e={}){if(!w())return;let t=e?.silent===!0,n=e?.force===!0||t;String(e?.reason??`initial`);let r=e?.pageAction===`next`||e?.pageAction===`previous`?e.pageAction:``;if(e?.allowWhileBusy!==!0&&(t&&S.worklistBusy||!t&&S.busy&&!S.worklistBusy))return;let i=++S.worklistRequestId,o=S.activeTab;C.setTab(o),C.setSearch(S.search);let s=C.snapshot();if(o===`thong-ke`){S.worklistBusy=!1,S.worklistPhase=`ready`,S.cards=[],S.error=``;let e=_.currentKey();e===null?await _.reset(`list`,Z):e===`list`&&Z(),t||a?.markReady?.({state:`ready`,tabKey:o,itemCount:0,transferCount:S.pendingTransferCount});return}S.worklistBusy=!0,S.error=``,S.cards=s?.loaded===!0&&Array.isArray(s?.items)?s.items:[],S.error=s?.error||``,S.worklistPhase=s?.loaded===!0?n?`refreshing`:`ready`:`loading`;let c=_.currentKey();c===null?await _.reset(`list`,Z):c===`list`&&Z();let l=!0;try{let e=r===`next`?await C.next():r===`previous`?C.previous():n?await C.refresh():await C.load();if(l=e?.stale!==!0,!l||i!==S.worklistRequestId||o!==S.activeTab||!w())return;S.pendingTransferCount=Math.max(0,Number(e?.meta?.pendingTransferCount??S.pendingTransferCount)||0),S.cards=Array.isArray(e?.items)?e.items:[],S.error=e?.error||``,S.worklistPhase=S.error?`error`:`ready`;let s=_.currentKey();s===null?await _.reset(`list`,Z):s===`list`&&Z(),t||a?.markReady?.({state:`ready`,tabKey:o,itemCount:S.cards.length,transferCount:S.pendingTransferCount,pageNumber:e?.pageNumber??1,hasMore:e?.hasMore===!0})}catch(e){if(i!==S.worklistRequestId||o!==S.activeTab||!w())return;let n=e?.message||`Không tải được danh sách Hóa đơn.`,r=S.cards.length>0;S.error=n,S.worklistPhase=r?`ready`:`error`;let s=_.currentKey();s===null?await _.reset(`list`,Z):s===`list`&&Z(),(t||r)&&D(n),t||a?.markReady?.({state:`error`,tabKey:o,itemCount:S.cards.length,transferCount:S.pendingTransferCount,message:S.error})}finally{l&&i===S.worklistRequestId&&(S.worklistBusy=!1)}}async function Qt(e,{readOnly:t=!1}={}){let n=String(e??``).trim();if(!(!n||S.busy)){S.detailReadOnly=t===!0,S.busy=!0,S.error=``;try{S.detailId=n,S.detail=await fe(n),S.busy=!1,await _.open(`detail:${n}`,Rt)}catch(e){S.error=e?.message||`Không tải được chi tiết Hóa đơn.`,Z()}finally{S.busy=!1}}}async function $t(){if(!(!S.detailId||S.busy)){S.busy=!0;try{S.detail=await fe(S.detailId),S.busy=!1,Rt()}catch(e){D(e?.message||`Không cập nhật được chi tiết Hóa đơn.`)}finally{S.busy=!1}}}$()}};export{yt as default};