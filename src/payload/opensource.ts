import { InterFaceOpensource } from '../components/opensource/InterFaceOpensource'

const opensource: InterFaceOpensource.Payload = {
    data: [
        {
            title : '개인 기술블로그',
            contents : [
                {
                    text: '2021년 하반기부터 기술 및 경험들을 꾸준히 작성하고 있습니다.',
                },
                {
                    text: '터득한 기술과 경험을 기록하지 않으면 다시 찾아봐야 하는 수고스러움을 알기 때문에 기록을 중요시 생각합니다.',
                },
                {
                    text: '영역의 한계를 두지 않고 다양한 기술들을 공부하고 있습니다.',
                },
                {
                    text: 'https://s-seongsik.github.io/',
                    link: 'https://s-seongsik.github.io/'
                },
            ],
        },
        {
            title : 'nuxtjs-resume',
            contents : [
                {
                    text: 'Nuxt.js와 vuetify로 만든 정적 웹 이력서 프로젝트입니다.',
                },
                {
                    text: '언제든 커스텀이 가능한 웹 이력서가 필요했기 때문에 직접 만들게 되었습니다.',
                },
                {
                    text: '모바일, 테블릿, 노트북, PC 등 다양한 디바이스에서도 접근할 수 있도록 모던 웹(반응형)에 신경썼습니다.',
                },
                {
                    text: '누구나 쉽게 사용할 수 있도록 간단하게 구현하고자 노력했습니다.',
                },
                {
                    text: 'To Github 저장소',
                    link: 'https://github.com/s-seongsik/nuxtjs-resume'
                }
                
            ],
        },
        {
            title : 'Willy will 일정 관리 앱',
            contents : [
                {
                    text: '네이티브 앱(안드로이드)을 개발해보고 구글플레이에 배포까지 하고싶어서 시작한 토이 프로젝트(5인) 입니다.',
                },
                {
                    text: '할일(To-do) 혹은 작업(Task) 정리를 도와주는 애플리케이션입니다.',
                },
                {
                    text: '실제 다양한 To-do 앱들을 직접 사용해보면서 부족한 기능들을 추가하여 개발하였습니다.(예, 목표달성 기능)',
                },
                {
                    text: '안드로이드 스튜디오, Java, Gradle, Sqlite로 개발을 진행했습니다.',
                },
                {
                    text: '협업은 Git, Github, GitHub Desktop으로 진행했습니다.',
                },
                {
                    text: '일정 추가 화면 개발을 담당하였습니다.',
                },
                {
                    text: 'To Google play',
                    link: 'https://play.google.com/store/apps/details?id=com.willy.will'
                },
            ],
        },
    ]
}


export default opensource;