import {NgZone, Component, View} from 'angular2/core';

import {bootstrap} from 'angular2/bootstrap';

import {Parties} from 'collections/parties';

@Component({
    selector: 'app'
})
@View({
    templateUrl: 'client/app.html'
})
class Socially {
    public parties: Array<Object>;

    constructor() {
        Tracker.autorun(() => zone.run(() => {
            this.parties = Parties.find().fetch();
        }));
    }

}

bootstrap(Socially);
