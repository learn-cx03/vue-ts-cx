import axios from 'axios'

axios.get('http://123.207.32.32:8000/home/multidata').then((res) => {
  console.log(res.data)
})

axios.defaults.baseURL = 'http://httpbin.org'
axios.defaults.timeout = 10000

axios
  .get('/get', {
    params: {
      name: 'coderwhy',
      age: 18
    }
  })
  .then((res) => {
    console.log(res.data)
  })
// axios
//   .post('http//httpbin.org/post', {
//     data: {
//       name: 'why',
//       age: 18
//     }
//   })
//   .then((res) => {
//     console.log(res.data)
//   })
axios
  .all([
    axios.get('/get', { params: { name: 'why', age: 18 } }),
    axios.post('/post', { data: { name: 'why', age: 20 } })
  ])
  .then((res) => {
    console.log(res[0])
    console.log(res[1])
  })

//6.axios的拦截器
//fn1:代表发送成功之后会执行的函数
//fn2:代表发送失败之后会执行的函数
axios.interceptors.request.use(
  (config) => {
    //想做的一些操作
    //1.给请求添加token
    //2.isLoading动画
    console.log('请求成功的拦截')
    return config
  },
  (err) => {
    console.log('请求发送错误')
    return err
  }
)
//响应成功（服务器正常返回了数据 20x）
axios.interceptors.response.use(
  (res) => {
    console.log('响应成功的拦截')
    return res
  },
  (err) => {
    console.log('响应失败')
    return err
  }
)
