# Explorer — Airbnb Replica (Backend + Views)

A small Airbnb-like web app (Express + EJS + MongoDB) used as a learning project. This repository contains the server, views (EJS), static assets and example data used to build and list short-term rental listings and reviews.

## Tech stack

- Node.js (Express)
- EJS templates (with `ejs-mate` layout support)
- MongoDB + Mongoose
- Bootstrap 5 for styling
- Joi for server-side request validation

## What you'll find

- `app.js` — Express app and routes
- `models/` — Mongoose schemas (`listing.js`, `review.js`, `user.js`)
- `views/` — EJS views and layouts
- `public/` — static assets (CSS, client JS, images)
- `routes/` and `controller/` — route handlers and controllers
- `init/data.js` — example sample listings data

## Install

Deployed link: https://major-project-gx8l.onrender.com/listings

## Requirements

- Node.js 14+ (tested with Node 18+)
- MongoDB running locally (default connection `mongodb://127.0.0.1:27017/wanderlust` as used in `app.js`)

## Install

Open PowerShell in the project root (where `package.json` and `app.js` live) and run:

```powershell
npm install
```

Note: `package.json` lists the runtime dependencies (express, mongoose, ejs, etc.). If you upgrade or add packages, run `npm install` again.

## Run the app (development)

Start MongoDB locally (e.g., using `mongod` or via a GUI like MongoDB Compass / Docker). Then start the server:

```powershell
node app.js
```

By default the server listens on port `8080`. Open in your browser:

http://localhost:8080/

Visit the new listing form at:

http://localhost:8080/listings/new

## Seeding example data

The repository contains `init/data.js` with sample listings. That file is a plain JS module with a `data` array you can import in a simple seed script. There is no automated seed script in the project by default; below is a minimal example you can run to insert sample listings into the `wanderlust` database.

Create a file `init/seed.js` with this content (example):

```js
// init/seed.js
const mongoose = require('mongoose');
const Listing = require('../models/listing');
const { data } = require('./data');

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/wanderlust');
  console.log('Connected');
  await Listing.deleteMany({});
  await Listing.insertMany(data);
  console.log('Seeded', data.length, 'listings');
  mongoose.connection.close();
}

main().catch(err => console.error(err));
```

Then run from project root in PowerShell:

```powershell
node .\init\seed.js
```

Notes:
- `init/data.js` currently uses `ObjectId('...')` for `owner` fields. If you prefer plain JSON (strings) for seeding with `insertMany`, convert/remove those `ObjectId(...)` references or run the seeder from a Node script that leaves them as-is or resolves them.
- I removed `_id` and `reviews` fields from the sample data per current repo changes; `insertMany` will create `_id` automatically.

## Validation & client-side behavior

- Server-side validation uses `Joi` schemas from `schema.js` and middleware in `app.js`.
- Client-side Bootstrap validation snippet is in `public/js/script.js` and is loaded from the layout (`views/layouts/boilerplate.ejs`). If you don't see validation feedback in the browser, ensure your browser isn't caching old JS—reload with cache cleared (Ctrl+F5) or open devtools and disable cache while reloading.

## Common tasks

- Start server: `node app.js`
- Seed DB (example): `node .\init\seed.js`
- View listings: `http://localhost:8080/listings`

## Project structure (short)

```
app.js
models/
views/
public/
routes/
controller/
init/data.js
```

## Contributing

Small project — feel free to open PRs for fixes or small features.

## License

This project is provided as-is for learning and demo purposes.
