import { useEffect } from 'react';
import { RouteComponentProps } from 'react-router';

function NotFound(props: RouteComponentProps) {
  useEffect(() => {
    const { pathname } = props.location;
    console.log(props);
    if (pathname === '/%2Fauth')
      window.location.href = `${process.env.REACT_APP_SPOTIFY_CALLBACK!}${
        window.location.search
      }`;
  });

  return <></>;
}

export default NotFound;
