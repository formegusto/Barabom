import CallbackContainer from '../containers/CallbackContainer';
import { RouteComponentProps } from 'react-router';
import qs from 'qs';
import { useEffect } from 'react';
import { getToken } from '../api/user';

function CallbackPage(props: RouteComponentProps) {
  useEffect(() => {
    (async () => {
      const { code } = qs.parse(props.location.search, {
        ignoreQueryPrefix: true,
      });
      try {
        const res = await getToken(code as string);
        console.log(res);

        const { access_token, refresh_token } = res.data;
        localStorage.setItem('access_token', access_token);
        localStorage.setItem('refresh_token', refresh_token);

        props.history.push('/');
      } catch (e) {
        console.error(e);
      }
    })();
  });

  return <CallbackContainer />;
}

export default CallbackPage;
