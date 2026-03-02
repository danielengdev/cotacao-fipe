import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class CalculoService {

    soma(a: number, b: number, c: number): number {
        return a + b + c;
    }

    divide(a: number, b: number): number {
        return a / b;
    }

    multiplica(a: number, b: number): number {
        return a * b;
    }

    subtrai(a: number, b: number): number {
        return a - b;
    }
}