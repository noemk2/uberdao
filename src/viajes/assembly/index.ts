import {Context} from "near-sdk-as";
import {requests, TravelRequest} from "./models";

//demo hello
export function hello(): string {
	let user = Context.sender
	return "hello " + user;
}

export function createTravel(
	traveler: string,
	route: string,
): void {
	assert(traveler.length > 0, "debes incluir tu id de near")
	assert(route.length > 0 && route.length < 50, 'Incluye una ruta corta')

	requests.push(
		new TravelRequest(requests.length, traveler, route)
	);
}


export function getTravelRequest(): Array<TravelRequest> {
	const result = new Array<TravelRequest>(requests.length);
	for (let i = 0; i < requests.length; i++) {
		result[i] = requests[i];
	}
	return result;
}

export function eliminateTravelRequest(id: i32): void {
	assert(id >= 0, "No tenemos contratos con id negativos")
	requests.swap_remove(<i32>id)
}
