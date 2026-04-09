# Besøksprotokoll

This repository is a SvelteKit app that is published to GitHub Pages using the `docs/` output folder.

## GitHub Pages release setup

The project uses `@sveltejs/adapter-static` to build a static site into `docs/`.

Key configuration:
- `svelte.config.js` sets `pages` and `assets` to `docs`
- `svelte.config.js` sets `paths.base` to `/besoksprotokoll` for non-dev builds
- GitHub Pages is intended to serve from the repository root using the `docs/` folder

This means the published site is expected at:

`https://Svalbard-Energi.github.io/besoksprotokoll`

## Local development

Install dependencies and start the dev server:

```sh
npm install
npm run dev
```

Open the local URL shown in the terminal. Development builds do not use the GitHub Pages base path.

## Build for production

Create the static build into `docs/`:

```sh
npm run build
```

After this command, the generated site files are available in `docs/`.

## Publish to GitHub Pages

1. Run `npm run build`
2. Commit the `docs/` folder and any other changes
3. Push to the `main` branch

On GitHub, ensure Pages is configured to use the `docs/` folder on the `main` branch.

## Preview the production build locally

You can preview the generated static site from `docs/` with a simple static server, for example:

```sh
npx serve docs
```

or using Vite preview if you want to check the build output:

```sh
npm run preview
```

## Notes

- The `404.html` fallback file is configured in the SvelteKit adapter to support client-side routing on GitHub Pages.
- The `base` path must match the repository name (`/besoksprotokoll`) for GitHub Pages deployment.
