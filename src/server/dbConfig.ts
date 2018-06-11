import path = require('path');

interface dbtype{
  host:string
  cookieTime(): number
  server_port:number
  db_host:string
  db_port:number
  db_database:string
  db_user:string
  db_pwd:string
}

class Config{

  static host = 'localhost'

  static cookieTime = ():number=>{
    return 1000*60*120
  };//cookie过期时间

  static server_port =  3000; //服务器端口

  static db_host = 'localhost';//数据库服务器ip

  static db_port = 1433; //数据库端口

  static db_database = 'database'; //数据库名

  // root_path: __dirname; //项目根绝对路径

  static db_user = 'root';

  static db_pwd = '123456';
}

export {Config}