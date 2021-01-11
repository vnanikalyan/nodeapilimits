// Require the framework and instantiate it
const fastify = require('fastify')({
    logger: true
  });
  const fetch = require("node-fetch")

  let cnt = 0;
  
  // Declare a route
  fastify.get('/one', async (request, reply) => {
    console.log('Request received! - ', ++cnt);

    const result = await fetch("http://localhost:5000/slowrequest") //fetch returns a promise
    const resJson = await result.json()    
    reply.send(resJson);
  })
  
  // Run the server!
  fastify.listen(4000, (err, address) => {
    if (err) throw err
    fastify.log.info(`server listening on ${address}`)
  })