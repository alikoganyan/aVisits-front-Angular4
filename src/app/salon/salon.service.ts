import { Injectable } from '@angular/core';
import { BackendService } from "../backend/backend.service";
import { Observable } from "rxjs/Observable";
import { Chain } from "../chain/chain.model";
import { ChainService } from "../chain/chain.service";
import { Salon } from "./salon.model";
import { AuthenticationService } from "../auth/_services/authentication.service";
import { UserService } from "../auth/_services/user.service";
import { Subject } from "rxjs/Subject";
import { Subscription } from "rxjs/Subscription";
import {BehaviorSubject} from "rxjs/BehaviorSubject";

@Injectable()
export class SalonService {
    private currentChainId: number;

    constructor(
        private backend: BackendService,
        private authService: AuthenticationService,
        private chainService: ChainService
    ) {
    }

    getSalonsGeneralData(): Observable<any> {
        return this.chainService
            .getChains()
            .map(chains => {
                return chains.reduce((acc, item) => {
                    return acc.concat(item.salons);
                }, []);
            })
            .map(salons => salons.map(salon => new Salon(salon)))
    }

    getSalonById(id): Observable<any> {
        return this.backend.get(`${this.currentChainId}/salon/${id}`)
            .map(res => res.json().data)
            .map(data => new Salon(data));
    }

    getSalonsForChain(chain: Chain): Observable<any> {
        return this.backend.get(`${chain.id}/salon`);
    }

    createSalon(salon: Salon): Observable<any> {
        let chainId = salon.chain_id;
        salon.chain_id = 0;

        return this.backend.post(`${chainId}/salon`, salon);
    }

    updateSalon(salon: Salon): Observable<any> {
        return this.backend.put(`${salon.chain_id}/salon`, salon);
    }

    delete(salon: Salon): Observable<any> {
        return this.backend.delete(`${salon.chain_id}/salon/${salon.id}`);
    }


    public notificationTypes: any[] = [
        { key: "1h11", title: 'В день визита за 1 час, не позже 11' },
        { key: "2h11", title: 'В день визита за 2 час, не позже 11' },
        { key: "3h11", title: 'В день визита за 3 час, не позже 11' },
        { key: "1d19", title: 'За 1 день в 19 часов' },
        { key: "1d12", title: 'За 1 день в 12 часов' },
        { key: "2d12", title: 'За 2 дня в 12 часов' },
        { key: "3d12", title: 'За 3 дня в 12 часов' },
        { key: "7d12", title: 'За 7 дней в 12 часов' },
    ];
}
