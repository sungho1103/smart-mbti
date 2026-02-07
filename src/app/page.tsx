"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function Home() {
  const router = useRouter();

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="cute-card max-w-md w-full text-center"
      >
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-6xl mb-6"
        >
          🧠
        </motion.div>
        <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent mb-3">
          Smart MBTI
        </h1>
        <p className="text-gray-500 mb-2 text-lg">나의 성격유형을 알아보자!</p>
        <p className="text-gray-400 mb-8 text-sm">
          20개의 질문으로 당신의 MBTI를 분석하고
          <br />
          AI가 맞춤 조언을 해드려요 ✨
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => router.push("/quiz")}
          className="w-full py-4 bg-gradient-to-r from-pink-400 to-purple-400 text-white rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-shadow"
        >
          검사 시작하기 🚀
        </motion.button>
      </motion.div>
    </main>
  );
}
