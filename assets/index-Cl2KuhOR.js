const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/nhan_vien-B1RhH-8p.js","assets/realtimeImpactRegistry-uvlr93CK.js","assets/screenStack-BTwISuHL.js","assets/runtimeCore-t2AnId75.js","assets/confirmDialog-CLOcUN20.js","assets/toast-DvZC7wAk.js","assets/toast-BSI_6rkx.css","assets/nhan_vien-uFBI9W1M.css","assets/tao_don-BXn7yuJa.js","assets/runtimeBus-2EJwbL_u.js","assets/actionLock-BTZKYVnA.js","assets/giao_hang-mbR0B1P6.js","assets/deliveryCheckSummary-CsMY31HM.js","assets/deliveryCheckSummary-U02spDCx.css","assets/giao_hang-rbIdOZsX.css","assets/hoa_don-C1LiiU7B.js","assets/hoa_don-D1tINb-v.css","assets/doi_soat-D6-cs46e.js","assets/pageLayout-Deilvc9n.js","assets/dich_vu-C1QUNGCc.js"])))=>i.map(i=>d[i]);
import{a as e,o as t,r as n,s as r}from"./realtimeImpactRegistry-uvlr93CK.js";import{n as i,t as a}from"./runtimeBus-2EJwbL_u.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var o=Object.freeze({name:`Kangaroo ERP`,version:`V6.5`,subtitle:`Supabase RPC-only`});function s({id:e,label:t,shortLabel:n,load:r}){let i=null;function a(){return i||=Promise.resolve().then(r).then(e=>e?.default??e).then(t=>{if(!t||typeof t.render!=`function`)throw TypeError(`MODULE_RENDER_REQUIRED:${e}`);if(t.id&&t.id!==e)throw TypeError(`MODULE_ID_MISMATCH:${e}`);return t}).catch(e=>{throw i=null,e}),i}return Object.freeze({id:e,label:t,shortLabel:n,async prefetch(){await a()},async render(e,t={}){return(await a()).render(e,t)}})}var c=Object.freeze([s({id:`nhan-vien`,label:`Nhân viên`,shortLabel:`NV`,load:()=>r(()=>import(`./nhan_vien-B1RhH-8p.js`),__vite__mapDeps([0,1,2,3,4,5,6,7]))}),s({id:`tao-don`,label:`Tạo đơn`,shortLabel:`TĐ`,load:()=>r(()=>import(`./tao_don-BXn7yuJa.js`),__vite__mapDeps([8,1,9,2,3,10]))}),s({id:`giao-hang`,label:`Giao hàng`,shortLabel:`GH`,load:()=>r(()=>import(`./giao_hang-mbR0B1P6.js`),__vite__mapDeps([11,1,2,3,12,10,13,4,5,6,14]))}),s({id:`hoa-don`,label:`Hóa đơn`,shortLabel:`HĐ`,load:()=>r(()=>import(`./hoa_don-C1LiiU7B.js`),__vite__mapDeps([15,1,2,12,10,13,5,6,16]))}),s({id:`doi-soat`,label:`Đối soát`,shortLabel:`ĐS`,load:()=>r(()=>import(`./doi_soat-D6-cs46e.js`),__vite__mapDeps([17,18]))}),s({id:`dich-vu`,label:`Dịch vụ`,shortLabel:`DV`,load:()=>r(()=>import(`./dich_vu-C1QUNGCc.js`),__vite__mapDeps([19,18]))})]);async function l(){let{data:e,error:n}=await t.auth.getSession();if(n)throw n;return e.session}function u(e){let t=String(e??``).trim();if(!t)throw Error(`Vui lòng nhập tài khoản.`);return t}async function d(e){let t=e.toLowerCase(),n=new TextEncoder().encode(t),r=await globalThis.crypto.subtle.digest(`SHA-256`,n);return`nv-${[...new Uint8Array(r)].map(e=>e.toString(16).padStart(2,`0`)).join(``)}@kangaroo.local`}async function f(e){let t=u(e),n=t.toLowerCase();if(/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(n)&&n.length<=240)return[n];let r=[];return/^[a-z0-9._-]+$/.test(n)&&n.length<=120&&r.push(`${n}@kangaroo.local`),r.push(await d(t)),[...new Set(r)]}async function p(e,n){let r=String(n??``);if(!r)throw Error(`Vui lòng nhập mật khẩu.`);let i=await f(e);for(let e of i){let{data:n,error:i}=await t.auth.signInWithPassword({email:e,password:r});if(!i&&n?.session)return n.session}throw Error(`Tài khoản hoặc mật khẩu không đúng.`)}async function m(){let{error:e}=await t.auth.signOut();if(e)throw e}async function h(){let{data:e,error:n}=await t.rpc(`rpc_bootstrap_current_user`);if(n)throw n;return e}function g(e,{onSubmit:t}){e.innerHTML=`
    <main class="login-page">
      <section class="login-panel">
        <div class="login-brand-mark">K</div>

        <div class="login-heading">
          <p>KANGAROO ERP V6.5</p>
          <h1>Đăng nhập</h1>
          <span>Đăng nhập bằng tài khoản Supabase Auth.</span>
        </div>

        <form id="login-form" class="login-form">
          <label>
            <span>Tài khoản</span>
            <input
              type="text"
              name="username"
              autocomplete="username"
              required
            />
          </label>

          <label>
            <span>Mật khẩu</span>
            <input
              type="password"
              name="password"
              autocomplete="current-password"
              required
            />
          </label>

          <p id="login-error" class="login-error" hidden></p>

          <button id="login-submit" type="submit">
            Đăng nhập
          </button>
        </form>

        <footer>Supabase RPC-only</footer>
      </section>
    </main>
  `;let n=e.querySelector(`#login-form`),r=e.querySelector(`#login-submit`),i=e.querySelector(`#login-error`);n.addEventListener(`submit`,async e=>{e.preventDefault();let a=new FormData(n),o=a.get(`username`),s=a.get(`password`);i.hidden=!0,i.textContent=``,r.disabled=!0,r.textContent=`Đang đăng nhập...`;try{await t({username:o,password:s})}catch(e){i.textContent=e?.message||`Không thể đăng nhập.`,i.hidden=!1,r.disabled=!1,r.textContent=`Đăng nhập`}})}var _=`kangaroo-domain-events-v1`,v=`domain-event-v1`,y=2048,b=new Set([`CHANNEL_ERROR`,`TIMED_OUT`]),x=new Set([...b,`CLOSED`]);function S(e){return String(e??``).trim()||null}function C(e,t){let n=S(e);if(!n)throw Error(`REALTIME_${t.toUpperCase()}_REQUIRED`);return n}function w(e,t){let n=C(e,t);if(!/^\d+$/.test(n)||BigInt(n)<1n)throw Error(`REALTIME_${t.toUpperCase()}_INVALID`);return n}function T(e){return e instanceof Error?e.message:String(e??`UNKNOWN_ERROR`)}function E(e){let t=e?.payload??e;if(!t||typeof t!=`object`)throw Error(`REALTIME_ENVELOPE_REQUIRED`);if(Number(t.schema_version)!==1)throw Error(`REALTIME_SCHEMA_VERSION_UNSUPPORTED`);let n=t.entity_version===null||t.entity_version===void 0?null:w(t.entity_version,`entity_version`),r=S(t.reference_type),i=S(t.reference_id),a=S(t.payload?.id_phieu_giao_hang),o=a?Object.freeze({id_phieu_giao_hang:a}):null;return Object.freeze({schema_version:1,id_outbox:w(t.id_outbox,`id_outbox`),id_event:C(t.id_event,`id_event`),source_topic:C(t.source_topic,`source_topic`),entity_type:C(t.entity_type,`entity_type`).toUpperCase(),entity_id:C(t.entity_id,`entity_id`),entity_version:n,action_key:C(t.action_key,`action_key`).toUpperCase(),reference_type:r?r.toUpperCase():null,reference_id:i||null,payload:o,occurred_at:S(t.occurred_at),published_at:S(t.published_at)})}function D(e,t,n){if(!e.has(n))for(e.add(n),t.push(n);t.length>y;){let n=t.shift();e.delete(n)}}function O(e,t,n){for(e.has(t)&&e.delete(t),e.set(t,n);e.size>y;){let t=e.keys().next().value;e.delete(t)}}function k({client:e,accessToken:t,dispatch:n,logger:r=console}={}){if(!e||typeof e.channel!=`function`||typeof e.removeChannel!=`function`||typeof e.realtime?.setAuth!=`function`)throw TypeError(`REALTIME_SUPABASE_CLIENT_REQUIRED`);if(typeof n!=`function`)throw TypeError(`REALTIME_DISPATCH_REQUIRED`);let i=C(t,`access_token`),a=new Set,o=[],s=new Set,c=[],l=new Map,u=null,d=!1,f=!1,p=null,m=null,h=0,g=!1,y=null;function w(t){try{return Promise.resolve(e.realtime.setAuth(t))}catch(e){return Promise.reject(e)}}function k(e){let t=y,n=t?t.catch(()=>{}).then(()=>w(e)):w(e),r;return r=n.finally(()=>{y===r&&(y=null)}),y=r,r}function A(e,t=null){n(`realtime-status`,{status:S(e),error:t?T(t):null})}function j(e){let t;try{t=E(e)}catch(e){return r?.warn?.(`[KANGAROO SyncBus] Invalid broadcast:`,e),{accepted:!1,reason:`invalid-envelope`}}if(a.has(t.id_outbox)||s.has(t.id_event))return{accepted:!1,reason:`duplicate`};let i=`${t.entity_type}:`+t.entity_id;if(t.entity_version!==null){let e=BigInt(t.entity_version),n=l.get(i);if(n!==void 0&&e<=n)return D(a,o,t.id_outbox),D(s,c,t.id_event),{accepted:!1,reason:`stale-version`};O(l,i,e)}return D(a,o,t.id_outbox),D(s,c,t.id_event),n(`domain-event`,t),{accepted:!0,envelope:t}}async function M(t){if(t)try{await e.removeChannel(t)}catch(e){r?.warn?.(`[KANGAROO SyncBus] Không đóng được channel:`,e)}}async function N(t=h){if(d)return!1;if(f&&u)return!0;if(await k(i),d||t!==h)return!1;let n=e.channel(_,{config:{private:!0,broadcast:{ack:!1,self:!1}}});if(n.on(`broadcast`,{event:v},j),d||t!==h)return await M(n),!1;u=n,f=!0,g=!1;try{n.subscribe((e,i)=>{if(d||t!==h||u!==n)return;let a=S(e);a===`SUBSCRIBED`?g=!0:x.has(a)&&(g=!1),A(a,i),b.has(a)&&r?.error?.(`[KANGAROO SyncBus] ${a}:`,i)})}catch(e){throw t===h&&u===n&&(u=null,f=!1,g=!1),await M(n),e}return!0}function P(e){let t=C(e,`access_token`);return d||t===i?Promise.resolve(!1):(i=t,!f&&!u&&!p&&!m?Promise.resolve(!0):I())}function F(){if(d)return Promise.resolve(!1);if(m)return m;if(p)return p;let e=N(h),t;return t=e.finally(()=>{p===t&&(p=null)}),p=t,t}function I(){if(d)return Promise.resolve(!1);if(m)return m;let e=(async()=>{h+=1;let e=h;f=!1,g=!1,p=null;let t=u;return u=null,await M(t),d||e!==h?!1:N(e)})(),t;return t=e.finally(()=>{m===t&&(m=null)}),m=t,t}async function L(){if(d)return;d=!0,h+=1,f=!1,g=!1,p=null,m=null;let e=u;u=null,await M(e)}return Object.freeze({start:F,restart:I,setAccessToken:P,stop:L,receive:j,isStarted(){return f&&!d},isConnected(){return g&&!d},isDisposed(){return d}})}var A=Object.freeze({"tao-don":`🧺`,"giao-hang":`🚚`,"hoa-don":`🧾`,"doi-soat":`🔄`,"dich-vu":`🛠️`,"nhan-vien":`👥`}),j=Object.freeze({"tao-don":{headerMode:`title`,bottomActions:[{key:`reset`,label:`Xóa form`,variant:`secondary`,formAction:`reset`},{key:`confirm`,label:`Xác nhận`,variant:`primary`,formAction:`submit`}]},"nhan-vien":{headerMode:`search`,placeholder:`Tìm tên / mã nhân viên...`},"giao-hang":{headerMode:`search`,placeholder:`Tìm mã đơn / mã phiếu / tên KH...`},"hoa-don":{headerMode:`search`,placeholder:`Tìm mã hóa đơn / mã đơn / tên KH...`},"doi-soat":{headerMode:`search`,placeholder:`Tìm mã đối soát / mã đơn / nhân viên...`},"dich-vu":{headerMode:`search`,placeholder:`Tìm mã dịch vụ / khách hàng / sản phẩm...`}}),M=c,N=null;async function P(){let e=N;N=null,typeof e==`function`&&await e()}var F=Object.freeze({nhan_vien:`MODULE_NHAN_VIEN_VIEW`,tao_don:`MODULE_TAO_DON_VIEW`,giao_hang:`MODULE_GIAO_HANG_VIEW`,hoa_don:`MODULE_HOA_DON_VIEW`,doi_soat:`MODULE_DOI_SOAT_VIEW`,dich_vu:`MODULE_HAU_MAI_VIEW`});function I(e){return String(e??``).trim().toLowerCase().replaceAll(`-`,`_`)}function L(e){let t=e?.permissions??{};return new Set([...Array.isArray(e?.permission_keys)?e.permission_keys:[],...Array.isArray(t.modules)?t.modules:[],...Array.isArray(t.resources)?t.resources:[],...Array.isArray(t.fields)?t.fields:[],...Array.isArray(t.actions)?t.actions:[],...Array.isArray(t.special)?t.special:[]].map(String))}function R(e){return e?.is_admin===!0}function z(e){if(R(e))return[...c];let t=L(e),n=c.filter(e=>{let n=I(e?.id);if(n===`nhan_vien`)return!0;let r=F[n];return!!r&&t.has(r)});return n.length>0?n:c.filter(e=>I(e?.id)===`nhan_vien`)}function B(){return document.documentElement.dataset.layout===`mobile`}function ee(e){return e?.ten_nhan_vien??e?.ten_dang_nhap??`admin`}function te(){return M.map(e=>`
        <button
          class="mobile-module-card"
          type="button"
          data-mobile-module-id="${e.id}"
        >
          <span class="mobile-module-icon">
            ${A[e.id]??`📦`}
          </span>

          <span class="mobile-module-label">
            ${e.label}
          </span>
        </button>
      `).join(``)}function ne(){return M.map((e,t)=>`
        <button
          class="module-button${t===0?` is-active`:``}"
          type="button"
          data-module-id="${e.id}"
        >
          <span class="module-button-icon">
            ${A[e.id]??e.shortLabel}
          </span>

          <span class="module-button-text">
            ${e.label}
          </span>
        </button>
      `).join(``)}function re(t,n,r){let i=ee(r);t.innerHTML=`
    <div class="app-shell">
      <aside class="app-sidebar">
        <div class="brand">
          <div class="brand-mark">K</div>

          <div class="brand-copy">
            <strong>${o.name}</strong>
            <span>${o.version}</span>
          </div>
        </div>

        <nav class="module-navigation" aria-label="Module">
          ${ne()}
        </nav>

        <div class="desktop-account-card">
          <span class="desktop-account-avatar">
            ${i.slice(0,1).toUpperCase()}
          </span>

          <div>
            <strong>${i}</strong>
            <span>Đang hoạt động</span>
          </div>
        </div>

        <footer class="sidebar-footer">
          <span>${o.subtitle}</span>
        </footer>
      </aside>

      <main class="app-main">
        <header class="app-topbar">
          <div class="topbar-title-area">
            <button
              id="mobile-home-button"
              class="mobile-home-button"
              type="button"
              hidden
              aria-label="Quay lại trang chủ"
            >
              ‹
            </button>

            <div>
              <h1 class="desktop-app-title">${o.name}</h1>
              <h1 class="mobile-app-title">KANGAROO</h1>

              <p id="current-module-name">
                ${B()?`Trang chủ`:M[0].label}
              </p>
            </div>
          </div>

          <div class="account-area">
            <div class="account-summary">
              <strong>${i}</strong>
              <span>Quản trị hệ thống</span>
            </div>

            <button
              id="logout-button"
              class="account-button"
              type="button"
            >
              Đăng xuất
            </button>
          </div>
        </header>

        <section id="mobile-home" class="mobile-home">
          <div class="mobile-user-banner">
            <div>
              <strong>${i}</strong>
              <span>Kangaroo ERP V6.5</span>
            </div>

            <button
              id="mobile-logout-button"
              class="mobile-logout-button"
              type="button"
              aria-label="Đăng xuất"
            >
              Đăng xuất
            </button>
          </div>

          <div class="mobile-module-grid">
            ${te()}
          </div>
        </section>

        <header
          id="mobile-page-header"
          class="mobile-page-header"
          hidden
        >
          <button
            id="mobile-page-back-button"
            class="mobile-page-icon-button"
            type="button"
            aria-label="Quay lại Trang chủ"
          >
            ←
          </button>

          <div
            id="mobile-page-title-slot"
            class="mobile-page-title-slot"
          >
            <strong id="mobile-page-title">Module</strong>
          </div>

          <form
            id="mobile-page-search-form"
            class="mobile-page-search-form"
            hidden
          >
            <input
              id="mobile-page-search-input"
              type="search"
              autocomplete="off"
            />
          </form>

          <div
            id="mobile-page-right-actions"
            class="mobile-page-right-actions"
          >
            <button
              id="mobile-page-refresh-button"
              class="mobile-page-icon-button"
              type="button"
              aria-label="Làm mới"
            >
              ↻
            </button>
          </div>
        </header>

        <section
          id="desktop-dashboard"
          class="desktop-dashboard"
        >
          <div class="desktop-welcome-card">
            <div>
              <p>KANGAROO ERP V6.5</p>
              <h2>Xin chào, ${i}</h2>
              <span>
                Chọn module bên trái để bắt đầu làm việc.
              </span>
            </div>

            <div class="desktop-welcome-mark">K</div>
          </div>

          <div class="desktop-quick-grid">
            ${M.map(e=>`
                  <button
                    type="button"
                    class="desktop-quick-card"
                    data-desktop-quick-id="${e.id}"
                  >
                    <span class="desktop-quick-icon">
                      ${A[e.id]??`📦`}
                    </span>

                    <span>
                      <strong>${e.label}</strong>
                      <small>Mở module</small>
                    </span>
                  </button>
                `).join(``)}
          </div>
        </section>

        <div
          id="module-content"
          class="module-content"
          hidden
        ></div>

        <footer
          id="mobile-page-bottom"
          class="mobile-page-bottom"
          hidden
        ></footer>
      </main>
    </div>
  `;let a=t.querySelector(`#module-content`),s=t.querySelector(`#mobile-home`),c=t.querySelector(`#desktop-dashboard`),l=t.querySelector(`#mobile-page-header`),u=t.querySelector(`#mobile-page-back-button`),d=t.querySelector(`#mobile-page-title-slot`),f=t.querySelector(`#mobile-page-title`),p=t.querySelector(`#mobile-page-search-form`),h=t.querySelector(`#mobile-page-search-input`),g=t.querySelector(`#mobile-page-refresh-button`),_=t.querySelector(`#mobile-page-right-actions`),v=t.querySelector(`#mobile-page-bottom`),y=t.querySelector(`#current-module-name`),b=[...t.querySelectorAll(`[data-module-id]`)],x=[...t.querySelectorAll(`[data-mobile-module-id]`)],S=[...t.querySelectorAll(`[data-desktop-quick-id]`)],C=M[0].id,w={},T=0,E=null,D=null,O=null,k=null,N=null,F=new Map,I=!1;function L(e={}){if(I)return;let t=String(e?.entity_type??``).trim().toUpperCase(),n=String(e?.entity_id??``).trim(),r=t&&n?`${t}:${n}`:String(e?.id_event??e?.id_outbox??``).trim()||`anonymous:${F.size}`;F.set(r,e);let i=C,a=T;N!==null&&window.clearTimeout(N),N=window.setTimeout(()=>{N=null;let e=[...F.values()];if(F.clear(),I||C!==i||T!==a)return;let t=O;!t||t.activationId!==T||t.moduleId!==C||typeof t.callback!=`function`||e.reduce((e,n)=>e.then(async()=>{try{await t.callback(n)}catch(e){console.error(`Lỗi xử lý Realtime của module:`,e)}}),Promise.resolve())},400)}async function R(e={}){let t=k;if(!t||t.activationId!==T||t.moduleId!==C||!D||!D.isConnected)return!1;try{return await t.callback(e),!0}catch(e){return console.error(`Lỗi đối soát module sau khi khôi phục Realtime:`,e),!1}}async function z(){I||(I=!0,N!==null&&(window.clearTimeout(N),N=null),F.clear(),window.removeEventListener(`kangaroo:layout-change`,$),await V())}function re(e,t,n=`loading`){let r=document.createElement(`div`);r.className=`module-runtime-status is-${n}`,r.setAttribute(`role`,n===`error`?`alert`:`status`),r.textContent=String(t??``),e.replaceChildren(r)}function ie(e,t,i,o){let s=[],c=!1,l=Number.isFinite(o)?o:performance.now(),u=null,d=Object.freeze({session:n,identity:r,moduleId:e.id,activationId:t,startedAt:l,elapsedMs(){return Math.round((performance.now()-l)*10)/10},markReady(n={}){if(u!==null)return u;if(!d.isActive())return null;u=d.elapsedMs();let r=n&&typeof n==`object`?n:{},a=r.state===`error`?`error`:`ready`;i.dataset.moduleRuntimeState=a,i.dataset.moduleReadyMs=String(u);let o={...r,moduleId:e.id,activationId:t,durationMs:u};return i.dispatchEvent(new CustomEvent(`kangaroo:module-ready`,{bubbles:!0,detail:o})),console.info(`[KANGAROO runtime] ${e.id} ready in ${u}ms`,o),u},isActive(){return!c&&T===t&&C===e.id&&D===i&&i.isConnected&&!a.hidden},onRealtimeInvalidation(n){if(typeof n!=`function`||c)return()=>{};let r={activationId:t,moduleId:e.id,callback:n};O=r;let i=()=>{O===r&&(O=null)};return s.push(i),i},onRealtimeResume(n){if(typeof n!=`function`||c)return()=>{};let r={activationId:t,moduleId:e.id,callback:n};k=r;let i=()=>{k===r&&(k=null)};return s.push(i),i},onCleanup(e){return typeof e==`function`?c?(Promise.resolve().then(e).catch(e=>{console.error(`Lỗi cleanup module:`,e)}),()=>{}):(s.push(e),()=>{let t=s.indexOf(e);t>=0&&s.splice(t,1)}):()=>{}}});async function f(){if(!c){c=!0;for(let e=s.length-1;e>=0;--e)try{await s[e]()}catch(e){console.error(`Lỗi cleanup module:`,e)}s.length=0}}return{runtime:d,cleanup:f}}async function V(){let e=E;E=null,O=null,k=null,typeof e==`function`&&await e()}function H(){T+=1,D=null,a.replaceChildren(),V()}function U(e,t={}){a.dispatchEvent(new CustomEvent(e,{bubbles:!0,detail:t}))}function W(e=[]){v.replaceChildren(),e.forEach(e=>{let t=document.createElement(`button`);t.type=`button`,t.className=`mobile-page-bottom-button is-${e.variant??`secondary`}`,t.textContent=e.label,t.disabled=!!e.disabled,t.addEventListener(`click`,async()=>{if(!t.disabled){if(typeof e.onClick==`function`)await e.onClick();else{let t=a.querySelector(`form`);e.formAction===`reset`&&t&&t.reset(),e.formAction===`submit`&&t&&t.requestSubmit()}U(`kangaroo:module-action`,{action:e.key,formAction:e.formAction??null})}}),v.appendChild(t)});let t=B()&&e.length>0;v.hidden=!t,a.classList.toggle(`has-mobile-bottom`,t)}function G(e={}){w=e;let t=e.headerMode??e.mode??`title`,n=t===`search`;l.hidden=!B(),l.dataset.mode=t,d.hidden=n,p.hidden=!n,f.textContent=e.title??`Module`,h.placeholder=e.placeholder??`Tìm kiếm...`,typeof e.searchValue==`string`&&h.value!==e.searchValue&&(h.value=e.searchValue);let r=e.showRightAction??e.showRefresh??n;g.hidden=!r,g.textContent=e.rightIcon??`↻`,g.setAttribute(`aria-label`,e.rightLabel??`Làm mới`),_.querySelectorAll(`[data-mobile-page-extra-action]`).forEach(e=>e.remove());let i=Array.isArray(e.rightActions)?e.rightActions.filter(Boolean):[],a=i.length||+!!r;l.style.setProperty(`--mobile-page-side-width`,`${Math.max(40,a*40)}px`),i.length&&(g.hidden=!0,i.forEach(e=>{let t=document.createElement(`button`);t.type=`button`,t.className=`mobile-page-icon-button`,t.dataset.mobilePageExtraAction=e.key??``,t.textContent=e.icon??`•`,t.disabled=!!e.disabled,t.setAttribute(`aria-label`,e.label??`Thao tác`),t.addEventListener(`click`,async()=>{t.disabled||(typeof e.onAction==`function`?await e.onAction():typeof e.onClick==`function`&&await e.onClick(),e.dispatchRefresh!==!1&&U(`kangaroo:module-refresh`))}),_.appendChild(t)})),W(e.bottomActions??[])}function K(e){G({...j[e.id]??{headerMode:`title`},title:e.label})}function J(e){b.forEach(t=>{t.classList.toggle(`is-active`,t.dataset.moduleId===e)})}function Y(){H(),w={},s.hidden=!1,l.hidden=!0,v.hidden=!0,c.hidden=!0,a.hidden=!0,a.classList.remove(`has-mobile-bottom`),y.textContent=`Trang chủ`}function X(){H(),s.hidden=!0,l.hidden=!0,v.hidden=!0,c.hidden=!1,a.hidden=!0,a.classList.remove(`has-mobile-bottom`),y.textContent=`Tổng quan`}async function Z(t){let n=performance.now();e();let r=M.find(e=>e.id===t)??M[0],i=T+1;T=i,C=r.id,J(r.id),y.textContent=r.label,s.hidden=!0,c.hidden=!0,a.hidden=!1,K(r);let o=document.createElement(`div`);if(o.className=`module-runtime-root`,o.dataset.moduleRuntimeId=r.id,o.dataset.moduleActivationId=String(i),o.dataset.moduleRuntimeState=`loading`,D=o,a.replaceChildren(o),await V(),T!==i||D!==o)return;let u=ie(r,i,o,n);E=u.cleanup;try{let e=await r.render(o,u.runtime);if(typeof e==`function`&&u.runtime.onCleanup(e),!u.runtime.isActive()){await u.cleanup();return}}catch(e){if(!u.runtime.isActive())return;console.error(`Không mở được module ${r.id}:`,e),o.dataset.moduleRuntimeState=`error`,re(o,`Không mở được module. Vui lòng thử lại.`,`error`)}B()||(l.hidden=!0,v.hidden=!0,a.classList.remove(`has-mobile-bottom`))}b.forEach(e=>{e.addEventListener(`click`,()=>{Z(e.dataset.moduleId)})}),x.forEach(e=>{e.addEventListener(`click`,()=>{Z(e.dataset.mobileModuleId)})}),S.forEach(e=>{e.addEventListener(`click`,()=>{Z(e.dataset.desktopQuickId)})}),a.addEventListener(`kangaroo:page-chrome`,e=>{e.stopPropagation(),G(e.detail??{})}),u.addEventListener(`click`,async()=>{if(typeof w.onBack==`function`){await w.onBack();return}Y()}),p.addEventListener(`submit`,async e=>{e.preventDefault(),typeof w.onSearch==`function`&&await w.onSearch(h.value),U(`kangaroo:module-search`,{value:h.value})}),h.addEventListener(`input`,async e=>{let t=e.currentTarget.value,n=typeof w.onSearchInput==`function`?w.onSearchInput:w.onSearch;typeof n==`function`&&await n(t),U(`kangaroo:module-search`,{value:t})}),g.addEventListener(`click`,async()=>{typeof w.onRightAction==`function`?await w.onRightAction():typeof w.onRefresh==`function`&&await w.onRefresh(),U(`kangaroo:module-refresh`)});async function Q(){await P(),await m(),await q(t)}t.querySelector(`#mobile-logout-button`).addEventListener(`click`,Q),t.querySelector(`#logout-button`).addEventListener(`click`,Q);function $(e){if(e.detail?.mode===`mobile`){Y();return}X()}return window.addEventListener(`kangaroo:layout-change`,$),B()?Y():X(),Object.freeze({handleRealtimeInvalidation:L,handleRealtimeResume:R,cleanup:z})}function ie(e){let t=globalThis.navigator?.connection;if(t?.saveData===!0||t?.effectiveType===`slow-2g`||t?.effectiveType===`2g`)return()=>{};let n=Array.from(e??[]).filter(e=>typeof e?.prefetch==`function`),r=!1,i=null,a=!1;function o(){if(!(r||n.length===0)){if(typeof globalThis.requestIdleCallback==`function`){a=!0,i=globalThis.requestIdleCallback(s,{timeout:2400});return}a=!1,i=globalThis.setTimeout(s,900)}}function s(){if(i=null,r)return;let e=n.shift();Promise.resolve(e?.prefetch?.()).catch(()=>{}).finally(o)}return o(),()=>{r=!0,i!==null&&(a&&typeof globalThis.cancelIdleCallback==`function`?globalThis.cancelIdleCallback(i):globalThis.clearTimeout(i),i=null)}}var V=new Set([`NHAN_VIEN_BOOTSTRAP_ADMIN`,`NHAN_VIEN_UPDATE_PROFILE`,`NHAN_VIEN_UPDATE_PERMISSION`,`NHAN_VIEN_UPDATE_MODULE_PERMISSION`]),H=`NHAN_VIEN_CHANGE_STATE`;function U(e){return String(e??``).trim()}function W(e){return U(e).toUpperCase()}function G(e,t){let n=W(e?.entity_type),r=U(e?.entity_id),i=U(t?.id_nhan_vien);return n===`NHAN_VIEN`&&r!==``&&i!==``&&r===i}async function K(e,r,o={}){await P();let s=o?.identity??await h();M=z(s);let c=r,l=re(e,c,s),u=ie(M),d=!1,f=null,p=null;async function g(t={}){if(d)return null;if(f)return f;let n=W(t?.action_key),r=(async()=>{let t=await h();return d?null:(await K(e,c,{identity:t}),t)})();f=r;try{return await r}catch(e){return d||console.error(`Không thể cập nhật danh tính Realtime: `+n,e),null}finally{f===r&&(f=null)}}async function _(t={}){if(p)return p;let n=W(t?.action_key),r=(async()=>{await P();try{await m()}catch(e){console.error(`Không thể đóng Supabase session sau `+n,e)}return await q(e),null})();p=r;try{return await r}finally{p===r&&(p=null)}}let v=i(`domain-event`,e=>{let t=e.detail??{};if(n(t),!G(t,s)){l.handleRealtimeInvalidation(t);return}let r=W(t?.action_key);if(r===H){_(t);return}if(V.has(r)){g(t);return}l.handleRealtimeInvalidation(t)}),y=k({client:t,accessToken:c?.access_token,dispatch:a}),b=null,x=0,S=!1,C=!1,w=null,T=document.visibilityState===`hidden`,E=t.auth.onAuthStateChange((e,t)=>{if(d||!t)return;let n=String(c?.access_token??``).trim(),r=String(t.access_token??``).trim();c=t,!(!r||r===n)&&(S=!0,y.setAccessToken(r).catch(e=>{d||console.warn(`Không cập nhật được token Realtime:`,e)}))}).data.subscription;function D(){b!==null&&(window.clearTimeout(b),b=null)}function O(e){return Object.freeze({source:`authoritative-resume`,reason:String(e??`realtime-resume`),entity_type:`NHAN_VIEN`,entity_id:String(s?.id_nhan_vien??s?.id??``).trim(),action_key:`APP_REALTIME_RESUME`,resumed_at:new Date().toISOString()})}function A(e){if(d)return Promise.resolve(!1);if(w)return w;let t=O(e),n=(async()=>(await g(t),!d&&l.handleRealtimeResume(t)))().catch(e=>(d||console.warn(`Không đối soát được dữ liệu sau khi khôi phục Realtime:`,e),!1)),r;return r=n.finally(()=>{w===r&&(w=null)}),w=r,r}function j(e,{immediate:t=!1}={}){if(d||b!==null||document.visibilityState===`hidden`||globalThis.navigator?.onLine===!1)return;let n=t?0:Math.min(500*2**Math.min(x,4),8e3);b=window.setTimeout(()=>{b=null,!(d||document.visibilityState===`hidden`||globalThis.navigator?.onLine===!1)&&y.restart().catch(t=>{d||(S=!0,x+=1,console.warn(`Không khởi động lại được Realtime (${e}):`,t),j(`restart-failed`))})},n)}let F=i(`realtime-status`,e=>{let t=String(e.detail?.status??``).trim().toUpperCase();if(t===`SUBSCRIBED`){let e=S&&C&&document.visibilityState!==`hidden`&&globalThis.navigator?.onLine!==!1;C=!0,x=0,D(),e?(S=!1,A(`subscribed-after-gap`)):document.visibilityState!==`hidden`&&globalThis.navigator?.onLine!==!1&&(S=!1);return}(t===`CHANNEL_ERROR`||t===`TIMED_OUT`||t===`CLOSED`)&&(S=!0,x+=1,j(t.toLowerCase()))});function I(){if(document.visibilityState===`hidden`){T=!0,S=!0,D();return}!T&&!S||(T=!1,S=!0,j(`visibility-resume`,{immediate:!0}))}function L(){S=!0,j(`browser-online`,{immediate:!0})}function R(){S=!0,D()}document.addEventListener(`visibilitychange`,I),window.addEventListener(`online`,L),window.addEventListener(`offline`,R);let B=async()=>{d||(d=!0,u(),v(),F(),E?.unsubscribe?.(),D(),document.removeEventListener(`visibilitychange`,I),window.removeEventListener(`online`,L),window.removeEventListener(`offline`,R),await y.stop(),await l.cleanup())};N=B,y.start().catch(e=>{S=!0,x+=1,j(`initial-start-failed`),N===B&&console.error(`Không mở được Realtime SyncBus:`,e)})}async function q(e){if(!e)throw Error(`Không tìm thấy phần tử #app.`);await P();let t=e.querySelector(`[data-app-boot-shell]`);t?(t.setAttribute(`aria-label`,`Đang kiểm tra phiên đăng nhập`),t.setAttribute(`aria-busy`,`true`)):e.innerHTML=`
      <div class="startup-screen">
        <span>Đang kiểm tra phiên đăng nhập...</span>
      </div>
    `;try{let t=await l();if(t){await K(e,t);return}}catch(e){console.error(`Không thể khôi phục phiên đăng nhập:`,e)}g(e,{async onSubmit({username:t,password:n}){await K(e,await p(t,n))}})}var J=820,Y=null;function X(e){let t=Number(e);return Number.isFinite(t)&&t>0?t:1/0}function Z(){let e=X(globalThis.screen?.width),t=X(globalThis.screen?.height);return Math.min(e,t)<=J}function Q(){return globalThis.matchMedia?.(`(hover: none) and (pointer: coarse)`).matches===!0}function $(){return X(globalThis.innerWidth)<=J}function ae(){return $()||Q()&&Z()?`mobile`:`desktop`}function oe(){let e=document.querySelector(`#app`),t=document.querySelector(`#device-preview-stage`);e&&t&&t.contains(e)&&t.parentNode&&t.parentNode.insertBefore(e,t),t?.remove(),document.querySelector(`#device-preview-frame`)?.remove(),document.querySelector(`#manual-layout-toggle`)?.remove(),document.documentElement.style.removeProperty(`--phone-preview-scale`);try{globalThis.localStorage?.removeItem(`kangaroo_erp_manual_layout`)}catch{}}function se(e){globalThis.dispatchEvent(new CustomEvent(`kangaroo:layout-change`,{detail:{mode:e,source:`automatic-responsive-layout`}}))}function ce(){oe();let e=ae(),t=document.documentElement.dataset.layout;return document.documentElement.dataset.layout=e,t&&t!==e&&se(e),e}function le(){Y?.();let e=globalThis.matchMedia?.(`(max-width: ${J}px)`),t=globalThis.matchMedia?.(`(hover: none) and (pointer: coarse)`),n=0;function r(){n&&globalThis.cancelAnimationFrame?.(n),n=(globalThis.requestAnimationFrame??(e=>globalThis.setTimeout(e,0)))(()=>{n=0,ce()})}return e?.addEventListener?.(`change`,r),t?.addEventListener?.(`change`,r),globalThis.addEventListener(`resize`,r,{passive:!0}),globalThis.addEventListener(`orientationchange`,r,{passive:!0}),ce(),Y=()=>{e?.removeEventListener?.(`change`,r),t?.removeEventListener?.(`change`,r),globalThis.removeEventListener(`resize`,r),globalThis.removeEventListener(`orientationchange`,r),n&&=(globalThis.cancelAnimationFrame?.(n),0)},Y}le(),await q(document.querySelector(`#app`));