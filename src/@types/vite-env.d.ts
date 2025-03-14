/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_STORAGE: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
