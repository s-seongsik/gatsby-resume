import { faEnvelope, faBook } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faBloggerB } from '@fortawesome/free-brands-svg-icons';
import {InterFaceProfile} from '../components/profile/InterFaceProfile'

const profile: InterFaceProfile.Payload= {
    name: ["🧑‍💻 안녕하세요,", "저는 서성식입니다."],
    intro: [
        '3년차 웹 프론트엔드 엔지니어로 일하고 있습니다.',
        '저는 Team의 성장을 중요시 합니다. 기술의 완성도와 견고함은 동료와의 끊임없는 커뮤니케이션과 피드백에서 만들어 진다고 믿기 때문입니다.',
        '코드 리뷰와 같은 기술적 토론을 좋아하며, 개발 생태계와 개인의 성장을 위해 공부를 게을리하지 않으며 이를 기록하는 습관을 가지고 있습니다.',
        '스스로에게 끊임없이 질문을 던져 답을 구하기위해 노력하며, 상대방의 정확한 의도파악을 위해 질문하는 것을 두려워 하지 않습니다.',
        '마지막으로, 주도적으로 일할 수 있는 환경을 선호합니다.'
    ],
    contact: [
        {
            text : 'sungsik9831@gmail.com',
            icon : faEnvelope, 
        },
        {
            text : '깃허브',
            link : 'https://github.com/s-seongsik',
            icon : faGithub,
        },
        {
            text : '기술 블로그',
            link : 'https://s-seongsik.github.io',
            icon : faBloggerB
        },
        {
            text : '기술 핸드북',
            link : 'https://s-seongsik.github.io/sik-book/',
            icon : faBook
        },
    ]
}


export default profile;