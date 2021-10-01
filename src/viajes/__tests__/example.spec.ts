import {hello, createTravel} from "../assembly";
import {Context} from "near-sdk-as";
import * as contract from '../assembly';

/*Test para la función de saludo*/
describe("hello function test", () => {
	it("should return 'hello + user name'", () => {
		let user = Context.sender
		expect(hello()).toStrictEqual("hello " + user);
	})
});

/*Test para la función createProject*/
describe("Create a project", () => {
	it("should run fine", () => {
		expect(() => {
			contract.createTravel("Proyecto1", "descripcion de proyecto1");
		}).not.toThrow();
	});
	it("should fail if we give it a empty title", () => {
		expect(() => {
			contract.createTravel("", "descripcion de proyecto1");
		}).toThrow();
	});

	it("should fail if we give it a empty description", () => {
		expect(() => {
			contract.createTravel("titulo", "");
		}).toThrow();
	});

	it("should fail if we give a longer than 50 characters description", () => {
		expect(() => {
			contract.createTravel("titulo", "asdfjklñasddfjfhfjdkskdkdkdkdkdkdkdlskdkdkdkdkdkdkdk");
		}).toThrow();
	});
})

/*Test para la función avalProject*/
describe("Aval a project", () => {
	it("should run fine", () => {
		contract.createTravel("title", "description");
		expect(() => {
			contract.avalProject(0, 20);
		}).not.toThrow();
	});
	it("should fail if we try to aval with 0 nears", () => {
		contract.createTravel("title", "description");
		expect(() => {
			contract.avalProject(0, 0);
		}).toThrow();
	});
})
