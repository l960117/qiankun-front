export default {
  '/api/config': {
    apps: [
      {
        name: 'sub-app-1',
        entry: '//localhost:8001',
      },
      {
        name: 'sub-app-2',
        entry: '//localhost:8002',
      },
      {
        name: 'vue-sub-app-1',
        entry: '//localhost:8003'
      },
      {
        name: 'vue-sub-app-2',
        entry: '//localhost:8004'
      },
    ],
    routes: [
      {
        name: 'vue-sub-app-1',
        path: '/vue-sub-app-1',
        routes: [
          {
            name: 'vue-sub-app-1-home',
            path: '/vue-sub-app-1/home'
          },
          {
            name: 'vue-sub-app-1-about',
            path: '/vue-sub-app-1/about'
          },
        ]
      },
      {
        name: 'vue-sub-app-2',
        path: '/vue-sub-app-2',
        routes: [
          {
            name: 'vue-sub-app-2-home1',
            path: '/vue-sub-app-2/home1'
          },
          {
            name: 'vue-sub-app-2-about1',
            path: '/vue-sub-app-2/about1'
          },
        ]
      },
      {
        name: 'sub-app-1',
        path: '/sub-app-1',
        routes: [
          {
            name: 'sub-app-1-first',
            path: '/sub-app-1/first',
          },
          {
            name: 'sub-app-1-second',
            path: '/sub-app-1/second',
          }
        ]
      },
      {
        name: 'sub-app-2',
        path: '/sub-app-2',
      }
    ],
  },
};
