export default defineEventHandler((event) => {
  setResponseHeaders(event, {
    'Access-Control-Allow-Methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Expose-Headers': '*',
    'Access-Control-Allow-Private-Network': 'false',
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'ALLOWALL',
    'Cache-Control': 'no-cache',
    'Accept-Encoding': 'gzip, compress, br',
  })
})
