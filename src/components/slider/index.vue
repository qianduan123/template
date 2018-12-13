<template>
    <div class="sidebar">
        <el-menu class="sidebar-el-menu" :default-active="onRoutes" :collapse="collapse" background-color="#324157"
            text-color="#bfcbd9" active-text-color="#20a0ff" unique-opened router>
            <template v-for="item in items">
                <template v-if="item.subs">
                    <el-submenu :index="item.index" :key="item.index">
                        <template slot="title">
                            <i :class="item.icon? item.icon: 'el-icon-loading'"></i><span slot="title">{{ item.title }}</span>
                        </template>
                        <template v-for="subItem in item.subs">
                            <el-menu-item :index="subItem.index" :key="subItem.index">
                                {{ subItem.title }}
                            </el-menu-item>
                        </template>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index" :key="item.index">
                        <i :class="item.icon? item.icon: 'el-icon-loading'"></i><span slot="title">{{ item.title }}</span>
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
    import middle from '@/components/middleware';
    export default {
        data() {
            return {
                collapse: false,
                items: [
                    {
                        icon: 'el-icon-document',
                        index: '/',
                        title: '首页'
                    },
                    {
                        icon: 'el-icon-menu',
                        index: 'example',
                        title: '示例'
                    },
                    {
                        icon: 'el-icon-menu',
                        index: 'tabs',
                        title: '暂无'
                    },
                    {
                        icon: 'el-icon-menu',
                        index: '3',
                        title: '暂无',
                        subs: [
                            {
                                index: 'form',
                                title: '系统首页'
                            },
                            {
                                index: '3-2',
                                title: '系统首页',
                                subs: [
                                    {
                                        index: 'editor',
                                        title: '系统首页',
                                        subs: [
                                            {
                                                index: 'editor',
                                                title: '系统首页'
                                            },
                                            {
                                                index: 'markdown',
                                                title: '系统首页'
                                            },
                                        ]
                                    },
                                    {
                                        index: 'markdown',
                                        title: '系统首页'
                                    },
                                ]
                            },
                            {
                                index: 'upload',
                                title: '系统首页'
                            }
                        ]
                    },
                    {
                        icon: '',
                        index: 'icon',
                        title: '暂无'
                    },
                    {
                        icon: '',
                        index: 'charts',
                        title: '暂无'
                    },
                    {
                        icon: '',
                        index: 'drag',
                        title: '暂无'
                    },
                    {
                        icon: '',
                        index: '6',
                        title: '暂无',
                        subs: [
                            {
                                index: 'permission',
                                title: '系统首页'
                            },
                            {
                                index: '404',
                                title: '系统首页'
                            }
                        ]
                    }
                ]
            }
        },
        computed:{
            onRoutes(){
                return this.$route.path.replace('/','');
            }
        },
        created(){
            // 通过 Event Bus 进行组件间通信，来折叠侧边栏
            middle.$on('collapse', msg => {
                this.collapse = msg;
            })
        }
    }
</script>

<style scoped>
    .sidebar{
        display: block;
        position: absolute;
        left: 0;
        top: 70px;
        bottom:0;
        overflow-y: scroll;
    }
    .sidebar::-webkit-scrollbar{
        width: 0;
    }
    .sidebar-el-menu:not(.el-menu--collapse){
        width: 250px;
    }
    .sidebar > ul {
        height:100%;
    }
</style>