"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useState, Suspense } from "react";
import { motion } from "framer-motion";
import { mbtiDescriptions } from "@/data/mbtiDescriptions";

const keywords = [
  { id: "love", label: "연애", emoji: "💕" },
  { id: "work", label: "직장생활", emoji: "💼" },
  { id: "friendship", label: "우정", emoji: "👫" },
  { id: "growth", label: "자기계발", emoji: "📚" },
  { id: "stress", label: "스트레스 관리", emoji: "🧘" },
  { id: "communication", label: "소통 방식", emoji: "💬" },
];

function ResultContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const mbtiType = searchParams.get("type") || "ENFP";
  const mbtiInfo = mbtiDescriptions[mbtiType];

  const [selectedKeyword, setSelectedKeyword] = useState<string | null>(null);
  const [advice, setAdvice] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const fetchAdvice = async (keyword: string) => {
    setSelectedKeyword(keyword);
    setLoading(true);
    setAdvice("");
    try {
      const keywordLabel = keywords.find((k) => k.id === keyword)?.label;
      const res = await fetch("/api/advice", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mbtiType, keyword: keywordLabel }),
      });
      const data = await res.json();
      setAdvice(data.advice);
    } catch (err) {
      setAdvice("조언을 가져오는 중 오류가 발생했습니다. 다시 시도해주세요.");
    }
    setLoading(false);
  };

  if (!mbtiInfo) {
    return <div>잘못된 MBTI 유형입니다.</div>;
  }

  return (
    <main className="min-h-screen flex flex-col items-center p-4 py-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="cute-card max-w-lg w-full text-center mb-6"
      >
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-6xl mb-4"
        >
          {mbtiInfo.emoji}
        </motion.div>
        <p className="text-gray-400 mb-2">당신의 MBTI는</p>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent mb-2">
          {mbtiType}
        </h1>
        <h2 className="text-xl font-medium text-gray-600 mb-4">
          {mbtiInfo.title}
        </h2>
        <p className="text-gray-500 leading-relaxed">{mbtiInfo.description}</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="cute-card max-w-lg w-full mb-6"
      >
        <h3 className="text-lg font-bold text-gray-700 mb-4 text-center">
          궁금한 키워드를 선택하세요 ✨
        </h3>
        <div className="grid grid-cols-2 gap-3">
          {keywords.map((kw) => (
            <motion.button
              key={kw.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => fetchAdvice(kw.id)}
              className={`p-3 rounded-2xl text-sm font-medium transition-all border-2 ${
                selectedKeyword === kw.id
                  ? "border-purple-400 bg-purple-50 text-purple-600"
                  : "border-gray-100 bg-white hover:border-purple-200 text-gray-600"
              }`}
            >
              <span className="text-lg">{kw.emoji}</span>
              <br />
              {kw.label}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {(loading || advice) && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="cute-card max-w-lg w-full mb-6"
        >
          <h3 className="text-lg font-bold text-gray-700 mb-4">
            🤖 AI 맞춤 조언
          </h3>
          {loading ? (
            <div className="flex items-center justify-center py-8">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                className="w-8 h-8 border-3 border-purple-200 border-t-purple-500 rounded-full"
              />
              <span className="ml-3 text-gray-400">AI가 분석 중이에요...</span>
            </div>
          ) : (
            <p className="text-gray-600 leading-relaxed whitespace-pre-line">
              {advice}
            </p>
          )}
        </motion.div>
      )}

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => router.push("/")}
        className="px-8 py-3 bg-gradient-to-r from-pink-400 to-purple-400 text-white rounded-2xl font-bold shadow-lg"
      >
        다시 검사하기 🔄
      </motion.button>
    </main>
  );
}

export default function ResultPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><p>로딩 중...</p></div>}>
      <ResultContent />
    </Suspense>
  );
}
