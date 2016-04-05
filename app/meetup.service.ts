import { Injectable } from 'angular2/core'
import { TECHTALKS } from './techTalks/mock-techTalks'


@Injectable()
export class MeetupService {
    getTechTalks() {
        return TECHTALKS;
    }

}

