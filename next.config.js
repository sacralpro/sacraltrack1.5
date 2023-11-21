/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Добавьте следующую настройку для просмотра новых страниц на локальном сервере
  exportPathMap: async function () {
    return {
      '/': { page: '/' }, // Здесь указывается стартовая страница
      '/pages/uploadtrack': { page: '/pages/uploadtrack' },
      '/login': { page: '/log-in' }, // Добавьте эту строку для страницы логина
      '/pages/marketplace': { page: '/marketplace' }, // новая главная маркетплейс еще делаю
      '/pages/marketplaceapi': { page: '/marketplaceapi' } // тест api spotify
    };
  },
};

module.exports = nextConfig;