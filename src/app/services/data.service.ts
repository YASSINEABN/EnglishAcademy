import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private firestore: Firestore) { }

   async addColec(firstName: string, secondName: string, tel: string, age: string ,id:string): Promise<void> {
    try {
      const docRef = await addDoc(collection(this.firestore, 'talamid'), {
        name: `${firstName} ${secondName}`,
        telephone: tel,
        age: age,
        type:id
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
   }
}
