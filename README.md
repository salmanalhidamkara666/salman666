<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://ai.google.dev/static/site-assets/images/share-ais-513315318.png" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/afda2f84-ff91-4a20-a666-37a01e5d162a

## Run Locally

**Prerequisites:** Node.js

1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key (or configure it in Vercel Environment Variables).
3. Optionally set `GEMINI_MODEL=gemini-2.5-flash` in Vercel or your local env to force the Gemini 2.5 Flash model.
4. Run the app:
   `npm run dev`

### Vercel deployment notes

- Add `GEMINI_API_KEY` under Vercel Environment Variables.
- Add `GEMINI_MODEL=gemini-2.5-flash` to use Gemini 2.5 Flash.
- The server code reads these vars in production and uses them for `/api/chat`.
