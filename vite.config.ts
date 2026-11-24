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
