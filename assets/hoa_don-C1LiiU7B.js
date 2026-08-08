import{i as e,o as t}from"./realtimeImpactRegistry-uvlr93CK.js";import{c as n,n as r,o as i,r as a,s as o,t as s}from"./screenStack-BTwISuHL.js";import{B as c,D as l,E as u,F as d,G as f,H as p,I as m,K as h,L as ee,N as g,O as _,P as v,R as y,U as b,V as te,W as ne,j as re,l as ie,n as x,o as S,r as ae,t as C,u as oe,z as se}from"./deliveryCheckSummary-CsMY31HM.js";import{n as w,r as T,t as ce}from"./actionLock-BTZKYVnA.js";import{t as E}from"./toast-DvZC7wAk.js";async function le({search:e=null,statuses:t=null,tabKey:n=null,cursor:r=null,limit:a=10,currentEmployeeId:o=``}={}){let s=r&&typeof r==`object`&&!Array.isArray(r)?{updated_at:String(r.updated_at??``).trim()||null,id:String(r.id??``).trim()||null}:null,c=Number.isSafeInteger(Number(a))?Math.min(100,Math.max(1,Number(a))):10,l=await i(`rpc_get_hoa_don_worklist`,{p_search:e||null,p_status:Array.isArray(t)&&t.length?t:null,p_tab_key:String(n??``).trim()||null,p_cursor_updated_at:s?.updated_at??null,p_cursor_id:s?.id??null,p_limit:c},`Không tải được danh sách Hóa đơn`),u=String(l?.current_employee_id??o??``).trim(),d=Array.isArray(l?.cards)?l.cards:[];return{...l,current_employee_id:u,cards:d.map(e=>({...e,current_employee_id:String(e?.current_employee_id??u??``).trim()}))}}async function ue(e){let t=[...new Set((Array.isArray(e)?e:[e]).map(e=>String(e??``).trim()).filter(Boolean))];if(!t.length)return[];if(t.length>20)throw RangeError(`Chỉ được đọc tối đa 20 hóa đơn mỗi lần.`);let n=await i(`rpc_get_hoa_don_cards_by_ids`,{p_ids:t},`Không tải được card Hóa đơn`);return Array.isArray(n?.cards)?n.cards:[]}async function de(e){let t=String(e??``).trim();if(!t)throw TypeError(`Thiếu ID hóa đơn.`);let n=await i(`rpc_get_hoa_don_detail`,{p_id_hoa_don:t},`Không tải được chi tiết Hóa đơn`);try{let e=await i(`rpc_get_hoa_don_settlement_context`,{p_id_hoa_don:t},`Không tải được dữ liệu tất toán`);return{...n,settlement_context:e,settlement_products:Array.isArray(e?.products)?e.products:[]}}catch{return n}}function fe({requestKey:e,invoiceId:t,rowVersion:n,mode:r,amount:a=null,cashFlowId:o=null}={}){let s=String(e??``).trim(),c=String(t??``).trim(),l=String(r??``).trim().toUpperCase(),u=Number(n);if(!s||!c||!l||!Number.isSafeInteger(u)||u<1)throw TypeError(`Dữ liệu xác nhận dòng tiền không hợp lệ.`);let d={id_hoa_don:c,expected_row_version:u,mode:l};if(o&&(d.id_dong_tien=String(o).trim()),a!=null){let e=Number(a);if(!Number.isSafeInteger(e)||e<=0)throw TypeError(`Số tiền xác nhận không hợp lệ.`);d.so_tien=e}return i(`rpc_thu_tien_hoa_don`,{p_request_key:s,p_payload:d},`Không cập nhật được dòng tiền Hóa đơn`)}function D({requestKey:e,invoiceId:t,rowVersion:n}={}){let r=String(e??``).trim(),i=String(t??``).trim(),a=Number(n);if(!r||!i||!Number.isSafeInteger(a)||a<1)throw TypeError(`Dữ liệu thao tác Hóa đơn không hợp lệ.`);return{requestKey:r,invoiceId:i,rowVersion:a}}function O(e){let t=String(e??``).trim();if(!t)throw TypeError(`Thiếu nhân viên nhận.`);return t}function k(e){let t=Number(e);if(!Number.isSafeInteger(t)||t<=0)throw TypeError(`Số tiền không hợp lệ.`);return t}function pe(e){let t=(Array.isArray(e)?e:[]).map(e=>{let t={id_san_pham:String(e?.id_san_pham??``).trim(),so_luong:Number(e?.so_luong??0)};return e?.don_gia_tat_toan!==void 0&&e?.don_gia_tat_toan!==null&&(t.don_gia_tat_toan=Number(e.don_gia_tat_toan)),t}).filter(e=>e.id_san_pham&&Number.isSafeInteger(e.so_luong)&&e.so_luong>0&&(e.don_gia_tat_toan===void 0||Number.isSafeInteger(e.don_gia_tat_toan)&&e.don_gia_tat_toan>=0));if(!t.length)throw TypeError(`Thiếu sản phẩm cần xử lý.`);return t}function me(){return i(`rpc_get_hoa_don_transfer_requests`,{},`Không tải được yêu cầu chuyển Hóa đơn`)}function he({transferId:e,accept:t,requestKey:n,storagePaths:r=[]}={}){let a=String(e??``).trim(),o=String(n??``).trim(),s=t===!0,c=Array.isArray(r)?r.map(e=>String(e??``).trim()).filter(Boolean):[];if(!a||!o)throw TypeError(`Dữ liệu xác nhận chuyển tiền không hợp lệ.`);if(c.length>5)throw TypeError(`Chỉ được chọn tối đa 5 ảnh chứng từ.`);if(!s&&c.length)throw TypeError(`Không được đính kèm ảnh xác nhận khi từ chối chuyển tiền.`);return i(`rpc_xac_nhan_chuyen_tien_noi_bo`,{p_request_key:o,p_payload:{id_chuyen_tien_noi_bo:a,accept:s,storage_paths:c}},s?`Không xác nhận được chuyển tiền`:`Không từ chối được chuyển tiền`)}function ge({handoverId:e,rowVersion:t,accept:n,requestKey:r,handoverType:a=`THU_TIEN`}={}){let o=String(e??``).trim(),s=String(r??``).trim(),c=Number(t),l=String(a??``).trim().toUpperCase();if(!o||!s||!Number.isSafeInteger(c)||c<1||![`THU_TIEN`,`XU_LY_TAT_TOAN`].includes(l))throw TypeError(`Dữ liệu xác nhận bàn giao không hợp lệ.`);return i(`rpc_xac_nhan_ban_giao_hoa_don`,{p_request_key:s,p_payload:{id_ban_giao:o,expected_row_version:c,loai_ban_giao:l,accept:n===!0}},n===!0?`Không xác nhận được bàn giao`:`Không từ chối được bàn giao`)}function _e({transferId:e,requestKey:t}={}){let n=String(e??``).trim(),r=String(t??``).trim();if(!n||!r)throw TypeError(`Dữ liệu hủy chuyển tiền không hợp lệ.`);return i(`rpc_huy_chuyen_tien_noi_bo`,{p_request_key:r,p_payload:{id_chuyen_tien_noi_bo:n}},`Không hủy được chuyển tiền`)}function ve({handoverId:e,rowVersion:t,requestKey:n,handoverType:r=`THU_TIEN`}={}){let a=String(e??``).trim(),o=String(n??``).trim(),s=Number(t),c=String(r??``).trim().toUpperCase();if(!a||!o||!Number.isSafeInteger(s)||s<1||![`THU_TIEN`,`XU_LY_TAT_TOAN`].includes(c))throw TypeError(`Dữ liệu hủy bàn giao không hợp lệ.`);return i(`rpc_huy_ban_giao_hoa_don`,{p_request_key:o,p_payload:{id_ban_giao:a,expected_row_version:s,loai_ban_giao:c}},`Không hủy được bàn giao`)}function ye(e){let t=String(e??``).trim();if(!t)throw TypeError(`Thiếu Hóa đơn cần lấy danh sách nhân viên.`);return i(`rpc_get_hoa_don_transfer_candidates`,{p_id_hoa_don:t},`Không tải được danh sách nhân viên nhận chuyển`)}function be({requestKey:e,invoiceId:t,rowVersion:n,receiverId:r,amount:a}={}){let o=D({requestKey:e,invoiceId:t,rowVersion:n});return i(`rpc_tao_chuyen_tien_noi_bo`,{p_request_key:o.requestKey,p_payload:{id_hoa_don:o.invoiceId,expected_row_version:o.rowVersion,id_nguoi_nhan:O(r),so_tien:k(a)}},`Không tạo được chuyển tiền nội bộ`)}function xe({requestKey:e,invoiceId:t,rowVersion:n,holderId:r,amount:a,note:o=``}={}){let s=D({requestKey:e,invoiceId:t,rowVersion:n});return i(`rpc_yeu_cau_chuyen_tien_noi_bo`,{p_request_key:s.requestKey,p_payload:{id_hoa_don:s.invoiceId,expected_row_version:s.rowVersion,id_nguoi_chuyen:O(r),so_tien:k(a),ghi_chu:String(o??``).trim()||null}},`Không tạo được yêu cầu chuyển tiền nội bộ`)}function Se({requestKey:e,invoiceId:t,rowVersion:n,receiverId:r}={}){let a=D({requestKey:e,invoiceId:t,rowVersion:n});return i(`rpc_tao_ban_giao_hoa_don`,{p_request_key:a.requestKey,p_payload:{id_hoa_don:a.invoiceId,expected_row_version:a.rowVersion,id_nguoi_nhan:O(r),loai_ban_giao:`THU_TIEN`}},`Không chuyển được quyền thu tiền`)}function Ce({requestKey:e,invoiceId:t,rowVersion:n,laborAmount:r=0,lines:a,note:o=``,storagePaths:s=[]}={}){let c=D({requestKey:e,invoiceId:t,rowVersion:n}),l=Number(r??0),u=Array.isArray(s)?s.map(e=>String(e??``).trim()).filter(Boolean):[];if(!Number.isSafeInteger(l)||l<0)throw TypeError(`Tiền công thực tế không hợp lệ.`);if(u.length>5)throw TypeError(`Chỉ được chọn tối đa 5 ảnh xác nhận.`);return i(`rpc_tat_toan_cong_ty`,{p_request_key:c.requestKey,p_payload:{id_hoa_don:c.invoiceId,expected_row_version:c.rowVersion,tien_cong_thuc_te:l,lines:pe(a),ghi_chu:String(o??``).trim()||null,storage_paths:u}},`Không tất toán được Hóa đơn`)}function we({requestKey:e,invoiceId:t,rowVersion:n,reason:r,lines:a}={}){let o=D({requestKey:e,invoiceId:t,rowVersion:n}),s=String(r??``).trim();if(!s)throw TypeError(`Thiếu lý do hoàn đơn.`);let c=pe(a);return i(`rpc_tao_phieu_hoan_don`,{p_request_key:o.requestKey,p_payload:{id_hoa_don:o.invoiceId,expected_row_version:o.rowVersion,ly_do:s,lines:c}},`Không tạo được phiếu hoàn đơn`)}var A=`kangaroo-evidence`,j=5,M=new Set([`yeu-cau-chuyen`,`xac-nhan-chuyen`,`tat-toan-cong-ty`]);function Te(e){let t=String(e??``).trim();if(!t)throw TypeError(`Thiếu id Hóa đơn.`);return t}function Ee(e){let t=String(e??``).trim();if(!M.has(t))throw TypeError(`Loại ảnh chứng từ không hợp lệ.`);return t}function N(){return globalThis.crypto?.randomUUID?globalThis.crypto.randomUUID():`${Date.now()}-`+Math.random().toString(16).slice(2)}async function De(){let{data:e,error:n}=await t.auth.getUser();if(n)throw n;let r=String(e?.user?.id??``);if(!r)throw Error(`Phiên đăng nhập không hợp lệ.`);return r}async function Oe(e){let n=Array.isArray(e)?e.filter(Boolean):[];if(!n.length)return;let{error:r}=await t.storage.from(A).remove(n);if(r)throw r}async function ke({invoiceId:e,stage:n,files:r}){let i=Te(e),a=Ee(n),o=Array.isArray(r)?r:[];if(!o.length)return[];if(o.length>j)throw TypeError(`Chỉ được chọn tối đa ${j} ảnh.`);let s=await De(),c=[];try{for(let e of o){let n=await S(e),r=[s,i,a,`${N()}.webp`].join(`/`),{error:o}=await t.storage.from(A).upload(r,n,{contentType:n.type,cacheControl:`3600`,upsert:!1});if(o)throw o;c.push(r)}return c}catch(e){throw c.length&&await Oe(c).catch(()=>{}),e}}async function Ae(e){let n=[...new Set((Array.isArray(e)?e:[]).map(e=>String(e??``).trim()).filter(Boolean))],r=[];for(let e of n){let{data:n,error:i}=await t.storage.from(A).createSignedUrl(e,600);if(i)throw i;n?.signedUrl&&r.push({storagePath:e,url:n.signedUrl})}return r}var je=Object.freeze({CHUA_THANH_TOAN:`Chưa thanh toán`,THANH_TOAN_MOT_PHAN:`Thanh toán một phần`,DA_THANH_TOAN:`Đã thanh toán`,CHO_THU_HO:`Chờ thu hộ`,CHUA_TAT_TOAN:`Chưa tất toán`,DANG_TAT_TOAN:`Đang tất toán`,TAT_TOAN_MOT_PHAN:`Tất toán một phần`,DA_TAT_TOAN:`Đã tất toán`,CHO_XAC_NHAN:`Chờ xác nhận`,DA_XAC_NHAN:`Đã xác nhận`,TU_CHOI:`Đã từ chối`,DA_TU_CHOI:`Đã từ chối`,DA_HUY:`Đã hủy`,ACTIVE:`Đang hiệu lực`,VOIDED:`Đã vô hiệu`,DANG_XU_LY:`Đang xử lý`,HOAN_TAT:`Hoàn tất`,NGUOI_TAO_DA_THU:`Người bán đã thu`,GIAO_XONG_THU_LUON:`Giao xong thu luôn`,THU_HO_COD:`Thu hộ COD`,NGUOI_BAN_TU_THU:`Người bán tự thu`,NGUYEN_VEN:`Nguyên vẹn`,DA_MO_HOP:`Đã mở hộp`,CAN_XLH:`Cần xử lý hàng`,HANG_LOI:`Hàng lỗi`,KHONG_NHAP_LAI:`Không nhập lại`});function P(e,t=``){let n=String(e??``).trim().toUpperCase();return n?(je[n]??t)||n.toLowerCase().split(`_`).filter(Boolean).map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(` `):t}Object.freeze({CHUA_THANH_TOAN:`Chưa thanh toán`,THANH_TOAN_MOT_PHAN:`Thanh toán một phần`,DA_THANH_TOAN:`Đã thanh toán`}),Object.freeze({CHUA_TAT_TOAN:`Chưa tất toán`,DANG_TAT_TOAN:`Đang tất toán`,DA_TAT_TOAN:`Đã tất toán`,DA_HUY:`Đã hủy tất toán`}),Object.freeze({NGUOI_TAO_DA_THU:`Người bán đã thu`,GIAO_XONG_THU_LUON:`Giao xong thu luôn`,THU_HO_COD:`Thu hộ COD`,NGUOI_BAN_TU_THU:`Người bán tự thu`}),Object.freeze({THU_KHACH:`Thu tiền khách`,THU_NO:`Thu nợ`,XAC_NHAN_COD:`Xác nhận COD`,CHUYEN_NOI_BO:`Chuyển tiền nội bộ`,TAT_TOAN:`Tất toán`,HOAN_TIEN:`Hoàn tiền`}),Object.freeze({HOA_DON_THU_TIEN:`đã thu tiền khách`,HOA_DON_CHUYEN_QUYEN_THU:`đã chuyển quyền thu tiền`,HOA_DON_CHUYEN_TIEN:`đã tạo chuyển tiền nội bộ`,HOA_DON_YEU_CAU_CHUYEN_TIEN:`đã yêu cầu chuyển tiền để tất toán`,HOA_DON_BAN_GIAO_XU_LY:`đã bàn giao xử lý tất toán`,HOA_DON_TAT_TOAN_CONG_TY:`đã tất toán công ty`,HOA_DON_HOAN_DON:`đã hoàn đơn`,HOA_DON_TAO_HOAN_DON:`đã tạo yêu cầu hoàn đơn`,HOA_DON_VOID_TAT_TOAN:`đã đảo tất toán`,HOA_DON_DAO_CHUYEN_TIEN:`đã đảo chuyển tiền nội bộ`});function F(e){return e!=null&&String(e).trim()!==``}function I(e,t=``){return F(e)?String(e).trim():t}function L(e){if(!F(e))return``;let t=Number(e);return Number.isFinite(t)?T(t):String(e)}function R(e){return F(e)?w(e,``):``}function z(e){return P(e,I(e))}function B(e){return P(e,I(e))}function Me(e){return P(e,I(e))}function Ne(e,t){return(Array.isArray(e?.products)?e.products:[]).map(e=>{let n=Number(e?.so_luong??e?.quantity??0),r=Number.isFinite(n)?n:0,i=e?.don_gia_ap_dung??e?.don_gia??e?.unit_price,a=e?.thanh_tien??e?.amount,o=`${r} sản phẩm`;return t&&F(i)&&(o=`${r} x `+L(i),F(a)&&(o+=` = ${L(a)}`)),{title:I(e?.ten_san_pham_snapshot)||I(e?.name)||I(e?.ma_san_pham_snapshot)||I(e?.model)||`Sản phẩm`,subtitle:o,variant:`product`,stacked:!0}})}function Pe(e){let t=Array.isArray(e?.money_events)?e.money_events:[],n=[...Array.isArray(e?.cash_flows)?e.cash_flows.filter(e=>e?.trang_thai_dong_tien===`DA_XAC_NHAN`&&!!e?.confirmed_at).map(e=>({id:e?.id_dong_tien,label:I(e?.ten_nguoi_giu_tien,`Nhân viên`)+` thu`,amount:e?.so_tien,occurred_at:e?.confirmed_at})):[],...Array.isArray(e?.transfers)?e.transfers.filter(e=>e?.trang_thai_chuyen===`DA_XAC_NHAN`&&!!e?.confirmed_at).map(e=>({id:e?.id_chuyen_tien_noi_bo,label:I(e?.ten_nguoi_chuyen,`Nhân viên`)+` chuyển `+I(e?.ten_nguoi_nhan,`nhân viên`),amount:e?.so_tien,occurred_at:e?.confirmed_at})):[],...Array.isArray(e?.settlement_rounds)?e.settlement_rounds.filter(e=>e?.trang_thai_lan===`ACTIVE`&&!e?.voided_at&&Number(e?.tong_so_tien??0)>0).map(e=>({id:e?.id_lan_doi_soat,label:I(e?.ten_nguoi_tat_toan,`Nhân viên`)+` tất toán`,amount:e?.tong_so_tien,occurred_at:e?.created_at})):[]],r=t.length?t:n,i=new Set;return r.map(e=>({id:I(e?.id_event??e?.id),label:I(e?.label,`Dòng tiền`),amount:e?.amount??e?.so_tien,occurredAt:e?.occurred_at??e?.confirmed_at})).sort((e,t)=>(Date.parse(e?.occurredAt??``)||0)-(Date.parse(t?.occurredAt??``)||0)).filter(e=>{let t=[e.id,e.label,String(e.amount??``),String(e.occurredAt??``)].join(`|`);return i.has(t)?!1:(i.add(t),!0)}).map(e=>({title:[e.label,F(e.amount)?L(e.amount).replace(/\s+(đ|₫)$/u,`$1`):``].filter(Boolean).join(` `),value:R(e.occurredAt)}))}function Fe(e){let t=e?.header??{},n=e?.order??{},r=e?.customer??{},i=e?.roles??{},a=e?.internal_reconciliation??null;a?.root,a?.labor,a?.profit;let o=e?.transfer_summary??null,s=e?.company_settlement??null,c=Array.isArray(e?.settlement_rounds)?e.settlement_rounds:[],l=e?.delivery??null,u=Array.isArray(l?.photos)?l.photos:[],d=l?.check??null,f=e?.permission_mask?.fields??{},p=Object.prototype.hasOwnProperty.call(f,`payment_summary`),m=f.HOA_DON_VIEW_MONEY===!0,h=I(e?.permission_mask?.profile).toUpperCase()===`TRANSFER_RECEIVER_PENDING`,ee=!p||f.customer===!0,g=p?f.product_price===!0:m,_=p?f.payment_summary===!0:m,v=p?f.settlement_summary===!0:m,y=p?f.money_flows===!0:m,b=!p||f.delivery_check===!0,te=!p||f.completion===!0,ne={title:`Thông tin đơn`,rows:[{label:`Mã đơn hàng`,value:I(n?.ma_don_hang),copyValue:n?.ma_don_hang},{label:`Người bán`,value:I(i?.creator_name)},h?{label:`Người giao`,value:I(i?.assignee_name)}:null,h?{label:`Ngày giao`,value:R(l?.completed_at??n?.completed_at)}:null,h?null:{label:`Hình thức thu tiền`,value:Me(n?.kieu_thu_tien)}].filter(e=>e&&F(e.value))},re={title:`Sản phẩm`,items:Ne(e,g)},ie=h?{title:`Thanh toán`,rows:[{label:`Trạng thái`,value:P(o?.status,I(o?.status))},{label:`Số tiền chuyển`,value:L(o?.amount),emphasis:!0},{label:`Thời gian`,value:R(o?.confirmed_at??o?.created_at)}].filter(e=>F(e.value))}:_?{title:`Thanh toán`,rows:[{label:`Trạng thái`,value:z(t?.state)},{label:`Tổng phải thu`,value:L(t?.total)},{label:`Đã thu khách`,value:L(t?.collected)},{label:`Đã hoàn khách`,value:L(t?.refunded)},{label:`Còn phải thu`,value:L(t?.remaining),emphasis:!0}].filter(e=>F(e.value))}:null,S=h?{title:`Tất toán công ty`,rows:[{label:`Trạng thái`,value:B(s?.trang_thai_tat_toan)||`Chưa tất toán`}]}:v&&(s||c.length)?{title:`Tất toán công ty`,rows:[{label:`Trạng thái`,value:B(s?.trang_thai_tat_toan)}].filter(e=>F(e.value)),items:c.map(e=>({title:I(e?.ma_lan_tat_toan??e?.display_code,`Lần tất toán`),subtitle:[L(e?.tong_so_tien),R(e?.created_at)].filter(Boolean).join(` · `),trailing:`›`,actionKey:`HOA_DON_XEM_LAN_TAT_TOAN`,actionValue:e?.id_lan_doi_soat}))}:null,ae=b?C({check:d,actionKey:`HOA_DON_XEM_KIEM_HANG`}):null,oe=te&&l?{title:`Ảnh hoàn thành`,rows:[{label:`Người giao`,value:I(i?.assignee_name)},{label:`Ngày giao`,value:R(l?.completed_at??n?.completed_at)},F(l?.completion_note)?{label:`Ghi chú`,value:I(l?.completion_note),multiline:!0}:null,u.length?{label:`Ảnh`,value:`Xem ${u.length} ảnh`,trailing:`›`,actionKey:`HOA_DON_XEM_ANH_GIAO_HANG`}:null].filter(e=>e&&F(e.value))}:null,se=Pe(e),w=[ne,re,ie,S],T=[ne,ee?x({customer:{...r,name:I(r?.name)||I(n?.ten_khach_hang_snapshot)},note:n?.note}):null,re,ie,S,ae,oe,y&&se.length?{title:`Dòng tiền`,items:se}:null];return{blocks:(h?w:T).filter(e=>e?Array.isArray(e.rows)&&e.rows.length>0||Array.isArray(e.items)&&e.items.length>0:!1),emptyText:`Chưa có dữ liệu hóa đơn.`}}function Ie(e,t){let n=(Array.isArray(e?.settlement_rounds)?e.settlement_rounds:[]).find(e=>String(e?.id_lan_doi_soat??``)===String(t??``));if(!n)return{blocks:[],emptyText:`Không tìm thấy lần tất toán.`};let r=Array.isArray(n?.details)?n.details:[],i=I(n?.trang_thai_lan).toUpperCase(),a=I(n?.ma_lan_tat_toan??n?.display_code,`Lần tất toán`),o=I(n?.ghi_chu),s=Array.isArray(n?.storage_paths)?n.storage_paths.map(e=>String(e??``).trim()).filter(Boolean):[];return{blocks:[{title:`Thông tin tất toán`,rows:[{label:`Mã tất toán`,value:a,copyValue:a},{label:`Người tất toán`,value:I(n?.ten_nguoi_tat_toan)},{label:`Tổng tiền`,value:L(n?.tong_so_tien)},{label:`Trạng thái`,value:i===`ACTIVE`?`Đang hiệu lực`:i===`VOIDED`?`Đã hủy`:P(n?.trang_thai_lan,``)},{label:`Thời gian`,value:R(n?.created_at)},F(o)?{label:`Ghi chú`,value:o,multiline:!0}:null,s.length?{label:`Ảnh chứng từ`,value:`Xem ${s.length} ảnh`,trailing:`›`,actionKey:`HOA_DON_XEM_ANH_TAT_TOAN`}:null].filter(e=>e&&F(e.value))},r.length?{title:`Sản phẩm tất toán`,items:r.map(e=>({title:I(e?.name,`Sản phẩm`),subtitle:I(e?.so_luong_tat_toan,`0`)+` x `+L(e?.don_gia_tat_toan_thuc_te)+` = `+L(e?.thanh_tien_tat_toan),variant:`product`,stacked:!0}))}:null].filter(Boolean),emptyText:`Lần tất toán chưa có chi tiết.`}}var V=Object.freeze({HOA_DON_CHUYEN_TIEN:`Chuyển nội bộ`,HOA_DON_YEU_CAU_CHUYEN_TIEN:`Yêu cầu chuyển tiền`,HOA_DON_CHUYEN_QUYEN_THU:`Chuyển đơn`,HOA_DON_TAT_TOAN_CONG_TY:`Tất toán`,HOA_DON_HOAN_DON:`Hoàn đơn`});function H(e){let t=Number(e??0);return Number.isFinite(t)?Math.max(0,t):0}function U(e){return Math.max(0,Math.trunc(H(e)))}function W(e){return`${new Intl.NumberFormat(`vi-VN`).format(H(e))} đ`}function G(e){return String(e??``).replace(/\D+/g,``)}function Le(e,t={}){return g({employees:e,...t})}function Re(e,t=``){let r=String(t??``).trim();return(Array.isArray(e)?e:[]).filter(e=>{let t=String(e?.id_nhan_vien??``).trim(),n=String(e?.trang_thai??``).trim().toUpperCase();return t&&t!==r&&n===`ACTIVE`&&H(e?.so_du_kha_dung)>0}).map(e=>{let t=String(e?.id_nhan_vien??``).trim(),r=String(e?.ten_nhan_vien??e?.ten_dang_nhap??`Nhân viên`).trim(),i=U(e?.so_du_kha_dung);return`
        <option
          value="${o(t)}"
          data-holder-available="${o(i)}"
        >
          ${n(`${r} - đang giữ ${W(i)}`)}
        </option>
      `}).join(``)}function ze(e){let t=e?.settlement_context?.products;return Array.isArray(t)&&t.length?t:Array.isArray(e?.settlement_products)&&e.settlement_products.length?e.settlement_products:Array.isArray(e?.products)?e.products:[]}function Be(e){return e?.is_current_employee?`Bạn`:String(e?.ten_nhan_vien??e?.ho_ten??e?.ten_dang_nhap??e?.name??`Nhân viên`).trim()}function Ve(e,t,n){let r=String(n??``).trim();return(Array.isArray(t)?t:[]).map(e=>{let t=String(e?.id_nhan_vien??e?.employee_id??e?.id??``).trim();return t?{...e,id_nhan_vien:t,ten_nhan_vien:e?.ten_nhan_vien??e?.employee_name??e?.name??`Nhân viên`,so_du_kha_dung:H(e?.so_du_kha_dung??e?.available_balance??e?.available),is_current_employee:!!(e?.is_current_employee??(r&&t===r))}:null}).filter(e=>e&&H(e?.so_du_kha_dung)!==0)}function K(e){let t=(Array.isArray(e)?e:[]).filter(e=>H(e?.so_du_kha_dung)>0);return t.length?t.map(e=>`
        <div class="hoa-don-settlement-holder-row">
          <span>
            ${n(Be(e))} đang giữ
          </span>

          <strong>
            ${n(W(e?.so_du_kha_dung))}
          </strong>
        </div>
      `).join(``):`
      <p class="hoa-don-settlement-holder-empty">
        Chưa có người đang giữ tiền.
      </p>
    `}function He(e){let t=String(e??``).trim();if(!t)return`—`;let n=new Date(t);return Number.isNaN(n.getTime())?t:new Intl.DateTimeFormat(`vi-VN`).format(n)}function Ue(e){let t=e?.header??e?.invoice??{},r=e?.order??{},i=e?.customer??{},a=e?.roles??{},o=t?.ma_hoa_don??t?.order_code??r?.ma_don_hang??r?.order_code??`—`,s=i?.name??i?.ten_khach_hang??t?.ten_khach_hang??r?.customer_name??`—`,c=a?.creator_name??a?.seller_name??t?.ten_nguoi_ban??t?.seller_name??`—`,l=a?.assignee_name??a?.delivery_name??t?.ten_nguoi_giao??t?.delivery_name??`—`,u=e?.delivery?.ngay_hoan_thanh??e?.delivery?.completed_at??t?.ngay_hoan_thanh??t?.completed_at??r?.ngay_hoan_thanh??r?.completed_at??``;return`
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
                ${n(He(u))}
              </strong>
            </div>
          `:``}
    </section>
  `}function We(e){return ze(e).map(e=>{let t=String(e?.id_san_pham??``).trim(),r=U(e?.so_luong_don??e?.quantity??e?.so_luong),i=U(e?.so_luong_da_tat_toan),a=U(e?.so_luong_con_lai??Math.max(0,r-i)),s=U(e?.gia_cong_ty_tham_chieu??e?.gia_cong_ty??e?.reference_price),c=e?.name||e?.ten_san_pham||e?.ten_san_pham_snapshot||e?.product_name||e?.ma_san_pham_snapshot||`Sản phẩm`,l=a,u=s>0?new Intl.NumberFormat(`vi-VN`).format(s):``,d=l*s;return!t||r<=0||a<=0?``:`
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
            ${n(W(s))}
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
              min="${o(a)}"
              max="${o(a)}"
              step="1"
              inputmode="numeric"
              readonly
                tabindex="-1"
              aria-readonly="true"
              value="${o(l)}"
              data-invoice-product-quantity
              data-invoice-product-id="${o(t)}"
              data-invoice-product-max="${o(a)}"
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
              value="${o(u)}"
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
              ${n(W(d))}
            </strong>
          </div>
        </article>
      `}).join(``)}function Ge(e){return(Array.isArray(e?.products)?e.products:[]).map(e=>{let t=String(e?.id_san_pham??``).trim(),r=U(e?.quantity??e?.so_luong);return!t||r<=0?``:`
        <div class="hoa-don-action-line" data-invoice-product-row>
          <span class="hoa-don-action-line__name">
            <strong>${n(e?.name||e?.model||`Sản phẩm`)}</strong>
            <small>Tối đa ${r}</small>
          </span>
          <input
            type="number"
            min="0"
            max="${o(r)}"
            step="1"
            value="0"
            data-invoice-product-quantity
            data-invoice-product-id="${o(t)}"
            data-invoice-product-max="${o(r)}"
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
      `}).join(``)}function q(e){return V[String(e??``).trim().toUpperCase()]??`Xử lý hóa đơn`}function Ke({actionKey:e,detail:t,employees:r=[],currentEmployeeId:i=``,photos:a=[]}={}){let s=String(e??``).trim().toUpperCase(),c=t?.order??{},l=t?.header??{},u=t?.customer??{},d=t?.roles??{},f=H((t?.settlement_context?.actor_balance??t?.actor_balance??{})?.available);t?.settlement_context?.settlement??t?.company_settlement,t?.settlement_context?.actor;let p=t?.roles??t?.settlement_context?.roles??{},m=String(p?.creator_id??t?.header?.id_nguoi_tao_chot??t?.invoice?.id_nguoi_tao_chot??``).trim(),h=String(p?.assignee_id??t?.header?.id_nguoi_nhan_chot??t?.invoice?.id_nguoi_nhan_chot??``).trim(),ee=!!(m&&m===h),g=t?.internal_reconciliation?.labor??t?.labor??{};ee||U(g?.tien_cong_tham_chieu_snapshot);let _=U(t?.header?.total??t?.invoice?.tong_tien_phai_thu??t?.money?.total??0);(Array.isArray(t?.transfers)?t.transfers:[]).filter(e=>String(e?.trang_thai_chuyen??``).trim().toUpperCase()===`DA_XAC_NHAN`&&!!String(e?.id_but_toan??``).trim());let y=``;if((s===`HOA_DON_CHUYEN_TIEN`||s===`HOA_DON_CHUYEN_QUYEN_THU`)&&(y+=`
      <label class="hoa-don-action-field">
        <span>Người nhận</span>
        <select data-invoice-action-employee>
          <option value="">Chọn nhân viên</option>
          ${Le(r,{currentEmployeeId:i,creatorId:d?.creator_id,assigneeId:d?.assignee_id})}
        </select>
      </label>
    `),s===`HOA_DON_YEU_CAU_CHUYEN_TIEN`&&(y+=`
      <section class="hoa-don-settlement-flow-block">
        <h3>Dòng tiền</h3>

        ${K(r)}
      </section>

      <label class="hoa-don-action-field">
        <span>Chọn người đang giữ tiền</span>

        <select data-invoice-action-employee>
          <option value="">
            Chọn người đang giữ tiền
          </option>

          ${Re(r,i)}
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
          <strong>${n(W(f))}</strong>
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
        <strong data-invoice-transfer-remaining>${n(W(f))}</strong>
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
    `),s===`HOA_DON_CHUYEN_QUYEN_THU`&&(y+=`<div class="hoa-don-action-note">Chuyển quyền thu phần tiền còn thiếu. Tiền đã thu vẫn thuộc người đang giữ tiền.</div>`),s===`HOA_DON_TAT_TOAN_CONG_TY`){let e=t?.pendingTransfer??null,s=Ve(t,r,i),c=String(i??``).trim(),l=H(s.find(e=>!!e?.is_current_employee||c&&String(e?.id_nhan_vien??``).trim()===c)?.so_du_kha_dung),u=new Set([...Array.isArray(t?.available_actions)?t.available_actions:[],...Array.isArray(t?.allowed_actions)?t.allowed_actions:[],...Array.isArray(t?.header?.available_actions)?t.header.available_actions:[]].map(e=>String(e??``).trim().toUpperCase())),d=!e&&u.has(`HOA_DON_YEU_CAU_CHUYEN_TIEN`)&&s.some(e=>String(e?.id_nhan_vien??``).trim()!==c&&H(e?.so_du_kha_dung)>0);y+=`
      <section
        data-invoice-settlement-main
        data-invoice-settlement-available="${o(String(l))}"
      >
        ${Ue(t)}

        <section class="hoa-don-settlement-flow-block">
          <h3>Dòng tiền</h3>

          ${K(s)}

          ${e?`
                <article class="hoa-don-settlement-pending">
                  <span>
                    Đang chờ
                    ${n(e?.ten_nguoi_chuyen??e?.sender_name??e?.from_name??`người giữ tiền`)}
                    chuyển
                  </span>

                  <strong>
                    ${n(W(e?.so_tien??e?.amount))}
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
            ${We(t)}
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
              ${n(W(l))}
            </strong>
          </div>

          <div>
            <span data-invoice-settlement-remaining-label>
              Còn lại
            </span>

            <strong data-invoice-settlement-remaining>
              ${n(W(l))}
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

          ${v({photos:a,maxPhotos:5,addLabel:`Thêm ảnh`,addTitle:`Thêm ảnh xác nhận tất toán`})}
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
      <div class="hoa-don-action-lines">${Ge(t)}</div>
    `),`
    <section class="hoa-don-action-page" data-invoice-action-page="${o(s)}" data-invoice-available-balance="${o(f)}" data-invoice-total="${o(_)}">
      ${s===`HOA_DON_TAT_TOAN_CONG_TY`||s===`HOA_DON_YEU_CAU_CHUYEN_TIEN`?``:`
            <article class="hoa-don-action-summary">
              <strong>
                ${n(c?.ma_don_hang||`Đơn hàng`)}
              </strong>

              <span>
                ${n(u?.name||c?.customer_name||``)}
              </span>

              <small>
                ${n(P(l?.state,``))}
              </small>
            </article>
          `}
      <div class="hoa-don-action-form">${y}</div>
      <button type="button" class="hoa-don-action-submit app-inline-action${s===`HOA_DON_HOAN_DON`?` is-danger`:``}" data-invoice-action-submit>
        ${n(s===`HOA_DON_YEU_CAU_CHUYEN_TIEN`?`Xác nhận`:q(s))}
      </button>
    </section>
  `}function qe(e){let t=e.querySelector(`[data-invoice-action-page]`);if(!t)return;let n=H(t.getAttribute(`data-invoice-available-balance`)),r=t.querySelector(`[data-invoice-action-amount]`),i=t.querySelector(`[data-invoice-transfer-remaining]`),a=t.querySelector(`[data-invoice-action-full-amount]`),o=t.querySelector(`[data-invoice-action-employee]`),s=t.querySelector(`[data-invoice-request-holder-available]`),c=()=>{if(!o||!s)return;let e=o.selectedOptions?.[0];n=H(e?.getAttribute(`data-holder-available`)),t.setAttribute(`data-invoice-available-balance`,String(U(n))),s.textContent=W(n),r&&(r.value=``,r.dispatchEvent(new Event(`input`,{bubbles:!0})))},l=e=>{let t=G(e.value);e.value=t?new Intl.NumberFormat(`vi-VN`).format(Number(t)):``};r&&r.addEventListener(`input`,()=>{let e=U(G(r.value));e=Math.min(U(n),e),r.value=e>0?new Intl.NumberFormat(`vi-VN`).format(e):``,i&&(i.textContent=W(Math.max(0,n-e))),a&&(a.checked=n>0&&e===U(n))}),o&&s&&(o.addEventListener(`change`,c),c()),a&&r&&a.addEventListener(`change`,()=>{a.checked&&(r.value=new Intl.NumberFormat(`vi-VN`).format(n),r.dispatchEvent(new Event(`input`,{bubbles:!0})))});let u=()=>{let e=0;t.querySelectorAll(`[data-invoice-settlement-row]`).forEach(t=>{let n=t.querySelector(`[data-invoice-product-quantity]`),r=t.querySelector(`[data-invoice-product-price]`),i=t.querySelector(`[data-invoice-line-total]`),a=t.querySelector(`[data-invoice-product-full]`),o=U(n?.getAttribute(`data-invoice-product-max`)),s=U(n?.value);s=o>0?Math.min(o,s):0,n&&(n.value=String(s)),a&&(a.checked=o>0&&s===o);let c=U(G(r?.value));r&&(r.value=c>0?new Intl.NumberFormat(`vi-VN`).format(c):``);let l=s*c;e+=l,i&&(i.textContent=W(l))});let r=t.querySelector(`[data-invoice-settlement-total]`),i=t.querySelector(`[data-invoice-settlement-remaining]`),a=t.querySelector(`[data-invoice-settlement-remaining-label]`),o=t.querySelector(`[data-invoice-settlement-warning]`);r&&(r.textContent=W(e));let s=n-e;a&&(a.textContent=s>=0?`Còn lại`:`Thiếu`),i&&(i.textContent=W(Math.abs(s)),i.dataset.state=s>=0?`remaining`:`shortage`),o&&(o.hidden=s>=0,o.textContent=s>=0?``:`Tạm tính vượt số dư đang giữ `+W(Math.abs(s))+`.`)};t.querySelectorAll(`[data-invoice-product-price]`).forEach(e=>{e.addEventListener(`input`,()=>{l(e),u()}),e.addEventListener(`focus`,()=>{e.select()})}),t.querySelectorAll(`[data-invoice-product-quantity]`).forEach(e=>{e.addEventListener(`input`,()=>{let t=U(e.getAttribute(`data-invoice-product-max`)),n=U(e.value);n=t>0?Math.min(t,n):0,e.value=String(n);let r=e.closest(`[data-invoice-product-row]`)?.querySelector(`[data-invoice-product-full]`);r&&(r.checked=t>0&&n===t),u()}),e.addEventListener(`focus`,()=>{e.select()})}),t.querySelectorAll(`[data-invoice-product-step]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.closest(`[data-invoice-settlement-row]`)?.querySelector(`[data-invoice-product-quantity]`);if(!t)return;let n=Number(e.getAttribute(`data-invoice-product-step`)),r=U(t.getAttribute(`data-invoice-product-max`)),i=U(t.value),a=Math.min(r,Math.max(0,i+(Number.isFinite(n)?n:0)));t.value=String(a),t.dispatchEvent(new Event(`input`,{bubbles:!0}))})}),t.querySelectorAll(`[data-invoice-product-full]`).forEach(e=>{e.addEventListener(`change`,()=>{if(!e.checked)return;let t=e.closest(`[data-invoice-product-row]`)?.querySelector(`[data-invoice-product-quantity]`);if(!t)return;let n=U(t.getAttribute(`data-invoice-product-max`));t.value=String(n),t.dispatchEvent(new Event(`input`,{bubbles:!0}))})}),t.querySelectorAll(`[data-invoice-product-quantity]`).forEach(e=>{e.dispatchEvent(new Event(`input`,{bubbles:!0}))}),u();let d=t.querySelector(`[data-invoice-settlement-labor]`),f=t.querySelector(`[data-invoice-settlement-profit]`),p=H(t.getAttribute(`data-invoice-total`)),m=()=>{if(!f)return;let e=Array.from(t.querySelectorAll(`[data-invoice-settlement-row]`)).reduce((e,t)=>e+H(t.querySelector(`[data-invoice-product-quantity]`)?.value)*H(G(t.querySelector(`[data-invoice-product-price]`)?.value)),0),n=H(G(d?.value)),r=Math.max(p-e-n,0);f.textContent=W(r),d?.setCustomValidity(``)};d?.addEventListener(`input`,()=>{d.type!==`hidden`&&l(d),m()}),t.querySelectorAll(`[data-invoice-product-price]`).forEach(e=>{e.addEventListener(`input`,m)}),m()}function Je(e,t){let n=String(t??``).trim().toUpperCase(),r=String(e.querySelector(`[data-invoice-action-employee]`)?.value??``).trim(),i=Number(G(e.querySelector(`[data-invoice-action-amount]`)?.value)||0),a=String(e.querySelector(`[data-invoice-action-reason]`)?.value??``).trim(),o=String(e.querySelector(`[data-invoice-action-note]`)?.value??``).trim(),s=String(e.querySelector(`[data-invoice-reverse-ledger]`)?.value??``).trim(),c=Array.from(e.querySelectorAll(`[data-invoice-product-row]`)).map(e=>{let t=e.querySelector(`[data-invoice-product-quantity]`),r=Number(t?.value??0),i=Number(t?.getAttribute(`data-invoice-product-max`)??0),a=String(t?.getAttribute(`data-invoice-product-id`)??``).trim();if(n===`HOA_DON_TAT_TOAN_CONG_TY`&&(!Number.isSafeInteger(i)||i<=0||r!==i))throw TypeError(`Hóa đơn phải tất toán toàn bộ số lượng còn lại.`);if(!Number.isSafeInteger(r)||r<=0)return null;if(Number.isSafeInteger(i)&&i>0&&r>i)throw TypeError(`Số lượng vượt quá số lượng còn lại.`);let o={id_san_pham:a,so_luong:r};if(n===`HOA_DON_TAT_TOAN_CONG_TY`){let t=Number(G(e.querySelector(`[data-invoice-product-price]`)?.value)||0);if(!Number.isSafeInteger(t)||t<0)throw TypeError(`Đơn giá tất toán không hợp lệ.`);o.don_gia_tat_toan=t}return o}).filter(Boolean),l=Number(G(e.querySelector(`[data-invoice-settlement-labor]`)?.value)||0);if(n===`HOA_DON_TAT_TOAN_CONG_TY`&&(!Number.isSafeInteger(l)||l<0))throw TypeError(`Tiền công thực tế không hợp lệ.`);return{actionKey:n,receiverId:r,amount:i,reason:a,note:o,ledgerId:s,laborAmount:l,lines:c}}var Ye=Object.freeze({CHUA_THANH_TOAN:`Chưa thanh toán`,THANH_TOAN_MOT_PHAN:`Thanh toán một phần`,DA_THANH_TOAN:`Đã thanh toán`}),Xe=Object.freeze({CHUA_TAT_TOAN:`Chưa tất toán`,DANG_TAT_TOAN:`Đang tất toán`,DA_TAT_TOAN:`Đã tất toán`,DA_HUY:`Đã hủy tất toán`}),Ze=Object.freeze([{key:`dang-xu-ly`,label:`Đang xử lý`,statuses:[`CHUA_THANH_TOAN`,`THANH_TOAN_MOT_PHAN`,`DA_THANH_TOAN`]},{key:`da-tat-toan`,label:`Đã tất toán`,statuses:[`DA_THANH_TOAN`]},{key:`loi-nhuan`,label:`Lợi nhuận`,statuses:[`CHUA_THANH_TOAN`,`THANH_TOAN_MOT_PHAN`,`DA_THANH_TOAN`]},{key:`thong-ke`,label:`Thống kê`,statuses:[]}]);function J(e,t){e.dispatchEvent(new CustomEvent(`kangaroo:page-chrome`,{bubbles:!0,detail:t}))}function Qe(e){return Ze.find(t=>t.key===e)??Ze[0]}function Y(e){if(e==null||e===``)return``;let t=Number(e);return Number.isFinite(t)?T(t):String(e)}function $e(e){let t=String(e??``).trim();return Ye[t]??t??`Chưa xác định`}function et(e){let t=String(e??``).trim();return Xe[t]??t}function tt(e,t,n){let r=String(e??``).trim(),i=String(n??``).trim();return r&&i&&r===i?`Bạn`:String(t??`Nhân viên`).trim()}function nt(e,t,n,r){let i=String(e??``),a=String(n??``).trim(),o=tt(t,a,r);return!i||!a||o===a?i:i.split(a).join(o)}function X(e){let t=e?.collection_task;if(!t||typeof t!=`object`||!t?.status_label&&!t?.summary_label&&!t?.action_key)return null;let n=String(t?.action_key??``).trim().toUpperCase();if(n&&!rt(e).has(n))return null;let r=String(e?.current_employee_id??``).trim(),i=String(t?.holder_id??t?.id_nguoi_giu??t?.id_nguoi_thu??t?.employee_id??``).trim(),a=String(t?.holder_name??t?.ten_nguoi_giu??t?.collector_name??t?.employee_name??``).trim(),o=tt(i,a,r),s=e=>nt(e,i,a,r);return{...t,action_key:n||null,holder_name:o,status_label:s(t?.status_label),summary_label:s(t?.summary_label),button_label:s(t?.button_label)}}function rt(e){let t=[...Array.isArray(e?.allowed_actions)?e.allowed_actions:[],...Array.isArray(e?.available_actions)?e.available_actions:[]];return new Set(t.map(e=>String(e??``).trim().toUpperCase()).filter(Boolean))}function it(e,t){if(t!==`dang-xu-ly`)return[];let n=rt(e),r=[],i=X(e),a=String(i?.action_key??``).trim().toUpperCase();a&&n.has(a)&&r.push({actionKey:a,label:i?.button_label||`Xác nhận thu`,kind:`collection`,className:`is-primary`});for(let e of[{actionKey:`HOA_DON_TAT_TOAN_CONG_TY`,label:`Tất toán`,className:`is-primary`},{actionKey:`HOA_DON_CHUYEN_TIEN`,label:`Chuyển tiền`,className:``},{actionKey:`HOA_DON_CHUYEN_QUYEN_THU`,label:`Chuyển COD`,className:``}])n.has(e.actionKey)&&r.push({...e,kind:`business`});return r}function at(e){switch(String(e??``).trim().toUpperCase()){case`HOA_DON_XAC_NHAN_TIEN_DANG_GIU`:return`XAC_NHAN_TIEN_DANG_GIU`;case`HOA_DON_XAC_NHAN_DA_THU`:return`XAC_NHAN_DA_THU`;case`HOA_DON_XAC_NHAN_COD`:return`XAC_NHAN_COD`;case`HOA_DON_THU_TIEN`:return`THU_TIEN`;default:return``}}function ot(e){return String(e??``).replace(/\D+/g,``)}function st(e){let t=ot(e);if(!t)return 0;let n=Number(t);return Number.isSafeInteger(n)?n:0}function ct(e){let t=Number(e??0);return!Number.isSafeInteger(t)||t<=0?``:new Intl.NumberFormat(`vi-VN`).format(t)}function lt(e){return`
    <nav class="hoa-don-tabs">
      ${Ze.map(t=>`
            <button
              type="button"
              class="${t.key===e?`is-active`:``}"
              data-invoice-tab="${o(t.key)}"
            >
              ${n(t.label)}
            </button>
          `).join(``)}
    </nav>
  `}function ut(e){let t=String(e??``).trim(),n=t.replace(/\D+/g,``);return!t.includes(`*`)&&n.length>=8?`tel:${n}`:``}function dt(e){let t=String(e??``).trim();return t?`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(t)}`:``}function ft(e,t){let n=String(e?.entity_id??``),r=X(e),i=it(e,t),a=l(e),o=e?.money&&typeof e.money==`object`?e.money:{},s=Number(o?.collected??0),c=Number(o?.remaining??0),u=Number.isFinite(s)?Math.max(0,s):0,d=Number.isFinite(c)?Math.max(0,c):0,p=String(e?.roles?.collector_name??r?.holder_name??e?.roles?.assignee_name??e?.roles?.creator_name??`Nhân viên`).trim(),m=String(e?.current_employee_id??``).trim(),h=(Array.isArray(e?.money_holders)?e.money_holders:[]).map(e=>{let t=String(e?.id_nhan_vien??``).trim(),n=Number(e?.so_du_kha_dung??0);return{...e,id_nhan_vien:t,is_current_employee:!!(e?.is_current_employee??(t&&t===m)),so_du_kha_dung:Number.isFinite(n)?Math.max(0,n):0}}).filter(e=>e.id_nhan_vien&&e.so_du_kha_dung>0).sort((e,t)=>Number(!!t?.is_current_employee)-Number(!!e?.is_current_employee)),ee=String(e?.customer_phone??e?.phone??``).trim(),g=String(e?.customer_address??e?.address??``).trim(),_=[],v=ut(ee),y=dt(g);v&&_.push({href:v,label:`Gọi khách hàng`,icon:f.phone}),y&&_.push({href:y,label:`Mở bản đồ`,icon:f.map,external:!0});let b=[];if(t===`dang-xu-ly`&&r)b.push({label:r?.summary_label||`Cần xử lý tiền`,value:Y(r?.amount),tone:`warning`});else if(t===`dang-xu-ly`){if(h.length)h.forEach(e=>{let t=String(e?.ten_nhan_vien??e?.ten_dang_nhap??`Nhân viên`).trim();b.push({label:e?.is_current_employee?`Bạn đang giữ`:`${t} đang giữ`,value:Y(e?.so_du_kha_dung)})});else if(u>0){let t=String(e?.roles?.collector_id??r?.holder_id??``).trim();b.push({label:t&&t===m?`Bạn đang giữ`:`${p} đang giữ`,value:Y(u)})}u>0&&d>0&&b.push({label:`Còn lại`,value:Y(d)})}else t===`da-tat-toan`&&b.push({label:`Tất toán`,value:et(e?.settlement_state)});let te=[...i.filter(e=>!String(e?.className??``).split(/\s+/).includes(`is-primary`)),...i.filter(e=>String(e?.className??``).split(/\s+/).includes(`is-primary`))].map(e=>({label:e.label,className:e.className,data:{"invoice-action":e.actionKey,"invoice-id":n}}));return se({id:n,title:e?.order_code||`Đơn hàng`,titleIcon:f.order,typeLabel:a?.label,typeIcon:a?.icon,typeKey:a?.key,status:r?.status_label||$e(e?.state),statusKey:r?.status_key||e?.state,subtitle:e?.customer_name||`Khách lẻ`,subtitleIcon:f.user,timestamp:w(e?.completed_at,``),lines:[{icon:f.phone,text:e?.customer_phone},{icon:f.map,text:e?.address}],rows:b.filter(e=>e.value!==``),tools:_,actions:te,ariaLabel:`Mở chi tiết `+(e?.order_code||`đơn hàng`)})}var pt={id:`hoa-don`,label:`Hóa đơn`,shortLabel:`HĐ`,render(t,i={}){let l=s(),g=ce(),x={cards:[],transferRequests:[],transferRequestsLoaded:!1,pendingTransferCount:0,transferError:``,transferConfirmRequest:null,activeTab:`dang-xu-ly`,search:``,searchByTab:new Map(Ze.map(e=>[e.key,``])),detail:null,detailId:null,detailReadOnly:!1,orderHistory:null,checkHistory:null,checkHistoryError:``,invoiceCheckContext:null,invoiceCheckError:``,deliveryViewerImages:[],deliveryViewerIndex:0,evidenceViewerImages:[],evidenceViewerIndex:0,detailSettlementRoundId:null,collectionCard:null,actionKey:``,actionDetail:null,actionEmployees:[],actionCurrentEmployeeId:``,actionEvidencePhotos:[],actionEvidenceSequence:0,actionSource:`list`,error:``,busy:!1,worklistBusy:!1,worklistPhase:`idle`,worklistRequestId:0,transferRequestId:0},S=u({initialTabKey:x.activeTab,pageSize:10,async fetchPage({tabKey:e,search:t,cursor:n,limit:r}){let a=Qe(e),o=await le({search:t||null,statuses:a.statuses,tabKey:e,cursor:n,limit:r,currentEmployeeId:i?.identity?.id_nhan_vien??``});return{items:Array.isArray(o?.cards)?o.cards:[],cursor:o?.cursor??null,hasMore:o?.has_more===!0,meta:{permissionMask:o?.permission_mask??null,serverTime:o?.server_time??null,pendingTransferCount:Math.max(0,Number(o?.pending_transfer_count??0)||0)}}}});function C(){return typeof i?.isActive!=`function`||i.isActive()}let T=new Set([`CHUA_THANH_TOAN`,`THANH_TOAN_MOT_PHAN`,`DA_THANH_TOAN`]);function D(e,t){let n=Qe(t).key,r=String(e?.state??``).trim().toUpperCase(),i=String(e?.settlement_state??``).trim().toUpperCase();return n===`dang-xu-ly`?T.has(r)&&i!==`DA_TAT_TOAN`:n===`da-tat-toan`?r===`DA_THANH_TOAN`&&i===`DA_TAT_TOAN`:n===`loi-nhuan`&&T.has(r)&&(e?.benefit_state!=null||e?.profit!=null)}async function O(e,{throwOnReadError:t=!1}={}){let n=String(e??``).trim();if(!n)return S.invalidate({all:!0}),null;try{let e=await ue([n]);if(!C())return null;let t=e.find(e=>String(e?.entity_id??``)===n)??null,r=S.reconcileItems((e,r)=>{let i=e.findIndex(e=>String(e?.entity_id??``)===n),a=e.filter(e=>String(e?.entity_id??``)!==n);if(!t||!D(t,r.tabKey))return a;let o=!!String(r.search??``).trim();if(!(o?i>=0:r.pageNumber===1))return a;let s=o&&i>=0?Math.min(i,a.length):0;return a.splice(s,0,t),a},{all:!0});return x.cards=Array.isArray(r?.items)?r.items:x.cards,x.worklistPhase=`ready`,x.error=``,t}catch(e){if(S.invalidate({all:!0}),t)throw e;return null}}let k=r({initialValue:x.search,debounceMs:700,isActive:C,onApply(e,t){x.search=e,x.searchByTab.set(x.activeTab,e);let n=String(t?.reason??``);if(n===`tab-sync`)return null;let r=n===`debounce`||n===`submit`;return $({silent:r,allowWhileBusy:r,force:t?.force===!0,reason:n})}}),pe=new Set([`CHUYEN_TIEN_NOI_BO`,`CHUYEN_QUYEN_THU_TIEN`,`CHUYEN_QUYEN_XU_LY_TAT_TOAN`,`BAN_GIAO_HOA_DON`,`NHIEM_VU_BAN_GIAO_TIEN`]),A=new Map,j=null,M=0;function Te(e={}){let t=String(e?.entity_type??`UNKNOWN`).trim().toUpperCase(),n=String(e?.entity_id??``).trim(),r=String(e?.action_key??`UNKNOWN`).trim().toUpperCase();return t+`:`+(n||r)}function Ee(){M&&=(globalThis.clearTimeout(M),0)}function N(e=180){C()&&(Ee(),M=globalThis.setTimeout(()=>{M=0;let e=A.values().next().value;e&&L(e)},e))}function De(e){return e.includes(`CHUYEN`)||e.includes(`BAN_GIAO`)||e.includes(`YEU_CAU`)}async function je(e){let t=String(e??``).trim();if(!t||l.currentKey()!==`detail:${t}`)return!1;let n=await de(t);return!C()||l.currentKey()!==`detail:${t}`?!1:(x.detailId=t,x.detail=n,Rt(),!0)}async function P(e,{refreshTransfers:t=!1}={}){return S.invalidate({all:!0}),t&&(x.transferRequestsLoaded=!1),!C()||x.busy?null:(t&&await K().catch(()=>null),$({silent:!0,force:!0,reason:e}))}async function F(e={}){if(!C())return;let t=String(e?.entity_type??``).trim().toUpperCase(),n=String(e?.entity_id??``).trim(),r=String(e?.action_key??`UNKNOWN`).trim().toUpperCase(),i=De(r),a=pe.has(t);if(x.busy){S.invalidate({all:!0}),(i||a)&&(x.transferRequestsLoaded=!1),A.set(Te(e),e),N();return}if(t===`HOA_DON`&&n){i&&await K().catch(e=>{console.warn(`[HoaDon] Realtime transfer refresh lỗi.`,e)});try{await O(n,{throwOnReadError:!0}),await je(n),l.currentKey()===`list`&&Z();return}catch(e){console.warn(`[HoaDon] Targeted Realtime card sync lỗi.`,e)}}if(a&&n){let e=transferRequestById(n),t=String(e?.id_hoa_don??``).trim();if(await K().catch(()=>null),!C())return;let r=transferRequestById(n),i=t||String(r?.id_hoa_don??``).trim();if(i)try{await O(i,{throwOnReadError:!0}),await je(i),l.currentKey()===`list`&&Z();return}catch(e){console.warn(`[HoaDon] Realtime transfer card sync lỗi.`,e)}}await P(`realtime:`+(t||`unknown`)+`:`+r.toLowerCase(),{refreshTransfers:i||a})}async function I(){if(C()){if(x.busy){S.invalidate({all:!0}),N();return}for(;C()&&A.size;){let e=[...A.values()];A.clear();for(let t of e)try{await F(t)}catch(e){console.warn(`[HoaDon] Realtime entity sync lỗi.`,e)}}}}function L(t={}){if(!e(t,`hoa-don`).shouldDispatch||!C())return null;String(t?.entity_type??`UNKNOWN`).trim().toUpperCase(),String(t?.entity_id??``).trim(),String(t?.action_key??`UNKNOWN`).trim().toUpperCase();let n=Te(t);return A.set(n,t),j||=Promise.resolve().then(I).finally(()=>{if(j=null,C()&&A.size){let e=A.values().next().value;e&&(x.busy?N():L(e))}}),j}let R=0,z=!1,B=null;function Me(){R&&=(globalThis.clearTimeout(R),0)}function Ne(){z=!0,Me();let e=async()=>{if(R=0,!C())return z=!1,!1;if(x.busy)return R=globalThis.setTimeout(()=>{e()},180),!1;if(B)return B;if(!z)return!1;z=!1;let t=String(l.currentKey()??``),n=String(x.detailId??``).trim(),r=(async()=>(await P(`authoritative-resume`,{refreshTransfers:!0}),C()?(n&&t===`detail:${n}`&&await je(n),!0):!1))().catch(e=>(C()&&console.warn(`[HoaDon] Authoritative resume lỗi.`,e),!1)),i;return i=r.finally(()=>{B===i&&(B=null),C()&&z&&Ne()}),B=i,i};return R=globalThis.setTimeout(()=>{e()},0),!0}function Pe(){return C()?Ne():!1}i?.onRealtimeInvalidation?.(L),i?.onRealtimeResume?.(Pe),i?.onCleanup?.(()=>{x.worklistRequestId+=1,x.transferRequestId+=1,Ee(),Me(),z=!1,A.clear(),tt&&=(t.removeEventListener(`click`,pt),t.removeEventListener(`keydown`,mt),!1),k.dispose(),S.dispose(),Q()});function V(e){return e?.type===`invoice-action`}function H({actionKey:e,detail:t,employees:n=[],currentEmployeeId:r=``,source:i=`list`,parentContext:a=null}={}){return{type:`invoice-action`,actionKey:e??``,actionDetail:t??null,actionEmployees:Array.isArray(n)?n:[],actionCurrentEmployeeId:String(r??``).trim(),actionEvidencePhotos:[],actionEvidenceSequence:0,actionSource:i===`detail`?`detail`:`list`,draft:null,scrollTop:0,parentContext:V(a)?a:null}}function U(e,n=null){V(e)&&(e.actionKey=x.actionKey,e.actionDetail=x.actionDetail,e.actionEmployees=x.actionEmployees,e.actionCurrentEmployeeId=x.actionCurrentEmployeeId,e.actionEvidencePhotos=x.actionEvidencePhotos,e.actionEvidenceSequence=x.actionEvidenceSequence,e.actionSource=x.actionSource,e.draft=n,e.scrollTop=Number(t.scrollTop??0))}function W(e){return V(e)?(x.actionKey=e.actionKey,x.actionDetail=e.actionDetail,x.actionEmployees=e.actionEmployees,x.actionCurrentEmployeeId=e.actionCurrentEmployeeId,x.actionEvidencePhotos=e.actionEvidencePhotos,x.actionEvidenceSequence=e.actionEvidenceSequence,x.actionSource=e.actionSource,!0):!1}function G(e){return(Array.isArray(e?.requests)?e.requests:[]).filter(e=>e?.trang_thai_chuyen===`CHO_XAC_NHAN`&&e?.id_request)}function Le(){return m({count:x.pendingTransferCount,dataAttribute:`data-invoice-transfer-notice`,showWhenEmpty:!0})}function Re(e){let t=[e?.ten_nguoi_chuyen,e?.sdt_nguoi_chuyen].filter(Boolean).join(` · `),n=[e?.ten_nguoi_nhan,e?.sdt_nguoi_nhan].filter(Boolean).join(` · `);return String(e?.kieu_chuyen??``).trim().toUpperCase()===`YEU_CAU_CHUYEN`?e?.is_receiver===!0?{label:`Người đang giữ tiền`,value:t}:e?.is_sender===!0?{label:`Người yêu cầu`,value:n}:{label:`Luồng yêu cầu`,value:[t,n].filter(Boolean).join(` → `)}:e?.is_receiver===!0?{label:`Người chuyển`,value:t}:e?.is_sender===!0?{label:`Chuyển cho`,value:n}:{label:`Luồng chuyển`,value:[t,n].filter(Boolean).join(` → `)}}function ze(e){let t=String(e?.id_request??``),n=String(e?.kieu_chuyen??``).trim().toUpperCase()===`YEU_CAU_CHUYEN`,r=[];return e?.can_cancel===!0&&r.push({label:n?`Hủy yêu cầu`:`Hủy chuyển`,className:`is-danger`,data:{"transfer-id":t,"invoice-transfer-action":`cancel`}}),e?.can_reject===!0&&r.push({label:`Từ chối`,className:`is-danger`,data:{"transfer-id":t,"invoice-transfer-action":`reject`}}),e?.can_accept===!0&&r.push({label:n?`Xác nhận chuyển`:`Xác nhận`,className:`is-primary`,data:{"transfer-id":t,"invoice-transfer-action":`accept`}}),Array.isArray(e?.evidence)&&e.evidence.length&&r.push({label:`Xem ảnh`,data:{"transfer-id":t,"invoice-transfer-action":`evidence`}}),r}function Be(e){let t=String(e?.id_hoa_don??``),n=e?.order_code||`Hóa đơn`,r=e?.request_type===`CHUYEN_TIEN_NOI_BO`,i=e?.request_type===`CHUYEN_QUYEN_XU_LY_TAT_TOAN`,a=String(e?.kieu_chuyen??``).trim().toUpperCase()===`YEU_CAU_CHUYEN`,o=Re(e),s=[{label:`Nghiệp vụ`,value:a?`Yêu cầu chuyển tiền`:r?`Chuyển nội bộ`:i?`Bàn giao xử lý tất toán`:`Chuyển đơn`}];o.value&&s.push(o),e?.amount!==null&&e?.amount!==void 0&&s.push({label:r?`Số tiền chuyển`:`Tiền còn phải thu`,value:Y(e.amount)});let c=[],l=ut(e?.customer_phone);l&&c.push({href:l,label:`Gọi khách hàng`,icon:f.phone});let u=dt(e?.address);return u&&c.push({href:u,label:`Mở bản đồ`,icon:f.map,external:!0}),se({id:t,title:n,titleIcon:f.order,status:`Chờ xác nhận`,statusKey:`CHO_XAC_NHAN_CHUYEN`,timestamp:w(e?.created_at,``),subtitle:e?.customer_name||``,subtitleIcon:f.user,lines:[{icon:f.phone,text:e?.customer_phone},{icon:f.map,text:e?.address}],rows:s,tools:c,actions:ze(e),ariaLabel:`Mở chi tiết ${n}`})}function Ve(e){return x.transferRequests.find(t=>String(t?.id_request??``)===String(e??``))??null}async function K(){if(!C())return x.transferRequests;let e=x.transferRequestId+1;x.transferRequestId=e;let t=await me();return e!==x.transferRequestId||!C()?x.transferRequests:(x.transferRequests=G(t),x.transferError=``,x.transferRequestsLoaded=!0,x.pendingTransferCount=x.transferRequests.length,x.transferRequests)}async function He(e,t){let n=String(e?.id_request??``);if(!n||![`accept`,`reject`,`cancel`].includes(t))return;let r=t===`accept`,i=t===`cancel`,o=e?.request_type===`CHUYEN_QUYEN_XU_LY_TAT_TOAN`?`XU_LY_TAT_TOAN`:`THU_TIEN`,s=`hoa-don-transfer:`+t+`:`+n;if(g.acquire(s)){x.busy=!0;try{e?.request_type===`CHUYEN_TIEN_NOI_BO`?i?await _e({transferId:n,requestKey:a(`hoa-don-huy-chuyen-tien`)}):await he({transferId:n,accept:r,requestKey:a(r?`hoa-don-xac-nhan-chuyen-tien`:`hoa-don-tu-choi-chuyen-tien`)}):i?await ve({handoverId:n,rowVersion:e?.row_version,requestKey:a(o===`XU_LY_TAT_TOAN`?`hoa-don-huy-ban-giao-xu-ly`:`hoa-don-huy-chuyen-don`),handoverType:o}):await ge({handoverId:n,rowVersion:e?.row_version,accept:r,requestKey:a(o===`XU_LY_TAT_TOAN`?r?`hoa-don-xac-nhan-ban-giao-xu-ly`:`hoa-don-tu-choi-ban-giao-xu-ly`:r?`hoa-don-xac-nhan-chuyen-don`:`hoa-don-tu-choi-chuyen-don`),handoverType:o}),await K(),await O(e?.id_hoa_don),$e(),E(i?`Đã hủy yêu cầu chuyển`:r?`Đã xác nhận yêu cầu chuyển`:`Đã từ chối yêu cầu chuyển`)}catch(e){E(e?.message||`Không xử lý được yêu cầu chuyển.`)}finally{x.busy=!1,g.release(s)}}}async function Ue(e){Q(),x.actionEvidenceSequence=0,x.transferConfirmRequest=e??null,await l.open(`invoice-transfer-confirm`,Ge)}async function We(){let e=x.transferConfirmRequest,t=String(e?.id_request??``).trim(),n=String(e?.id_hoa_don??``).trim();if(x.busy||!t||!n)return;let r=`hoa-don-transfer-confirm:`+t;if(!g.acquire(r))return;x.busy=!0;let i=[];try{i=await ke({invoiceId:n,stage:`xac-nhan-chuyen`,files:x.actionEvidencePhotos.map(e=>e.file)}),await he({transferId:t,accept:!0,requestKey:a(`hoa-don-xac-nhan-chuyen-tien`),storagePaths:i}),Q(),x.actionEvidenceSequence=0,x.transferConfirmRequest=null,await K(),await O(n),await l.back(),E(`Đã xác nhận yêu cầu chuyển`)}catch(e){i.length&&await Oe(i).catch(()=>{}),E(e?.message||`Không xác nhận được chuyển tiền.`)}finally{x.busy=!1,g.release(r)}}function Ge(){let e=x.transferConfirmRequest;if(!e){l.back();return}let r=String(e?.order_code??`Hóa đơn`);J(t,{headerMode:`title`,title:`Xác nhận chuyển tiền`,showRightAction:!1,onBack:Ye,bottomActions:[]}),t.innerHTML=`
        <section class="hoa-don-action-page">
          <article class="hoa-don-action-summary">
            <strong>${n(r)}</strong>
            <span>Số tiền chuyển: ${n(Y(e?.amount))}</span>
          </article>

          <div class="hoa-don-action-form">
            <section class="hoa-don-action-field">
              <span>Ảnh chứng từ xác nhận (không bắt buộc)</span>
              ${v({photos:x.actionEvidencePhotos,maxPhotos:5,addLabel:`Thêm ảnh`,addTitle:`Thêm ảnh xác nhận chuyển tiền`})}
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
      `;let i=t.querySelector(`[data-photo-picker-input]`);i?.addEventListener(`change`,()=>{qt(i.files),i.value=``}),t.querySelectorAll(`[data-photo-picker-remove]`).forEach(e=>{e.addEventListener(`click`,()=>{Jt(e.dataset.photoId)})}),t.querySelector(`[data-invoice-transfer-confirm-submit]`)?.addEventListener(`click`,()=>{We()})}async function Ye(){Q(),x.actionEvidenceSequence=0,x.transferConfirmRequest=null,await l.back()}async function Xe(){if(!x.busy){x.busy=!0,x.transferError=``;try{await K()}catch(e){x.transferError=e?.message||`Không tải được đơn chờ xác nhận.`}finally{x.busy=!1,$e()}}}function $e(){J(t,{headerMode:`title`,title:`Đơn chờ xác nhận`,onBack:()=>l.back(),showRightAction:!0,rightIcon:`↻`,rightLabel:`Tải lại`,onRightAction:Xe,bottomActions:[]}),t.innerHTML=ee({requests:x.transferRequests,error:x.transferError,renderCard:Be})}async function et(){await l.open(`transfer-requests`,$e),x.transferRequestsLoaded||await Xe()}let tt=!1,nt=0;function it(e){let t=String(e?.dataset?.recordCard??``).trim();t&&Qt(t,{readOnly:l.currentKey()===`transfer-requests`})}function ot(e){let t=Qe(e?.dataset?.invoiceTab||`dang-xu-ly`).key;if(t===x.activeTab)return;let n=++nt;x.worklistRequestId+=1,x.searchByTab.set(x.activeTab,x.search),x.activeTab=t;let r=x.searchByTab.get(t)??``;x.search=r,S.setTab(t),S.setSearch(r);let i=S.snapshot();x.cards=i?.loaded===!0&&Array.isArray(i?.items)?i.items:[],x.error=i?.error||``,x.worklistPhase=t===`thong-ke`||i?.loaded===!0?`ready`:`loading`,Z(),k.reset(r,{force:!0,reason:`tab-sync`}),(typeof globalThis.requestAnimationFrame==`function`?globalThis.requestAnimationFrame.bind(globalThis):e=>globalThis.setTimeout(e,0))(()=>{!C()||n!==nt||t!==x.activeTab||$({reason:`tab-change`})})}function pt(e){let n=e.target instanceof Element?e.target:null;if(!n)return;let r=n.closest(`[data-cursor-page-previous]`);if(r&&t.contains(r)){e.preventDefault(),r.disabled||$({pageAction:`previous`});return}let i=n.closest(`[data-cursor-page-next]`);if(i&&t.contains(i)){e.preventDefault(),i.disabled||$({pageAction:`next`});return}let a=n.closest(`[data-invoice-transfer-notice]`);if(a&&t.contains(a)){e.preventDefault(),et();return}let o=n.closest(`[data-invoice-transfer-action]`);if(o&&t.contains(o)){e.preventDefault(),e.stopPropagation();let t=Ve(o.getAttribute(`data-transfer-id`)),n=o.getAttribute(`data-invoice-transfer-action`);if(!t||![`accept`,`reject`,`cancel`,`evidence`].includes(n))return;if(n===`evidence`){yt(t);return}if(n===`cancel`&&!window.confirm(`Hủy yêu cầu chuyển này?`))return;n===`accept`&&t?.request_type===`CHUYEN_TIEN_NOI_BO`?Ue(t):He(t,n);return}let s=n.closest(`[data-invoice-tab]`);if(s&&t.contains(s)){e.preventDefault(),ot(s);return}let c=n.closest(`[data-invoice-action]`);if(c&&t.contains(c)){e.preventDefault(),e.stopPropagation();let t=String(c.getAttribute(`data-invoice-id`)??``).trim(),n=String(c.getAttribute(`data-invoice-action`)??``).trim().toUpperCase(),r=x.cards.find(e=>String(e?.entity_id??``)===t);if(!r||!n)return;if(at(n)){Bt(r);return}Xt({actionKey:n,invoiceId:r.entity_id,source:`list`,authorizationSource:r});return}let l=n.closest(`[data-record-card]`);!l||!t.contains(l)||n.closest([`a`,`button`,`input`,`select`,`textarea`,`[data-record-tool]`,`[data-invoice-action]`,`[data-invoice-transfer-action]`].join(`,`))||it(l)}function mt(e){if(e.key!==`Enter`&&e.key!==` `)return;let n=e.target instanceof Element?e.target:null,r=n?.closest(`[data-record-card]`);!r||n!==r||!t.contains(r)||(e.preventDefault(),it(r))}function ht(){tt||=(t.addEventListener(`click`,pt),t.addEventListener(`keydown`,mt),!0)}ht();function gt(){let e=t.querySelector(`[data-hoa-don-list-shell]`);e||=(t.innerHTML=`
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
        `,t.querySelector(`[data-hoa-don-list-shell]`));let n={shell:e,tabs:e?.querySelector(`[data-hoa-don-list-tabs]`),transferNotice:e?.querySelector(`[data-hoa-don-transfer-notice-slot]`),status:e?.querySelector(`[data-hoa-don-list-status]`),items:e?.querySelector(`[data-hoa-don-list-items]`),pager:e?.querySelector(`[data-hoa-don-list-pager]`)};if(!n.shell||!n.tabs||!n.transferNotice||!n.status||!n.items||!n.pager)throw Error(`Không dựng được vùng danh sách Hóa đơn.`);return n}function Z(){J(t,{headerMode:`search`,placeholder:`Tìm mã đơn hoặc tên khách hàng.`,searchValue:k.snapshot().draft,showRightAction:!0,rightIcon:`↻`,rightLabel:`Tải lại`,onSearchInput(e){k.input(e)},onSearch(e){return k.submit(e)},onRightAction:()=>k.submit(k.snapshot().draft,{force:!0,reason:`refresh`}),bottomActions:[]});let e=x.cards,r=x.activeTab===`thong-ke`?null:S.snapshot(),i=Qe(x.activeTab),a=x.activeTab===`thong-ke`?`Thống kê sẽ được cấu hình sau.`:`Chưa có hóa đơn ở tab `+i.label,o=gt();o.tabs.innerHTML=lt(x.activeTab),o.transferNotice.innerHTML=Le(),o.status.innerHTML=`
        ${x.error?`
              <div
                class="hoa-don-message is-error"
              >
                ${n(x.error)}
              </div>
            `:``}

        ${x.worklistPhase===`refreshing`?`
              <div class="hoa-don-message">
                <span>
                  Đang cập nhật danh sách...
                </span>
              </div>
            `:``}
      `,o.items.innerHTML=e.length?e.map(e=>ft(e,x.activeTab)).join(``):x.worklistPhase===`loading`?`
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
            `,o.pager.innerHTML=r?y({pageNumber:r.pageNumber,canGoPrevious:r.canGoPrevious,hasMore:r.hasMore,loading:r.loading}):``}function _t(){let e=`HOA_DON_HOAN_DON`;return rt(x.detail).has(e)?[{key:e,label:q(e),variant:`danger`,disabled:x.busy,onClick:()=>Xt({actionKey:e,invoiceId:x.detailId,source:`detail`,detail:x.detail})}]:[]}function vt(){let e=x.evidenceViewerImages,n=e.length;n&&x.evidenceViewerIndex>=n&&(x.evidenceViewerIndex=0),J(t,{headerMode:`title`,title:`Ảnh chứng từ`,showRightAction:!1,onBack:()=>l.back(),bottomActions:[]}),t.innerHTML=d({images:e,index:x.evidenceViewerIndex,title:`Ảnh chứng từ`}),t.querySelector(`[data-image-viewer-close]`)?.addEventListener(`click`,()=>l.back()),t.querySelector(`[data-image-viewer-prev]`)?.addEventListener(`click`,()=>{x.evidenceViewerIndex=(x.evidenceViewerIndex-1+n)%n,vt()}),t.querySelector(`[data-image-viewer-next]`)?.addEventListener(`click`,()=>{x.evidenceViewerIndex=(x.evidenceViewerIndex+1)%n,vt()})}async function yt(e){let t=Array.isArray(e?.evidence)?e.evidence:[],n=t.map(e=>e?.storage_path).filter(Boolean);if(!n.length){E(`Chưa có ảnh chứng từ.`);return}if(x.busy)return;let r=String(e?.id_request??``).trim();``+r,x.busy=!0;let i=!1;try{let e=await Ae(n);x.evidenceViewerImages=e.map((e,n)=>{let r=t.find(t=>t?.storage_path===e.storagePath),i=String(r?.loai_chung_tu??``).trim().toUpperCase();return{url:e.url,title:(i===`XAC_NHAN_CHUYEN`?`Ảnh xác nhận chuyển `:`Ảnh yêu cầu chuyển `)+(n+1)}}),x.evidenceViewerIndex=0,i=x.evidenceViewerImages.length>0}catch(e){E(e?.message||`Không tải được ảnh chứng từ.`)}finally{x.busy=!1}i&&await l.open(`evidence-photos:`+r,vt)}function bt(){let e=x.deliveryViewerImages,n=e.length;n&&x.deliveryViewerIndex>=n&&(x.deliveryViewerIndex=0),J(t,{headerMode:`title`,title:`Ảnh giao hàng`,showRightAction:!1,onBack:()=>l.back(),bottomActions:[]}),t.innerHTML=d({images:e,index:x.deliveryViewerIndex,title:`Ảnh giao hàng`}),t.querySelector(`[data-image-viewer-close]`)?.addEventListener(`click`,()=>l.back()),t.querySelector(`[data-image-viewer-prev]`)?.addEventListener(`click`,()=>{x.deliveryViewerIndex=(x.deliveryViewerIndex-1+n)%n,bt()}),t.querySelector(`[data-image-viewer-next]`)?.addEventListener(`click`,()=>{x.deliveryViewerIndex=(x.deliveryViewerIndex+1)%n,bt()})}async function xt(){let e=(Array.isArray(x.detail?.delivery?.photos)?x.detail.delivery.photos:[]).map(e=>e?.storage_path).filter(Boolean);if(!e.length){E(`Đơn chưa có ảnh giao hàng.`);return}if(x.busy)return;`${x.detailId}`,x.busy=!0;let t=!1;try{let n=await ae(e);x.deliveryViewerImages=n.map((e,t)=>({url:e.url,title:`Ảnh giao hàng ${t+1}`})),x.deliveryViewerIndex=0,t=x.deliveryViewerImages.length>0}catch(e){E(e?.message||`Không tải được ảnh giao hàng.`)}finally{x.busy=!1}t&&await l.open(`delivery-photos:${x.detailId}`,bt)}function St(){return String(x.detail?.delivery?.id_phieu_giao_hang??x.detail?.delivery?.id??x.detail?.header?.id_phieu_giao_hang??``).trim()}function Ct(){let e=x.checkHistory??{};return(Array.isArray(e)?e:Array.isArray(e?.events)?e.events:Array.isArray(e?.history)?e.history:Array.isArray(e?.items)?e.items:[]).map(e=>({...e,time_text:e?.time_text||w(e?.created_at??e?.occurred_at??e?.event_at??e?.action_at??e?.updated_at)}))}function wt(){J(t,{headerMode:`title`,title:`Lịch sử kiểm hàng`,onBack:()=>l.back(),rightActions:[{key:`refresh`,icon:`↻`,label:`Tải lại`,dispatchRefresh:!1,onAction:Dt}],bottomActions:[]}),t.innerHTML=`
        <section
          class="hoa-don-page hoa-don-detail-page"
        >
          ${_({events:Ct(),error:x.checkHistoryError})}
        </section>
      `}async function Tt(){let e=St();if(!e)return E(`Không xác định được phiếu giao hàng.`),``;if(x.busy)return``;let t=`hoa-don:check-history:`+e;if(!g.acquire(t))return``;x.busy=!0,x.checkHistoryError=``;try{x.checkHistory=await oe(e)}catch(e){x.checkHistory=null,x.checkHistoryError=e?.message||`Không tải được lịch sử kiểm hàng.`,E(x.checkHistoryError)}finally{x.busy=!1,g.release(t)}return e}async function Et(){let e=await Tt();e&&await l.open(`invoice-check-history:${e}`,wt)}async function Dt(){await Tt()&&wt()}function Ot(){let e=x.invoiceCheckContext?.products;return Array.isArray(e)?e:[]}async function kt(){let e=St();if(!e)return E(`Không xác định được phiếu giao hàng.`),``;if(x.busy)return``;let t=`hoa-don:check-context:`+e;if(!g.acquire(t))return``;x.busy=!0,x.invoiceCheckError=``;try{x.invoiceCheckContext=await ie(e)}catch(e){x.invoiceCheckContext=null,x.invoiceCheckError=e?.message||`Không tải được dữ liệu kiểm hàng.`,E(x.invoiceCheckError)}finally{x.busy=!1,g.release(t)}return e}async function At(){let e=await kt();e&&await l.open(`invoice-check:${e}`,jt)}function jt(){J(t,{headerMode:`title`,title:`Kiểm hàng`,onBack:()=>l.back(),rightActions:[{key:`check-history`,icon:`◷`,label:`Lịch sử kiểm hàng`,dispatchRefresh:!1,onAction:()=>Et()},{key:`refresh`,icon:`↻`,label:`Tải lại`,dispatchRefresh:!1,onAction:async()=>{await kt()&&jt()}}],bottomActions:[]}),t.innerHTML=`
        <section class="hoa-don-page">
          ${re({products:Ot(),error:x.invoiceCheckError,desktopActions:[]})}
        </section>
      `}async function Mt(){if(!x.detailId||x.busy)return;let e=String(x.detail?.order?.id_don_hang??``).trim();if(!e){E(`Không xác định được ID đơn hàng.`);return}let t=`hoa-don:order-history:`+e;if(g.acquire(t)){x.busy=!0,x.orderHistory=null;try{x.orderHistory=await h(e)}catch(e){E(e?.message||`Không tải được lịch sử đơn hàng.`)}finally{x.busy=!1,g.release(t)}await l.open(`invoice-history:${e}`,Nt)}}function Nt(){let e=te(x.orderHistory??{});J(t,{headerMode:`title`,title:`Lịch sử`,showRightAction:!1,onBack:()=>l.back(),bottomActions:[]}),t.innerHTML=`
        <section
          class="hoa-don-page hoa-don-detail-page"
        >
          ${b(e)}
        </section>
      `}async function Pt(){let e=(Array.isArray(x.detail?.settlement_rounds)?x.detail.settlement_rounds:[]).find(e=>String(e?.id_lan_doi_soat??``)===String(x.detailSettlementRoundId??``)),t=Array.isArray(e?.storage_paths)?e.storage_paths.map(e=>String(e??``).trim()).filter(Boolean):[];if(!t.length){E(`Lần tất toán chưa có ảnh chứng từ.`);return}if(x.busy)return;``+x.detailSettlementRoundId,x.busy=!0;let n=!1;try{let e=await Ae(t);x.evidenceViewerImages=e.map((e,t)=>({url:e.url,title:`Ảnh tất toán ${t+1}`})),x.evidenceViewerIndex=0,n=x.evidenceViewerImages.length>0}catch(e){E(e?.message||`Không tải được ảnh chứng từ.`)}finally{x.busy=!1}n&&await l.open(`settlement-evidence-photos:`+x.detailSettlementRoundId,vt)}function Ft(){J(t,{headerMode:`title`,title:`Chi tiết tất toán`,showRightAction:!1,onBack:()=>l.back(),bottomActions:[]}),t.innerHTML=`
        <section
          class="hoa-don-page hoa-don-detail-page"
        >
          ${ne(Ie(x.detail,x.detailSettlementRoundId))}
        </section>
      `,Lt()}async function It(e,t){switch(e){case`HOA_DON_XEM_ANH_GIAO_HANG`:await xt();break;case`HOA_DON_XEM_ANH_TAT_TOAN`:await Pt();break;case`HOA_DON_XEM_KIEM_HANG`:await At();break;case`HOA_DON_XEM_LICH_SU`:await Mt();break;case`HOA_DON_XEM_LAN_TAT_TOAN`:if(x.detailSettlementRoundId=String(t??``).trim(),!x.detailSettlementRoundId){E(`Không tìm thấy lần tất toán.`);break}await l.open(`invoice-settlement-round:`+x.detailSettlementRoundId,Ft);break;default:break}}function Lt(){t.querySelectorAll(`[data-copy-value]`).forEach(e=>{e.addEventListener(`click`,async t=>{t.preventDefault(),t.stopPropagation(),E(await c(e.dataset.copyValue)?`Đã copy`:`Không thể sao chép`)})}),t.querySelectorAll(`[data-record-detail-action]`).forEach(e=>{e.addEventListener(`click`,t=>{t.preventDefault(),t.stopPropagation();let n=String(e.getAttribute(`data-record-detail-action`)??``).trim().toUpperCase(),r=e.getAttribute(`data-record-detail-value`);n&&It(n,r)})})}function Rt(){let e=Fe(x.detail);J(t,{headerMode:`title`,title:`Chi tiết hóa đơn`,onBack:()=>l.back(),rightActions:[...(x.detail?.permission_mask?.fields??{}).history===!0?[p(()=>It(`HOA_DON_XEM_LICH_SU`))]:[],{key:`refresh`,icon:`↻`,label:`Tải lại`,dispatchRefresh:!1,onAction:$t}],bottomActions:x.detailReadOnly?[]:_t()}),t.innerHTML=`
        <section
          class="hoa-don-page hoa-don-detail-page"
        >
          ${ne(e)}
        </section>
      `,Lt()}function zt(){let e=x.collectionCard,r=X(e);if(!e||!r){l.back();return}let i=r?.requires_amount===!1,a=i?Number(r?.amount??0):0;J(t,{headerMode:`title`,title:r?.button_label||`Xử lý tiền`,showRightAction:!1,onBack:()=>l.back(),bottomActions:[]}),t.innerHTML=`
        <section class="hoa-don-collection-page">
          <article class="hoa-don-collection-card">
            <h2>
              ${n(e?.order_code||`Đơn hàng`)}
            </h2>

            <p>
              ${n(r?.summary_label||`Khoản tiền cần xử lý`)}
            </p>

            <strong>
              ${n(Y(r?.amount))}
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
                value="${o(ct(a))}"
                ${i?`readonly`:``}
              >

              ${i?``:`
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
              ${n(Y(r?.amount))}
            </small>
          </div>

          <button
            type="button"
            class="hoa-don-collection-submit"
            data-invoice-collection-submit
          >
            ${n(r?.button_label||`Xác nhận`)}
          </button>
        </section>
      `;let s=t.querySelector(`[data-invoice-money-input]`),c=t.querySelector(`[data-invoice-collection-full-amount]`);if(s&&!i){let e=Math.max(0,Math.trunc(Number(r?.amount??0))),t=()=>{let t=Math.min(e,st(s.value));s.value=ct(t),c&&(c.checked=e>0&&t===e)};s.addEventListener(`input`,t),c?.addEventListener(`change`,()=>{c.checked&&(s.value=ct(e),s.dispatchEvent(new Event(`input`,{bubbles:!0})),s.focus())}),t(),s.focus()}t.querySelector(`[data-invoice-collection-submit]`)?.addEventListener(`click`,()=>{Vt()})}async function Bt(e){!X(e)?.action_key||x.busy||(x.collectionCard=e,await l.open(`collection:`+String(e?.entity_id??``),zt))}async function Vt(){let e=x.collectionCard,n=X(e);if(!e||!n?.action_key||x.busy)return;let r=t.querySelector(`[data-invoice-money-input]`),i=n?.requires_amount===!1?Number(n?.amount??0):st(r?.value),o=Number(n?.amount??0);if(!Number.isSafeInteger(i)||i<=0||Number.isSafeInteger(o)&&o>0&&i>o){E(`Số tiền không hợp lệ.`);return}let s=at(n?.action_key);if(!s){E(`Nghiệp vụ thu tiền không hợp lệ.`);return}let c=`hoa-don-collection:`+String(e?.entity_id??``);if(!g.acquire(c))return;let u=!1;x.busy=!0;try{let t=await fe({requestKey:a(`hoa-don-thu-tien`),invoiceId:e.entity_id,rowVersion:e.row_version,mode:s,amount:i,cashFlowId:n?.id_dong_tien??null}),r=String(e?.entity_id??``),o=x.cards.findIndex(e=>String(e?.entity_id??``)===r),c=t?.card??t?.invoice_card??t?.data?.card??null;if(o>=0&&c&&typeof c==`object`)x.cards[o]=c;else if(o>=0){let e=x.cards[o],t=e?.money&&typeof e.money==`object`?e.money:{},r=Number(t?.collected??0),a=Number(t?.remaining??0),s=Number.isFinite(r)?Math.max(0,r):0,c=Number(t?.total??s+(Number.isFinite(a)?Math.max(0,a):i)),l=Number.isFinite(c)&&c>0?c:s+i,u=Math.min(l,s+i),d=Math.max(0,l-u);x.cards[o]={...e,state:d===0?`DA_THANH_TOAN`:`THANH_TOAN_MOT_PHAN`,row_version:Number(e?.row_version??0)+1,updated_at:new Date().toISOString(),collection_task:null,roles:{...e?.roles??{},collector_id:n?.holder_id??e?.roles?.collector_id??null,collector_name:n?.holder_name??e?.roles?.collector_name??e?.roles?.assignee_name??e?.roles?.creator_name??null},money:{...t,collected:u,remaining:d}}}x.activeTab=`dang-xu-ly`,x.collectionCard=null,x.busy=!1,await l.back(),Z(),E(`Đã cập nhật dòng tiền.`),u=!0}catch(e){E(e?.message||`Không cập nhật được dòng tiền.`)}finally{x.busy=!1,g.release(c),u&&queueMicrotask(()=>{O(e?.entity_id).then(()=>{C()&&l.currentKey()===`list`&&Z()})})}}function Ht(e){return e===`HOA_DON_CHUYEN_TIEN`||e===`HOA_DON_YEU_CAU_CHUYEN_TIEN`||e===`HOA_DON_TAT_TOAN_CONG_TY`||e===`HOA_DON_CHUYEN_QUYEN_THU`}function Ut(){return x.actionEvidenceSequence=Number(x.actionEvidenceSequence??0)+1,`invoice-evidence-${Date.now()}-`+x.actionEvidenceSequence}function Q(){x.actionEvidencePhotos.forEach(e=>{e?.previewUrl&&URL.revokeObjectURL(e.previewUrl)}),x.actionEvidencePhotos=[]}async function Wt(){Q(),x.actionEvidenceSequence=0,await l.back()}function Gt(){let e=t.querySelector(`[data-invoice-settlement-main]`);return e?{note:String(t.querySelector(`[data-invoice-action-note]`)?.value??``),labor:String(e.querySelector(`[data-invoice-settlement-labor]`)?.value??``),lines:Array.from(e.querySelectorAll(`[data-invoice-settlement-row]`)).map(e=>{let t=e.querySelector(`[data-invoice-product-quantity]`);return{id:String(t?.getAttribute(`data-invoice-product-id`)??``).trim(),quantity:String(t?.value??``),price:String(e.querySelector(`[data-invoice-product-price]`)?.value??``)}})}:null}function Kt(e){if(!e)return;let n=t.querySelector(`[data-invoice-settlement-main]`);if(!n)return;let r=t.querySelector(`[data-invoice-action-note]`);r&&(r.value=e.note??``);let i=n.querySelector(`[data-invoice-settlement-labor]`);i&&(i.value=e.labor??``,i.dispatchEvent(new Event(`input`,{bubbles:!0})));let a=new Map((Array.isArray(e.lines)?e.lines:[]).filter(e=>e?.id).map(e=>[e.id,e]));n.querySelectorAll(`[data-invoice-settlement-row]`).forEach(e=>{let t=e.querySelector(`[data-invoice-product-quantity]`),n=String(t?.getAttribute(`data-invoice-product-id`)??``).trim(),r=a.get(n);if(!r)return;t&&(t.value=r.quantity);let i=e.querySelector(`[data-invoice-product-price]`);i&&(i.value=r.price,i.dispatchEvent(new Event(`input`,{bubbles:!0})))})}function qt(e){let t=x.transferConfirmRequest?null:Gt(),n=Array.from(e??[]).filter(e=>String(e?.type??``).startsWith(`image/`));if(!n.length){E(`Vui lòng chọn tệp ảnh hợp lệ.`);return}let r=Math.max(0,5-x.actionEvidencePhotos.length),i=n.slice(0,r);x.actionEvidencePhotos=[...x.actionEvidencePhotos,...i.map(e=>({id:Ut(),file:e,name:e.name,previewUrl:URL.createObjectURL(e)}))],n.length>i.length&&E(`Chỉ được chọn tối đa 5 ảnh.`),x.transferConfirmRequest?Ge():(Yt(),Kt(t))}function Jt(e){let t=x.transferConfirmRequest?null:Gt(),n=String(e??``),r=x.actionEvidencePhotos.find(e=>e.id===n);r?.previewUrl&&URL.revokeObjectURL(r.previewUrl),x.actionEvidencePhotos=x.actionEvidencePhotos.filter(e=>e.id!==n),x.transferConfirmRequest?Ge():(Yt(),Kt(t))}function Yt({context:e=null}={}){let n=V(e)?e:null;if(n&&W(n),!x.actionKey||!x.actionDetail){l.back();return}J(t,{headerMode:`title`,title:q(x.actionKey),showRightAction:!1,onBack:Wt,bottomActions:[{key:`invoice-action-submit`,label:x.actionKey===`HOA_DON_YEU_CAU_CHUYEN_TIEN`?`Xác nhận`:q(x.actionKey),variant:x.actionKey===`HOA_DON_HOAN_DON`?`danger`:`primary`,disabled:x.busy,onClick:Zt}]}),t.innerHTML=Ke({actionKey:x.actionKey,detail:{...x.actionDetail,pendingTransfer:x.transferRequests.find(e=>String(e?.id_hoa_don??``).trim()===String(x.actionDetail?.header?.id_hoa_don??x.detailId??``).trim())??null},employees:x.actionEmployees,currentEmployeeId:x.actionCurrentEmployeeId,photos:x.actionEvidencePhotos}),qe(t,x.actionKey,x.actionDetail),n&&(Kt(n.draft),t.scrollTop=Number(n.scrollTop??0));let r=t.querySelector(`[data-photo-picker-input]`);r?.addEventListener(`change`,()=>{qt(r.files),r.value=``}),t.querySelectorAll(`[data-photo-picker-remove]`).forEach(e=>{e.addEventListener(`click`,()=>{Jt(e.dataset.photoId)})}),t.querySelector(`[data-invoice-settlement-request-open]`)?.addEventListener(`click`,()=>{let e=String(x.actionDetail?.header?.id_hoa_don??x.detailId??``).trim();if(!e){E(`Không xác định được Hóa đơn.`);return}let t=l.currentContext();U(t,Gt()),Xt({actionKey:`HOA_DON_YEU_CAU_CHUYEN_TIEN`,invoiceId:e,source:x.actionSource??`list`,detail:x.actionDetail,authorizationSource:x.actionDetail,parentContext:t})}),t.querySelector(`[data-invoice-action-submit]`)?.addEventListener(`click`,()=>{Zt()})}async function Xt({actionKey:e,invoiceId:t,source:n=`list`,detail:r=null,authorizationSource:i=null,parentContext:a=null}={}){let o=String(e??``).trim().toUpperCase(),s=String(t??``).trim();if(!(!o||!s||x.busy)){``+o+s,x.busy=!0;try{let e=r??await de(s);if(!rt(i??e).has(o))throw Error(`Thao tác không còn khả dụng. Hãy tải lại Hóa đơn.`);let t=[],c=``;if(Ht(o)){let e=await ye(s);t=Array.isArray(e?.employees)?e.employees:[],c=String(e?.current_employee_id??``).trim()}let u=H({actionKey:o,detail:e,employees:t,currentEmployeeId:c,source:n,parentContext:a});x.busy=!1,await l.open(`invoice-action:`+o+`:`+s,Yt,u)}catch(e){E(e?.message||`Không mở được thao tác Hóa đơn.`)}finally{x.busy=!1}}}async function Zt(){if(x.busy||!x.actionKey||!x.actionDetail)return;if(x.actionKey===`HOA_DON_TAT_TOAN_CONG_TY`){let e=t.querySelector(`[data-invoice-settlement-main]`),n=Number(e?.getAttribute(`data-invoice-settlement-available`)??0),r=Array.from(t.querySelectorAll(`[data-invoice-settlement-row]`)).reduce((e,t)=>e+Number(String(t.querySelector(`[data-invoice-product-quantity]`)?.value??`0`).replace(/\D+/g,``))*Number(String(t.querySelector(`[data-invoice-product-price]`)?.value??`0`).replace(/\D+/g,``)),0);if(Number.isFinite(n)&&r>n){E(`Tạm tính vượt số dư đang giữ `+new Intl.NumberFormat(`vi-VN`).format(r-n)+` đ.`);return}}let e;try{e=Je(t,x.actionKey)}catch(e){E(e?.message||`Dữ liệu thao tác không hợp lệ.`);return}let n=x.actionDetail?.header??{},r=String(n?.id_hoa_don??x.detailId??``).trim(),i=Number(n?.row_version);if(!r||!Number.isSafeInteger(i)||i<1){E(`Phiên bản Hóa đơn không hợp lệ. Hãy tải lại.`);return}if((x.actionKey===`HOA_DON_CHUYEN_TIEN`||x.actionKey===`HOA_DON_CHUYEN_QUYEN_THU`)&&!e.receiverId){E(`Hãy chọn nhân viên nhận.`);return}if(x.actionKey===`HOA_DON_YEU_CAU_CHUYEN_TIEN`&&!e.receiverId){E(`Hãy chọn người đang giữ tiền.`);return}if(x.actionKey===`HOA_DON_CHUYEN_TIEN`){let t=Number(x.actionDetail?.actor_balance?.available??0);if(!Number.isSafeInteger(e.amount)||e.amount<=0||Number.isFinite(t)&&t>0&&e.amount>t){E(`Số tiền chuyển không hợp lệ.`);return}}if(x.actionKey===`HOA_DON_YEU_CAU_CHUYEN_TIEN`){let t=x.actionEmployees.find(t=>String(t?.id_nhan_vien??``).trim()===e.receiverId),n=Number(t?.so_du_kha_dung??0);if(!Number.isSafeInteger(n)||n<=0||!Number.isSafeInteger(e.amount)||e.amount<=0||e.amount>n){E(`Số tiền yêu cầu vượt quá số dư người đang giữ.`);return}}if(x.actionKey===`HOA_DON_TAT_TOAN_CONG_TY`&&!e.lines.length){E(`Hãy nhập số lượng sản phẩm cần tất toán.`);return}if(x.actionKey===`HOA_DON_HOAN_DON`){if(!e.reason){E(`Hãy nhập lý do hoàn đơn.`);return}if(!e.lines.length){E(`Hãy nhập số lượng sản phẩm cần hoàn.`);return}}let o=x.actionKey,s=x.actionSource,c=o===`HOA_DON_CHUYEN_TIEN`||o===`HOA_DON_YEU_CAU_CHUYEN_TIEN`||o===`HOA_DON_CHUYEN_QUYEN_THU`,u=`hoa-don-action-submit:`+o+`:`+r;if(g.acquire(u)){x.busy=!0;try{switch(o){case`HOA_DON_CHUYEN_TIEN`:await be({requestKey:a(`hoa-don-chuyen-tien`),invoiceId:r,rowVersion:i,receiverId:e.receiverId,amount:e.amount});break;case`HOA_DON_YEU_CAU_CHUYEN_TIEN`:await xe({requestKey:a(`hoa-don-yeu-cau-chuyen-tien`),invoiceId:r,rowVersion:i,holderId:e.receiverId,amount:e.amount,note:e.note});break;case`HOA_DON_CHUYEN_QUYEN_THU`:await Se({requestKey:a(`hoa-don-chuyen-quyen-thu`),invoiceId:r,rowVersion:i,receiverId:e.receiverId});break;case`HOA_DON_TAT_TOAN_CONG_TY`:{let t=[];try{t=await ke({invoiceId:r,stage:`tat-toan-cong-ty`,files:x.actionEvidencePhotos.map(e=>e.file)}),await Ce({requestKey:a(`hoa-don-tat-toan-cong-ty`),invoiceId:r,rowVersion:i,laborAmount:e.laborAmount,lines:e.lines,note:e.note,storagePaths:t})}catch(e){throw t.length&&await Oe(t).catch(()=>{}),e}break}case`HOA_DON_HOAN_DON`:await we({requestKey:a(`hoa-don-hoan-don`),invoiceId:r,rowVersion:i,reason:e.reason,lines:e.lines});break;default:throw Error(`Nghiệp vụ Hóa đơn chưa được hỗ trợ.`)}c&&(x.transferRequests=[],x.transferRequestsLoaded=!1,x.transferError=``),Q(),x.actionEvidenceSequence=0,x.actionKey=``,x.actionDetail=null,x.actionEmployees=[],x.actionCurrentEmployeeId=``,x.busy=!1,c&&await K(),await O(r),c?await l.reset(`list`,Z):(await l.back(),s===`detail`&&await $t()),E(`Đã `+q(o).toLowerCase()+`.`)}catch(e){E(e?.message||`Không thực hiện được thao tác Hóa đơn.`)}finally{x.busy=!1,g.release(u)}}}async function $(e={}){if(!C())return;let t=e?.silent===!0,n=e?.force===!0||t;String(e?.reason??`initial`);let r=e?.pageAction===`next`||e?.pageAction===`previous`?e.pageAction:``;if(e?.allowWhileBusy!==!0&&(t&&x.worklistBusy||!t&&x.busy&&!x.worklistBusy))return;let a=++x.worklistRequestId,o=x.activeTab;S.setTab(o),S.setSearch(x.search);let s=S.snapshot();if(o===`thong-ke`){x.worklistBusy=!1,x.worklistPhase=`ready`,x.cards=[],x.error=``;let e=l.currentKey();e===null?await l.reset(`list`,Z):e===`list`&&Z(),t||i?.markReady?.({state:`ready`,tabKey:o,itemCount:0,transferCount:x.pendingTransferCount});return}x.worklistBusy=!0,x.error=``,x.cards=s?.loaded===!0&&Array.isArray(s?.items)?s.items:[],x.error=s?.error||``,x.worklistPhase=s?.loaded===!0?n?`refreshing`:`ready`:`loading`;let c=l.currentKey();c===null?await l.reset(`list`,Z):c===`list`&&Z();let u=!0;try{let e=r===`next`?await S.next():r===`previous`?S.previous():n?await S.refresh():await S.load();if(u=e?.stale!==!0,!u||a!==x.worklistRequestId||o!==x.activeTab||!C())return;x.pendingTransferCount=Math.max(0,Number(e?.meta?.pendingTransferCount??x.pendingTransferCount)||0),x.cards=Array.isArray(e?.items)?e.items:[],x.error=e?.error||``,x.worklistPhase=x.error?`error`:`ready`;let s=l.currentKey();s===null?await l.reset(`list`,Z):s===`list`&&Z(),t||i?.markReady?.({state:`ready`,tabKey:o,itemCount:x.cards.length,transferCount:x.pendingTransferCount,pageNumber:e?.pageNumber??1,hasMore:e?.hasMore===!0})}catch(e){if(a!==x.worklistRequestId||o!==x.activeTab||!C())return;let n=e?.message||`Không tải được danh sách Hóa đơn.`,r=x.cards.length>0;x.error=n,x.worklistPhase=r?`ready`:`error`;let s=l.currentKey();s===null?await l.reset(`list`,Z):s===`list`&&Z(),(t||r)&&E(n),t||i?.markReady?.({state:`error`,tabKey:o,itemCount:x.cards.length,transferCount:x.pendingTransferCount,message:x.error})}finally{u&&a===x.worklistRequestId&&(x.worklistBusy=!1)}}async function Qt(e,{readOnly:t=!1}={}){let n=String(e??``).trim();if(!(!n||x.busy)){x.detailReadOnly=t===!0,x.busy=!0,x.error=``;try{x.detailId=n,x.detail=await de(n),x.busy=!1,await l.open(`detail:${n}`,Rt)}catch(e){x.error=e?.message||`Không tải được chi tiết Hóa đơn.`,Z()}finally{x.busy=!1}}}async function $t(){if(!(!x.detailId||x.busy)){x.busy=!0;try{x.detail=await de(x.detailId),x.busy=!1,Rt()}catch(e){E(e?.message||`Không cập nhật được chi tiết Hóa đơn.`)}finally{x.busy=!1}}}$()}};export{pt as default};