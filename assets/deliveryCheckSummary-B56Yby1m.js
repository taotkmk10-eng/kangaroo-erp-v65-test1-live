import{n as e}from"./interactionGuard-BvHEISwp.js";import{a as t,i as n,o as r}from"./searchRuntime-CHhHjD_4.js";import{n as i}from"./actionLock-BTZKYVnA.js";function a(e){let t=String(e??``).trim();if(!t)throw TypeError(`Thiếu ID đơn hàng để tải lịch sử.`);return r(`rpc_get_don_hang_history`,{p_id_don_hang:t},`Không tải được lịch sử đơn hàng`)}var o=Object.freeze({order:`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <rect x="5" y="4" width="14" height="16" rx="2"></rect>
      <path d="M8 8h8"></path>
      <path d="M8 12h8"></path>
      <path d="M8 16h5"></path>
    </svg>
  `,user:`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <circle cx="12" cy="8" r="3.25"></circle>
      <path d="M5.5 18.5a6.5 6.5 0 0 1 13 0"></path>
    </svg>
  `,phone:`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M7.8 4.5h2.1l1.1 4-1.5 1.5a14 14 0 0 0 4.5 4.5l1.5-1.5 4 1.1v2.1a1.6 1.6 0 0 1-1.8 1.6A15.9 15.9 0 0 1 6.2 6.3 1.6 1.6 0 0 1 7.8 4.5Z"></path>
    </svg>
  `,map:`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M9 18 3.8 20V6L9 4l6 2 5.2-2v14L15 20l-6-2Z"></path>
      <path d="M9 4v14"></path>
      <path d="M15 6v14"></path>
    </svg>
  `,delivery:`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M3 7h11v10H3z"></path>
      <path d="M14 10h4l3 3v4h-7z"></path>
      <circle cx="7" cy="18" r="2"></circle>
      <circle cx="18" cy="18" r="2"></circle>
    </svg>
  `,install:`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="m14.5 6.5 3-3 3 3-3 3"></path>
      <path d="m13 8 3 3"></path>
      <path d="m4 20 8.5-8.5"></path>
      <path d="m5.5 13.5 5 5"></path>
    </svg>
  `,copy:`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <rect x="8" y="8" width="10" height="10" rx="2"></rect>
      <path d="M6 15H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v1"></path>
    </svg>
  `});function s(e){return String(e??``)}function c(e){let t=s(e).trim();return t?`
    <button
      type="button"
      class="record-detail__copy"
      data-copy-value="${n(t)}"
      aria-label="Sao chép"
      title="Sao chép"
    >
      ${o.copy}
    </button>
  `:``}function l(e){let n=s(e).trim();return n?`
    <span
      class="record-detail__trailing"
      aria-hidden="true"
    >
      ${t(n)}
    </span>
  `:``}function u(e){return[`record-detail__row`,e?.valueOnly?`is-value-only`:``,e?.multiline?`is-multiline`:``,e?.emphasis?`is-emphasis`:``,e?.singleLine?`is-single-line`:``,e?.nested?`is-nested`:``,e?.nestedValueOnly?`is-nested-value`:``,e?.layout===`spread`?`is-spread`:``,e?.actionKey?`is-action`:``].filter(Boolean).join(` `)}function d(e){let r=s(e?.actionKey).trim(),i=r?`button`:`div`,a=r?`
          type="button"
          data-record-detail-action="${n(r)}"
          ${e?.actionValue===void 0?``:`
                  data-record-detail-value="${n(e.actionValue)}"
                `}
        `:``;return`
    <${i}
      class="${u(e)}"
      ${a}
    >
      ${e?.valueOnly?``:`
              <span class="record-detail__label">
                ${t(e?.label??``)}
              </span>
            `}

      <span class="record-detail__value-wrap">
        <strong class="record-detail__value">
          ${t(e?.value??``)}
        </strong>

        ${c(e?.copyValue)}
        ${l(e?.trailing)}
      </span>
    </${i}>
  `}function f(e){return[`record-detail__item`,e?.soft?`is-soft`:``,e?.stacked?`is-stacked`:``,e?.variant===`product`?`is-product`:``,e?.actionKey?`is-action`:``].filter(Boolean).join(` `)}function ee(e){let r=s(e?.actionKey).trim(),i=r?`button`:`div`,a=r?`
          type="button"
          data-record-detail-action="${n(r)}"
          ${e?.actionValue===void 0?``:`
                  data-record-detail-value="${n(e.actionValue)}"
                `}
        `:``;return`
    <${i}
      class="${f(e)}"
      ${a}
    >
      <span class="record-detail__item-main">
        ${e?.title?`
                <strong class="record-detail__item-title">
                  ${t(e.title)}
                </strong>
              `:``}

        ${e?.subtitle?`
                <span class="record-detail__item-subtitle">
                  ${t(e.subtitle)}
                </span>
              `:``}
      </span>

      ${e?.value!==void 0&&e?.value!==null&&s(e.value).trim()!==``?`
              <strong class="record-detail__item-value">
                ${t(e.value)}
              </strong>
            `:``}

      ${l(e?.trailing)}
    </${i}>
  `}function p(e){return[`record-detail__block`,e?.actionKey?`is-action`:``].filter(Boolean).join(` `)}function m(e){let r=Array.isArray(e?.rows)?e.rows:[],i=Array.isArray(e?.items)?e.items:[],a=s(e?.actionKey).trim(),o=a?`
          tabindex="0"
          role="button"
          data-record-detail-action="${n(a)}"
          aria-label="${n(`Mở ${e?.title||`chi tiết`}`)}"
        `:``;return`
    <section
      class="${p(e)}"
      ${o}
    >
      ${e?.title?`
              <h3 class="record-detail__title">
                ${t(e.title)}
              </h3>
            `:``}

      ${r.length?`
              <div class="record-detail__rows">
                ${r.map(d).join(``)}
              </div>
            `:``}

      ${i.length?`
              <div class="record-detail__items">
                ${i.map(ee).join(``)}
              </div>
            `:``}
    </section>
  `}function h({blocks:e=[],emptyText:n=`Chưa có dữ liệu.`}={}){let r=Array.isArray(e)?e.filter(Boolean):[];return r.length?`
    <div class="record-detail">
      ${r.map(m).join(``)}
    </div>
  `:`
      <div class="record-detail__empty">
        ${t(n)}
      </div>
    `}function g(e){return String(e??``).trim()}function _(e){return{key:`history`,icon:`◷`,label:`Lịch sử`,dispatchRefresh:!1,onAction:e}}function v(e,t,n={}){let r=n?.nested===!0;return{...n,label:g(e),value:g(t),singleLine:!r||n?.singleLine===!0,layout:r?n?.layout:`spread`}}function y(e,t){let n=Array.isArray(e)?e.filter(Boolean).map(e=>e?.nested===!0?e:v(e?.label,e?.value,e)):[],r=Array.isArray(t)?t.filter(Boolean).map(e=>v(e?.title??e?.label,g(e?.value)||g(e?.subtitle),e)).filter(e=>e.label||e.value):[];return[...n,...r]}function te({title:e=`Lịch sử`,items:t=[],rows:n=[],emptyText:r=`Chưa có lịch sử nghiệp vụ.`}={}){let i=y(n,t);return h({blocks:i.length?[{title:e,rows:i}]:[],emptyText:r})}function b(e,t=``){return String(e??``).trim()||t}function x(e){return b(e).toUpperCase().replace(/[^A-Z0-9]+/g,`_`).replace(/^_+|_+$/g,``)}function S(e){return e?.payload&&typeof e.payload==`object`?e.payload:{}}function C(e){return e?.created_at??e?.occurred_at??e?.timestamp??null}function w(e){let t=Date.parse(C(e)??``);return Number.isFinite(t)?t:0}function T(e){return e?i(e,b(e)):``}function E(e){return b(e?.actor_name,`Hệ thống`)}function D(e){let t=S(e);return b(e?.target_actor_name??t.target_actor_name??t.receiver_name??t.ten_nguoi_nhan??t.assignee_name)}function O(e){let t=S(e);return b(t.ghi_chu_chuyen??t.ghi_chu_hen??t.ghi_chu_hoan_thanh??t.ghi_chu_huy??t.note??t.ghi_chu??t.reason??t.ly_do??t.ly_do_hen_lai??t.ly_do_huy)}function ne(e){let t=S(e);return t.ngay_hen??t.thoi_gian_hen??t.thoi_gian_hen_lai??t.hen_lai_at??t.scheduled_at??t.new_scheduled_at??t.appointment_at??t.delivery_at??null}function re(e){let t=S(e);return t.amount??t.so_tien??t.money??t.tong_tien??null}function ie(e){let t=Number(e);return Number.isFinite(t)?`${t.toLocaleString(`vi-VN`)} đ`:b(e)}function k(e,t){let n=C(t);return v(e,T(n),{occurredAt:n,eventId:t?.event_id})}function A(e){return v(``,e,{nested:!0,singleLine:!1})}function j(e,t){let n=T(C(t));return A(n?`${e} · ${n}`:e)}function ae(e){return e.includes(`CHUYEN_NGUOI_NHAN`)||e.includes(`CHUYEN_DON`)||e.includes(`ASSIGNEE_TRANSFER`)}function M(e){let t=x(e),n=new Set(t.split(`_`).filter(Boolean));return t.includes(`_TU_CHOI`)||n.has(`REJECT`)||n.has(`REJECTED`)?`rejected`:t.includes(`_XAC_NHAN`)||n.has(`ACCEPT`)||n.has(`ACCEPTED`)?`accepted`:n.has(`HUY`)||n.has(`CANCEL`)||n.has(`CANCELLED`)||n.has(`CANCELED`)?`cancelled`:`requested`}function oe(e){return x(e?.reference_type).includes(`CHUYEN_NGUOI_NHAN`)&&e?.reference_id?String(e.reference_id):e?.entity_id?String(e.entity_id):e?.reference_id?String(e.reference_id):b(e?.event_group_key??e?.event_id,`transfer:${C(e)}`)}function se(e){let t=e.request,n=e.result,r=t?E(t):``,i=t?D(t):``,a=n?M(x(n?.action_key)):``;return!r&&n&&(a===`accepted`||a===`rejected`)&&(r=D(n)),!i&&n&&(a===`accepted`||a===`rejected`)&&(i=E(n)),!r&&a===`cancelled`&&(r=E(n)),!i&&a===`cancelled`&&(i=D(n)),{sender:r,receiver:i}}function ce(e){let{sender:t,receiver:n}=se(e);return t&&n?`${t} đã chuyển đơn cho `+n:t?`${t} đã tạo yêu cầu chuyển đơn`:`Đã tạo yêu cầu chuyển đơn`}function le(e){let t=e.result;if(!t)return``;let n=M(x(t?.action_key)),r=E(t);return n===`accepted`?`${r} xác nhận`:n===`rejected`?`${r} từ chối`:n===`cancelled`?`${r} hủy chuyển`:``}function ue(e){let t=[];return[e.request,e.result].forEach(e=>{if(!e)return;let n=O(e);n&&!t.includes(n)&&t.push(n)}),t}function de(e){let t=e.request??e.result,n=[k(ce(e),t)];ue(e).forEach(e=>{n.push(A(`Ghi chú: ${e}`))});let r=le(e);return r&&e.result&&n.push(j(r,e.result)),n}function fe(e){return[`DON_HANG_TAO`,`CREATE_ORDER`,`ORDER_CREATED`].includes(e)?`created`:[`GIAO_HANG_NHAN_DON`,`DELIVERY_RECEIVED`,`ORDER_RECEIVED`,`NHAN_DON`].includes(e)?`received`:[`CHECK_CONFIRMED`,`CONFIRM_DELIVERY_CHECK`,`GIAO_HANG_KIEM_HANG`,`GIAO_HANG_XAC_NHAN_KIEM_HANG`,`GIAO_HANG_KIEM_HANG_XAC_NHAN`].includes(e)?`checked`:[`CHECK_SKIPPED_ADDED`,`CHECK_SKIPPED_REMOVED`,`CHECK_LINE_UPDATED`,`CHECK_UPDATED`,`UPDATE_DELIVERY_CHECK`,`GIAO_HANG_SUA_KIEM_HANG`,`GIAO_HANG_XAC_NHAN_SUA_KIEM_HANG`].includes(e)?`check-edited`:[`GIAO_HANG_BAT_DAU_VAN_CHUYEN`,`DELIVERY_STARTED`,`START_DELIVERY`].includes(e)?`started`:[`GIAO_HANG_TIEP_TUC_HEN_LAI`,`DELIVERY_RESUMED`].includes(e)?`resumed`:e.includes(`HEN_LAI`)||e.includes(`RESCHEDULE`)?`rescheduled`:[`GIAO_HANG_HOAN_TAT`,`GIAO_HANG_HOAN_THANH`,`DELIVERY_COMPLETED`,`DELIVERY_SUCCESS`].includes(e)?`completed`:[`GIAO_HANG_HUY_DON`,`GIAO_HANG_HUY`,`DELIVERY_CANCELLED`,`ORDER_CANCELLED`,`CANCEL_DELIVERY`].includes(e)?`cancelled`:[`HOA_DON_XAC_NHAN_DA_THU`,`HOA_DON_THU_TIEN`].includes(e)?`money-collected-customer`:e===`HOA_DON_XAC_NHAN_COD`?`money-collected-cod`:e===`HOA_DON_XAC_NHAN_TIEN_DANG_GIU`?`money-held-confirmed`:[`HOA_DON_CHUYEN_TIEN_NOI_BO`,`HOA_DON_TAO_CHUYEN_TIEN`,`HOA_DON_CHUYEN_TIEN`].includes(e)?`money-transferred`:e===`HOA_DON_BAN_GIAO_XU_LY`?`invoice-handed-over`:e===`HOA_DON_XAC_NHAN_BAN_GIAO`?`invoice-handover-confirmed`:e===`HOA_DON_TAT_TOAN`||e===`HOA_DON_TAT_TOAN_CONG_TY`?`settled`:e===`HOA_DON_HOAN_DON`?`returned`:`other`}function pe(e,t){let n=E(e);return{created:`${n} đã tạo đơn`,received:`${n} đã nhận đơn`,checked:`${n} đã kiểm hàng`,"check-edited":`${n} đã sửa kiểm hàng`,started:`${n} đã bắt đầu đi giao`,resumed:`${n} đã tiếp tục đi giao`,rescheduled:`${n} đã hẹn lại khách`,completed:`${n} đã giao hàng thành công`,cancelled:`${n} đã hủy đơn`,"money-collected-customer":`${n} đã thu khách`,"money-collected-cod":`${n} đã thu COD`,"money-held-confirmed":`${n} đã xác nhận tiền đang giữ`,"money-transferred":D(e)?`${n} đã chuyển cho ${D(e)}`:`${n} đã chuyển tiền`,"invoice-handed-over":`${n} đã bàn giao xử lý hóa đơn`,"invoice-handover-confirmed":`${n} đã xác nhận nhận bàn giao hóa đơn`,settled:`${n} đã tất toán hóa đơn`,returned:`${n} đã hoàn đơn`}[t]??b(e?.action_label??e?.label,`${n} đã cập nhật đơn hàng`)}function me(e){let t=fe(x(e?.action_key)),n=[k(pe(e,t),e)],r=O(e);if(r&&n.push(A(t===`rescheduled`?`Ghi chú hẹn: ${r}`:`Ghi chú: ${r}`)),t===`rescheduled`){let t=ne(e);t&&n.push(A(`Ngày hẹn: ${T(t)}`))}let i=re(e);if(i!=null&&b(i)&&n.push(A(`Số tiền: ${ie(i)}`)),t===`money-transferred`){let t=S(e),r=x(t.status),i=D(e),a=``,o=null;r===`DA_XAC_NHAN`?(a=`${i||`Người nhận`} xác nhận`,o=t.confirmed_at??t.resolved_at):r===`TU_CHOI`?(a=`${i||`Người nhận`} từ chối`,o=t.resolved_at):r===`DA_HUY`?(a=`${E(e)} hủy chuyển`,o=t.resolved_at):r===`DA_DAO`&&(a=`${b(t.reversed_by_name,`Người thực hiện`)} đã đảo giao dịch`,o=t.reversed_at),a&&n.push(j(a,{...e,created_at:o}));let s=b(t.ly_do_dao);r===`DA_DAO`&&s&&n.push(A(`Lý do đảo: ${s}`))}return n}function he(e={}){let t=Array.isArray(e?.events)?e.events:[],n=[],r=new Map;t.forEach((e,t)=>{let i=x(e?.action_key);if(!ae(i)){n.push({kind:`main`,index:t,event:e});return}let a=oe(e),o=r.get(a);if(o||(o={kind:`transfer`,index:t,id:a,request:null,result:null},r.set(a,o),n.push(o)),M(i)===`requested`){(!o.request||w(e)<w(o.request))&&(o.request=e);return}(!o.result||w(e)>=w(o.result))&&(o.result=e)}),n.sort((e,t)=>e.index-t.index);let i=new Set;return{title:`Lịch sử đơn hàng`,rows:n.flatMap(e=>{if(e.kind===`transfer`)return de(e);let t=me(e.event),n=t[0],r=[n?.label,n?.value,...t.slice(1).map(e=>e?.value)].join(`|`);return i.has(r)?[]:(i.add(r),t)}),emptyText:`Chưa có lịch sử đơn hàng.`}}async function ge(e){let t=String(e??``);if(!t)return!1;try{if(navigator.clipboard&&window.isSecureContext)return await navigator.clipboard.writeText(t),!0}catch{}let n=document.createElement(`textarea`);n.value=t,n.setAttribute(`readonly`,``),n.style.position=`fixed`,n.style.left=`-9999px`,n.style.top=`0`,document.body.appendChild(n),n.focus(),n.select(),n.setSelectionRange(0,n.value.length);let r=!1;try{r=document.execCommand(`copy`)}finally{n.remove()}return r}function N(e,t=`record-card__icon`){return`
    <span
      class="${n(t)}"
      aria-hidden="true"
    >
      ${e||``}
    </span>
  `}function _e(e={}){return Object.entries(e).map(([e,t])=>` data-${n(e)}="${n(String(t??``))}"`).join(``)}function ve(e){return e?.text?`
    <div class="record-card__info-line">
      ${N(e.icon)}
      <span>${t(String(e.text))}</span>
    </div>
  `:``}function ye(e){return e?`
    <div class="${n([`record-card__row`,e?.tone===`warning`?`is-warning`:``].filter(Boolean).join(` `))}">
      <span class="record-card__row-label">
        ${N(e.icon||`<span class="record-card__dot"></span>`)}
        <span>${t(String(e.label??``))}</span>
      </span>

      <strong>
        ${t(String(e.value??``))}
      </strong>
    </div>
  `:``}function be(e){if(!e?.href||!e?.icon)return``;let t=e?.external?` target="_blank" rel="noreferrer"`:``;return`
    <a
      class="record-card__tool"
      data-record-tool
      href="${n(e.href)}"
      aria-label="${n(e?.label||`Công cụ`)}"
      title="${n(e?.label||`Công cụ`)}"
      ${t}
    >
      ${e.icon}
    </a>
  `}function xe(e){return e?.label?`
    <button
      type="button"
      class="${n([`record-card__action`,e?.className||``].join(` `).trim())}"
      ${_e(e?.data)}
    >
      ${t(String(e.label))}
    </button>
  `:``}function Se({id:e,title:r,titleIcon:i,typeLabel:a,typeIcon:o,typeKey:s,status:c,statusKey:l,subtitle:u,subtitleIcon:d,timestamp:f,lines:ee=[],rows:p=[],tools:m=[],actions:h=[],ariaLabel:g=``}={}){let _=String(e??``),v=r||`Bản ghi`,y=[...m.map(be),...h.map(xe)].join(``);return`
    <div class="record-card-shell">
      <article
      class="record-card"
      data-record-card="${n(_)}"
      tabindex="0"
      role="button"
      aria-label="${n(g||v)}"
    >
      <header class="record-card__head">
        <div class="record-card__heading">
          <div class="record-card__title">
            ${N(i,`record-card__title-icon`)}

            <strong>
              ${t(String(v))}
            </strong>
          </div>

          ${a?`
                <span
                  class="record-card__type"
                  data-record-type="${n(String(s??``))}"
                >
                  ${N(o,`record-card__type-icon`)}
                  <span>
                    ${t(String(a))}
                  </span>
                </span>
              `:``}
        </div>

        <span
          class="record-card__status"
          data-record-status="${n(String(l??``))}"
        >
          ${t(String(c??``))}
        </span>
      </header>

      <div class="record-card__meta">
        <div class="record-card__meta-main">
          ${u?`
                <div class="record-card__customer">
                  ${N(d)}
                  <span>
                    ${t(String(u))}
                  </span>
                </div>
              `:``}

          ${ee.map(ve).join(``)}
        </div>

        ${f?`
              <time class="record-card__time">
                ${t(String(f))}
              </time>
            `:``}
      </div>

      ${p.length?`
            <div class="record-card__rows">
              ${p.map(ye).join(``)}
            </div>
          `:``}

      </article>

      ${y?`
            <footer
              class="record-card__footer"
              data-record-action-zone
            >
              ${y}
            </footer>
          `:``}
    </div>
  `}function Ce(e){let t=String(e??``).trim();return/^data-[a-z0-9-]+$/.test(t)?t:`data-transfer-pending-notice`}function we({count:e=0,dataAttribute:t=`data-transfer-pending-notice`,showWhenEmpty:n=!1}={}){let r=Math.max(0,Number(e)||0);return!r&&n!==!0?``:`
    <button
      type="button"
      class="giao-hang-transfer-notice"
      ${Ce(t)}
    >
      ĐƠN CHỜ XÁC NHẬN${r>0?` `+r:``}
    </button>
  `}function Te({requests:e=[],error:n=``,renderCard:r}={}){let i=Array.isArray(e)?e:[],a=typeof r==`function`?r:()=>``;return`
    <section class="giao-hang-page">
      ${n?`
            <div class="giao-hang-message is-error">
              <span>${t(n)}</span>
            </div>
          `:``}

      <div class="giao-hang-list">
        ${i.length?i.map(a).join(``):`
              <div class="giao-hang-empty">
                <strong>
                  Không còn đơn chờ xác nhận
                </strong>
              </div>
            `}
      </div>
    </section>
  `}function Ee(e){return(Array.isArray(e)?e:[]).map(e=>typeof e==`string`?{url:e,title:``}:{url:e?.url||e?.src||e?.previewUrl||``,title:e?.title||e?.name||``}).filter(e=>String(e.url??``).trim())}function De({images:e=[],index:r=0,title:i=`Xem ảnh`}={}){let a=Ee(e);if(!a.length)return`
      <section class="image-viewer">
        <button
          type="button"
          class="image-viewer__close"
          data-image-viewer-close
          aria-label="Đóng"
          title="Đóng"
        >
          ×
        </button>

        <div class="image-viewer__empty">
          Không có ảnh để hiển thị.
        </div>
      </section>
    `;let o=Math.max(0,Math.min(Number(r)||0,a.length-1)),s=a[o];return`
    <section
      class="image-viewer"
      aria-label="${n(i)}"
    >
      <button
        type="button"
        class="image-viewer__close"
        data-image-viewer-close
        aria-label="Đóng"
        title="Đóng"
      >
        ×
      </button>

      <div class="image-viewer__stage">
        ${a.length>1?`
                <button
                  type="button"
                  class="image-viewer__nav is-prev"
                  data-image-viewer-prev
                  aria-label="Ảnh trước"
                  title="Ảnh trước"
                >
                  ‹
                </button>
              `:``}

        <img
          class="image-viewer__image"
          src="${n(s.url)}"
          alt="${n(s.title||`${i} ${o+1}`)}"
        >

        ${a.length>1?`
                <button
                  type="button"
                  class="image-viewer__nav is-next"
                  data-image-viewer-next
                  aria-label="Ảnh sau"
                  title="Ảnh sau"
                >
                  ›
                </button>
              `:``}
      </div>

      ${a.length>1?`
              <div class="image-viewer__counter">
                ${t(`${o+1}/${a.length}`)}
              </div>
            `:``}
    </section>
  `}function Oe(e){let t=String(e?.id??``);return`
    <article class="photo-picker__tile photo-picker__preview">
      <img
        src="${n(e?.previewUrl||e?.url||``)}"
        alt="${n(e?.name||`Ảnh đã chọn`)}"
      >

      <button
        type="button"
        class="photo-picker__remove"
        data-photo-picker-remove
        data-photo-id="${n(t)}"
        aria-label="Xóa ảnh"
        title="Xóa ảnh"
      >
        ×
      </button>
    </article>
  `}function ke({photos:e=[],maxPhotos:r=5,addLabel:i=`Thêm ảnh`,addTitle:a=`Thêm ảnh`}={}){let o=Array.isArray(e)?e:[],s=Math.max(1,Number(r)||1),c=o.length<s;return`
    <div class="photo-picker">
      ${o.map(Oe).join(``)}

      ${c?`
              <label
                class="photo-picker__tile photo-picker__add"
                title="${n(a)}"
              >
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  data-photo-picker-input
                  hidden
                >

                <span
                  class="photo-picker__add-icon"
                  aria-hidden="true"
                >+</span>

                <span class="photo-picker__add-label">
                  ${t(i)}
                </span>
              </label>
            `:``}
    </div>
  `}function P(e){return String(e??``).trim()}function Ae(e,{creatorId:t=``,assigneeId:n=``}={}){let r=P(e?.id_nhan_vien),i=e?.is_creator===!0||r&&r===P(t),a=e?.is_assignee===!0||r&&r===P(n);if(i)return`Người bán`;if(a)return`Người giao`;let o=P(e?.role_label);return o===`Người bán`||o===`Người giao`?o:``}function je(e,t=``){let n=P(e?.ten_nhan_vien)||P(e?.ten_dang_nhap)||`Nhân viên`,r=P(e?.so_dien_thoai);return[P(t),n,r].filter(Boolean).join(` - `)}function Me({employees:e=[],currentEmployeeId:r=``,creatorId:i=``,assigneeId:a=``,selectedId:o=``}={}){let s=P(r),c=P(o);return(Array.isArray(e)?e:[]).filter(e=>{let t=P(e?.id_nhan_vien),n=P(e?.trang_thai).toUpperCase();return t&&t!==s&&n===`ACTIVE`}).map(e=>{let r=P(e?.id_nhan_vien),o=Ae(e,{creatorId:i,assigneeId:a});return`
        <option
          value="${n(r)}"
          ${r===c?`selected`:``}
        >
          ${t(je(e,o))}
        </option>
      `}).join(``)}function F(e){let t=Number.parseInt(String(e??`0`),10);return Number.isFinite(t)?Math.max(0,t):0}function I(e){return String(e?.id_kiem_hang_san_pham??``)}function L(e){return e?.name||`Sản phẩm`}function R(e){return F(e?.required_quantity)}function z(e){return e?.effective_remaining_quantity!==null&&e?.effective_remaining_quantity!==void 0?F(e.effective_remaining_quantity):Math.max(R(e)-F(e?.scanned_quantity)-F(e?.skipped_quantity),0)}function B(e){return Math.max(R(e)-z(e),0)}function Ne(e){return e?.final_skipped_quantity!==null&&e?.final_skipped_quantity!==void 0?F(e.final_skipped_quantity):F(e?.skipped_quantity)}function Pe(e){return Array.isArray(e?.effective_scans)?e.effective_scans:Array.isArray(e?.scans)?e.scans:[]}function Fe(e){return[`delivery-check__desktop-button`,e?.variant===`primary`?`is-primary`:`is-secondary`].join(` `)}function V(e=[]){let r=Array.isArray(e)?e.filter(e=>e?.key&&e?.label):[];return r.length?`
    <div class="delivery-check__desktop-actions">
      ${r.map(e=>`
            <button
              type="button"
              class="${Fe(e)}"
              data-check-command="${n(e.key)}"
              ${e.disabled?`disabled`:``}
            >
              ${t(e.label)}
            </button>
          `).join(``)}
    </div>
  `:``}function H(e){return e?`
    <div
      class="delivery-check__message is-error"
      role="alert"
    >
      ${t(e)}
    </div>
  `:``}function Ie(e=[]){return e.reduce((e,t)=>(e.required+=R(t),e.covered+=Math.min(B(t),R(t)),e),{required:0,covered:0})}function Le(e){return`
    <button
      type="button"
      class="delivery-check__product-row"
      data-check-open-line="${n(I(e))}"
    >
      <span class="delivery-check__product-main">
        <strong>
          ${t(L(e))}
        </strong>

</span>

      <span class="delivery-check__product-progress">
        ${B(e)}/${R(e)}
      </span>

      <span
        class="delivery-check__product-arrow"
        aria-hidden="true"
      >
        ›
      </span>
    </button>
  `}function Re({orderCode:e=``,products:n=[],error:r=``,desktopActions:i=[]}={}){let a=Array.isArray(n)?n:[],o=Ie(a),s=o.required>0?Math.min(100,Math.round(o.covered/o.required*100)):0;return`
    <section class="delivery-check">
      ${H(r)}

      <section class="delivery-check__summary">
        <div class="delivery-check__summary-head">
          <strong>
            ${t(e||`Đơn giao hàng`)}
          </strong>

          <span>
            ${o.covered}/${o.required}
          </span>
        </div>

        <progress
          class="delivery-check__progress"
          max="${Math.max(o.required,1)}"
          value="${o.covered}"
          aria-label="Tiến độ kiểm hàng"
        ></progress>

        <div class="delivery-check__percent">
          ${s}%
        </div>
      </section>

      <section class="delivery-check__section">
        <h3 class="delivery-check__section-title">
          Danh sách sản phẩm
        </h3>

        <div class="delivery-check__product-list">
          ${a.length?a.map(Le).join(``):`
                  <div class="delivery-check__empty">
                    Chưa có sản phẩm cần kiểm.
                  </div>
                `}
        </div>
      </section>

      ${V(i)}
    </section>
  `}function ze(e,r,i){let a=String(e?.id_phieu_quet_ma??``),o=String(e?.draft_key??``),s=String(e?.scan_code??``)||`Chưa có mã`,c=e?.is_draft===!0,l=e?.is_replacement===!0;return`
    <div class="delivery-check__scan-row">
      <span class="delivery-check__scan-code">
        ${t(s)}

        ${c?`<small>Bản nháp</small>`:l?`<small>Đã sửa trong bản nháp</small>`:``}
      </span>

      ${r&&(c||i)?`
              <span class="delivery-check__inline-actions">
                ${!c&&a?`
                        <button
                          type="button"
                          class="delivery-check__text-button"
                          data-check-edit-server-scan="${n(a)}"
                        >
                          Sửa
                        </button>
                      `:``}

                <button
                  type="button"
                  class="delivery-check__icon-button"
                  aria-label="Xóa mã kiểm"
                  ${c?`data-check-remove-draft-scan="${n(o)}"`:`data-check-remove-server-scan="${n(a)}"`}
                >
                  ×
                </button>
              </span>
            `:``}
    </div>
  `}function Be(e,t,n){let r=Pe(e);return`
    <section class="delivery-check__section">
      <h3 class="delivery-check__section-title">
        Đã quét
      </h3>

      ${r.length?`
              <div class="delivery-check__scan-list">
                ${r.map(e=>ze(e,t,n)).join(``)}
              </div>
            `:`
              <div class="delivery-check__empty">
                Chưa có mã
              </div>
            `}
    </section>
  `}function Ve(e,t){let n=Ne(e);return n<=0?``:`
    <section class="delivery-check__section">
      <h3 class="delivery-check__section-title">
        Bỏ qua
      </h3>

      <div class="delivery-check__skip-row">
        <span>
          ${n} sản phẩm
        </span>

        ${t?`
                <button
                  type="button"
                  class="delivery-check__icon-button"
                  aria-label="Xóa số lượng bỏ qua"
                  data-check-clear-skip
                >
                  ×
                </button>
              `:``}
      </div>
    </section>
  `}function He({product:e=null,editable:n=!1,editCommitted:r=!1,error:i=``,desktopActions:a=[]}={}){let o=R(e),s=B(e),c=z(e);return`
    <section class="delivery-check">
      ${H(i)}

      <section class="delivery-check__line-title">
        <strong>
          ${t(L(e))}
        </strong>

<span>
          ${s}/${o}
        </span>
      </section>

      ${Be(e,n,r)}
      ${Ve(e,n)}

      <section class="delivery-check__section">
        <h3 class="delivery-check__section-title">
          ${c>0?`Còn lại`:`Trạng thái`}
        </h3>

        <div class="delivery-check__line-value">
          ${c>0?`Còn ${c} sản phẩm cần xử lý`:`Đã xử lý đủ sản phẩm này`}
        </div>
      </section>

      ${e?.has_draft_changes?`
              <div class="delivery-check__note">
                Các thay đổi mới chỉ nằm trong bản nháp.
                Dữ liệu chỉ được ghi khi bấm xác nhận.
              </div>
            `:``}

      ${V(a)}
    </section>
  `}function Ue(e){switch(e){case`qr`:return`QR`;case`barcode`:return`Mã vạch`;default:return`Tự động`}}function We({product:e=null,scanMode:r=`auto`,manualCode:i=``,pendingCode:a=``,error:o=``,desktopActions:s=[]}={}){let c=String(a??``).trim();return`
    <section class="delivery-check delivery-check--scan">
      ${H(o)}

      <section class="delivery-check__scan-product">
        <strong>
          ${t(L(e))}
        </strong>

<span>
          Còn lại:
          ${z(e)}
        </span>
      </section>

      <nav
        class="delivery-check__scan-tabs"
        aria-label="Chế độ quét"
      >
        ${[[`auto`,`Tự động`],[`qr`,`QR`],[`barcode`,`Mã vạch`]].map(([e,t])=>`
              <button
                type="button"
                class="${r===e?`is-active`:``}"
                data-check-scan-mode="${e}"
              >
                ${t}
              </button>
            `).join(``)}
      </nav>

      ${c?`
              <section class="delivery-check__pending">
                <span>
                  Mã chờ xác nhận
                </span>

                <strong>
                  ${t(c)}
                </strong>
              </section>
            `:``}

      <section class="delivery-check__scan-panel">
        <div class="delivery-check__scan-frame">
          <span></span>
        </div>

        <p>
          ${c?`
                  Kiểm tra lại mã rồi bấm
                  <strong>Xác nhận</strong>.
                `:`
                  Chế độ ${t(Ue(r))}.
                  Đưa mã vào khung hoặc nhập thủ công.
                `}
        </p>
      </section>

      ${c?``:`
              <form
                class="delivery-check__manual-form"
                data-check-manual-form
              >
                <input
                  type="text"
                  name="manualCode"
                  value="${n(i)}"
                  autocomplete="off"
                  inputmode="text"
                  placeholder="Nhập mã thủ công"
                  aria-label="Nhập mã thủ công"
                >

                <button type="submit">
                  Tiếp tục
                </button>
              </form>
            `}

      ${V(s)}
    </section>
  `}function Ge({products:e=[],error:r=``,desktopActions:i=[]}={}){let a=Array.isArray(e)?e:[];return`
    <section class="delivery-check delivery-check--review">
      ${H(r)}

      <div class="delivery-check__review-list">
        ${a.length?a.map(e=>{let r=R(e),i=Math.min(B(e),r);return`
                    <button
                      type="button"
                      class="delivery-check__review-row"
                      data-check-review-line="${n(I(e))}"
                    >
                      <span class="delivery-check__review-main">
                        <strong>
                          ${t(L(e))}
                        </strong>

                        <small>
                          Đã kiểm ${i}/${r}
                        </small>
                      </span>

                      <span
                        class="delivery-check__review-arrow"
                        aria-hidden="true"
                      >
                        ›
                      </span>
                    </button>
                  `}).join(``):`
                <div class="delivery-check__message">
                  Chưa có dữ liệu kiểm hàng.
                </div>
              `}
      </div>

      ${V(i)}
    </section>
  `}function Ke(e){let t=e?.actor_name||`Nhân viên`,n=e?.model||e?.product_name||`sản phẩm`;switch(e?.action_key){case`CHECK_SCAN_ADDED`:return`${t} đã quét mã ${n}: ${e?.scan_code||``}`;case`CHECK_SCAN_REMOVED`:return`${t} đã xóa mã ${n}: ${e?.scan_code||``}`;case`CHECK_SCAN_REPLACED`:return`${t} đã cập nhật mã ${n}: ${e?.old_scan_code||``} → ${e?.new_scan_code||``}`;case`CHECK_SKIP_ADDED`:return`${t} đã bỏ qua kiểm ${n}: ${e?.new_quantity??0}`;case`CHECK_SKIP_REMOVED`:return`${t} đã xóa bỏ qua ${n}: ${e?.old_quantity??0}`;case`CHECK_SKIP_UPDATED`:return`${t} đã cập nhật bỏ qua ${n}: ${e?.old_quantity??0} → ${e?.new_quantity??0}`;case`CHECK_CONFIRMED`:return`${t} đã xác nhận kiểm hàng`;case`CHECK_EDIT_CONFIRMED`:return`${t} đã xác nhận sửa kiểm`;default:return`${t} đã cập nhật kiểm hàng`}}function qe({events:e=[],error:n=``,desktopActions:r=[]}={}){let i=Array.isArray(e)?e:[];return`
    <section class="delivery-check delivery-check--history">
      ${H(n)}

      <div class="delivery-check__history-list">
        ${i.length?i.map(e=>`
                    <article class="delivery-check__history-row">
                      <div class="delivery-check__history-text">
                        ${t(Ke(e))}
                      </div>

                      <time class="delivery-check__history-time">
                        ${t(e?.time_text||``)}
                      </time>
                    </article>
                  `).join(``):`
                <div class="delivery-check__message">
                  Chưa có lịch sử kiểm hàng.
                </div>
              `}
      </div>

      ${V(r)}
    </section>
  `}var Je=Object.freeze({GIAO_HANG:Object.freeze({label:`Giao hàng`,icon:o.delivery}),LAP_DAT:Object.freeze({label:`Lắp đặt`,icon:o.install}),DICH_VU_HAU_MAI:Object.freeze({label:`Dịch vụ hậu mãi`,icon:o.order})});function U(...e){for(let t of e){let e=String(t??``).trim();if(e)return e}return``}function Ye(e){let t=U(e?.order_type,e?.loai_don,e?.order?.loai_don).toUpperCase(),n=Je[t],r=U(e?.order_type_label,e?.loai_don_label,e?.order?.loai_don_label,n?.label);return r?{key:t,label:r,icon:n?.icon??o.order}:null}function Xe({search:e=null,statuses:t=null,tabKey:n=null,limit:i=100}={}){return r(`rpc_get_giao_hang_worklist`,{p_search:e||null,p_status:Array.isArray(t)&&t.length?t:null,p_cursor_updated_at:null,p_cursor_id:null,p_limit:i,p_tab_key:n||null},`Không tải được danh sách Giao hàng`)}function Ze(e){return r(`rpc_get_giao_hang_detail`,{p_id_phieu_giao_hang:e},`Không tải được chi tiết Giao hàng`)}function Qe(e){if(!Array.isArray(e))throw TypeError(`Danh sách id phiếu giao hàng không hợp lệ.`);let t=[...new Set(e.map(e=>String(e??``).trim()).filter(Boolean))];if(!t.length)throw TypeError(`Thiếu id phiếu giao hàng cần tải.`);if(t.length>100)throw TypeError(`Chỉ được tải tối đa 100 phiếu giao hàng.`);return r(`rpc_get_giao_hang_cards_by_ids`,{p_entity_ids:t},`Không tải được thẻ Giao hàng`)}function $e({deliveryId:e,rowVersion:t,requestKey:n}){if(!e)throw TypeError(`Thiếu id phiếu giao hàng để nhận đơn.`);if(t==null)throw TypeError(`Thiếu row version của phiếu giao hàng.`);if(!n)throw TypeError(`Thiếu request key của thao tác nhận đơn.`);return r(`rpc_nhan_don_giao_hang`,{p_request_key:n,p_payload:{id_phieu_giao_hang:e,expected_row_version:t}},`Không nhận được đơn giao hàng`)}function W(e){if(!e)throw TypeError(`Thiếu id phiếu giao hàng.`)}function G(e){if(e==null)throw TypeError(`Thiếu row version của phiếu giao hàng.`)}function K(e){if(!e)throw TypeError(`Thiếu request key của thao tác giao hàng.`)}function et(e){return W(e),r(`rpc_get_giao_hang_check_context`,{p_id_phieu_giao_hang:e},`Không tải được dữ liệu kiểm hàng`)}function tt(e){return W(e),r(`rpc_get_giao_hang_check_history`,{p_id_phieu_giao_hang:e},`Không tải được lịch sử kiểm hàng`)}function q(e){return Array.isArray(e)?e:[]}function nt({deliveryId:e,rowVersion:t,scanAdditions:n=[],skipQuantities:i=[],requestKey:a}){return W(e),G(t),K(a),r(`rpc_xac_nhan_kiem_hang_giao_hang`,{p_request_key:a,p_payload:{id_phieu_giao_hang:e,expected_row_version:t,scan_additions:q(n),skip_quantities:q(i)}},`Không xác nhận được kiểm hàng`)}function rt({deliveryId:e,rowVersion:t,scanAdditions:n=[],scanRemovals:i=[],scanReplacements:a=[],skipQuantities:o=[],requestKey:s}){return W(e),G(t),K(s),r(`rpc_xac_nhan_sua_kiem_hang_giao_hang`,{p_request_key:s,p_payload:{id_phieu_giao_hang:e,expected_row_version:t,scan_additions:q(n),scan_removals:q(i),scan_replacements:q(a),skip_quantities:q(o)}},`Không xác nhận được sửa kiểm hàng`)}function it({deliveryId:e,rowVersion:t,requestKey:n}){return W(e),G(t),K(n),r(`rpc_bat_dau_van_chuyen`,{p_request_key:n,p_payload:{id_phieu_giao_hang:e,expected_row_version:t}},`Không bắt đầu được vận chuyển`)}function at({deliveryId:e,rowVersion:t,rescheduleAt:n,reason:i,requestKey:a}){if(W(e),G(t),K(a),!n)throw TypeError(`Thiếu thời gian hẹn lại.`);if(!String(i??``).trim())throw TypeError(`Thiếu lý do hẹn lại.`);return r(`rpc_hen_lai_giao_hang`,{p_request_key:a,p_payload:{id_phieu_giao_hang:e,expected_row_version:t,thoi_gian_hen_lai:n,ly_do:String(i).trim()}},`Không hẹn lại được đơn giao hàng`)}function ot({deliveryId:e,rowVersion:t,storagePaths:n,note:i=``,requestKey:a}){if(W(e),G(t),K(a),!Array.isArray(n)||!n.length)throw TypeError(`Cần ít nhất một ảnh hoàn thành.`);return r(`rpc_hoan_tat_giao_hang`,{p_request_key:a,p_payload:{id_phieu_giao_hang:e,expected_row_version:t,storage_paths:n,ghi_chu_hoan_thanh:String(i??``).trim()||null}},`Không hoàn thành được đơn giao hàng`)}function st({deliveryId:e,rowVersion:t,receiverId:n,note:i=``,requestKey:a}){if(W(e),G(t),K(a),!n)throw TypeError(`Vui lòng chọn nhân viên nhận đơn.`);return r(`rpc_tao_chuyen_nguoi_nhan_giao_hang`,{p_request_key:a,p_payload:{id_phieu_giao_hang:e,expected_row_version:t,id_nguoi_nhan:n,ghi_chu:String(i??``).trim()||null}},`Không chuyển được đơn giao hàng`)}function ct({deliveryId:e,rowVersion:t,reason:n,storagePaths:i,requestKey:a}){W(e),G(t),K(a);let o=String(n??``).trim();if(!o)throw TypeError(`Vui lòng nhập lý do hủy đơn.`);if(!Array.isArray(i)||!i.length)throw TypeError(`Vui lòng chọn ít nhất 1 ảnh hủy đơn.`);if(i.length>5)throw TypeError(`Chỉ được chọn tối đa 5 ảnh hủy đơn.`);return r(`rpc_huy_giao_hang`,{p_request_key:a,p_payload:{id_phieu_giao_hang:e,expected_row_version:t,ly_do:o,storage_paths:i}},`Không hủy được đơn giao hàng`)}function lt({deliveryId:e,rowVersion:t,requestKey:n}){return W(e),G(t),K(n),r(`rpc_xac_nhan_hoan_kho_giao_hang`,{p_request_key:n,p_payload:{id_phieu_giao_hang:e,expected_row_version:t}},`Không xác nhận được hàng đã về kho`)}async function ut(e){let t=String(e??``).trim();if(!t)throw TypeError(`Thiếu phiếu giao hàng cần chuyển.`);return r(`rpc_get_giao_hang_transfer_candidates`,{p_id_phieu_giao_hang:t},`Không tải được danh sách nhân viên nhận chuyển`)}function dt(){return r(`rpc_get_giao_hang_transfer_requests`,{},`Không tải được yêu cầu chuyển đơn`)}function ft({transferId:e,rowVersion:t,accept:n,requestKey:i}){return G(t),K(i),r(`rpc_xac_nhan_chuyen_nguoi_nhan_giao_hang`,{p_request_key:i,p_payload:{id_chuyen_nguoi_nhan:e,expected_row_version:t,accept:n===!0}},n===!0?`Không xác nhận được chuyển đơn`:`Không từ chối được chuyển đơn`)}function pt({transferId:e,rowVersion:t,requestKey:n}){return G(t),K(n),r(`rpc_xac_nhan_chuyen_nguoi_nhan_giao_hang`,{p_request_key:n,p_payload:{id_chuyen_nguoi_nhan:e,expected_row_version:t,cancel:!0}},`Không hủy được yêu cầu chuyển đơn`)}function mt(e){return`${String(e?.name||`anh-hoan-thanh`).replace(/\.[^.]+$/,``)||`anh-hoan-thanh`}.webp`}function ht(e,t,n){return new Promise((r,i)=>{e.toBlob(e=>{if(e){r(e);return}i(Error(`Không nén được ảnh đã chọn.`))},t,n)})}async function gt(e){if(typeof createImageBitmap==`function`)return createImageBitmap(e);let t=URL.createObjectURL(e);try{let e=new Image;return await new Promise((n,r)=>{e.onload=n,e.onerror=()=>{r(Error(`Không đọc được ảnh đã chọn.`))},e.src=t}),e}finally{URL.revokeObjectURL(t)}}async function J(e,{maxDimension:t=1600,quality:n=.8}={}){if(!(e instanceof File)||!String(e.type).startsWith(`image/`))throw TypeError(`Tệp đã chọn không phải hình ảnh.`);let r=await gt(e);try{let i=Number(r.width||r.naturalWidth),a=Number(r.height||r.naturalHeight);if(!i||!a)throw Error(`Ảnh không có kích thước hợp lệ.`);let o=Math.min(1,t/Math.max(i,a)),s=Math.max(1,Math.round(i*o)),c=Math.max(1,Math.round(a*o)),l=document.createElement(`canvas`);l.width=s,l.height=c;let u=l.getContext(`2d`);if(!u)throw Error(`Trình duyệt không hỗ trợ nén ảnh.`);u.drawImage(r,0,0,s,c);let d=await ht(l,`image/webp`,n);return new File([d],mt(e),{type:`image/webp`,lastModified:Date.now()})}finally{typeof r.close==`function`&&r.close()}}var Y=`giao-hang-completion`,X=5;function _t(e){let t=String(e??``).trim();if(!t)throw TypeError(`Thiếu id phiếu giao hàng.`);return t}function vt(){return globalThis.crypto?.randomUUID?globalThis.crypto.randomUUID():`${Date.now()}-`+Math.random().toString(16).slice(2)}async function yt(){let{data:t,error:n}=await e.auth.getUser();if(n)throw n;let r=String(t?.user?.id??``);if(!r)throw Error(`Phiên đăng nhập không hợp lệ.`);return r}async function Z(t){let n=Array.isArray(t)?t.filter(Boolean):[];if(!n.length)return;let{error:r}=await e.storage.from(Y).remove(n);if(r)throw r}async function bt({deliveryId:t,files:n}){let r=_t(t),i=Array.isArray(n)?n:[];if(!i.length)throw TypeError(`Cần ít nhất một ảnh hoàn thành.`);if(i.length>X)throw TypeError(`Chỉ được chọn tối đa ${X} ảnh.`);let a=await yt(),o=[];try{for(let t of i){let n=await J(t),i=[a,r,`${vt()}.webp`].join(`/`),{error:s}=await e.storage.from(Y).upload(i,n,{contentType:n.type,cacheControl:`3600`,upsert:!1});if(s)throw s;o.push(i)}return o}catch(e){throw o.length&&await Z(o).catch(()=>{}),e}}async function xt(t){let n=[...new Set((Array.isArray(t)?t:[]).map(e=>String(e??``).trim()).filter(Boolean))],r=[];for(let t of n){let{data:n,error:i}=await e.storage.from(Y).createSignedUrl(t,600);if(i)throw i;n?.signedUrl&&r.push({storagePath:t,url:n.signedUrl})}return r}var St=`Khách hàng mặc định của module Tạo đơn`;function Ct(e){return e!=null&&String(e).trim()!==``}function Q(e){return Ct(e)?String(e).trim():``}function $(e){return String(e??``).normalize(`NFD`).replace(/[\u0300-\u036f]/g,``).toLocaleLowerCase(`vi-VN`).replace(/\s+/g,` `).trim()}function wt({name:e,note:t}){let n=Q(t);if(!n)return``;let r=$(n),i=$(St),a=$(e);return r===i||a===`khach le`&&r.includes(`khach hang mac dinh`)?``:n}function Tt({customer:e={},note:t=null,fallbackName:n=`Khách lẻ`}={}){let r=Q(e?.name)||Q(e?.ten_khach_hang_snapshot)||n,i=Q(e?.phone)||Q(e?.sdt_khach_hang_snapshot),a=Q(e?.address)||Q(e?.dia_chi_khach_hang_snapshot),o=wt({name:r,note:t??e?.note});return{title:`Khách hàng`,rows:[{value:r,valueOnly:!0,copyValue:r},i?{value:i,valueOnly:!0,copyValue:i}:null,a?{value:a,valueOnly:!0,copyValue:a,multiline:!0}:null,o?{value:o,valueOnly:!0,multiline:!0}:null].filter(e=>e&&Ct(e.value))}}function Et(e){let t=Number(e);return Number.isFinite(t)?Math.max(0,Math.trunc(t)):0}function Dt(e=null){let t=Et(e?.tong_so_luong_can_kiem??e?.required),n=Math.min(t,Et(e?.tong_so_luong_con_lai??e?.remaining));return Object.freeze({required:t,remaining:n,checked:Math.max(0,t-n)})}function Ot({check:e=null,actionKey:t=``,title:n=`Kiểm hàng`}={}){if(!e)return null;let r=Dt(e);return{title:n,actionKey:t||void 0,rows:[{label:`Đã kiểm`,value:`${r.checked}/${r.required}`,trailing:t?`›`:``}]}}export{We as A,te as B,nt as C,He as D,qe as E,Te as F,o as H,Se as I,ge as L,ke as M,De as N,Re as O,we as P,he as R,lt as S,Ye as T,a as U,h as V,pt as _,bt as a,st as b,Qe as c,Ze as d,ut as f,ot as g,at as h,Z as i,Me as j,Ge as k,et as l,Xe as m,Tt as n,J as o,dt as p,xt as r,it as s,Ot as t,tt as u,ct as v,rt as w,ft as x,$e as y,_ as z};