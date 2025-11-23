import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { fileURLToPath } from "url";
import fs from "fs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const srcPath = path.resolve(__dirname, "./src");
const adminPath = path.join(srcPath, "admin");
const micrositePath = path.join(srcPath, "microsite");
const landingPath = path.join(srcPath, "landing");

// Custom plugin to handle context-aware @ alias resolution
const contextAwareAlias = () => {
  return {
    name: "context-aware-alias",
    enforce: "pre",
    resolveId(id, importer) {
      if (id.startsWith("@/")) {
        if (!importer) {
          return null;
        }
        
        try {
          const importerPath = path.resolve(importer);
          
          // Determine which context we're in
          let basePath = srcPath;
          if (importerPath.startsWith(adminPath)) {
            basePath = adminPath;
          } else if (importerPath.startsWith(micrositePath)) {
            basePath = micrositePath;
          } else if (importerPath.startsWith(landingPath)) {
            basePath = landingPath;
          }
          
          const targetPath = id.replace("@/", "");
          const resolved = path.resolve(basePath, targetPath);
          
          // Try extensions in order
          const extensions = [".tsx", ".ts", ".jsx", ".js"];
          const indexFiles = ["index.tsx", "index.ts", "index.jsx", "index.js"];
          
          // Try direct file with extensions
          for (const ext of extensions) {
            const candidate = resolved + ext;
            if (fs.existsSync(candidate) && fs.statSync(candidate).isFile()) {
              return candidate;
            }
          }
          
          // Try index files
          for (const indexFile of indexFiles) {
            const candidate = path.join(resolved, indexFile);
            if (fs.existsSync(candidate) && fs.statSync(candidate).isFile()) {
              return candidate;
            }
          }
          
          // If still not found, return the path and let Vite try
          // This might help with module resolution
          return resolved;
        } catch (error) {
          console.error("[context-aware-alias] Error:", error);
          return null;
        }
      }
      return null;
    },
  };
};

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    contextAwareAlias(),
    react(),
    mode === "development" && componentTagger()
  ].filter(Boolean),
  resolve: {
    alias: {
      // Don't set default @ alias - plugin handles it
    },
  },
}));
