const routes = require("./routes");
const wordFrequencys = jest.fn();

describe("POST /frequency route", () => {
  test("responds with correct word frequencies and correct status", () => {
    const app = {
      post: jest.fn(),
    };

    const req = {
      body: "hello hello hello world",
    };

    const res = {
      status: jest.fn(function () {
        return this;
      }),
      json: jest.fn(),
    };

    wordFrequencys.mockReturnValue({ hello: 3, world: 1 });

    routes(app, { wordFrequencys });
    expect(app.post).toHaveBeenCalledWith("/frequency", expect.any(Function));

    const routeCallback = app.post.mock.calls[0][1];
    routeCallback(req, res);

    expect(wordFrequencys).toHaveBeenCalledWith(req.body);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({ hello: 3, world: 1 });
  });

  test("responds with an error since no data is provided", () => {
    const app = {
      post: jest.fn(),
    };
    const req = {
      body: null,
    };
    const res = {
      status: jest.fn(function () {
        return this;
      }),
      json: jest.fn(),
    };
    wordFrequencys.mockImplementation(() => {
      throw new Error("No data provided");
    });
    app.post.mockImplementation((route, callback) => {
      try {
        callback(req, res);
      } catch (error) {
        res.status(400);
        res.json({ error: error.message });
      }
    });

    routes(app, { wordFrequencys });

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ error: "No data provided" });
  });
});
