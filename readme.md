# 🎒 Hostel Checklist

A clean, Supabase-backed packing checklist for hostel move-in. Track what to buy, what's packed, and what you already have — with categories, subtasks, notes, and links.

## Features

- ✅ Check off items as Pending → Bought → Packed → Not Needed
- 🗂️ Categories with collapsible sections
- 🔗 Attach links to any item (with hover preview)
- 📝 Notes per item
- 🔍 Search + filter by status or source
- 📱 Mobile responsive

---

## Setup

### 1. Create a Supabase project

Go to [supabase.com](https://supabase.com) and create a free account + new project.

### 2. Create the tables

In your Supabase project, open the **SQL Editor** and run:

```sql
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

-- Enable Row Level Security and allow public access
alter table categories enable row level security;
alter table items enable row level security;

create policy "Public access" on categories for all using (true) with check (true);
create policy "Public access" on items for all using (true) with check (true);
```

> ⚠️ The RLS policies are required. Without them Supabase blocks all reads/writes and the app will hang on the setup screen.

### 3. Deploy to Netlify (If needed to host)

This project uses a build script to inject your Supabase credentials at deploy time — your keys never touch the git repo.

**a) Push the repo to GitHub** (`config.js` is gitignored — don't create it manually)

**b) Connect to Netlify**
- New site → Import from Git → pick your repo
- Netlify auto-detects `netlify.toml`, so build settings are prefilled

**c) Add environment variables**
In Netlify: **Site configuration → Environment variables → Add a variable**

| Key | Value |
|-----|-------|
| `SUPABASE_URL` | `https://your-project.supabase.co` |
| `ANON_KEY` | `your-anon-public-key` |

Just the values — no quotes, no `const`, no semicolons.

**d) Trigger a deploy**
Go to **Deploys → Trigger deploy → Deploy site**. Netlify runs `build.sh`, which generates `config.js` from your env vars on the server.

### 4. Running locally

Create a `config.js` file in the project root (it's gitignored):

```js
const SUPABASE_URL = 'https://your-project.supabase.co';
const ANON_KEY     = 'your-anon-public-key';
```

Then open `index.html` in your browser. On first load the app will auto-seed the default checklist into your Supabase project.

---

## File Structure

```
hostel-checklist/
├── index.html      — markup and layout
├── style.css       — all styles
├── app.js          — all logic
├── config.js       — your credentials (gitignored, never committed)
├── build.sh        — generates config.js from env vars at Netlify build time
├── netlify.toml    — tells Netlify to run build.sh
├── .gitignore
└── README.md
```

---

## Customising

- **Add/remove items:** Edit the `SEED_ITEMS` array in `app.js` before first run.
- **Change categories:** Edit `SEED_CATEGORIES` in `app.js`.
- **Rename source labels:** Search for `'Buy in HYD'` / `'Buy at GLIM'` in `app.js` and `index.html` and replace as needed.
- **Change the nav subtitle:** Edit the `.nav-sub` div in `index.html`.
