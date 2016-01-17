export class Party {
    public name:string;
}


export var Parties:Mongo.Collection<Party> = new Mongo.Collection<Party>('parties');
