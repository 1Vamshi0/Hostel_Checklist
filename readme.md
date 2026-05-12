# 🎒 Hostel Checklist

A clean, Supabase-backed packing checklist for hostel move-in. Track what to buy, what's packed, and what you already have — with categories, subtasks, notes, and links.

## Features

- ✅ Check off items as Pending → Bought → Packed → Not Needed
- 🗂️ Categories with collapsible sections
- 🔗 Attach links to any item (with hover preview)
- 📝 Notes per item
- 🔍 Search + filter by status or source
- 📱 Mobile responsive

## Setup

### 1. Create a Supabase project

Go to [supabase.com](https://supabase.com) and create a free account + new project.

### 2. Create the tables

In your Supabase project, open the **SQL Editor** and run:

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
  status text not null default 'pending'
    check (status in ('pending','bought','packed','not_needed')),
  notes text,
  links jsonb default '[]',
  reset_each_semester boolean default true,
  display_order smallint default 0,
  created_at timestamptz default now()
);

-- Allow public read/write (you can add auth later)
alter table categories enable row level security;
alter table items enable row level security;

create policy "Public access" on categories for all using (true) with check (true);
create policy "Public access" on items for all using (true) with check (true);

### 3. Add your credentials

Open `config.js` and replace the placeholders with your project's values.  
You'll find them in your Supabase project under **Settings → API**:

```js
const SUPABASE_URL = 'https://your-project.supabase.co';
const ANON_KEY     = 'your-anon-public-key';
```

### 4. Open the app

Open `index.html` in your browser (or host the folder anywhere — it's all static).

On first load, the app will auto-seed the default checklist into your Supabase project.

---

## File Structure

```
hostel-checklist/
├── index.html   — markup and layout
├── style.css    — all styles
├── app.js       — all logic
├── config.js    — ← your credentials go here (don't commit this!)
└── README.md
```

> **Tip:** Add `config.js` to your `.gitignore` if you fork this repo so your credentials are never accidentally committed.

## Customising

- **Add/remove items:** Edit the `SEED_ITEMS` array in `app.js` before first run.
- **Change categories:** Edit `SEED_CATEGORIES` in `app.js`.
- **Rename source labels:** Search for `'Buy in HYD'` / `'Buy at GLIM'` in `app.js` and `index.html` and replace as needed.
- **Change the nav subtitle:** Edit the `.nav-sub` div in `index.html`.