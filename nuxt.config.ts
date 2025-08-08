// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  runtimeConfig: {
    private: {
      sqliteDbPath: process.env.SQLITE_DB_PATH || "./database/mydb.sqlite",
      s3Endpoint: process.env.S3_ENDPOINT,
      s3TenantId: process.env.S3_TENANT_ID,
      s3KeyId: process.env.S3_KEY_ID,
      s3KeySecret: process.env.S3_KEY_SECRET,
      s3Bucket: process.env.S3_BUCKET,
    },
  },
  modules: [
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/image",
    "@nuxt/scripts",
    "@nuxtjs/tailwindcss",
  ],
  fonts: {
    providers: {
      fontshare: false,
    },
  },
  image: {
    provider: "ipx",
    ipx: {
      dir: "", // Отключаем локальное хранилище
      alias: {
        "/image": "/api/image", // Сопоставляем /image с /api/image
      },
    },
    formats: ["webp", "jpeg", "png"],
    cacheDir: "./node_modules/.cache/nuxt-image",
    ttl: 604800, // 7 дней
  },
});
