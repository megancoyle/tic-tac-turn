import ReactDOM from 'react-dom';
import Routes from './routes';
import registerServiceWorker from './registerServiceWorker';
import { ApolloClient } from 'react-apollo';
import { apiUrl } from './config/endpoints';
import auth from './utils/auth';

const createHeaders = () => {
  let idToken = auth.getToken()
  if (idToken) {
    Authorization: `Bearer ${idToken}`
  } else {
    return {}
  }
}

ReactDOM.render(
    Routes,
  document.getElementById('root')
);
registerServiceWorker();
