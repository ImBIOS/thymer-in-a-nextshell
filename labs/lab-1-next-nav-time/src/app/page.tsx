export default function Index() {
  return (
    <>
      {/* Sidebar */}
      <div className="w-64 h-screen bg-[#191919] border-r border-gray-800 flex-shrink-0 overflow-y-auto">
        <div className="p-4 flex items-center">
          <div className="w-6 h-6 bg-gray-600 rounded-full mr-2"></div>
          <span className="font-medium">Stunf Workspace</span>
        </div>

        <div className="px-3 py-2 flex items-center text-gray-400 text-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mr-2"
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
          Search & Actions
        </div>

        <div className="px-3 py-2 flex items-center text-gray-400 text-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
          New...
        </div>

        <div className="px-3 py-2 flex items-center text-gray-400 text-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
          Home
        </div>

        <div className="mt-4">
          <div className="px-3 py-1 flex items-center justify-between text-gray-400 text-sm">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
              Collections
            </div>
          </div>

          <div className="pl-6 py-1 text-gray-400 text-sm flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              />
            </svg>
            Misc
          </div>

          <div className="pl-6 py-1 text-gray-400 text-sm flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2"
              />
            </svg>
            Servers
          </div>

          <div className="px-3 py-1 flex items-center text-gray-400 text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3 mr-1 transform rotate-90"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
            Trips
          </div>

          <div className="pl-6 py-1 text-gray-400 text-sm flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Japan
          </div>

          <div className="pl-6 py-1 text-gray-400 text-sm flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Maui
          </div>

          <div className="pl-6 py-1 bg-teal-600/30 text-teal-300 text-sm flex items-center rounded-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Bora Bora
          </div>

          <div className="pl-6 py-1 text-gray-400 text-sm flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Seychelles
          </div>

          <div className="px-3 py-1 flex items-center text-gray-400 text-sm mt-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3 mr-1 transform rotate-90"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
            Projects
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        {/* Header Image */}
        <div className="relative h-60 w-full">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-900/70 to-green-900/50 z-10"></div>
          <div className="absolute bottom-0 left-0 p-8 z-20">
            <div className="bg-gray-800/80 text-white text-sm px-3 py-1 rounded-full inline-block mb-4">
              ✈️ Trips
            </div>
            <h1 className="text-6xl font-bold text-white">Maui</h1>
          </div>
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1542259009477-d625272157b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
            }}
          ></div>
        </div>

        {/* Properties Section */}
        <div className="px-8 py-4 border-b border-gray-800">
          <h2 className="text-lg font-medium mb-4">Properties</h2>

          <div className="grid grid-cols-1 gap-4">
            <div className="flex items-center">
              <div className="w-24 text-gray-400">Date</div>
              <div>Tue Apr 8 - Fri May 23</div>
            </div>

            <div className="flex items-center">
              <div className="w-24 text-gray-400">Amount</div>
              <div>9</div>
            </div>

            <div className="flex items-center">
              <div className="w-24 text-gray-400">Weather</div>
              <div>☀️</div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="px-8 py-6">
          <p className="text-gray-300 mb-6">
            Unexpected situations can arise while traveling. Having a flexible
            mindset and backup plans ensures travelers can adapt to changes and
            make the most of their adventure. Staying informed about local news
            and weather conditions can help anticipate disruptions.
          </p>

          <p className="text-gray-300 mb-6">
            An itinerary helps travelers maximize their time by organizing
            activities and sightseeing efficiently. However, it is essential to
            allow room for spontaneity and unexpected discoveries.
          </p>

          <div className="flex items-center mb-2">
            <input
              type="checkbox"
              className="mr-2 h-4 w-4 rounded border-gray-600 bg-gray-700 text-teal-500 focus:ring-0"
            />
            <span>Book flights and accommodations.</span>
          </div>

          <p className="text-gray-300 my-6">
            Planning a trip requires thorough research to ensure a smooth and
            enjoyable experience. From choosing the right destination to
            understanding local customs, each step contributes to a memorable
            journey.
          </p>

          <div className="flex items-center mb-2">
            <input
              type="checkbox"
              className="mr-2 h-4 w-4 rounded border-gray-600 bg-gray-700 text-teal-500 focus:ring-0"
            />
            <span>Create a travel itinerary with key activities.</span>
          </div>

          <div className="flex items-center mb-2 ml-6">
            <input
              type="checkbox"
              className="mr-2 h-4 w-4 rounded border-gray-600 bg-gray-700 text-teal-500 focus:ring-0"
            />
            <span>Notify bank of travel dates to prevent card issues.</span>
          </div>

          <div className="flex items-center mb-2 ml-6">
            <input
              type="checkbox"
              className="mr-2 h-4 w-4 rounded border-gray-600 bg-gray-700 text-teal-500 focus:ring-0"
            />
            <span>Leave emergency contact details with family or friends.</span>
          </div>
        </div>
      </div>
    </>
  );
}
