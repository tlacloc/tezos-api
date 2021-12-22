const https = require('https');

async function get_communities ( pkh ) {
  https.get(`https://api.better-call.dev/v1/account/mainnet/${pkh}/count_with_metadata`, (resp) => {
  let data = '';

  resp.on('data', (chunk) => {
    data += chunk;
  });

  resp.on('end', () => {
    //console.log(JSON.parse(data));
    
    return( data )

  });

  }).on("error", (err) => {
    console.log("Error: " + err.message);
  });
  
}

async function get_token ( pkh, contract ) {
  https.get(`https://api.better-call.dev/v1/account/mainnet/${pkh}/token_balances?contract=${contract}`, (resp) => {
  let data = '';

  resp.on('data', (chunk) => {
    data += chunk;
  });

  resp.on('end', () => {
    // console.log(JSON.parse(data));
    
    return( data )

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
  get_token,
  get_fans
}


