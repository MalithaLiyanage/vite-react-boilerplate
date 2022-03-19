/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_APP_TITLE: string,
    readonly VITE_API_HOST: string,
    readonly VITE_APP_NAV_BAR_COLOR: string,
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }