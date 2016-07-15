// Update with your config settings.

module.exports = {

  test: {
    client: 'mysql',
    connection: {
    connectionLimit : 100, //important
    host: process.env.ip,
    user: 'keltpkr',
    password: '',
    database: 'jmf_test',
    charset: 'utf8',
    debug    : false
},
    migrations: {
      directory: __dirname + '/migrations'
    },
    seeds: {
      directory: __dirname + '/seeds/test'
    }
  },

  development: {
    client: 'mysql',
    connection: {
    connectionLimit : 100, //important
    host: process.env.ip,
    user: 'keltpkr',
    password: '',
    database: 'jmf_dev',
    charset: 'utf8',
    debug    : false
},
    migrations: {
      directory: __dirname + '/migrations'
    },
    seeds: {
      directory: __dirname + '/seeds/development'
    }
  },

  production: {
    client: 'mysql',
    connection: {
    connectionLimit : 100, //important
    host: process.env.ip,
    user: 'keltpkr',
    password: '',
    database: 'jmf_prod',
    charset: 'utf8',
    debug    : false
},
    migrations: {
      directory: __dirname + '/migrations'
    },
    seeds: {
      directory: __dirname + '/seeds/production'
    }
  }

};
