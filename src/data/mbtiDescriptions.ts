export interface MbtiDescription {
    type: string;
    emoji: string;
    title: string;
    description: string;
}

export const mbtiDescriptions: Record<string, MbtiDescription> = {
    ISTJ: { type: "ISTJ", emoji: "📋", title: "청렴결백한 논리주의자", description: "책임감이 강하고 신뢰할 수 있으며, 체계적이고 꼼꼼한 성격입니다." },
    ISFJ: { type: "ISFJ", emoji: "🛡️", title: "용감한 수호자", description: "따뜻하고 헌신적이며, 주변 사람들을 세심하게 챙기는 성격입니다." },
    INFJ: { type: "INFJ", emoji: "🌟", title: "선의의 옹호자", description: "이상적이고 통찰력이 있으며, 깊은 공감 능력을 가진 성격입니다." },
    INTJ: { type: "INTJ", emoji: "🧩", title: "용의주도한 전략가", description: "독립적이고 전략적이며, 높은 기준을 가진 완벽주의자입니다." },
    ISTP: { type: "ISTP", emoji: "🔧", title: "만능 재주꾼", description: "논리적이고 실용적이며, 문제 해결을 즐기는 탐험가입니다." },
    ISFP: { type: "ISFP", emoji: "🎨", title: "호기심 많은 예술가", description: "온화하고 감성적이며, 자유로운 영혼의 소유자입니다." },
    INFP: { type: "INFP", emoji: "💫", title: "열정적인 중재자", description: "이상주의적이고 공감 능력이 뛰어나며, 내면의 가치를 중시합니다." },
    INTP: { type: "INTP", emoji: "🔬", title: "논리적인 사색가", description: "호기심이 많고 분석적이며, 지적 탐구를 즐기는 성격입니다." },
    ESTP: { type: "ESTP", emoji: "⚡", title: "모험을 즐기는 사업가", description: "에너지가 넘치고 현실적이며, 즉각적인 행동을 선호합니다." },
    ESFP: { type: "ESFP", emoji: "🎉", title: "자유로운 영혼의 연예인", description: "활발하고 사교적이며, 주변에 활기를 불어넣는 성격입니다." },
    ENFP: { type: "ENFP", emoji: "🦋", title: "재기발랄한 활동가", description: "열정적이고 창의적이며, 새로운 가능성을 탐색하는 것을 좋아합니다." },
    ENTP: { type: "ENTP", emoji: "💡", title: "뜨거운 논쟁을 즐기는 변론가", description: "똑똑하고 호기심이 많으며, 도전적인 토론을 즐기는 성격입니다." },
    ESTJ: { type: "ESTJ", emoji: "👔", title: "엄격한 관리자", description: "체계적이고 책임감이 강하며, 질서와 규칙을 중시하는 리더입니다." },
    ESFJ: { type: "ESFJ", emoji: "🤝", title: "사교적인 외교관", description: "친절하고 사교적이며, 조화로운 관계를 만들어가는 성격입니다." },
    ENFJ: { type: "ENFJ", emoji: "🌈", title: "정의로운 사회운동가", description: "카리스마 있고 공감 능력이 뛰어나며, 타인의 성장을 돕는 리더입니다." },
    ENTJ: { type: "ENTJ", emoji: "👑", title: "대담한 통솔자", description: "결단력 있고 전략적이며, 강한 리더십으로 목표를 달성하는 성격입니다." },
};
