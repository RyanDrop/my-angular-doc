import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TestService {
  sendData(str: string) {
    console.log(str);
    return str;
  }
}
