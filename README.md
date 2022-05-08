# Gatsby-resume 버전

## 빌드 및 셋업

```bash
# install dependencies
$ npm install

# package.json > script > dev에서 port 변경하면 됨. (default: 3000)
$ npm run dev

# 프로덕트 App 배포
$ npm run build

# build된 App으로 서버 실행
$ npm run serve

# 연결된 리모트 저장소에 gh-pages 브랜치로 build app 배포
$ npm run deploy
```

<br>

## Git Repository Name 셋팅

* ./gatsby-config.ts
* pathPrefix에 `Repository Name` 입력

```ts
const config: GatsbyConfig = {
  pathPrefix: `/g-resume`,
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    `gatsby-theme-material-ui`,
    `gatsby-plugin-sass`  
  ],
}

```

<br>

## 프로젝트 구조 설명

* payload에서 각 컴포넌트별로 데이터만 수정하면 된다.

```
.
src
├── assets                 
│   ├── global.scss // 글로벌 css
│   └── variables.css // 컴포넌트에 사용되는 모든 css가 들어있음.
├── components                 
│   ├── certifiacate // 자격증 컴포넌트
│   │   ├── index.tsx   
│   │   └── interFaceCertificate.ts
│   ├── common  // 공통 컴포넌트 인터페이스
│   │   └── interFaceCommon.ts
│   ├── education // 교육 컴포넌트
│   │   ├── index.tsx   
│   │   └── interFaceEducation.ts
│   ├── experience // 경험 컴포넌트
│   │   ├── index.tsx   
│   │   └── interFaceExperience.ts
│   ├── opensource // 오픈소스 컴포넌트
│   │   ├── index.tsx   
│   │   └── interFaceOpensource.ts
│   ├── profile // 프로필 컴포넌트
│   │   ├── index.tsx   
│   │   └── interFaceProfile.ts
│   └── skill // 스킬 컴포넌트
│       ├── index.tsx   
│       └── interFaceSkill.ts
...
└── payload
    ├── certifiacate.ts // 자격증 payload 
    ├── education.ts // 교육 payload      
    ├── experience.ts // 경험 payload  
    ├── opensource.ts // 오픈소스 payload       
    ├── profile.ts // 프로필 payload 
    └── skill.ts // 스킬 payload 
```