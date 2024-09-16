import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const activateGuardGuard: CanActivateFn = (route, state) => {
  console.log("Vahti",route,state);
  const router:Router=inject(Router);
  let uusiRoute=router.parseUrl("/books");
  console.log("Parse url",uusiRoute);
  //console.log(router.parseUrl("/books"));
  //return bret;
  return uusiRoute;
};
