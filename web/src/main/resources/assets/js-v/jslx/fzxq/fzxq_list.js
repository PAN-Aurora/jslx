Vue.component('tab-menu', {
    props: ['menu','index',"pid"],
    methods: {
        //跳转方法
        gotoCd(url) {
            $("#mainFrame").attr("src", url );
        }
    },
    template:
        '<el-menu-item v-if="menu.url" v-bind:index="pid+index.toString()">  \n' +
        '<a style="font-size: 16px" v-on:click="gotoCd(menu.url)">{{menu.title}}</a>  \n' +
        '</el-menu-item>  \n' +
        '<el-submenu v-else v-bind:index="pid+index.toString()">  \n' +
        '<template slot="title">{{menu.title}}</template>  \n' +
        '<template v-if="menu.child" v-for="(m,i) in menu.child">\n' +
        '<tab-menu v-bind:menu="m" v-bind:index="i" v-bind:pid="pid+index.toString()"></tab-menu> \n' +
        ' </template>\n' +
        '</el-submenu>  \n'
});

var vm = new Vue({
    el: '#app',
    data: {
        activeIndex: 'A0',
        nowIndex: 0,
        //条码管理id
        menujson: [
            {title: "领域技术现状分析", url: "/views/jslx/fzxq/status_analysis_list.html"},
            {title: "国内外差距对比", url: "/views/jslx/fzxq/status_analysis_list.html"},
            {title: "需求要素分析", url: "/views/jslx/fzxq/status_analysis_list.html"},

        ]
    },

    methods: {
        //初始执行
        init() {
            setTimeout(function () {
                gotoCdTwo('/views/jslx/fzxq/status_analysis_list.html');
            }, 200);
        },
    },
    //页面加载最先执行方法
    mounted() {
        this.init();
    }
})

//跳转方法2
function gotoCdTwo(url) {
    $("#mainFrame").attr("src", url );
}

function handleSelect(key, keyPath) {
    // console.log(key, keyPath);
}

