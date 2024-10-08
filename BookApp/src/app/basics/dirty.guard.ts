import { CanDeactivateFn } from '@angular/router';
import { DirtyService } from './dirty.service';
import { inject } from '@angular/core';

export const dirtyGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
  const dirtyService:DirtyService=inject(DirtyService);
  console.log("deactivate",dirtyService.isDirty)
  if (dirtyService.isDirty) dirtyService.message="Olet muokannut, älä häivy";
  return !dirtyService.isDirty;
  //return true;
};
