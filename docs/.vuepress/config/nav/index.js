//导航栏
module.exports = [
    {text: '首页', link: '/index.html', icon: 'reco-home'},
    {text: '项目', link: '/other/project', icon: 'reco-gitlab'},
    {text: '时间轴', link: '/timeline/', icon: 'reco-date'},
    {text: '关于我', link: '/about/', icon: 'reco-account'},
    {
        text: '快速导航', icon: 'reco-document',
        items: [
            {
                text: '✔ 友 链 →',
                link: '/other/friends',
            },
            {
                text: '在线刷题',
                items: [{
                    text: 'LeetCode',
                    link: 'https://leetcode.cn/',
                },{
                    text: '牛客网',
                    link: 'https://www.nowcoder.com/',
                }]
            },
            {
                text: '开发社区',
                items: [{
                    text: '掘金',
                    link: 'https://juejin.cn/',
                },{
                    text: 'Stack Overflow',
                    link: 'https://stackoverflow.com/',
                },{
                    text: 'GitHub',
                    link: 'https://github.com/',
                },{
                    text: 'Gitee',
                    link: 'https://gitee.com/',
                }]
            },
            {
                text: '框架类库',
                items: [{
                    text: 'Vue',
                    link: 'https://cn.vuejs.org/',
                },{
                    text: 'React',
                    link: 'https://zh-hans.reactjs.org/',
                },{
                    text: 'Bootstrap',
                    link: 'https://www.bootcss.com/',
                },{
                    text: 'Linux命令大全',
                    link: 'https://www.linuxcool.com/',
                }]
            },
            {
                text: '前端汇总',
                items: [{
                    text: '印记中文',
                    link: 'https://docschina.org/',
                },{
                    text: 'web前端导航',
                    link: 'http://www.alloyteam.com/nav/',
                }]
            }
        ]
    }
]
