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

Deployed link: https://major-project-gx8l.onrender.com/listings


```

Notes:
- `init/data.js` currently uses `ObjectId('...')` for `owner` fields. If you prefer plain JSON (strings) for seeding with `insertMany`, convert/remove those `ObjectId(...)` references or run the seeder from a Node script that leaves them as-is or resolves them.
- I removed `_id` and `reviews` fields from the sample data per current repo changes; `insertMany` will create `_id` automatically.

## Validation & client-side behavior

- Server-side validation uses `Joi` schemas from `schema.js` and middleware in `app.js`.
- Client-side Bootstrap validation snippet is in `public/js/script.js` and is loaded from the layout (`views/layouts/boilerplate.ejs`). If you don't see validation feedback in the browser, ensure your browser isn't caching old JS—reload with cache cleared (Ctrl+F5) or open devtools and disable cache while reloading.


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

## License

This project is provided as-is for learning and demo purposes.
