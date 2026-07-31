import{a as e,i as t,n,o as r,r as i,t as a}from"./searchRuntime-CHhHjD_4.js";import{t as o}from"./runtimeCore-t2AnId75.js";import{t as s}from"./confirmDialog-BNiosfv-.js";import{t as c}from"./toast-DvZC7wAk.js";function l(e){return e&&typeof e==`object`?e:{}}async function u({search:e=``,includeInactive:t=!0,limit:n=300}={}){return r(`rpc_get_nhan_vien_directory`,{p_search:String(e??``).trim()||null,p_limit:Number(n)||300,p_include_inactive:!!t},`Không tải được danh sách nhân viên`)}async function d(e){return r(`rpc_tao_nhan_vien`,{p_request_key:i(`nhan-vien-create`),p_payload:l(e)},`Không tạo được nhân viên`)}async function f(e){return r(`rpc_cap_nhat_ho_so_nhan_vien`,{p_request_key:i(`nhan-vien-profile`),p_payload:l(e)},`Không cập nhật được nhân viên`)}async function p(e){return r(`rpc_cap_nhat_phan_quyen_nhan_vien`,{p_request_key:i(`nhan-vien-permission`),p_payload:l(e)},`Không cập nhật được phân quyền`)}async function m(e){return r(`rpc_reset_mat_khau_nhan_vien`,{p_request_key:i(`nhan-vien-password`),p_payload:l(e)},`Không đổi được mật khẩu`)}async function h(e){return r(`rpc_khoa_mo_nhan_vien`,{p_request_key:i(`nhan-vien-state`),p_payload:l(e)},`Không đổi được trạng thái nhân viên`)}var g=Object.freeze([{key:`MODULE_NHAN_VIEN_VIEW`,moduleId:`nhan_vien`,label:`Nhân viên`,description:`Luôn hiển thị để nhân viên xem hồ sơ và đổi mật khẩu của chính mình.`,required:!0},{key:`MODULE_TAO_DON_VIEW`,moduleId:`tao_don`,label:`Tạo đơn`,description:`Hiển thị module Tạo đơn trên Trang chủ.`},{key:`MODULE_GIAO_HANG_VIEW`,moduleId:`giao_hang`,label:`Giao hàng`,description:`Hiển thị module Giao hàng trên Trang chủ.`},{key:`MODULE_HOA_DON_VIEW`,moduleId:`hoa_don`,label:`Hóa đơn`,description:`Hiển thị module Hóa đơn trên Trang chủ.`},{key:`MODULE_DOI_SOAT_VIEW`,moduleId:`doi_soat`,label:`Đối soát`,description:`Hiển thị module Đối soát trên Trang chủ.`},{key:`MODULE_HAU_MAI_VIEW`,moduleId:`dich_vu`,label:`Dịch vụ`,description:`Hiển thị module Dịch vụ trên Trang chủ.`}]),_=new Set(g.map(e=>e.key));function v(e,t){e.dispatchEvent(new CustomEvent(`kangaroo:page-chrome`,{bubbles:!0,detail:t}))}function y(e,t=``){return String(e??``).trim()||t}function b(e){return y(e)||null}function x(e){switch(String(e??``).toUpperCase()){case`ACTIVE`:return`Đang hoạt động`;case`LOCKED`:return`Đã khóa`;case`DELETED`:return`Đã xóa`;default:return y(e,`Không xác định`)}}function S(e){return String(e??``).toUpperCase()===`ACTIVE`?`online`:`offline`}function C(e){let t=Array.isArray(e?.permission_keys)?e.permission_keys:[],n=e?.permissions??{},r=new Set([...t,...Array.isArray(n.modules)?n.modules:[],...Array.isArray(n.resources)?n.resources:[],...Array.isArray(n.fields)?n.fields:[],...Array.isArray(n.actions)?n.actions:[],...Array.isArray(n.special)?n.special:[]].map(String));return r.add(`MODULE_NHAN_VIEN_VIEW`),r}function w(e){let t=[e?.message,e?.details,e?.hint].map(e=>String(e??``).trim()).filter(Boolean).join(` `);for(let[e,n]of[[`EMPLOYEE_LOGIN_EXISTS`,`Tên đăng nhập đã tồn tại.`],[`EMPLOYEE_LOGIN_REQUIRED`,`Vui lòng nhập tên đăng nhập.`],[`EMPLOYEE_PASSWORD_REQUIRED`,`Vui lòng nhập mật khẩu.`],[`EMPLOYEE_NAME_REQUIRED`,`Vui lòng nhập tên hiển thị.`],[`EMPLOYEE_NOT_FOUND`,`Không tìm thấy nhân viên.`],[`RESET_OTHER_PASSWORD_FORBIDDEN`,`Bạn không có quyền reset mật khẩu nhân viên khác.`],[`EMPLOYEE_PROFILE_UPDATE_FORBIDDEN`,`Bạn không có quyền sửa hồ sơ nhân viên này.`],[`SELF_STATE_CHANGE_FORBIDDEN`,`Không thể tự khóa tài khoản của chính mình.`],[`EMPLOYEE_PROTECTED`,`Tài khoản hệ thống này không thể bị khóa.`],[`ROW_VERSION_CONFLICT`,`Dữ liệu đã thay đổi. Vui lòng tải lại rồi thao tác lại.`]])if(t.includes(e))return n;let n=t.match(/"message"\s*:\s*"([^"]+)"/i);return n?.[1]?n[1]:t||`Không thực hiện được thao tác.`}function T({name:n,label:r,value:i=``,type:a=`text`,required:o=!1,disabled:s=!1,autocomplete:c=`off`,textarea:l=!1,placeholder:u=``}){let d=`
    name="${t(n)}"
    ${o?`required`:``}
    ${s?`disabled`:``}
    autocomplete="${t(c)}"
    placeholder="${t(u)}"
  `;return`
    <label class="nhan-vien-field">
      <span>
        ${e(r)}
        ${o?`<em>*</em>`:``}
      </span>
      ${l?`<textarea ${d}>${e(i)}</textarea>`:`<input
            type="${t(a)}"
            value="${t(i)}"
            ${d}
          />`}
    </label>
  `}function E(t){return`
    <div class="nhan-vien-empty">
      ${e(t)}
    </div>
  `}function D(n){let r=y(n.trang_thai).toUpperCase();return`
    <button
      class="
        nhan-vien-card
        nhan-vien-card--compact
      "
      type="button"
      data-employee-id="${t(n.id_nhan_vien)}"
    >
      <span class="nhan-vien-card__compact-body">
        <span class="nhan-vien-card__compact-row">
          <strong
            class="nhan-vien-card__compact-name"
          >
            ${e(y(n.ten_nhan_vien,`Chưa đặt tên`))}
          </strong>

          <span
            class="nhan-vien-card__presence"
            data-state="${t(r)}"
          >
            ${e(S(r))}
          </span>
        </span>

        <span class="nhan-vien-card__phone">
          ${e(y(n.so_dien_thoai,`Chưa có số điện thoại`))}
        </span>
      </span>
    </button>
  `}function ee(t){return[[`Mã nhân viên`,t.ma_nhan_vien],[`Tên hiển thị`,t.ten_nhan_vien],[`Tên đăng nhập`,t.ten_dang_nhap],[`Số điện thoại`,t.so_dien_thoai],[`Email`,t.email],[`Địa chỉ`,t.dia_chi],[`Trạng thái`,x(t.trang_thai)]].filter(([,e])=>y(e)).map(([t,n])=>`
        <div class="nhan-vien-detail-row">
          <span>${e(t)}</span>
          <strong>${e(n)}</strong>
        </div>
      `).join(``)}var O={id:`nhan-vien`,label:`Nhân viên`,shortLabel:`NV`,async render(r,i={}){let l=n(),x={busy:!1,search:``,employees:[],selectedId:``,canViewAll:!1,canManage:!1,currentEmployeeId:``,directoryPhase:`idle`,directoryError:``,directorySearchCache:new Map};function S(){return typeof i?.isActive!=`function`||i.isActive()}function O(e,t){let n=e?.target;if(!n||typeof n.closest!=`function`)return null;let i=n.closest(t);return i&&r.contains(i)?i:null}async function k(e){let t=O(e,`[data-employee-id]`);t&&(e.preventDefault(),x.selectedId=t.dataset.employeeId,await l.open(`detail:${x.selectedId}`,X))}function A(e){let t=O(e,`[data-employee-form]`);if(t){t.querySelector(`[name="mat_khau"]`)?Q(e,t):ne(e,t);return}let n=O(e,`[data-password-form]`);if(n){ie(e,n);return}let r=O(e,`[data-permission-form]`);r&&oe(e,r)}r.addEventListener(`click`,k),r.addEventListener(`submit`,A);function j(){return new Promise(e=>{(globalThis.requestAnimationFrame??(e=>globalThis.setTimeout(e,0)))(()=>e())})}function M({title:e,key:t,idleLabel:n,busyLabel:i}){v(r,{headerMode:`title`,title:e,onBack:()=>l.back(),showRightAction:!1,bottomActions:[{key:t,label:x.busy?i:n,variant:`primary`,formAction:`submit`,disabled:x.busy}]})}function N(){M({title:`Thêm nhân viên`,key:`create`,idleLabel:`Tạo nhân viên`,busyLabel:`Đang tạo...`})}function P(){M({title:`Sửa nhân viên`,key:`save`,idleLabel:`Lưu thay đổi`,busyLabel:`Đang lưu...`})}function F(){M({title:`Đổi mật khẩu`,key:`save-password`,idleLabel:`Lưu mật khẩu`,busyLabel:`Đang đổi...`})}function I(){M({title:`Quyền module`,key:`save-permission`,idleLabel:`Lưu quyền`,busyLabel:`Đang lưu...`})}function L(e){v(r,{headerMode:`title`,title:`Chi tiết nhân viên`,onBack:()=>l.back(),showRightAction:!0,rightIcon:`↻`,rightLabel:`Tải lại`,onRightAction:()=>$({keepScreen:!0,reason:`detail-refresh`}),bottomActions:q(e).map(e=>({...e,label:x.busy&&e.key===`state`?`Đang cập nhật...`:e.label,disabled:x.busy||e.disabled===!0}))})}function R(e){return String(e??``).trim().toLocaleLowerCase(`vi`)}function z(){x.directorySearchCache.clear()}function B({search:e=``,includeInactive:t=!0,limit:n=30}={}){let r=Math.max(1,Math.min(50,Number(n)||30)),i=JSON.stringify([R(e),t===!0,r]),a=Date.now(),o=x.directorySearchCache.get(i);if(o&&o.expiresAt>a)return o.promise;x.directorySearchCache.delete(i);let s={expiresAt:a+6e4,promise:null};return s.promise=Promise.resolve().then(()=>u({search:e,includeInactive:t,limit:r})).catch(e=>{throw x.directorySearchCache.get(i)===s&&x.directorySearchCache.delete(i),e}),x.directorySearchCache.set(i,s),s.promise}let V=a({initialValue:x.search,debounceMs:500,isActive:S,onApply(e,t){x.search=String(e??``).trim();let n=String(t?.reason??`search`);return $({silent:n===`debounce`||n===`submit`,reason:n})}});i?.onCleanup?.(()=>{r.removeEventListener(`click`,k),r.removeEventListener(`submit`,A),z(),V.dispose()});let H=o({key:`nhan-vien-directory`,runtime:i,initialData:{employees:[],canViewAll:!1,canManage:!1,currentEmployeeId:``},load(){return B({search:x.search,includeInactive:!0,limit:30})},normalize(e){return{employees:Array.isArray(e?.employees)?e.employees:[],canViewAll:e?.can_view_all===!0,canManage:e?.can_manage===!0,currentEmployeeId:y(e?.current_employee_id)}}});function U(e){let t=e?.data&&typeof e.data==`object`?e.data:{};x.employees=Array.isArray(t.employees)?t.employees:[],x.canViewAll=t.canViewAll===!0,x.canManage=t.canManage===!0,x.currentEmployeeId=y(t.currentEmployeeId),x.directoryPhase=String(e?.phase??`idle`),x.directoryError=String(e?.error??``)}async function W({keepScreen:e=!1}={}){let t=l.currentKey();if(e&&t?.startsWith(`detail:`)){X();return}if(t===null){await l.reset(`list`,Y);return}t===`list`&&Y()}function G(){return x.employees.find(e=>e.id_nhan_vien===x.selectedId)??null}function K(e){if(!e?.id_nhan_vien)return;let t=x.employees.findIndex(t=>t.id_nhan_vien===e.id_nhan_vien);t>=0?x.employees[t]={...x.employees[t],...e}:x.employees.unshift(e)}function q(e){let t=new Set(Array.isArray(e?.allowed_actions)?e.allowed_actions:[]),n=t.has(`EDIT_PROFILE`),r=t.has(`RESET_PASSWORD`),i=t.has(`EDIT_PERMISSIONS`),a=t.has(`CHANGE_STATE`),o=[];return n&&o.push({key:`edit`,label:`Sửa`,variant:`secondary`,onClick:()=>l.open(`edit:${e.id_nhan_vien}`,te)}),r&&o.push({key:`password`,label:`PASS`,variant:`secondary`,onClick:()=>l.open(`password:${e.id_nhan_vien}`,re)}),i&&o.push({key:`permission`,label:`Quyền`,variant:`primary`,onClick:()=>l.open(`permission:${e.id_nhan_vien}`,ae)}),a&&o.push({key:`state`,label:e.trang_thai===`LOCKED`?`Mở`:`Khoá`,variant:e.trang_thai===`LOCKED`?`primary`:`danger`,onClick:()=>se(e)}),o}function J(){return r.querySelector(`[data-nhan-vien-list-root]`)||(r.innerHTML=`
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
      `,r.querySelector(`[data-nhan-vien-list-root]`))}function Y(){v(r,{headerMode:`search`,placeholder:`Tìm tên / mã / tài khoản...`,searchValue:V.snapshot().draft,onSearchInput(e){V.input(e)},onSearch(e){return V.submit(e,{reason:`submit`})},rightActions:[x.canManage?{key:`add`,icon:`+`,label:`Thêm nhân viên`,onAction:()=>l.open(`create`,Z)}:null,{key:`refresh`,icon:`↻`,label:`Tải lại`,onAction:()=>$({reason:`refresh`})}].filter(Boolean),bottomActions:x.canManage?[{key:`NHAN_VIEN_THEM`,label:`Thêm nhân viên`,variant:`primary`,onClick:()=>l.open(`create`,Z)}]:[]});let e=x.employees,t=J(),n=t.querySelector(`[data-nhan-vien-list-count]`),i=t.querySelector(`[data-nhan-vien-list-error]`),a=t.querySelector(`[data-nhan-vien-list-phase]`),o=t.querySelector(`[data-nhan-vien-list]`);n.textContent=`${e.length} tài khoản`,i.hidden=!x.directoryError,i.textContent=x.directoryError,a.hidden=x.directoryPhase!==`refreshing`,o.innerHTML=e.length?e.map(D).join(``):x.directoryPhase===`loading`?E(`Đang tải danh sách...`):x.directoryError?E(`Không tải được danh sách nhân viên.`):E(`Chưa có nhân viên phù hợp.`)}function X(){let t=G();if(!t){l.back();return}v(r,{headerMode:`title`,title:`Chi tiết nhân viên`,onBack:()=>l.back(),showRightAction:!0,rightIcon:`↻`,rightLabel:`Tải lại`,onRightAction:()=>$({keepScreen:!0,reason:`detail-refresh`}),bottomActions:q(t)});let n=C(t),i=g.filter(e=>n.has(e.key));r.innerHTML=`
        <section class="nhan-vien-page nhan-vien-detail-page">
          <article class="nhan-vien-block">
            <h3>Thông tin nhân viên</h3>
            ${ee(t)}
            ${y(t.ghi_chu)?`<div class="nhan-vien-note"><span>Ghi chú</span><p>${e(t.ghi_chu)}</p></div>`:``}
          </article>

          <article class="nhan-vien-block">
            <h3>Phân quyền</h3>
            ${i.length?i.map(t=>`
                      <div class="nhan-vien-permission-line">
                        <span class="nhan-vien-permission-dot"></span>
                        <span>${e(t.label)}</span>
                      </div>
                    `).join(``):`<p class="nhan-vien-muted">Chỉ có quyền hồ sơ cá nhân mặc định.</p>`}
          </article>
        </section>
      `}function Z(){v(r,{headerMode:`title`,title:`Thêm nhân viên`,onBack:()=>l.back(),showRightAction:!1,bottomActions:[{key:`create`,label:`Tạo nhân viên`,variant:`primary`,formAction:`submit`,disabled:x.busy}]}),r.innerHTML=`
        <section class="nhan-vien-page nhan-vien-form-page">
          <form class="nhan-vien-form" data-employee-form>
            <article class="nhan-vien-block">
              <h3>Thông tin đăng nhập</h3>
              ${T({name:`ten_nhan_vien`,label:`Tên hiển thị`,required:!0})}
              ${T({name:`ten_dang_nhap`,label:`Tên đăng nhập`,required:!0,autocomplete:`username`})}
              ${T({name:`mat_khau`,label:`Mật khẩu`,type:`password`,required:!0,autocomplete:`new-password`})}
              ${T({name:`xac_nhan_mat_khau`,label:`Nhập lại mật khẩu`,type:`password`,required:!0,autocomplete:`new-password`})}
            </article>

            <article class="nhan-vien-block">
              <h3>Thông tin liên hệ</h3>
              ${T({name:`so_dien_thoai`,label:`Số điện thoại`,type:`tel`,autocomplete:`tel`})}
              ${T({name:`email`,label:`Email`,type:`email`,autocomplete:`email`})}
              ${T({name:`dia_chi`,label:`Địa chỉ`,autocomplete:`street-address`})}
              ${T({name:`ghi_chu`,label:`Ghi chú`,textarea:!0})}
            </article>

            <p class="nhan-vien-form-note">
              Tên đăng nhập và mật khẩu chỉ cần không để trống. Nhân viên mới mặc định chỉ có quyền hồ sơ cá nhân.
            </p>
          </form>
        </section>
      `}async function Q(e,t=e.currentTarget){if(e.preventDefault(),x.busy)return;let n=new FormData(t),r=String(n.get(`mat_khau`)??``),i=String(n.get(`xac_nhan_mat_khau`)??``);if(!y(n.get(`ten_nhan_vien`))){c(`Vui lòng nhập tên hiển thị.`);return}if(!y(n.get(`ten_dang_nhap`))){c(`Vui lòng nhập tên đăng nhập.`);return}if(!r){c(`Vui lòng nhập mật khẩu.`);return}if(r!==i){c(`Mật khẩu nhập lại chưa khớp.`);return}x.busy=!0,N(),await j();try{K((await d({ten_nhan_vien:y(n.get(`ten_nhan_vien`)),ten_dang_nhap:y(n.get(`ten_dang_nhap`)),mat_khau:r,so_dien_thoai:b(n.get(`so_dien_thoai`)),email:b(n.get(`email`)),dia_chi:b(n.get(`dia_chi`)),ghi_chu:b(n.get(`ghi_chu`))}))?.employee),z(),x.busy=!1,await l.back(),c(`Đã tạo nhân viên.`)}catch(e){x.busy=!1,N(),c(w(e))}finally{x.busy=!1}}function te(){let e=G();if(!e){l.back();return}let t=x.canManage;v(r,{headerMode:`title`,title:`Sửa nhân viên`,onBack:()=>l.back(),showRightAction:!1,bottomActions:[{key:`save`,label:`Lưu thay đổi`,variant:`primary`,formAction:`submit`,disabled:x.busy}]}),r.innerHTML=`
        <section class="nhan-vien-page nhan-vien-form-page">
          <form class="nhan-vien-form" data-employee-form>
            <article class="nhan-vien-block">
              <h3>Thông tin nhân viên</h3>
              ${T({name:`ten_nhan_vien`,label:`Tên hiển thị`,value:e.ten_nhan_vien,required:!0})}
              ${T({name:`ten_dang_nhap`,label:`Tên đăng nhập`,value:e.ten_dang_nhap,required:!0,disabled:!t,autocomplete:`username`})}
              ${T({name:`so_dien_thoai`,label:`Số điện thoại`,value:e.so_dien_thoai,type:`tel`,autocomplete:`tel`})}
              ${T({name:`email`,label:`Email`,value:e.email,type:`email`,autocomplete:`email`})}
              ${T({name:`dia_chi`,label:`Địa chỉ`,value:e.dia_chi,autocomplete:`street-address`})}
              ${T({name:`ghi_chu`,label:`Ghi chú`,value:e.ghi_chu,textarea:!0})}
            </article>
          </form>
        </section>
      `}async function ne(e,t=e.currentTarget){e.preventDefault();let n=G();if(!n||x.busy)return;let r=new FormData(t),i=y(r.get(`ten_nhan_vien`));if(!i){c(`Vui lòng nhập tên hiển thị.`);return}let a=e.currentTarget.elements.ten_dang_nhap.disabled?n.ten_dang_nhap:y(r.get(`ten_dang_nhap`));if(!a){c(`Vui lòng nhập tên đăng nhập.`);return}x.busy=!0,P(),await j();try{K((await f({id_nhan_vien:n.id_nhan_vien,expected_row_version:n.row_version,ten_nhan_vien:i,ten_dang_nhap:a,so_dien_thoai:b(r.get(`so_dien_thoai`)),email:b(r.get(`email`)),dia_chi:b(r.get(`dia_chi`)),ghi_chu:b(r.get(`ghi_chu`))}))?.employee),z(),x.busy=!1,await l.back(),X(),c(`Đã cập nhật nhân viên.`)}catch(e){x.busy=!1,P(),c(w(e))}finally{x.busy=!1}}function re(){let t=G();if(!t){l.back();return}v(r,{headerMode:`title`,title:`Đổi mật khẩu`,onBack:()=>l.back(),showRightAction:!1,bottomActions:[{key:`save-password`,label:`Lưu mật khẩu`,variant:`primary`,formAction:`submit`,disabled:x.busy}]}),r.innerHTML=`
        <section class="nhan-vien-page nhan-vien-form-page">
          <form class="nhan-vien-form" data-password-form>
            <article class="nhan-vien-block">
              <h3>${e(t.ten_nhan_vien)}</h3>
              ${T({name:`mat_khau_moi`,label:`Mật khẩu mới`,type:`password`,required:!0,autocomplete:`new-password`})}
              ${T({name:`xac_nhan_mat_khau`,label:`Nhập lại mật khẩu`,type:`password`,required:!0,autocomplete:`new-password`})}
            </article>
            <p class="nhan-vien-form-note">Mật khẩu chỉ cần không để trống.</p>
          </form>
        </section>
      `}async function ie(e,t=e.currentTarget){e.preventDefault();let n=G();if(!n||x.busy)return;let r=new FormData(t),i=String(r.get(`mat_khau_moi`)??``),a=String(r.get(`xac_nhan_mat_khau`)??``);if(!i){c(`Vui lòng nhập mật khẩu mới.`);return}if(i!==a){c(`Mật khẩu nhập lại chưa khớp.`);return}x.busy=!0,F(),await j();try{K((await m({id_nhan_vien:n.id_nhan_vien,expected_row_version:n.row_version,mat_khau_moi:i}))?.employee),z(),x.busy=!1,await l.back(),X(),c(`Đã đổi mật khẩu.`)}catch(e){x.busy=!1,F(),c(w(e))}finally{x.busy=!1}}function ae(){let n=G();if(!n){l.back();return}let i=C(n);v(r,{headerMode:`title`,title:`Quyền module`,onBack:()=>l.back(),showRightAction:!1,bottomActions:[{key:`save-permission`,label:`Lưu quyền`,variant:`primary`,formAction:`submit`,disabled:x.busy}]}),r.innerHTML=`
        <section
          class="nhan-vien-page nhan-vien-form-page"
        >
          <form
            class="nhan-vien-form"
            data-permission-form
          >
            <article class="nhan-vien-block">
              <h3>
                ${e(n.ten_nhan_vien)}
              </h3>

              <p class="nhan-vien-muted">
                Chọn các module được hiển thị trên Trang chủ.
                Quyền thao tác chi tiết trong từng module sẽ được cấu hình sau.
              </p>

              <div class="nhan-vien-permission-list">
                ${g.map(n=>{let r=n.required===!0||i.has(n.key);return`
                      <label
                        class="
                          nhan-vien-permission-option
                          ${n.required===!0?`is-required`:``}
                        "
                      >
                        <input
                          type="checkbox"
                          name="permission_key"
                          value="${t(n.key)}"
                          ${r?`checked`:``}
                          ${n.required===!0?`disabled aria-disabled="true"`:``}
                        />

                        <span>
                          <strong>
                            ${e(n.label)}
                          </strong>

                          <small>
                            ${e(n.description)}
                          </small>

                          ${n.required===!0?`<small>Quyền mặc định — không thể tắt.</small>`:``}
                        </span>
                      </label>
                    `}).join(``)}
              </div>
            </article>
          </form>
        </section>
      `}async function oe(e,t=e.currentTarget){e.preventDefault();let n=G();if(!n||x.busy)return;let r=new FormData(t),i=Array.from(new Set([`MODULE_NHAN_VIEN_VIEW`,...r.getAll(`permission_key`).map(String).filter(e=>_.has(e))]));x.busy=!0,I(),await j();try{K((await p({id_nhan_vien:n.id_nhan_vien,expected_row_version:n.permission_row_version,permission_keys:i}))?.employee),z(),x.busy=!1,await l.back(),X(),c(`Đã cập nhật phân quyền.`)}catch(e){x.busy=!1,I(),c(w(e))}finally{x.busy=!1}}async function se(e){if(x.busy)return;let t=e.trang_thai===`LOCKED`?`ACTIVE`:`LOCKED`;if(await s({title:t===`LOCKED`?`Khóa tài khoản`:`Mở khóa tài khoản`,message:t===`LOCKED`?`Bạn chắc chắn muốn khóa tài khoản ${e.ten_nhan_vien}?`:`Bạn chắc chắn muốn mở khóa tài khoản ${e.ten_nhan_vien}?`,confirmLabel:t===`LOCKED`?`Khóa tài khoản`:`Mở khóa`,tone:t===`LOCKED`?`danger`:`default`})){x.busy=!0,L(e),await j();try{K((await h({id_nhan_vien:e.id_nhan_vien,expected_row_version:e.row_version,target_state:t}))?.employee),z(),x.busy=!1,X(),c(t===`LOCKED`?`Đã khóa tài khoản.`:`Đã mở khóa tài khoản.`)}catch(t){x.busy=!1,L(e),c(w(t))}finally{x.busy=!1}}}async function $({silent:e=!1,keepScreen:t=!1,reason:n=``}={}){if(!S()||x.busy&&!e)return;let r=H.snapshot();if(e&&r.loaded&&(H.replaceData({...r.data&&typeof r.data==`object`?r.data:{},employees:[...x.employees],canViewAll:x.canViewAll,canManage:x.canManage,currentEmployeeId:x.currentEmployeeId},{markLoaded:!0,clearError:!1}),r=H.snapshot()),!e&&(r.loading||r.refreshing))return;let a=String(n||(e?`reconcile`:`refresh`));(a===`refresh`||a===`manual-refresh`||a===`detail-refresh`)&&z();let o=r.loaded?H.refresh({reason:a}):H.load({reason:a});e||(U(H.snapshot()),await W({keepScreen:t}));try{let n=await o;if(n?.stale===!0||!S())return;U(n),await W({keepScreen:t}),e||i?.markReady?.({state:`ready`,itemCount:x.employees.length,durationMs:n?.durationMs??null})}catch(n){if(!S())return;U(H.snapshot());let r=x.directoryError||w(n);x.directoryError=r,await W({keepScreen:t}),c(r),e||i?.markReady?.({state:`error`,itemCount:x.employees.length,message:r})}}$({reason:`initial`})}};export{O as default};