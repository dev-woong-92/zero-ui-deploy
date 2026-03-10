export default function App() {
  const [current, setCurrent] = React.useState(0);

  const cards = [
    { title: "Product Designer", company: "야놀자", dday: "D-11", badge: "합격축하금", tag: "경력 2년↑" },
    { title: "UX Researcher", company: "카카오", dday: "D-5", badge: "합격축하금", tag: "경력 3년↑" },
    { title: "UI Designer", company: "네이버", dday: "D-20", badge: "합격축하금", tag: "신입 가능" },
    { title: "Brand Designer", company: "토스", dday: "D-3", badge: "합격축하금", tag: "경력 1년↑" },
    { title: "Motion Designer", company: "쿠팡", dday: "D-15", badge: "합격축하금", tag: "경력 2년↑" },
  ];

  const prev = () => setCurrent((c) => (c - 1 + cards.length) % cards.length);
  const next = () => setCurrent((c) => (c + 1) % cards.length);

  return (
    <div className="min-h-screen flex flex-col bg-[#f6f7f8]">
      {/* Header */}
      <header className="bg-white border-b border-[#e6e8ea] px-8 py-0 flex items-center justify-between" style={{ height: "60px" }}>
        <div className="flex items-center gap-8">
          <span className="text-[#1a1a1e] font-bold text-xl tracking-tight">JobBoard</span>
          <nav className="flex gap-6">
            {["채용", "커리어", "기업정보", "이력서"].map((item) => (
              <a key={item} href="#" className="text-[#575f6c] text-sm font-medium hover:text-[#1a1a1e] transition-colors">
                {item}
              </a>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <button className="text-[#575f6c] text-sm font-medium px-3 py-1.5 hover:text-[#1a1a1e] transition-colors">로그인</button>
          <button className="bg-[#1a1a1e] text-white text-sm font-medium px-4 py-1.5 rounded-lg hover:bg-[#333] transition-colors">회원가입</button>
        </div>
      </header>

      {/* Main */}
      <main className="flex-1 flex flex-col items-center justify-center py-12">
        <div className="text-center mb-8">
          <h2 className="text-[#1a1a1e] text-2xl font-bold mb-2">추천 채용공고</h2>
          <p className="text-[#575f6c] text-sm">나에게 딱 맞는 포지션을 찾아보세요</p>
        </div>

        {/* Carousel */}
        <div className="flex items-center gap-6">
          {/* Prev Button */}
          <button
            onClick={prev}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-[#e6e8ea] text-[#575f6c] hover:bg-[#f6f7f8] hover:text-[#1a1a1e] transition-colors shadow-sm"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* Card */}
          <div className="overflow-hidden" style={{ width: "358px" }}>
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {cards.map((card, i) => (
                <div key={i} className="flex-shrink-0" style={{ width: "358px" }}>
                  <div
                    className="flex flex-col justify-center gap-3 p-4 bg-[#ffffff] rounded-[10px]"
                    style={{ borderWidth: "1px", borderStyle: "solid", borderColor: "#e6e8ea", width: "358px" }}
                  >
                    <div className="flex justify-between gap-2 w-full">
                      <div className="flex flex-col w-full" style={{ gap: "2px" }}>
                        <span className="text-[#1a1a1e] font-semibold w-full" style={{ fontSize: "17px", lineHeight: "25px" }}>
                          {card.title}
                        </span>
                        <div className="flex items-center gap-2 w-full">
                          <span className="text-[#575f6c] text-sm font-normal" style={{ lineHeight: "20px" }}>{card.company}</span>
                          <span className="text-[#f37676] text-[11px] font-semibold" style={{ lineHeight: "15px" }}>{card.dday}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-1 w-full" style={{ height: "20px" }}>
                      <div
                        className="flex items-center justify-center rounded"
                        style={{ gap: "2px", paddingTop: "2px", paddingBottom: "2px", paddingLeft: "6px", paddingRight: "6px", borderWidth: "1px", borderStyle: "solid", borderColor: "#e6e8ea", height: "20px" }}
                      >
                        <span className="text-[#c2c6cd] text-[11px] font-semibold" style={{ lineHeight: "18px" }}>AD</span>
                      </div>
                      <div
                        className="flex items-center justify-center bg-[#faf9ec] rounded"
                        style={{ gap: "2px", paddingTop: "2px", paddingBottom: "2px", paddingLeft: "6px", paddingRight: "6px", height: "20px" }}
                      >
                        <span className="text-[#f0b500] text-[11px] font-semibold" style={{ lineHeight: "18px" }}>{card.badge}</span>
                      </div>
                      <div
                        className="flex items-center justify-center bg-[#f6f7f8] rounded"
                        style={{ gap: "2px", paddingTop: "2px", paddingBottom: "2px", paddingLeft: "6px", paddingRight: "6px", height: "20px" }}
                      >
                        <span className="text-[#afb5be] text-[11px] font-semibold" style={{ lineHeight: "18px" }}>{card.tag}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={next}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-[#e6e8ea] text-[#575f6c] hover:bg-[#f6f7f8] hover:text-[#1a1a1e] transition-colors shadow-sm"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>

        {/* Dots */}
        <div className="flex gap-2 mt-6">
          {cards.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="rounded-full transition-all duration-200"
              style={{
                width: i === current ? "20px" : "8px",
                height: "8px",
                backgroundColor: i === current ? "#1a1a1e" : "#c2c6cd",
              }}
            />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-[#e6e8ea] px-8 py-6">
        <div className="max-w-5xl mx-auto flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <span className="text-[#1a1a1e] font-bold text-base">JobBoard</span>
            <div className="flex gap-6">
              {["이용약관", "개인정보처리방침", "고객센터", "공지사항"].map((item) => (
                <a key={item} href="#" className="text-[#575f6c] text-xs hover:text-[#1a1a1e] transition-colors">
                  {item}
                </a>
              ))}
            </div>
          </div>
          <p className="text-[#afb5be] text-xs">© 2026 JobBoard. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}