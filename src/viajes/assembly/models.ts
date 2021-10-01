import {PersistentVector} from "near-sdk-core";

//export enum Status {
//growing,
//goal_reached,
//}


@nearBindgen
export class TravelRequest {
	id: u64
	user: string;
	route: string;
	//status: Status;
	//avalCount: u64;

	constructor(
		id: u64,
		user: string,
		route: string
	) {
		this.id = id;
		this.user = user;
		this.route = route;
		//this.status = Status.growing;
		//this.avalCount = 0;
	}
}


/* STORAGE */
export let requests = new PersistentVector<TravelRequest>("request")
