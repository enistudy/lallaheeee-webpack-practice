[toc]

# Hello, Webpack! 

2020.01.05~ 2020.01.11



### ⛳️ 목표

1. webpack 설정 파일을 쉽게 분석하고
2. webpack 커스터마이징을 할 수 있다. 



### ☑️ TODO
- [X] 공식홈페이지 Getting Started
- [X] Babel과 Wepback을 이용한 ES6 환경 구축 1
- [ ] Babel과 Wepback을 이용한 ES6 환경 구축 2
- [ ] 깊이 있는 리액트 개발환경 구축하기



### 🥊 배워보자
- 웹팩을 왜 사용할까?
- ES7을 ES5 컴파일
- webpack-dev-server의 설치
- 모듈의 hot reload
- 프로덕션 설정을 만들고 Heroku, now.sh, GitHub 페이지 등에 배포
- SCSS, Less, Stylus 등 원하는 CSS 전처리를 일반 CSS를 컴파일
- webpack에 이미지와 SVG를 사용하는 방법 



---

### webpack

의존 관계에 있는 모듈들을 하나의 자바스크립트 파일로 번들링하는 모듈 번들러



### 💡 웹팩을 왜 사용할까?

다수의 자바스크립트 파일을 하나의 파일로 번들링하므로 html 파일에서 script 태그로 다수의 자바스크립트 파일을 로드해야하는 번거로움이 사라진다.

```html
<script src="sum.js"></script>
<script src="app.js"></script>
```

여러 파일로 분할된 자바스크립트 파일은 로딩 순서에 신경써야한다. 또 스크립트 태그가 많아질 경우 네트워크 비용이 들기 때문에 웹페이지 로딩 성능에도 좋지 않다. 또한 각 파일은 서로의 스코프를 침범하지 않아야 하는데 잘못 작성한 경우 변수 충돌의 위험도 있다. 



### Webpack 주요속성

- Entry
- Output
- Loader
- Plugin
- Resolve

##### Entry 

엔트리는 모듈의 의존성 그래프에서 시작점을 의미한다. 엔트리로부터 시작해 필요한 모듈을 로딩하고 하나의 파일로 묶는다. 

##### Output

엔트리에서 번들된 파일을 기록한다.

##### Loader

웹팩은 모든 파일을 모듈로 관리할 때, 자바스크립트만 이해할 수 있다. 자바스크립트가 아닌 파일은 웹팩이 이해할 수 있도록 변환해야하는데 로더가 그 일을 한다.  test와 use라는 두가지 속성이 있다. 

- test 변환할 파일 지정
- use 어떤 로더를 사용할지 설정한다 



##### plugins

로더가 모듈 단위로 처리하는 반면 플러그인은 번들된 결과물을 처리한다. 


## Reference
[훌륭한 프로그래머가 되고 싶다면 만들어야할 앱 8선](https://tagilog.tistory.com/579?fbclid=IwAR3VNuZqDucGJ-EFrIH8XKvstuPIgF_XvfylLo4TPD5xIRLYc-UaN2CP2-c)
[Webpack Getting Started](https://webpack.js.org/guides/getting-started/)
[Babel과 Wepback을 이용한 ES6 환경 구축](https://poiemaweb.com/es6-babel-webpack-2)
[깊이 있는 리액트 개발환경 구성하기](https://sujinlee.me/webpack-react-tutorial/)
