import { getDb } from '../db/index'

// 控制学生人数增删改查
interface students{
  name: string;
  sex: string; // 1 male/ 2 female
  brithday: string;

  number: string; // 学号
  belong: string; // 归属, 班主任 编号
  desc: string;// 描述
}

const addStudents = (param: students) => {

}

const delStudents = (num: string) => {

}

const updateStudents = (param: students) => {

}

const queryStudents = (param: any) => {

}