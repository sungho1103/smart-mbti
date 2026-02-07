export interface Question {
    id: number;
    text: string;
    dimension: "EI" | "SN" | "TF" | "JP";
    optionA: string;
    optionB: string;
}

export const questions: Question[] = [
    // E/I 질문 (1-5)
  { id: 1, text: "모임이나 파티에 참석했을 때 나는?", dimension: "EI", optionA: "여러 사람과 대화하며 에너지를 얻는다", optionB: "소수의 사람과 깊은 대화를 선호한다" },
  { id: 2, text: "주말에 에너지를 충전하는 방법은?", dimension: "EI", optionA: "친구들과 만나서 놀기", optionB: "집에서 혼자만의 시간 보내기" },
  { id: 3, text: "새로운 사람을 만났을 때 나는?", dimension: "EI", optionA: "먼저 말을 걸고 적극적으로 다가간다", optionB: "상대방이 먼저 다가오길 기다린다" },
  { id: 4, text: "생각을 정리할 때 나는?", dimension: "EI", optionA: "다른 사람과 이야기하면서 정리한다", optionB: "혼자 조용히 생각하며 정리한다" },
  { id: 5, text: "전화가 울리면 나는?", dimension: "EI", optionA: "바로 전화를 받는 편이다", optionB: "가능하면 문자로 대체하고 싶다" },
    // S/N 질문 (6-10)
  { id: 6, text: "문제를 해결할 때 나는?", dimension: "SN", optionA: "현실적이고 구체적인 방법을 찾는다", optionB: "새롭고 창의적인 방법을 찾는다" },
  { id: 7, text: "여행 계획을 세울 때 나는?", dimension: "SN", optionA: "구체적인 일정과 장소를 미리 정한다", optionB: "대략적인 방향만 정하고 즉흥적으로 다닌다" },
  { id: 8, text: "이야기를 들을 때 나는?", dimension: "SN", optionA: "구체적인 사실과 세부사항에 집중한다", optionB: "전체적인 맥락과 숨은 의미를 찾는다" },
  { id: 9, text: "나를 더 잘 설명하는 것은?", dimension: "SN", optionA: "경험에서 배우는 현실주의자", optionB: "상상력이 풍부한 이상주의자" },
  { id: 10, text: "설명서를 받으면 나는?", dimension: "SN", optionA: "순서대로 차근차근 읽는다", optionB: "대충 훑어보고 직접 해본다" },
    // T/F 질문 (11-15)
  { id: 11, text: "결정을 내릴 때 나는?", dimension: "TF", optionA: "논리와 객관적 사실을 중시한다", optionB: "사람들의 감정과 상황을 중시한다" },
  { id: 12, text: "친구가 고민을 이야기하면 나는?", dimension: "TF", optionA: "해결책을 제시하려고 한다", optionB: "공감하고 들어주려고 한다" },
  { id: 13, text: "팀 프로젝트에서 갈등이 생기면?", dimension: "TF", optionA: "원칙과 공정성을 기준으로 해결한다", optionB: "팀원들의 감정을 고려하며 조율한다" },
  { id: 14, text: "비판을 받았을 때 나는?", dimension: "TF", optionA: "내용이 맞다면 수용한다", optionB: "말하는 방식이 중요하다고 느낀다" },
  { id: 15, text: "칭찬을 할 때 나는?", dimension: "TF", optionA: "구체적인 성과나 결과를 칭찬한다", optionB: "상대방의 노력과 마음을 칭찬한다" },
    // J/P 질문 (16-20)
  { id: 16, text: "일을 처리할 때 나는?", dimension: "JP", optionA: "계획을 세우고 순서대로 진행한다", optionB: "상황에 따라 유연하게 대처한다" },
  { id: 17, text: "마감 기한이 있는 과제를 할 때?", dimension: "JP", optionA: "미리미리 해두는 편이다", optionB: "마감 직전에 집중해서 하는 편이다" },
  { id: 18, text: "내 방이나 책상은?", dimension: "JP", optionA: "정리정돈이 잘 되어있다", optionB: "나만의 창의적 혼돈 속에 있다" },
  { id: 19, text: "약속을 정할 때 나는?", dimension: "JP", optionA: "미리 날짜와 시간을 정하고 싶다", optionB: "당일 분위기에 따라 정하고 싶다" },
  { id: 20, text: "하루 일과는?", dimension: "JP", optionA: "규칙적이고 예측 가능한 게 좋다", optionB: "변화와 새로움이 있는 게 좋다" },
  ];
