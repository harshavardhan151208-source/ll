<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1qa-lVFCet0IC5tu38gUHjZPc7z6ci30t

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`


# Website

A simple static website has been added to the repository under the `docs/` folder. You can preview it locally by opening `docs/index.html` in a browser.

To publish on GitHub Pages:

1. Go to the repository Settings -> Pages.
2. Under "Build and deployment", select "Deploy from a branch" (if not already).
3. Choose the branch: `main` and folder: `/docs`.
4. Save — your site will be available at `https://harshavardhan151208-source.github.io/ll/` once Pages finishes building.

Feel free to edit the files in `docs/` to change the content, styles, and scripts.