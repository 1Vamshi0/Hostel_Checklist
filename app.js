// ─── SUPABASE CLIENT ─────────────────────────────────────────────────────────
// SUPABASE_URL and ANON_KEY come from config.js (loaded before this file)
const sb = supabase.createClient(SUPABASE_URL, ANON_KEY);

// ─── SEED DATA ───────────────────────────────────────────────────────────────
const SEED_CATEGORIES = [
  { name: 'Clothing', icon: '👕', display_order: 1 },
  { name: 'Footwear', icon: '👟', display_order: 2 },
  { name: 'Electronics', icon: '💻', display_order: 3 },
  { name: 'Room Items', icon: '🚪', display_order: 4 },
  { name: 'Toiletries', icon: '🪥', display_order: 5 },
  { name: 'Stationery & Documents', icon: '📁', display_order: 6 },
  { name: 'Miscellaneous', icon: '🎒', display_order: 7 },
];

const SEED_ITEMS = [
  // CLOTHING
  { cat: 'Clothing', name: 'Shirts', quantity: null, source: 'Buy in HYD', notes: null, is_parent: true },
  { cat: 'Clothing', name: 'Formal White Shirts', quantity: '2', source: 'Buy in HYD', notes: null, parent: 'Shirts' },
  { cat: 'Clothing', name: 'Formal Shirts (Other)', quantity: '3', source: 'Buy in HYD', notes: null, parent: 'Shirts' },
  { cat: 'Clothing', name: 'Casual Shirts', quantity: '8', source: 'Buy in HYD', notes: null, parent: 'Shirts' },
  { cat: 'Clothing', name: 'T-Shirts', quantity: '10', source: 'Buy in HYD', notes: null },
  { cat: 'Clothing', name: 'Innerwear (up & down)', quantity: '7–10', source: 'Buy in HYD', notes: null },
  { cat: 'Clothing', name: 'Jeans / Chinos', quantity: '8', source: 'Buy in HYD', notes: null },
  { cat: 'Clothing', name: 'Joggers', quantity: '4', source: 'Buy in HYD', notes: null },
  { cat: 'Clothing', name: 'Shorts', quantity: '4', source: 'Buy in HYD', notes: null },
  { cat: 'Clothing', name: 'Jackets / Sweatshirts', quantity: '2', source: 'Buy in HYD', notes: null },
  { cat: 'Clothing', name: 'Business Suit', quantity: '1–2', source: 'Buy in HYD', notes: null },
  { cat: 'Clothing', name: 'Traditional Wear', quantity: '1', source: 'Buy in HYD', notes: null },
  { cat: 'Clothing', name: 'Belt', quantity: '1', source: 'Buy in HYD', notes: null },
  { cat: 'Clothing', name: 'Tie', quantity: '3', source: 'Buy in HYD', notes: null },
  { cat: 'Clothing', name: 'Bath Towel', quantity: '1', source: 'Buy in HYD', notes: null },
  { cat: 'Clothing', name: 'Face Towel', quantity: '2', source: 'Buy in HYD', notes: null },
  { cat: 'Clothing', name: 'Handkerchief', quantity: '1 set', source: 'Buy in HYD', notes: null },
  { cat: 'Clothing', name: 'Bed Sheets', quantity: '2', source: 'Buy in HYD', notes: null },
  // FOOTWEAR
  { cat: 'Footwear', name: 'Formal Shoes', quantity: '1 pair', source: 'Buy in HYD', notes: null },
  { cat: 'Footwear', name: 'Casual / Sports Shoes', quantity: '2', source: 'Buy in HYD', notes: null },
  { cat: 'Footwear', name: 'Socks', quantity: '7–10', source: 'Buy in HYD', notes: null },
  { cat: 'Footwear', name: 'Slippers / Flip-flops', quantity: '1', source: 'Buy in HYD', notes: null },
  // ELECTRONICS
  { cat: 'Electronics', name: 'Laptop & Charger', quantity: '1', source: 'Buy in HYD', notes: null },
  { cat: 'Electronics', name: 'Mobile Phone & Charger', quantity: '1', source: 'Buy in HYD', notes: null },
  { cat: 'Electronics', name: 'Scientific Calculator', quantity: '1', source: 'Buy in HYD', notes: null },
  { cat: 'Electronics', name: 'Earphones', quantity: '1', source: 'Buy in HYD', notes: null },
  { cat: 'Electronics', name: 'Headphones', quantity: '1', source: 'Buy in HYD', notes: null },
  { cat: 'Electronics', name: 'Extension Box', quantity: '1', source: 'Buy at GLIM', notes: null },
  { cat: 'Electronics', name: 'Power Bank', quantity: '1', source: 'Buy in HYD', notes: null },
  { cat: 'Electronics', name: 'Watch', quantity: '1', source: 'Buy in HYD', notes: null },
  { cat: 'Electronics', name: 'Mouse + Pad', quantity: '1', source: 'Buy in HYD', notes: null },
  { cat: 'Electronics', name: 'Laptop Stand', quantity: '1', source: 'Buy at GLIM', notes: null },
  // ROOM ITEMS
  { cat: 'Room Items', name: 'Mosquito Repellant', quantity: '1', source: 'Buy at GLIM', notes: null },
  { cat: 'Room Items', name: 'Door Lock & Keys', quantity: '1', source: 'Buy at GLIM', notes: null },
  // TOILETRIES
  { cat: 'Toiletries', name: 'Toothbrush & Paste', quantity: null, source: 'Buy in HYD', notes: 'Utility Store' },
  { cat: 'Toiletries', name: 'Soap / Body Wash', quantity: null, source: 'Buy in HYD', notes: 'Utility Store' },
  { cat: 'Toiletries', name: 'Shampoo & Conditioner', quantity: null, source: 'Buy in HYD', notes: 'Personal Choice' },
  { cat: 'Toiletries', name: 'Face Wash / Scrub', quantity: null, source: 'Buy at GLIM', notes: 'Personal Choice' },
  { cat: 'Toiletries', name: 'Hand Wash', quantity: null, source: 'Buy at GLIM', notes: 'Utility Store' },
  { cat: 'Toiletries', name: 'Comb', quantity: '1', source: 'Buy in HYD', notes: null },
  { cat: 'Toiletries', name: 'Mouthwash', quantity: null, source: null, notes: null },
  { cat: 'Toiletries', name: 'Nail Cutter', quantity: '1', source: 'Buy in HYD', notes: null },
  { cat: 'Toiletries', name: 'Scissor', quantity: '1', source: 'Buy in HYD', notes: null },
  { cat: 'Toiletries', name: 'Razor & Shaving Cream', quantity: null, source: 'Buy in HYD', notes: null },
  { cat: 'Toiletries', name: 'Perfume / Deodorant', quantity: null, source: 'Buy in HYD', notes: null },
  { cat: 'Toiletries', name: 'Food Clips', quantity: null, source: 'Buy at GLIM', notes: null },
  { cat: 'Toiletries', name: 'Medical Kit', quantity: '1', source: 'Buy in HYD', notes: null },
  // STATIONERY & DOCUMENTS
  { cat: 'Stationery & Documents', name: 'Notebooks & Stationery', quantity: null, source: 'Buy in HYD', notes: null },
  { cat: 'Stationery & Documents', name: 'Folders / Files', quantity: null, source: 'Buy in HYD', notes: null },
  { cat: 'Stationery & Documents', name: 'Passport Size Photos', quantity: '20', source: 'Buy in HYD', notes: null },
  { cat: 'Stationery & Documents', name: 'Personal ID Proofs', quantity: null, source: null, notes: null, is_parent: true },
  { cat: 'Stationery & Documents', name: 'Aadhar', quantity: null, source: null, notes: null, parent: 'Personal ID Proofs' },
  { cat: 'Stationery & Documents', name: 'PAN Card', quantity: null, source: null, notes: null, parent: 'Personal ID Proofs' },
  { cat: 'Stationery & Documents', name: 'Passport', quantity: null, source: null, notes: null, parent: 'Personal ID Proofs' },
  { cat: 'Stationery & Documents', name: 'Driving Licence', quantity: null, source: null, notes: null, parent: 'Personal ID Proofs' },
  { cat: 'Stationery & Documents', name: '10th Memo', quantity: null, source: null, notes: null, parent: 'Personal ID Proofs' },
  { cat: 'Stationery & Documents', name: '12th Memo', quantity: null, source: null, notes: null, parent: 'Personal ID Proofs' },
  { cat: 'Stationery & Documents', name: 'BTech Sem Memo', quantity: null, source: null, notes: null, parent: 'Personal ID Proofs' },
  { cat: 'Stationery & Documents', name: 'BTech Provisional Certificate', quantity: null, source: null, notes: null, parent: 'Personal ID Proofs' },
  { cat: 'Stationery & Documents', name: 'BTech TC', quantity: null, source: null, notes: null, parent: 'Personal ID Proofs' },
  { cat: 'Stationery & Documents', name: 'Resume', quantity: null, source: null, notes: null, parent: 'Personal ID Proofs' },
  { cat: 'Stationery & Documents', name: 'Debit Card', quantity: '1', source: null, notes: null, parent: 'Personal ID Proofs' },
  // MISCELLANEOUS
  { cat: 'Miscellaneous', name: 'Water Bottle', quantity: '1', source: 'Buy in HYD', notes: 'Thermoware recommended' },
  { cat: 'Miscellaneous', name: 'Plate / Spoon / Bowl', quantity: '1 set', source: 'Buy at GLIM', notes: 'Personal Set' },
  { cat: 'Miscellaneous', name: 'Coffee Mug / Glass', quantity: '1', source: 'Buy at GLIM', notes: null },
  { cat: 'Miscellaneous', name: 'Umbrella / Raincoat', quantity: '1', source: 'Buy at GLIM', notes: null },
  { cat: 'Miscellaneous', name: 'Laundry Basket', quantity: '1', source: 'Buy at GLIM', notes: 'Utility Store' },
  { cat: 'Miscellaneous', name: 'Wallet', quantity: '1', source: 'Buy in HYD', notes: null },
  { cat: 'Miscellaneous', name: 'Detergent & Cloth Clips', quantity: null, source: 'Buy at GLIM', notes: 'Utility Store' },
  { cat: 'Miscellaneous', name: 'Bucket & Jug', quantity: '1 set', source: 'Buy at GLIM', notes: 'Utility Store' },
  { cat: 'Miscellaneous', name: 'Cloth Brush', quantity: '1', source: 'Buy at GLIM', notes: null },
];

// ─── STATE ───────────────────────────────────────────────────────────────────
let categories = [];
let items = [];
let activeStatusFilter = 'all';
let activeSourceFilter = 'all';
let openPanels = new Set();
let collapsedCats = new Set();
let pendingItemModal = null;

// ─── SETUP ───────────────────────────────────────────────────────────────────
function setStep(id, state) {
  const el = document.getElementById(id);
  el.className = 'setup-step ' + state;
}

async function setup() {
  try {
    setStep('step-connect', 'active');

    const { data: existing, error: checkErr } = await sb.from('categories').select('id').limit(1);
    setStep('step-connect', 'done');

    if (!checkErr && existing && existing.length > 0) {
      setStep('step-tables', 'done');
      setStep('step-seed', 'done');
      setStep('step-load', 'active');
      await loadData();
      setStep('step-load', 'done');
      launchApp();
      return;
    }

    setStep('step-tables', 'active');
    const createSQL = `
      create table if not exists categories (
        id uuid primary key default gen_random_uuid(),
        name text not null unique,
        icon text,
        display_order smallint default 0
      );
      create table if not exists items (
        id uuid primary key default gen_random_uuid(),
        category_id uuid references categories(id) on delete cascade,
        parent_id uuid references items(id) on delete cascade,
        name text not null,
        quantity text,
        source text,
        status text not null default 'pending' check (status in ('pending','bought','packed','not_needed')),
        notes text,
        links jsonb default '[]',
        reset_each_semester boolean default true,
        display_order smallint default 0,
        created_at timestamptz default now()
      );
    `;

    await fetch(`${SUPABASE_URL}/rest/v1/rpc/exec_sql`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'apikey': ANON_KEY, 'Authorization': `Bearer ${ANON_KEY}` },
      body: JSON.stringify({ sql: createSQL })
    });

    setStep('step-tables', 'done');
    setStep('step-seed', 'active');
    await seedData();
    setStep('step-seed', 'done');
    setStep('step-load', 'active');
    await loadData();
    setStep('step-load', 'done');
    launchApp();

  } catch (err) {
    document.getElementById('setup-error').style.display = 'block';
    document.getElementById('setup-error').textContent = 'Error: ' + err.message + '. Make sure your Supabase tables are created (see README).';
  }
}

async function seedData() {
  const { data: cats, error: catErr } = await sb.from('categories').insert(
    SEED_CATEGORIES.map(c => ({ name: c.name, icon: c.icon, display_order: c.display_order }))
  ).select();
  if (catErr) throw new Error('Categories: ' + catErr.message);

  const catMap = {};
  cats.forEach(c => catMap[c.name] = c.id);

  const parents = SEED_ITEMS.filter(i => i.is_parent);
  const parentMap = {};
  for (const p of parents) {
    const { data, error } = await sb.from('items').insert({
      category_id: catMap[p.cat],
      name: p.name, quantity: p.quantity, source: p.source, notes: p.notes,
      links: [], display_order: SEED_ITEMS.indexOf(p)
    }).select().single();
    if (error) throw new Error('Parent item: ' + error.message);
    parentMap[p.name] = data.id;
  }

  const nonParents = SEED_ITEMS.filter(i => !i.is_parent);
  const toInsert = nonParents.map((i, idx) => ({
    category_id: catMap[i.cat],
    parent_id: i.parent ? parentMap[i.parent] : null,
    name: i.name, quantity: i.quantity, source: i.source, notes: i.notes,
    links: [], display_order: idx
  }));
  const { error: itemErr } = await sb.from('items').insert(toInsert);
  if (itemErr) throw new Error('Items: ' + itemErr.message);
}

async function loadData() {
  const { data: cats } = await sb.from('categories').select('*').order('display_order');
  const { data: its } = await sb.from('items').select('*').order('display_order');
  categories = cats || [];
  items = (its || []).map(i => ({ ...i, links: Array.isArray(i.links) ? i.links : [] }));
}

function launchApp() {
  document.getElementById('setup-screen').style.display = 'none';
  document.getElementById('app').style.display = 'block';
  renderAll();
}

// ─── RENDER ───────────────────────────────────────────────────────────────────
function getFilteredItems() {
  const q = document.getElementById('search-input')?.value.toLowerCase() || '';
  return items.filter(item => {
    if (activeStatusFilter !== 'all' && item.status !== activeStatusFilter) return false;
    if (activeSourceFilter !== 'all' && item.source !== activeSourceFilter) return false;
    if (q && !item.name.toLowerCase().includes(q)) return false;
    return true;
  });
}

function renderAll() {
  updateProgress();
  updateSidebar();
  renderCategories();
}

function updateProgress() {
  const all = items.filter(i => !i.parent_id);
  const packed = all.filter(i => i.status === 'packed');
  const pct = all.length ? Math.round(packed.length / all.length * 100) : 0;
  document.getElementById('progress-text').textContent = `${packed.length} of ${all.length} packed`;
  document.getElementById('progress-pct').textContent = pct + '%';
  document.getElementById('progress-fill').style.width = pct + '%';

  document.getElementById('fc-all').textContent = items.length;
  ['pending','bought','packed','not_needed'].forEach(s => {
    const el = document.getElementById('fc-' + s);
    if (el) el.textContent = items.filter(i => i.status === s).length;
  });
}

function updateSidebar() {
  // Sidebar removed — categories navigated inline
}

function renderCategories() {
  const filtered = getFilteredItems();
  const container = document.getElementById('categories-container');
  const q = document.getElementById('search-input')?.value.toLowerCase() || '';

  let html = '';
  for (const cat of categories) {
    const catItems = filtered.filter(i => i.category_id === cat.id && !i.parent_id);
    if (catItems.length === 0 && (activeStatusFilter !== 'all' || activeSourceFilter !== 'all' || q)) continue;

    const allCatItems = items.filter(i => i.category_id === cat.id);
    const packedCount = allCatItems.filter(i => i.status === 'packed').length;
    const collapsed = collapsedCats.has(cat.id);

    html += `<div class="category-section" id="cat-${cat.id}">
      <div class="cat-header" onclick="toggleCat('${cat.id}')">
        <span class="cat-emoji">${cat.icon || '📦'}</span>
        <span class="cat-name">${cat.name}</span>
        <span class="cat-count-badge">${allCatItems.length}</span>
        <span class="cat-progress-mini">${packedCount}/${allCatItems.length}</span>
        <button class="add-item-btn" onclick="event.stopPropagation();openAddItemModal('${cat.id}')">+ Item</button>
        <button class="download-cat-btn" onclick="event.stopPropagation();downloadCategory('${cat.id}')" title="Download shopping list for ${cat.name}">↓ List</button>
        <span class="cat-chevron ${collapsed ? '' : 'open'}">▾</span>
      </div>`;

    if (!collapsed) {
      const displayItems = catItems.length > 0 ? catItems : items.filter(i => i.category_id === cat.id && !i.parent_id);
      html += `<div class="items-table">
        <div class="table-head">
          <div></div><div>Item</div><div>Qty</div><div>Source</div><div>Status</div><div>Notes</div><div></div><div></div>
        </div>`;
      for (const item of displayItems) {
        html += renderItemRow(item, false);
        const subs = items.filter(i => i.parent_id === item.id);
        if (subs.length > 0) {
          const subsOpen = !collapsedCats.has('subs_' + item.id);
          for (const sub of subs) {
            if (subsOpen) html += renderItemRow(sub, true);
          }
        }
      }
      html += '</div>';
    }
    html += '</div>';
  }

  if (!html) html = '<div class="empty-state"><p>No items match your filters.</p></div>';
  container.innerHTML = html;
}

function renderItemRow(item, isSubtask) {
  const subs = items.filter(i => i.parent_id === item.id);
  const hasPanel = openPanels.has(item.id);
  const links = Array.isArray(item.links) ? item.links : [];

  const sourceClass = item.source === 'Buy in HYD' ? 'source-hyd' :
    item.source === 'Buy at GLIM' ? 'source-glim' :
    item.source === 'Already have' ? 'source-have' : 'source-empty';
  const sourceLabel = item.source || '—';

  const statusClass = 'status-' + (item.status || 'pending');
  const statusLabels = { pending: 'Pending', bought: 'Bought', packed: 'Packed', not_needed: 'Not needed' };
  const statusLabel = statusLabels[item.status] || 'Pending';

  const notesHint = item.notes ? '<span class="has-notes-dot" title="Has notes"></span>' : '';

  let nameHTML = '';
  if (isSubtask) {
    nameHTML = `<div class="subtask-indent"><div class="subtask-line"></div><span class="item-name-text ${item.status==='packed'?'packed':''}">${item.name}</span></div>`;
  } else {
    nameHTML = `<span class="item-name-text ${item.status==='packed'?'packed':''}">${item.name}</span>`;
    if (subs.length > 0) {
      const subsOpen = !collapsedCats.has('subs_' + item.id);
      nameHTML += `<button class="subtasks-toggle" onclick="event.stopPropagation();toggleSubs('${item.id}')" title="${subs.length} subtasks">${subsOpen?'▾':'▸'} ${subs.length}</button>`;
    }
  }

  let linksDisplay = '';
  if (hasPanel) {
    const linkInputs = links.map((l, i) => `
      <div class="link-row">
        <input type="text" value="${escHtml(l.label||'')}" placeholder="Label" oninput="updateLinkField('${item.id}',${i},'label',this.value)">
        <input type="text" value="${escHtml(l.url||'')}" placeholder="https://..." oninput="updateLinkField('${item.id}',${i},'url',this.value)">
        <button class="icon-btn danger" onclick="removeLink('${item.id}',${i})" title="Remove">✕</button>
      </div>`).join('');

    const detailPanel = `
      <div class="detail-panel open" id="panel-${item.id}" onclick="event.stopPropagation()">
        <div class="detail-grid">
          <div class="detail-field">
            <label>Name</label>
            <input type="text" id="edit-name-${item.id}" value="${escHtml(item.name)}">
          </div>
          <div class="detail-field">
            <label>Quantity</label>
            <input type="text" id="edit-qty-${item.id}" value="${escHtml(item.quantity||'')}">
          </div>
          <div class="detail-field">
            <label>Source</label>
            <select id="edit-source-${item.id}">
              <option value="">— none —</option>
              <option value="Buy in HYD" ${item.source==='Buy in HYD'?'selected':''}>Buy in HYD</option>
              <option value="Buy at GLIM" ${item.source==='Buy at GLIM'?'selected':''}>Buy at GLIM</option>
              <option value="Already have" ${item.source==='Already have'?'selected':''}>Already have</option>
            </select>
          </div>
          <div class="detail-field" style="grid-column:1/-1">
            <label>Notes</label>
            <textarea id="edit-notes-${item.id}">${escHtml(item.notes||'')}</textarea>
          </div>
        </div>
        <div class="links-section">
          <label>Links</label>
          <div class="links-list" id="links-list-${item.id}">${linkInputs}</div>
          <button class="add-link-btn" onclick="addLink('${item.id}')">+ Add link</button>
        </div>
        <div class="detail-actions">
          ${!isSubtask ? `<button class="btn-add-subtask" onclick="openAddItemModal('${item.category_id}','${item.id}')">+ Subtask</button>` : ''}
          <button class="btn-cancel" onclick="closePanel('${item.id}')">Cancel</button>
          <button class="btn-save" onclick="saveItem('${item.id}')">Save</button>
        </div>
      </div>`;
    linksDisplay = detailPanel;
  }

  return `
    <div class="item-row-wrap" id="row-wrap-${item.id}">
      <div class="item-row ${isSubtask?'subtask':''}" onclick="togglePanel('${item.id}')">
        <div class="cb-wrap">
          <input type="checkbox" class="cb" ${item.status==='packed'?'checked':''} onclick="event.stopPropagation();quickPack('${item.id}',this.checked)">
        </div>
        <div class="item-name-cell">${nameHTML}${notesHint}</div>
        <div class="qty-cell">${item.quantity||'—'}</div>
        <div><span class="source-badge ${sourceClass}">${sourceLabel}</span></div>
        <div style="position:relative">
          <span class="status-badge ${statusClass}" onclick="event.stopPropagation();openStatusMenu(event,'${item.id}')">
            <span class="status-dot"></span>${statusLabel}
          </span>
        </div>
        <div class="qty-cell" style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${item.notes||''}</div>
        <div style="display:flex;align-items:center;">
          ${links.length > 0 ? `<span class="links-pill-trigger" data-item-id="${item.id}" onclick="event.stopPropagation()" onmouseenter="showLinksHover(event,'${item.id}')" onmouseleave="hideLinksHover()" title="${links.length} link${links.length>1?'s':''}"><span class="lpt-icon">↗</span> Links <span class="lpt-count">${links.length}</span></span>` : ''}
        </div>
        <div style="display:flex;align-items:center;justify-content:center">
          <button class="icon-btn danger" onclick="event.stopPropagation();deleteItem('${item.id}')" title="Delete">✕</button>
        </div>
      </div>
      ${linksDisplay}
    </div>`;
}

// ─── PANEL ────────────────────────────────────────────────────────────────────
function togglePanel(id) {
  if (openPanels.has(id)) { openPanels.delete(id); } else { openPanels.add(id); }
  renderAll();
}
function closePanel(id) { openPanels.delete(id); renderAll(); }

// ─── LINKS HOVER POPOVER ──────────────────────────────────────────────────────
let hoverPopoverTimer = null;

function showLinksHover(e, itemId) {
  clearTimeout(hoverPopoverTimer);
  const item = items.find(i => i.id === itemId);
  if (!item) return;
  const links = Array.isArray(item.links) ? item.links : [];
  if (!links.length) return;

  const pop = document.getElementById('links-hover-popover');

  const linkRows = links.map(l => {
    const label = l.label || l.url || 'Link';
    const url = /^https?:\/\//i.test(l.url||'') ? l.url : 'https://' + (l.url||'');
    let host = url;
    try { host = new URL(url).hostname.replace('www.',''); } catch {}
    const faviconUrl = `https://www.google.com/s2/favicons?domain=${encodeURIComponent(host)}&sz=32`;
    return `<a class="popover-link-item" href="${escHtml(url)}" target="_blank" rel="noopener" onclick="event.stopPropagation()">
      <div class="popover-favicon">
        <img src="${faviconUrl}" alt="" onerror="this.style.display='none';this.parentElement.textContent='🔗'">
      </div>
      <div class="popover-link-text">
        <div class="popover-link-label">${escHtml(label)}</div>
        <div class="popover-link-host">${escHtml(host)}</div>
      </div>
      <span class="popover-link-arrow">↗</span>
    </a>`;
  }).join('');

  pop.innerHTML = `
    <div class="popover-header">
      <span class="popover-header-dot"></span>
      ${links.length} Link${links.length > 1 ? 's' : ''}
    </div>
    <div class="popover-links-list">${linkRows}</div>`;

  const rect = e.currentTarget.getBoundingClientRect();
  const popW = 270;
  let left = rect.left + rect.width / 2 - popW / 2;
  left = Math.max(8, Math.min(left, window.innerWidth - popW - 8));
  pop.style.top = (rect.bottom + 10) + 'px';
  pop.style.left = left + 'px';
  pop.style.width = popW + 'px';

  const arrowLeft = Math.min(Math.max((rect.left + rect.width / 2) - left, 20), popW - 20);
  pop.style.setProperty('--arrow-left', arrowLeft + 'px');
  pop.classList.add('visible');

  pop.onmouseenter = () => clearTimeout(hoverPopoverTimer);
  pop.onmouseleave = () => hideLinksHover();
}

function hideLinksHover() {
  hoverPopoverTimer = setTimeout(() => {
    document.getElementById('links-hover-popover').classList.remove('visible');
  }, 120);
}

// ─── STATUS MENU ──────────────────────────────────────────────────────────────
let activeStatusMenu = null;

function openStatusMenu(e, itemId) {
  const menu = document.getElementById('status-menu');
  const statuses = [
    { v: 'pending', l: 'Pending', cls: 'status-pending' },
    { v: 'bought', l: 'Bought', cls: 'status-bought' },
    { v: 'packed', l: 'Packed', cls: 'status-packed' },
    { v: 'not_needed', l: 'Not needed', cls: 'status-not_needed' },
  ];
  menu.innerHTML = statuses.map(s =>
    `<div class="status-menu-item" onclick="setStatus('${itemId}','${s.v}')">
      <span class="status-badge ${s.cls}" style="pointer-events:none"><span class="status-dot"></span>${s.l}</span>
    </div>`
  ).join('');
  const rect = e.target.getBoundingClientRect();
  menu.style.position = 'fixed';
  menu.style.display = 'block';
  menu.style.top = (rect.bottom + 4) + 'px';
  menu.style.left = rect.left + 'px';
  activeStatusMenu = itemId;
  e.stopPropagation();
}

document.addEventListener('click', () => {
  document.getElementById('status-menu').style.display = 'none';
  activeStatusMenu = null;
});

async function setStatus(id, status) {
  document.getElementById('status-menu').style.display = 'none';
  const { error } = await sb.from('items').update({ status }).eq('id', id);
  if (error) { toast('Error: ' + error.message); return; }
  const item = items.find(i => i.id === id);
  if (item) item.status = status;
  renderAll();
}

async function quickPack(id, checked) {
  const status = checked ? 'packed' : 'pending';
  await setStatus(id, status);
}

// ─── SAVE ITEM ────────────────────────────────────────────────────────────────
async function saveItem(id) {
  const name = document.getElementById('edit-name-' + id)?.value?.trim();
  const quantity = document.getElementById('edit-qty-' + id)?.value?.trim() || null;
  const source = document.getElementById('edit-source-' + id)?.value || null;
  const notes = document.getElementById('edit-notes-' + id)?.value?.trim() || null;
  const item = items.find(i => i.id === id);

  const links = (item?.links || [])
    .filter(l => l.url?.trim())
    .map(l => ({
      label: l.label?.trim() || l.url,
      url: /^https?:\/\//i.test(l.url) ? l.url : 'https://' + l.url
    }));

  if (!name) { toast('Name is required'); return; }

  const { error } = await sb.from('items').update({ name, quantity, source, notes, links }).eq('id', id);
  if (error) { toast('Error: ' + error.message); return; }

  if (item) { item.name = name; item.quantity = quantity; item.source = source; item.notes = notes; item.links = links; }
  openPanels.delete(id);
  toast('Saved ✓');
  renderAll();
}

// ─── LINKS ────────────────────────────────────────────────────────────────────
function addLink(itemId) {
  const item = items.find(i => i.id === itemId);
  if (!item) return;
  if (!Array.isArray(item.links)) item.links = [];
  item.links.push({ label: '', url: '' });
  openPanels.add(itemId);
  renderAll();
}
function removeLink(itemId, idx) {
  const item = items.find(i => i.id === itemId);
  if (!item || !Array.isArray(item.links)) return;
  item.links.splice(idx, 1);
  openPanels.add(itemId);
  renderAll();
}
function updateLinkField(itemId, idx, field, value) {
  const item = items.find(i => i.id === itemId);
  if (item && Array.isArray(item.links) && item.links[idx]) {
    item.links[idx][field] = value;
  }
}

// ─── FILTERS ─────────────────────────────────────────────────────────────────
function setFilter(type, value, btn) {
  if (type === 'status') {
    activeStatusFilter = value;
    document.querySelectorAll('.filter-bar .filter-pill[data-filter]').forEach(b => {
      if (['all','pending','bought','packed','not_needed'].includes(b.dataset.filter)) b.classList.remove('active');
    });
  } else {
    activeSourceFilter = value;
    document.querySelectorAll('.filter-bar .filter-pill[data-filter]').forEach(b => {
      if (!['all','pending','bought','packed','not_needed'].includes(b.dataset.filter) || b.id && b.id.startsWith('sf-')) b.classList.remove('active');
    });
    document.querySelectorAll('#sf-all,#sf-hyd,#sf-glim,#sf-have').forEach(b => b.classList.remove('active'));
  }
  btn.classList.add('active');
  renderAll();
}

// ─── COLLAPSE ─────────────────────────────────────────────────────────────────
function toggleCat(id) { collapsedCats.has(id) ? collapsedCats.delete(id) : collapsedCats.add(id); renderAll(); }
function toggleSubs(id) {
  const key = 'subs_' + id;
  collapsedCats.has(key) ? collapsedCats.delete(key) : collapsedCats.add(key);
  renderAll();
}

// ─── DELETE ───────────────────────────────────────────────────────────────────
async function deleteItem(id) {
  if (!confirm('Delete this item?')) return;
  const { error } = await sb.from('items').delete().eq('id', id);
  if (error) { toast('Error: ' + error.message); return; }
  items = items.filter(i => i.id !== id && i.parent_id !== id);
  renderAll();
  toast('Deleted');
}

// ─── ADD CATEGORY ─────────────────────────────────────────────────────────────
function openAddCategoryModal() { document.getElementById('cat-modal').classList.add('open'); }
async function addCategory() {
  const name = document.getElementById('cat-name-input').value.trim();
  const icon = document.getElementById('cat-icon-input').value.trim() || '📦';
  if (!name) { toast('Enter a name'); return; }
  const order = categories.length + 1;
  const { data, error } = await sb.from('categories').insert({ name, icon, display_order: order }).select().single();
  if (error) { toast('Error: ' + error.message); return; }
  categories.push(data);
  closeModal('cat-modal');
  document.getElementById('cat-name-input').value = '';
  document.getElementById('cat-icon-input').value = '';
  toast('Category added ✓');
  renderAll();
}

// ─── ADD ITEM ─────────────────────────────────────────────────────────────────
function openAddItemModal(catId, parentId = null) {
  pendingItemModal = { catId, parentId };
  document.getElementById('item-modal-title').textContent = parentId ? 'New Subtask' : 'New Item';
  document.getElementById('item-modal').classList.add('open');
}
async function addItem() {
  const name = document.getElementById('item-name-input').value.trim();
  const quantity = document.getElementById('item-qty-input').value.trim() || null;
  const source = document.getElementById('item-source-input').value || null;
  if (!name) { toast('Enter a name'); return; }
  const { catId, parentId } = pendingItemModal;
  const order = items.filter(i => i.category_id === catId).length;
  const { data, error } = await sb.from('items').insert({
    category_id: catId, parent_id: parentId || null,
    name, quantity, source, notes: null, links: [], display_order: order
  }).select().single();
  if (error) { toast('Error: ' + error.message); return; }
  items.push(data);
  closeModal('item-modal');
  document.getElementById('item-name-input').value = '';
  document.getElementById('item-qty-input').value = '';
  document.getElementById('item-source-input').value = '';
  toast('Item added ✓');
  renderAll();
}

// ─── HELPERS ─────────────────────────────────────────────────────────────────
function closeModal(id) { document.getElementById(id).classList.remove('open'); }
function scrollToCategory(id) { document.getElementById('cat-' + id)?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
function escHtml(str) { return String(str).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }
function toast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg; t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2500);
}

// Close modals on overlay click
document.querySelectorAll('.modal-overlay').forEach(m => {
  m.addEventListener('click', e => { if (e.target === m) m.classList.remove('open'); });
});

// ─── DOWNLOAD CATEGORY ───────────────────────────────────────────────────────
function downloadCategory(catId) {
  const cat = categories.find(c => c.id === catId);
  if (!cat) return;

  const catItems = items.filter(i => i.category_id === catId && !i.parent_id);

  const statusColors = {
    pending:    { bg: '#fff8ee', text: '#b36b00', border: '#f5d48a' },
    bought:     { bg: '#eef4ff', text: '#1a4fa8', border: '#b3cef5' },
    packed:     { bg: '#edfaf3', text: '#176641', border: '#96ddb8' },
    not_needed: { bg: '#fef0ee', text: '#a02215', border: '#f5b3aa' },
  };
  const statusLabels = { pending: 'Pending', bought: 'Bought ✓', packed: 'Packed ✓✓', not_needed: 'Not needed' };
  const sourceColors = {
    'Buy in HYD':  { bg: '#eef4ff', text: '#1a4fa8' },
    'Buy at GLIM': { bg: '#f3eeff', text: '#3d04b5' },
    'Already have':{ bg: '#edfaf3', text: '#176641' },
  };

  function itemCard(item, isSubtask = false) {
    const sc = statusColors[item.status] || statusColors.pending;
    const sl = statusLabels[item.status] || 'Pending';
    const src = item.source ? (sourceColors[item.source] || { bg: '#f0ede8', text: '#6b6560' }) : null;
    const subs = items.filter(i => i.parent_id === item.id);
    const hasNotes = item.notes && item.notes.trim();
    const hasLinks = Array.isArray(item.links) && item.links.filter(l => l.url).length > 0;

    const subCards = subs.length
      ? `<div style="margin-top:10px;padding-left:14px;border-left:2px solid #e8e4de;display:flex;flex-direction:column;gap:8px;">
          ${subs.map(s => itemCard(s, true)).join('')}
        </div>`
      : '';

    const linksHtml = hasLinks
      ? item.links.filter(l => l.url).map(l => {
          const url = /^https?:\/\//i.test(l.url) ? l.url : 'https://' + l.url;
          return `<a href="${url}" target="_blank" rel="noopener"
            style="display:inline-flex;align-items:center;gap:4px;font-size:11px;color:#2667b8;text-decoration:none;background:#eef4ff;border:1px solid #b3cef5;border-radius:20px;padding:2px 10px;">
            ↗ ${l.label || l.url}
          </a>`;
        }).join('')
      : '';

    return `
      <div style="background:#fff;border:1px solid #e8e4de;border-radius:12px;padding:14px 16px;${isSubtask ? 'background:#fafaf8;' : ''}">
        <div style="display:flex;align-items:flex-start;gap:10px;flex-wrap:wrap;">
          <div style="flex:1;min-width:0;">
            <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin-bottom:${hasNotes || hasLinks ? '6px' : '0'}">
              <span style="font-size:${isSubtask ? '14px' : '15px'};font-weight:${isSubtask ? '400' : '600'};color:#1a1714;${item.status === 'packed' ? 'text-decoration:line-through;color:#9e9890;' : ''}">${item.name}</span>
              ${item.quantity ? `<span style="font-size:12px;color:#9e9890;background:#f5f3ef;border:1px solid #e8e4de;border-radius:20px;padding:1px 9px;">${item.quantity}</span>` : ''}
            </div>
            ${hasNotes ? `<div style="font-size:12px;color:#6b6560;margin-bottom:6px;">📝 ${item.notes}</div>` : ''}
            ${hasLinks ? `<div style="display:flex;flex-wrap:wrap;gap:5px;">${linksHtml}</div>` : ''}
          </div>
          <div style="display:flex;flex-direction:column;align-items:flex-end;gap:5px;flex-shrink:0;">
            <span style="font-size:11px;font-weight:600;padding:3px 10px;border-radius:20px;background:${sc.bg};color:${sc.text};border:1px solid ${sc.border};">${sl}</span>
            ${src ? `<span style="font-size:11px;padding:2px 9px;border-radius:20px;background:${src.bg};color:${src.text};border:1px solid ${src.bg};">${item.source}</span>` : ''}
          </div>
        </div>
        ${subCards}
      </div>`;
  }

  const packedCount = catItems.filter(i => i.status === 'packed').length;
  const totalCount  = catItems.length;
  const pct = totalCount ? Math.round(packedCount / totalCount * 100) : 0;

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${cat.icon || ''} ${cat.name} – Shopping List</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet">
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: 'DM Sans', sans-serif; background: #f5f3ef; color: #1a1714; min-height: 100vh; padding: 24px 16px 48px; }
    .header { background: #fff; border: 1px solid #e8e4de; border-radius: 16px; padding: 20px 22px; margin-bottom: 20px; box-shadow: 0 2px 8px rgba(0,0,0,0.07); }
    .header-top { display: flex; align-items: center; gap: 12px; margin-bottom: 12px; }
    .header-emoji { font-size: 30px; }
    .header-title { font-family: 'DM Serif Display', serif; font-size: 26px; color: #1a1714; }
    .header-sub { font-size: 12px; color: #9e9890; margin-top: 2px; }
    .progress-bar { height: 6px; background: #e8e4de; border-radius: 3px; overflow: hidden; margin-bottom: 6px; }
    .progress-fill { height: 100%; background: #c4870a; border-radius: 3px; transition: width 0.4s; }
    .progress-text { font-size: 12px; color: #6b6560; }
    .progress-pct { font-weight: 600; color: #c4870a; }
    .items-list { display: flex; flex-direction: column; gap: 10px; }
    .generated { font-size: 11px; color: #9e9890; text-align: center; margin-top: 32px; }
  </style>
</head>
<body>
  <div style="max-width:600px;margin:0 auto;">
    <div class="header">
      <div class="header-top">
        <span class="header-emoji">${cat.icon || '📦'}</span>
        <div>
          <div class="header-title">${cat.name}</div>
          <div class="header-sub">GLIM 2025 · Batch 1 · Shopping List</div>
        </div>
      </div>
      <div class="progress-bar"><div class="progress-fill" style="width:${pct}%"></div></div>
      <div class="progress-text">${packedCount} of ${totalCount} packed &nbsp;<span class="progress-pct">${pct}%</span></div>
    </div>
    <div class="items-list">
      ${catItems.map(item => itemCard(item)).join('\n')}
    </div>
    <div class="generated">Generated ${new Date().toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' })}</div>
  </div>
</body>
</html>`;

  const blob = new Blob([html], { type: 'text/html' });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href     = url;
  a.download = `${cat.name.replace(/[^a-z0-9]/gi, '_')}_shopping_list.html`;
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 2000);
  toast(`Downloaded ${cat.name} list ✓`);
}

// ─── BOOT ─────────────────────────────────────────────────────────────────────
setup();