//get,post请求封装
function get(url,opts){
  return this.$axios.get(url,{
    params: opts //object形式
  })
}

function post(url,opts){
  return this.$axios.post(url,opts)
}

export default {
  get: get,
  post: post
}