import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//importando matSnackBar
import {MatSnackBar} from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  baseUrl = "http://localhost:8080/produtos"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X',{
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  create(product: Product): Observable<Product>{
    return this.http.post<Product>(this.baseUrl, product)
  }

  read(): Observable<Product[]>{
    return this.http.get<Product[]>(this.baseUrl)
  }

  readById(prodId: string): Observable<Product>{
    const url = `${this.baseUrl}/${prodId}`
    return this.http.get<Product>(url)
  }
 
  update(product: Product): Observable<Product>{
    const url = `${this.baseUrl}/${product.prodId}`
    return this.http.put<Product>(url, product)
  }
  
  delete(prodId: number): Observable<Product>{    
    const url = `${this.baseUrl}/${prodId}`
    return this.http.delete<Product>(url)
  }


}  
