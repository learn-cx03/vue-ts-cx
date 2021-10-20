export const rules = {
  name: [
    {
      required: true,
      message: '用户名是必传内容',
      trigger: 'blur'
    },
    {
      patter: /^[a-z0-9]$/,
      min: 5,
      max: 10,
      message: '用户名必须是5到10个数字或字母',
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: '密码是必传内容',
      trigger: 'blur'
    },
    {
      patter: /^[a-z0-9]$/,
      min: 3,
      message: '密码必须是3位以上的数字或字母',
      trigger: 'blur'
    }
  ]
}
