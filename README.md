# Barabom

![Untitled](https://user-images.githubusercontent.com/52296323/134373623-68a1d0a4-6819-4bb9-a575-6242891971c4.png)

> "**아름다운 것만 보세요.", "Look Only Beauty." From. Barabom**

# 1. Reason

- 친구의 인스타그램에서 공전상가라는 카페의 사진을 보았다. 그 사진의 주제는 **"친구가 CDP를 바라보고 있는 사진"** 이라고 정의할 수 있을 것 같다. 그 모습에서 프로젝트명, **Barabom**을 떠올렸다.
- **음악**이라는 것은 예로부터 **모든 사람의 삶에 있어서 뺄 수 없는 존재**다. 그리고 사람들이 듣는 음악의 형태와 목적은 모두 다르다. 누군가는 즐거움을 위해 듣기도하고, 위로를 받기 위해 듣기도하고, **모두 각자의 삶에 각자만의 음악을 가지고 산다.**
- 그 형태와 목적이 어떻든, 음악 자체는 우리의 삶 속에서 항상 함께한다는 점으로 아름답다. 순수한 자연을 우리가 아름답게 느끼듯이 말이다.

> "**친구가 바라보고 있는 CDP, 그 속에서 흘러나오는 음악, 음악은 아름답다, 당신의 삶에 당신만의 아름다움을 가득 담고 바라보길 바란다." From. Barabom**

# 2. Goals

- Utilize Redux-Store
- Spotify API
  - Spotify OAuth
  - Spotify Web Playback SDK
- Musixmatch API
  - Find Lyrics
- Musicbrainz API
  - Find Artist All Name

# 3. Design

> **Simple Is Best!**

> Splash Page

![Untitled 1](https://user-images.githubusercontent.com/52296323/134373646-dfed79a2-c2c1-4c23-ae2f-1d3c43158e54.png)

> Main Page (Unauth)

![Untitled 2](https://user-images.githubusercontent.com/52296323/134373658-2956919a-35bc-4eb0-accb-c70b69caa434.png)

> OAuth Callback Page

![Untitled 3](https://user-images.githubusercontent.com/52296323/134373669-e752f22e-8c8e-4eeb-bb2b-27e4b8e79245.png)

> Main Page (Auth)

![Untitled 4](https://user-images.githubusercontent.com/52296323/134373676-f51db6f9-6ec5-4d7a-a376-d1ee28537d62.png)

> Music Find Modal

![Untitled 5](https://user-images.githubusercontent.com/52296323/134373689-2bece929-968a-4a41-b14d-af33127d51af.png)

> Main Page (Playmusic)

![Untitled 6](https://user-images.githubusercontent.com/52296323/134373701-63d65aaf-0e59-4ff0-9e5b-d95313a6e9cc.png)

# 4. Use APIs

## 1. Spotify API

### 1. OAuth

[Authorization Guide | Spotify for Developers](https://developer.spotify.com/documentation/general/guides/authorization-guide/)

```
https://accounts.spotify.com/authorize
```

```json
// Main Query String
{
  "response_type": "code",
  "client_id": "APP CLIENT_ID",
  "scope": "해당 토큰에 부여할 권한 (Spotify Document 참고)",
  "redirect_uri": "로그인 성공 후, 토큰을 부여 받을 uri"
}
```

### 2. Search

[Web API Reference | Spotify for Developers](https://developer.spotify.com/documentation/web-api/reference/#category-search)

```
GET https://api.spotify.com/v1/search
```

```json
// Header
{
  "Authorization": "Bearer ${ACCESS_TOKEN}"
}
```

```json
// Main Query String
{
  "query": "검색명 (Spotify Based)",
  "type": "track",
  "market": "국가코드",
  "limit": "한 페이지 당 검색 결과 수",
  "offset": "페이지"
}
```

```tsx
// Response JSON Type
export interface Tracks {
  // ...
  items: Item[];
  // ...
}

export interface Item {
  // ...
  artists: Artist[]; // 참여 아티스트
  // ...
  name: string; // 해당 트랙 제목
  // ...
  uri: string; // 재생 music uri
}
```

### 3. Playback SDK

[Quick Start | Spotify for Developers](https://developer.spotify.com/documentation/web-playback-sdk/quick-start/)

```html
<script src="https://sdk.scdn.co/spotify-player.js"></script>
```

```jsx
window.onSpotifyWebPlaybackSDKReady = () => {
  const token = '[My access token]';

  // 토큰과 함께 SDK에 요청을 하면 해당 Player 정보로 Spotify 음악을 컨트롤 할 수 있는
  // Player 객체 반환
  const player = new Spotify.Player({
    name: 'Web Playback SDK Quick Start Player',
    getOAuthToken: (cb) => {
      cb(token);
    },
    volume: 0.5,
  });

  player.connect();
};
```

```tsx
// Player 객체에 들어 있는 사용자 로그인 기기 고유 device_id 와 함께 재생할 음악의 uri를
// 담아 보내준다. 그러면 음악이 재생된다!
const play = ({ spotify_uri, device_id }: any) =>
  client.put(
    `${url}/v1/me/player/play?${qs.stringify({ device_id })}`,
    {
      uris: [spotify_uri],
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    },
  );
```

## 2. Musixmatch API

- **Spotify에서는 가사를 제공하는 API가 존재하지 않았다.** 가사 API를 꼭 써보고 싶었는데, 이것저것 찾던 중, **Spotify는 Musixmatch 라는 가사제공업체에서 가사를 제공받아 사용함**을 알게 됐다.

![Untitled 7](https://user-images.githubusercontent.com/52296323/134373732-be05b4b7-c2a0-4796-91fa-8082175eb6bb.png)

- 때문에, Musixmatch API를 알아보게 되었는데, 여기서 API를 제공해주고 있었다. 하지만 전체 가사를 제공받으려면 일정 금액을 지불해야 한다. 울며 겨자먹기로 무료로 일부 가사만 제공받는 것으로 만족하기로 했다.

[Track Search](https://developer.musixmatch.com/documentation/api-reference/track-search)

```
GET http://api.musixmatch.com/ws/1.1/track.search
```

```json
// Main Query String
{
  "apikey": "Musixmatch API KEY",
  "q": "검색명",
  "q_artist": "아티스트 검색명",
  "q_tracks": "노래 검색명"
}
```

- Postman 테스팅 까지 끝나고, 이를 Web에 적용을 하려하니, **CORS 에러**가 터져나왔다. 당연히 Musixmatch Dashboard에서 URI 등록을 안해줬으니 나타나는 에러겠거니 했는데, **설정창이 없었다.**
- 기본적으로 브라우저가 아닌, 서버가 중간에 껴서 가사를 가지고 오고, Browser쪽으로 보내주는 프로세스를 구성했나보다. 하지만 Github에 Only Client Side로 올려놓고 싶었기 때문에 다른 대책을 찾으려고 해봤다.
- 그러다가 cors를 해결해주는 proxy server를 구성해주는 heroku-app/cors-anywhere를 만나게 됐다.

[](https://cors-anywhere.herokuapp.com/corsdemo)

- 해당 사이트에서 버튼 클릭 하나만으로 하루동안은 자유롭게 proxy server를 타고, cors error를 경험하지 않을 수 있게된다. 또한 CORS가 발생하는 API URI로 아래와 같은 형식으로 써야한다.

```
https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search
```

- 어려운 일은 아니지만, 가독성을 위해 위와 같은 형식으로 만들어주는 누군가가 만들어준 musixmatch library를 사용했다.

```jsx
// musixmatch lib code
methods.forEach(function (entry) {
  Musixmatch.prototype[entry.method] = function (params) {
    const xparams = Object.assign({}, this._data, params);
    const uri = `/${entry.name}`;
    const url = `${this.corsURL}/${this.baseURL}`;
    const baseUrl = url.replace(/^\/|([^:]\/)\/+/g, '$1');

    const xoptions = Object.assign({}, { baseURL: baseUrl }, this._options);
    const instance = Axios.create(xoptions);

    try {
      const res = instance
        .get(uri, { params: xparams })
        .then((res) => res.data)
        .then((resdata) => resdata.message.body);
      return res;
    } catch (error) {
      throw error.response.data;
    }
  };
});
```

## 3. Musicbrainz API

- Musixmatch API는 내 경험상 정말 불편한 점이 많은 API인 것 같다. 위의 CORS 에러를 해결한 후, **두 번째 문제점은 노래의 제목은 일정할 수 있지만, 가수의 이름은 일정하지 않을 수 있다는 것** 이다.
- 예로들어, **아이유라는 가수는 IU, 이지은, 아이유 이런식으로 사용자마다 다르게 3가지의 이름으로 쓸 수 있다.** 물론 아이유는 유명해서 그런 경우가 없겠지만, 이지은으로 검색하면 노래가 나오지 않고, **아이유로만 검색을 해야 가사가 검색되는 현상이 나타났다.** **(;;)**
- 가사를 꼭 넣고 싶은 나의 마음을 담아, 다음에는 **특정 가수명으로 검색하면 가수의 모든 이름들이 나오는 API**를 수색하기 시작했다. 그러다 만난 것이 바로 **Musicbrainz API** 이다.

[MusicBrainz API](https://musicbrainz.org/doc/MusicBrainz_API)

```
GET https://musicbrainz.org/ws/2
```

```json
// Main Query String
{
  "query": "alias:${가수명}",
  "fmt": "response 객체 형식"
}
```

# 5. Service Preview

[Barabom](https://formegusto.github.io/project-barabom/#/)

> **OAuth**

![https://media3.giphy.com/media/rrxN25Yck0xSKcZcSA/giphy.gif?cid=790b76116a371689d2f482903c7e0bc4787bf2b33e9df1d9&rid=giphy.gif&ct=g](https://media3.giphy.com/media/rrxN25Yck0xSKcZcSA/giphy.gif?cid=790b76116a371689d2f482903c7e0bc4787bf2b33e9df1d9&rid=giphy.gif&ct=g)

> **Find Music**

![https://media4.giphy.com/media/jGSvFZ6FQyYJFOaK66/giphy.gif?cid=790b7611886219d50e51c4b3b8e1649810448f7caaeb22c5&rid=giphy.gif&ct=g](https://media4.giphy.com/media/jGSvFZ6FQyYJFOaK66/giphy.gif?cid=790b7611886219d50e51c4b3b8e1649810448f7caaeb22c5&rid=giphy.gif&ct=g)

> **Play Music**

![https://media2.giphy.com/media/Kjx8PrjNQ0r49xVvan/giphy.gif?cid=790b7611835ae820230aafccdc2fa949eb80d902deb41b5a&rid=giphy.gif&ct=g](https://media2.giphy.com/media/Kjx8PrjNQ0r49xVvan/giphy.gif?cid=790b7611835ae820230aafccdc2fa949eb80d902deb41b5a&rid=giphy.gif&ct=g)
