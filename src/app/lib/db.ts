// 'use server'
// import { Database } from "duckdb-async"
// import { TimerInstance } from "../components/pomodoro/timer";

// const con = dbConnection();


// async function dbConnection() {
// try {
//   console.log("starting db connection")
//   const db =  await Database.create(":memory:");
//   const con = await db.connect();
//   con.exec("create sequence if not exists timer_sequence start 3")
//   con.exec("create table if not exists tbl_timer(id int default nextval('timer_sequence') primary key,minutes integer, seconds_left integer, notification_sent boolean)")
//   con.exec("insert or ignore into tbl_timer (text, minutes, seconds_left, notification_sent) values('helloooo', 10, 600, false)");
//   console.log("Initialized database")
//   return con
// } catch(err) {
//   console.log("Error when creating db")
//   console.log(err)
// }
// }
// export async function getDefaultTimer(): Promise<TimerInstance> {
// console.log("Default timer")
// let connection = await con
// connection?.all("select * from tbl_timer", function(err:any, res:any) {
//   if(err) {
//       throw err
//   }
//   console.log(res)
// });
// return {text: "", expired: false, minute: 10, second: 600, notified: false};

// }

