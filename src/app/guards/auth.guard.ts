import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "../services/auth.service";
import { Observable } from "rxjs/Rx";

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private _router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    let token = JSON.parse(localStorage.getItem('token'));
    if (!token) {
      this._router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
      return false;
    }else {
      return true;
    }
  }
}
