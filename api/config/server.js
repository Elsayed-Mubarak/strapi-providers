module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
 // url: 'https://54.220.211.123',
  // url: 'https://677b8accb33e.ngrok.io',
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '1f710abc6d8597a1f6ae205559bf220f'),
    },
  },
});



// google clint id & scret id 

// 728895272301-3j5a1cdn9q5138o61v11van7i15ohcbf.apps.googleusercontent.com
// SEUHqME_9HgDBzVETL4a4_-l