/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx54c03cc5d0baeac2',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '0261b06cb394bfc1fdd309d989c08269',

  PROVINCE: '甘肃省',
  CITY: '张掖市',

  USERS: [
    {
      // 想要发送的人的名字
      name: '吊毛',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'ogIUX6HcSm0EdDQOuLRmXp_hx9sg',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'fD5ZOUfHpFwLWqXDhItegi_yIjSTpXbcv5Y1C9FgRZ4',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '12-27',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '宝贝', year: '2002', date: '06-06',
        },
      ],
    },
    {
      name: '珊珊',
      id: 'ogIUX6KYkItKQt5MhRpAv9AFxc5w',
      useTemplateId: 'fD5ZOUfHpFwLWqXDhItegi_yIjSTpXbcv5Y1C9FgRZ4',
      province: '散散心',
      city: '胡歌',
      horoscopeDate: '12-11',
      horoscopeDateType: '本月',
      openUrl: 'https://wangxinleo.cn',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '宝贝', year: '2002', date: '06-06',
        },
      ],
      customizedDateList: [],
      courseSchedule: null
    },
  ]
  
 }

module.exports = USER_CONFIG
