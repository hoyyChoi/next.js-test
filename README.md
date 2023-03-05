# nextJS
## nextjs는 React로 만드는 서버사이드 렌더링 프레임워크. 
- 서버사이드 렌더링을 함으로 얻는 장점
1. 클라이언트 렌더링의 경우 모든 js 파일을 로드하고 사용자는 웹을 보게됩니다. 이때까지 사용자는 많은 시간을 대기해야 합니다.
2. seo 문제 - 클라이언트 사이드의 경우 자바스크립트가 로드 되지 않은 경우 아무런 정보를 보이지 않습니다. 구글의 검색엔진의 경우 자바스크립트가 로드되지 않은 페이지를 검색엔진으로 스캔함으로 결론적으로 검색에 아무 페이지도 걸리지 않게 됩니다.

이 두가지를 해결하는 것이 서버렌더링

첫번째 문제는 서버에서 자바스크립트를 로딩함으로 클라이언트 측에서는 자바스크립트를 로딩하는 시간이 줄어들게 되고,

두번째 문제는 검색엔진이 자바스크립트를 읽는 것이 아닌 서버 측에서 자바스크립트, html, css를 만들어 컨텐츠를 직접 업로드 함으로 검색엔진에 게시글이 걸리게 됩니다.

또한 meta 태그를 자유롭게 추가함으로 seo를 용이하게 할수 있습니다.

### csr과 ssr의 차이

- Client side render : 브라우저가 서버에서 자바스크립트 파일을 읽어온 후(서버에 요청), 유저의 브라우저에 있는 자바스크립트 엔진이 자바스크립트 코드가 왔을때 아것들을 읽으면서 빈 html 태그 안에 직접 ui를 그리는 형식이다. 속도가 느리다. (빈 html 태그 - <div id=‘root’></div>). -> 속도가 느릴경우, 자바스크립트를 받고 ui를 그릴때까지 휜 화면이 지속된다. (api를 이용한 ui들도 포함) 그래서 api가 들어오기전까지 로딩이라는 html태그를 만들어야한다.
- Server side render : 유저(브라우저)측에서 페이지를 요청하면 서버쪽에서 진짜 html파일을 보내준다. 즉 js에 의해 html이 그려질때까지 기다릴 필요가 없다. 미리 렌더링 되는 것이다. (서버(nextJS)에서 api를 이용해 다 그린후, html파일로 넘겨줘버린다.)

### 프레임워크와 라이브러리에 차이(react-라이브러리, next - 프레임워크)

- 라이브러리(react)는 자유도가 높다. 개발자가 직접적으로 컴포넌트를 생성하고, 라우트폴더를ㄹ 제작해서 원하는 시기에 가져다가 쓸 수 있다, react dom 도 실제로 다 볼 수 있다.
- 프레임워크(next)는 특정한 규칙을 따라서 코드를 작성해야한다 (page안에서만 뭔가를 만들수 있다.) 코드를 어떤 규칙에 의해 한 부분에 넣을시, next의 아주 깊은 곳에서 react에서 보여지는 dom,index,app 역할을 다 한다.
- 결론 : react.js 는 우리가 원할 때 부르고 원할 때 사용하는 library이고, framework는 약간 집같은 것인데, 내가 코드를 적절한 곳에 넣어야한다. 그럼 알아서 잘 돌아간다. (집을 수정할 순 없다.)

---

## nextJS 사용법

- Next.js 생성 법
    - 터미널 창에 원하는 디렉터리로 이동
    - npx create-next-app@latest. -> 가장 최신 버전으로 생성
    - 프로젝트 이름 설정
    - Typescript 여부
    - Eslint 여부 ( 문법 오류를 잡아주는 도구)
    - 나머지는 다 no (/src, ./app?)

- nextJS 는 pages단위로 url이 나뉜다. (프레임워크의 장점)
    - index.js는 기본적으로 홈 화면 이다. Url -> /


### Next.js 의 장점

- Hydration
    - 앱의 초기상태를 활용해서 미리 렌더링(preRendering) , 페이지를 딱 열게 되면, 보게 되는 것이 preRender된 html파일을 보게 된다. 그리고 나서 react.js가 클라이언트로 전송 됐을때, react.js앱이 된다.
    - next.js 는 react.js를 백엔드에서 동작시켜서 이 페이지를 미리 만드는데 이게 components들을 렌더 시킨다. 렌더링이 끝나면 그건 html이 되고, next.js는 그 html을 페이지의 소스코드에 넣어준다.
    - 그럼 유저는 자바스크립트와 react.js 가 로딩 되지 않았더라도 콘텐츠를 볼 수 있게 된다. 그리고 react.js 가 로딩 되었을때, 기본적으로 이미 존재하는 것들(preRendering..html) 과 연결이 되면서 일반적인 react 앱이 된다.
    - 결론 -> next.js가 백엔드상에서 react.js를 돌리고 있고, next.js가 페이지를 pre-generate(사전생성)할거고, 그건 html페이지가 된다. 유저는 이 페이지를 보게 된다. 그러나 유저가 모든 자바스크립트를 다운로드 한 후에, react.js가 다시 주도권을 가지고 와서 일반적인 react.js처럼 동작하는것이다.

- 

- nextJS에 css 적용법 (3가지)
    - 태그 자체에 style 적용시키는 방법.! (ex. ```<div style={{backgroundColor:’red’}}> 하이 </div>```)
    - Module.css
        - next.js 에서 제공하는 css 모듈 이다. 이것으로 우리는 평범한 css를 사용할 수 있다. 클래스 이름으로 텍스트로서 적지 않는다. 자바스크립트 오브젝트에서의 프로퍼티 형식으로 적는다. (Ex. styles.nav)
        - 이러한 접근방식을 이용한다면, 렌더 될때, 클래스 이름이 무작위 텍스트로 지정된다. (어떤 충돌도 이르키지 않는다.) 어떤 컴포넌트에서도 재사용이 가능하다.~
    - Style jsx
        - <style jsx> { ``} </style> 태그를 연다.
        그 안에 태그 이름 (ex. Nav{ background-color:red;} 이런 식으로 작성 하면 적용 됨.
        컴포넌트 별로 독립적이기 때문에 중복사용도 가능하다. (Ex. a태그에 css 를 다르게 적용해도 다 각자 컴포넌트에 맞게 적용된다는 것이다. 독립보장)
        스타일들은 오직 쓰여진 컴포넌트 내부로 범위가 한정된다.

- Custom app
    - 한 곳에서 모든 페이지를 라우팅 하고, Navbar같은 고정된 컴포넌트를 사용하고, 전역 css를 한번에 설정할 수 있는 그런 곳 (ex. React에서 app.js 같은 파일)
    - next.js 에서는 pages라는 폴더 안에 _app.js 파일을 만든다.

    ``` export default function App({Component, pageProps}){
    return (
    <div>
        <Component {...pageProps}/>
        <h2>hello</h2>
    </div>
    )}
    ``` 

    - Custom App의 컴포넌트의 인자값으로 component와 pageProps를 객체에 담아 준다. 그리고 <Component {…pageProps}/> 를 return 하면 Pages 폴더 안에 있는 컴포넌트들이 렌더링 된다.
    - Global.css 로 적용하고 싶은 파일은 custom app 파일에서만 가능하다.

    Next.js를 다룰때에는 반드시 하나의 큰 어플리케이션이 아니라 각각의 나뉘어진 페이지를 생각해야한다.


- redirect, rewrite
    - next.js에서 제공해주는 기능. ( url를 입력했을때 다른 곳으로 돌려주는 기능)
        - redirect는 destination url을 보여주면서 화면이 바뀌지만, rewrite는 destination url을 숨겨주고 화면만 바뀐다. (그러므로 rewrite는 api키를 숨길때 매우 유용하다. )
        ->: 사용법
        1. Next.config.js 파일에 async redirects(){ } 를 생성한다.
        2. Redirects 함수안에 return 값으로 배열을 넣고, 배열안에 객체를 생성해 그 안에 source, destination, permanent를 작성한다. (source는 입력, destination은 리다이렉트되는 url이다.)
        - Rewrites 함수도 동일하다. 하지만 destination 이 보이지않는다. 서버에 의해 masking 된다. 매우 
        

### nextJS에 서버사이드렌더링 적용하는 법

- nextJS 는 기본적으로 서버와 클라이언트를 모두 다룰 수 있다. (터미널에서 서버, 웹에서 클라)
    - get server side props ( 이것을 이용한다. - 서버에서 코드가 돌아간다.)
    - getServerSideProps라는 function을 export 한다.
    (ex. Export async function getServerSideProps( ){ }.  ->  여기 안에 코드는 서버쪽에서만 작동한다. )
    - 함수의 return 값으로 객체를 반환하는데 ,props라는 키를 가진 객체이다.\
    - return된 props를 쓰고 싶은 page(즉, 컴포넌트)의 인자값으로 props를 전달하고 사용한다.
    - (ex. 동작과정 -> 홈페이지로 이동시, nextJS는 Home 컴포넌트를 render하기위해 _app.js의 인자 중 Component에 전달하고, nextJS는  getServerSideProps를 확인하고, 서버사이드렌더링 할꺼구나를 판단한 후, {…pageProps} 자리에  getServerSideProps함수의 return 값인 props를 넣는다.


- 하지만 서버사이드 렌더링을 할 경우, api가 돌아오기 전까지 화면에 아무것도 안보일 거라는 말을 뜻한다.
데이터가 유효할 때 화면이 보여지게 되는게 좋은지,? (loading화면 없이 api가 완료되도록 기다린 후에 모든 정보를 보여줄지)Vs loading화면을 보여준 다음에 데이터를 받는게 좋은지.? (Navbar, footer 그리고 가운데에 loading을 보여주는것)


```export async function getServerSideProps(){
    const url = `http://localhost:3000/api/movies`
    const response = await fetch(url)
    const {results} =  await response.json()
    return {
        props:{
            results
        }
    }
}
```
- Incognito 모드 ( 홈에서 클릭 후, 라우터를 타는게 아닌 url만 복사후, 다른 페이지에서 열기) 일 경우, 에러가 발생한다. 페이지가 백엔드에서 pre-render 되기 때문에. server에는 router.query.params가 존재 x


### 궁금했던 점. !

- || [] 추가를 안했을때 오류가 나는데, 추가하면 오류가 사라진다.

→ 혹시나 저처럼 왜 || [] 를 추가해주면 되는건지 궁금하신분들을 위해 남겨봅니다.

기본적으로 미리 렌더링이 되기때문에 먼저 html 파일이 내려온다는건 다들 아실겁니다. 이때 문제가 아직 js들이 다운로드가 안됐기 때문에 useRouter()로 정보를 제대로 가져오질 못하는 상태입니다. 그렇기 때문에 초기에는 빈 배열을 추가해줘서 오류가 발생하지 않도록 해주고, js가 내려가서 다시 렌더링하게되면 그 때는 빈 배열이 아닌 router.query.params에서 값을 가져와서 뿌려주는거죠.

정확하게 보고싶으신 분들은 검사 -> 네트워크 -> slow 3g 로 설정하신 후에 페이지 렌더링 확인하시면 먼저 html쪽 뜨고나서 js까지 모두 다운로드 된 후에야 title이 보이는걸 볼 수 있으실거예요.

Csr 일 경우, html이 내려오고 js 부분은 그려줘야하기 때문에 앤드 연산자가 필요하다. 하지만 ssr 일 경우, 서버에서 이미 html 파일을 다 그려서 내리기 때문에 그런 연산자가 필요없다.