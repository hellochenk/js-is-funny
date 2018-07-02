import { getDb } from '../db/index'

// 控制学生人数增删改查
interface teachers{
  name: string;
  sex: string;
  brithday: string;

  number: string; // 教师编号
  level: string; // 级别
  start: string; // 入职年份
  subject: string; // 任职科目
  express: string; // 工作时间
  desc: string; // 描述
}

const addStudents = (param: teachers) => {

}

const delStudents = (num: string) => {

}

const updateStudents = (param: teachers) => {

}

const queryStudents = (param: any) => {

}