import{o as e}from"./realtimeImpactRegistry-uvlr93CK.js";import{a as t,c as n,i as r,o as i,s as a}from"./screenStack-BTwISuHL.js";import{n as o}from"./actionLock-BTZKYVnA.js";function s(e){let t=String(e??``).trim();if(!t)throw TypeError(`Thiếu ID đơn hàng để tải lịch sử.`);return i(`rpc_get_don_hang_history`,{p_id_don_hang:t},`Không tải được lịch sử đơn hàng`)}var c=Object.freeze({order:`
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
  `});function l(e){return String(e??``)}function u(e){let t=l(e).trim();return t?`
    <button
      type="button"
      class="record-detail__copy"
      data-copy-value="${a(t)}"
      aria-label="Sao chép"
      title="Sao chép"
    >
      ${c.copy}
    </button>
  `:``}function d(e){let t=l(e).trim();return t?`
    <span
      class="record-detail__trailing"
      aria-hidden="true"
    >
      ${n(t)}
    </span>
  `:``}function f(e){return[`record-detail__row`,e?.valueOnly?`is-value-only`:``,e?.multiline?`is-multiline`:``,e?.emphasis?`is-emphasis`:``,e?.singleLine?`is-single-line`:``,e?.nested?`is-nested`:``,e?.nestedValueOnly?`is-nested-value`:``,e?.layout===`spread`?`is-spread`:``,e?.actionKey?`is-action`:``].filter(Boolean).join(` `)}function p(e){let t=l(e?.actionKey).trim(),r=t?`button`:`div`,i=t?`
          type="button"
          data-record-detail-action="${a(t)}"
          ${e?.actionValue===void 0?``:`
                  data-record-detail-value="${a(e.actionValue)}"
                `}
        `:``;return`
    <${r}
      class="${f(e)}"
      ${i}
    >
      ${e?.valueOnly?``:`
              <span class="record-detail__label">
                ${n(e?.label??``)}
              </span>
            `}

      <span class="record-detail__value-wrap">
        <strong class="record-detail__value">
          ${n(e?.value??``)}
        </strong>

        ${u(e?.copyValue)}
        ${d(e?.trailing)}
      </span>
    </${r}>
  `}function m(e){return[`record-detail__item`,e?.soft?`is-soft`:``,e?.stacked?`is-stacked`:``,e?.variant===`product`?`is-product`:``,e?.actionKey?`is-action`:``].filter(Boolean).join(` `)}function h(e){let t=l(e?.actionKey).trim(),r=t?`button`:`div`,i=t?`
          type="button"
          data-record-detail-action="${a(t)}"
          ${e?.actionValue===void 0?``:`
                  data-record-detail-value="${a(e.actionValue)}"
                `}
        `:``;return`
    <${r}
      class="${m(e)}"
      ${i}
    >
      <span class="record-detail__item-main">
        ${e?.title?`
                <strong class="record-detail__item-title">
                  ${n(e.title)}
                </strong>
              `:``}

        ${e?.subtitle?`
                <span class="record-detail__item-subtitle">
                  ${n(e.subtitle)}
                </span>
              `:``}
      </span>

      ${e?.value!==void 0&&e?.value!==null&&l(e.value).trim()!==``?`
              <strong class="record-detail__item-value">
                ${n(e.value)}
              </strong>
            `:``}

      ${d(e?.trailing)}
    </${r}>
  `}function g(e){return[`record-detail__block`,e?.actionKey?`is-action`:``].filter(Boolean).join(` `)}function _(e){let t=Array.isArray(e?.rows)?e.rows:[],r=Array.isArray(e?.items)?e.items:[],i=l(e?.actionKey).trim(),o=i?`
          tabindex="0"
          role="button"
          data-record-detail-action="${a(i)}"
          aria-label="${a(`Mở ${e?.title||`chi tiết`}`)}"
        `:``;return`
    <section
      class="${g(e)}"
      ${o}
    >
      ${e?.title?`
              <h3 class="record-detail__title">
                ${n(e.title)}
              </h3>
            `:``}

      ${t.length?`
              <div class="record-detail__rows">
                ${t.map(p).join(``)}
              </div>
            `:``}

      ${r.length?`
              <div class="record-detail__items">
                ${r.map(h).join(``)}
              </div>
            `:``}
    </section>
  `}function v({blocks:e=[],emptyText:t=`Chưa có dữ liệu.`}={}){let r=Array.isArray(e)?e.filter(Boolean):[];return r.length?`
    <div class="record-detail">
      ${r.map(_).join(``)}
    </div>
  `:`
      <div class="record-detail__empty">
        ${n(t)}
      </div>
    `}function y(e){return String(e??``).trim()}function b(e){return{key:`history`,icon:`◷`,label:`Lịch sử`,dispatchRefresh:!1,onAction:e}}function x(e,t,n={}){let r=n?.nested===!0;return{...n,label:y(e),value:y(t),singleLine:!r||n?.singleLine===!0,layout:r?n?.layout:`spread`}}function ee(e,t){let n=Array.isArray(e)?e.filter(Boolean).map(e=>e?.nested===!0?e:x(e?.label,e?.value,e)):[],r=Array.isArray(t)?t.filter(Boolean).map(e=>x(e?.title??e?.label,y(e?.value)||y(e?.subtitle),e)).filter(e=>e.label||e.value):[];return[...n,...r]}function te({title:e=`Lịch sử`,items:t=[],rows:n=[],emptyText:r=`Chưa có lịch sử nghiệp vụ.`}={}){let i=ee(n,t);return v({blocks:i.length?[{title:e,rows:i}]:[],emptyText:r})}function S(e,t=``){return String(e??``).trim()||t}function C(e){return S(e).toUpperCase().replace(/[^A-Z0-9]+/g,`_`).replace(/^_+|_+$/g,``)}function w(e){return e?.payload&&typeof e.payload==`object`?e.payload:{}}function T(e){return e?.created_at??e?.occurred_at??e?.timestamp??null}function E(e){let t=Date.parse(T(e)??``);return Number.isFinite(t)?t:0}function D(e){return e?o(e,S(e)):``}function O(e){return S(e?.actor_name,`Hệ thống`)}function k(e){let t=w(e);return S(e?.target_actor_name??t.target_actor_name??t.receiver_name??t.ten_nguoi_nhan??t.assignee_name)}function ne(e){let t=w(e);return S(t.ghi_chu_chuyen??t.ghi_chu_hen??t.ghi_chu_hoan_thanh??t.ghi_chu_huy??t.note??t.ghi_chu??t.reason??t.ly_do??t.ly_do_hen_lai??t.ly_do_huy)}function re(e){let t=w(e);return t.ngay_hen??t.thoi_gian_hen??t.thoi_gian_hen_lai??t.hen_lai_at??t.scheduled_at??t.new_scheduled_at??t.appointment_at??t.delivery_at??null}function ie(e){let t=w(e);return t.amount??t.so_tien??t.money??t.tong_tien??null}function ae(e){let t=Number(e);return Number.isFinite(t)?`${t.toLocaleString(`vi-VN`)} đ`:S(e)}function A(e,t){let n=T(t);return x(e,D(n),{occurredAt:n,eventId:t?.event_id})}function j(e){return x(``,e,{nested:!0,singleLine:!1})}function M(e,t){let n=D(T(t));return j(n?`${e} · ${n}`:e)}function oe(e){return e.includes(`CHUYEN_NGUOI_NHAN`)||e.includes(`CHUYEN_DON`)||e.includes(`ASSIGNEE_TRANSFER`)}function N(e){let t=C(e),n=new Set(t.split(`_`).filter(Boolean));return t.includes(`_TU_CHOI`)||n.has(`REJECT`)||n.has(`REJECTED`)?`rejected`:t.includes(`_XAC_NHAN`)||n.has(`ACCEPT`)||n.has(`ACCEPTED`)?`accepted`:n.has(`HUY`)||n.has(`CANCEL`)||n.has(`CANCELLED`)||n.has(`CANCELED`)?`cancelled`:`requested`}function se(e){return C(e?.reference_type).includes(`CHUYEN_NGUOI_NHAN`)&&e?.reference_id?String(e.reference_id):e?.entity_id?String(e.entity_id):e?.reference_id?String(e.reference_id):S(e?.event_group_key??e?.event_id,`transfer:${T(e)}`)}function ce(e){let t=e.request,n=e.result,r=t?O(t):``,i=t?k(t):``,a=n?N(C(n?.action_key)):``;return!r&&n&&(a===`accepted`||a===`rejected`)&&(r=k(n)),!i&&n&&(a===`accepted`||a===`rejected`)&&(i=O(n)),!r&&a===`cancelled`&&(r=O(n)),!i&&a===`cancelled`&&(i=k(n)),{sender:r,receiver:i}}function le(e){let{sender:t,receiver:n}=ce(e);return t&&n?`${t} đã chuyển đơn cho `+n:t?`${t} đã tạo yêu cầu chuyển đơn`:`Đã tạo yêu cầu chuyển đơn`}function ue(e){let t=e.result;if(!t)return``;let n=N(C(t?.action_key)),r=O(t);return n===`accepted`?`${r} xác nhận`:n===`rejected`?`${r} từ chối`:n===`cancelled`?`${r} hủy chuyển`:``}function de(e){let t=[];return[e.request,e.result].forEach(e=>{if(!e)return;let n=ne(e);n&&!t.includes(n)&&t.push(n)}),t}function fe(e){let t=e.request??e.result,n=[A(le(e),t)];de(e).forEach(e=>{n.push(j(`Ghi chú: ${e}`))});let r=ue(e);return r&&e.result&&n.push(M(r,e.result)),n}function pe(e){return[`DON_HANG_TAO`,`CREATE_ORDER`,`ORDER_CREATED`].includes(e)?`created`:[`GIAO_HANG_NHAN_DON`,`DELIVERY_RECEIVED`,`ORDER_RECEIVED`,`NHAN_DON`].includes(e)?`received`:[`CHECK_CONFIRMED`,`CONFIRM_DELIVERY_CHECK`,`GIAO_HANG_KIEM_HANG`,`GIAO_HANG_XAC_NHAN_KIEM_HANG`,`GIAO_HANG_KIEM_HANG_XAC_NHAN`].includes(e)?`checked`:[`CHECK_SKIPPED_ADDED`,`CHECK_SKIPPED_REMOVED`,`CHECK_LINE_UPDATED`,`CHECK_UPDATED`,`UPDATE_DELIVERY_CHECK`,`GIAO_HANG_SUA_KIEM_HANG`,`GIAO_HANG_XAC_NHAN_SUA_KIEM_HANG`].includes(e)?`check-edited`:[`GIAO_HANG_BAT_DAU_VAN_CHUYEN`,`DELIVERY_STARTED`,`START_DELIVERY`].includes(e)?`started`:[`GIAO_HANG_TIEP_TUC_HEN_LAI`,`DELIVERY_RESUMED`].includes(e)?`resumed`:e.includes(`HEN_LAI`)||e.includes(`RESCHEDULE`)?`rescheduled`:[`GIAO_HANG_HOAN_TAT`,`GIAO_HANG_HOAN_THANH`,`DELIVERY_COMPLETED`,`DELIVERY_SUCCESS`].includes(e)?`completed`:[`GIAO_HANG_HUY_DON`,`GIAO_HANG_HUY`,`DELIVERY_CANCELLED`,`ORDER_CANCELLED`,`CANCEL_DELIVERY`].includes(e)?`cancelled`:[`HOA_DON_XAC_NHAN_DA_THU`,`HOA_DON_THU_TIEN`].includes(e)?`money-collected-customer`:e===`HOA_DON_XAC_NHAN_COD`?`money-collected-cod`:e===`HOA_DON_XAC_NHAN_TIEN_DANG_GIU`?`money-held-confirmed`:[`HOA_DON_CHUYEN_TIEN_NOI_BO`,`HOA_DON_TAO_CHUYEN_TIEN`,`HOA_DON_CHUYEN_TIEN`].includes(e)?`money-transferred`:e===`HOA_DON_BAN_GIAO_XU_LY`?`invoice-handed-over`:e===`HOA_DON_XAC_NHAN_BAN_GIAO`?`invoice-handover-confirmed`:e===`HOA_DON_TAT_TOAN`||e===`HOA_DON_TAT_TOAN_CONG_TY`?`settled`:e===`HOA_DON_HOAN_DON`?`returned`:`other`}function me(e,t){let n=O(e);return{created:`${n} đã tạo đơn`,received:`${n} đã nhận đơn`,checked:`${n} đã kiểm hàng`,"check-edited":`${n} đã sửa kiểm hàng`,started:`${n} đã bắt đầu đi giao`,resumed:`${n} đã tiếp tục đi giao`,rescheduled:`${n} đã hẹn lại khách`,completed:`${n} đã giao hàng thành công`,cancelled:`${n} đã hủy đơn`,"money-collected-customer":`${n} đã thu khách`,"money-collected-cod":`${n} đã thu COD`,"money-held-confirmed":`${n} đã xác nhận tiền đang giữ`,"money-transferred":k(e)?`${n} đã chuyển cho ${k(e)}`:`${n} đã chuyển tiền`,"invoice-handed-over":`${n} đã bàn giao xử lý hóa đơn`,"invoice-handover-confirmed":`${n} đã xác nhận nhận bàn giao hóa đơn`,settled:`${n} đã tất toán hóa đơn`,returned:`${n} đã hoàn đơn`}[t]??S(e?.action_label??e?.label,`${n} đã cập nhật đơn hàng`)}function he(e){let t=pe(C(e?.action_key)),n=[A(me(e,t),e)],r=ne(e);if(r&&n.push(j(t===`rescheduled`?`Ghi chú hẹn: ${r}`:`Ghi chú: ${r}`)),t===`rescheduled`){let t=re(e);t&&n.push(j(`Ngày hẹn: ${D(t)}`))}let i=ie(e);if(i!=null&&S(i)&&n.push(j(`Số tiền: ${ae(i)}`)),t===`money-transferred`){let t=w(e),r=C(t.status),i=k(e),a=``,o=null;r===`DA_XAC_NHAN`?(a=`${i||`Người nhận`} xác nhận`,o=t.confirmed_at??t.resolved_at):r===`TU_CHOI`?(a=`${i||`Người nhận`} từ chối`,o=t.resolved_at):r===`DA_HUY`?(a=`${O(e)} hủy chuyển`,o=t.resolved_at):r===`DA_DAO`&&(a=`${S(t.reversed_by_name,`Người thực hiện`)} đã đảo giao dịch`,o=t.reversed_at),a&&n.push(M(a,{...e,created_at:o}));let s=S(t.ly_do_dao);r===`DA_DAO`&&s&&n.push(j(`Lý do đảo: ${s}`))}return n}function ge(e={}){let t=Array.isArray(e?.events)?e.events:[],n=[],r=new Map;t.forEach((e,t)=>{let i=C(e?.action_key);if(!oe(i)){n.push({kind:`main`,index:t,event:e});return}let a=se(e),o=r.get(a);if(o||(o={kind:`transfer`,index:t,id:a,request:null,result:null},r.set(a,o),n.push(o)),N(i)===`requested`){(!o.request||E(e)<E(o.request))&&(o.request=e);return}(!o.result||E(e)>=E(o.result))&&(o.result=e)}),n.sort((e,t)=>e.index-t.index);let i=new Set;return{title:`Lịch sử đơn hàng`,rows:n.flatMap(e=>{if(e.kind===`transfer`)return fe(e);let t=he(e.event),n=t[0],r=[n?.label,n?.value,...t.slice(1).map(e=>e?.value)].join(`|`);return i.has(r)?[]:(i.add(r),t)}),emptyText:`Chưa có lịch sử đơn hàng.`}}async function _e(e){let t=String(e??``);if(!t)return!1;try{if(navigator.clipboard&&window.isSecureContext)return await navigator.clipboard.writeText(t),!0}catch{}let n=document.createElement(`textarea`);n.value=t,n.setAttribute(`readonly`,``),n.style.position=`fixed`,n.style.left=`-9999px`,n.style.top=`0`,document.body.appendChild(n),n.focus(),n.select(),n.setSelectionRange(0,n.value.length);let r=!1;try{r=document.execCommand(`copy`)}finally{n.remove()}return r}function P(e,t=`record-card__icon`){return`
    <span
      class="${a(t)}"
      aria-hidden="true"
    >
      ${e||``}
    </span>
  `}function ve(e={}){return Object.entries(e).map(([e,t])=>` data-${a(e)}="${a(String(t??``))}"`).join(``)}function ye(e){return e?.text?`
    <div class="record-card__info-line">
      ${P(e.icon)}
      <span>${n(String(e.text))}</span>
    </div>
  `:``}function be(e){return e?`
    <div class="${a([`record-card__row`,e?.tone===`warning`?`is-warning`:``].filter(Boolean).join(` `))}">
      <span class="record-card__row-label">
        ${P(e.icon||`<span class="record-card__dot"></span>`)}
        <span>${n(String(e.label??``))}</span>
      </span>

      <strong>
        ${n(String(e.value??``))}
      </strong>
    </div>
  `:``}function xe(e){if(!e?.href||!e?.icon)return``;let t=e?.external?` target="_blank" rel="noreferrer"`:``;return`
    <a
      class="record-card__tool"
      data-record-tool
      href="${a(e.href)}"
      aria-label="${a(e?.label||`Công cụ`)}"
      title="${a(e?.label||`Công cụ`)}"
      ${t}
    >
      ${e.icon}
    </a>
  `}function Se(e){return e?.label?`
    <button
      type="button"
      class="${a([`record-card__action`,e?.className||``].join(` `).trim())}"
      ${ve(e?.data)}
    >
      ${n(String(e.label))}
    </button>
  `:``}function Ce({id:e,title:t,titleIcon:r,typeLabel:i,typeIcon:o,typeKey:s,status:c,statusKey:l,subtitle:u,subtitleIcon:d,timestamp:f,lines:p=[],rows:m=[],tools:h=[],actions:g=[],ariaLabel:_=``}={}){let v=String(e??``),y=t||`Bản ghi`,b=[...h.map(xe),...g.map(Se)].join(``);return`
    <div class="record-card-shell">
      <article
      class="record-card"
      data-record-card="${a(v)}"
      tabindex="0"
      role="button"
      aria-label="${a(_||y)}"
    >
      <header class="record-card__head">
        <div class="record-card__heading">
          <div class="record-card__title">
            ${P(r,`record-card__title-icon`)}

            <strong>
              ${n(String(y))}
            </strong>
          </div>

          ${i?`
                <span
                  class="record-card__type"
                  data-record-type="${a(String(s??``))}"
                >
                  ${P(o,`record-card__type-icon`)}
                  <span>
                    ${n(String(i))}
                  </span>
                </span>
              `:``}
        </div>

        <span
          class="record-card__status"
          data-record-status="${a(String(l??``))}"
        >
          ${n(String(c??``))}
        </span>
      </header>

      <div class="record-card__meta">
        <div class="record-card__meta-main">
          ${u?`
                <div class="record-card__customer">
                  ${P(d)}
                  <span>
                    ${n(String(u))}
                  </span>
                </div>
              `:``}

          ${p.map(ye).join(``)}
        </div>

        ${f?`
              <time class="record-card__time">
                ${n(String(f))}
              </time>
            `:``}
      </div>

      ${m.length?`
            <div class="record-card__rows">
              ${m.map(be).join(``)}
            </div>
          `:``}

      </article>

      ${b?`
            <footer
              class="record-card__footer"
              data-record-action-zone
            >
              ${b}
            </footer>
          `:``}
    </div>
  `}function we(e){let t=Number(e);return Number.isSafeInteger(t)&&t>0?t:1}function F(e,t){let n=String(e??``).trim();return/^data-[a-z0-9-]+$/.test(n)?n:t}function Te({pageNumber:e=1,canGoPrevious:t=!1,hasMore:r=!1,loading:i=!1,previousAttribute:a=`data-cursor-page-previous`,nextAttribute:o=`data-cursor-page-next`,previousLabel:s=`Trang trước`,nextLabel:c=`Trang sau`}={}){let l=we(e),u=F(a,`data-cursor-page-previous`),d=F(o,`data-cursor-page-next`);if(!(l>1||t===!0||r===!0))return``;let f=t!==!0||i===!0,p=r!==!0||i===!0;return`
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
  `}function Ee(e){let t=String(e??``).trim();return/^data-[a-z0-9-]+$/.test(t)?t:`data-transfer-pending-notice`}function De({count:e=0,dataAttribute:t=`data-transfer-pending-notice`,showWhenEmpty:n=!1}={}){let r=Math.max(0,Number(e)||0);return!r&&n!==!0?``:`
    <button
      type="button"
      class="giao-hang-transfer-notice"
      ${Ee(t)}
    >
      ĐƠN CHỜ XÁC NHẬN${r>0?` `+r:``}
    </button>
  `}function Oe({requests:e=[],error:t=``,renderCard:r}={}){let i=Array.isArray(e)?e:[],a=typeof r==`function`?r:()=>``;return`
    <section class="giao-hang-page">
      ${t?`
            <div class="giao-hang-message is-error">
              <span>${n(t)}</span>
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
  `}function ke(e){return(Array.isArray(e)?e:[]).map(e=>typeof e==`string`?{url:e,title:``}:{url:e?.url||e?.src||e?.previewUrl||``,title:e?.title||e?.name||``}).filter(e=>String(e.url??``).trim())}function Ae({images:e=[],index:t=0,title:r=`Xem ảnh`}={}){let i=ke(e);if(!i.length)return`
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
    `;let o=Math.max(0,Math.min(Number(t)||0,i.length-1)),s=i[o];return`
    <section
      class="image-viewer"
      aria-label="${a(r)}"
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
        ${i.length>1?`
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
          src="${a(s.url)}"
          alt="${a(s.title||`${r} ${o+1}`)}"
        >

        ${i.length>1?`
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

      ${i.length>1?`
              <div class="image-viewer__counter">
                ${n(`${o+1}/${i.length}`)}
              </div>
            `:``}
    </section>
  `}function je(e){let t=String(e?.id??``);return`
    <article class="photo-picker__tile photo-picker__preview">
      <img
        src="${a(e?.previewUrl||e?.url||``)}"
        alt="${a(e?.name||`Ảnh đã chọn`)}"
      >

      <button
        type="button"
        class="photo-picker__remove"
        data-photo-picker-remove
        data-photo-id="${a(t)}"
        aria-label="Xóa ảnh"
        title="Xóa ảnh"
      >
        ×
      </button>
    </article>
  `}function Me({photos:e=[],maxPhotos:t=5,addLabel:r=`Thêm ảnh`,addTitle:i=`Thêm ảnh`}={}){let o=Array.isArray(e)?e:[],s=Math.max(1,Number(t)||1),c=o.length<s;return`
    <div class="photo-picker">
      ${o.map(je).join(``)}

      ${c?`
              <label
                class="photo-picker__tile photo-picker__add"
                title="${a(i)}"
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
                  ${n(r)}
                </span>
              </label>
            `:``}
    </div>
  `}function I(e){return String(e??``).trim()}function Ne(e,{creatorId:t=``,assigneeId:n=``}={}){let r=I(e?.id_nhan_vien),i=e?.is_creator===!0||r&&r===I(t),a=e?.is_assignee===!0||r&&r===I(n);if(i)return`Người bán`;if(a)return`Người giao`;let o=I(e?.role_label);return o===`Người bán`||o===`Người giao`?o:``}function Pe(e,t=``){let n=I(e?.ten_nhan_vien)||I(e?.ten_dang_nhap)||`Nhân viên`,r=I(e?.so_dien_thoai);return[I(t),n,r].filter(Boolean).join(` - `)}function Fe({employees:e=[],currentEmployeeId:t=``,creatorId:r=``,assigneeId:i=``,selectedId:o=``}={}){let s=I(t),c=I(o);return(Array.isArray(e)?e:[]).filter(e=>{let t=I(e?.id_nhan_vien),n=I(e?.trang_thai).toUpperCase();return t&&t!==s&&n===`ACTIVE`}).map(e=>{let t=I(e?.id_nhan_vien),o=Ne(e,{creatorId:r,assigneeId:i});return`
        <option
          value="${a(t)}"
          ${t===c?`selected`:``}
        >
          ${n(Pe(e,o))}
        </option>
      `}).join(``)}function L(e){let t=Number.parseInt(String(e??`0`),10);return Number.isFinite(t)?Math.max(0,t):0}function Ie(e){return String(e?.id_kiem_hang_san_pham??``)}function R(e){return e?.name||`Sản phẩm`}function z(e){return L(e?.required_quantity)}function B(e){return e?.effective_remaining_quantity!==null&&e?.effective_remaining_quantity!==void 0?L(e.effective_remaining_quantity):Math.max(z(e)-L(e?.scanned_quantity)-L(e?.skipped_quantity),0)}function V(e){return Math.max(z(e)-B(e),0)}function Le(e){return e?.final_skipped_quantity!==null&&e?.final_skipped_quantity!==void 0?L(e.final_skipped_quantity):L(e?.skipped_quantity)}function Re(e){return Array.isArray(e?.effective_scans)?e.effective_scans:Array.isArray(e?.scans)?e.scans:[]}function ze(e){return[`delivery-check__desktop-button`,e?.variant===`primary`?`is-primary`:`is-secondary`].join(` `)}function H(e=[]){let t=Array.isArray(e)?e.filter(e=>e?.key&&e?.label):[];return t.length?`
    <div class="delivery-check__desktop-actions">
      ${t.map(e=>`
            <button
              type="button"
              class="${ze(e)}"
              data-check-command="${a(e.key)}"
              ${e.disabled?`disabled`:``}
            >
              ${n(e.label)}
            </button>
          `).join(``)}
    </div>
  `:``}function U(e){return e?`
    <div
      class="delivery-check__message is-error"
      role="alert"
    >
      ${n(e)}
    </div>
  `:``}function Be(e=[]){return e.reduce((e,t)=>(e.required+=z(t),e.covered+=Math.min(V(t),z(t)),e),{required:0,covered:0})}function Ve(e){return`
    <button
      type="button"
      class="delivery-check__product-row"
      data-check-open-line="${a(Ie(e))}"
    >
      <span class="delivery-check__product-main">
        <strong>
          ${n(R(e))}
        </strong>

</span>

      <span class="delivery-check__product-progress">
        ${V(e)}/${z(e)}
      </span>

      <span
        class="delivery-check__product-arrow"
        aria-hidden="true"
      >
        ›
      </span>
    </button>
  `}function He({orderCode:e=``,products:t=[],error:r=``,desktopActions:i=[]}={}){let a=Array.isArray(t)?t:[],o=Be(a),s=o.required>0?Math.min(100,Math.round(o.covered/o.required*100)):0;return`
    <section class="delivery-check">
      ${U(r)}

      <section class="delivery-check__summary">
        <div class="delivery-check__summary-head">
          <strong>
            ${n(e||`Đơn giao hàng`)}
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
          ${a.length?a.map(Ve).join(``):`
                  <div class="delivery-check__empty">
                    Chưa có sản phẩm cần kiểm.
                  </div>
                `}
        </div>
      </section>

      ${H(i)}
    </section>
  `}function Ue(e,t,r){let i=String(e?.id_phieu_quet_ma??``),o=String(e?.draft_key??``),s=String(e?.scan_code??``)||`Chưa có mã`,c=e?.is_draft===!0,l=e?.is_replacement===!0;return`
    <div class="delivery-check__scan-row">
      <span class="delivery-check__scan-code">
        ${n(s)}

        ${c?`<small>Bản nháp</small>`:l?`<small>Đã sửa trong bản nháp</small>`:``}
      </span>

      ${t&&(c||r)?`
              <span class="delivery-check__inline-actions">
                ${!c&&i?`
                        <button
                          type="button"
                          class="delivery-check__text-button"
                          data-check-edit-server-scan="${a(i)}"
                        >
                          Sửa
                        </button>
                      `:``}

                <button
                  type="button"
                  class="delivery-check__icon-button"
                  aria-label="Xóa mã kiểm"
                  ${c?`data-check-remove-draft-scan="${a(o)}"`:`data-check-remove-server-scan="${a(i)}"`}
                >
                  ×
                </button>
              </span>
            `:``}
    </div>
  `}function We(e,t,n){let r=Re(e);return`
    <section class="delivery-check__section">
      <h3 class="delivery-check__section-title">
        Đã quét
      </h3>

      ${r.length?`
              <div class="delivery-check__scan-list">
                ${r.map(e=>Ue(e,t,n)).join(``)}
              </div>
            `:`
              <div class="delivery-check__empty">
                Chưa có mã
              </div>
            `}
    </section>
  `}function Ge(e,t){let n=Le(e);return n<=0?``:`
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
  `}function Ke({product:e=null,editable:t=!1,editCommitted:r=!1,error:i=``,desktopActions:a=[]}={}){let o=z(e),s=V(e),c=B(e);return`
    <section class="delivery-check">
      ${U(i)}

      <section class="delivery-check__line-title">
        <strong>
          ${n(R(e))}
        </strong>

<span>
          ${s}/${o}
        </span>
      </section>

      ${We(e,t,r)}
      ${Ge(e,t)}

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

      ${H(a)}
    </section>
  `}function qe(e){switch(e){case`qr`:return`QR`;case`barcode`:return`Mã vạch`;default:return`Tự động`}}function Je({product:e=null,scanMode:t=`auto`,manualCode:r=``,pendingCode:i=``,error:o=``,desktopActions:s=[]}={}){let c=String(i??``).trim();return`
    <section class="delivery-check delivery-check--scan">
      ${U(o)}

      <section class="delivery-check__scan-product">
        <strong>
          ${n(R(e))}
        </strong>

<span>
          Còn lại:
          ${B(e)}
        </span>
      </section>

      <nav
        class="delivery-check__scan-tabs"
        aria-label="Chế độ quét"
      >
        ${[[`auto`,`Tự động`],[`qr`,`QR`],[`barcode`,`Mã vạch`]].map(([e,n])=>`
              <button
                type="button"
                class="${t===e?`is-active`:``}"
                data-check-scan-mode="${e}"
              >
                ${n}
              </button>
            `).join(``)}
      </nav>

      ${c?`
              <section class="delivery-check__pending">
                <span>
                  Mã chờ xác nhận
                </span>

                <strong>
                  ${n(c)}
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
                  Chế độ ${n(qe(t))}.
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
                  value="${a(r)}"
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

      ${H(s)}
    </section>
  `}function Ye({products:e=[],error:t=``,desktopActions:r=[]}={}){let i=Array.isArray(e)?e:[];return`
    <section class="delivery-check delivery-check--review">
      ${U(t)}

      <div class="delivery-check__review-list">
        ${i.length?i.map(e=>{let t=z(e),r=Math.min(V(e),t);return`
                    <button
                      type="button"
                      class="delivery-check__review-row"
                      data-check-review-line="${a(Ie(e))}"
                    >
                      <span class="delivery-check__review-main">
                        <strong>
                          ${n(R(e))}
                        </strong>

                        <small>
                          Đã kiểm ${r}/${t}
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

      ${H(r)}
    </section>
  `}function Xe(e){let t=e?.actor_name||`Nhân viên`,n=e?.model||e?.product_name||`sản phẩm`;switch(e?.action_key){case`CHECK_SCAN_ADDED`:return`${t} đã quét mã ${n}: ${e?.scan_code||``}`;case`CHECK_SCAN_REMOVED`:return`${t} đã xóa mã ${n}: ${e?.scan_code||``}`;case`CHECK_SCAN_REPLACED`:return`${t} đã cập nhật mã ${n}: ${e?.old_scan_code||``} → ${e?.new_scan_code||``}`;case`CHECK_SKIP_ADDED`:return`${t} đã bỏ qua kiểm ${n}: ${e?.new_quantity??0}`;case`CHECK_SKIP_REMOVED`:return`${t} đã xóa bỏ qua ${n}: ${e?.old_quantity??0}`;case`CHECK_SKIP_UPDATED`:return`${t} đã cập nhật bỏ qua ${n}: ${e?.old_quantity??0} → ${e?.new_quantity??0}`;case`CHECK_CONFIRMED`:return`${t} đã xác nhận kiểm hàng`;case`CHECK_EDIT_CONFIRMED`:return`${t} đã xác nhận sửa kiểm`;default:return`${t} đã cập nhật kiểm hàng`}}function Ze({events:e=[],error:t=``,desktopActions:r=[]}={}){let i=Array.isArray(e)?e:[];return`
    <section class="delivery-check delivery-check--history">
      ${U(t)}

      <div class="delivery-check__history-list">
        ${i.length?i.map(e=>`
                    <article class="delivery-check__history-row">
                      <div class="delivery-check__history-text">
                        ${n(Xe(e))}
                      </div>

                      <time class="delivery-check__history-time">
                        ${n(e?.time_text||``)}
                      </time>
                    </article>
                  `).join(``):`
                <div class="delivery-check__message">
                  Chưa có lịch sử kiểm hàng.
                </div>
              `}
      </div>

      ${H(r)}
    </section>
  `}var Qe=Object.freeze({GIAO_HANG:Object.freeze({label:`Giao hàng`,icon:c.delivery}),LAP_DAT:Object.freeze({label:`Lắp đặt`,icon:c.install}),DICH_VU_HAU_MAI:Object.freeze({label:`Dịch vụ hậu mãi`,icon:c.order})});function $e(...e){for(let t of e){let e=String(t??``).trim();if(e)return e}return``}function et(e){let t=$e(e?.order_type,e?.loai_don,e?.order?.loai_don).toUpperCase(),n=Qe[t],r=$e(e?.order_type_label,e?.loai_don_label,e?.order?.loai_don_label,n?.label);return r?{key:t,label:r,icon:n?.icon??c.order}:null}function W(e){return String(e??``).trim()}function tt(e){let t=Number(e);return!Number.isSafeInteger(t)||t<=0?10:Math.min(t,100)}function G(e){return!e||typeof e!=`object`||Array.isArray(e)?null:{...e}}function K(e=null){return{cursor:G(e),nextCursor:null,items:[],hasMore:!1,loaded:!1,loading:!1,error:``,meta:null}}function nt(e){return{items:Array.isArray(e?.items)?e.items:[],cursor:G(e?.cursor),hasMore:e?.hasMore===!0,meta:e?.meta??null}}function rt({fetchPage:e,initialTabKey:t=`default`,pageSize:n=10}={}){if(typeof e!=`function`)throw TypeError(`createCursorListRuntime cần fetchPage.`);let r=tt(n),i=new Map,a=W(t)||`default`,o=``,s=0,c=!1;function l(e=a,t=o){return JSON.stringify([W(e)||`default`,W(t)])}function u(){let e=l();return i.has(e)||i.set(e,{key:e,tabKey:a,search:o,pageIndex:0,pages:[K()]}),i.get(e)}function d(){let e=u();return e.pages[e.pageIndex]??e.pages[0]}function f({stale:e=!1}={}){let t=u(),n=d();return Object.freeze({tabKey:t.tabKey,search:t.search,pageSize:r,pageNumber:t.pageIndex+1,items:[...n.items],cursor:G(n.cursor),nextCursor:G(n.nextCursor),hasMore:n.hasMore,canGoPrevious:t.pageIndex>0,loading:n.loading,loaded:n.loaded,error:n.error,meta:n.meta,stale:e})}function p({tabKey:e=a,search:t=o,stale:n=!1}={}){let s=W(e)||`default`,c=W(t),u=l(s,c),d=i.get(u);d||(d={key:u,tabKey:s,search:c,pageIndex:0,pages:[K()]},i.set(u,d));let f=d.pages[d.pageIndex]??d.pages[0];return Object.freeze({tabKey:d.tabKey,search:d.search,pageSize:r,pageNumber:d.pageIndex+1,items:[...f.items],cursor:G(f.cursor),nextCursor:G(f.nextCursor),hasMore:f.hasMore,canGoPrevious:d.pageIndex>0,loading:f.loading,loaded:f.loaded,error:f.error,meta:f.meta,stale:n})}function m(e,t,n){return!c&&e===s&&t.key===l()&&t.pageIndex===n}async function h({force:t=!1}={}){if(c)throw Error(`Cursor list runtime đã đóng.`);let n=u(),i=n.pageIndex,a=d();if(a.loaded&&!t)return f();let o=s+1;s=o,a.loading=!0,a.error=``;let l;try{l=await e({tabKey:n.tabKey,search:n.search,cursor:G(a.cursor),limit:r})}catch(e){if(a.loading=!1,!m(o,n,i))return f({stale:!0});throw a.error=e?.message||`Không tải được danh sách.`,e}if(a.loading=!1,!m(o,n,i))return f({stale:!0});let p=nt(l);return a.items=p.items,a.nextCursor=p.cursor,a.hasMore=p.hasMore,a.meta=p.meta,a.loaded=!0,a.error=``,f()}function g(e){let t=W(e);if(!t)throw TypeError(`Thiếu tabKey.`);return t===a?f():(s+=1,a=t,f())}function _(e){let t=W(e);return t===o?f():(s+=1,o=t,f())}async function v(){let e=u(),t=d();if(t.loaded||await h(),!t.hasMore||!t.nextCursor)return f();let n=e.pageIndex+1;return e.pages[n]||e.pages.push(K(t.nextCursor)),s+=1,e.pageIndex=n,h()}function y(){let e=u();return e.pageIndex<=0?f():(s+=1,--e.pageIndex,f())}async function b(){let e=d();return e.loaded=!1,h({force:!0})}function x({tabKey:e,search:t,all:n=!1}={}){if(s+=1,n)return i.clear(),f();let r=l(e??a,t??o);return i.delete(r),f()}function ee(e,{all:t=!1}={}){if(c)throw Error(`Cursor list runtime đã đóng.`);if(typeof e!=`function`)throw TypeError(`reconcileItems cần callback.`);return s+=1,(t?[...i.values()]:[u()]).forEach(t=>{t.pages.forEach((n,r)=>{if(!n.loaded)return;let i=e([...n.items],Object.freeze({tabKey:t.tabKey,search:t.search,pageNumber:r+1,isActive:t.key===l()&&t.pageIndex===r}));if(!Array.isArray(i))throw TypeError(`reconcileItems phải trả về mảng.`);n.items=[...i],n.loading=!1,n.error=``})}),f()}function te(){c=!0,s+=1,i.clear()}return Object.freeze({load:h,next:v,previous:y,refresh:b,reconcileItems:ee,invalidate:x,setTab:g,setSearch:_,snapshot:f,snapshotFor:p,dispose:te,get pageSize(){return r}})}function it({rpcName:e,requestKey:n}={}){if(e=String(e??``).trim(),n=String(n??``).trim(),!e)throw TypeError(`Thiếu tên RPC cần tra kết quả.`);if(!n)throw TypeError(`Thiếu request key cần tra kết quả.`);return t(`rpc_get_operation_result`,{p_rpc_name:e,p_request_key:n},`Không xác định được kết quả thao tác`)}function at({search:e=null,statuses:n=null,tabKey:r=null,cursor:i=null,limit:a=10}={}){let o=i&&typeof i==`object`&&!Array.isArray(i)?{updated_at:String(i.updated_at??``).trim()||null,id:String(i.id??``).trim()||null}:null,s=Number.isSafeInteger(Number(a))?Math.min(100,Math.max(1,Number(a))):10;return t(`rpc_get_giao_hang_worklist`,{p_search:e||null,p_status:Array.isArray(n)&&n.length?n:null,p_cursor_updated_at:o?.updated_at??null,p_cursor_id:o?.id??null,p_limit:s,p_tab_key:String(r??``).trim()||null},`Không tải được danh sách Giao hàng`)}function ot(e){return t(`rpc_get_giao_hang_detail`,{p_id_phieu_giao_hang:e},`Không tải được chi tiết Giao hàng`)}function st(e){if(!Array.isArray(e))throw TypeError(`Danh sách id phiếu giao hàng không hợp lệ.`);let n=[...new Set(e.map(e=>String(e??``).trim()).filter(Boolean))];if(!n.length)throw TypeError(`Thiếu id phiếu giao hàng cần tải.`);if(n.length>100)throw TypeError(`Chỉ được tải tối đa 100 phiếu giao hàng.`);return t(`rpc_get_giao_hang_cards_by_ids`,{p_entity_ids:n},`Không tải được thẻ Giao hàng`)}function ct({deliveryId:e,rowVersion:t,requestKey:n}){if(!e)throw TypeError(`Thiếu id phiếu giao hàng để nhận đơn.`);if(t==null)throw TypeError(`Thiếu row version của phiếu giao hàng.`);if(!n)throw TypeError(`Thiếu request key của thao tác nhận đơn.`);return r(`rpc_nhan_don_giao_hang`,{p_request_key:n,p_payload:{id_phieu_giao_hang:e,expected_row_version:t}},`Không nhận được đơn giao hàng`)}function q(e){if(!e)throw TypeError(`Thiếu id phiếu giao hàng.`)}function J(e){if(e==null)throw TypeError(`Thiếu row version của phiếu giao hàng.`)}function Y(e){if(!e)throw TypeError(`Thiếu request key của thao tác giao hàng.`)}function lt(e){return q(e),t(`rpc_get_giao_hang_check_context`,{p_id_phieu_giao_hang:e},`Không tải được dữ liệu kiểm hàng`)}function ut(e){return q(e),t(`rpc_get_giao_hang_check_history`,{p_id_phieu_giao_hang:e},`Không tải được lịch sử kiểm hàng`)}function X(e){return Array.isArray(e)?e:[]}function dt({deliveryId:e,rowVersion:t,scanAdditions:n=[],skipQuantities:i=[],requestKey:a}){return q(e),J(t),Y(a),r(`rpc_xac_nhan_kiem_hang_giao_hang`,{p_request_key:a,p_payload:{id_phieu_giao_hang:e,expected_row_version:t,scan_additions:X(n),skip_quantities:X(i)}},`Không xác nhận được kiểm hàng`)}function ft({deliveryId:e,rowVersion:t,scanAdditions:n=[],scanRemovals:i=[],scanReplacements:a=[],skipQuantities:o=[],requestKey:s}){return q(e),J(t),Y(s),r(`rpc_xac_nhan_sua_kiem_hang_giao_hang`,{p_request_key:s,p_payload:{id_phieu_giao_hang:e,expected_row_version:t,scan_additions:X(n),scan_removals:X(i),scan_replacements:X(a),skip_quantities:X(o)}},`Không xác nhận được sửa kiểm hàng`)}function pt({deliveryId:e,rowVersion:t,requestKey:n}){return q(e),J(t),Y(n),r(`rpc_bat_dau_van_chuyen`,{p_request_key:n,p_payload:{id_phieu_giao_hang:e,expected_row_version:t}},`Không bắt đầu được vận chuyển`)}function mt({deliveryId:e,rowVersion:t,rescheduleAt:n,reason:i,requestKey:a}){if(q(e),J(t),Y(a),!n)throw TypeError(`Thiếu thời gian hẹn lại.`);if(!String(i??``).trim())throw TypeError(`Thiếu lý do hẹn lại.`);return r(`rpc_hen_lai_giao_hang`,{p_request_key:a,p_payload:{id_phieu_giao_hang:e,expected_row_version:t,thoi_gian_hen_lai:n,ly_do:String(i).trim()}},`Không hẹn lại được đơn giao hàng`)}function ht({deliveryId:e,rowVersion:t,storagePaths:n,note:i=``,requestKey:a}){if(q(e),J(t),Y(a),!Array.isArray(n)||!n.length)throw TypeError(`Cần ít nhất một ảnh hoàn thành.`);return r(`rpc_hoan_tat_giao_hang`,{p_request_key:a,p_payload:{id_phieu_giao_hang:e,expected_row_version:t,storage_paths:n,ghi_chu_hoan_thanh:String(i??``).trim()||null}},`Không hoàn thành được đơn giao hàng`)}function gt({deliveryId:e,rowVersion:t,receiverId:n,note:i=``,requestKey:a}){if(q(e),J(t),Y(a),!n)throw TypeError(`Vui lòng chọn nhân viên nhận đơn.`);return r(`rpc_tao_chuyen_nguoi_nhan_giao_hang`,{p_request_key:a,p_payload:{id_phieu_giao_hang:e,expected_row_version:t,id_nguoi_nhan:n,ghi_chu:String(i??``).trim()||null}},`Không chuyển được đơn giao hàng`)}function _t({deliveryId:e,rowVersion:t,reason:n,storagePaths:i,requestKey:a}){q(e),J(t),Y(a);let o=String(n??``).trim();if(!o)throw TypeError(`Vui lòng nhập lý do hủy đơn.`);if(!Array.isArray(i)||!i.length)throw TypeError(`Vui lòng chọn ít nhất 1 ảnh hủy đơn.`);if(i.length>5)throw TypeError(`Chỉ được chọn tối đa 5 ảnh hủy đơn.`);return r(`rpc_huy_giao_hang`,{p_request_key:a,p_payload:{id_phieu_giao_hang:e,expected_row_version:t,ly_do:o,storage_paths:i}},`Không hủy được đơn giao hàng`)}function vt({deliveryId:e,rowVersion:t,requestKey:n}){return q(e),J(t),Y(n),r(`rpc_xac_nhan_hoan_kho_giao_hang`,{p_request_key:n,p_payload:{id_phieu_giao_hang:e,expected_row_version:t}},`Không xác nhận được hàng đã về kho`)}async function yt(e){let n=String(e??``).trim();if(!n)throw TypeError(`Thiếu phiếu giao hàng cần chuyển.`);return t(`rpc_get_giao_hang_transfer_candidates`,{p_id_phieu_giao_hang:n},`Không tải được danh sách nhân viên nhận chuyển`)}function bt(){return t(`rpc_get_giao_hang_transfer_requests`,{},`Không tải được yêu cầu chuyển đơn`)}function xt({transferId:e,rowVersion:t,accept:n,requestKey:i}){return J(t),Y(i),r(`rpc_xac_nhan_chuyen_nguoi_nhan_giao_hang`,{p_request_key:i,p_payload:{id_chuyen_nguoi_nhan:e,expected_row_version:t,accept:n===!0}},n===!0?`Không xác nhận được chuyển đơn`:`Không từ chối được chuyển đơn`)}function St({transferId:e,rowVersion:t,requestKey:n}){return J(t),Y(n),r(`rpc_xac_nhan_chuyen_nguoi_nhan_giao_hang`,{p_request_key:n,p_payload:{id_chuyen_nguoi_nhan:e,expected_row_version:t,cancel:!0}},`Không hủy được yêu cầu chuyển đơn`)}function Ct(e){return`${String(e?.name||`anh-hoan-thanh`).replace(/\.[^.]+$/,``)||`anh-hoan-thanh`}.webp`}function wt(e,t,n){return new Promise((r,i)=>{e.toBlob(e=>{if(e){r(e);return}i(Error(`Không nén được ảnh đã chọn.`))},t,n)})}async function Tt(e){if(typeof createImageBitmap==`function`)return createImageBitmap(e);let t=URL.createObjectURL(e);try{let e=new Image;return await new Promise((n,r)=>{e.onload=n,e.onerror=()=>{r(Error(`Không đọc được ảnh đã chọn.`))},e.src=t}),e}finally{URL.revokeObjectURL(t)}}async function Et(e,{maxDimension:t=1600,quality:n=.8}={}){if(!(e instanceof File)||!String(e.type).startsWith(`image/`))throw TypeError(`Tệp đã chọn không phải hình ảnh.`);let r=await Tt(e);try{let i=Number(r.width||r.naturalWidth),a=Number(r.height||r.naturalHeight);if(!i||!a)throw Error(`Ảnh không có kích thước hợp lệ.`);let o=Math.min(1,t/Math.max(i,a)),s=Math.max(1,Math.round(i*o)),c=Math.max(1,Math.round(a*o)),l=document.createElement(`canvas`);l.width=s,l.height=c;let u=l.getContext(`2d`);if(!u)throw Error(`Trình duyệt không hỗ trợ nén ảnh.`);u.drawImage(r,0,0,s,c);let d=await wt(l,`image/webp`,n);return new File([d],Ct(e),{type:`image/webp`,lastModified:Date.now()})}finally{typeof r.close==`function`&&r.close()}}var Z=`giao-hang-completion`,Dt=5;function Ot(e){let t=String(e??``).trim();if(!t)throw TypeError(`Thiếu id phiếu giao hàng.`);return t}function kt(){return globalThis.crypto?.randomUUID?globalThis.crypto.randomUUID():`${Date.now()}-`+Math.random().toString(16).slice(2)}async function At(){let{data:t,error:n}=await e.auth.getUser();if(n)throw n;let r=String(t?.user?.id??``);if(!r)throw Error(`Phiên đăng nhập không hợp lệ.`);return r}async function jt(t){let n=Array.isArray(t)?t.filter(Boolean):[];if(!n.length)return;let{error:r}=await e.storage.from(Z).remove(n);if(r)throw r}async function Mt({deliveryId:t,files:n}){let r=Ot(t),i=Array.isArray(n)?n:[];if(!i.length)throw TypeError(`Cần ít nhất một ảnh hoàn thành.`);if(i.length>Dt)throw TypeError(`Chỉ được chọn tối đa ${Dt} ảnh.`);let a=await At(),o=[];try{for(let t of i){let n=await Et(t),i=[a,r,`${kt()}.webp`].join(`/`),{error:s}=await e.storage.from(Z).upload(i,n,{contentType:n.type,cacheControl:`3600`,upsert:!1});if(s)throw s;o.push(i)}return o}catch(e){throw o.length&&await jt(o).catch(()=>{}),e}}async function Nt(t){let n=[...new Set((Array.isArray(t)?t:[]).map(e=>String(e??``).trim()).filter(Boolean))],r=[];for(let t of n){let{data:n,error:i}=await e.storage.from(Z).createSignedUrl(t,600);if(i)throw i;n?.signedUrl&&r.push({storagePath:t,url:n.signedUrl})}return r}var Pt=`Khách hàng mặc định của module Tạo đơn`;function Ft(e){return e!=null&&String(e).trim()!==``}function Q(e){return Ft(e)?String(e).trim():``}function $(e){return String(e??``).normalize(`NFD`).replace(/[\u0300-\u036f]/g,``).toLocaleLowerCase(`vi-VN`).replace(/\s+/g,` `).trim()}function It({name:e,note:t}){let n=Q(t);if(!n)return``;let r=$(n),i=$(Pt),a=$(e);return r===i||a===`khach le`&&r.includes(`khach hang mac dinh`)?``:n}function Lt({customer:e={},note:t=null,fallbackName:n=`Khách lẻ`}={}){let r=Q(e?.name)||Q(e?.ten_khach_hang_snapshot)||n,i=Q(e?.phone)||Q(e?.sdt_khach_hang_snapshot),a=Q(e?.address)||Q(e?.dia_chi_khach_hang_snapshot),o=It({name:r,note:t??e?.note});return{title:`Khách hàng`,rows:[{value:r,valueOnly:!0,copyValue:r},i?{value:i,valueOnly:!0,copyValue:i}:null,a?{value:a,valueOnly:!0,copyValue:a,multiline:!0}:null,o?{value:o,valueOnly:!0,multiline:!0}:null].filter(e=>e&&Ft(e.value))}}function Rt(e){let t=Number(e);return Number.isFinite(t)?Math.max(0,Math.trunc(t)):0}function zt(e=null){let t=Rt(e?.tong_so_luong_can_kiem??e?.required),n=Math.min(t,Rt(e?.tong_so_luong_con_lai??e?.remaining));return Object.freeze({required:t,remaining:n,checked:Math.max(0,t-n)})}function Bt({check:e=null,actionKey:t=``,title:n=`Kiểm hàng`}={}){if(!e)return null;let r=zt(e);return{title:n,actionKey:t||void 0,rows:[{label:`Đã kiểm`,value:`${r.checked}/${r.required}`,trailing:t?`›`:``}]}}export{He as A,_e as B,vt as C,et as D,rt as E,Ae as F,c as G,b as H,De as I,s as K,Oe as L,Je as M,Fe as N,Ze as O,Me as P,Te as R,xt as S,ft as T,te as U,ge as V,v as W,ht as _,Mt as a,ct as b,st as c,ot as d,yt as f,mt as g,it as h,jt as i,Ye as j,Ke as k,lt as l,at as m,Lt as n,Et as o,bt as p,Nt as r,pt as s,Bt as t,ut as u,St as v,dt as w,gt as x,_t as y,Ce as z};