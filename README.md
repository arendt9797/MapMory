![header-logo](https://github.com/user-attachments/assets/d757aa18-56dd-4fb1-ae19-3b622a983b90) 
## MapMory

맵모리는 지도로 기억하자! 라는 말장난을 이용한 이름입니다. <br/>
사용자는 **여행계획**을 **지도**에 **표시**하고 **기억**할 수 있는 온라인 플랫폼 입니다.

<br/>

## 📁 프로젝트 구조

```
📦 Mapmory
├─ public
└─ src
   ├─ main.jsx
   ├─ App.jsx
   ├─ app
   │  ├─ ProtectedRouter.jsx
   │  └─ Router.jsx
   ├─ components
   │  ├─ commons
   │  ├─ features
   │  └─ layouts
   ├─ constants
   ├─ ilbs
   │  ├─ api
   │  ├─ hooks
   │  ├─ providers
   │  └─ utils
   ├─ pages
   └─ styles

```

<br/>

## ⚙ 주요 기능

- 여행 계획 작성: NAVER MAPS Api를 사용하여 여행 계획을 세울 수 있습니다.
- 지도 마커와 라인 표시: 날짜와 시간에 맞춰 숫자 마커를 생성하고 라인을 그려 사용자 편의성을 제공합니다.
- 데이터 관리: zustand와 tanstack Query를 사용하여 전역 상태 관리를 수월하게 합니다.

<br/>

## 페이지 구성

| 페이지                | 경로          | 설명                                  |
| --------------------- | ------------- | ------------------------------------- |
| 홈                    | `/`           | 홈화면 페이지                         |
| 여행 계획 생성 페이지 | `/createPlan` | 여행 계획 생성 페이지 (로그인 필요)   |
| 여행 계획 페이지      | `/myPlan`     | 여행 계획 리스트 페이지 (로그인 필요) |
| 여행 계획 상세 페이지 | `/detailPlan` | 여행 계획 상세 페이지 (로그인 필요)   |
| 로그인                | `/signIn`     | 사용자 로그인 페이지                  |
| 회원가입              | `/signUp`     | 새로운 사용자 등록 페이지             |

---

### 홈

![캡처](https://github.com/user-attachments/assets/22661912-aecb-484b-b2df-0b8d60eb5ab1)

### 여행 계획 생성 페이지

![캡처2](https://github.com/user-attachments/assets/8d343f48-c1a8-4592-b281-72c7f5df4505)

### 여행 계획 페이지

![localhost_5173_ (5)](https://github.com/user-attachments/assets/d296b4c9-3a14-4602-86d6-9cfdc39ffd50)

### 여행 계획 상세 페이지

![localhost_5173_myPlan](https://github.com/user-attachments/assets/0558824d-950c-4ad0-adca-b98e1fe3cc29)

### 로그인

![localhost_5173_ (7)](https://github.com/user-attachments/assets/e5e94d79-bf0c-482f-a2bb-12cb5d833b9d)

### 회원가입

![localhost_5173_ (8)](https://github.com/user-attachments/assets/133daa5e-d3c6-401a-b598-607c18a21a05)

## 🕶️ 기술 스택

#### **Deploy** <br/>

&emsp; <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel"/>

#### **FrontEnd** <br/>

&emsp; <img src="https://img.shields.io/badge/React_18.3.1-087ea4?style=for-the-badge&logo=React&logoColor=white" alt="React"/> <img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=000" alt="TypeScript"/> <img src="https://img.shields.io/badge/pnpm_10.3.0-F69220?style=for-the-badge&logo=pnpm&logoColor=fff" alt="PNPM" /> <img src="https://img.shields.io/badge/Tailwind CSS-06B6D4?style=for-the-badge&logo=Tailwind CSS&logoColor=white" alt="Tailwind CSS"/>

<br/>
<br/>

## 👩‍👩‍👧‍👧 프로젝트 멤버 소개

<table>
  <tbody>
    <tr>
      <td width="250px" align="center">
        <a href="https://github.com/hyerin-kang">
        <img src="https://github.com/hyerin-kang.png" width="70" alt="hyerin-kang"/>
        <br />
        <sub><b>hyerin-kang</b></sub>
        </a>
        <br />
      </td>
      <td width="250px" align="center">
        <a href="https://github.com/SuimKim">
        <img src="https://github.com/SuimKim.png" width="70" alt="SuimKim"/>
        <br />
        <sub><b>SuimKim</b></sub>
        </a>
        <br />
      </td>
      <td width="250px" align="center">
        <a href="https://github.com/arendt9797">
        <img src="https://github.com/arendt9797.png" width="70" alt="arendt9797"/>
        <br />
        <sub><b>arendt9797</b></sub>
        </a>
        <br />
      </td>
      <td width="250px" align="center">
        <a href="https://github.com/smileeeeely">
        <img src="https://github.com/smileeeeely.png" width="70" alt="smileeeeely"/>
        <br />
        <sub><b>smileeeeely</b></sub>
        </a>
        <br />
      </td>
      <td width="250px" align="center">
        <a href="https://github.com/LSJ0706">
        <img src="https://github.com/LSJ0706.png" width="70" alt="LSJ0706"/>
        <br />
        <sub><b>LSJ0706</b></sub>
        </a>
        <br />
      </td>
    </tr>
    <tr>
      <td align="center">
        홈 화면 구현 <br/>
        헤더 컴포넌트 구현 <br/>
      </td>
      <td align="center">
        나의 여행 계획 페이지 구현 <br/>
        공통 컴포넌트 구현 <br/>
      </td>
      <td align="center">
        여행 계획 생성 페이지 구현 <br/>
        naver map api 설정 <br/>
      </td>
      <td align="center">
        여행 계획 상세 페이지 구현 <br/>
        tanstackQuery 데이터 관리 <br/>
      </td>
      <td align="center">
        회원가입 / 로그인 페이지 구현 <br/>
        zustand 데이터 관리 <br/>
      </td>
    </tr>
    </tr>
  </tbody>
</table>

<br/>
<br/>

## 프로젝트 실행

```sh
$ git clone https://github.com/arendt9797/MapMory.git

$ pnpm install
$ pnpm dev
```

<br/>
<br/>

<br />
<br/>

## 📃 추가적인 프로젝트 문서

#### [<img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white" alt="Figma" /> 피그마 Link](https://www.figma.com/design/j3pTduv07fFH6r15du69Gh/Outsourcing?node-id=0-1&t=C1LLWrqMEyaLys3Y-0)

#### [<img src="https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=notion&logoColor=white" alt="Notion" /> 노션 Link](https://teamsparta.notion.site/11-_-19f2dc3ef5148000b1a1ef78af60f68e)

#### 배포된 링크 : [Vercel]()
