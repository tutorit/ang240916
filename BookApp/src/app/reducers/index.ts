import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createAction,
  createFeatureSelector,
  createReducer,
  createSelector,
  MetaReducer,
  on,
  props
} from '@ngrx/store';
import { Author } from '../entities/author';

export interface State {

}

export const reducers: ActionReducerMap<State> = {

};


export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];


export const authorsState:ReadonlyArray<Author>=[];
export const setAuthors=createAction("Set authors",props<{authors:Author[]}>());
export const authorsSelector=createFeatureSelector<Author[]>("authors");

export const selectedState:Author=new Author(); 
export const setSelected=createAction("Set selected",props<{selected:Author}>());
export const selectedSelector=createFeatureSelector<Author>("selected");



export const authorsReducer=createReducer(
  authorsState,
  on(setAuthors,(state,{authors}) => { 
    console.log("Tässä välissä omaa logiikkaa, jolla vaikutetaan storeen menevään dataan")
    return authors
  }),
)

export const selectedReducer=createReducer(
  selectedState,
  on(setSelected,(state,{selected}) => { 
    console.log("Tässä välissä omaa logiikkaa, jolla vaikutetaan storeen menevään dataan")
    return selected;
  }),
)
