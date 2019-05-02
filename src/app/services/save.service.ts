import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class SaveService {

  constructor(private db : AngularFireDatabase ) { 

  }

  saveData(answers){
    let ref = this.db.list('answers');
    ref.push(
      answers
    );
  }
}
