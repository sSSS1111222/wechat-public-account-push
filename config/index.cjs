/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wxcbff7f759c93bc26',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '85a35c630198c920c992966edea54f33',

  PROVINCE: '甘肃省',
  CITY: '白银市',

  USERS: [
    {
      // 想要发送的人的名字
      name: '苗苗',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oYBlV6PZjWXldRmY1PLEJb3pdOY8',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'SipjcKGFfZBatZ_XZZAtNxmLs9pwT76j6UAQhGpCNio',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '11-22',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '苗苗', year: '2004', date: '10-09',
        },
      ],
    },
    {
      name: '珊珊',
      id: 'oYBlV6DPQifoneILF4cFNgH0Kd8U',
      useTemplateId: '	SipjcKGFfZBatZ_XZZAtNxmLs9pwT76j6UAQhGpCNio',
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
    },
    
  ]
  

 }

module.exports = USER_CONFIG
