// @ts-nocheck
import React from "react";

// ── CardTest Component (from library) ──────────────────────────────────────
const CardTest = () => (
  <div
    className="flex flex-col justify-center gap-3 p-4 bg-[#ffffff] rounded-[10px] flex-shrink-0"
    style={{
      borderWidth: "1px",
      borderStyle: "solid",
      borderColor: "#e6e8ea",
      width: "358px",
    }}
  >
    <div className="flex justify-between gap-2 w-full">
      <div className="flex flex-col w-full" style={{ gap: "2px" }}>
        <span
          className="text-[#1a1a1e] font-semibold w-full"
          style={{ fontSize: "17px", lineHeight: "25px" }}
        >
          Product Designer
        </span>
        <div className="flex items-center gap-2 w-full">
          <span
            className="text-[#575f6c] text-sm font-normal"
            style={{ lineHeight: "20px" }}
          >
            야놀자
          </span>
          <span
            className="text-[#f37676] text-[11px] font-semibold"
            style={{ lineHeight: "15px" }}
          >
            D-11
          </span>
        </div>
      </div>
    </div>
    <div className="flex gap-1 w-full" style={{ height: "20px" }}>
      <div
        className="flex items-center justify-center rounded"
        style={{
          gap: "2px",
          paddingTop: "2px",
          paddingBottom: "2px",
          paddingLeft: "6px",
          paddingRight: "6px",
          borderWidth: "1px",
          borderStyle: "solid",
          borderColor: "#e6e8ea",
          height: "20px",
        }}
      >
        <span
          className="text-[#c2c6cd] text-[11px] font-semibold"
          style={{ lineHeight: "18px" }}
        >
          AD
        </span>
      </div>
      <div
        className="flex items-center justify-center bg-[#faf9ec] rounded"
        style={{
          gap: "2px",
          paddingTop: "2px",
          paddingBottom: "2px",
          paddingLeft: "6px",
          paddingRight: "6px",
          height: "20px",
        }}
      >
        <span
          className="text-[#f0b500] text-[11px] font-semibold"
          style={{ lineHeight: "18px" }}
        >
          합격축하금
        </span>
      </div>
      <div
        className="flex items-center justify-center bg-[#f6f7f8] rounded"
        style={{
          gap: "2px",
          paddingTop: "2px",
          paddingBottom: "2px",
          paddingLeft: "6px",
          paddingRight: "6px",
          height: "20px",
        }}
      >
        <span
          className="text-[#afb5be] text-[11px] font-semibold"
          style={{ lineHeight: "18px" }}
        >
          경력 2년↑
        </span>
      </div>
    </div>
  </div>
);

// ── AIInsight Component (from library) ─────────────────────────────────────
const AIInsight = () => (
  <div className="flex flex-col" style={{ gap: "10px", width: "358px" }}>
    <div className="flex flex-col items-center justify-center w-full">
      <div className="relative overflow-hidden rounded-xl">
        <div className="absolute inset-0 z-0 overflow-hidden rounded-xl">
          <div
            className="rounded-xl"
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(179deg, transparent 0%, #ff74ac 30%, #feab3e 70%, transparent 100%)",
              opacity: 0.3,
              width: "358px",
              height: "337px",
            }}
          />
          <div
            className="rounded-xl"
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(179deg, transparent 0%, #ff74ac 30%, #feab3e 70%, transparent 100%)",
              opacity: 0.64,
              width: "358px",
              height: "337px",
            }}
          />
          <div
            className="rounded-xl"
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(179deg, transparent 0%, #ff74ac 30%, #feab3e 70%, transparent 100%)",
              width: "358px",
              height: "337px",
            }}
          />
        </div>
        <div
          className="flex flex-col bg-[#ffffff] rounded-xl"
          style={{
            position: "relative",
            zIndex: 10,
            gap: "10px",
            paddingTop: "20px",
            paddingBottom: "20px",
            paddingLeft: "16px",
            paddingRight: "16px",
            width: "358px",
          }}
        >
          <div
            className="flex flex-col gap-3"
            style={{ position: "relative", zIndex: 10, width: "326px" }}
          >
            <div className="flex flex-col gap-1 w-full">
              <div className="flex items-center gap-1 w-full">
                <span className="text-[#1a1a1e] font-bold text-base">
                  ✨ AI 인사이트
                </span>
              </div>
              <p className="text-[#575f6c] text-sm leading-5">
                나의 이력서를 기반으로 맞춤 채용 정보를 분석해 드립니다.
              </p>
            </div>
            <div className="flex flex-col gap-2 w-full">
              {[
                { label: "직무 적합도", value: 87, color: "#ff74ac" },
                { label: "경험 매칭률", value: 72, color: "#feab3e" },
                { label: "스킬 일치도", value: 94, color: "#7c6cf2" },
              ].map(
                (item: { label: string; value: number; color: string }, i: number) => (
                  <div key={i} className="flex flex-col gap-1">
                    <div className="flex justify-between items-center">
                      <span className="text-[#575f6c] text-xs font-medium">
                        {item.label}
                      </span>
                      <span
                        className="text-xs font-bold"
                        style={{ color: item.color }}
                      >
                        {item.value}%
                      </span>
                    </div>
                    <div className="w-full bg-[#f1f2f4] rounded-full h-1.5">
                      <div
                        className="h-1.5 rounded-full"
                        style={{
                          width: `${item.value}%`,
                          background: item.color,
                        }}
                      />
                    </div>
                  </div>
                )
              )}
            </div>
            <button
              className="w-full rounded-lg py-2.5 text-sm font-semibold text-white"
              style={{
                background:
                  "linear-gradient(90deg, #ff74ac 0%, #feab3e 100%)",
              }}
            >
              AI 맞춤 채용 보기
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// ── Carousel ───────────────────────────────────────────────────────────────
const cards = [
  { title: "Product Designer", company: "야놀자", dday: "D-11", tags: ["합격축하금", "경력 2년↑"] },
  { title: "UX Researcher", company: "카카오", dday: "D-5", tags: ["신입가능", "재택근무"] },
  { title: "UI Designer", company: "네이버", dday: "D-20", tags: ["합격축하금", "경력 3년↑"] },
  { title: "Brand Designer", company: "쿠팡", dday: "D-3", tags: ["신입가능"] },
  { title: "Motion Designer", company: "크래프톤", dday: "D-7", tags: ["합격축하금", "경력 1년↑"] },
];

const Carousel = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const isDragging = React.useRef(false);
  const startX = React.useRef(0);
  const scrollLeft = React.useRef(0);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    isDragging.current = true;
    startX.current = e.pageX - containerRef.current.offsetLeft;
    scrollLeft.current = containerRef.current.scrollLeft;
    containerRef.current.style.cursor = "grabbing";
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging.current || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.2;
    containerRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    if (!containerRef.current) return;
    containerRef.current.style.cursor = "grab";
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    startX.current = e.touches[0].pageX - containerRef.current.offsetLeft;
    scrollLeft.current = containerRef.current.scrollLeft;
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const x = e.touches[0].pageX - containerRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.2;
    containerRef.current.scrollLeft = scrollLeft.current - walk;
  };

  return (
    <div
      ref={containerRef}
      className="flex gap-3 overflow-x-auto select-none"
      style={{
        cursor: "grab",
        scrollbarWidth: "none",
        msOverflowStyle: "none",
        paddingBottom: "4px",
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      {cards.map((card: { title: string; company: string; dday: string; tags: string[] }, i: number) => (
        <div
          key={i}
          className="flex flex-col justify-center gap-3 p-4 bg-white rounded-[10px] flex-shrink-0"
          style={{
            borderWidth: "1px",
            borderStyle: "solid",
            borderColor: "#e6e8ea",
            width: "280px",
          }}
        >
          <div className="flex flex-col" style={{ gap: "2px" }}>
            <span
              className="text-[#1a1a1e] font-semibold"
              style={{ fontSize: "17px", lineHeight: "25px" }}
            >
              {card.title}
            </span>
            <div className="flex items-center gap-2">
              <span className="text-[#575f6c] text-sm font-normal">
                {card.company}
              </span>
              <span className="text-[#f37676] text-[11px] font-semibold">
                {card.dday}
              </span>
            </div>
          </div>
          <div className="flex gap-1" style={{ height: "20px" }}>
            <div
              className="flex items-center justify-center rounded"
              style={{
                padding: "2px 6px",
                borderWidth: "1px",
                borderStyle: "solid",
                borderColor: "#e6e8ea",
                height: "20px",
              }}
            >
              <span className="text-[#c2c6cd] text-[11px] font-semibold">
                AD
              </span>
            </div>
            {card.tags.map((tag: string, j: number) => (
              <div
                key={j}
                className="flex items-center justify-center bg-[#f6f7f8] rounded"
                style={{ padding: "2px 6px", height: "20px" }}
              >
                <span className="text-[#afb5be] text-[11px] font-semibold">
                  {tag}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

// ── Main App ───────────────────────────────────────────────────────────────
export default function App() {
  const navItems = ["채용정보", "기업정보", "이력서", "연봉정보", "커뮤니티", "인재풀"];

  return (
    <div className="min-h-screen flex flex-col bg-[#f7f8fa]">
      {/* ── Header ── */}
      <header className="bg-white border-b border-[#e6e8ea] sticky top-0 z-50">
        {/* Top util bar */}
        <div className="bg-[#f7f8fa] border-b border-[#e6e8ea]">
          <div className="max-w-[1200px] mx-auto px-4 h-8 flex items-center justify-end gap-4">
            {["로그인", "회원가입", "기업서비스"].map((item: string) => (
              <a
                key={item}
                href="#"
                className="text-[#575f6c] text-xs hover:text-[#347aff] transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
        {/* Main nav */}
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="flex items-center h-[60px] gap-8">
            {/* Logo */}
            <div className="flex items-center gap-1 flex-shrink-0">
              <div
                className="rounded font-extrabold text-white text-xl flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, #347aff 0%, #1a5cdb 100%)",
                  width: "36px",
                  height: "36px",
                }}
              >
                J
              </div>
              <span className="text-[#1a1a1e] font-extrabold text-xl tracking-tight">
                잡코리아
              </span>
            </div>
            {/* Nav items */}
            <nav className="flex items-center gap-1 flex-1">
              {navItems.map((item: string) => (
                <a
                  key={item}
                  href="#"
                  className="px-3 py-2 text-[#1a1a1e] text-sm font-medium hover:text-[#347aff] hover:bg-[#f0f5ff] rounded-md transition-colors whitespace-nowrap"
                >
                  {item}
                </a>
              ))}
            </nav>
            {/* CTA */}
            <div className="flex items-center gap-2 flex-shrink-0">
              <button className="px-4 py-2 text-sm font-semibold text-[#347aff] border border-[#347aff] rounded-lg hover:bg-[#f0f5ff] transition-colors">
                로그인
              </button>
              <button
                className="px-4 py-2 text-sm font-semibold text-white rounded-lg transition-colors"
                style={{ background: "#347aff" }}
              >
                회원가입
              </button>
            </div>
          </div>
          {/* Search bar */}
          <div className="pb-4">
            <div className="flex items-center bg-[#f7f8fa] border border-[#e6e8ea] rounded-xl overflow-hidden h-12 max-w-[600px]">
              <svg
                className="ml-4 flex-shrink-0 text-[#afb5be]"
                width="18"
                height="18"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                placeholder="직무, 회사, 키워드를 입력해 주세요"
                className="flex-1 px-3 bg-transparent text-sm text-[#1a1a1e] placeholder-[#afb5be] outline-none"
              />
              <button
                className="h-full px-5 text-sm font-semibold text-white flex-shrink-0"
                style={{ background: "#347aff" }}
              >
                검색
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ── Main Content ── */}
      <main className="flex-1">
        <div className="max-w-[1200px] mx-auto px-4 py-10">
          <div className="flex justify-center">
            {/* Single column content */}
            <div className="flex flex-col gap-6" style={{ width: "358px" }}>
              {/* Section title */}
              <div className="flex flex-col gap-1">
                <h2 className="text-[#1a1a1e] text-xl font-bold">
                  AI 맞춤 채용 추천
                </h2>
                <p className="text-[#575f6c] text-sm">
                  나에게 딱 맞는 채용 정보를 AI가 분석해 드려요
                </p>
              </div>

              {/* AIInsight Component */}
              <AIInsight />

              {/* CardTest Carousel */}
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-[#1a1a1e] text-base font-bold">
                    추천 공고
                  </h3>
                  <a
                    href="#"
                    className="text-[#347aff] text-xs font-medium hover:underline"
                  >
                    전체보기
                  </a>
                </div>
                <Carousel />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* ── Footer ── */}
      <footer className="bg-[#2d3540] text-white mt-auto">
        {/* Links section */}
        <div className="max-w-[1200px] mx-auto px-4 py-10">
          <div className="grid grid-cols-5 gap-8">
            {[
              {
                title: "채용정보",
                links: ["직종별채용", "지역별채용", "업종별채용", "신입채용", "경력채용"],
              },
              {
                title: "기업정보",
                links: ["기업검색", "기업리뷰", "연봉정보", "면접후기", "기업뉴스"],
              },
              {
                title: "이력서",
                links: ["이력서작성", "포트폴리오", "자소서", "이력서양식", "이력서첨삭"],
              },
              {
                title: "커뮤니티",
                links: ["취업토크", "자유게시판", "합격스펙", "면접질문", "직장인톡"],
              },
              {
                title: "고객센터",
                links: ["공지사항", "FAQ", "1:1문의", "이용약관", "개인정보처리방침"],
              },
            ].map((col: { title: string; links: string[] }) => (
              <div key={col.title} className="flex flex-col gap-3">
                <span className="text-white text-sm font-bold">{col.title}</span>
                <div className="flex flex-col gap-2">
                  {col.links.map((link: string) => (
                    <a
                      key={link}
                      href="#"
                      className="text-[#8d95a0] text-xs hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#404a57]">
          <div className="max-w-[1200px] mx-auto px-4 py-5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div
                className="rounded font-extrabold text-white text-sm flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, #347aff 0%, #1a5cdb 100%)",
                  width: "24px",
                  height: "24px",
                }}
              >
                J
              </div>
              <span className="text-[#8d95a0] text-xs">
                © 2026 잡코리아 Co., Ltd. All rights reserved.
              </span>
            </div>
            <div className="flex items-center gap-4">
              {["이용약관", "개인정보처리방침", "사업자정보확인"].map((item: string) => (
                <a
                  key={item}
                  href="#"
                  className="text-[#8d95a0] text-xs hover:text-white transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}