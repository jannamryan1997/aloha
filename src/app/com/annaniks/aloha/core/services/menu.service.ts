import { Injectable } from '@angular/core';
import { RouteStep } from '../models/route-step';
import { Observable, BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class MenuService {
    private _routeStepsEvent$: BehaviorSubject<RouteStep[]> = new BehaviorSubject<RouteStep[]>(null);
    private _routeSteps: RouteStep[] = [];

    constructor() { }

    public setRouteSteps(routeSteps: RouteStep[]): void {
        this._routeSteps = routeSteps;
        this._routeStepsEvent$.next(routeSteps);
    }

    public get getRouteStepsSync(): RouteStep[] {
        return this._routeSteps;
    }

    public get getRouteSteps(): Observable<RouteStep[]> {
        return this._routeStepsEvent$.asObservable()
            .pipe(
                filter((ev) => ev != null)
            )
    }
}