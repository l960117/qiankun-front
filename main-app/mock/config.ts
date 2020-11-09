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
      {
        name: 'ims',
        entry: '//localhost:8889'
      },
      {
        name: 'live',
        entry: '//tv.woniubaoxianyiyuan.com'
      }
    ],
    routes: [
      {
        name: 'live',
        path: '/live',
        routes: [
          {
            name: 'liveList',
            path: '/live/liveList'
          },
          {
            name: 'customer',
            path: '/live/customer/index'
          }
        ]
      },
      {
        name: 'main1',
        path: '/ims/index'
      },
      {
        name: 'config',
        path: '/ims/config',
        routes: [
          {
            name: 'productBaseConfig',
            path: '/ims/config/product-base-config'
          },
          {
            name: 'productConfig',
            path: '/ims/config/product-config'
          },
          {
            name: 'mapping',
            routes: [
              {
                name: 'professionManage',
                path: '/ims/config/profession-manage'
              },
              {
                name: 'areaManage',
                path: '/ims/config/area-manage'
              },
              {
                name: 'region',
                path: '/ims/config/region'
              }
            ]
          },
          {
            name: 'baseManage',
            routes: [
              {
                name: 'baseArea',
                path: '/ims/config/base-area'
              },
              {
                name: 'baseBank',
                path: '/ims/config/base-bank'
              },
              {
                name: 'baseChannel',
                path: '/ims/config/base-channel'
              },
              {
                name: 'baseWidget',
                path: '/ims/config/base-widget'
              }
            ]
          }
        ]
      },
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
