// eslint-disable-next-line n/no-exports-assign
exports = {
  apps: [
    {
      name: `Lê Vĩnh Tuyến - Blog's của tôi`,
      exec_mode: 'cluster',
      einstances: '1',
      script: '/var/www/tuyneleblog/app/.output/server/index.mjs',
      env: {
        PORT: 4301,
      },
    },
  ],
}
