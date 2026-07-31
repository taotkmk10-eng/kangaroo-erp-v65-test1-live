import{n as e}from"./interactionGuard-BvHEISwp.js";import{a as t,i as n,n as r,o as i,r as a,t as o}from"./searchRuntime-CHhHjD_4.js";import{B as s,E as c,F as l,H as u,I as d,L as f,M as p,N as m,P as h,R as g,T as _,U as v,V as y,j as b,k as x,l as S,n as C,o as w,r as ee,t as T,u as te,z as ne}from"./deliveryCheckSummary-B56Yby1m.js";import{n as E,r as D,t as re}from"./actionLock-BTZKYVnA.js";import{t as O}from"./toast-DvZC7wAk.js";function ie(e){let t=Number(e);return Number.isSafeInteger(t)&&t>0?t:1}function k(e,t){let n=String(e??``).trim();return/^data-[a-z0-9-]+$/.test(n)?n:t}function ae({pageNumber:e=1,canGoPrevious:n=!1,hasMore:r=!1,loading:i=!1,previousAttribute:a=`data-cursor-page-previous`,nextAttribute:o=`data-cursor-page-next`,previousLabel:s=`Trang trước`,nextLabel:c=`Trang sau`}={}){let l=ie(e),u=k(a,`data-cursor-page-previous`),d=k(o,`data-cursor-page-next`);if(!(l>1||n===!0||r===!0))return``;let f=n!==!0||i===!0,p=r!==!0||i===!0;return`
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
        ${t(s)}
      </button>

      <span
        class="cursor-pager__status"
        aria-live="polite"
      >
        Trang ${t(l)}
      </span>

      <button
        type="button"
        class="cursor-pager__button"
        ${d}
        ${p?`disabled`:``}
      >
        ${t(c)}
      </button>
    </nav>
  `}function A(e){return String(e??``).trim()}function oe(e){let t=Number(e);return!Number.isSafeInteger(t)||t<=0?10:Math.min(t,100)}function j(e){return!e||typeof e!=`object`||Array.isArray(e)?null:{...e}}function M(e=null){return{cursor:j(e),nextCursor:null,items:[],hasMore:!1,loaded:!1,loading:!1,error:``,meta:null}}function se(e){return{items:Array.isArray(e?.items)?e.items:[],cursor:j(e?.cursor),hasMore:e?.hasMore===!0,meta:e?.meta??null}}function ce({fetchPage:e,initialTabKey:t=`default`,pageSize:n=10}={}){if(typeof e!=`function`)throw TypeError(`createCursorListRuntime cần fetchPage.`);let r=oe(n),i=new Map,a=A(t)||`default`,o=``,s=0,c=!1;function l(e=a,t=o){return JSON.stringify([A(e)||`default`,A(t)])}function u(){let e=l();return i.has(e)||i.set(e,{key:e,tabKey:a,search:o,pageIndex:0,pages:[M()]}),i.get(e)}function d(){let e=u();return e.pages[e.pageIndex]??e.pages[0]}function f({stale:e=!1}={}){let t=u(),n=d();return Object.freeze({tabKey:t.tabKey,search:t.search,pageSize:r,pageNumber:t.pageIndex+1,items:[...n.items],cursor:j(n.cursor),nextCursor:j(n.nextCursor),hasMore:n.hasMore,canGoPrevious:t.pageIndex>0,loading:n.loading,loaded:n.loaded,error:n.error,meta:n.meta,stale:e})}function p(e,t,n){return!c&&e===s&&t.key===l()&&t.pageIndex===n}async function m({force:t=!1}={}){if(c)throw Error(`Cursor list runtime đã đóng.`);let n=u(),i=n.pageIndex,a=d();if(a.loaded&&!t)return f();let o=s+1;s=o,a.loading=!0,a.error=``;let l;try{l=await e({tabKey:n.tabKey,search:n.search,cursor:j(a.cursor),limit:r})}catch(e){if(a.loading=!1,!p(o,n,i))return f({stale:!0});throw a.error=e?.message||`Không tải được danh sách.`,e}if(a.loading=!1,!p(o,n,i))return f({stale:!0});let m=se(l);return a.items=m.items,a.nextCursor=m.cursor,a.hasMore=m.hasMore,a.meta=m.meta,a.loaded=!0,a.error=``,f()}function h(e){let t=A(e);if(!t)throw TypeError(`Thiếu tabKey.`);return t===a?f():(s+=1,a=t,f())}function g(e){let t=A(e);return t===o?f():(s+=1,o=t,f())}async function _(){let e=u(),t=d();if(t.loaded||await m(),!t.hasMore||!t.nextCursor)return f();let n=e.pageIndex+1;return e.pages[n]||e.pages.push(M(t.nextCursor)),s+=1,e.pageIndex=n,m()}function v(){let e=u();return e.pageIndex<=0?f():(s+=1,--e.pageIndex,f())}async function y(){let e=d();return e.loaded=!1,m({force:!0})}function b({tabKey:e,search:t,all:n=!1}={}){if(s+=1,n)return i.clear(),f();let r=l(e??a,t??o);return i.delete(r),f()}function x(e,{all:t=!1}={}){if(c)throw Error(`Cursor list runtime đã đóng.`);if(typeof e!=`function`)throw TypeError(`reconcileItems cần callback.`);return s+=1,(t?[...i.values()]:[u()]).forEach(t=>{t.pages.forEach((n,r)=>{if(!n.loaded)return;let i=e([...n.items],Object.freeze({tabKey:t.tabKey,search:t.search,pageNumber:r+1,isActive:t.key===l()&&t.pageIndex===r}));if(!Array.isArray(i))throw TypeError(`reconcileItems phải trả về mảng.`);n.items=[...i],n.loading=!1,n.error=``})}),f()}function S(){c=!0,s+=1,i.clear()}return Object.freeze({load:m,next:_,previous:v,refresh:y,reconcileItems:x,invalidate:b,setTab:h,setSearch:g,snapshot:f,dispose:S,get pageSize(){return r}})}async function le({search:e=null,statuses:t=null,tabKey:n=null,cursor:r=null,limit:a=10,currentEmployeeId:o=``}={}){let s=r&&typeof r==`object`&&!Array.isArray(r)?{updated_at:String(r.updated_at??``).trim()||null,id:String(r.id??``).trim()||null}:null,c=Number.isSafeInteger(Number(a))?Math.min(100,Math.max(1,Number(a))):10,l=await i(`rpc_get_hoa_don_worklist`,{p_search:e||null,p_status:Array.isArray(t)&&t.length?t:null,p_tab_key:String(n??``).trim()||null,p_cursor_updated_at:s?.updated_at??null,p_cursor_id:s?.id??null,p_limit:c},`Không tải được danh sách Hóa đơn`),u=String(l?.current_employee_id??o??``).trim(),d=Array.isArray(l?.cards)?l.cards:[];return{...l,current_employee_id:u,cards:d.map(e=>({...e,current_employee_id:String(e?.current_employee_id??u??``).trim()}))}}async function ue(e){let t=[...new Set((Array.isArray(e)?e:[e]).map(e=>String(e??``).trim()).filter(Boolean))];if(!t.length)return[];if(t.length>20)throw RangeError(`Chỉ được đọc tối đa 20 hóa đơn mỗi lần.`);let n=await i(`rpc_get_hoa_don_cards_by_ids`,{p_ids:t},`Không tải được card Hóa đơn`);return Array.isArray(n?.cards)?n.cards:[]}async function de(e){let t=String(e??``).trim();if(!t)throw TypeError(`Thiếu ID hóa đơn.`);let n=await i(`rpc_get_hoa_don_detail`,{p_id_hoa_don:t},`Không tải được chi tiết Hóa đơn`);try{let e=await i(`rpc_get_hoa_don_settlement_context`,{p_id_hoa_don:t},`Không tải được dữ liệu tất toán`);return{...n,settlement_context:e,settlement_products:Array.isArray(e?.products)?e.products:[]}}catch{return n}}function fe({requestKey:e,invoiceId:t,rowVersion:n,mode:r,amount:a=null,cashFlowId:o=null}={}){let s=String(e??``).trim(),c=String(t??``).trim(),l=String(r??``).trim().toUpperCase(),u=Number(n);if(!s||!c||!l||!Number.isSafeInteger(u)||u<1)throw TypeError(`Dữ liệu xác nhận dòng tiền không hợp lệ.`);let d={id_hoa_don:c,expected_row_version:u,mode:l};if(o&&(d.id_dong_tien=String(o).trim()),a!=null){let e=Number(a);if(!Number.isSafeInteger(e)||e<=0)throw TypeError(`Số tiền xác nhận không hợp lệ.`);d.so_tien=e}return i(`rpc_thu_tien_hoa_don`,{p_request_key:s,p_payload:d},`Không cập nhật được dòng tiền Hóa đơn`)}function N({requestKey:e,invoiceId:t,rowVersion:n}={}){let r=String(e??``).trim(),i=String(t??``).trim(),a=Number(n);if(!r||!i||!Number.isSafeInteger(a)||a<1)throw TypeError(`Dữ liệu thao tác Hóa đơn không hợp lệ.`);return{requestKey:r,invoiceId:i,rowVersion:a}}function P(e){let t=String(e??``).trim();if(!t)throw TypeError(`Thiếu nhân viên nhận.`);return t}function pe(e){let t=Number(e);if(!Number.isSafeInteger(t)||t<=0)throw TypeError(`Số tiền không hợp lệ.`);return t}function me(e){let t=(Array.isArray(e)?e:[]).map(e=>{let t={id_san_pham:String(e?.id_san_pham??``).trim(),so_luong:Number(e?.so_luong??0)};return e?.don_gia_tat_toan!==void 0&&e?.don_gia_tat_toan!==null&&(t.don_gia_tat_toan=Number(e.don_gia_tat_toan)),t}).filter(e=>e.id_san_pham&&Number.isSafeInteger(e.so_luong)&&e.so_luong>0&&(e.don_gia_tat_toan===void 0||Number.isSafeInteger(e.don_gia_tat_toan)&&e.don_gia_tat_toan>=0));if(!t.length)throw TypeError(`Thiếu sản phẩm cần xử lý.`);return t}function he(){return i(`rpc_get_hoa_don_transfer_requests`,{},`Không tải được yêu cầu chuyển Hóa đơn`)}function ge({transferId:e,accept:t,requestKey:n,storagePaths:r=[]}={}){let a=String(e??``).trim(),o=String(n??``).trim(),s=t===!0,c=Array.isArray(r)?r.map(e=>String(e??``).trim()).filter(Boolean):[];if(!a||!o)throw TypeError(`Dữ liệu xác nhận chuyển tiền không hợp lệ.`);if(c.length>5)throw TypeError(`Chỉ được chọn tối đa 5 ảnh chứng từ.`);if(!s&&c.length)throw TypeError(`Không được đính kèm ảnh xác nhận khi từ chối chuyển tiền.`);return i(`rpc_xac_nhan_chuyen_tien_noi_bo`,{p_request_key:o,p_payload:{id_chuyen_tien_noi_bo:a,accept:s,storage_paths:c}},s?`Không xác nhận được chuyển tiền`:`Không từ chối được chuyển tiền`)}function _e({handoverId:e,rowVersion:t,accept:n,requestKey:r,handoverType:a=`THU_TIEN`}={}){let o=String(e??``).trim(),s=String(r??``).trim(),c=Number(t),l=String(a??``).trim().toUpperCase();if(!o||!s||!Number.isSafeInteger(c)||c<1||![`THU_TIEN`,`XU_LY_TAT_TOAN`].includes(l))throw TypeError(`Dữ liệu xác nhận bàn giao không hợp lệ.`);return i(`rpc_xac_nhan_ban_giao_hoa_don`,{p_request_key:s,p_payload:{id_ban_giao:o,expected_row_version:c,loai_ban_giao:l,accept:n===!0}},n===!0?`Không xác nhận được bàn giao`:`Không từ chối được bàn giao`)}function ve({transferId:e,requestKey:t}={}){let n=String(e??``).trim(),r=String(t??``).trim();if(!n||!r)throw TypeError(`Dữ liệu hủy chuyển tiền không hợp lệ.`);return i(`rpc_huy_chuyen_tien_noi_bo`,{p_request_key:r,p_payload:{id_chuyen_tien_noi_bo:n}},`Không hủy được chuyển tiền`)}function ye({handoverId:e,rowVersion:t,requestKey:n,handoverType:r=`THU_TIEN`}={}){let a=String(e??``).trim(),o=String(n??``).trim(),s=Number(t),c=String(r??``).trim().toUpperCase();if(!a||!o||!Number.isSafeInteger(s)||s<1||![`THU_TIEN`,`XU_LY_TAT_TOAN`].includes(c))throw TypeError(`Dữ liệu hủy bàn giao không hợp lệ.`);return i(`rpc_huy_ban_giao_hoa_don`,{p_request_key:o,p_payload:{id_ban_giao:a,expected_row_version:s,loai_ban_giao:c}},`Không hủy được bàn giao`)}function be(e){let t=String(e??``).trim();if(!t)throw TypeError(`Thiếu Hóa đơn cần lấy danh sách nhân viên.`);return i(`rpc_get_hoa_don_transfer_candidates`,{p_id_hoa_don:t},`Không tải được danh sách nhân viên nhận chuyển`)}function xe({requestKey:e,invoiceId:t,rowVersion:n,receiverId:r,amount:a}={}){let o=N({requestKey:e,invoiceId:t,rowVersion:n});return i(`rpc_tao_chuyen_tien_noi_bo`,{p_request_key:o.requestKey,p_payload:{id_hoa_don:o.invoiceId,expected_row_version:o.rowVersion,id_nguoi_nhan:P(r),so_tien:pe(a)}},`Không tạo được chuyển tiền nội bộ`)}function Se({requestKey:e,invoiceId:t,rowVersion:n,holderId:r,amount:a,note:o=``}={}){let s=N({requestKey:e,invoiceId:t,rowVersion:n});return i(`rpc_yeu_cau_chuyen_tien_noi_bo`,{p_request_key:s.requestKey,p_payload:{id_hoa_don:s.invoiceId,expected_row_version:s.rowVersion,id_nguoi_chuyen:P(r),so_tien:pe(a),ghi_chu:String(o??``).trim()||null}},`Không tạo được yêu cầu chuyển tiền nội bộ`)}function Ce({requestKey:e,invoiceId:t,rowVersion:n,receiverId:r}={}){let a=N({requestKey:e,invoiceId:t,rowVersion:n});return i(`rpc_tao_ban_giao_hoa_don`,{p_request_key:a.requestKey,p_payload:{id_hoa_don:a.invoiceId,expected_row_version:a.rowVersion,id_nguoi_nhan:P(r),loai_ban_giao:`THU_TIEN`}},`Không chuyển được quyền thu tiền`)}function we({requestKey:e,invoiceId:t,rowVersion:n,laborAmount:r=0,lines:a,note:o=``,storagePaths:s=[]}={}){let c=N({requestKey:e,invoiceId:t,rowVersion:n}),l=Number(r??0),u=Array.isArray(s)?s.map(e=>String(e??``).trim()).filter(Boolean):[];if(!Number.isSafeInteger(l)||l<0)throw TypeError(`Tiền công thực tế không hợp lệ.`);if(u.length>5)throw TypeError(`Chỉ được chọn tối đa 5 ảnh xác nhận.`);return i(`rpc_tat_toan_cong_ty`,{p_request_key:c.requestKey,p_payload:{id_hoa_don:c.invoiceId,expected_row_version:c.rowVersion,tien_cong_thuc_te:l,lines:me(a),ghi_chu:String(o??``).trim()||null,storage_paths:u}},`Không tất toán được Hóa đơn`)}function Te({requestKey:e,invoiceId:t,rowVersion:n,reason:r,lines:a}={}){let o=N({requestKey:e,invoiceId:t,rowVersion:n}),s=String(r??``).trim();if(!s)throw TypeError(`Thiếu lý do hoàn đơn.`);let c=me(a);return i(`rpc_tao_phieu_hoan_don`,{p_request_key:o.requestKey,p_payload:{id_hoa_don:o.invoiceId,expected_row_version:o.rowVersion,ly_do:s,lines:c}},`Không tạo được phiếu hoàn đơn`)}var F=`kangaroo-evidence`,I=5,Ee=new Set([`yeu-cau-chuyen`,`xac-nhan-chuyen`,`tat-toan-cong-ty`]);function De(e){let t=String(e??``).trim();if(!t)throw TypeError(`Thiếu id Hóa đơn.`);return t}function Oe(e){let t=String(e??``).trim();if(!Ee.has(t))throw TypeError(`Loại ảnh chứng từ không hợp lệ.`);return t}function ke(){return globalThis.crypto?.randomUUID?globalThis.crypto.randomUUID():`${Date.now()}-`+Math.random().toString(16).slice(2)}async function Ae(){let{data:t,error:n}=await e.auth.getUser();if(n)throw n;let r=String(t?.user?.id??``);if(!r)throw Error(`Phiên đăng nhập không hợp lệ.`);return r}async function je(t){let n=Array.isArray(t)?t.filter(Boolean):[];if(!n.length)return;let{error:r}=await e.storage.from(F).remove(n);if(r)throw r}async function Me({invoiceId:t,stage:n,files:r}){let i=De(t),a=Oe(n),o=Array.isArray(r)?r:[];if(!o.length)return[];if(o.length>I)throw TypeError(`Chỉ được chọn tối đa ${I} ảnh.`);let s=await Ae(),c=[];try{for(let t of o){let n=await w(t),r=[s,i,a,`${ke()}.webp`].join(`/`),{error:o}=await e.storage.from(F).upload(r,n,{contentType:n.type,cacheControl:`3600`,upsert:!1});if(o)throw o;c.push(r)}return c}catch(e){throw c.length&&await je(c).catch(()=>{}),e}}async function Ne(t){let n=[...new Set((Array.isArray(t)?t:[]).map(e=>String(e??``).trim()).filter(Boolean))],r=[];for(let t of n){let{data:n,error:i}=await e.storage.from(F).createSignedUrl(t,600);if(i)throw i;n?.signedUrl&&r.push({storagePath:t,url:n.signedUrl})}return r}var Pe=Object.freeze({CHUA_THANH_TOAN:`Chưa thanh toán`,THANH_TOAN_MOT_PHAN:`Thanh toán một phần`,DA_THANH_TOAN:`Đã thanh toán`,CHO_THU_HO:`Chờ thu hộ`,CHUA_TAT_TOAN:`Chưa tất toán`,DANG_TAT_TOAN:`Đang tất toán`,TAT_TOAN_MOT_PHAN:`Tất toán một phần`,DA_TAT_TOAN:`Đã tất toán`,CHO_XAC_NHAN:`Chờ xác nhận`,DA_XAC_NHAN:`Đã xác nhận`,TU_CHOI:`Đã từ chối`,DA_TU_CHOI:`Đã từ chối`,DA_HUY:`Đã hủy`,ACTIVE:`Đang hiệu lực`,VOIDED:`Đã vô hiệu`,DANG_XU_LY:`Đang xử lý`,HOAN_TAT:`Hoàn tất`,NGUOI_TAO_DA_THU:`Người bán đã thu`,GIAO_XONG_THU_LUON:`Giao xong thu luôn`,THU_HO_COD:`Thu hộ COD`,NGUOI_BAN_TU_THU:`Người bán tự thu`,NGUYEN_VEN:`Nguyên vẹn`,DA_MO_HOP:`Đã mở hộp`,CAN_XLH:`Cần xử lý hàng`,HANG_LOI:`Hàng lỗi`,KHONG_NHAP_LAI:`Không nhập lại`});function L(e,t=``){let n=String(e??``).trim().toUpperCase();return n?(Pe[n]??t)||n.toLowerCase().split(`_`).filter(Boolean).map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(` `):t}Object.freeze({CHUA_THANH_TOAN:`Chưa thanh toán`,THANH_TOAN_MOT_PHAN:`Thanh toán một phần`,DA_THANH_TOAN:`Đã thanh toán`}),Object.freeze({CHUA_TAT_TOAN:`Chưa tất toán`,DANG_TAT_TOAN:`Đang tất toán`,DA_TAT_TOAN:`Đã tất toán`,DA_HUY:`Đã hủy tất toán`}),Object.freeze({NGUOI_TAO_DA_THU:`Người bán đã thu`,GIAO_XONG_THU_LUON:`Giao xong thu luôn`,THU_HO_COD:`Thu hộ COD`,NGUOI_BAN_TU_THU:`Người bán tự thu`}),Object.freeze({THU_KHACH:`Thu tiền khách`,THU_NO:`Thu nợ`,XAC_NHAN_COD:`Xác nhận COD`,CHUYEN_NOI_BO:`Chuyển tiền nội bộ`,TAT_TOAN:`Tất toán`,HOAN_TIEN:`Hoàn tiền`}),Object.freeze({HOA_DON_THU_TIEN:`đã thu tiền khách`,HOA_DON_CHUYEN_QUYEN_THU:`đã chuyển quyền thu tiền`,HOA_DON_CHUYEN_TIEN:`đã tạo chuyển tiền nội bộ`,HOA_DON_YEU_CAU_CHUYEN_TIEN:`đã yêu cầu chuyển tiền để tất toán`,HOA_DON_BAN_GIAO_XU_LY:`đã bàn giao xử lý tất toán`,HOA_DON_TAT_TOAN_CONG_TY:`đã tất toán công ty`,HOA_DON_HOAN_DON:`đã hoàn đơn`,HOA_DON_TAO_HOAN_DON:`đã tạo yêu cầu hoàn đơn`,HOA_DON_VOID_TAT_TOAN:`đã đảo tất toán`,HOA_DON_DAO_CHUYEN_TIEN:`đã đảo chuyển tiền nội bộ`});function R(e){return e!=null&&String(e).trim()!==``}function z(e,t=``){return R(e)?String(e).trim():t}function B(e){if(!R(e))return``;let t=Number(e);return Number.isFinite(t)?D(t):String(e)}function V(e){return R(e)?E(e,``):``}function Fe(e){return L(e,z(e))}function Ie(e){return L(e,z(e))}function Le(e){return L(e,z(e))}function Re(e,t){return(Array.isArray(e?.products)?e.products:[]).map(e=>{let n=Number(e?.so_luong??e?.quantity??0),r=Number.isFinite(n)?n:0,i=e?.don_gia_ap_dung??e?.don_gia??e?.unit_price,a=e?.thanh_tien??e?.amount,o=`${r} sản phẩm`;return t&&R(i)&&(o=`${r} x `+B(i),R(a)&&(o+=` = ${B(a)}`)),{title:z(e?.ten_san_pham_snapshot)||z(e?.name)||z(e?.ma_san_pham_snapshot)||z(e?.model)||`Sản phẩm`,subtitle:o,variant:`product`,stacked:!0}})}function ze(e){let t=Array.isArray(e?.money_events)?e.money_events:[],n=[...Array.isArray(e?.cash_flows)?e.cash_flows.filter(e=>e?.trang_thai_dong_tien===`DA_XAC_NHAN`&&!!e?.confirmed_at).map(e=>({id:e?.id_dong_tien,label:z(e?.ten_nguoi_giu_tien,`Nhân viên`)+` thu`,amount:e?.so_tien,occurred_at:e?.confirmed_at})):[],...Array.isArray(e?.transfers)?e.transfers.filter(e=>e?.trang_thai_chuyen===`DA_XAC_NHAN`&&!!e?.confirmed_at).map(e=>({id:e?.id_chuyen_tien_noi_bo,label:z(e?.ten_nguoi_chuyen,`Nhân viên`)+` chuyển `+z(e?.ten_nguoi_nhan,`nhân viên`),amount:e?.so_tien,occurred_at:e?.confirmed_at})):[],...Array.isArray(e?.settlement_rounds)?e.settlement_rounds.filter(e=>e?.trang_thai_lan===`ACTIVE`&&!e?.voided_at&&Number(e?.tong_so_tien??0)>0).map(e=>({id:e?.id_lan_doi_soat,label:z(e?.ten_nguoi_tat_toan,`Nhân viên`)+` tất toán`,amount:e?.tong_so_tien,occurred_at:e?.created_at})):[]],r=t.length?t:n,i=new Set;return r.map(e=>({id:z(e?.id_event??e?.id),label:z(e?.label,`Dòng tiền`),amount:e?.amount??e?.so_tien,occurredAt:e?.occurred_at??e?.confirmed_at})).sort((e,t)=>(Date.parse(e?.occurredAt??``)||0)-(Date.parse(t?.occurredAt??``)||0)).filter(e=>{let t=[e.id,e.label,String(e.amount??``),String(e.occurredAt??``)].join(`|`);return i.has(t)?!1:(i.add(t),!0)}).map(e=>({title:[e.label,R(e.amount)?B(e.amount).replace(/\s+(đ|₫)$/u,`$1`):``].filter(Boolean).join(` `),value:V(e.occurredAt)}))}function Be(e){let t=e?.header??{},n=e?.order??{},r=e?.customer??{},i=e?.roles??{},a=e?.internal_reconciliation??null;a?.root,a?.labor,a?.profit;let o=e?.transfer_summary??null,s=e?.company_settlement??null,c=Array.isArray(e?.settlement_rounds)?e.settlement_rounds:[],l=e?.delivery??null,u=Array.isArray(l?.photos)?l.photos:[],d=l?.check??null,f=e?.permission_mask?.fields??{},p=Object.prototype.hasOwnProperty.call(f,`payment_summary`),m=f.HOA_DON_VIEW_MONEY===!0,h=z(e?.permission_mask?.profile).toUpperCase()===`TRANSFER_RECEIVER_PENDING`,g=!p||f.customer===!0,_=p?f.product_price===!0:m,v=p?f.payment_summary===!0:m,y=p?f.settlement_summary===!0:m,b=p?f.money_flows===!0:m,x=!p||f.delivery_check===!0,S=!p||f.completion===!0,w={title:`Thông tin đơn`,rows:[{label:`Mã đơn hàng`,value:z(n?.ma_don_hang),copyValue:n?.ma_don_hang},{label:`Người bán`,value:z(i?.creator_name)},h?{label:`Người giao`,value:z(i?.assignee_name)}:null,h?{label:`Ngày giao`,value:V(l?.completed_at??n?.completed_at)}:null,h?null:{label:`Hình thức thu tiền`,value:Le(n?.kieu_thu_tien)}].filter(e=>e&&R(e.value))},ee={title:`Sản phẩm`,items:Re(e,_)},te=h?{title:`Thanh toán`,rows:[{label:`Trạng thái`,value:L(o?.status,z(o?.status))},{label:`Số tiền chuyển`,value:B(o?.amount),emphasis:!0},{label:`Thời gian`,value:V(o?.confirmed_at??o?.created_at)}].filter(e=>R(e.value))}:v?{title:`Thanh toán`,rows:[{label:`Trạng thái`,value:Fe(t?.state)},{label:`Tổng phải thu`,value:B(t?.total)},{label:`Đã thu khách`,value:B(t?.collected)},{label:`Đã hoàn khách`,value:B(t?.refunded)},{label:`Còn phải thu`,value:B(t?.remaining),emphasis:!0}].filter(e=>R(e.value))}:null,ne=h?{title:`Tất toán công ty`,rows:[{label:`Trạng thái`,value:Ie(s?.trang_thai_tat_toan)||`Chưa tất toán`}]}:y&&(s||c.length)?{title:`Tất toán công ty`,rows:[{label:`Trạng thái`,value:Ie(s?.trang_thai_tat_toan)}].filter(e=>R(e.value)),items:c.map(e=>({title:z(e?.ma_lan_tat_toan??e?.display_code,`Lần tất toán`),subtitle:[B(e?.tong_so_tien),V(e?.created_at)].filter(Boolean).join(` · `),trailing:`›`,actionKey:`HOA_DON_XEM_LAN_TAT_TOAN`,actionValue:e?.id_lan_doi_soat}))}:null,E=x?T({check:d,actionKey:`HOA_DON_XEM_KIEM_HANG`}):null,D=S&&l?{title:`Ảnh hoàn thành`,rows:[{label:`Người giao`,value:z(i?.assignee_name)},{label:`Ngày giao`,value:V(l?.completed_at??n?.completed_at)},R(l?.completion_note)?{label:`Ghi chú`,value:z(l?.completion_note),multiline:!0}:null,u.length?{label:`Ảnh`,value:`Xem ${u.length} ảnh`,trailing:`›`,actionKey:`HOA_DON_XEM_ANH_GIAO_HANG`}:null].filter(e=>e&&R(e.value))}:null,re=ze(e),O=[w,ee,te,ne],ie=[w,g?C({customer:{...r,name:z(r?.name)||z(n?.ten_khach_hang_snapshot)},note:n?.note}):null,ee,te,ne,E,D,b&&re.length?{title:`Dòng tiền`,items:re}:null];return{blocks:(h?O:ie).filter(e=>e?Array.isArray(e.rows)&&e.rows.length>0||Array.isArray(e.items)&&e.items.length>0:!1),emptyText:`Chưa có dữ liệu hóa đơn.`}}function Ve(e,t){let n=(Array.isArray(e?.settlement_rounds)?e.settlement_rounds:[]).find(e=>String(e?.id_lan_doi_soat??``)===String(t??``));if(!n)return{blocks:[],emptyText:`Không tìm thấy lần tất toán.`};let r=Array.isArray(n?.details)?n.details:[],i=z(n?.trang_thai_lan).toUpperCase(),a=z(n?.ma_lan_tat_toan??n?.display_code,`Lần tất toán`),o=z(n?.ghi_chu),s=Array.isArray(n?.storage_paths)?n.storage_paths.map(e=>String(e??``).trim()).filter(Boolean):[];return{blocks:[{title:`Thông tin tất toán`,rows:[{label:`Mã tất toán`,value:a,copyValue:a},{label:`Người tất toán`,value:z(n?.ten_nguoi_tat_toan)},{label:`Tổng tiền`,value:B(n?.tong_so_tien)},{label:`Trạng thái`,value:i===`ACTIVE`?`Đang hiệu lực`:i===`VOIDED`?`Đã hủy`:L(n?.trang_thai_lan,``)},{label:`Thời gian`,value:V(n?.created_at)},R(o)?{label:`Ghi chú`,value:o,multiline:!0}:null,s.length?{label:`Ảnh chứng từ`,value:`Xem ${s.length} ảnh`,trailing:`›`,actionKey:`HOA_DON_XEM_ANH_TAT_TOAN`}:null].filter(e=>e&&R(e.value))},r.length?{title:`Sản phẩm tất toán`,items:r.map(e=>({title:z(e?.name,`Sản phẩm`),subtitle:z(e?.so_luong_tat_toan,`0`)+` x `+B(e?.don_gia_tat_toan_thuc_te)+` = `+B(e?.thanh_tien_tat_toan),variant:`product`,stacked:!0}))}:null].filter(Boolean),emptyText:`Lần tất toán chưa có chi tiết.`}}var He=Object.freeze({HOA_DON_CHUYEN_TIEN:`Chuyển nội bộ`,HOA_DON_YEU_CAU_CHUYEN_TIEN:`Yêu cầu chuyển tiền`,HOA_DON_CHUYEN_QUYEN_THU:`Chuyển đơn`,HOA_DON_TAT_TOAN_CONG_TY:`Tất toán`,HOA_DON_HOAN_DON:`Hoàn đơn`});function H(e){let t=Number(e??0);return Number.isFinite(t)?Math.max(0,t):0}function U(e){return Math.max(0,Math.trunc(H(e)))}function W(e){return`${new Intl.NumberFormat(`vi-VN`).format(H(e))} đ`}function G(e){return String(e??``).replace(/\D+/g,``)}function Ue(e,t={}){return b({employees:e,...t})}function We(e,r=``){let i=String(r??``).trim();return(Array.isArray(e)?e:[]).filter(e=>{let t=String(e?.id_nhan_vien??``).trim(),n=String(e?.trang_thai??``).trim().toUpperCase();return t&&t!==i&&n===`ACTIVE`&&H(e?.so_du_kha_dung)>0}).map(e=>{let r=String(e?.id_nhan_vien??``).trim(),i=String(e?.ten_nhan_vien??e?.ten_dang_nhap??`Nhân viên`).trim(),a=U(e?.so_du_kha_dung);return`
        <option
          value="${n(r)}"
          data-holder-available="${n(a)}"
        >
          ${t(`${i} - đang giữ ${W(a)}`)}
        </option>
      `}).join(``)}function Ge(e){let t=e?.settlement_context?.products;return Array.isArray(t)&&t.length?t:Array.isArray(e?.settlement_products)&&e.settlement_products.length?e.settlement_products:Array.isArray(e?.products)?e.products:[]}function Ke(e){return e?.is_current_employee?`Bạn`:String(e?.ten_nhan_vien??e?.ho_ten??e?.ten_dang_nhap??e?.name??`Nhân viên`).trim()}function qe(e,t,n){let r=String(n??``).trim();return(Array.isArray(t)?t:[]).map(e=>{let t=String(e?.id_nhan_vien??e?.employee_id??e?.id??``).trim();return t?{...e,id_nhan_vien:t,ten_nhan_vien:e?.ten_nhan_vien??e?.employee_name??e?.name??`Nhân viên`,so_du_kha_dung:H(e?.so_du_kha_dung??e?.available_balance??e?.available),is_current_employee:!!(e?.is_current_employee??(r&&t===r))}:null}).filter(e=>e&&H(e?.so_du_kha_dung)!==0)}function K(e){let n=(Array.isArray(e)?e:[]).filter(e=>H(e?.so_du_kha_dung)>0);return n.length?n.map(e=>`
        <div class="hoa-don-settlement-holder-row">
          <span>
            ${t(Ke(e))} đang giữ
          </span>

          <strong>
            ${t(W(e?.so_du_kha_dung))}
          </strong>
        </div>
      `).join(``):`
      <p class="hoa-don-settlement-holder-empty">
        Chưa có người đang giữ tiền.
      </p>
    `}function Je(e){let t=String(e??``).trim();if(!t)return`—`;let n=new Date(t);return Number.isNaN(n.getTime())?t:new Intl.DateTimeFormat(`vi-VN`).format(n)}function q(e){let n=e?.header??e?.invoice??{},r=e?.order??{},i=e?.customer??{},a=e?.roles??{},o=n?.ma_hoa_don??n?.order_code??r?.ma_don_hang??r?.order_code??`—`,s=i?.name??i?.ten_khach_hang??n?.ten_khach_hang??r?.customer_name??`—`,c=a?.creator_name??a?.seller_name??n?.ten_nguoi_ban??n?.seller_name??`—`,l=a?.assignee_name??a?.delivery_name??n?.ten_nguoi_giao??n?.delivery_name??`—`,u=e?.delivery?.ngay_hoan_thanh??e?.delivery?.completed_at??n?.ngay_hoan_thanh??n?.completed_at??r?.ngay_hoan_thanh??r?.completed_at??``;return`
    <section class="hoa-don-settlement-order-block">
      <h3>Thông tin đơn</h3>

      <div>
        <span>Mã đơn</span>
        <strong>${t(o)}</strong>
      </div>

      <div>
        <span>Khách hàng</span>
        <strong>${t(s)}</strong>
      </div>

      <div>
        <span>Người bán</span>
        <strong>${t(c)}</strong>
      </div>

      <div>
        <span>Người giao</span>
        <strong>${t(l)}</strong>
      </div>

      ${u?`
            <div>
              <span>Ngày hoàn thành</span>

              <strong>
                ${t(Je(u))}
              </strong>
            </div>
          `:``}
    </section>
  `}function Ye(e){return Ge(e).map(e=>{let r=String(e?.id_san_pham??``).trim(),i=U(e?.so_luong_don??e?.quantity??e?.so_luong),a=U(e?.so_luong_da_tat_toan),o=U(e?.so_luong_con_lai??Math.max(0,i-a)),s=U(e?.gia_cong_ty_tham_chieu??e?.gia_cong_ty??e?.reference_price),c=e?.name||e?.ten_san_pham||e?.ten_san_pham_snapshot||e?.product_name||e?.ma_san_pham_snapshot||`Sản phẩm`,l=o,u=s>0?new Intl.NumberFormat(`vi-VN`).format(s):``,d=l*s;return!r||i<=0||o<=0?``:`
        <article
          class="hoa-don-settlement-product"
          data-invoice-product-row
          data-invoice-settlement-row
        >
          <strong
            class="hoa-don-settlement-product__name"
          >
            ${t(c)}
          </strong>

          <small
            class="hoa-don-settlement-product__company-price"
          >
            Giá công ty:
            ${t(W(s))}
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
              min="${n(o)}"
              max="${n(o)}"
              step="1"
              inputmode="numeric"
              readonly
                tabindex="-1"
              aria-readonly="true"
              value="${n(l)}"
              data-invoice-product-quantity
              data-invoice-product-id="${n(r)}"
              data-invoice-product-max="${n(o)}"
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
              value="${n(u)}"
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
              ${t(W(d))}
            </strong>
          </div>
        </article>
      `}).join(``)}function Xe(e){return(Array.isArray(e?.products)?e.products:[]).map(e=>{let r=String(e?.id_san_pham??``).trim(),i=U(e?.quantity??e?.so_luong);return!r||i<=0?``:`
        <div class="hoa-don-action-line" data-invoice-product-row>
          <span class="hoa-don-action-line__name">
            <strong>${t(e?.name||e?.model||`Sản phẩm`)}</strong>
            <small>Tối đa ${i}</small>
          </span>
          <input
            type="number"
            min="0"
            max="${n(i)}"
            step="1"
            value="0"
            data-invoice-product-quantity
            data-invoice-product-id="${n(r)}"
            data-invoice-product-max="${n(i)}"
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
      `}).join(``)}function J(e){return He[String(e??``).trim().toUpperCase()]??`Xử lý hóa đơn`}function Ze({actionKey:e,detail:r,employees:i=[],currentEmployeeId:a=``,photos:o=[]}={}){let s=String(e??``).trim().toUpperCase(),c=r?.order??{},l=r?.header??{},u=r?.customer??{},d=r?.roles??{},f=H((r?.settlement_context?.actor_balance??r?.actor_balance??{})?.available);r?.settlement_context?.settlement??r?.company_settlement,r?.settlement_context?.actor;let m=r?.roles??r?.settlement_context?.roles??{},h=String(m?.creator_id??r?.header?.id_nguoi_tao_chot??r?.invoice?.id_nguoi_tao_chot??``).trim(),g=String(m?.assignee_id??r?.header?.id_nguoi_nhan_chot??r?.invoice?.id_nguoi_nhan_chot??``).trim(),_=!!(h&&h===g),v=r?.internal_reconciliation?.labor??r?.labor??{};_||U(v?.tien_cong_tham_chieu_snapshot);let y=U(r?.header?.total??r?.invoice?.tong_tien_phai_thu??r?.money?.total??0);(Array.isArray(r?.transfers)?r.transfers:[]).filter(e=>String(e?.trang_thai_chuyen??``).trim().toUpperCase()===`DA_XAC_NHAN`&&!!String(e?.id_but_toan??``).trim());let b=``;if((s===`HOA_DON_CHUYEN_TIEN`||s===`HOA_DON_CHUYEN_QUYEN_THU`)&&(b+=`
      <label class="hoa-don-action-field">
        <span>Người nhận</span>
        <select data-invoice-action-employee>
          <option value="">Chọn nhân viên</option>
          ${Ue(i,{currentEmployeeId:a,creatorId:d?.creator_id,assigneeId:d?.assignee_id})}
        </select>
      </label>
    `),s===`HOA_DON_YEU_CAU_CHUYEN_TIEN`&&(b+=`
      <section class="hoa-don-settlement-flow-block">
        <h3>Dòng tiền</h3>

        ${K(i)}
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
    `),s===`HOA_DON_CHUYEN_TIEN`&&(b+=`

      <section class="hoa-don-action-balance">
        <div>
          <span>Số tiền đang giữ</span>
          <strong>${t(W(f))}</strong>
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
        <strong data-invoice-transfer-remaining>${t(W(f))}</strong>
      </div>
    `),s===`HOA_DON_YEU_CAU_CHUYEN_TIEN`&&(b+=`
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
    `),s===`HOA_DON_CHUYEN_QUYEN_THU`&&(b+=`<div class="hoa-don-action-note">Chuyển quyền thu phần tiền còn thiếu. Tiền đã thu vẫn thuộc người đang giữ tiền.</div>`),s===`HOA_DON_TAT_TOAN_CONG_TY`){let e=r?.pendingTransfer??null,s=qe(r,i,a),c=String(a??``).trim(),l=H(s.find(e=>!!e?.is_current_employee||c&&String(e?.id_nhan_vien??``).trim()===c)?.so_du_kha_dung),u=new Set([...Array.isArray(r?.available_actions)?r.available_actions:[],...Array.isArray(r?.allowed_actions)?r.allowed_actions:[],...Array.isArray(r?.header?.available_actions)?r.header.available_actions:[]].map(e=>String(e??``).trim().toUpperCase())),d=!e&&u.has(`HOA_DON_YEU_CAU_CHUYEN_TIEN`)&&s.some(e=>String(e?.id_nhan_vien??``).trim()!==c&&H(e?.so_du_kha_dung)>0);b+=`
      <section
        data-invoice-settlement-main
        data-invoice-settlement-available="${n(String(l))}"
      >
        ${q(r)}

        <section class="hoa-don-settlement-flow-block">
          <h3>Dòng tiền</h3>

          ${K(s)}

          ${e?`
                <article class="hoa-don-settlement-pending">
                  <span>
                    Đang chờ
                    ${t(e?.ten_nguoi_chuyen??e?.sender_name??e?.from_name??`người giữ tiền`)}
                    chuyển
                  </span>

                  <strong>
                    ${t(W(e?.so_tien??e?.amount))}
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
            ${Ye(r)}
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
              ${t(W(l))}
            </strong>
          </div>

          <div>
            <span data-invoice-settlement-remaining-label>
              Còn lại
            </span>

            <strong data-invoice-settlement-remaining>
              ${t(W(l))}
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

          ${p({photos:o,maxPhotos:5,addLabel:`Thêm ảnh`,addTitle:`Thêm ảnh xác nhận tất toán`})}
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


    `}return s===`HOA_DON_HOAN_DON`&&(b+=`
      <label class="hoa-don-action-field">
        <span>Lý do hoàn đơn</span>
        <textarea rows="3" maxlength="500" placeholder="Nhập lý do" data-invoice-action-reason></textarea>
      </label>
      <div class="hoa-don-action-note">Nhập số lượng cần hoàn. Thao tác tạo phiếu hoàn chờ xử lý, chưa tự nhập kho hoặc hoàn tiền.</div>
      <div class="hoa-don-action-lines">${Xe(r)}</div>
    `),`
    <section class="hoa-don-action-page" data-invoice-action-page="${n(s)}" data-invoice-available-balance="${n(f)}" data-invoice-total="${n(y)}">
      ${s===`HOA_DON_TAT_TOAN_CONG_TY`||s===`HOA_DON_YEU_CAU_CHUYEN_TIEN`?``:`
            <article class="hoa-don-action-summary">
              <strong>
                ${t(c?.ma_don_hang||`Đơn hàng`)}
              </strong>

              <span>
                ${t(u?.name||c?.customer_name||``)}
              </span>

              <small>
                ${t(L(l?.state,``))}
              </small>
            </article>
          `}
      <div class="hoa-don-action-form">${b}</div>
      <button type="button" class="hoa-don-action-submit app-inline-action${s===`HOA_DON_HOAN_DON`?` is-danger`:``}" data-invoice-action-submit>
        ${t(s===`HOA_DON_YEU_CAU_CHUYEN_TIEN`?`Xác nhận`:J(s))}
      </button>
    </section>
  `}function Qe(e){let t=e.querySelector(`[data-invoice-action-page]`);if(!t)return;let n=H(t.getAttribute(`data-invoice-available-balance`)),r=t.querySelector(`[data-invoice-action-amount]`),i=t.querySelector(`[data-invoice-transfer-remaining]`),a=t.querySelector(`[data-invoice-action-full-amount]`),o=t.querySelector(`[data-invoice-action-employee]`),s=t.querySelector(`[data-invoice-request-holder-available]`),c=()=>{if(!o||!s)return;let e=o.selectedOptions?.[0];n=H(e?.getAttribute(`data-holder-available`)),t.setAttribute(`data-invoice-available-balance`,String(U(n))),s.textContent=W(n),r&&(r.value=``,r.dispatchEvent(new Event(`input`,{bubbles:!0})))},l=e=>{let t=G(e.value);e.value=t?new Intl.NumberFormat(`vi-VN`).format(Number(t)):``};r&&r.addEventListener(`input`,()=>{let e=U(G(r.value));e=Math.min(U(n),e),r.value=e>0?new Intl.NumberFormat(`vi-VN`).format(e):``,i&&(i.textContent=W(Math.max(0,n-e))),a&&(a.checked=n>0&&e===U(n))}),o&&s&&(o.addEventListener(`change`,c),c()),a&&r&&a.addEventListener(`change`,()=>{a.checked&&(r.value=new Intl.NumberFormat(`vi-VN`).format(n),r.dispatchEvent(new Event(`input`,{bubbles:!0})))});let u=()=>{let e=0;t.querySelectorAll(`[data-invoice-settlement-row]`).forEach(t=>{let n=t.querySelector(`[data-invoice-product-quantity]`),r=t.querySelector(`[data-invoice-product-price]`),i=t.querySelector(`[data-invoice-line-total]`),a=t.querySelector(`[data-invoice-product-full]`),o=U(n?.getAttribute(`data-invoice-product-max`)),s=U(n?.value);s=o>0?Math.min(o,s):0,n&&(n.value=String(s)),a&&(a.checked=o>0&&s===o);let c=U(G(r?.value));r&&(r.value=c>0?new Intl.NumberFormat(`vi-VN`).format(c):``);let l=s*c;e+=l,i&&(i.textContent=W(l))});let r=t.querySelector(`[data-invoice-settlement-total]`),i=t.querySelector(`[data-invoice-settlement-remaining]`),a=t.querySelector(`[data-invoice-settlement-remaining-label]`),o=t.querySelector(`[data-invoice-settlement-warning]`);r&&(r.textContent=W(e));let s=n-e;a&&(a.textContent=s>=0?`Còn lại`:`Thiếu`),i&&(i.textContent=W(Math.abs(s)),i.dataset.state=s>=0?`remaining`:`shortage`),o&&(o.hidden=s>=0,o.textContent=s>=0?``:`Tạm tính vượt số dư đang giữ `+W(Math.abs(s))+`.`)};t.querySelectorAll(`[data-invoice-product-price]`).forEach(e=>{e.addEventListener(`input`,()=>{l(e),u()}),e.addEventListener(`focus`,()=>{e.select()})}),t.querySelectorAll(`[data-invoice-product-quantity]`).forEach(e=>{e.addEventListener(`input`,()=>{let t=U(e.getAttribute(`data-invoice-product-max`)),n=U(e.value);n=t>0?Math.min(t,n):0,e.value=String(n);let r=e.closest(`[data-invoice-product-row]`)?.querySelector(`[data-invoice-product-full]`);r&&(r.checked=t>0&&n===t),u()}),e.addEventListener(`focus`,()=>{e.select()})}),t.querySelectorAll(`[data-invoice-product-step]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.closest(`[data-invoice-settlement-row]`)?.querySelector(`[data-invoice-product-quantity]`);if(!t)return;let n=Number(e.getAttribute(`data-invoice-product-step`)),r=U(t.getAttribute(`data-invoice-product-max`)),i=U(t.value),a=Math.min(r,Math.max(0,i+(Number.isFinite(n)?n:0)));t.value=String(a),t.dispatchEvent(new Event(`input`,{bubbles:!0}))})}),t.querySelectorAll(`[data-invoice-product-full]`).forEach(e=>{e.addEventListener(`change`,()=>{if(!e.checked)return;let t=e.closest(`[data-invoice-product-row]`)?.querySelector(`[data-invoice-product-quantity]`);if(!t)return;let n=U(t.getAttribute(`data-invoice-product-max`));t.value=String(n),t.dispatchEvent(new Event(`input`,{bubbles:!0}))})}),t.querySelectorAll(`[data-invoice-product-quantity]`).forEach(e=>{e.dispatchEvent(new Event(`input`,{bubbles:!0}))}),u();let d=t.querySelector(`[data-invoice-settlement-labor]`),f=t.querySelector(`[data-invoice-settlement-profit]`),p=H(t.getAttribute(`data-invoice-total`)),m=()=>{if(!f)return;let e=Array.from(t.querySelectorAll(`[data-invoice-settlement-row]`)).reduce((e,t)=>e+H(t.querySelector(`[data-invoice-product-quantity]`)?.value)*H(G(t.querySelector(`[data-invoice-product-price]`)?.value)),0),n=H(G(d?.value)),r=Math.max(p-e-n,0);f.textContent=W(r),d?.setCustomValidity(``)};d?.addEventListener(`input`,()=>{d.type!==`hidden`&&l(d),m()}),t.querySelectorAll(`[data-invoice-product-price]`).forEach(e=>{e.addEventListener(`input`,m)}),m()}function $e(e,t){let n=String(t??``).trim().toUpperCase(),r=String(e.querySelector(`[data-invoice-action-employee]`)?.value??``).trim(),i=Number(G(e.querySelector(`[data-invoice-action-amount]`)?.value)||0),a=String(e.querySelector(`[data-invoice-action-reason]`)?.value??``).trim(),o=String(e.querySelector(`[data-invoice-action-note]`)?.value??``).trim(),s=String(e.querySelector(`[data-invoice-reverse-ledger]`)?.value??``).trim(),c=Array.from(e.querySelectorAll(`[data-invoice-product-row]`)).map(e=>{let t=e.querySelector(`[data-invoice-product-quantity]`),r=Number(t?.value??0),i=Number(t?.getAttribute(`data-invoice-product-max`)??0),a=String(t?.getAttribute(`data-invoice-product-id`)??``).trim();if(n===`HOA_DON_TAT_TOAN_CONG_TY`&&(!Number.isSafeInteger(i)||i<=0||r!==i))throw TypeError(`Hóa đơn phải tất toán toàn bộ số lượng còn lại.`);if(!Number.isSafeInteger(r)||r<=0)return null;if(Number.isSafeInteger(i)&&i>0&&r>i)throw TypeError(`Số lượng vượt quá số lượng còn lại.`);let o={id_san_pham:a,so_luong:r};if(n===`HOA_DON_TAT_TOAN_CONG_TY`){let t=Number(G(e.querySelector(`[data-invoice-product-price]`)?.value)||0);if(!Number.isSafeInteger(t)||t<0)throw TypeError(`Đơn giá tất toán không hợp lệ.`);o.don_gia_tat_toan=t}return o}).filter(Boolean),l=Number(G(e.querySelector(`[data-invoice-settlement-labor]`)?.value)||0);if(n===`HOA_DON_TAT_TOAN_CONG_TY`&&(!Number.isSafeInteger(l)||l<0))throw TypeError(`Tiền công thực tế không hợp lệ.`);return{actionKey:n,receiverId:r,amount:i,reason:a,note:o,ledgerId:s,laborAmount:l,lines:c}}var et=Object.freeze({CHUA_THANH_TOAN:`Chưa thanh toán`,THANH_TOAN_MOT_PHAN:`Thanh toán một phần`,DA_THANH_TOAN:`Đã thanh toán`}),tt=Object.freeze({CHUA_TAT_TOAN:`Chưa tất toán`,DANG_TAT_TOAN:`Đang tất toán`,DA_TAT_TOAN:`Đã tất toán`,DA_HUY:`Đã hủy tất toán`}),nt=Object.freeze([{key:`dang-xu-ly`,label:`Đang xử lý`,statuses:[`CHUA_THANH_TOAN`,`THANH_TOAN_MOT_PHAN`,`DA_THANH_TOAN`]},{key:`da-tat-toan`,label:`Đã tất toán`,statuses:[`DA_THANH_TOAN`]},{key:`loi-nhuan`,label:`Lợi nhuận`,statuses:[`CHUA_THANH_TOAN`,`THANH_TOAN_MOT_PHAN`,`DA_THANH_TOAN`]},{key:`thong-ke`,label:`Thống kê`,statuses:[]}]);function Y(e,t){e.dispatchEvent(new CustomEvent(`kangaroo:page-chrome`,{bubbles:!0,detail:t}))}function rt(e){return nt.find(t=>t.key===e)??nt[0]}function X(e){if(e==null||e===``)return``;let t=Number(e);return Number.isFinite(t)?D(t):String(e)}function it(e){let t=String(e??``).trim();return et[t]??t??`Chưa xác định`}function at(e){let t=String(e??``).trim();return tt[t]??t}function ot(e,t,n){let r=String(e??``).trim(),i=String(n??``).trim();return r&&i&&r===i?`Bạn`:String(t??`Nhân viên`).trim()}function st(e,t,n,r){let i=String(e??``),a=String(n??``).trim(),o=ot(t,a,r);return!i||!a||o===a?i:i.split(a).join(o)}function Z(e){let t=e?.collection_task;if(!t||typeof t!=`object`||!t?.status_label&&!t?.summary_label&&!t?.action_key)return null;let n=String(t?.action_key??``).trim().toUpperCase();if(n&&!ct(e).has(n))return null;let r=String(e?.current_employee_id??``).trim(),i=String(t?.holder_id??t?.id_nguoi_giu??t?.id_nguoi_thu??t?.employee_id??``).trim(),a=String(t?.holder_name??t?.ten_nguoi_giu??t?.collector_name??t?.employee_name??``).trim(),o=ot(i,a,r),s=e=>st(e,i,a,r);return{...t,action_key:n||null,holder_name:o,status_label:s(t?.status_label),summary_label:s(t?.summary_label),button_label:s(t?.button_label)}}function ct(e){let t=[...Array.isArray(e?.allowed_actions)?e.allowed_actions:[],...Array.isArray(e?.available_actions)?e.available_actions:[]];return new Set(t.map(e=>String(e??``).trim().toUpperCase()).filter(Boolean))}function lt(e,t){if(t!==`dang-xu-ly`)return[];let n=ct(e),r=[],i=Z(e),a=String(i?.action_key??``).trim().toUpperCase();a&&n.has(a)&&r.push({actionKey:a,label:i?.button_label||`Xác nhận thu`,kind:`collection`,className:`is-primary`});for(let e of[{actionKey:`HOA_DON_TAT_TOAN_CONG_TY`,label:`Tất toán`,className:`is-primary`},{actionKey:`HOA_DON_CHUYEN_TIEN`,label:`Chuyển tiền`,className:``},{actionKey:`HOA_DON_CHUYEN_QUYEN_THU`,label:`Chuyển COD`,className:``}])n.has(e.actionKey)&&r.push({...e,kind:`business`});return r}function ut(e){switch(String(e??``).trim().toUpperCase()){case`HOA_DON_XAC_NHAN_TIEN_DANG_GIU`:return`XAC_NHAN_TIEN_DANG_GIU`;case`HOA_DON_XAC_NHAN_DA_THU`:return`XAC_NHAN_DA_THU`;case`HOA_DON_XAC_NHAN_COD`:return`XAC_NHAN_COD`;case`HOA_DON_THU_TIEN`:return`THU_TIEN`;default:return``}}function dt(e){return String(e??``).replace(/\D+/g,``)}function ft(e){let t=dt(e);if(!t)return 0;let n=Number(t);return Number.isSafeInteger(n)?n:0}function pt(e){let t=Number(e??0);return!Number.isSafeInteger(t)||t<=0?``:new Intl.NumberFormat(`vi-VN`).format(t)}function mt(e){return`
    <nav class="hoa-don-tabs">
      ${nt.map(r=>`
            <button
              type="button"
              class="${r.key===e?`is-active`:``}"
              data-invoice-tab="${n(r.key)}"
            >
              ${t(r.label)}
            </button>
          `).join(``)}
    </nav>
  `}function ht(e){let t=String(e??``).trim(),n=t.replace(/\D+/g,``);return!t.includes(`*`)&&n.length>=8?`tel:${n}`:``}function gt(e){let t=String(e??``).trim();return t?`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(t)}`:``}function _t(e,t){let n=String(e?.entity_id??``),r=Z(e),i=lt(e,t),a=_(e),o=e?.money&&typeof e.money==`object`?e.money:{},s=Number(o?.collected??0),c=Number(o?.remaining??0),l=Number.isFinite(s)?Math.max(0,s):0,f=Number.isFinite(c)?Math.max(0,c):0,p=String(e?.roles?.collector_name??r?.holder_name??e?.roles?.assignee_name??e?.roles?.creator_name??`Nhân viên`).trim(),m=String(e?.current_employee_id??``).trim(),h=(Array.isArray(e?.money_holders)?e.money_holders:[]).map(e=>{let t=String(e?.id_nhan_vien??``).trim(),n=Number(e?.so_du_kha_dung??0);return{...e,id_nhan_vien:t,is_current_employee:!!(e?.is_current_employee??(t&&t===m)),so_du_kha_dung:Number.isFinite(n)?Math.max(0,n):0}}).filter(e=>e.id_nhan_vien&&e.so_du_kha_dung>0).sort((e,t)=>Number(!!t?.is_current_employee)-Number(!!e?.is_current_employee)),g=String(e?.customer_phone??e?.phone??``).trim(),v=String(e?.customer_address??e?.address??``).trim(),y=[],b=ht(g),x=gt(v);b&&y.push({href:b,label:`Gọi khách hàng`,icon:u.phone}),x&&y.push({href:x,label:`Mở bản đồ`,icon:u.map,external:!0});let S=[];if(t===`dang-xu-ly`&&r)S.push({label:r?.summary_label||`Cần xử lý tiền`,value:X(r?.amount),tone:`warning`});else if(t===`dang-xu-ly`){if(h.length)h.forEach(e=>{let t=String(e?.ten_nhan_vien??e?.ten_dang_nhap??`Nhân viên`).trim();S.push({label:e?.is_current_employee?`Bạn đang giữ`:`${t} đang giữ`,value:X(e?.so_du_kha_dung)})});else if(l>0){let t=String(e?.roles?.collector_id??r?.holder_id??``).trim();S.push({label:t&&t===m?`Bạn đang giữ`:`${p} đang giữ`,value:X(l)})}l>0&&f>0&&S.push({label:`Còn lại`,value:X(f)})}else t===`da-tat-toan`&&S.push({label:`Tất toán`,value:at(e?.settlement_state)});let C=[...i.filter(e=>!String(e?.className??``).split(/\s+/).includes(`is-primary`)),...i.filter(e=>String(e?.className??``).split(/\s+/).includes(`is-primary`))].map(e=>({label:e.label,className:e.className,data:{"invoice-action":e.actionKey,"invoice-id":n}}));return d({id:n,title:e?.order_code||`Đơn hàng`,titleIcon:u.order,typeLabel:a?.label,typeIcon:a?.icon,typeKey:a?.key,status:r?.status_label||it(e?.state),statusKey:r?.status_key||e?.state,subtitle:e?.customer_name||`Khách lẻ`,subtitleIcon:u.user,timestamp:E(e?.completed_at,``),lines:[{icon:u.phone,text:e?.customer_phone},{icon:u.map,text:e?.address}],rows:S.filter(e=>e.value!==``),tools:y,actions:C,ariaLabel:`Mở chi tiết `+(e?.order_code||`đơn hàng`)})}var vt={id:`hoa-don`,label:`Hóa đơn`,shortLabel:`HĐ`,render(e,i={}){let _=r(),b=re(),C={cards:[],transferRequests:[],transferRequestsLoaded:!1,pendingTransferCount:0,transferError:``,transferConfirmRequest:null,activeTab:`dang-xu-ly`,search:``,searchByTab:new Map(nt.map(e=>[e.key,``])),detail:null,detailId:null,detailReadOnly:!1,orderHistory:null,checkHistory:null,checkHistoryError:``,invoiceCheckContext:null,invoiceCheckError:``,deliveryViewerImages:[],deliveryViewerIndex:0,evidenceViewerImages:[],evidenceViewerIndex:0,detailSettlementRoundId:null,collectionCard:null,actionKey:``,actionDetail:null,actionEmployees:[],actionCurrentEmployeeId:``,actionEvidencePhotos:[],actionEvidenceSequence:0,actionSource:`list`,error:``,busy:!1,worklistBusy:!1,worklistPhase:`idle`,worklistRequestId:0,transferRequestId:0},w=ce({initialTabKey:C.activeTab,pageSize:10,async fetchPage({tabKey:e,search:t,cursor:n,limit:r}){let a=rt(e),o=await le({search:t||null,statuses:a.statuses,tabKey:e,cursor:n,limit:r,currentEmployeeId:i?.identity?.id_nhan_vien??``});return{items:Array.isArray(o?.cards)?o.cards:[],cursor:o?.cursor??null,hasMore:o?.has_more===!0,meta:{permissionMask:o?.permission_mask??null,serverTime:o?.server_time??null,pendingTransferCount:Math.max(0,Number(o?.pending_transfer_count??0)||0)}}}});function T(){return typeof i?.isActive!=`function`||i.isActive()}let D=new Set([`CHUA_THANH_TOAN`,`THANH_TOAN_MOT_PHAN`,`DA_THANH_TOAN`]);function ie(e,t){let n=rt(t).key,r=String(e?.state??``).trim().toUpperCase(),i=String(e?.settlement_state??``).trim().toUpperCase();return n===`dang-xu-ly`?D.has(r)&&i!==`DA_TAT_TOAN`:n===`da-tat-toan`?r===`DA_THANH_TOAN`&&i===`DA_TAT_TOAN`:n===`loi-nhuan`&&D.has(r)&&(e?.benefit_state!=null||e?.profit!=null)}async function k(e,{throwOnReadError:t=!1}={}){let n=String(e??``).trim();if(!n)return w.invalidate({all:!0}),null;try{let e=await ue([n]);if(!T())return null;let t=e.find(e=>String(e?.entity_id??``)===n)??null,r=w.reconcileItems((e,r)=>{let i=e.findIndex(e=>String(e?.entity_id??``)===n),a=e.filter(e=>String(e?.entity_id??``)!==n);if(!t||!ie(t,r.tabKey))return a;let o=!!String(r.search??``).trim();if(!(o?i>=0:r.pageNumber===1))return a;let s=o&&i>=0?Math.min(i,a.length):0;return a.splice(s,0,t),a},{all:!0});return C.cards=Array.isArray(r?.items)?r.items:C.cards,C.worklistPhase=`ready`,C.error=``,t}catch(e){if(w.invalidate({all:!0}),t)throw e;return null}}let A=o({initialValue:C.search,debounceMs:700,isActive:T,onApply(e,t){C.search=e,C.searchByTab.set(C.activeTab,e);let n=String(t?.reason??``);if(n===`tab-sync`)return null;let r=n===`debounce`||n===`submit`;return $({silent:r,allowWhileBusy:r,force:t?.force===!0,reason:n})}}),oe=new Set([`CHUYEN_TIEN_NOI_BO`,`CHUYEN_QUYEN_THU_TIEN`,`CHUYEN_QUYEN_XU_LY_TAT_TOAN`,`BAN_GIAO_HOA_DON`,`NHIEM_VU_BAN_GIAO_TIEN`]),j=new Map,M=null;function se(e){return e.includes(`CHUYEN`)||e.includes(`BAN_GIAO`)||e.includes(`YEU_CAU`)}async function N(e){let t=String(e??``).trim();if(!t||_.currentKey()!==`detail:${t}`)return!1;let n=await de(t);return!T()||_.currentKey()!==`detail:${t}`?!1:(C.detailId=t,C.detail=n,Dt(),!0)}async function P(e,{refreshTransfers:t=!1}={}){return w.invalidate({all:!0}),t&&(C.transferRequestsLoaded=!1),!T()||C.busy?null:(t&&await B().catch(()=>null),$({silent:!0,force:!0,reason:e}))}async function pe(e={}){if(!T())return;let t=String(e?.entity_type??``).trim().toUpperCase(),n=String(e?.entity_id??``).trim(),r=String(e?.action_key??`UNKNOWN`).trim().toUpperCase(),i=se(r),a=oe.has(t);if(C.busy){w.invalidate({all:!0}),(i||a)&&(C.transferRequestsLoaded=!1);return}if(t===`HOA_DON`&&n){i&&await B().catch(e=>{console.warn(`[HoaDon] Realtime transfer refresh lỗi.`,e)});try{await k(n,{throwOnReadError:!0}),await N(n),_.currentKey()===`list`&&K();return}catch(e){console.warn(`[HoaDon] Targeted Realtime card sync lỗi.`,e)}}if(a&&n){let e=transferRequestById(n),t=String(e?.id_hoa_don??``).trim();if(await B().catch(()=>null),!T())return;let r=transferRequestById(n),i=t||String(r?.id_hoa_don??``).trim();if(i)try{await k(i,{throwOnReadError:!0}),await N(i),_.currentKey()===`list`&&K();return}catch(e){console.warn(`[HoaDon] Realtime transfer card sync lỗi.`,e)}}await P(`realtime:`+(t||`unknown`)+`:`+r.toLowerCase(),{refreshTransfers:i||a})}async function me(){for(;T()&&j.size;){let e=[...j.values()];j.clear();for(let t of e)try{await pe(t)}catch(e){console.warn(`[HoaDon] Realtime entity sync lỗi.`,e)}}}function F(e={}){if(!T())return null;let t=String(e?.entity_type??`UNKNOWN`).trim().toUpperCase(),n=String(e?.entity_id??``).trim(),r=String(e?.action_key??`UNKNOWN`).trim().toUpperCase(),i=t+`:`+(n||r);return j.set(i,e),M||=Promise.resolve().then(me).finally(()=>{if(M=null,T()&&j.size){let e=j.values().next().value;e&&F(e)}}),M}i?.onRealtimeInvalidation?.(F),i?.onCleanup?.(()=>{C.worklistRequestId+=1,C.transferRequestId+=1,j.clear(),U&&=(e.removeEventListener(`click`,We),e.removeEventListener(`keydown`,Ge),!1),A.dispose(),w.dispose(),Q()});function I(e){return e?.type===`invoice-action`}function Ee({actionKey:e,detail:t,employees:n=[],currentEmployeeId:r=``,source:i=`list`,parentContext:a=null}={}){return{type:`invoice-action`,actionKey:e??``,actionDetail:t??null,actionEmployees:Array.isArray(n)?n:[],actionCurrentEmployeeId:String(r??``).trim(),actionEvidencePhotos:[],actionEvidenceSequence:0,actionSource:i===`detail`?`detail`:`list`,draft:null,scrollTop:0,parentContext:I(a)?a:null}}function De(t,n=null){I(t)&&(t.actionKey=C.actionKey,t.actionDetail=C.actionDetail,t.actionEmployees=C.actionEmployees,t.actionCurrentEmployeeId=C.actionCurrentEmployeeId,t.actionEvidencePhotos=C.actionEvidencePhotos,t.actionEvidenceSequence=C.actionEvidenceSequence,t.actionSource=C.actionSource,t.draft=n,t.scrollTop=Number(e.scrollTop??0))}function Oe(e){return I(e)?(C.actionKey=e.actionKey,C.actionDetail=e.actionDetail,C.actionEmployees=e.actionEmployees,C.actionCurrentEmployeeId=e.actionCurrentEmployeeId,C.actionEvidencePhotos=e.actionEvidencePhotos,C.actionEvidenceSequence=e.actionEvidenceSequence,C.actionSource=e.actionSource,!0):!1}function ke(e){return(Array.isArray(e?.requests)?e.requests:[]).filter(e=>e?.trang_thai_chuyen===`CHO_XAC_NHAN`&&e?.id_request)}function Ae(){return h({count:C.pendingTransferCount,dataAttribute:`data-invoice-transfer-notice`,showWhenEmpty:!0})}function Pe(e){let t=[e?.ten_nguoi_chuyen,e?.sdt_nguoi_chuyen].filter(Boolean).join(` · `),n=[e?.ten_nguoi_nhan,e?.sdt_nguoi_nhan].filter(Boolean).join(` · `);return String(e?.kieu_chuyen??``).trim().toUpperCase()===`YEU_CAU_CHUYEN`?e?.is_receiver===!0?{label:`Người đang giữ tiền`,value:t}:e?.is_sender===!0?{label:`Người yêu cầu`,value:n}:{label:`Luồng yêu cầu`,value:[t,n].filter(Boolean).join(` → `)}:e?.is_receiver===!0?{label:`Người chuyển`,value:t}:e?.is_sender===!0?{label:`Chuyển cho`,value:n}:{label:`Luồng chuyển`,value:[t,n].filter(Boolean).join(` → `)}}function L(e){let t=String(e?.id_request??``),n=String(e?.kieu_chuyen??``).trim().toUpperCase()===`YEU_CAU_CHUYEN`,r=[];return e?.can_cancel===!0&&r.push({label:n?`Hủy yêu cầu`:`Hủy chuyển`,className:`is-danger`,data:{"transfer-id":t,"invoice-transfer-action":`cancel`}}),e?.can_reject===!0&&r.push({label:`Từ chối`,className:`is-danger`,data:{"transfer-id":t,"invoice-transfer-action":`reject`}}),e?.can_accept===!0&&r.push({label:n?`Xác nhận chuyển`:`Xác nhận`,className:`is-primary`,data:{"transfer-id":t,"invoice-transfer-action":`accept`}}),Array.isArray(e?.evidence)&&e.evidence.length&&r.push({label:`Xem ảnh`,data:{"transfer-id":t,"invoice-transfer-action":`evidence`}}),r}function R(e){let t=String(e?.id_hoa_don??``),n=e?.order_code||`Hóa đơn`,r=e?.request_type===`CHUYEN_TIEN_NOI_BO`,i=e?.request_type===`CHUYEN_QUYEN_XU_LY_TAT_TOAN`,a=String(e?.kieu_chuyen??``).trim().toUpperCase()===`YEU_CAU_CHUYEN`,o=Pe(e),s=[{label:`Nghiệp vụ`,value:a?`Yêu cầu chuyển tiền`:r?`Chuyển nội bộ`:i?`Bàn giao xử lý tất toán`:`Chuyển đơn`}];o.value&&s.push(o),e?.amount!==null&&e?.amount!==void 0&&s.push({label:r?`Số tiền chuyển`:`Tiền còn phải thu`,value:X(e.amount)});let c=[],l=ht(e?.customer_phone);l&&c.push({href:l,label:`Gọi khách hàng`,icon:u.phone});let f=gt(e?.address);return f&&c.push({href:f,label:`Mở bản đồ`,icon:u.map,external:!0}),d({id:t,title:n,titleIcon:u.order,status:`Chờ xác nhận`,statusKey:`CHO_XAC_NHAN_CHUYEN`,timestamp:E(e?.created_at,``),subtitle:e?.customer_name||``,subtitleIcon:u.user,lines:[{icon:u.phone,text:e?.customer_phone},{icon:u.map,text:e?.address}],rows:s,tools:c,actions:L(e),ariaLabel:`Mở chi tiết ${n}`})}function z(e){return C.transferRequests.find(t=>String(t?.id_request??``)===String(e??``))??null}async function B(){if(!T())return C.transferRequests;let e=C.transferRequestId+1;C.transferRequestId=e;let t=await he();return e!==C.transferRequestId||!T()?C.transferRequests:(C.transferRequests=ke(t),C.transferError=``,C.transferRequestsLoaded=!0,C.pendingTransferCount=C.transferRequests.length,C.transferRequests)}async function V(e,t){let n=String(e?.id_request??``);if(!n||![`accept`,`reject`,`cancel`].includes(t))return;let r=t===`accept`,i=t===`cancel`,o=e?.request_type===`CHUYEN_QUYEN_XU_LY_TAT_TOAN`?`XU_LY_TAT_TOAN`:`THU_TIEN`,s=`hoa-don-transfer:`+t+`:`+n;if(b.acquire(s)){C.busy=!0;try{e?.request_type===`CHUYEN_TIEN_NOI_BO`?i?await ve({transferId:n,requestKey:a(`hoa-don-huy-chuyen-tien`)}):await ge({transferId:n,accept:r,requestKey:a(r?`hoa-don-xac-nhan-chuyen-tien`:`hoa-don-tu-choi-chuyen-tien`)}):i?await ye({handoverId:n,rowVersion:e?.row_version,requestKey:a(o===`XU_LY_TAT_TOAN`?`hoa-don-huy-ban-giao-xu-ly`:`hoa-don-huy-chuyen-don`),handoverType:o}):await _e({handoverId:n,rowVersion:e?.row_version,accept:r,requestKey:a(o===`XU_LY_TAT_TOAN`?r?`hoa-don-xac-nhan-ban-giao-xu-ly`:`hoa-don-tu-choi-ban-giao-xu-ly`:r?`hoa-don-xac-nhan-chuyen-don`:`hoa-don-tu-choi-chuyen-don`),handoverType:o}),await B(),await k(e?.id_hoa_don),He(),O(i?`Đã hủy yêu cầu chuyển`:r?`Đã xác nhận yêu cầu chuyển`:`Đã từ chối yêu cầu chuyển`)}catch(e){O(e?.message||`Không xử lý được yêu cầu chuyển.`)}finally{C.busy=!1,b.release(s)}}}async function Fe(e){Q(),C.actionEvidenceSequence=0,C.transferConfirmRequest=e??null,await _.open(`invoice-transfer-confirm`,Le)}async function Ie(){let e=C.transferConfirmRequest,t=String(e?.id_request??``).trim(),n=String(e?.id_hoa_don??``).trim();if(C.busy||!t||!n)return;let r=`hoa-don-transfer-confirm:`+t;if(!b.acquire(r))return;C.busy=!0;let i=[];try{i=await Me({invoiceId:n,stage:`xac-nhan-chuyen`,files:C.actionEvidencePhotos.map(e=>e.file)}),await ge({transferId:t,accept:!0,requestKey:a(`hoa-don-xac-nhan-chuyen-tien`),storagePaths:i}),Q(),C.actionEvidenceSequence=0,C.transferConfirmRequest=null,await B(),await k(n),await _.back(),O(`Đã xác nhận yêu cầu chuyển`)}catch(e){i.length&&await je(i).catch(()=>{}),O(e?.message||`Không xác nhận được chuyển tiền.`)}finally{C.busy=!1,b.release(r)}}function Le(){let n=C.transferConfirmRequest;if(!n){_.back();return}let r=String(n?.order_code??`Hóa đơn`);Y(e,{headerMode:`title`,title:`Xác nhận chuyển tiền`,showRightAction:!1,onBack:Re,bottomActions:[]}),e.innerHTML=`
        <section class="hoa-don-action-page">
          <article class="hoa-don-action-summary">
            <strong>${t(r)}</strong>
            <span>Số tiền chuyển: ${t(X(n?.amount))}</span>
          </article>

          <div class="hoa-don-action-form">
            <section class="hoa-don-action-field">
              <span>Ảnh chứng từ xác nhận (không bắt buộc)</span>
              ${p({photos:C.actionEvidencePhotos,maxPhotos:5,addLabel:`Thêm ảnh`,addTitle:`Thêm ảnh xác nhận chuyển tiền`})}
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
      `;let i=e.querySelector(`[data-photo-picker-input]`);i?.addEventListener(`change`,()=>{It(i.files),i.value=``}),e.querySelectorAll(`[data-photo-picker-remove]`).forEach(e=>{e.addEventListener(`click`,()=>{Lt(e.dataset.photoId)})}),e.querySelector(`[data-invoice-transfer-confirm-submit]`)?.addEventListener(`click`,()=>{Ie()})}async function Re(){Q(),C.actionEvidenceSequence=0,C.transferConfirmRequest=null,await _.back()}async function ze(){if(!C.busy){C.busy=!0,C.transferError=``;try{await B()}catch(e){C.transferError=e?.message||`Không tải được đơn chờ xác nhận.`}finally{C.busy=!1,He()}}}function He(){Y(e,{headerMode:`title`,title:`Đơn chờ xác nhận`,onBack:()=>_.back(),showRightAction:!0,rightIcon:`↻`,rightLabel:`Tải lại`,onRightAction:ze,bottomActions:[]}),e.innerHTML=l({requests:C.transferRequests,error:C.transferError,renderCard:R})}async function H(){await _.open(`transfer-requests`,He),C.transferRequestsLoaded||await ze()}let U=!1,W=0;function G(e){let t=String(e?.dataset?.recordCard??``).trim();t&&Vt(t,{readOnly:_.currentKey()===`transfer-requests`})}function Ue(e){let t=rt(e?.dataset?.invoiceTab||`dang-xu-ly`).key;if(t===C.activeTab)return;let n=++W;C.worklistRequestId+=1,C.searchByTab.set(C.activeTab,C.search),C.activeTab=t;let r=C.searchByTab.get(t)??``;C.search=r,w.setTab(t),w.setSearch(r);let i=w.snapshot();C.cards=i?.loaded===!0&&Array.isArray(i?.items)?i.items:[],C.error=i?.error||``,C.worklistPhase=t===`thong-ke`||i?.loaded===!0?`ready`:`loading`,K(),A.reset(r,{force:!0,reason:`tab-sync`}),(typeof globalThis.requestAnimationFrame==`function`?globalThis.requestAnimationFrame.bind(globalThis):e=>globalThis.setTimeout(e,0))(()=>{!T()||n!==W||t!==C.activeTab||$({reason:`tab-change`})})}function We(t){let n=t.target instanceof Element?t.target:null;if(!n)return;let r=n.closest(`[data-cursor-page-previous]`);if(r&&e.contains(r)){t.preventDefault(),r.disabled||$({pageAction:`previous`});return}let i=n.closest(`[data-cursor-page-next]`);if(i&&e.contains(i)){t.preventDefault(),i.disabled||$({pageAction:`next`});return}let a=n.closest(`[data-invoice-transfer-notice]`);if(a&&e.contains(a)){t.preventDefault(),H();return}let o=n.closest(`[data-invoice-transfer-action]`);if(o&&e.contains(o)){t.preventDefault(),t.stopPropagation();let e=z(o.getAttribute(`data-transfer-id`)),n=o.getAttribute(`data-invoice-transfer-action`);if(!e||![`accept`,`reject`,`cancel`,`evidence`].includes(n))return;if(n===`evidence`){Ye(e);return}if(n===`cancel`&&!window.confirm(`Hủy yêu cầu chuyển này?`))return;n===`accept`&&e?.request_type===`CHUYEN_TIEN_NOI_BO`?Fe(e):V(e,n);return}let s=n.closest(`[data-invoice-tab]`);if(s&&e.contains(s)){t.preventDefault(),Ue(s);return}let c=n.closest(`[data-invoice-action]`);if(c&&e.contains(c)){t.preventDefault(),t.stopPropagation();let e=String(c.getAttribute(`data-invoice-id`)??``).trim(),n=String(c.getAttribute(`data-invoice-action`)??``).trim().toUpperCase(),r=C.cards.find(t=>String(t?.entity_id??``)===e);if(!r||!n)return;if(ut(n)){kt(r);return}zt({actionKey:n,invoiceId:r.entity_id,source:`list`,authorizationSource:r});return}let l=n.closest(`[data-record-card]`);!l||!e.contains(l)||n.closest([`a`,`button`,`input`,`select`,`textarea`,`[data-record-tool]`,`[data-invoice-action]`,`[data-invoice-transfer-action]`].join(`,`))||G(l)}function Ge(t){if(t.key!==`Enter`&&t.key!==` `)return;let n=t.target instanceof Element?t.target:null,r=n?.closest(`[data-record-card]`);!r||n!==r||!e.contains(r)||(t.preventDefault(),G(r))}function Ke(){U||=(e.addEventListener(`click`,We),e.addEventListener(`keydown`,Ge),!0)}Ke();function qe(){let t=e.querySelector(`[data-hoa-don-list-shell]`);t||=(e.innerHTML=`
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
        `,e.querySelector(`[data-hoa-don-list-shell]`));let n={shell:t,tabs:t?.querySelector(`[data-hoa-don-list-tabs]`),transferNotice:t?.querySelector(`[data-hoa-don-transfer-notice-slot]`),status:t?.querySelector(`[data-hoa-don-list-status]`),items:t?.querySelector(`[data-hoa-don-list-items]`),pager:t?.querySelector(`[data-hoa-don-list-pager]`)};if(!n.shell||!n.tabs||!n.transferNotice||!n.status||!n.items||!n.pager)throw Error(`Không dựng được vùng danh sách Hóa đơn.`);return n}function K(){Y(e,{headerMode:`search`,placeholder:`Tìm mã đơn hoặc tên khách hàng.`,searchValue:A.snapshot().draft,showRightAction:!0,rightIcon:`↻`,rightLabel:`Tải lại`,onSearchInput(e){A.input(e)},onSearch(e){return A.submit(e)},onRightAction:()=>A.submit(A.snapshot().draft,{force:!0,reason:`refresh`}),bottomActions:[]});let n=C.cards,r=C.activeTab===`thong-ke`?null:w.snapshot(),i=rt(C.activeTab),a=C.activeTab===`thong-ke`?`Thống kê sẽ được cấu hình sau.`:`Chưa có hóa đơn ở tab `+i.label,o=qe();o.tabs.innerHTML=mt(C.activeTab),o.transferNotice.innerHTML=Ae(),o.status.innerHTML=`
        ${C.error?`
              <div
                class="hoa-don-message is-error"
              >
                ${t(C.error)}
              </div>
            `:``}

        ${C.worklistPhase===`refreshing`?`
              <div class="hoa-don-message">
                <span>
                  Đang cập nhật danh sách...
                </span>
              </div>
            `:``}
      `,o.items.innerHTML=n.length?n.map(e=>_t(e,C.activeTab)).join(``):C.worklistPhase===`loading`?`
              <div class="hoa-don-empty">
                <strong>
                  Đang tải danh sách...
                </strong>
              </div>
            `:`
              <div class="hoa-don-empty">
                <strong>
                  ${t(a)}
                </strong>
              </div>
            `,o.pager.innerHTML=r?ae({pageNumber:r.pageNumber,canGoPrevious:r.canGoPrevious,hasMore:r.hasMore,loading:r.loading}):``}function Je(){let e=`HOA_DON_HOAN_DON`;return ct(C.detail).has(e)?[{key:e,label:J(e),variant:`danger`,disabled:C.busy,onClick:()=>zt({actionKey:e,invoiceId:C.detailId,source:`detail`,detail:C.detail})}]:[]}function q(){let t=C.evidenceViewerImages,n=t.length;n&&C.evidenceViewerIndex>=n&&(C.evidenceViewerIndex=0),Y(e,{headerMode:`title`,title:`Ảnh chứng từ`,showRightAction:!1,onBack:()=>_.back(),bottomActions:[]}),e.innerHTML=m({images:t,index:C.evidenceViewerIndex,title:`Ảnh chứng từ`}),e.querySelector(`[data-image-viewer-close]`)?.addEventListener(`click`,()=>_.back()),e.querySelector(`[data-image-viewer-prev]`)?.addEventListener(`click`,()=>{C.evidenceViewerIndex=(C.evidenceViewerIndex-1+n)%n,q()}),e.querySelector(`[data-image-viewer-next]`)?.addEventListener(`click`,()=>{C.evidenceViewerIndex=(C.evidenceViewerIndex+1)%n,q()})}async function Ye(e){let t=Array.isArray(e?.evidence)?e.evidence:[],n=t.map(e=>e?.storage_path).filter(Boolean);if(!n.length){O(`Chưa có ảnh chứng từ.`);return}if(C.busy)return;let r=String(e?.id_request??``).trim();``+r,C.busy=!0;let i=!1;try{let e=await Ne(n);C.evidenceViewerImages=e.map((e,n)=>{let r=t.find(t=>t?.storage_path===e.storagePath),i=String(r?.loai_chung_tu??``).trim().toUpperCase();return{url:e.url,title:(i===`XAC_NHAN_CHUYEN`?`Ảnh xác nhận chuyển `:`Ảnh yêu cầu chuyển `)+(n+1)}}),C.evidenceViewerIndex=0,i=C.evidenceViewerImages.length>0}catch(e){O(e?.message||`Không tải được ảnh chứng từ.`)}finally{C.busy=!1}i&&await _.open(`evidence-photos:`+r,q)}function Xe(){let t=C.deliveryViewerImages,n=t.length;n&&C.deliveryViewerIndex>=n&&(C.deliveryViewerIndex=0),Y(e,{headerMode:`title`,title:`Ảnh giao hàng`,showRightAction:!1,onBack:()=>_.back(),bottomActions:[]}),e.innerHTML=m({images:t,index:C.deliveryViewerIndex,title:`Ảnh giao hàng`}),e.querySelector(`[data-image-viewer-close]`)?.addEventListener(`click`,()=>_.back()),e.querySelector(`[data-image-viewer-prev]`)?.addEventListener(`click`,()=>{C.deliveryViewerIndex=(C.deliveryViewerIndex-1+n)%n,Xe()}),e.querySelector(`[data-image-viewer-next]`)?.addEventListener(`click`,()=>{C.deliveryViewerIndex=(C.deliveryViewerIndex+1)%n,Xe()})}async function et(){let e=(Array.isArray(C.detail?.delivery?.photos)?C.detail.delivery.photos:[]).map(e=>e?.storage_path).filter(Boolean);if(!e.length){O(`Đơn chưa có ảnh giao hàng.`);return}if(C.busy)return;`${C.detailId}`,C.busy=!0;let t=!1;try{let n=await ee(e);C.deliveryViewerImages=n.map((e,t)=>({url:e.url,title:`Ảnh giao hàng ${t+1}`})),C.deliveryViewerIndex=0,t=C.deliveryViewerImages.length>0}catch(e){O(e?.message||`Không tải được ảnh giao hàng.`)}finally{C.busy=!1}t&&await _.open(`delivery-photos:${C.detailId}`,Xe)}function tt(){return String(C.detail?.delivery?.id_phieu_giao_hang??C.detail?.delivery?.id??C.detail?.header?.id_phieu_giao_hang??``).trim()}function it(){let e=C.checkHistory??{};return(Array.isArray(e)?e:Array.isArray(e?.events)?e.events:Array.isArray(e?.history)?e.history:Array.isArray(e?.items)?e.items:[]).map(e=>({...e,time_text:e?.time_text||E(e?.created_at??e?.occurred_at??e?.event_at??e?.action_at??e?.updated_at)}))}function at(){Y(e,{headerMode:`title`,title:`Lịch sử kiểm hàng`,onBack:()=>_.back(),rightActions:[{key:`refresh`,icon:`↻`,label:`Tải lại`,dispatchRefresh:!1,onAction:lt}],bottomActions:[]}),e.innerHTML=`
        <section
          class="hoa-don-page hoa-don-detail-page"
        >
          ${c({events:it(),error:C.checkHistoryError})}
        </section>
      `}async function ot(){let e=tt();if(!e)return O(`Không xác định được phiếu giao hàng.`),``;if(C.busy)return``;let t=`hoa-don:check-history:`+e;if(!b.acquire(t))return``;C.busy=!0,C.checkHistoryError=``;try{C.checkHistory=await te(e)}catch(e){C.checkHistory=null,C.checkHistoryError=e?.message||`Không tải được lịch sử kiểm hàng.`,O(C.checkHistoryError)}finally{C.busy=!1,b.release(t)}return e}async function st(){let e=await ot();e&&await _.open(`invoice-check-history:${e}`,at)}async function lt(){await ot()&&at()}function dt(){let e=C.invoiceCheckContext?.products;return Array.isArray(e)?e:[]}async function vt(){let e=tt();if(!e)return O(`Không xác định được phiếu giao hàng.`),``;if(C.busy)return``;let t=`hoa-don:check-context:`+e;if(!b.acquire(t))return``;C.busy=!0,C.invoiceCheckError=``;try{C.invoiceCheckContext=await S(e)}catch(e){C.invoiceCheckContext=null,C.invoiceCheckError=e?.message||`Không tải được dữ liệu kiểm hàng.`,O(C.invoiceCheckError)}finally{C.busy=!1,b.release(t)}return e}async function yt(){let e=await vt();e&&await _.open(`invoice-check:${e}`,bt)}function bt(){Y(e,{headerMode:`title`,title:`Kiểm hàng`,onBack:()=>_.back(),rightActions:[{key:`check-history`,icon:`◷`,label:`Lịch sử kiểm hàng`,dispatchRefresh:!1,onAction:()=>st()},{key:`refresh`,icon:`↻`,label:`Tải lại`,dispatchRefresh:!1,onAction:async()=>{await vt()&&bt()}}],bottomActions:[]}),e.innerHTML=`
        <section class="hoa-don-page">
          ${x({products:dt(),error:C.invoiceCheckError,desktopActions:[]})}
        </section>
      `}async function xt(){if(!C.detailId||C.busy)return;let e=String(C.detail?.order?.id_don_hang??``).trim();if(!e){O(`Không xác định được ID đơn hàng.`);return}let t=`hoa-don:order-history:`+e;if(b.acquire(t)){C.busy=!0,C.orderHistory=null;try{C.orderHistory=await v(e)}catch(e){O(e?.message||`Không tải được lịch sử đơn hàng.`)}finally{C.busy=!1,b.release(t)}await _.open(`invoice-history:${e}`,St)}}function St(){let t=g(C.orderHistory??{});Y(e,{headerMode:`title`,title:`Lịch sử`,showRightAction:!1,onBack:()=>_.back(),bottomActions:[]}),e.innerHTML=`
        <section
          class="hoa-don-page hoa-don-detail-page"
        >
          ${s(t)}
        </section>
      `}async function Ct(){let e=(Array.isArray(C.detail?.settlement_rounds)?C.detail.settlement_rounds:[]).find(e=>String(e?.id_lan_doi_soat??``)===String(C.detailSettlementRoundId??``)),t=Array.isArray(e?.storage_paths)?e.storage_paths.map(e=>String(e??``).trim()).filter(Boolean):[];if(!t.length){O(`Lần tất toán chưa có ảnh chứng từ.`);return}if(C.busy)return;``+C.detailSettlementRoundId,C.busy=!0;let n=!1;try{let e=await Ne(t);C.evidenceViewerImages=e.map((e,t)=>({url:e.url,title:`Ảnh tất toán ${t+1}`})),C.evidenceViewerIndex=0,n=C.evidenceViewerImages.length>0}catch(e){O(e?.message||`Không tải được ảnh chứng từ.`)}finally{C.busy=!1}n&&await _.open(`settlement-evidence-photos:`+C.detailSettlementRoundId,q)}function wt(){Y(e,{headerMode:`title`,title:`Chi tiết tất toán`,showRightAction:!1,onBack:()=>_.back(),bottomActions:[]}),e.innerHTML=`
        <section
          class="hoa-don-page hoa-don-detail-page"
        >
          ${y(Ve(C.detail,C.detailSettlementRoundId))}
        </section>
      `,Et()}async function Tt(e,t){switch(e){case`HOA_DON_XEM_ANH_GIAO_HANG`:await et();break;case`HOA_DON_XEM_ANH_TAT_TOAN`:await Ct();break;case`HOA_DON_XEM_KIEM_HANG`:await yt();break;case`HOA_DON_XEM_LICH_SU`:await xt();break;case`HOA_DON_XEM_LAN_TAT_TOAN`:if(C.detailSettlementRoundId=String(t??``).trim(),!C.detailSettlementRoundId){O(`Không tìm thấy lần tất toán.`);break}await _.open(`invoice-settlement-round:`+C.detailSettlementRoundId,wt);break;default:break}}function Et(){e.querySelectorAll(`[data-copy-value]`).forEach(e=>{e.addEventListener(`click`,async t=>{t.preventDefault(),t.stopPropagation(),O(await f(e.dataset.copyValue)?`Đã copy`:`Không thể sao chép`)})}),e.querySelectorAll(`[data-record-detail-action]`).forEach(e=>{e.addEventListener(`click`,t=>{t.preventDefault(),t.stopPropagation();let n=String(e.getAttribute(`data-record-detail-action`)??``).trim().toUpperCase(),r=e.getAttribute(`data-record-detail-value`);n&&Tt(n,r)})})}function Dt(){let t=Be(C.detail);Y(e,{headerMode:`title`,title:`Chi tiết hóa đơn`,onBack:()=>_.back(),rightActions:[...(C.detail?.permission_mask?.fields??{}).history===!0?[ne(()=>Tt(`HOA_DON_XEM_LICH_SU`))]:[],{key:`refresh`,icon:`↻`,label:`Tải lại`,dispatchRefresh:!1,onAction:Ht}],bottomActions:C.detailReadOnly?[]:Je()}),e.innerHTML=`
        <section
          class="hoa-don-page hoa-don-detail-page"
        >
          ${y(t)}
        </section>
      `,Et()}function Ot(){let r=C.collectionCard,i=Z(r);if(!r||!i){_.back();return}let a=i?.requires_amount===!1,o=a?Number(i?.amount??0):0;Y(e,{headerMode:`title`,title:i?.button_label||`Xử lý tiền`,showRightAction:!1,onBack:()=>_.back(),bottomActions:[]}),e.innerHTML=`
        <section class="hoa-don-collection-page">
          <article class="hoa-don-collection-card">
            <h2>
              ${t(r?.order_code||`Đơn hàng`)}
            </h2>

            <p>
              ${t(i?.summary_label||`Khoản tiền cần xử lý`)}
            </p>

            <strong>
              ${t(X(i?.amount))}
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
                value="${n(pt(o))}"
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
              ${t(X(i?.amount))}
            </small>
          </div>

          <button
            type="button"
            class="hoa-don-collection-submit"
            data-invoice-collection-submit
          >
            ${t(i?.button_label||`Xác nhận`)}
          </button>
        </section>
      `;let s=e.querySelector(`[data-invoice-money-input]`),c=e.querySelector(`[data-invoice-collection-full-amount]`);if(s&&!a){let e=Math.max(0,Math.trunc(Number(i?.amount??0))),t=()=>{let t=Math.min(e,ft(s.value));s.value=pt(t),c&&(c.checked=e>0&&t===e)};s.addEventListener(`input`,t),c?.addEventListener(`change`,()=>{c.checked&&(s.value=pt(e),s.dispatchEvent(new Event(`input`,{bubbles:!0})),s.focus())}),t(),s.focus()}e.querySelector(`[data-invoice-collection-submit]`)?.addEventListener(`click`,()=>{At()})}async function kt(e){!Z(e)?.action_key||C.busy||(C.collectionCard=e,await _.open(`collection:`+String(e?.entity_id??``),Ot))}async function At(){let t=C.collectionCard,n=Z(t);if(!t||!n?.action_key||C.busy)return;let r=e.querySelector(`[data-invoice-money-input]`),i=n?.requires_amount===!1?Number(n?.amount??0):ft(r?.value),o=Number(n?.amount??0);if(!Number.isSafeInteger(i)||i<=0||Number.isSafeInteger(o)&&o>0&&i>o){O(`Số tiền không hợp lệ.`);return}let s=ut(n?.action_key);if(!s){O(`Nghiệp vụ thu tiền không hợp lệ.`);return}let c=`hoa-don-collection:`+String(t?.entity_id??``);if(!b.acquire(c))return;let l=!1;C.busy=!0;try{let e=await fe({requestKey:a(`hoa-don-thu-tien`),invoiceId:t.entity_id,rowVersion:t.row_version,mode:s,amount:i,cashFlowId:n?.id_dong_tien??null}),r=String(t?.entity_id??``),o=C.cards.findIndex(e=>String(e?.entity_id??``)===r),c=e?.card??e?.invoice_card??e?.data?.card??null;if(o>=0&&c&&typeof c==`object`)C.cards[o]=c;else if(o>=0){let e=C.cards[o],t=e?.money&&typeof e.money==`object`?e.money:{},r=Number(t?.collected??0),a=Number(t?.remaining??0),s=Number.isFinite(r)?Math.max(0,r):0,c=Number(t?.total??s+(Number.isFinite(a)?Math.max(0,a):i)),l=Number.isFinite(c)&&c>0?c:s+i,u=Math.min(l,s+i),d=Math.max(0,l-u);C.cards[o]={...e,state:d===0?`DA_THANH_TOAN`:`THANH_TOAN_MOT_PHAN`,row_version:Number(e?.row_version??0)+1,updated_at:new Date().toISOString(),collection_task:null,roles:{...e?.roles??{},collector_id:n?.holder_id??e?.roles?.collector_id??null,collector_name:n?.holder_name??e?.roles?.collector_name??e?.roles?.assignee_name??e?.roles?.creator_name??null},money:{...t,collected:u,remaining:d}}}C.activeTab=`dang-xu-ly`,C.collectionCard=null,C.busy=!1,await _.back(),K(),O(`Đã cập nhật dòng tiền.`),l=!0}catch(e){O(e?.message||`Không cập nhật được dòng tiền.`)}finally{C.busy=!1,b.release(c),l&&queueMicrotask(()=>{k(t?.entity_id).then(()=>{T()&&_.currentKey()===`list`&&K()})})}}function jt(e){return e===`HOA_DON_CHUYEN_TIEN`||e===`HOA_DON_YEU_CAU_CHUYEN_TIEN`||e===`HOA_DON_TAT_TOAN_CONG_TY`||e===`HOA_DON_CHUYEN_QUYEN_THU`}function Mt(){return C.actionEvidenceSequence=Number(C.actionEvidenceSequence??0)+1,`invoice-evidence-${Date.now()}-`+C.actionEvidenceSequence}function Q(){C.actionEvidencePhotos.forEach(e=>{e?.previewUrl&&URL.revokeObjectURL(e.previewUrl)}),C.actionEvidencePhotos=[]}async function Nt(){Q(),C.actionEvidenceSequence=0,await _.back()}function Pt(){let t=e.querySelector(`[data-invoice-settlement-main]`);return t?{note:String(e.querySelector(`[data-invoice-action-note]`)?.value??``),labor:String(t.querySelector(`[data-invoice-settlement-labor]`)?.value??``),lines:Array.from(t.querySelectorAll(`[data-invoice-settlement-row]`)).map(e=>{let t=e.querySelector(`[data-invoice-product-quantity]`);return{id:String(t?.getAttribute(`data-invoice-product-id`)??``).trim(),quantity:String(t?.value??``),price:String(e.querySelector(`[data-invoice-product-price]`)?.value??``)}})}:null}function Ft(t){if(!t)return;let n=e.querySelector(`[data-invoice-settlement-main]`);if(!n)return;let r=e.querySelector(`[data-invoice-action-note]`);r&&(r.value=t.note??``);let i=n.querySelector(`[data-invoice-settlement-labor]`);i&&(i.value=t.labor??``,i.dispatchEvent(new Event(`input`,{bubbles:!0})));let a=new Map((Array.isArray(t.lines)?t.lines:[]).filter(e=>e?.id).map(e=>[e.id,e]));n.querySelectorAll(`[data-invoice-settlement-row]`).forEach(e=>{let t=e.querySelector(`[data-invoice-product-quantity]`),n=String(t?.getAttribute(`data-invoice-product-id`)??``).trim(),r=a.get(n);if(!r)return;t&&(t.value=r.quantity);let i=e.querySelector(`[data-invoice-product-price]`);i&&(i.value=r.price,i.dispatchEvent(new Event(`input`,{bubbles:!0})))})}function It(e){let t=C.transferConfirmRequest?null:Pt(),n=Array.from(e??[]).filter(e=>String(e?.type??``).startsWith(`image/`));if(!n.length){O(`Vui lòng chọn tệp ảnh hợp lệ.`);return}let r=Math.max(0,5-C.actionEvidencePhotos.length),i=n.slice(0,r);C.actionEvidencePhotos=[...C.actionEvidencePhotos,...i.map(e=>({id:Mt(),file:e,name:e.name,previewUrl:URL.createObjectURL(e)}))],n.length>i.length&&O(`Chỉ được chọn tối đa 5 ảnh.`),C.transferConfirmRequest?Le():(Rt(),Ft(t))}function Lt(e){let t=C.transferConfirmRequest?null:Pt(),n=String(e??``),r=C.actionEvidencePhotos.find(e=>e.id===n);r?.previewUrl&&URL.revokeObjectURL(r.previewUrl),C.actionEvidencePhotos=C.actionEvidencePhotos.filter(e=>e.id!==n),C.transferConfirmRequest?Le():(Rt(),Ft(t))}function Rt({context:t=null}={}){let n=I(t)?t:null;if(n&&Oe(n),!C.actionKey||!C.actionDetail){_.back();return}Y(e,{headerMode:`title`,title:J(C.actionKey),showRightAction:!1,onBack:Nt,bottomActions:[{key:`invoice-action-submit`,label:C.actionKey===`HOA_DON_YEU_CAU_CHUYEN_TIEN`?`Xác nhận`:J(C.actionKey),variant:C.actionKey===`HOA_DON_HOAN_DON`?`danger`:`primary`,disabled:C.busy,onClick:Bt}]}),e.innerHTML=Ze({actionKey:C.actionKey,detail:{...C.actionDetail,pendingTransfer:C.transferRequests.find(e=>String(e?.id_hoa_don??``).trim()===String(C.actionDetail?.header?.id_hoa_don??C.detailId??``).trim())??null},employees:C.actionEmployees,currentEmployeeId:C.actionCurrentEmployeeId,photos:C.actionEvidencePhotos}),Qe(e,C.actionKey,C.actionDetail),n&&(Ft(n.draft),e.scrollTop=Number(n.scrollTop??0));let r=e.querySelector(`[data-photo-picker-input]`);r?.addEventListener(`change`,()=>{It(r.files),r.value=``}),e.querySelectorAll(`[data-photo-picker-remove]`).forEach(e=>{e.addEventListener(`click`,()=>{Lt(e.dataset.photoId)})}),e.querySelector(`[data-invoice-settlement-request-open]`)?.addEventListener(`click`,()=>{let e=String(C.actionDetail?.header?.id_hoa_don??C.detailId??``).trim();if(!e){O(`Không xác định được Hóa đơn.`);return}let t=_.currentContext();De(t,Pt()),zt({actionKey:`HOA_DON_YEU_CAU_CHUYEN_TIEN`,invoiceId:e,source:C.actionSource??`list`,detail:C.actionDetail,authorizationSource:C.actionDetail,parentContext:t})}),e.querySelector(`[data-invoice-action-submit]`)?.addEventListener(`click`,()=>{Bt()})}async function zt({actionKey:e,invoiceId:t,source:n=`list`,detail:r=null,authorizationSource:i=null,parentContext:a=null}={}){let o=String(e??``).trim().toUpperCase(),s=String(t??``).trim();if(!(!o||!s||C.busy)){``+o+s,C.busy=!0;try{let e=r??await de(s);if(!ct(i??e).has(o))throw Error(`Thao tác không còn khả dụng. Hãy tải lại Hóa đơn.`);let t=[],c=``;if(jt(o)){let e=await be(s);t=Array.isArray(e?.employees)?e.employees:[],c=String(e?.current_employee_id??``).trim()}let l=Ee({actionKey:o,detail:e,employees:t,currentEmployeeId:c,source:n,parentContext:a});C.busy=!1,await _.open(`invoice-action:`+o+`:`+s,Rt,l)}catch(e){O(e?.message||`Không mở được thao tác Hóa đơn.`)}finally{C.busy=!1}}}async function Bt(){if(C.busy||!C.actionKey||!C.actionDetail)return;if(C.actionKey===`HOA_DON_TAT_TOAN_CONG_TY`){let t=e.querySelector(`[data-invoice-settlement-main]`),n=Number(t?.getAttribute(`data-invoice-settlement-available`)??0),r=Array.from(e.querySelectorAll(`[data-invoice-settlement-row]`)).reduce((e,t)=>e+Number(String(t.querySelector(`[data-invoice-product-quantity]`)?.value??`0`).replace(/\D+/g,``))*Number(String(t.querySelector(`[data-invoice-product-price]`)?.value??`0`).replace(/\D+/g,``)),0);if(Number.isFinite(n)&&r>n){O(`Tạm tính vượt số dư đang giữ `+new Intl.NumberFormat(`vi-VN`).format(r-n)+` đ.`);return}}let t;try{t=$e(e,C.actionKey)}catch(e){O(e?.message||`Dữ liệu thao tác không hợp lệ.`);return}let n=C.actionDetail?.header??{},r=String(n?.id_hoa_don??C.detailId??``).trim(),i=Number(n?.row_version);if(!r||!Number.isSafeInteger(i)||i<1){O(`Phiên bản Hóa đơn không hợp lệ. Hãy tải lại.`);return}if((C.actionKey===`HOA_DON_CHUYEN_TIEN`||C.actionKey===`HOA_DON_CHUYEN_QUYEN_THU`)&&!t.receiverId){O(`Hãy chọn nhân viên nhận.`);return}if(C.actionKey===`HOA_DON_YEU_CAU_CHUYEN_TIEN`&&!t.receiverId){O(`Hãy chọn người đang giữ tiền.`);return}if(C.actionKey===`HOA_DON_CHUYEN_TIEN`){let e=Number(C.actionDetail?.actor_balance?.available??0);if(!Number.isSafeInteger(t.amount)||t.amount<=0||Number.isFinite(e)&&e>0&&t.amount>e){O(`Số tiền chuyển không hợp lệ.`);return}}if(C.actionKey===`HOA_DON_YEU_CAU_CHUYEN_TIEN`){let e=C.actionEmployees.find(e=>String(e?.id_nhan_vien??``).trim()===t.receiverId),n=Number(e?.so_du_kha_dung??0);if(!Number.isSafeInteger(n)||n<=0||!Number.isSafeInteger(t.amount)||t.amount<=0||t.amount>n){O(`Số tiền yêu cầu vượt quá số dư người đang giữ.`);return}}if(C.actionKey===`HOA_DON_TAT_TOAN_CONG_TY`&&!t.lines.length){O(`Hãy nhập số lượng sản phẩm cần tất toán.`);return}if(C.actionKey===`HOA_DON_HOAN_DON`){if(!t.reason){O(`Hãy nhập lý do hoàn đơn.`);return}if(!t.lines.length){O(`Hãy nhập số lượng sản phẩm cần hoàn.`);return}}let o=C.actionKey,s=C.actionSource,c=o===`HOA_DON_CHUYEN_TIEN`||o===`HOA_DON_YEU_CAU_CHUYEN_TIEN`||o===`HOA_DON_CHUYEN_QUYEN_THU`,l=`hoa-don-action-submit:`+o+`:`+r;if(b.acquire(l)){C.busy=!0;try{switch(o){case`HOA_DON_CHUYEN_TIEN`:await xe({requestKey:a(`hoa-don-chuyen-tien`),invoiceId:r,rowVersion:i,receiverId:t.receiverId,amount:t.amount});break;case`HOA_DON_YEU_CAU_CHUYEN_TIEN`:await Se({requestKey:a(`hoa-don-yeu-cau-chuyen-tien`),invoiceId:r,rowVersion:i,holderId:t.receiverId,amount:t.amount,note:t.note});break;case`HOA_DON_CHUYEN_QUYEN_THU`:await Ce({requestKey:a(`hoa-don-chuyen-quyen-thu`),invoiceId:r,rowVersion:i,receiverId:t.receiverId});break;case`HOA_DON_TAT_TOAN_CONG_TY`:{let e=[];try{e=await Me({invoiceId:r,stage:`tat-toan-cong-ty`,files:C.actionEvidencePhotos.map(e=>e.file)}),await we({requestKey:a(`hoa-don-tat-toan-cong-ty`),invoiceId:r,rowVersion:i,laborAmount:t.laborAmount,lines:t.lines,note:t.note,storagePaths:e})}catch(t){throw e.length&&await je(e).catch(()=>{}),t}break}case`HOA_DON_HOAN_DON`:await Te({requestKey:a(`hoa-don-hoan-don`),invoiceId:r,rowVersion:i,reason:t.reason,lines:t.lines});break;default:throw Error(`Nghiệp vụ Hóa đơn chưa được hỗ trợ.`)}c&&(C.transferRequests=[],C.transferRequestsLoaded=!1,C.transferError=``),Q(),C.actionEvidenceSequence=0,C.actionKey=``,C.actionDetail=null,C.actionEmployees=[],C.actionCurrentEmployeeId=``,C.busy=!1,c&&await B(),await k(r),c?await _.reset(`list`,K):(await _.back(),s===`detail`&&await Ht()),O(`Đã `+J(o).toLowerCase()+`.`)}catch(e){O(e?.message||`Không thực hiện được thao tác Hóa đơn.`)}finally{C.busy=!1,b.release(l)}}}async function $(e={}){if(!T())return;let t=e?.silent===!0,n=e?.force===!0||t;String(e?.reason??`initial`);let r=e?.pageAction===`next`||e?.pageAction===`previous`?e.pageAction:``;if(e?.allowWhileBusy!==!0&&(t&&C.worklistBusy||!t&&C.busy&&!C.worklistBusy))return;let a=++C.worklistRequestId,o=C.activeTab;w.setTab(o),w.setSearch(C.search);let s=w.snapshot();if(o===`thong-ke`){C.worklistBusy=!1,C.worklistPhase=`ready`,C.cards=[],C.error=``;let e=_.currentKey();e===null?await _.reset(`list`,K):e===`list`&&K(),t||i?.markReady?.({state:`ready`,tabKey:o,itemCount:0,transferCount:C.pendingTransferCount});return}C.worklistBusy=!0,C.error=``,C.cards=s?.loaded===!0&&Array.isArray(s?.items)?s.items:[],C.error=s?.error||``,C.worklistPhase=s?.loaded===!0?n?`refreshing`:`ready`:`loading`;let c=_.currentKey();c===null?await _.reset(`list`,K):c===`list`&&K();let l=!0;try{let e=r===`next`?await w.next():r===`previous`?w.previous():n?await w.refresh():await w.load();if(l=e?.stale!==!0,!l||a!==C.worklistRequestId||o!==C.activeTab||!T())return;C.pendingTransferCount=Math.max(0,Number(e?.meta?.pendingTransferCount??C.pendingTransferCount)||0),C.cards=Array.isArray(e?.items)?e.items:[],C.error=e?.error||``,C.worklistPhase=C.error?`error`:`ready`;let s=_.currentKey();s===null?await _.reset(`list`,K):s===`list`&&K(),t||i?.markReady?.({state:`ready`,tabKey:o,itemCount:C.cards.length,transferCount:C.pendingTransferCount,pageNumber:e?.pageNumber??1,hasMore:e?.hasMore===!0})}catch(e){if(a!==C.worklistRequestId||o!==C.activeTab||!T())return;let n=e?.message||`Không tải được danh sách Hóa đơn.`,r=C.cards.length>0;C.error=n,C.worklistPhase=r?`ready`:`error`;let s=_.currentKey();s===null?await _.reset(`list`,K):s===`list`&&K(),(t||r)&&O(n),t||i?.markReady?.({state:`error`,tabKey:o,itemCount:C.cards.length,transferCount:C.pendingTransferCount,message:C.error})}finally{l&&a===C.worklistRequestId&&(C.worklistBusy=!1)}}async function Vt(e,{readOnly:t=!1}={}){let n=String(e??``).trim();if(!(!n||C.busy)){C.detailReadOnly=t===!0,C.busy=!0,C.error=``;try{C.detailId=n,C.detail=await de(n),C.busy=!1,await _.open(`detail:${n}`,Dt)}catch(e){C.error=e?.message||`Không tải được chi tiết Hóa đơn.`,K()}finally{C.busy=!1}}}async function Ht(){if(!(!C.detailId||C.busy)){C.busy=!0;try{C.detail=await de(C.detailId),C.busy=!1,Dt()}catch(e){O(e?.message||`Không cập nhật được chi tiết Hóa đơn.`)}finally{C.busy=!1}}}$()}};export{vt as default};