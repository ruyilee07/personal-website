import { createWebHashHistory, createRouter } from "vue-router";
import store from "../store/store";
import Layout from "../components/Layout/layout.vue"
import mLayout from "../components/Layout/mLayout.vue"
import home from "../components/home/home.vue"
import essays from "../components/essays/essays.vue"
import essayDetail from "../components/essays/essayDetail.vue";
import music from "../components/music/music.vue"
import community from "../components/community/community.vue"
import about from "../components/about/about.vue"

const routes = [
    {
        path: "/",
        name: "landing",
        component: store.state.display.isMobile ? mLayout : Layout,
        children: [
            {
                path: "",
                name: "home",
                component: home
            },
            {
                path: "essays",
                name: "essays",
                component: essays
            },
            {
                path: "essay/:essayId",
                name: "essay",
                component: essayDetail
            },
            {
                path: "music",
                name: "music",
                component: music
            },
            {
                path: "community",
                name: "community",
                component: community
            },
            {
                path: "about",
                name: "about",
                component: about
            }
        ]
    },
];

const router = createRouter({
    history: createWebHashHistory('/personal-website/'),
    routes,
});

router.afterEach(() => {
    window.scrollTo(0, 0)
})

export default router;