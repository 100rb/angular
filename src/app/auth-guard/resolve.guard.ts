import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Resolve, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from '../service/data.service';

@Injectable({
  providedIn: 'root'
})
export class ResolveGuard implements Resolve<any> {
  constructor(private service: DataService) {

  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    this.service.getJsonList();
  }


}
