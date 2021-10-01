import {PersistentVector} from "near-sdk-core";


@nearBindgen
export class TravelRequest {
	id: u64
	user: string;
	route: string;

	constructor(
		id: u64,
		user: string,
		route: string
	) {
		this.id = id;
		this.user = user;
		this.route = route;
	}
}


/* STORAGE */
export let requests = new PersistentVector<TravelRequest>("request")
