const App = () => {
  const cards = [
    { title: '디자인', description: '아름다운 UI 디자인', icon: '🎨' },
    { title: '개발', description: '깔끔한 코드 개발', icon: '⚙️' },
    { title: '배포', description: '빠른 배포 서비스', icon: '🚀' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-12 text-center">
          우리의 서비스
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 overflow-hidden"
            >
              <div className="h-32 bg-gradient-to-r from-blue-400 to-indigo-600 flex items-center justify-center">
                <span className="text-5xl">{card.icon}</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {card.description}
                </p>
                <button className="mt-4 w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition duration-200">
                  더 알아보기
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;