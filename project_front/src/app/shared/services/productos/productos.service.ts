import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { producto } from '../../modales/producto-modal';
import { map, Observable } from 'rxjs';
import { Product } from '../../interfaces/product';

const base_url = environment.base_url;
@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor( private http:HttpClient, private router:Router) { }

  getProductos():Observable<any>{
    return this.http.get<producto>(`${base_url}/allProducts`);
  }

  getProducto(id:string):Observable<any>{
    return this.http.get<producto>(`${base_url}/myProduct/` + id)
  }

  createProduct(producto:producto):Observable<any>{
    const body = {
    nombre:producto.nombre, 
    descripcion:producto.descripcion, 
    estado:producto.estado,
    valoracion:producto.valoracion,
    precio:producto.precio
  }
    return this.http.post(`${base_url}/create` + producto,body);
  }

  updateProducto(id:String, producto:producto):Observable<any>{

    const body = {
      nombre:producto.nombre, 
      descripcion:producto.descripcion, 
      estado:producto.estado,
      valoracion:producto.valoracion,
      precio:producto.precio
    }
      return this.http.put(`${base_url}/update`+ id  + producto,body);

  }
  deleteProducto(id:string):Observable<any>{
    return this.http.delete<producto>(`${base_url}/delete/`+ id)
  }

  getProductoos():Observable<Product[]>{
    return this.http.get<Product>("../../../../assets/archivosConfig/produ.json").pipe(map((u) => u.data))
  }

  getProducts() {
    return this.http.get<any>("../../../../assets/archivosConfig/produ.json")
    .toPromise()
    .then(res => <Product[]>res.data)
    .then(data => { return data; });
}
}
