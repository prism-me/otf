export const MENUITEMS = [
    {
        title: 'About us',
        path: '/page/about-us',
        type: 'link'
    },
    {
        title: 'Memberships',
        path: '/layouts/portfolioLayouts',
        type: 'link'
    },
    {
        title: 'The Workout',
        path: '/layouts/portfolioLayouts',
        type: 'link'
    },
    {
        title: 'Offers',
        path: '/layouts/portfolioLayouts',
        type: 'link'
    },
    {
        title: 'Locations', type: 'sub', children: [
            { path: '/layouts/agency', title: 'Agency', type: 'link' },
            { path: '/layouts/app1', title: 'App Landing1', type: 'link' },
            { path: '/layouts/app2', title: 'App Landing2', type: 'link', },
            { path: '/layouts/event', title: 'Event', type: 'link' },
            { path: '/layouts/gym', title: 'Gym', type: 'link' },
            { path: '/layouts/music', title: 'Music', type: 'link' },
            { path: '/layouts/resume', title: 'Resume', type: 'link' },
            { path: '/layouts/modern-sass', title: 'Sass1', type: 'link' },
            { path: '/layouts/enterprice-sass', title: 'Sass2', type: 'link' },
            { path: '/layouts/wedding', title: 'Wedding', type: 'link' },
            { path: '/layouts/yoga', title: 'Yoga', type: 'link' },
            { path: '/layouts/portfolioLayouts', title: 'Portfolio', type: 'link' }
        ],
    },
    {
        title: 'Support',
        path: '/layouts/portfolioLayouts',
        type: 'link'
    },
]
