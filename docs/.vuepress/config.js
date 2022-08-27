const nav = require('./config/nav/')
const sidebar = require('./config/sidebar/')
const plugins = require('./config/plugins/')

module.exports = {
    title: 'RunSilver的小站',
    description: '𝕯𝖔𝖓\'𝖙 𝖙𝖗𝖚𝖘𝖙 , 𝖛𝖊𝖗𝖎𝖋𝖞.',
    port: 7777,
    // base: '/runsilver/',
    // dest: 'runsilver',
    theme: 'reco',
    themeConfig: {
        author: 'runsilver',
        logo: '/img/bronya.png',
        authorAvatar: '/img/bronya.png',
        type: 'blog',
        // 博客配置
        blogConfig: {
            category: {
                location: 2,     // 在导航栏菜单中所占的位置，默认2
                text: '分类' // 默认文案 “分类”
            },
            tag: {
                location: 3,     // 在导航栏菜单中所占的位置，默认3
                text: '标签'      // 默认文案 “标签”
            },
            // 信息栏展示社交信息
            socialLinks: [
                { icon: 'reco-github', link: 'https://github.com/' },
                { icon: 'reco-mayun', link: 'https://gitee.com' },
                { icon: 'reco-coding', link: 'https://www.nowcoder.com' },
                { icon: 'reco-bilibili', link: 'https://www.bilibili.com' },
                { icon: 'reco-twitter', link: 'https://www.twitter.com' },
                { icon: 'reco-linkedin', link: 'https://www.linkedin.cn/incareer/hp/' },
            ]
        },
        startYear: '2022',
        // 当您使用鼠标滚轮或者触摸板滑动手势在 Mac 上下滚动窗口浏览时，SmoothScroll 能显著提升滑动画面的流畅性，让滚动操作变得更跟手、更顺滑。
        smoothScroll: true,
        // 搜索设置
        search: true,
        searchMaxSuggestions: 10,
        noFoundPageByTencent: false,
        // 右边的导航栏
        // subSidebar: 'auto',
        nav,
        sidebar,
        sidebarDepth: 2,

        friendLink: [
            {
                title: 'reco',
                desc: 'A simple and beautiful vuepress Blog & Doc theme.',
                logo: "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
                link: 'https://vuepress-reco-doc.vercel.app/'
            },
            {
                title: 'elysia',
                desc: 'The future breaking out of shades from the past, Still ablaze.',
                logo: "/img/breast.jpeg",
                link: 'https://honkaiimpact3.hoyoverse.com/asia/en-us/home'
            },
            {
                title: 'ProChick的小站',
                desc: 'Struggle never stops, and progress never ends.',
                logo: "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
                link: 'https://www.prochick.top/'
            },
        ],
        //评论
        valineConfig: {
            appId: 'xbT4pPXCWQju5T7GXC5fUFlF-gzGzoHsz',
            appKey: 'bofA5chNQ60p37Ih9sMffSI0',
            placeholder: '填写邮箱可以收到回复哦!',
            notify: true, // 邮件提醒
            verify: true, // 验证码
            recordIP: true
        },
    },
    plugins,
    markdown: {
        lineNumbers: true
    },
    head: [
        ['link', { rel: 'icon', href: '/img/elysia.ico' }],
        ["script", { "language": "javascript", "type": "text/javascript", "src": "https://cdn.staticfile.org/jquery/1.7.2/jquery.min.js"}],
        ["script", { "language": "javascript", "type": "text/javascript", "src": "/js/MouseClickEffect.js"}],
    ]
}