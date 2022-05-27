import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../../interfaces/product';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';

const base_url = environment.base_url.toLowerCase();
@Injectable({
  providedIn: 'root',
})
export class ProductserviceService {
  producto: Product[] = [];
  constructor(private http: HttpClient) {}

  getProductos() {
    const token = localStorage.getItem('token');
    return this.http.get<Product[]>(`${base_url}/productos/todos`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  }

  getProducto(id: string): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http.get(`${base_url}/productos/miProducto/` + id, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  }

  deleteProducto(id: string): Observable<any> {
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('usuario') || '');
    console.log(user);
    return this.http.delete(`${base_url}/productos/delete/` + user.id, {
      body: { id: id },
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  }

  createProduct(producto: Product): Observable<any> {
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('usuario') || '');
    /* let formData = new FormData();
    formData.append('imagen',producto.imagen!)
    formData.append('nombre',producto.nombre!)
    formData.append('descripcion',producto.descripcion!)
    formData.append('precio',producto.precio!.toString() )
    formData.append('inventario',producto.inventario!)
    formData.append('categoria',producto.categoria!)
    formData.append('rating',producto.rating!.toString())
     */
    const body = {
      imagen: producto.imagen,
      nombre: producto.nombre,
      descripcion: producto.descripcion,
      precio: producto.precio,
      inventario: producto.inventario,
      categoria: producto.categoria,
      rating: producto.rating,
      url: producto.url,
    };
    console.log(body);
    return this.http.post(`${base_url}/productos/create/` + user.id, body, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  }

  uploadImg(file: any, id: number) {
    const token = localStorage.getItem('token');

    return this.http.post(`${base_url}/productos/upload/${id}`, file, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  }

  updateProducto(id: string, producto: Product) {
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('usuario') || '');
    const body = {
      id: id,
      nombre: producto.nombre,
      descripcion: producto.descripcion,
      precio: producto.precio,
      cantidad: producto.cantidad,
      inventario: producto.inventario,
      categoria: producto.categoria,
      rating: producto.rating,
    };
    return this.http.put(`${base_url}/productos/update/` + user.id, body, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  }

  getProductosLocal() {
    return this.getProductosLocal;
  }

  getProductosCarrito() {
    if (localStorage.getItem('producto') === null) {
      this.producto = [];
    } else {
      this.producto = JSON.parse(localStorage.getItem('producto') || '');
    }
    return this.producto;
  }

  addProductosCarrito(product: Product) {
    this.producto.push(product);
    let producto = [];
    if (localStorage.getItem('producto') === null) {
      producto = [];
      producto.push(product);
      localStorage.setItem('producto', JSON.stringify(producto));
    } else {
      producto = JSON.parse(localStorage.getItem('producto') || '');
      producto.push(product);

      localStorage.setItem('producto', JSON.stringify(producto));
    }
  }

  deleteProductoCarrito(product: Product) {
    for (let i = 0; i < this.producto.length; i++) {
      if (product == this.producto[i]) {
        this.producto.splice(i, 1);
        localStorage.setItem('producto', JSON.stringify(this.producto));
      }
    }
  }
}
