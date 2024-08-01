import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot,
} from '@angular/router';
import { PropertyService } from './property.service';
import { UserService } from './user.service';

export const propertyResolver: ResolveFn<any> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const id = route.paramMap.get('id');
  return inject(PropertyService).getSingleProperty(Number(id));
};

export const propertyUserResolver: ResolveFn<any> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const userId = route.paramMap.get('userId');
  return inject(UserService).getSingleEmployee(Number(userId));
};

export const propertyAgentResolver: ResolveFn<any> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const agentId = route.paramMap.get('agentId');
  return inject(UserService).getSingleEmployee(Number(agentId));
};
