export default defineEventHandler((event) => {
  const { req, res } = event.node
  appendHeader(event, 'Cache-Control', `no-calche`)
  
})
