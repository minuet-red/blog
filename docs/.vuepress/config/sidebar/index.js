//侧边栏
module.exports = {
    '/views/': [
        '',
        {
            title: '前端',
            collapsable: false,
            children: [
                'frontend/vuepress',
                'frontend/前端大白话',
            ]
        },
        {
            title: '后端',
            collapsable: false,
            children: [
                'backend/数据库',
            ]
        },
        {
            title: 'BlockChain',
            collapsable: false,
            children: [
                'BlockChain/move',
                'BlockChain/rust',
                'BlockChain/solidity',
            ]
        },
        {
            title: '生活',
            collapsable: false,
            children: [
                'life/game',
                'life/food',
                'life/enjoy',
                'life/travel',
                'life/书籍',
                'life/影视',
            ]
        },
        {
            title: '交易',
            collapsable: false,
            children: [
                'trade/世界观',
                'trade/投资观',
                'trade/投资技术',
            ]
        },
        {
            title: '外语',
            collapsable: false,
            children: [
                'language/英语',
                'language/日语',
            ]
        },
    ]
}
