import { Platform } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { HttpClient } from '@angular/common/http';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DbSerService {

  private database: SQLiteObject;
  private dbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);

  UserLogin = new BehaviorSubject([]);

  constructor(
    private plt: Platform, 
    private sqlitePorter: SQLitePorter, 
    private sqlite: SQLite, 
    private http: HttpClient
  ) {
      // this.createDataBase()
   }

   createDataBase(){
     this.plt.ready().then(()=>{
       this.sqlite.create({
         name: 'EasySolApp.db',
         location: 'default'
       }).then((db: SQLiteObject)=>{
        db.executeSql('create table danceMoves(name VARCHAR(32))', [])
        .then(() => console.log('Executed SQL'))
        .catch(e => console.log(e));
          // console.log("Value of db",db)
          // this.database = db,
          // console.log("value of data:",this.database)
          // this.getSqlFile()
       }).catch(e => console.log(e));
     })
   }

  //  getSqlFile(){
  //   this.http.get('assets/Db/SQLQuery.sql', { responseType: 'text'})
  //   .subscribe(sql => {
  //     this.sqlitePorter.importSqlToDb(this.database, sql)
  //       .then(_ => {
  //         this.loadUsers()
  //         this.dbReady.next(true);
  //       })
  //       .catch(e => console.error(e));
  //   });
  //  }

  //  loadUsers() {
  //   return this.database.executeSql('SELECT * FROM userLogin', []).then(data => {
  //     let developers: any = [];
 
  //     if (data.rows.length > 0) {
  //       for (var i = 0; i < data.rows.length; i++) {
  //         let skills = [];
  //         if (data.rows.item(i).skills != '') {
  //           skills = JSON.parse(data.rows.item(i).skills);
  //         }
 
  //         developers.push({ 
  //           id: data.rows.item(i).id,
  //           name: data.rows.item(i).name, 
  //           skills: skills, 
  //           img: data.rows.item(i).img
  //          });
  //       }
  //     }
  //     this.UserLogin.next(developers);
  //   });
  // }

  // addLoginUsers(_userType, _userID, _pass, _name) {
  //   let data = [_userType, _userID, _pass, _name];
  //   return this.database.executeSql('INSERT INTO userLogin (userType,userID,password,name) VALUES (?, ?, ?, ?)', data).then(data => {
  //     this.loadUsers();
  //     console.log(data)
  //   });
  // }
}
