import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "NIC Guide",
  description: "A website that explains school systems and school information.",
  lastUpdated: true,
  themeConfig: {
    nav: [
      { text: 'Home', link: '/'},
      { text: 'Orah', link: '/orah/'},
    ],

    sidebar: {
      '/orah/': {
        text: '',
        items: [
          { text: 'Index', link: '/orah/' },
          { text: 'Pass', link: '/orah/pass' },
          { text: 'How to submit a pass', link: '/orah/how_to_submit_a_pass'}
        ]
      },
    },

    search: {
      provider: 'local'
    },

    footer: {
      message: '<a href="https://creativecommons.org/licenses/by-nc/4.0/">Released under the CC BY-NC 4.0 Deed License.</a> Feel Free to copy and use information on this webpage.',
      copyright: 'Copyright © 2024 Jianyue Hugo Liang'
    }
  }
})
