const https = require('https');

async function get_communities ( pkh ) {
  https.get(`https://api.better-call.dev/v1/account/mainnet/${pkh}/count_with_metadata`, (resp) => {
  let data = '';

  // A chunk of data has been received.
  resp.on('data', (chunk) => {
    data += chunk;
  });

  // The whole response has been received. Print out the result.
  resp.on('end', () => {
    console.log(JSON.parse(data));
  });

  }).on("error", (err) => {
    console.log("Error: " + err.message);
  });
  
}



async function get_fans ( phk ) {
  console.log('not_implemented_yet')
}

module.exports = {
  get_communities,
  get_fans
}