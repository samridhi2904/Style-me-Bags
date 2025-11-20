document.addEventListener('DOMContentLoaded', ()=>{
  const grid = document.getElementById('grid');
  const search = document.getElementById('search');
  const filter = document.getElementById('filter');
  const year = document.getElementById('year');
  year.textContent = new Date().getFullYear();

  let products = [];

  fetch('products.json')
    .then(r=>r.json())
    .then(data=>{ products = data; render(products) })
    .catch(err=>{ grid.innerHTML = '<p>Failed to load products.</p>'; console.error(err) })

  function render(list){
    if(!list.length){ grid.innerHTML = '<p>No bags found.</p>'; return }
    grid.innerHTML = list.map(p=>`
      <article class="card">
        <img src="${p.image}" alt="${p.name}" />
        <h4>${p.name}</h4>
        <p class="type">${p.type} • ${p.material || ''}</p>
        <p class="price">${p.price}</p>
        <p>${p.short}</p>
      </article>
    `).join('')
  }

  function applyFilters(){
    const q = search.value.trim().toLowerCase();
    const t = filter.value;
    let out = products.filter(p=>{
      const matchesQ = !q || p.name.toLowerCase().includes(q) || (p.tags && p.tags.join(' ').includes(q));
      const matchesT = t === 'all' || p.type.toLowerCase() === t;
      return matchesQ && matchesT;
    })
    render(out)
  }

  search.addEventListener('input', applyFilters);
  filter.addEventListener('change', applyFilters);
});
