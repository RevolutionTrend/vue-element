
// import Home from './Home.vue';
// import About from './About.vue';
// import Devices from './status/Devices.vue';
// import System from './status/System.vue';

const routes = [{
    name: 'Home',
    path: '/',
    // component: Home
}, {
    name: 'Status',
    path: '/status',
    children: [{
        name: 'Devices',
        path: '/status/devices',
        // component: Devices
    }, {
        name: 'Devices',
        path: '/status/system',
        // component: System
    }]
}, {
    name: 'About',
    path: '/about',
    // component: About
}];

export { routes };