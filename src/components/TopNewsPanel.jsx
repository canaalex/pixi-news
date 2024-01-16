import SearchIcon from "../assets/icons/SearchIcon.jsx";

const TopNewsPanel = ({
  handleNews,
  newsData,
  searchWord,
  setSearchWord,
  selectedLanguage,
  handleSelectedLanguage,
}) => {
  const languageOptions = [
    { value: "ar", label: "Arabic" },
    { value: "de", label: "German" },
    { value: "en", label: "English" },
    { value: "es", label: "Spanish" },
    { value: "fr", label: "French" },
    { value: "he", label: "Hebrew" },
    { value: "it", label: "Italian" },
    { value: "nl", label: "Dutch" },
    { value: "no", label: "Norwegian" },
    { value: "pt", label: "Portuguese" },
    { value: "ru", label: "Russian" },
    { value: "sv", label: "Swedish" },
    { value: "ud", label: "Ukrainian" },
    { value: "zh", label: "Chinese" },
  ];

  return (
    <div className="p-4 md:p-6 w-full md:w-8/12 bg-black bg-opacity-20 backdrop-blur-xl  drop-shadow-lg rounded-3xl">
      <div className="flex justify-between">
        <div className="relative w-36 md:w-64">
          <input
            className="text-white w-full h-10 pl-8 pr-4 rounded-lg bg-black transition-all duration-300"
            value={searchWord}
            onChange={(event) => setSearchWord(event.target.value)}
            onKeyPress={handleNews}
          />
          <div className="absolute inset-y-0 left-0 pl-3 pr-3 flex items-center pointer-events-none">
            <SearchIcon width={20} height={20} className="text-white" />
          </div>
        </div>
        <select
          id="languageSelect"
          value={selectedLanguage}
          onChange={handleSelectedLanguage}
          className="bg-black text-white appearance-none text-sm rounded-lg block p-2"
        >
          {languageOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      {newsData.articles
        ? newsData.articles.slice(0, 4).map((article, index) => (
            <div
              key={index}
              className="p-3 flex flex-col md:flex-row bg-black bg-opacity-50 backdrop-blur-xl drop-shadow-lg rounded-lg text-white mt-4"
            >
              <div className="w-full md:w-1/6">
                <img
                  src={`${article.urlToImage}`}
                  alt="article"
                  className="w-full h-auto md:w-28 md:h-20"
                />
              </div>
              <div className="w-full md:w-5/6">
                <div className="text-white text-lg">{article.title}</div>
                <div className="text-slate-400 text-base">
                  {article.description}
                </div>
              </div>
            </div>
          ))
        : null}
    </div>
  );
};
export default TopNewsPanel;
