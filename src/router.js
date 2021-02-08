import { createRouter ,createWebHistory} from "vue-router";

import Home from './pages/Home';
import DcHeros from './pages/DcHeros';
import Calender from './pages/Calender';
import Markdown from './pages/Markdown';
import Slider from './pages/Slider';
import Calculator from './pages/Calculator';
import ReusableModal from './pages/ReusableModal';

const routes = [
    { path: '/', component: Home },
    { path: '/dc-heros', component: DcHeros },
    { path: '/calender', component: Calender },
    { path: '/markdown', component: Markdown },
    { path: '/slider', component: Slider },
    { path: '/calculator', component: Calculator },
    { path: '/reusable-modal', component: ReusableModal },
  ]

const router = createRouter({
    routes,
    history:createWebHistory(),
});
export default router;