// src/app/shared/data.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private data: any;

  constructor() { }

  setData(value: any) {
    this.data = value;
  }

  getData() {
    return this.data;
  }
}
