import convict from 'convict';

// Define a schema
let conf = convict({
  env: {
    doc: 'The applicaton environment.',
    format: ['production', 'development', 'test'],
    default: 'development',
    env: 'NODE_ENV'
  },
  ip: {
    doc: 'The IP address to bind.',
    format: 'ipaddress',
    default: '127.0.0.1',
    env: 'IP_ADDRESS',
  },
  port: {
    doc: 'The port to bind.',
    format: 'port',
    default: 1337,
    env: 'PORT'
  },
  youtube: {
    apiKey: {
      doc: 'The youtube key.',
      format: String,
      default: 'undefined',
      env: 'YOUTUBE'
    }
  }
});

// Load environment dependent configuration
let env = conf.get('env');
conf.loadFile('./src/config/' + env + '.json');

// Perform validation
conf.validate({strict: true});

export { conf }