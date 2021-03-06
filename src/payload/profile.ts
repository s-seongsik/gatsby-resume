import { faEnvelope, faBook } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faBloggerB } from '@fortawesome/free-brands-svg-icons';
import {InterFaceProfile} from '../components/profile/InterFaceProfile'

const profile: InterFaceProfile.Payload= {
    name: ["๐งโ๐ป ์๋ํ์ธ์,", "์ ๋ ์์ฑ์์๋๋ค."],
    intro: [
        '3๋์ฐจ ์น ํ๋ก ํธ์๋ ์์ง๋์ด๋ก ์ผํ๊ณ  ์์ต๋๋ค.',
        '์ ๋ Team์ ์ฑ์ฅ์ ์ค์์ ํฉ๋๋ค. ๊ธฐ์ ์ ์์ฑ๋์ ๊ฒฌ๊ณ ํจ์ ๋๋ฃ์์ ๋์์๋ ์ปค๋ฎค๋์ผ์ด์๊ณผ ํผ๋๋ฐฑ์์ ๋ง๋ค์ด ์ง๋ค๊ณ  ๋ฏฟ๊ธฐ ๋๋ฌธ์๋๋ค.',
        '์ฝ๋ ๋ฆฌ๋ทฐ์ ๊ฐ์ ๊ธฐ์ ์  ํ ๋ก ์ ์ข์ํ๋ฉฐ, ๊ฐ๋ฐ ์ํ๊ณ์ ๊ฐ์ธ์ ์ฑ์ฅ์ ์ํด ๊ณต๋ถ๋ฅผ ๊ฒ์๋ฆฌํ์ง ์์ผ๋ฉฐ ์ด๋ฅผ ๊ธฐ๋กํ๋ ์ต๊ด์ ๊ฐ์ง๊ณ  ์์ต๋๋ค.',
        '์ค์ค๋ก์๊ฒ ๋์์์ด ์ง๋ฌธ์ ๋์ ธ ๋ต์ ๊ตฌํ๊ธฐ์ํด ๋ธ๋ ฅํ๋ฉฐ, ์๋๋ฐฉ์ ์ ํํ ์๋ํ์์ ์ํด ์ง๋ฌธํ๋ ๊ฒ์ ๋๋ ค์ ํ์ง ์์ต๋๋ค.',
        '๋ง์ง๋ง์ผ๋ก, ์ฃผ๋์ ์ผ๋ก ์ผํ  ์ ์๋ ํ๊ฒฝ์ ์ ํธํฉ๋๋ค.'
    ],
    contact: [
        {
            text : 'sungsik9831@gmail.com',
            icon : faEnvelope, 
        },
        {
            text : '๊นํ๋ธ',
            link : 'https://github.com/s-seongsik',
            icon : faGithub,
        },
        {
            text : '๊ธฐ์  ๋ธ๋ก๊ทธ',
            link : 'https://s-seongsik.github.io',
            icon : faBloggerB
        },
        {
            text : '๊ธฐ์  ํธ๋๋ถ',
            link : 'https://s-seongsik.github.io/sik-book/',
            icon : faBook
        },
    ]
}


export default profile;