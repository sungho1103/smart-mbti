# Smart MBTI 🧠

MBTI 성격유형 검사 웹앱 - AI 맞춤 조언 포함

## 기능

- 20개 질문으로 MBTI 유형 판별
- - 16가지 MBTI 유형별 설명
  - - 관심 키워드(연애, 직장생활 등) 선택 시 OpenAI 기반 AI 맞춤 조언
   
    - ## 기술 스택
   
    - - Next.js 14 (App Router)
      - - TypeScript
        - - Tailwind CSS
          - - Framer Motion
            - - OpenAI API (GPT-4o-mini)
             
              - ## 시작하기
             
              - ```bash
                npm install
                ```

                `.env.local` 파일을 생성하고 OpenAI API 키를 추가:

                ```
                OPENAI_API_KEY=sk-your-api-key-here
                ```

                개발 서버 실행:

                ```bash
                npm run dev
                ```

                http://localhost:3000 에서 확인
