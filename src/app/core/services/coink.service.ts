import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

import { enc, AES, mode, pad, MD5 } from 'crypto-js';
import { Credentials } from '../models/credentials.model';


@Injectable({
  providedIn: 'root'
})
export class CoinkService {

  urlApi = environment.url_api;
  apiKey = environment.apikey;
  jwt = environment.jwt;

  textoSimple = {
      "user_mail": "test@gmail.com",
      "user_password": "123asd"
  }

  texto = {
    credentials : {
      "user_mail": "test@gmail.com",
      "user_password": "123asd"
     }
  }
  
  texto_a = {
    credentials : {
      user_mail: 'as',
      user_password: 'as'
      }
  }

  texto1: any
  texto2: any

  array: [] = []

  private static CONFIG = {
    mode: mode.ECB,
    padding: pad.Pkcs7
  };

  constructor(private http: HttpClient,) {
    // this.texto1 = JSON.stringify(this.texto)
    this.texto1 = JSON.stringify(this.texto_a)
    console.log('1',this.encrypt(this.texto1)); 
    console.log('1.2',this.encrypt('user_password')); 
    console.log('2',this.decrypt('PHFYZPY2wqdNYG75oVnjEQJYgfzr+ABOh0PbC69hiUu3gJjFlt15IrOBgrdkrx1po1SeA02eky3jrF+byZjMmw==')); 
    console.log('3',this.decrypt('RH/Qp1kyprOyfL/RPdHUYjxxWGT2NsKnTWBu+aFZ4xECWIH86/gATodD2wuvYYlLGkOATay5pcoYsN7OFKsBR5Dzuv7esKj4hz+YQR79Sg4h/xn5vBZXq5jf5wGv3ELl')); 
    
   }

  getQuery( query: string, data: any){
    const url = `${this.urlApi}${ query }?apiKey=${this.apiKey}`;

    console.log('data', data);
    console.log('url',url);

    const headers = new HttpHeaders({
      'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJBcGlLZXkiOiIyNTIxNTYiLCJWZXJzaW9uIjoiMSJ9.pPCapENz8Ddvq8VBMn7GyuXGsrdSFYoU7xMW9dlwh8A'
    });

    console.log('stringify',this.texto);
    this.texto2 = this.encrypt(JSON.stringify(this.texto));

    // this.texto1 = this.encrypt(JSON.stringify(data));
    // this.texto2 = this.encrypt(data);
    // this.texto2 = this.encrypt(JSON.stringify(data));
    console.log('payload', this.texto2);
    console.log('payload33',this.decrypt(this.texto2)); 

    this.array = this.texto2.split();
    console.log('array',this.array);

    const user_mail = data.user_mail
    const user_password = data.user_password

    const obb = {
      credentials:  [
        {
          user_mail,
          user_password,
        }
      ]
    }

    
    console.log('obbobb',obb);
    const ob1 = this.encrypt(JSON.stringify(obb));
    console.log('ob1', ob1);
    // const ob1 = this.encrypt(ob);

    // return this.http.get( url, { headers });
    // return this.http.get( url, );
    // const model = new RequestModel('login', data, StateId.login.toString())
    // return this.http.post( url, {payload : 'PHFYZPY2wqdNYG75oVnjEQJYgfzr+ABOh0PbC69hiUu3gJjFlt15IrOBgrdkrx1po1SeA02eky3jrF+byZjMmw=='} );
    
    // return this.http.post<Credential>( url, {'credetianls' : this.texto2} );
    // return this.http.post<Credentials>( url, { payload : this.texto2} );
    // return this.http.post( url, { 'payload' : this.texto2} );
    // return this.http.post( url, { 'credentials' : ob1} );
    // return this.http.post( url, { 'payload' : ob1} );

    const credenJson = ({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.jwt}`,
      // 'Access-Control-Allow-Origin': '*'
    });
    console.log('credenJson', credenJson);

    const httheaders = new HttpHeaders(credenJson)

    // return this.http.post( url, { 'payload' : [ob1]} );
    // return this.http.post( url, obb, {headers: (httheaders)} );
    // return this.http.post( url, { 'payload' : [ob1]}, {headers: (httheaders)} );
    return this.http.post( url, { 'payload' : [ob1]} );
    // return this.http.post( url, ob1 );
    // return this.http.post( url, {body : this.texto1} );

  }

  /* login(){
    return this.http.post(`${this.urlApi}`, product );
  } */

   //
   encrypt(message: string): string {
     const toEncryptedArray = enc.Utf8.parse(message);
     const payload = AES.encrypt(toEncryptedArray, this.getKey(), CoinkService.CONFIG);
     return payload.ciphertext.toString(enc.Base64);
   }
   
   decrypt(message: string): string {
     const toEncryptArray = enc.Base64.parse(message);
     const payload = AES.decrypt({ ciphertext: toEncryptArray }, this.getKey(), CoinkService.CONFIG);
     return payload.toString(enc.Utf8);
   }
   
   
   private getKey() {
     return enc.Hex.parse(MD5(environment.apikey).toString());
   }

}
