import { makeClient } from '@spree/storefront-api-v2-sdk';
import Config from 'react-native-config';

const client = makeClient({
  host: Config.API_HOST
})

export default client;