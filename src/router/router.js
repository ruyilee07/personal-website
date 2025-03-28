import { createWebHashHistory, createRouter } from "vue-router";
import store from "../store/store";

const routes = [
    {
        path: "/",
        name: "landing",
        component: () => store.state.display.isMobile ? import("../components/Layout/mLayout.vue") : import("../components/Layout/layout.vue"),
        children: [
            {
                path: "",
                name: "home",
                component: () => store.state.display.isMobile ? import("../components/home/mHome.vue") : import("../components/home/home.vue")
            },
            {
                path: "essays",
                name: "essays",
                component: () => store.state.display.isMobile ? import("../components/essays/mEssays.vue") : import("../components/essays/essays.vue")
            },
            {
                path: "essay/:essayId",
                name: "essay",
                component: () => store.state.display.isMobile ? import("../components/essays/mEssayDetail.vue") : import("../components/essays/essayDetail.vue")
            },
            {
                path: "music",
                name: "music",
                component: () => store.state.display.isMobile ? import("../components/music/mMusic.vue") : import("../components/music/music.vue")
            },
            {
                path: "community",
                name: "community",
                component: () => store.state.display.isMobile ? import("../components/community/mCommunity.vue") : import("../components/community/community.vue")
            },
            {
                path: "about",
                name: "about",
                component: () => store.state.display.isMobile ? import("../components/about/mAbout.vue") : import("../components/about/about.vue")
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