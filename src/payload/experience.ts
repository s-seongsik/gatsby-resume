import {InterFaceExperience} from '../components/experience/InterFaceExperience'

const experience: InterFaceExperience.Payload= {
    data: [
        {
            title : '쿡앱스',
            position : 'Web Developer',
            startDate : '2022. 06',
            endDate : '현재',
            project: [
                {
                    title:"BI 플랫폼 고도화 개발",
                    startDate: "2022.06",
                    endDate: "현재",
                    description: "쿡앱스 게임 및 고객 데이터를 수집 및 분석하여 전사적으로 활용할 수 있도록 BI 모니터링 플랫폼 개발을 진행",
                    role: [
                        "프론트엔드는 Vue3와 Typescirpt로 개발했으며, 패키지는 yarn으로 관리. 대시보드는 Echart.js를 활용하여 개발을 진행",
                        "백엔드는 Flask기반 데이터를 처리 및 가공하는 REST-API 서버로 대시보드 개발에 필요한 REST-API 개발",
                        "Git-flow, Github, Github Action으로 소스관리 및 Workflow 진행",
                        "Jira, Confluence, jandi로 팀내 협업"
                    ],
                    tech: "Vue3, Typescript, Yarn, Element plus, Tailwind CSS, HTML5, CSS, Flask, Docker"
                },
            ],
        },
        {
            title : '위즈코어',
            position : 'Web Developer',
            startDate : '2019. 12',
            endDate : '현재',
            project: [
                {
                    title:"Nexpom 플랫폼 개발",
                    startDate: "2019.07",
                    endDate: "2022.04",
                    description: "모니터링 시스템 플랫폼인 Nexpom 서비스 개발을 주 업무로 진행했습니다. 제조 데이터를 수집 및 가공하여 유의미한 데이터를 시각화하는 대시보드 개발을 담당했습니다. 데이터에 대한 이해가 수반되어야 고객들에게 유의미한 KPI를 제공하기 때문에 고객사의 도메인을 이해하려고 노력했습니다. 또한 고객에게 정확한 데이터를 제공해야 하므로 `정합성 검증`을 가장 중요시합니다.",
                    role: [
                        "각 데이터 특성에 맞는 시각화를 위한 데이터를 가공, 가공은 주로 SQL과 자바스크립트로 진행",
                        "프로덕트 디자이너와 협업하여 UX/UI 개발 및 인터랙션을 구현",
                        "주로 Echart.js, D3.js 라이브러리를 활용한 대시보드 개발",
                        "차트 뿐만 아니라 Data Table 시각화도 개발",
                        "고객사 서버에 직접 구축하기 때문에 OS(Windows, Linux)에 따른 배포진행",
                    ],
                    tech: "Jsp, Javascirpt, CSS, HTML, Echart.js, D3.js, Bootstrap, Mssql, Apache Tomcat"
                },
                {
                    title:"실적관리 시스템",
                    startDate: "2022. 01",
                    endDate: "2022. 04",
                    description: "위즈코어 임직원들의 일별 실적, 주간 실적, 프로젝트 및 실적 리포트를 관리하기 위한 서비스입니다. 1인 프로젝트로 서비스 개발을 진행했습니다.",
                    role: [
                        "Vue.js로 프론트엔드 기술환경 구성 및 기능구현",
                        "Vutify 프레임워크를 활용한 UX/UI 개발", 
                        "Vuex를 활용한 상태관리 및 서비스별 Store 구조화",
                        "axios 모듈을 활용한 HTTP 통신 개발",
                        "Express.js로 백엔드 Rest-api 서버 개발",
                        "cloud 환경과 docker 컨테이너 기반 app 배포"
                    ],
                    tech: "Vue.js, Vuetify, Vue-cli, Vue-router, Vuex, Axios, Express.js, Node.js, Gitea, Docker, Maria-DB"
                },
                {
                    title:"Demo Room Service",
                    startDate: "2021. 12",
                    endDate: "2022. 01",
                    description: "위즈코어 서비스를 외부적으로 설명 및 시연하기 위한 Demo Room을 런칭함, 키오스크를 통해 모니터링 시스템 화면을 전환을 해주는 REST-API 서버를 개발했습니다.",
                    role: [
                        "FastAPI로 REST-API 서버 구축",
                        "Swagger UI로 API 명세서 작성 및 팀 내 공유", 
                        "cloud 환경과 docker 컨테이너 기반 서버 배포"
                    ],
                    tech: "FastAPI, Swagger, Gitea, docker, cloud, Maria-DB"
                },
                {
                    title:"Wimo PaaS Service",
                    startDate: "2021.09",
                    endDate: "2021.12",
                    description: "Nexpom 서비스를 PaaS형태의 서비스로 전환하게 되면서 Wimo라는 서비스로 새롭게 탄생하였습니다. 이에 따라 Wimo 서비스에 사용되는 REST-API 서버를 개발했습니다.",
                    role: [
                        "기존 외부업체의 서버를 새로 개발하여 자체 관리로 전환",
                        "FastAPI로 REST-API 서버 구축",
                        "Swagger UI로 API 명세서 작성 및 팀 내 공유", 
                        "cloud 환경과 docker 컨테이너 기반 서버 배포"
                    ],
                    tech: "FastAPI, Swagger, Gitea, docker, cloud, Maria-DB"
                },
                
            ],
        },
    ]
}


export default experience;