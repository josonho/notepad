const Koa = require('koa');
const router = require('koa-router')();
var bodyParser = require('koa-bodyparser');
const {addSQL,destroySQL,updateSQL,findSQL} = require('./common/sqlOperat')
const app = new Koa();
app.use(bodyParser());  //post需要这个插件获取前端传递的参数。

// 增（记事本）
router.post('/add',async(ctx,next)=>{
  ctx.set('Access-Control-Allow-Origin','\*'); //CORS跨域，第二参数为url,设置为*即支持任何跨域
  var optsAdd = ctx.request.body;
  optsAdd.type = 0;
  ctx.response.body = await addSQL(optsAdd);
})  

// 删（记事本）
router.post('/delete',async(ctx,next)=>{
  ctx.set('Access-Control-Allow-Origin','\*'); //CORS跨域，第二参数为url,设置为*即支持任何跨域
  var optsDestroy = {
    id:{
      $like: ctx.request.body.id
    }
  }
  ctx.response.body = await destroySQL(optsDestroy)
})  

// 改（记事本）
router.post('/update',async(ctx,next)=>{
  ctx.set('Access-Control-Allow-Origin','\*'); //CORS跨域，第二参数为url,设置为*即支持任何跨域
  var optsUpdateQuery = {
    id:{
      $like: ctx.request.body.id
    }
  };
  var optsUpdate = ctx.request.body;
  optsUpdate.type = 0;
  ctx.response.body = await updateSQL(optsUpdate,optsUpdateQuery)
})  

// 查（记事本）
router.get('/query',async(ctx,next)=>{
  ctx.set('Access-Control-Allow-Origin','*'); //CORS跨域，第二参数为url,设置为*即支持任何跨域
  var optsFind = {
    type:{
      $like: 0,
    }
  }
  ctx.response.body = await findSQL(optsFind)
})  

// 查（id）（记事本）
router.get('/queryId',async(ctx,next)=>{
  ctx.set('Access-Control-Allow-Origin','*'); //CORS跨域，第二参数为url,设置为*即支持任何跨域
  console.log(ctx.query.id)
  var optsFind = {
    id:{
      $like: ctx.query.id
    },
  }
  ctx.response.body = await findSQL(optsFind)
})  


// 增（笔记本）
router.post('/addUE',async(ctx,next)=>{
  ctx.set('Access-Control-Allow-Origin','\*'); //CORS跨域，第二参数为url,设置为*即支持任何跨域
  var optsAdd = ctx.request.body;
  optsAdd.type = 1;
  ctx.response.body = await addSQL(optsAdd);
})  

// 改（笔记本）
router.post('/updateUE',async(ctx,next)=>{
  ctx.set('Access-Control-Allow-Origin','\*'); //CORS跨域，第二参数为url,设置为*即支持任何跨域
  var optsUpdateQuery = {
    id:{
      $like: ctx.request.body.id
    }
  };
  var optsUpdate = ctx.request.body;
  optsUpdate.type = 1;
  ctx.response.body = await updateSQL(optsUpdate,optsUpdateQuery)
})  

// 查（笔记本）
router.get('/queryUE',async(ctx,next)=>{
  ctx.set('Access-Control-Allow-Origin','*'); //CORS跨域，第二参数为url,设置为*即支持任何跨域
  var optsFind = {
    type:{
      $like: 1,
    }
  }
  ctx.response.body = await findSQL(optsFind)
})  


app.use(router.routes());
app.listen(3000);
console.log('app started at port 3000...http://localhost:3000');




