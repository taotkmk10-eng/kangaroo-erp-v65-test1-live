import{r as e}from"./realtimeImpactRegistry-BgzWm3W7.js";import{a as t,i as n,n as r,o as i,r as a,t as o}from"./searchRuntime-C7VufGsy.js";import{t as s}from"./runtimeCore-t2AnId75.js";import{t as c}from"./confirmDialog-gKnCfl1O.js";import{t as l}from"./toast-DvZC7wAk.js";function u(e){return e&&typeof e==`object`?e:{}}async function d({search:e=``,includeInactive:t=!0,limit:n=300}={}){return i(`rpc_get_nhan_vien_directory`,{p_search:String(e??``).trim()||null,p_limit:Number(n)||300,p_include_inactive:!!t},`Không tải được danh sách nhân viên`)}async function ee(e){return i(`rpc_tao_nhan_vien`,{p_request_key:a(`nhan-vien-create`),p_payload:u(e)},`Không tạo được nhân viên`)}async function te(e){return i(`rpc_cap_nhat_ho_so_nhan_vien`,{p_request_key:a(`nhan-vien-profile`),p_payload:u(e)},`Không cập nhật được nhân viên`)}async function ne(e){return i(`rpc_cap_nhat_phan_quyen_nhan_vien`,{p_request_key:a(`nhan-vien-permission`),p_payload:u(e)},`Không cập nhật được phân quyền`)}async function re(e){return i(`rpc_reset_mat_khau_nhan_vien`,{p_request_key:a(`nhan-vien-password`),p_payload:u(e)},`Không đổi được mật khẩu`)}async function ie(e){return i(`rpc_khoa_mo_nhan_vien`,{p_request_key:a(`nhan-vien-state`),p_payload:u(e)},`Không đổi được trạng thái nhân viên`)}var f=Object.freeze([{key:`MODULE_NHAN_VIEN_VIEW`,moduleId:`nhan_vien`,label:`Nhân viên`,description:`Luôn hiển thị để nhân viên xem hồ sơ và đổi mật khẩu của chính mình.`,required:!0},{key:`MODULE_TAO_DON_VIEW`,moduleId:`tao_don`,label:`Tạo đơn`,description:`Hiển thị module Tạo đơn trên Trang chủ.`},{key:`MODULE_GIAO_HANG_VIEW`,moduleId:`giao_hang`,label:`Giao hàng`,description:`Hiển thị module Giao hàng trên Trang chủ.`},{key:`MODULE_HOA_DON_VIEW`,moduleId:`hoa_don`,label:`Hóa đơn`,description:`Hiển thị module Hóa đơn trên Trang chủ.`},{key:`MODULE_DOI_SOAT_VIEW`,moduleId:`doi_soat`,label:`Đối soát`,description:`Hiển thị module Đối soát trên Trang chủ.`},{key:`MODULE_HAU_MAI_VIEW`,moduleId:`dich_vu`,label:`Dịch vụ`,description:`Hiển thị module Dịch vụ trên Trang chủ.`}]),p=new Set(f.map(e=>e.key));function m(e,t){e.dispatchEvent(new CustomEvent(`kangaroo:page-chrome`,{bubbles:!0,detail:t}))}function h(e,t=``){return String(e??``).trim()||t}function g(e){return h(e)||null}function _(e){switch(String(e??``).toUpperCase()){case`ACTIVE`:return`Đang hoạt động`;case`LOCKED`:return`Đã khóa`;case`DELETED`:return`Đã xóa`;default:return h(e,`Không xác định`)}}function v(e){return String(e??``).toUpperCase()===`ACTIVE`?`online`:`offline`}function y(e){let t=Array.isArray(e?.permission_keys)?e.permission_keys:[],n=e?.permissions??{},r=new Set([...t,...Array.isArray(n.modules)?n.modules:[],...Array.isArray(n.resources)?n.resources:[],...Array.isArray(n.fields)?n.fields:[],...Array.isArray(n.actions)?n.actions:[],...Array.isArray(n.special)?n.special:[]].map(String));return r.add(`MODULE_NHAN_VIEN_VIEW`),r}function b(e){let t=[e?.message,e?.details,e?.hint].map(e=>String(e??``).trim()).filter(Boolean).join(` `);for(let[e,n]of[[`EMPLOYEE_LOGIN_EXISTS`,`Tên đăng nhập đã tồn tại.`],[`EMPLOYEE_LOGIN_REQUIRED`,`Vui lòng nhập tên đăng nhập.`],[`EMPLOYEE_PASSWORD_REQUIRED`,`Vui lòng nhập mật khẩu.`],[`EMPLOYEE_NAME_REQUIRED`,`Vui lòng nhập tên hiển thị.`],[`EMPLOYEE_NOT_FOUND`,`Không tìm thấy nhân viên.`],[`RESET_OTHER_PASSWORD_FORBIDDEN`,`Bạn không có quyền reset mật khẩu nhân viên khác.`],[`EMPLOYEE_PROFILE_UPDATE_FORBIDDEN`,`Bạn không có quyền sửa hồ sơ nhân viên này.`],[`SELF_STATE_CHANGE_FORBIDDEN`,`Không thể tự khóa tài khoản của chính mình.`],[`EMPLOYEE_PROTECTED`,`Tài khoản hệ thống này không thể bị khóa.`],[`ROW_VERSION_CONFLICT`,`Dữ liệu đã thay đổi. Vui lòng tải lại rồi thao tác lại.`]])if(t.includes(e))return n;let n=t.match(/"message"\s*:\s*"([^"]+)"/i);return n?.[1]?n[1]:t||`Không thực hiện được thao tác.`}function x({name:e,label:r,value:i=``,type:a=`text`,required:o=!1,disabled:s=!1,autocomplete:c=`off`,textarea:l=!1,placeholder:u=``}){let d=`
    name="${n(e)}"
    ${o?`required`:``}
    ${s?`disabled`:``}
    autocomplete="${n(c)}"
    placeholder="${n(u)}"
  `;return`
    <label class="nhan-vien-field">
      <span>
        ${t(r)}
        ${o?`<em>*</em>`:``}
      </span>
      ${l?`<textarea ${d}>${t(i)}</textarea>`:`<input
            type="${n(a)}"
            value="${n(i)}"
            ${d}
          />`}
    </label>
  `}function S(e){return`
    <div class="nhan-vien-empty">
      ${t(e)}
    </div>
  `}function ae(e){let r=h(e.trang_thai).toUpperCase();return`
    <button
      class="
        nhan-vien-card
        nhan-vien-card--compact
      "
      type="button"
      data-employee-id="${n(e.id_nhan_vien)}"
    >
      <span class="nhan-vien-card__compact-body">
        <span class="nhan-vien-card__compact-row">
          <strong
            class="nhan-vien-card__compact-name"
          >
            ${t(h(e.ten_nhan_vien,`Chưa đặt tên`))}
          </strong>

          <span
            class="nhan-vien-card__presence"
            data-state="${n(r)}"
          >
            ${t(v(r))}
          </span>
        </span>

        <span class="nhan-vien-card__phone">
          ${t(h(e.so_dien_thoai,`Chưa có số điện thoại`))}
        </span>
      </span>
    </button>
  `}function oe(e){return[[`Mã nhân viên`,e.ma_nhan_vien],[`Tên hiển thị`,e.ten_nhan_vien],[`Tên đăng nhập`,e.ten_dang_nhap],[`Số điện thoại`,e.so_dien_thoai],[`Email`,e.email],[`Địa chỉ`,e.dia_chi],[`Trạng thái`,_(e.trang_thai)]].filter(([,e])=>h(e)).map(([e,n])=>`
        <div class="nhan-vien-detail-row">
          <span>${t(e)}</span>
          <strong>${t(n)}</strong>
        </div>
      `).join(``)}var C={id:`nhan-vien`,label:`Nhân viên`,shortLabel:`NV`,async render(i,a={}){let u=r(),_={busy:!1,search:``,employees:[],selectedId:``,canViewAll:!1,canManage:!1,currentEmployeeId:``,directoryPhase:`idle`,directoryError:``,directorySearchCache:new Map};function v(){return typeof a?.isActive!=`function`||a.isActive()}function C(e,t){let n=e?.target;if(!n||typeof n.closest!=`function`)return null;let r=n.closest(t);return r&&i.contains(r)?r:null}async function w(e){let t=C(e,`[data-employee-id]`);t&&(e.preventDefault(),_.selectedId=t.dataset.employeeId,await u.open(`detail:${_.selectedId}`,Z))}function T(e){let t=C(e,`[data-employee-form]`);if(t){t.querySelector(`[name="mat_khau"]`)?pe(e,t):he(e,t);return}let n=C(e,`[data-password-form]`);if(n){_e(e,n);return}let r=C(e,`[data-permission-form]`);r&&ye(e,r)}i.addEventListener(`click`,w),i.addEventListener(`submit`,T);function E(){return new Promise(e=>{(globalThis.requestAnimationFrame??(e=>globalThis.setTimeout(e,0)))(()=>e())})}function D({title:e,key:t,idleLabel:n,busyLabel:r}){m(i,{headerMode:`title`,title:e,onBack:()=>u.back(),showRightAction:!1,bottomActions:[{key:t,label:_.busy?r:n,variant:`primary`,formAction:`submit`,disabled:_.busy}]})}function O(){D({title:`Thêm nhân viên`,key:`create`,idleLabel:`Tạo nhân viên`,busyLabel:`Đang tạo...`})}function k(){D({title:`Sửa nhân viên`,key:`save`,idleLabel:`Lưu thay đổi`,busyLabel:`Đang lưu...`})}function A(){D({title:`Đổi mật khẩu`,key:`save-password`,idleLabel:`Lưu mật khẩu`,busyLabel:`Đang đổi...`})}function j(){D({title:`Quyền module`,key:`save-permission`,idleLabel:`Lưu quyền`,busyLabel:`Đang lưu...`})}function M(e){m(i,{headerMode:`title`,title:`Chi tiết nhân viên`,onBack:()=>u.back(),showRightAction:!0,rightIcon:`↻`,rightLabel:`Tải lại`,onRightAction:()=>$({keepScreen:!0,reason:`detail-refresh`}),bottomActions:Y(e).map(e=>({...e,label:_.busy&&e.key===`state`?`Đang cập nhật...`:e.label,disabled:_.busy||e.disabled===!0}))})}function se(e){return String(e??``).trim().toLocaleLowerCase(`vi`)}function N(){_.directorySearchCache.clear()}function ce({search:e=``,includeInactive:t=!0,limit:n=30}={}){let r=Math.max(1,Math.min(50,Number(n)||30)),i=JSON.stringify([se(e),t===!0,r]),a=Date.now(),o=_.directorySearchCache.get(i);if(o&&o.expiresAt>a)return o.promise;_.directorySearchCache.delete(i);let s={expiresAt:a+6e4,promise:null};return s.promise=Promise.resolve().then(()=>d({search:e,includeInactive:t,limit:r})).catch(e=>{throw _.directorySearchCache.get(i)===s&&_.directorySearchCache.delete(i),e}),_.directorySearchCache.set(i,s),s.promise}let P=o({initialValue:_.search,debounceMs:500,isActive:v,onApply(e,t){_.search=String(e??``).trim();let n=String(t?.reason??`search`);return $({silent:n===`debounce`||n===`submit`,reason:n})}}),F=new Map,I=0;function L(){I&&=(globalThis.clearTimeout(I),0)}function le(e={}){let t=String(e?.entity_id??``).trim(),n=String(e?.action_key??`UNKNOWN`).trim().toUpperCase();return`NHAN_VIEN:`+(t||n)}function R(){L();let e=async()=>{if(I=0,!v()){F.clear();return}if(_.busy){I=globalThis.setTimeout(()=>{e()},180);return}let t=[...F.values()];F.clear(),t.length&&(N(),await $({silent:!0,keepScreen:!0,force:!0,reason:`realtime-nhan-vien`}).catch(e=>{console.warn(`[NhanVien] Realtime directory lỗi.`,e)}),F.size&&R())};I=globalThis.setTimeout(()=>{e()},160)}function ue(t={}){if(!e(t,`nhan-vien`).shouldDispatch)return null;v()&&String(t?.entity_type??``).trim().toUpperCase()===`NHAN_VIEN`&&(F.set(le(t),t),R())}let z=0,B=!1,V=null;function H(){z&&=(globalThis.clearTimeout(z),0)}function U(){B=!0,H();let e=async()=>{if(z=0,!v())return B=!1,!1;if(_.busy)return z=globalThis.setTimeout(()=>{e()},180),!1;if(V)return V;if(!B)return!1;B=!1,N();let t=Promise.resolve().then(()=>$({silent:!0,keepScreen:!0,reason:`authoritative-resume`})).then(()=>!0).catch(e=>(v()&&console.warn(`[NhanVien] Authoritative resume lỗi.`,e),!1)),n;return n=t.finally(()=>{V===n&&(V=null),v()&&B&&U()}),V=n,n};return z=globalThis.setTimeout(()=>{e()},0),!0}function de(){return v()?U():!1}a?.onRealtimeInvalidation?.(ue),a?.onRealtimeResume?.(de),a?.onCleanup?.(()=>{L(),H(),B=!1,F.clear(),i.removeEventListener(`click`,w),i.removeEventListener(`submit`,T),N(),P.dispose()});let W=s({key:`nhan-vien-directory`,runtime:a,initialData:{employees:[],canViewAll:!1,canManage:!1,currentEmployeeId:``},load(){return ce({search:_.search,includeInactive:!0,limit:30})},normalize(e){return{employees:Array.isArray(e?.employees)?e.employees:[],canViewAll:e?.can_view_all===!0,canManage:e?.can_manage===!0,currentEmployeeId:h(e?.current_employee_id)}}});function G(e){let t=e?.data&&typeof e.data==`object`?e.data:{};_.employees=Array.isArray(t.employees)?t.employees:[],_.canViewAll=t.canViewAll===!0,_.canManage=t.canManage===!0,_.currentEmployeeId=h(t.currentEmployeeId),_.directoryPhase=String(e?.phase??`idle`),_.directoryError=String(e?.error??``)}async function K({keepScreen:e=!1}={}){let t=u.currentKey();if(e&&t?.startsWith(`detail:`)){Z();return}if(t===null){await u.reset(`list`,X);return}t===`list`&&X()}function q(){return _.employees.find(e=>e.id_nhan_vien===_.selectedId)??null}function J(e){if(!e?.id_nhan_vien)return;let t=_.employees.findIndex(t=>t.id_nhan_vien===e.id_nhan_vien);t>=0?_.employees[t]={..._.employees[t],...e}:_.employees.unshift(e)}function Y(e){let t=new Set(Array.isArray(e?.allowed_actions)?e.allowed_actions:[]),n=t.has(`EDIT_PROFILE`),r=t.has(`RESET_PASSWORD`),i=t.has(`EDIT_PERMISSIONS`),a=t.has(`CHANGE_STATE`),o=[];return n&&o.push({key:`edit`,label:`Sửa`,variant:`secondary`,onClick:()=>u.open(`edit:${e.id_nhan_vien}`,me)}),r&&o.push({key:`password`,label:`PASS`,variant:`secondary`,onClick:()=>u.open(`password:${e.id_nhan_vien}`,ge)}),i&&o.push({key:`permission`,label:`Quyền`,variant:`primary`,onClick:()=>u.open(`permission:${e.id_nhan_vien}`,ve)}),a&&o.push({key:`state`,label:e.trang_thai===`LOCKED`?`Mở`:`Khoá`,variant:e.trang_thai===`LOCKED`?`primary`:`danger`,onClick:()=>be(e)}),o}function fe(){return i.querySelector(`[data-nhan-vien-list-root]`)||(i.innerHTML=`
        <section
          class="nhan-vien-page"
          data-nhan-vien-list-root
        >
          <div class="nhan-vien-list-heading">
            <strong>Danh sách nhân viên</strong>

            <span
              data-nhan-vien-list-count
            ></span>
          </div>

          <p
            class="nhan-vien-muted"
            data-nhan-vien-list-error
            hidden
          ></p>

          <p
            class="nhan-vien-muted"
            data-nhan-vien-list-phase
            hidden
          >
            Đang cập nhật danh sách...
          </p>

          <div
            class="nhan-vien-list"
            data-nhan-vien-list
          ></div>
        </section>
      `,i.querySelector(`[data-nhan-vien-list-root]`))}function X(){m(i,{headerMode:`search`,placeholder:`Tìm tên / mã / tài khoản...`,searchValue:P.snapshot().draft,onSearchInput(e){P.input(e)},onSearch(e){return P.submit(e,{reason:`submit`})},rightActions:[_.canManage?{key:`add`,icon:`+`,label:`Thêm nhân viên`,onAction:()=>u.open(`create`,Q)}:null,{key:`refresh`,icon:`↻`,label:`Tải lại`,onAction:()=>$({reason:`refresh`})}].filter(Boolean),bottomActions:_.canManage?[{key:`NHAN_VIEN_THEM`,label:`Thêm nhân viên`,variant:`primary`,onClick:()=>u.open(`create`,Q)}]:[]});let e=_.employees,t=fe(),n=t.querySelector(`[data-nhan-vien-list-count]`),r=t.querySelector(`[data-nhan-vien-list-error]`),a=t.querySelector(`[data-nhan-vien-list-phase]`),o=t.querySelector(`[data-nhan-vien-list]`);n.textContent=`${e.length} tài khoản`,r.hidden=!_.directoryError,r.textContent=_.directoryError,a.hidden=_.directoryPhase!==`refreshing`,o.innerHTML=e.length?e.map(ae).join(``):_.directoryPhase===`loading`?S(`Đang tải danh sách...`):_.directoryError?S(`Không tải được danh sách nhân viên.`):S(`Chưa có nhân viên phù hợp.`)}function Z(){let e=q();if(!e){u.back();return}m(i,{headerMode:`title`,title:`Chi tiết nhân viên`,onBack:()=>u.back(),showRightAction:!0,rightIcon:`↻`,rightLabel:`Tải lại`,onRightAction:()=>$({keepScreen:!0,reason:`detail-refresh`}),bottomActions:Y(e)});let n=y(e),r=f.filter(e=>n.has(e.key));i.innerHTML=`
        <section class="nhan-vien-page nhan-vien-detail-page">
          <article class="nhan-vien-block">
            <h3>Thông tin nhân viên</h3>
            ${oe(e)}
            ${h(e.ghi_chu)?`<div class="nhan-vien-note"><span>Ghi chú</span><p>${t(e.ghi_chu)}</p></div>`:``}
          </article>

          <article class="nhan-vien-block">
            <h3>Phân quyền</h3>
            ${r.length?r.map(e=>`
                      <div class="nhan-vien-permission-line">
                        <span class="nhan-vien-permission-dot"></span>
                        <span>${t(e.label)}</span>
                      </div>
                    `).join(``):`<p class="nhan-vien-muted">Chỉ có quyền hồ sơ cá nhân mặc định.</p>`}
          </article>
        </section>
      `}function Q(){m(i,{headerMode:`title`,title:`Thêm nhân viên`,onBack:()=>u.back(),showRightAction:!1,bottomActions:[{key:`create`,label:`Tạo nhân viên`,variant:`primary`,formAction:`submit`,disabled:_.busy}]}),i.innerHTML=`
        <section class="nhan-vien-page nhan-vien-form-page">
          <form class="nhan-vien-form" data-employee-form>
            <article class="nhan-vien-block">
              <h3>Thông tin đăng nhập</h3>
              ${x({name:`ten_nhan_vien`,label:`Tên hiển thị`,required:!0})}
              ${x({name:`ten_dang_nhap`,label:`Tên đăng nhập`,required:!0,autocomplete:`username`})}
              ${x({name:`mat_khau`,label:`Mật khẩu`,type:`password`,required:!0,autocomplete:`new-password`})}
              ${x({name:`xac_nhan_mat_khau`,label:`Nhập lại mật khẩu`,type:`password`,required:!0,autocomplete:`new-password`})}
            </article>

            <article class="nhan-vien-block">
              <h3>Thông tin liên hệ</h3>
              ${x({name:`so_dien_thoai`,label:`Số điện thoại`,type:`tel`,autocomplete:`tel`})}
              ${x({name:`email`,label:`Email`,type:`email`,autocomplete:`email`})}
              ${x({name:`dia_chi`,label:`Địa chỉ`,autocomplete:`street-address`})}
              ${x({name:`ghi_chu`,label:`Ghi chú`,textarea:!0})}
            </article>

            <p class="nhan-vien-form-note">
              Tên đăng nhập và mật khẩu chỉ cần không để trống. Nhân viên mới mặc định chỉ có quyền hồ sơ cá nhân.
            </p>
          </form>
        </section>
      `}async function pe(e,t=e.currentTarget){if(e.preventDefault(),_.busy)return;let n=new FormData(t),r=String(n.get(`mat_khau`)??``),i=String(n.get(`xac_nhan_mat_khau`)??``);if(!h(n.get(`ten_nhan_vien`))){l(`Vui lòng nhập tên hiển thị.`);return}if(!h(n.get(`ten_dang_nhap`))){l(`Vui lòng nhập tên đăng nhập.`);return}if(!r){l(`Vui lòng nhập mật khẩu.`);return}if(r!==i){l(`Mật khẩu nhập lại chưa khớp.`);return}_.busy=!0,O(),await E();try{J((await ee({ten_nhan_vien:h(n.get(`ten_nhan_vien`)),ten_dang_nhap:h(n.get(`ten_dang_nhap`)),mat_khau:r,so_dien_thoai:g(n.get(`so_dien_thoai`)),email:g(n.get(`email`)),dia_chi:g(n.get(`dia_chi`)),ghi_chu:g(n.get(`ghi_chu`))}))?.employee),N(),_.busy=!1,await u.back(),l(`Đã tạo nhân viên.`)}catch(e){_.busy=!1,O(),l(b(e))}finally{_.busy=!1}}function me(){let e=q();if(!e){u.back();return}let t=_.canManage;m(i,{headerMode:`title`,title:`Sửa nhân viên`,onBack:()=>u.back(),showRightAction:!1,bottomActions:[{key:`save`,label:`Lưu thay đổi`,variant:`primary`,formAction:`submit`,disabled:_.busy}]}),i.innerHTML=`
        <section class="nhan-vien-page nhan-vien-form-page">
          <form class="nhan-vien-form" data-employee-form>
            <article class="nhan-vien-block">
              <h3>Thông tin nhân viên</h3>
              ${x({name:`ten_nhan_vien`,label:`Tên hiển thị`,value:e.ten_nhan_vien,required:!0})}
              ${x({name:`ten_dang_nhap`,label:`Tên đăng nhập`,value:e.ten_dang_nhap,required:!0,disabled:!t,autocomplete:`username`})}
              ${x({name:`so_dien_thoai`,label:`Số điện thoại`,value:e.so_dien_thoai,type:`tel`,autocomplete:`tel`})}
              ${x({name:`email`,label:`Email`,value:e.email,type:`email`,autocomplete:`email`})}
              ${x({name:`dia_chi`,label:`Địa chỉ`,value:e.dia_chi,autocomplete:`street-address`})}
              ${x({name:`ghi_chu`,label:`Ghi chú`,value:e.ghi_chu,textarea:!0})}
            </article>
          </form>
        </section>
      `}async function he(e,t=e.currentTarget){e.preventDefault();let n=q();if(!n||_.busy)return;let r=new FormData(t),i=h(r.get(`ten_nhan_vien`));if(!i){l(`Vui lòng nhập tên hiển thị.`);return}let a=e.currentTarget.elements.ten_dang_nhap.disabled?n.ten_dang_nhap:h(r.get(`ten_dang_nhap`));if(!a){l(`Vui lòng nhập tên đăng nhập.`);return}_.busy=!0,k(),await E();try{J((await te({id_nhan_vien:n.id_nhan_vien,expected_row_version:n.row_version,ten_nhan_vien:i,ten_dang_nhap:a,so_dien_thoai:g(r.get(`so_dien_thoai`)),email:g(r.get(`email`)),dia_chi:g(r.get(`dia_chi`)),ghi_chu:g(r.get(`ghi_chu`))}))?.employee),N(),_.busy=!1,await u.back(),Z(),l(`Đã cập nhật nhân viên.`)}catch(e){_.busy=!1,k(),l(b(e))}finally{_.busy=!1}}function ge(){let e=q();if(!e){u.back();return}m(i,{headerMode:`title`,title:`Đổi mật khẩu`,onBack:()=>u.back(),showRightAction:!1,bottomActions:[{key:`save-password`,label:`Lưu mật khẩu`,variant:`primary`,formAction:`submit`,disabled:_.busy}]}),i.innerHTML=`
        <section class="nhan-vien-page nhan-vien-form-page">
          <form class="nhan-vien-form" data-password-form>
            <article class="nhan-vien-block">
              <h3>${t(e.ten_nhan_vien)}</h3>
              ${x({name:`mat_khau_moi`,label:`Mật khẩu mới`,type:`password`,required:!0,autocomplete:`new-password`})}
              ${x({name:`xac_nhan_mat_khau`,label:`Nhập lại mật khẩu`,type:`password`,required:!0,autocomplete:`new-password`})}
            </article>
            <p class="nhan-vien-form-note">Mật khẩu chỉ cần không để trống.</p>
          </form>
        </section>
      `}async function _e(e,t=e.currentTarget){e.preventDefault();let n=q();if(!n||_.busy)return;let r=new FormData(t),i=String(r.get(`mat_khau_moi`)??``),a=String(r.get(`xac_nhan_mat_khau`)??``);if(!i){l(`Vui lòng nhập mật khẩu mới.`);return}if(i!==a){l(`Mật khẩu nhập lại chưa khớp.`);return}_.busy=!0,A(),await E();try{J((await re({id_nhan_vien:n.id_nhan_vien,expected_row_version:n.row_version,mat_khau_moi:i}))?.employee),N(),_.busy=!1,await u.back(),Z(),l(`Đã đổi mật khẩu.`)}catch(e){_.busy=!1,A(),l(b(e))}finally{_.busy=!1}}function ve(){let e=q();if(!e){u.back();return}let r=y(e);m(i,{headerMode:`title`,title:`Quyền module`,onBack:()=>u.back(),showRightAction:!1,bottomActions:[{key:`save-permission`,label:`Lưu quyền`,variant:`primary`,formAction:`submit`,disabled:_.busy}]}),i.innerHTML=`
        <section
          class="nhan-vien-page nhan-vien-form-page"
        >
          <form
            class="nhan-vien-form"
            data-permission-form
          >
            <article class="nhan-vien-block">
              <h3>
                ${t(e.ten_nhan_vien)}
              </h3>

              <p class="nhan-vien-muted">
                Chọn các module được hiển thị trên Trang chủ.
                Quyền thao tác chi tiết trong từng module sẽ được cấu hình sau.
              </p>

              <div class="nhan-vien-permission-list">
                ${f.map(e=>{let i=e.required===!0||r.has(e.key);return`
                      <label
                        class="
                          nhan-vien-permission-option
                          ${e.required===!0?`is-required`:``}
                        "
                      >
                        <input
                          type="checkbox"
                          name="permission_key"
                          value="${n(e.key)}"
                          ${i?`checked`:``}
                          ${e.required===!0?`disabled aria-disabled="true"`:``}
                        />

                        <span>
                          <strong>
                            ${t(e.label)}
                          </strong>

                          <small>
                            ${t(e.description)}
                          </small>

                          ${e.required===!0?`<small>Quyền mặc định — không thể tắt.</small>`:``}
                        </span>
                      </label>
                    `}).join(``)}
              </div>
            </article>
          </form>
        </section>
      `}async function ye(e,t=e.currentTarget){e.preventDefault();let n=q();if(!n||_.busy)return;let r=new FormData(t),i=Array.from(new Set([`MODULE_NHAN_VIEN_VIEW`,...r.getAll(`permission_key`).map(String).filter(e=>p.has(e))]));_.busy=!0,j(),await E();try{J((await ne({id_nhan_vien:n.id_nhan_vien,expected_row_version:n.permission_row_version,permission_keys:i}))?.employee),N(),_.busy=!1,await u.back(),Z(),l(`Đã cập nhật phân quyền.`)}catch(e){_.busy=!1,j(),l(b(e))}finally{_.busy=!1}}async function be(e){if(_.busy)return;let t=e.trang_thai===`LOCKED`?`ACTIVE`:`LOCKED`;if(await c({title:t===`LOCKED`?`Khóa tài khoản`:`Mở khóa tài khoản`,message:t===`LOCKED`?`Bạn chắc chắn muốn khóa tài khoản ${e.ten_nhan_vien}?`:`Bạn chắc chắn muốn mở khóa tài khoản ${e.ten_nhan_vien}?`,confirmLabel:t===`LOCKED`?`Khóa tài khoản`:`Mở khóa`,tone:t===`LOCKED`?`danger`:`default`})){_.busy=!0,M(e),await E();try{J((await ie({id_nhan_vien:e.id_nhan_vien,expected_row_version:e.row_version,target_state:t}))?.employee),N(),_.busy=!1,Z(),l(t===`LOCKED`?`Đã khóa tài khoản.`:`Đã mở khóa tài khoản.`)}catch(t){_.busy=!1,M(e),l(b(t))}finally{_.busy=!1}}}async function $({silent:e=!1,keepScreen:t=!1,reason:n=``}={}){if(!v()||_.busy&&!e)return;let r=W.snapshot();if(e&&r.loaded&&(W.replaceData({...r.data&&typeof r.data==`object`?r.data:{},employees:[..._.employees],canViewAll:_.canViewAll,canManage:_.canManage,currentEmployeeId:_.currentEmployeeId},{markLoaded:!0,clearError:!1}),r=W.snapshot()),!e&&(r.loading||r.refreshing))return;let i=String(n||(e?`reconcile`:`refresh`));(i===`refresh`||i===`manual-refresh`||i===`detail-refresh`)&&N();let o=r.loaded?W.refresh({reason:i}):W.load({reason:i});e||(G(W.snapshot()),await K({keepScreen:t}));try{let n=await o;if(n?.stale===!0||!v())return;G(n),await K({keepScreen:t}),e||a?.markReady?.({state:`ready`,itemCount:_.employees.length,durationMs:n?.durationMs??null})}catch(n){if(!v())return;G(W.snapshot());let r=_.directoryError||b(n);_.directoryError=r,await K({keepScreen:t}),l(r),e||a?.markReady?.({state:`error`,itemCount:_.employees.length,message:r})}}$({reason:`initial`})}};export{C as default};