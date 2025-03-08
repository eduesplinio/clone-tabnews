import orchestrator from "tests/orchestrator.js";

beforeAll(async () => {
  await orchestrator.waitForAllServices();
});

test("GET to /api/v1/status should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);

  const responseBody = await response.json();

  const parsedUpdatedAt = new Date(responseBody.updated_at).toISOString();
  expect(responseBody.updated_at).toBe(parsedUpdatedAt);
  
  expect(responseBody.depedencies.database.version).toEqual("16.0");
  expect(responseBody.depedencies.database.max_connections).toEqual(100);
  expect(responseBody.depedencies.database.opened_connections).toEqual(1);
});