import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: Request) {
    try {
          const { mbtiType, keyword } = await request.json();

      if (!mbtiType || !keyword) {
              return NextResponse.json(
                { error: "mbtiType and keyword are required" },
                { status: 400 }
                      );
      }

      if (!process.env.OPENAI_API_KEY) {
              return NextResponse.json(
                { advice: `${mbtiType} 유형의 ${keyword}에 대한 조언: API 키가 설정되지 않았습니다. .env.local 파일에 OPENAI_API_KEY를 설정해주세요.` },
                { status: 200 }
                      );
      }

      const completion = await openai.chat.completions.create({
              model: "gpt-4o-mini",
              messages: [
                {
                            role: "system",
                            content: "당신은 MBTI 성격유형 전문 상담사입니다. 따뜻하고 친근한 말투로 조언해주세요. 한국어로 답변하며, 이모지를 적절히 사용해주세요. 답변은 300자 내외로 간결하게 해주세요.",
                },
                {
                            role: "user",
                            content: `MBTI 유형이 ${mbtiType}인 사람에게 "${keyword}"에 대한 특성과 조언을 해주세요. 해당 유형의 강점과 주의할 점을 포함해주세요.`,
                },
                      ],
              max_tokens: 500,
              temperature: 0.7,
      });

      const advice = completion.choices[0]?.message?.content || "조언을 생성할 수 없습니다.";

      return NextResponse.json({ advice });
    } catch (error: unknown) {
          console.error("OpenAI API Error:", error);
          const errorMessage = error instanceof Error ? error.message : "Unknown error";
          return NextResponse.json(
            { advice: "죄송합니다. AI 조언을 가져오는 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요." },
            { status: 500 }
                );
    }
}
