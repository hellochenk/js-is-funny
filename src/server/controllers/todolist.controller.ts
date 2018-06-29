import { getDb } from '../db/index'
interface todo{
  id: string;
  text: string;
  type: string;
}

interface params{
  page: string;
  start: string;
  end: string;
  pageNum: string;
  keyword?: string;
}

const addTodoList = async (ctx:any, next:any) => {
  // add todolist
  const db = getDb()
  let { text } = ctx.request.body
  await db.todo_list.create({
    text: text,
    type: '0'
  })
  ctx.response.body = JSON.stringify({status:'0'})
}

const deleteTodoList = async (ctx:any, next:any) => {
  // delete todolist
  let { id } = ctx.request.body
  const db = getDb()
  // let result = await db.List.find({
  //   where: {
  //     id: id
  //   }
  // })
  let result = await db.todo_list.destroy({
    where: {
      id: id
    }
  })
  if(result){
    ctx.response.body = JSON.stringify({status: '0'})
    // ctx.response.body = JSON.stringify(result)
  }

}

const upDateTodoList = (todo: todo) => {
  // update todo list
  console.log('upDateTodoList ..........')

}

const searchTodoList = async (ctx:any, next:any) => {
  // search todo list
  const db = getDb()

  console.log('db:::::::::::::::::', db)
  let data = await db.todo_list.findAll({
    attributes: ['id', 'text', 'type'],
    // where: {
    //   type : 0
    // }
    // offset:5,
    // limit: 5
  })
  let resp = {
    data,
    status: '0'
  }
  ctx.response.body = JSON.stringify(resp)

}

export {
  addTodoList,
  deleteTodoList,
  upDateTodoList,
  searchTodoList
}
