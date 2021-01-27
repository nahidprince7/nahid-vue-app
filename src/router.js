import { createRouter ,createWebHistory} from "vue-router";

import Home from './pages/Home';
import DcHeros from './pages/DcHeros';
import Calender from './pages/Calender';
import Markdown from './pages/Markdown';
import Slider from './pages/Slider';

const routes = [
    { path: '/', component: Home },
    { path: '/dc-heros', component: DcHeros },
    { path: '/calender', component: Calender },
    { path: '/markdown', component: Markdown },
    { path: '/slider', component: Slider },
  ]

const router = createRouter({
    routes,
    history:createWebHistory(),
});
export default router;