<template>
  <!-- ナビゲーションバー -->
  <nav class="flex flex-col relative w-screen">
    <div
      id="menu"
      class="bg-gray-900 min-h-screen z-10 text-slate-300 w-64 fixed left-0 h-screen overflow-y-scroll"
    >
      <div id="title" class="my-4 px-6">
        <h1 class="text-lg md:text-2xl font-bold text-white">
          <span class="text-jade-green">Io</span>'s Portfolio
        </h1>
        <p class="text-jade-green text-sm">Introduction and Works</p>
      </div>

      <div id="nav" class="w-full px-6">
        <!-- 経歴 -->
        <a
          href="#background"
          class="w-full px-2 inline-flex space-x-2 items-center border-slate-700 py-3 hover:bg-jade-dark transition ease-linear duration-150"
        >
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-briefcase"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"
              ></path>
              <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2"></path>
              <path d="M12 12l0 .01"></path>
              <path d="M3 13a20 20 0 0 0 18 0"></path>
            </svg>
          </div>
          <div class="flex flex-col">
            <span class="text-lg font-bold leading-5 text-white"
              >Background</span
            >
            <span class="text-sm text-white/50 hidden md:block"
              >My personal history</span
            >
          </div>
        </a>
        <!-- 趣味 -->
        <a
          href="#interest"
          class="w-full px-2 inline-flex space-x-2 items-center border-slate-700 py-3 hover:bg-jade-dark transition ease-linear duration-150"
        >
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-books"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M5 4m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z"
              ></path>
              <path
                d="M9 4m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z"
              ></path>
              <path d="M5 8h4"></path>
              <path d="M9 16h4"></path>
              <path
                d="M13.803 4.56l2.184 -.53c.562 -.135 1.133 .19 1.282 .732l3.695 13.418a1.02 1.02 0 0 1 -.634 1.219l-.133 .041l-2.184 .53c-.562 .135 -1.133 -.19 -1.282 -.732l-3.695 -13.418a1.02 1.02 0 0 1 .634 -1.219l.133 -.041z"
              ></path>
              <path d="M14 9l4 -1"></path>
              <path d="M16 16l3.923 -.98"></path>
            </svg>
          </div>
          <div class="flex flex-col">
            <span class="text-lg font-bold leading-5 text-white">Interest</span>
            <span class="text-sm text-white/50 hidden md:block"
              >My favorite things</span
            >
          </div>
        </a>
      </div>
    </div>
  </nav>
</template>
