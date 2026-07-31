function e(e,{title:t,description:n,sections:r=[]}){e.innerHTML=`
    <section class="module-page">
      <header class="module-header">
        <p class="module-kicker">Kangaroo ERP V6.5</p>
        <h2>${t}</h2>
        <p>${n}</p>
      </header>

      <div class="module-grid">
        ${r.map(e=>`
              <article class="module-card">
                <h3>${e.title}</h3>
                <p>${e.description}</p>
              </article>
            `).join(``)}
      </div>
    </section>
  `}export{e as t};