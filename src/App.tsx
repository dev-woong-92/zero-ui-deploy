export default function App() {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const cards = [
    { title: "Product Designer", company: "야놀자", dday: "D-11", badges: ["AD", "합격축하금", "경력 2년↑"] },
    { title: "UX Designer", company: "카카오", dday: "D-5", badges: ["합격축하금", "신입가능"] },
    { title: "UI Designer", company: "네이버", dday: "D-20", badges: ["AD", "경력 3년↑"] },
    { title: "Brand Designer", company: "쿠팡", dday: "D-3", badges: ["합격축하금"] },
    { title: "Visual Designer", company: "토스", dday: "D-8", badges: ["AD", "경력 2년↑"] },
  ];

  const visibleCount = 3;
  const maxIndex = cards.length - visibleCount;

  const prev = () => setCurrentIndex((i) => Math.max(i - 1, 0));
  const next = () => setCurrentIndex((i) => Math.min(i + 1, maxIndex));

  return (
    <div className="min-h-screen flex flex-col bg-[#f5f6f7]">
      {/* Header */}
      <header className="bg-white border-b border-[#e0e0e0]">
        {/* Top bar */}
        <div className="border-b border-[#f0f0f0]">
          <div className="max-w-[1200px] mx-auto px-4 flex justify-end items-center gap-4 py-1.5">
            <a className="text-[11px] text-[#888] hover:text-[#f0430e] cursor-pointer">로그인</a>
            <span className="text-[#ddd] text-[11px]">|</span>
            <a className="text-[11px] text-[#888] hover:text-[#f0430e] cursor-pointer">회원가입</a>
            <span className="text-[#ddd] text-[11px]">|</span>
            <a className="text-[11px] text-[#888] hover:text-[#f0430e] cursor-pointer">기업 서비스</a>
            <span className="text-[#ddd] text-[11px]">|</span>
            <a className="text-[11px] text-[#888] hover:text-[#f0430e] cursor-pointer">고객센터</a>
          </div>
        </div>

        {/* Logo + Search */}
        <div className="max-w-[1200px] mx-auto px-4 py-4 flex items-center gap-6">
          <div className="flex items-center gap-1 cursor-pointer">
            <span className="text-[28px] font-black text-[#f0430e] tracking-tight">JobKorea</span>
          </div>
          <div className="flex-1 max-w-[580px]">
            <div className="flex border-2 border-[#f0430e] rounded-sm overflow-hidden">
              <input
                type="text"
                placeholder="어떤 일을 찾고 계세요?"
                className="flex-1 px-4 py-2.5 text-sm outline-none text-[#333]"
              />
              <button className="bg-[#f0430e] px-5 text-white font-semibold text-sm hover:bg-[#d93a0c]">
                검색
              </button>
            </div>
          </div>
          <div className="flex gap-2 ml-auto">
            <button className="border border-[#f0430e] text-[#f0430e] text-sm px-4 py-2 rounded-sm hover:bg-[#fff5f3] font-medium">
              로그인
            </button>
            <button className="bg-[#f0430e] text-white text-sm px-4 py-2 rounded-sm hover:bg-[#d93a0c] font-medium">
              회원가입
            </button>
          </div>
        </div>

        {/* Navigation */}
        <div className="max-w-[1200px] mx-auto px-4">
          <nav className="flex gap-0">
            {["채용", "직군·직무", "커리어", "기업정보", "연봉", "커뮤니티", "이력서"].map((item, i) => (
              <a
                key={i}
                className={`px-5 py-3 text-sm font-medium cursor-pointer border-b-2 ${
                  i === 0
                    ? "border-[#f0430e] text-[#f0430e]"
                    : "border-transparent text-[#333] hover:text-[#f0430e]"
                }`}
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-[1200px] mx-auto w-full px-4 py-12">
        <div className="bg-white rounded-xl shadow-sm p-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-[20px] font-bold text-[#1a1a1e]">추천 채용공고</h2>
              <p className="text-sm text-[#888] mt-1">나에게 딱 맞는 포지션을 찾아보세요</p>
            </div>
            <a className="text-sm text-[#f0430e] font-medium hover:underline cursor-pointer">전체보기 →</a>
          </div>

          {/* Carousel */}
          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex gap-4 transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(calc(-${currentIndex} * (358px + 16px)))` }}
              >
                {cards.map((card, idx) => (
                  <div
                    key={idx}
                    className="flex-none flex flex-col justify-center gap-3 p-4 bg-[#ffffff] rounded-[10px] cursor-pointer hover:shadow-md transition-shadow"
                    style={{ borderWidth: "1px", borderStyle: "solid", borderColor: "#e6e8ea", width: "358px" }}
                  >
                    <div className="flex justify-between gap-2 w-full">
                      <div className="flex flex-col w-full" style={{ gap: "2px" }}>
                        <span className="text-[#1a1a1e] font-semibold w-full" style={{ fontSize: "17px", lineHeight: "25px" }}>
                          {card.title}
                        </span>
                        <div className="flex items-center gap-2 w-full">
                          <span className="text-[#575f6c] text-sm font-normal" style={{ lineHeight: "20px" }}>
                            {card.company}
                          </span>
                          <span className="text-[#f37676] text-[11px] font-semibold" style={{ lineHeight: "15px" }}>
                            {card.dday}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-1 w-full" style={{ height: "20px" }}>
                      {card.badges.map((badge, bi) => (
                        <div
                          key={bi}
                          className={`flex items-center justify-center rounded ${
                            badge === "합격축하금" ? "bg-[#faf9ec]" : badge === "AD" ? "" : "bg-[#f6f7f8]"
                          }`}
                          style={{
                            gap: "2px",
                            paddingTop: "2px",
                            paddingBottom: "2px",
                            paddingLeft: "6px",
                            paddingRight: "6px",
                            borderWidth: badge === "AD" ? "1px" : "0",
                            borderStyle: "solid",
                            borderColor: "#e6e8ea",
                            height: "20px",
                          }}
                        >
                          <span
                            className={`text-[11px] font-semibold ${
                              badge === "합격축하금" ? "text-[#f0b500]" : badge === "AD" ? "text-[#c2c6cd]" : "text-[#afb5be]"
                            }`}
                            style={{ lineHeight: "18px" }}
                          >
                            {badge}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Prev Button */}
            <button
              onClick={prev}
              disabled={currentIndex === 0}
              className="absolute -left-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md border border-[#e6e8ea] flex items-center justify-center hover:bg-[#f5f6f7] disabled:opacity-30 disabled:cursor-not-allowed transition-opacity"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M10 12L6 8L10 4" stroke="#333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {/* Next Button */}
            <button
              onClick={next}
              disabled={currentIndex >= maxIndex}
              className="absolute -right-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md border border-[#e6e8ea] flex items-center justify-center hover:bg-[#f5f6f7] disabled:opacity-30 disabled:cursor-not-allowed transition-opacity"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 4L10 8L6 12" stroke="#333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`rounded-full transition-all ${
                  i === currentIndex ? "w-5 h-2 bg-[#f0430e]" : "w-2 h-2 bg-[#e0e0e0]"
                }`}
              />
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#2d2d2d] text-[#999] text-xs">
        <div className="max-w-[1200px] mx-auto px-4 py-8">
          {/* Footer Links */}
          <div className="flex flex-wrap gap-x-5 gap-y-2 mb-6 pb-6 border-b border-[#444]">
            {["회사소개", "인재채용", "광고/제휴문의", "이용약관", "개인정보처리방침", "고객센터", "사이트맵"].map((link, i) => (
              <a key={i} className={`cursor-pointer hover:text-white ${i === 4 ? "font-bold text-[#bbb]" : ""}`}>
                {link}
              </a>
            ))}
          </div>

          {/* Company Info */}
          <div className="flex gap-8">
            <div>
              <span className="text-[18px] font-black text-[#f0430e] tracking-tight">JobKorea</span>
            </div>
            <div className="flex flex-col gap-1.5">
              <p>주식회사 사람인에이치알 | 대표이사 김용환 | 사업자등록번호 : 000-00-00000</p>
              <p>서울특별시 구로구 디지털로26길 123 | 고객센터 : 1588-0000 (평일 09:00~18:00)</p>
              <p className="mt-1 text-[#666]">Copyright © JobKorea Corp. All Rights Reserved.</p>
            </div>
          </div>

          {/* App Download */}
          <div className="flex gap-2 mt-6">
            <button className="flex items-center gap-2 bg-[#3d3d3d] hover:bg-[#4d4d4d] px-4 py-2 rounded text-[#ccc] text-xs transition-colors">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.7 9.05 7.4c1.3.07 2.2.75 2.96.78.65-.07 1.73-.82 3.24-.7 1.6.14 2.8.76 3.58 1.94-3.27 2-2.75 6.12.22 7.6zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
              </svg>
              App Store
            </button>
            <button className="flex items-center gap-2 bg-[#3d3d3d] hover:bg-[#4d4d4d] px-4 py-2 rounded text-[#ccc] text-xs transition-colors">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.18 23.76c.3.17.65.19.97.06L13.86 12 4.15.18c-.32-.13-.67-.11-.97.06C2.56.61 2.2 1.27 2.2 2v19.99c0 .73.36 1.4.98 1.77zM20.4 10.45l-2.5-1.44-3.19 3.19 3.19 3.19 2.55-1.47c.73-.42.73-1.45-.05-3.47zM4.8 1.17L14.6 11 11.47 14.1 4.8 1.17zm0 21.66L11.47 10l3.13 3.1L4.8 22.83z" />
              </svg>
              Google Play
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}