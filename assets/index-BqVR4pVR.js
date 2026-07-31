const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/nhan_vien-Byg1ED5A.js","assets/searchRuntime-CHhHjD_4.js","assets/interactionGuard-BvHEISwp.js","assets/runtimeCore-t2AnId75.js","assets/confirmDialog-BNiosfv-.js","assets/toast-DvZC7wAk.js","assets/toast-BSI_6rkx.css","assets/nhan_vien-uFBI9W1M.css","assets/tao_don-BswbQ1hQ.js","assets/runtimeBus-2EJwbL_u.js","assets/actionLock-BTZKYVnA.js","assets/giao_hang-BXSXQddT.js","assets/deliveryCheckSummary-B56Yby1m.js","assets/deliveryCheckSummary-U02spDCx.css","assets/giao_hang-rbIdOZsX.css","assets/hoa_don-CIbVRtWC.js","assets/hoa_don-D1tINb-v.css","assets/doi_soat-D6-cs46e.js","assets/pageLayout-Deilvc9n.js","assets/dich_vu-C1QUNGCc.js"])))=>i.map(i=>d[i]);
import{n as e,r as t,t as n}from"./interactionGuard-BvHEISwp.js";import{n as r,t as i}from"./runtimeBus-2EJwbL_u.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var a=Object.freeze({name:`Kangaroo ERP`,version:`V6.5`,subtitle:`Supabase RPC-only`});function o({id:e,label:t,shortLabel:n,load:r}){let i=null;function a(){return i||=Promise.resolve().then(r).then(e=>e?.default??e).then(t=>{if(!t||typeof t.render!=`function`)throw TypeError(`MODULE_RENDER_REQUIRED:${e}`);if(t.id&&t.id!==e)throw TypeError(`MODULE_ID_MISMATCH:${e}`);return t}).catch(e=>{throw i=null,e}),i}return Object.freeze({id:e,label:t,shortLabel:n,async prefetch(){await a()},async render(e,t={}){return(await a()).render(e,t)}})}var s=Object.freeze([o({id:`nhan-vien`,label:`Nhân viên`,shortLabel:`NV`,load:()=>t(()=>import(`./nhan_vien-Byg1ED5A.js`),__vite__mapDeps([0,1,2,3,4,5,6,7]))}),o({id:`tao-don`,label:`Tạo đơn`,shortLabel:`TĐ`,load:()=>t(()=>import(`./tao_don-BswbQ1hQ.js`),__vite__mapDeps([8,9,1,2,10,3]))}),o({id:`giao-hang`,label:`Giao hàng`,shortLabel:`GH`,load:()=>t(()=>import(`./giao_hang-BXSXQddT.js`),__vite__mapDeps([11,2,1,12,10,13,3,4,5,6,14]))}),o({id:`hoa-don`,label:`Hóa đơn`,shortLabel:`HĐ`,load:()=>t(()=>import(`./hoa_don-CIbVRtWC.js`),__vite__mapDeps([15,2,1,12,10,13,5,6,16]))}),o({id:`doi-soat`,label:`Đối soát`,shortLabel:`ĐS`,load:()=>t(()=>import(`./doi_soat-D6-cs46e.js`),__vite__mapDeps([17,18]))}),o({id:`dich-vu`,label:`Dịch vụ`,shortLabel:`DV`,load:()=>t(()=>import(`./dich_vu-C1QUNGCc.js`),__vite__mapDeps([19,18]))})]);async function c(){let{data:t,error:n}=await e.auth.getSession();if(n)throw n;return t.session}function l(e){let t=String(e??``).trim();if(!t)throw Error(`Vui lòng nhập tài khoản.`);return t}async function u(e){let t=e.toLowerCase(),n=new TextEncoder().encode(t),r=await globalThis.crypto.subtle.digest(`SHA-256`,n);return`nv-${[...new Uint8Array(r)].map(e=>e.toString(16).padStart(2,`0`)).join(``)}@kangaroo.local`}async function d(e){let t=l(e),n=t.toLowerCase();if(/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(n)&&n.length<=240)return[n];let r=[];return/^[a-z0-9._-]+$/.test(n)&&n.length<=120&&r.push(`${n}@kangaroo.local`),r.push(await u(t)),[...new Set(r)]}async function f(t,n){let r=String(n??``);if(!r)throw Error(`Vui lòng nhập mật khẩu.`);let i=await d(t);for(let t of i){let{data:n,error:i}=await e.auth.signInWithPassword({email:t,password:r});if(!i&&n?.session)return n.session}throw Error(`Tài khoản hoặc mật khẩu không đúng.`)}async function p(){let{error:t}=await e.auth.signOut();if(t)throw t}async function m(){let{data:t,error:n}=await e.rpc(`rpc_bootstrap_current_user`);if(n)throw n;return t}function h(e,{onSubmit:t}){e.innerHTML=`
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
  `;let n=e.querySelector(`#login-form`),r=e.querySelector(`#login-submit`),i=e.querySelector(`#login-error`);n.addEventListener(`submit`,async e=>{e.preventDefault();let a=new FormData(n),o=a.get(`username`),s=a.get(`password`);i.hidden=!0,i.textContent=``,r.disabled=!0,r.textContent=`Đang đăng nhập...`;try{await t({username:o,password:s})}catch(e){i.textContent=e?.message||`Không thể đăng nhập.`,i.hidden=!1,r.disabled=!1,r.textContent=`Đăng nhập`}})}var g=`kangaroo-domain-events-v1`,_=`domain-event-v1`,v=2048,y=new Set([`CHANNEL_ERROR`,`TIMED_OUT`]);function b(e){return String(e??``).trim()||null}function x(e,t){let n=b(e);if(!n)throw Error(`REALTIME_${t.toUpperCase()}_REQUIRED`);return n}function S(e,t){let n=x(e,t);if(!/^\d+$/.test(n)||BigInt(n)<1n)throw Error(`REALTIME_${t.toUpperCase()}_INVALID`);return n}function C(e){return e instanceof Error?e.message:String(e??`UNKNOWN_ERROR`)}function w(e){let t=e?.payload??e;if(!t||typeof t!=`object`)throw Error(`REALTIME_ENVELOPE_REQUIRED`);if(Number(t.schema_version)!==1)throw Error(`REALTIME_SCHEMA_VERSION_UNSUPPORTED`);let n=t.entity_version===null||t.entity_version===void 0?null:S(t.entity_version,`entity_version`);return Object.freeze({schema_version:1,id_outbox:S(t.id_outbox,`id_outbox`),id_event:x(t.id_event,`id_event`),source_topic:x(t.source_topic,`source_topic`),entity_type:x(t.entity_type,`entity_type`).toUpperCase(),entity_id:x(t.entity_id,`entity_id`),entity_version:n,action_key:x(t.action_key,`action_key`).toUpperCase(),occurred_at:b(t.occurred_at),published_at:b(t.published_at)})}function T(e,t,n){if(!e.has(n))for(e.add(n),t.push(n);t.length>v;){let n=t.shift();e.delete(n)}}function E(e,t,n){for(e.has(t)&&e.delete(t),e.set(t,n);e.size>v;){let t=e.keys().next().value;e.delete(t)}}function D({client:e,accessToken:t,dispatch:n,logger:r=console}={}){if(!e||typeof e.channel!=`function`||typeof e.removeChannel!=`function`||typeof e.realtime?.setAuth!=`function`)throw TypeError(`REALTIME_SUPABASE_CLIENT_REQUIRED`);if(typeof n!=`function`)throw TypeError(`REALTIME_DISPATCH_REQUIRED`);let i=x(t,`access_token`),a=new Set,o=[],s=new Set,c=[],l=new Map,u=null,d=!1,f=!1,p=null;function m(e,t=null){n(`realtime-status`,{status:b(e),error:t?C(t):null})}function h(e){let t;try{t=w(e)}catch(e){return r?.warn?.(`[KANGAROO SyncBus] Invalid broadcast:`,e),{accepted:!1,reason:`invalid-envelope`}}if(a.has(t.id_outbox)||s.has(t.id_event))return{accepted:!1,reason:`duplicate`};let i=`${t.entity_type}:`+t.entity_id;if(t.entity_version!==null){let e=BigInt(t.entity_version),n=l.get(i);if(n!==void 0&&e<=n)return T(a,o,t.id_outbox),T(s,c,t.id_event),{accepted:!1,reason:`stale-version`};E(l,i,e)}return T(a,o,t.id_outbox),T(s,c,t.id_event),n(`domain-event`,t),{accepted:!0,envelope:t}}async function v(){if(d)return!1;if(f)return!0;if(await e.realtime.setAuth(i),d)return!1;let t=e.channel(g,{config:{private:!0,broadcast:{ack:!1,self:!1}}});return t.on(`broadcast`,{event:_},h),u=t,t.subscribe((e,t)=>{d||(m(e,t),y.has(e)&&r?.error?.(`[KANGAROO SyncBus] ${e}:`,t))}),f=!0,!0}function S(){return p||(p=v().catch(e=>{throw p=null,e}),p)}async function D(){if(d)return;d=!0,f=!1;let t=u;if(u=null,t)try{await e.removeChannel(t)}catch(e){r?.warn?.(`[KANGAROO SyncBus] Không đóng được channel:`,e)}}return Object.freeze({start:S,stop:D,receive:h,isStarted(){return f&&!d},isDisposed(){return d}})}var O=Object.freeze({"tao-don":`🧺`,"giao-hang":`🚚`,"hoa-don":`🧾`,"doi-soat":`🔄`,"dich-vu":`🛠️`,"nhan-vien":`👥`}),k=Object.freeze({"tao-don":{headerMode:`title`,bottomActions:[{key:`reset`,label:`Xóa form`,variant:`secondary`,formAction:`reset`},{key:`confirm`,label:`Xác nhận`,variant:`primary`,formAction:`submit`}]},"nhan-vien":{headerMode:`search`,placeholder:`Tìm tên / mã nhân viên...`},"giao-hang":{headerMode:`search`,placeholder:`Tìm mã đơn / mã phiếu / tên KH...`},"hoa-don":{headerMode:`search`,placeholder:`Tìm mã hóa đơn / mã đơn / tên KH...`},"doi-soat":{headerMode:`search`,placeholder:`Tìm mã đối soát / mã đơn / nhân viên...`},"dich-vu":{headerMode:`search`,placeholder:`Tìm mã dịch vụ / khách hàng / sản phẩm...`}}),A=s,j=null;async function M(){let e=j;j=null,typeof e==`function`&&await e()}var N=Object.freeze({nhan_vien:`MODULE_NHAN_VIEN_VIEW`,tao_don:`MODULE_TAO_DON_VIEW`,giao_hang:`MODULE_GIAO_HANG_VIEW`,hoa_don:`MODULE_HOA_DON_VIEW`,doi_soat:`MODULE_DOI_SOAT_VIEW`,dich_vu:`MODULE_HAU_MAI_VIEW`});function P(e){return String(e??``).trim().toLowerCase().replaceAll(`-`,`_`)}function F(e){let t=e?.permissions??{};return new Set([...Array.isArray(e?.permission_keys)?e.permission_keys:[],...Array.isArray(t.modules)?t.modules:[],...Array.isArray(t.resources)?t.resources:[],...Array.isArray(t.fields)?t.fields:[],...Array.isArray(t.actions)?t.actions:[],...Array.isArray(t.special)?t.special:[]].map(String))}function I(e){return e?.is_admin===!0}function L(e){if(I(e))return[...s];let t=F(e),n=s.filter(e=>{let n=P(e?.id);if(n===`nhan_vien`)return!0;let r=N[n];return!!r&&t.has(r)});return n.length>0?n:s.filter(e=>P(e?.id)===`nhan_vien`)}function R(){return document.documentElement.dataset.layout===`mobile`}function ee(e){return e?.ten_nhan_vien??e?.ten_dang_nhap??`admin`}function te(){return A.map(e=>`
        <button
          class="mobile-module-card"
          type="button"
          data-mobile-module-id="${e.id}"
        >
          <span class="mobile-module-icon">
            ${O[e.id]??`📦`}
          </span>

          <span class="mobile-module-label">
            ${e.label}
          </span>
        </button>
      `).join(``)}function ne(){return A.map((e,t)=>`
        <button
          class="module-button${t===0?` is-active`:``}"
          type="button"
          data-module-id="${e.id}"
        >
          <span class="module-button-icon">
            ${O[e.id]??e.shortLabel}
          </span>

          <span class="module-button-text">
            ${e.label}
          </span>
        </button>
      `).join(``)}function z(e,t,r){let i=ee(r);e.innerHTML=`
    <div class="app-shell">
      <aside class="app-sidebar">
        <div class="brand">
          <div class="brand-mark">K</div>

          <div class="brand-copy">
            <strong>${a.name}</strong>
            <span>${a.version}</span>
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
          <span>${a.subtitle}</span>
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
              <h1 class="desktop-app-title">${a.name}</h1>
              <h1 class="mobile-app-title">KANGAROO</h1>

              <p id="current-module-name">
                ${R()?`Trang chủ`:A[0].label}
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
            ${A.map(e=>`
                  <button
                    type="button"
                    class="desktop-quick-card"
                    data-desktop-quick-id="${e.id}"
                  >
                    <span class="desktop-quick-icon">
                      ${O[e.id]??`📦`}
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
  `;let o=e.querySelector(`#module-content`),s=e.querySelector(`#mobile-home`),c=e.querySelector(`#desktop-dashboard`),l=e.querySelector(`#mobile-page-header`),u=e.querySelector(`#mobile-page-back-button`),d=e.querySelector(`#mobile-page-title-slot`),f=e.querySelector(`#mobile-page-title`),m=e.querySelector(`#mobile-page-search-form`),h=e.querySelector(`#mobile-page-search-input`),g=e.querySelector(`#mobile-page-refresh-button`),_=e.querySelector(`#mobile-page-right-actions`),v=e.querySelector(`#mobile-page-bottom`),y=e.querySelector(`#current-module-name`),b=[...e.querySelectorAll(`[data-module-id]`)],x=[...e.querySelectorAll(`[data-mobile-module-id]`)],S=[...e.querySelectorAll(`[data-desktop-quick-id]`)],C=A[0].id,w={},T=0,E=null,D=null,j=null,N=null,P=new Map,F=!1;function I(e={}){if(F)return;let t=String(e?.entity_type??``).trim().toUpperCase(),n=String(e?.entity_id??``).trim(),r=t&&n?`${t}:${n}`:String(e?.id_event??e?.id_outbox??``).trim()||`anonymous:${P.size}`;P.set(r,e);let i=C,a=T;N!==null&&window.clearTimeout(N),N=window.setTimeout(()=>{N=null;let e=[...P.values()];if(P.clear(),F||C!==i||T!==a)return;let t=j;!t||t.activationId!==T||t.moduleId!==C||typeof t.callback!=`function`||e.reduce((e,n)=>e.then(async()=>{try{await t.callback(n)}catch(e){console.error(`Lỗi xử lý Realtime của module:`,e)}}),Promise.resolve())},400)}async function L(){F||(F=!0,N!==null&&(window.clearTimeout(N),N=null),P.clear(),window.removeEventListener(`kangaroo:layout-change`,$),await V())}function z(e,t,n=`loading`){let r=document.createElement(`div`);r.className=`module-runtime-status is-${n}`,r.setAttribute(`role`,n===`error`?`alert`:`status`),r.textContent=String(t??``),e.replaceChildren(r)}function B(e,n,i,a){let s=[],c=!1,l=Number.isFinite(a)?a:performance.now(),u=null,d=Object.freeze({session:t,identity:r,moduleId:e.id,activationId:n,startedAt:l,elapsedMs(){return Math.round((performance.now()-l)*10)/10},markReady(t={}){if(u!==null)return u;if(!d.isActive())return null;u=d.elapsedMs();let r=t&&typeof t==`object`?t:{},a=r.state===`error`?`error`:`ready`;i.dataset.moduleRuntimeState=a,i.dataset.moduleReadyMs=String(u);let o={...r,moduleId:e.id,activationId:n,durationMs:u};return i.dispatchEvent(new CustomEvent(`kangaroo:module-ready`,{bubbles:!0,detail:o})),console.info(`[KANGAROO runtime] ${e.id} ready in ${u}ms`,o),u},isActive(){return!c&&T===n&&C===e.id&&D===i&&i.isConnected&&!o.hidden},onRealtimeInvalidation(t){if(typeof t!=`function`||c)return()=>{};let r={activationId:n,moduleId:e.id,callback:t};j=r;let i=()=>{j===r&&(j=null)};return s.push(i),i},onCleanup(e){return typeof e==`function`?c?(Promise.resolve().then(e).catch(e=>{console.error(`Lỗi cleanup module:`,e)}),()=>{}):(s.push(e),()=>{let t=s.indexOf(e);t>=0&&s.splice(t,1)}):()=>{}}});async function f(){if(!c){c=!0;for(let e=s.length-1;e>=0;--e)try{await s[e]()}catch(e){console.error(`Lỗi cleanup module:`,e)}s.length=0}}return{runtime:d,cleanup:f}}async function V(){let e=E;E=null,j=null,typeof e==`function`&&await e()}function U(){T+=1,D=null,o.replaceChildren(),V()}function W(e,t={}){o.dispatchEvent(new CustomEvent(e,{bubbles:!0,detail:t}))}function G(e=[]){v.replaceChildren(),e.forEach(e=>{let t=document.createElement(`button`);t.type=`button`,t.className=`mobile-page-bottom-button is-${e.variant??`secondary`}`,t.textContent=e.label,t.disabled=!!e.disabled,t.addEventListener(`click`,async()=>{if(!t.disabled){if(typeof e.onClick==`function`)await e.onClick();else{let t=o.querySelector(`form`);e.formAction===`reset`&&t&&t.reset(),e.formAction===`submit`&&t&&t.requestSubmit()}W(`kangaroo:module-action`,{action:e.key,formAction:e.formAction??null})}}),v.appendChild(t)});let t=R()&&e.length>0;v.hidden=!t,o.classList.toggle(`has-mobile-bottom`,t)}function K(e={}){w=e;let t=e.headerMode??e.mode??`title`,n=t===`search`;l.hidden=!R(),l.dataset.mode=t,d.hidden=n,m.hidden=!n,f.textContent=e.title??`Module`,h.placeholder=e.placeholder??`Tìm kiếm...`,typeof e.searchValue==`string`&&h.value!==e.searchValue&&(h.value=e.searchValue);let r=e.showRightAction??e.showRefresh??n;g.hidden=!r,g.textContent=e.rightIcon??`↻`,g.setAttribute(`aria-label`,e.rightLabel??`Làm mới`),_.querySelectorAll(`[data-mobile-page-extra-action]`).forEach(e=>e.remove());let i=Array.isArray(e.rightActions)?e.rightActions.filter(Boolean):[],a=i.length||+!!r;l.style.setProperty(`--mobile-page-side-width`,`${Math.max(40,a*40)}px`),i.length&&(g.hidden=!0,i.forEach(e=>{let t=document.createElement(`button`);t.type=`button`,t.className=`mobile-page-icon-button`,t.dataset.mobilePageExtraAction=e.key??``,t.textContent=e.icon??`•`,t.disabled=!!e.disabled,t.setAttribute(`aria-label`,e.label??`Thao tác`),t.addEventListener(`click`,async()=>{t.disabled||(typeof e.onAction==`function`?await e.onAction():typeof e.onClick==`function`&&await e.onClick(),e.dispatchRefresh!==!1&&W(`kangaroo:module-refresh`))}),_.appendChild(t)})),G(e.bottomActions??[])}function q(e){K({...k[e.id]??{headerMode:`title`},title:e.label})}function J(e){b.forEach(t=>{t.classList.toggle(`is-active`,t.dataset.moduleId===e)})}function Y(){U(),w={},s.hidden=!1,l.hidden=!0,v.hidden=!0,c.hidden=!0,o.hidden=!0,o.classList.remove(`has-mobile-bottom`),y.textContent=`Trang chủ`}function X(){U(),s.hidden=!0,l.hidden=!0,v.hidden=!0,c.hidden=!1,o.hidden=!0,o.classList.remove(`has-mobile-bottom`),y.textContent=`Tổng quan`}async function Z(e){let t=performance.now();n();let r=A.find(t=>t.id===e)??A[0],i=T+1;T=i,C=r.id,J(r.id),y.textContent=r.label,s.hidden=!0,c.hidden=!0,o.hidden=!1,q(r);let a=document.createElement(`div`);if(a.className=`module-runtime-root`,a.dataset.moduleRuntimeId=r.id,a.dataset.moduleActivationId=String(i),a.dataset.moduleRuntimeState=`loading`,D=a,o.replaceChildren(a),await V(),T!==i||D!==a)return;let u=B(r,i,a,t);E=u.cleanup;try{let e=await r.render(a,u.runtime);if(typeof e==`function`&&u.runtime.onCleanup(e),!u.runtime.isActive()){await u.cleanup();return}}catch(e){if(!u.runtime.isActive())return;console.error(`Không mở được module ${r.id}:`,e),a.dataset.moduleRuntimeState=`error`,z(a,`Không mở được module. Vui lòng thử lại.`,`error`)}R()||(l.hidden=!0,v.hidden=!0,o.classList.remove(`has-mobile-bottom`))}b.forEach(e=>{e.addEventListener(`click`,()=>{Z(e.dataset.moduleId)})}),x.forEach(e=>{e.addEventListener(`click`,()=>{Z(e.dataset.mobileModuleId)})}),S.forEach(e=>{e.addEventListener(`click`,()=>{Z(e.dataset.desktopQuickId)})}),o.addEventListener(`kangaroo:page-chrome`,e=>{e.stopPropagation(),K(e.detail??{})}),u.addEventListener(`click`,async()=>{if(typeof w.onBack==`function`){await w.onBack();return}Y()}),m.addEventListener(`submit`,async e=>{e.preventDefault(),typeof w.onSearch==`function`&&await w.onSearch(h.value),W(`kangaroo:module-search`,{value:h.value})}),h.addEventListener(`input`,async e=>{let t=e.currentTarget.value,n=typeof w.onSearchInput==`function`?w.onSearchInput:w.onSearch;typeof n==`function`&&await n(t),W(`kangaroo:module-search`,{value:t})}),g.addEventListener(`click`,async()=>{typeof w.onRightAction==`function`?await w.onRightAction():typeof w.onRefresh==`function`&&await w.onRefresh(),W(`kangaroo:module-refresh`)});async function Q(){await M(),await p(),await H(e)}e.querySelector(`#mobile-logout-button`).addEventListener(`click`,Q),e.querySelector(`#logout-button`).addEventListener(`click`,Q);function $(e){if(e.detail?.mode===`mobile`){Y();return}X()}return window.addEventListener(`kangaroo:layout-change`,$),R()?Y():X(),Object.freeze({handleRealtimeInvalidation:I,cleanup:L})}function B(e){let t=globalThis.navigator?.connection;if(t?.saveData===!0||t?.effectiveType===`slow-2g`||t?.effectiveType===`2g`)return()=>{};let n=Array.from(e??[]).filter(e=>typeof e?.prefetch==`function`),r=!1,i=null,a=!1;function o(){if(!(r||n.length===0)){if(typeof globalThis.requestIdleCallback==`function`){a=!0,i=globalThis.requestIdleCallback(s,{timeout:2400});return}a=!1,i=globalThis.setTimeout(s,900)}}function s(){if(i=null,r)return;let e=n.shift();Promise.resolve(e?.prefetch?.()).catch(()=>{}).finally(o)}return o(),()=>{r=!0,i!==null&&(a&&typeof globalThis.cancelIdleCallback==`function`?globalThis.cancelIdleCallback(i):globalThis.clearTimeout(i),i=null)}}async function V(t,n){await M();let a=await m();A=L(a);let o=z(t,n,a),s=B(A),c=r(`domain-event`,e=>{o.handleRealtimeInvalidation(e.detail??{})}),l=D({client:e,accessToken:n?.access_token,dispatch:i}),u=!1,d=async()=>{u||(u=!0,s(),c(),await l.stop(),await o.cleanup())};j=d,l.start().catch(e=>{j===d&&console.error(`Không mở được Realtime SyncBus:`,e)})}async function H(e){if(!e)throw Error(`Không tìm thấy phần tử #app.`);await M();let t=e.querySelector(`[data-app-boot-shell]`);t?(t.setAttribute(`aria-label`,`Đang kiểm tra phiên đăng nhập`),t.setAttribute(`aria-busy`,`true`)):e.innerHTML=`
      <div class="startup-screen">
        <span>Đang kiểm tra phiên đăng nhập...</span>
      </div>
    `;try{let t=await c();if(t){await V(e,t);return}}catch(e){console.error(`Không thể khôi phục phiên đăng nhập:`,e)}h(e,{async onSubmit({username:t,password:n}){await V(e,await f(t,n))}})}var U=`kangaroo_erp_manual_layout`,W=440,G=956;function K(){return localStorage.getItem(U)===`mobile`?`mobile`:`desktop`}function q(){let e=document.querySelector(`#app`);if(!e)throw Error(`Không tìm thấy phần tử #app.`);let t=document.querySelector(`#device-preview-stage`);if(t)return t;t=document.createElement(`div`),t.id=`device-preview-stage`,t.className=`device-preview-stage`;let n=document.createElement(`div`);return n.id=`device-preview-frame`,n.className=`device-preview-frame`,e.parentNode.insertBefore(t,e),t.appendChild(n),n.appendChild(e),t}function J(){let e=window.innerWidth-40,t=window.innerHeight-40,n=e/W,r=t/G,i=window.innerWidth<1200,a=i?.82:.62,o=i?.58:.42,s=Math.min(n,r,a);document.documentElement.style.setProperty(`--phone-preview-scale`,String(Math.max(s,o)))}function Y(e){let t=e===`mobile`?`mobile`:`desktop`;return localStorage.setItem(U,t),document.documentElement.dataset.layout=t,window.dispatchEvent(new CustomEvent(`kangaroo:layout-change`,{detail:{mode:t}})),t===`mobile`&&(q(),J()),t}function X(){q();let e=document.querySelector(`#manual-layout-toggle`);e||(e=document.createElement(`button`),e.id=`manual-layout-toggle`,e.type=`button`,e.className=`manual-layout-toggle`,document.body.appendChild(e));function t(){let t=Y(K());e.textContent=t===`mobile`?`Chuyển sang PC`:`Xem iPhone 16 Pro Max`}e.addEventListener(`click`,()=>{Y(K()===`mobile`?`desktop`:`mobile`),t()}),window.addEventListener(`resize`,()=>{K()===`mobile`&&J()}),t()}X(),await H(document.querySelector(`#app`));