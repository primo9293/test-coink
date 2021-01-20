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

  texto1: any
  texto2: any

  private static CONFIG = {
    mode: mode.ECB,
    padding: pad.Pkcs7
  };

  constructor(private http: HttpClient,) {
    }

    getUrl(query: string) {
      return `${this.urlApi}${ query }?apiKey=${this.apiKey}`;  
    }

    login( query: string, data: any){
      // const url = `${this.urlApi}${ query }?apiKey=${this.apiKey}`;
      const url = this.getUrl(query);

      console.log('Entro al servicio');
  
      const headers = new HttpHeaders({
        'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJBcGlLZXkiOiIyNTIxNTYiLCJWZXJzaW9uIjoiMSJ9.pPCapENz8Ddvq8VBMn7GyuXGsrdSFYoU7xMW9dlwh8A'
      });

      const datos1 = {
        "user_mail":"pruebatest@yopmail.com",
        "user_password":"pwdTest123#"
      }

      this.texto2 = this.encrypt(JSON.stringify(datos1));
      this.texto1 = this.encrypt(JSON.stringify({"user_mail":"pruebatest@yopmail.com","user_password":"pwdTest123#"}));
      // this.texto2 = this.encrypt(data);
      // this.texto2 = this.encrypt(JSON.stringify(data));
      console.log('payload', this.texto1);
      console.log('payload2', this.texto2);
      console.log('payload33',this.decrypt(("MRSQHiMPBQpbmuvnRNy6QoYapruqQIScBBbfS2gBYv45bA+KCYfmLlRl/o1StXZjgOaawGwnijFIhr6267Lb8WQB/tVDKPaidLLwEBuhbQQ=")))
      // console.log('payload44',this.decrypt(("E5F87cL9nP4N8s7qya3gEUOZGf5wvwZs0rpHjcj6gBj1I0Yzn/K+6piDFjGada7jg6waKdqkXnC9RWIGPm7UGhYZmVhfgqelm9iP13htpK0=")))
   
      const user_mail = data.user_mail
      const user_password = data.user_password
  
      const datos = 
         {
            user_mail,
            user_password,
         }
      
       
      console.log('datos',datos);
      const ob1 = this.encrypt(JSON.stringify(datos));
      // const ob11 = this.encrypt(datos);
      // const ob1 = JSON.stringify({ 'payload' : [obb]});
      // const cifrar = this.encrypt(JSON.stringify(obbc));
      console.log('ob1',ob1);
      // const ob1 = JSON.stringify({ 'payload' : [obbc]});
      // const ob1 = JSON.stringify({ 'payload' : [cifrar]});
      // console.log('ob1', ob1);
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
      // console.log('credenJson', credenJson);
  
      const httheaders = new HttpHeaders(credenJson)
  
      // const apiGifs = 'https://rickandmortyapi.com/api/character'
  
      // return this.http.post( url, { 'payload' : [ob1]} );
      // return this.http.post( url, obb, {headers: (httheaders)} );
      // return this.http.post( url, { 'payload' : [ob1]}, {headers: (httheaders)} );
      // return this.http.post( url, { 'payload' : [ob1]} );
      return this.http.post( url, { 'payload': ob1} );
      
      // return this.http.get(apiGifs);
  
      // return this.http.post( url, ob1 );
      // return this.http.post( url, {body : this.texto1} );
  
    }

  getBuscarPurchases(query: string, data: any) {
    const url = this.getUrl(query);

    // return this.http.get(url, {headers: data});
  }


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
