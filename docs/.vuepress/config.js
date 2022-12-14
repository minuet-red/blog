const nav = require('./config/nav/')
const sidebar = require('./config/sidebar/')
const plugins = require('./config/plugins/')

module.exports = {
    title: 'RunSilverçå°ç«',
    description: 'ð¯ðð\'ð ððððð , ðððððð.',
    port: 7777,
    // base: '/runsilver/',
    // dest: 'runsilver',
    theme: 'reco',
    themeConfig: {
        author: 'runsilver',
        logo: '/img/bronya.png',
        authorAvatar: '/img/bronya.png',
        type: 'blog',
        // åå®¢éç½®
        blogConfig: {
            category: {
                location: 2,     // å¨å¯¼èªæ èåä¸­æå çä½ç½®ï¼é»è®¤2
                text: 'åç±»' // é»è®¤ææ¡ âåç±»â
            },
            tag: {
                location: 3,     // å¨å¯¼èªæ èåä¸­æå çä½ç½®ï¼é»è®¤3
                text: 'æ ç­¾'      // é»è®¤ææ¡ âæ ç­¾â
            },
            // ä¿¡æ¯æ å±ç¤ºç¤¾äº¤ä¿¡æ¯
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
        // å½æ¨ä½¿ç¨é¼ æ æ»è½®æèè§¦æ¸æ¿æ»å¨æå¿å¨ Mac ä¸ä¸æ»å¨çªå£æµè§æ¶ï¼SmoothScroll è½æ¾èæåæ»å¨ç»é¢çæµçæ§ï¼è®©æ»å¨æä½åå¾æ´è·æãæ´é¡ºæ»ã
        smoothScroll: true,
        // æç´¢è®¾ç½®
        search: true,
        searchMaxSuggestions: 10,
        noFoundPageByTencent: false,
        // å³è¾¹çå¯¼èªæ 
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
                title: 'ProChickçå°ç«',
                desc: 'Struggle never stops, and progress never ends.',
                logo: "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
                link: 'https://www.prochick.top/'
            },
        ],
        //è¯è®º
        valineConfig: {
            appId: 'xbT4pPXCWQju5T7GXC5fUFlF-gzGzoHsz',
            appKey: 'bofA5chNQ60p37Ih9sMffSI0',
            placeholder: 'å¡«åé®ç®±å¯ä»¥æ¶å°åå¤å¦!',
            notify: true, // é®ä»¶æé
            verify: true, // éªè¯ç 
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