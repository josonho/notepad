const Work = require('../init/sequelize');

// 增
async function addSQL(opts){
  let data = null;
  await Work.create(opts).then(result => {
    data = result==0?'添加失败':'添加成功';
    console.log(result)
  }).catch(err => {
    console.log('failed: '+err);
  });
  return data;
};

// 删
async function destroySQL(opts){
  let data = null;
  await Work.destroy({
    where: opts,
  }).then(result => {
    data = result==0?'删除失败：请检查是否存在该值':'删除成功';
    console.log(result);
  }).catch(err => {
    console.log(err);
  })
  return data;
};

// 改
async function updateSQL(opts,queryOpts){
  let data = null;
  await Work.update(opts,{
    where: queryOpts,
  }).then(result => {
    data = result==0?'更新失败：请检查是否存在该值':'更新成功';
    console.log("result-----",JSON.stringify(result));
  }).catch(err => {
    console.log(err);
  })
  return data;
};

// 查
async function findSQL(opts){
  let data = null;
  await Work.findAll({
    where: opts,
  }).then(result => {
    data = result;
}).catch(err => {
    console.log(err);
  });
  return data;
};


module.exports = {
  addSQL: addSQL,
  destroySQL: destroySQL,
  updateSQL: updateSQL,
  findSQL: findSQL
};