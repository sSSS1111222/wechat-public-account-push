/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx5411346931aad8a2',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '812f1194ef6bffd8ec3effcd7a78f32a',

  PROVINCE: '甘肃省',
  CITY: '张掖市',

  USERS: [
    {
      // 想要发送的人的名字
      name: '吊毛',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oVrTp6W5iXfvYbGCRDq-uEEH3zz0',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'Aq-_e7BZY48qWry1lEODtCt1cPgtpuVOk2Gi_qamo9w',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '12-27',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '吊毛', year: '2002', date: '06-06',
        },
      ],
    },
    {
      name: '丫丫',
      id: 'oVrTp6dA4Z9IkiLckyCPKN3FPY8M',
      useTemplateId: 'Aq-_e7BZY48qWry1lEODtCt1cPgtpuVOk2Gi_qamo9w',
      province: '新疆',
      city: '乌鲁木齐市',
      horoscopeDate: '11-25',
      horoscopeDateType: '本月',
      openUrl: 'https://wangxinleo.cn',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '丫丫', year: '2002', date: '11-02',
        },
      ],
    },
     {
      name: '大宝',
      id: 'oVrTp6eGs0orhjWXsGWWz3ezdpY8',
      useTemplateId: 'Aq-_e7BZY48qWry1lEODtCt1cPgtpuVOk2Gi_qamo9w',
      province: '新疆',
      city: '乌鲁木齐市',
      horoscopeDate: '11-01',
      horoscopeDateType: '本月',
      openUrl: 'https://wangxinleo.cn',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '大宝', year: '2002', date: '10-08',
        },
      ],
    },
  ]
  

 }

module.exports = USER_CONFIG
