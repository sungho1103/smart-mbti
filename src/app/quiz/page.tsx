"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { questions } from "@/data/questions";

export default function QuizPage() {
    const router = useRouter();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [answers, setAnswers] = useState<Record<number, "A" | "B">>({});

  const progress = ((currentIndex + 1) / questions.length) * 100;
    const currentQuestion = questions[currentIndex];

  const handleAnswer = (choice: "A" | "B") => {
        const newAnswers = { ...answers, [currentQuestion.id]: choice };
        setAnswers(newAnswers);

        if (currentIndex < questions.length - 1) {
                setCurrentIndex(currentIndex + 1);
        } else {
                const mbtiResult = calculateMBTI(newAnswers);
                router.push(`/result?type=${mbtiResult}`);
        }
  };

  const calculateMBTI = (allAnswers: Record<number, "A" | "B">) => {
        const dimensions = { EI: 0, SN: 0, TF: 0, JP: 0 };
        questions.forEach((q) => {
                if (allAnswers[q.id] === "A") {
                          dimensions[q.dimension] += 1;
                }
        });
        const e = dimensions.EI >= 3 ? "E" : "I";
        const s = dimensions.SN >= 3 ? "S" : "N";
        const t = dimensions.TF >= 3 ? "T" : "F";
        const j = dimensions.JP >= 3 ? "J" : "P";
        return `${e}${s}${t}${j}`;
  };

  const handlePrev = () => {
        if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  return (
        <main className="min-h-screen flex flex-col items-center justify-center p-4">
              <div className="cute-card max-w-lg w-full">
                {/* Progress Bar */}
                      <div className="mb-6">
                                <div className="flex justify-between text-sm text-gray-400 mb-2">
                                            <span>질문 {currentIndex + 1} / {questions.length}</span>span>
                                            <span>{Math.round(progress)}%</span>span>
                                </div>div>
                                <div className="w-full bg-gray-100 rounded-full h-3">
                                            <motion.div
                                                            className="bg-gradient-to-r from-pink-400 to-purple-400 h-3 rounded-full"
                                                            initial={{ width: 0 }}
                                                            animate={{ width: `${progress}%` }}
                                                            transition={{ duration: 0.3 }}
                                                          />
                                </div>div>
                      </div>div>
              
                {/* Question */}
                      <AnimatePresence mode="wait">
                                <motion.div
                                              key={currentIndex}
                                              initial={{ opacity: 0, x: 50 }}
                                              animate={{ opacity: 1, x: 0 }}
                                              exit={{ opacity: 0, x: -50 }}
                                              transition={{ duration: 0.3 }}
                                            >
                                            <h2 className="text-xl font-bold text-center mb-8 text-gray-700">
                                              {currentQuestion.text}
                                            </h2>h2>
                                
                                            <div className="space-y-4">
                                                          <motion.button
                                                                            whileHover={{ scale: 1.02 }}
                                                                            whileTap={{ scale: 0.98 }}
                                                                            onClick={() => handleAnswer("A")}
                                                                            className={`w-full p-4 rounded-2xl text-left transition-all border-2 ${
                                                                                                answers[currentQuestion.id] === "A"
                                                                                                  ? "border-pink-400 bg-pink-50"
                                                                                                  : "border-gray-100 bg-white hover:border-pink-200 hover:bg-pink-50/50"
                                                                            }`}
                                                                          >
                                                                          <span className="text-pink-400 font-bold mr-2">A.</span>span>
                                                            {currentQuestion.optionA}
                                                          </motion.button>motion.button>
                                            
                                                          <motion.button
                                                                            whileHover={{ scale: 1.02 }}
                                                                            whileTap={{ scale: 0.98 }}
                                                                            onClick={() => handleAnswer("B")}
                                                                            className={`w-full p-4 rounded-2xl text-left transition-all border-2 ${
                                                                                                answers[currentQuestion.id] === "B"
                                                                                                  ? "border-purple-400 bg-purple-50"
                                                                                                  : "border-gray-100 bg-white hover:border-purple-200 hover:bg-purple-50/50"
                                                                            }`}
                                                                          >
                                                                          <span className="text-purple-400 font-bold mr-2">B.</span>span>
                                                            {currentQuestion.optionB}
                                                          </motion.button>motion.button>
                                            </div>div>
                                </motion.div>motion.div>
                      </AnimatePresence>AnimatePresence>
              
                {/* Navigation */}
                {currentIndex > 0 && (
                    <motion.button
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  onClick={handlePrev}
                                  className="mt-6 text-gray-400 hover:text-gray-600 text-sm"
                                >
                                ← 이전 질문
                    </motion.button>motion.button>
                  )}
              </div>div>
        </main>main>
      );
}</main>
