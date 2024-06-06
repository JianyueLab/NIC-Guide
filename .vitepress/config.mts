import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "NIC Guide",
  description: "A website that explains school systems and school information.",
  lastUpdated: true,
  themeConfig: {
    nav: [
      { text: 'Home', link: '/'},
    ],

    sidebar: [
      {
        text: 'Orah',
        collapsed: false,
        items: [
          { text: 'Introduction', link: '/orah/' },
          { text: 'Pass Types', link: '/orah/pass'},
          { text: 'How to submit Pass', link: '/orah/how_to_submit_a_pass'},
        ],
      },
      {
        text: 'ManageBac',
        collapsed: false,
        items: [
          { text: 'Introduction', link: '/managebac/' },
          { text: 'Timetables', link: '/managebac/timetables' },
          { text: 'Tasks', link: '/managebac/tasks' },
          { text: 'Merits & Demerits', link: '/managebac/merit&demerit' },
        ],
      },
    ],

    search: {
      provider: 'local'
    },

    footer: {
      message: '<a href="https://creativecommons.org/licenses/by-nc/4.0/">Released under the CC BY-NC 4.0 Deed License.</a> Feel Free to copy and use information on this webpage.',
      copyright: 'Copyright © 2024 Jianyue Hugo Liang'
    }
  }
})
