test("deve funcionar com snippets", () => {
  return request(app)
    .get(MAIN_ROUTE)
    .set("authorization", `bearer ${user.token}`)
    .then((res) => {
      expect(res.status).toBe(200);
      expect(res.body[0].description).toBe("T1");
    });
});

// TODO teste de todo
// FIXME teste de fixme
// teste de comentario simples
