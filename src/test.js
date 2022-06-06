import { CreateSchemaChecker } from "./utils/schema_utils";

console.log(`tester!`);
let checker = CreateSchemaChecker({
    username: { type: "string", required: true },
    password: { type: "string", required: true },
})
let data = { username: "trash" };
let result = checker(data);
console.log(result);
console.log(data);
console.log(checker.errors)
