import { InterFaceSkill } from '../components/skill/InterFaceSkill'

const skill: InterFaceSkill.Payload = {
    data: [
        {
            title: "Work Attitudes",
            contents : [
                {
                    text: '공동의 목표를 중요시 생각하며, 주도적으로 일할 수 있는 환경을 좋아합니다.',
                },
                {
                    text: '개발에 대한 자부심과 자신감이 있습니다. 또한, 책임감을 갖고 일을 합니다.',
                },
                {
                    text: '모호한 것을 싫어하며 분명하고 명확한 것을 선호합니다.',
                },
                {
                    text: '동료들의 피드백을 언제나 환영합니다.',
                },
            ],
        },
        {
            title: "Coworking",
            contents : [
                {
                    text: 'Git-Flow 방식과 Jira tickets으로 일하는 것을 선호합니다.',
                },
                {
                    text: '업무 요청은 구두와 이메일보다, 협업 툴(jandi 등)을 선호합니다.',
                },
            ],
        },
        {
            title: "Communication",
            contents : [
                {
                    text: '생각과 의견을 적극적으로 표현합니다.',
                },
                {
                    text: '상대방의 의도를 정확하게 파악하기 위해 질문과 대답을 확인하는 방식을 선호합니다.',
                },
            ],
        },
        {
            title: "FrontEnd",
            contents : [
                {
                    text: 'Javascript ES6+ 문법을 선호하며 다양한 브라우저 환경에 맞춰 웹 표준으로 개발할 수 있습니다.',
                },
                {
                    text: 'ES Modules의 모듈 시스템 방식의 개발을 선호하며 이에 적절한 도구를 사용할 수 있습니다.',
                },
                {
                    text: 'Node.js 개발 환경과 생태계에 익숙합니다.',
                },
                {
                    text: '자바스크립트 비동기 HTTP 통신 개발에 능숙하고 잘 다룰 수 있습니다.',
                },
                {
                    text: '재사용성을 고려해 공통 컴포넌트화 하는 것을 중요시 생각합니다. 또한, 리팩토링을 통해 클린 코드 및 개선을 중요하게 생각합니다.',
                },
                {
                    text: 'Vue.js와 Flux 패턴 기반 상태 관리 라이브러리 및 라우터를 모듈 단위로 사용할 수 있습니다. 또한, 컴포넌트 라이프사이클 훅을 이해하여 상황에 맞게 잘 적용할 수 있습니다.',
                },
            ],
        },
        {
            title: "BackEnd",
            contents : [
                {
                    text: 'FastAPI와 Express.js를 이용해 REST-API 서버를 구축한 경험이 있습니다. 따라서 프론트엔드와 백엔드 두 영역의 역할과 상호작용에 대해 잘 알고 있습니다.',
                },
                {
                    text: 'Json Web Token으로 사용자 인증 모듈을 개발한 경험이 있습니다. 이에따라 웹 저장소(쿠키, 세션스토리지, 로컬스토리지)에 대한 이해와 사용이 익숙합니다.',
                },
                {
                    text: 'Swagger를 사용하여 REST 웹 서비스를 문서화하여 개발하였습니다. 이를 통해 클라이언트 측의 개발 생상성 향상을 지원할 수 있습니다.',
                },
            ],
        },
        {
            title: "DevOps",
            contents : [
                {
                    text: 'Cloud와 Docker container 환경에 익숙하고 배포할 수 있습니다.',
                },
                {
                    text: 'MS-SQL, Mysql RDBMS 사용에 익숙하며 SQL, 프로시저 개발, 스키마 설계 등이 가능합니다.',
                },
                {
                    text: '매일 Git과 Github, Gitea으로 버전관리 및 호스팅을 사용하기 때문에 이를 다루는데 능숙하고 익숙합니다.',
                },
            ],
        }
    ]
}

export default skill;