import {defaultTheme, defineUserConfig} from 'vuepress'
import {searchPlugin} from '@vuepress/plugin-search'
import {backToTopPlugin} from '@vuepress/plugin-back-to-top'
import {navbar} from '../navigation'

export default defineUserConfig({
    title: 'Codepedia',
    public: `docs/_public`,
    head: [['link', {rel: 'icon', href: '/images/favicon_blau.png'}]],
    theme: defaultTheme({
        navbar,
        sidebar: 'auto'
    }),
    plugins: [
        searchPlugin(),
        backToTopPlugin(),
    ],
})
