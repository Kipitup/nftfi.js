class API {
  #config;
  #auth;
  #http;

  constructor(options = {}) {
    this.#config = options?.config;
    this.#auth = options?.auth;
    this.#http = options?.http;
  }

  async get(options) {
    let authToken = null
    const uri = `${this.#config.api.baseURI}/${options.uri}`;
    const params = options?.params;
    if (options.uri !== "offers" && options.uri !== "loans") {
      authToken = await this.#auth.getToken();
    }
    const headers = authToken === null ?
      {
        'X-API-Key': this.#config.api.key,
      }
      :
      {
        'X-API-Key': this.#config.api.key,
        Authorization: `Bearer ${authToken}`
      }
    const result = await this.#http.get(uri, {
      headers,
      params
    });

    if (options.uri === 'loans') {
      const response = {
        options,
        result: result.data
      }
      return response
    }
    return result.data;
  }

  async post(options) {
    const uri = `${this.#config.api.baseURI}/${options.uri}`;
    const authToken = await this.#auth.getToken();
    const headers = {
      'X-API-Key': this.#config.api.key,
      Authorization: `Bearer ${authToken}`
    };
    const result = await this.#http.post(uri, options.payload, {
      headers
    });
    return result.data;
  }

  async delete(options) {
    const uri = `${this.#config.api.baseURI}/${options.uri}`;
    const authToken = await this.#auth.getToken();
    const headers = {
      'X-API-Key': this.#config.api.key,
      Authorization: `Bearer ${authToken}`
    };
    const result = await this.#http.delete(uri, {
      headers
    });
    return result.data;
  }
}

export default API;
