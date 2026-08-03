# Screen Pro

Astro website for Screen Pro Retractable Doors.

## Development

```sh
npm install
npm run astro -- dev --background
```

Use `npm run astro -- dev status`, `npm run astro -- dev logs`, and
`npm run astro -- dev stop` to manage the background server. Run a production
build with `npm run build`.

## Content management

Sveltia CMS is available at `/admin/`. It uses the GitHub backend for the
`seegodesign/screen-pro` repository and currently allows personal access token
authentication.

CMS content is organized into:

- **Site Settings** for identity, contact details, navigation, and footer copy.
- **Service Areas** as a direct singleton for regions, towns, images, and
  location-specific copy.
- **Pages** for every top-level layout and the service-area page template.
- **Partners**, **Reviews**, and **Gallery** for reusable ordered entries.
- **Services** for cards, headings, summaries, benefits, process steps, sizing,
  FAQs, and related services.

Uploaded media is stored in `public/images/uploads`. Saving in the CMS commits
content changes to GitHub; the hosting provider must deploy repository commits
for changes to appear on the live site.

Partner logos use a collection-specific media folder at
`public/images/brand-logos`, so existing logos and new partner-logo uploads are
available directly in the Partners editor without copying them into uploads.

The reusable partner, review, and gallery records are validated during Astro's
content sync using `src/content.config.ts`.
