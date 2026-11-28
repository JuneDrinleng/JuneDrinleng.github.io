import { defineConfig } from 'vite'
import fs from 'node:fs'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/',
  plugins: [
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
    {
      name: 'notes-graph-dev-proxy',
      configureServer(server) {
        server.middlewares.use('/__dev_notes_graph.json', (_req, res) => {
          const localGraphPath = path.resolve(__dirname, '../notes/graph/graph.json')
          if (!fs.existsSync(localGraphPath)) {
            res.statusCode = 404
            res.end(JSON.stringify({ error: 'not_found' }))
            return
          }
          res.setHeader('Content-Type', 'application/json; charset=utf-8')
          res.end(fs.readFileSync(localGraphPath, 'utf-8'))
        })
        server.middlewares.use('/__dev_notes_wiki.json', (_req, res) => {
          const localWikiDir = path.resolve(__dirname, '../notes/wiki')
          res.setHeader('Content-Type', 'application/json; charset=utf-8')
          if (!fs.existsSync(localWikiDir)) {
            res.end('[]')
            return
          }
          const files = fs
            .readdirSync(localWikiDir, { withFileTypes: true })
            .filter(
              (entry) =>
                entry.isFile() &&
                entry.name.endsWith('.md') &&
                entry.name !== 'README.md' &&
                !entry.name.startsWith('_'),
            )
            .map((entry) => ({
              slug: entry.name.replace(/\.md$/, ''),
              markdown: fs.readFileSync(path.join(localWikiDir, entry.name), 'utf-8'),
            }))
          res.end(JSON.stringify(files))
        })
      },
    },
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
