export let apiKey = '?api_key=9e35804f-ecd4-48d7-b718-166ff0eea46f';

export class BandSiteApi {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = `https://unit-2-project-api-25c1595833b2.herokuapp.com`;
  }

  async getComments() {
    try {
      let comments = await axios.get(`${this.baseUrl}/comments/${apiKey}`);
      return comments.data;
    } catch (e) {
      console.log(e);
    }
  }

  async getShows() {
    let shows = await axios.get(`${this.baseUrl}/showdates/${this.apiKey}`);

    return shows.data;
  }
}
