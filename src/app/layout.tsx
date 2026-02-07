import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
        title: "Smart MBTI - 나의 MBTI 검사하기",
        description: "귀여운 MBTI 성격유형 검사와 AI 맞춤 조언",
};

export default function RootLayout({
        children,
}: Readonly<{
        children: React.ReactNode;
}>) {
        return (
                    <html lang="ko">
                                <head>
                                                <link
                                                                        href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap"
                                                                        rel="stylesheet"
                                                                    />
                                </head>
                                <body className="antialiased">{children}</body>
                    </html>
                );
}
