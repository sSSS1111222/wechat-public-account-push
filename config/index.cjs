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
      useTemplateId: 'e0yVpo8Cn4qmhDTmX_p2aXU8j5Cv5wTyrkDERzhC_ew',
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
      name: '珊珊',
      id: 'ogIUX6KYkItKQt5MhRpAv9AFxc5w',
      useTemplateId: 'e0yVpo8Cn4qmhDTmX_p2aXU8j5Cv5wTyrkDERzhC_ew',
      province: '陕西省',
      city: '西安市',
      horoscopeDate: '12-11',
      horoscopeDateType: '本月',
      openUrl: 'https://wangxinleo.cn',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '珊珊', year: '2002', date: '11-18',
        },
      ],
      customizedDateList: [],
      courseSchedule: null
    },
    {
      name: '丫丫',
      id: 'oVrTp6dA4Z9IkiLckyCPKN3FPY8M',
      useTemplateId: 'e0yVpo8Cn4qmhDTmX_p2aXU8j5Cv5wTyrkDERzhC_ew',
      province: '新疆维吾尔自治区',
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
      customizedDateList: [],
      courseSchedule: null
    },
  ]
  
  // 接收成功回调消息的微信号，（一般来说只填自己的微信号, name填不填无所谓）
  CALLBACK_USERS: [
    {
      // 一般都填自己
      name: '自己',
      // 自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oVrTp6W5iXfvYbGCRDq-uEEH3zz0',
    }
    // 你可以不断按格式往下增加
    // ...
  ],
  
 }

module.exports = USER_CONFIG
