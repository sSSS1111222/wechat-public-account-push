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
      // 扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'ogIUX6HcSm0EdDQOuLRmXp_hx9sg',
      // 你想对他发送的模板消息的模板ID
      useTemplateId: 'fD5ZOUfHpFwLWqXDhItegi_yIjSTpXbcv5Y1C9FgRZ4',
      // 所在省份
      province: '广东',
      // 所在城市
      city: '肇庆',
      // 新历生日, 仅用作获取星座运势, 格式必须
      horoscopeDate: '12-27',
      // 获取什么时候的星座运势，可选：['今日', '明日', '本周', '本月', '今年'], 留空则随机
      horoscopeDateType: '本月',
      // 他点击详情后跳转的页面,你可以设置成微博的热榜，也可以设置成其他，网址一定要填对；不填对也没关系，随便你，会打不开而已。
      openUrl: 'https://wangxinleo.cn',
      // 专属节日提醒，如果你在这里填写了节日提醒，就不会执行FESTIVALS的提醒了, 和FESTIVALS的配置方法相同，可以往下查看，我这里就不重复写了
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '吊毛', year: '2006', date: '06-06',
        },
      ],
      // 课程表相关配置
      // 如果courseSchedule不存在或者为空（null）则认为没有课程
      // 如果courseSchedule是一个数组，则认为不区分单双周，直接填写星期几对应的课表数据即可
      // 如果courseSchedule是一个对象（如下面所示）
      courseSchedule: {
        // 单双周的基准
        benchmark: {
          // 这里设置一个日期，用来作为判断课表是否单双周的依据
          date: '2022-09-23',
          // 该日期是否为单周
          isOdd: true
        },
        // 课表
        courses: {
          // 单周课表
          // 从星期一到星期日（星期六和星期日的课表数组可不填写）
          odd: [
            // 例子，周一的课表
            [
              '08:00-09:35 高等数学',
              '09:50-11:25 高等物理'
            ],
            // 周二
            [
              '08:00-09:35 高等数学',
              '09:50-11:25 高等物理'
            ],
            // 周三
            [
              '08:00-09:35 高等数学',
              '09:50-11:25 高等物理'
            ],
            // 周四
            [
              '08:00-09:35 高等数学',
              '09:50-11:25 高等物理'
            ],
            // 周五
            [
              '08:00-09:35 高等数学',
              '09:50-11:25 高等物理'
            ],
            // 周六
            [
              '08:00-09:35 高等数学',
              '09:50-11:25 高等物理'
            ],
            // 周日
            [
              '08:00-09:35 高等数学',
              '09:50-11:25 高等物理'
            ]
          ],
          // 双周课表
          even: [
            [],
            [],
            [],
            [],
            [],
            [],
            []
          ]
        }
      },
    },
    {
      name: '珊珊',
      id: 'ogIUX6KYkItKQt5MhRpAv9AFxc5w',
      useTemplateId: 'fD5ZOUfHpFwLWqXDhItegi_yIjSTpXbcv5Y1C9FgRZ4',
      province: '陕西省',
      city: '西安市',
      horoscopeDate: '12-11',
      horoscopeDateType: '本月',
      openUrl: 'https://wangxinleo.cn',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '吊毛', year: '2006', date: '06-06',
        }
      ],
      customizedDateList: [],
      courseSchedule: null
    },

module.exports = USER_CONFIG

