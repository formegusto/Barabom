import { useEffect } from 'react';
import { RouteComponentProps } from 'react-router';

function NotFound(props: RouteComponentProps) {
  console.log();
  useEffect(() => {
    const { pathname } = props.location;

    if (pathname === '/%2Fauth')
      window.location.href = `${
        process.env.NODE_ENV === 'production'
          ? process.env.REACT_APP_SPOTIFY_CALLBACK_PRODUCTION!
          : process.env.REACT_APP_SPOTIFY_CALLBACK!
      }${window.location.search}`;
  });

  return <></>;
}

export default NotFound;
