const ENV = import.meta.env.MODE;

const config = {
  BE_URL:
    ENV === 'development'
      ? import.meta.env.VITE_DEV_BE_URL
      : import.meta.env.VITE_PROD_BE_URL,
  YTB_API_KEY:
    ENV === 'development'
      ? import.meta.env.VITE_DEV_YTB_API_KEY
      : import.meta.env.VITE_PROD_YTB_API_KEY,
  ENV,
};
export default config;
