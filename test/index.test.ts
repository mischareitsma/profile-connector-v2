import "node:console";
import assert from "node:assert";
import test from "node:test";

import { helloMessage } from "../src/index";

test("say hello", () => {
	console.log("Running test!")
	assert.strictEqual(helloMessage(), "Hi there!");
});