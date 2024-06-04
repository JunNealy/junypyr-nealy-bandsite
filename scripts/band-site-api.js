export let apiKey = '?api_key=3d9affad-ecf2-44f5-ac62-ebe45a4b78b2';

export class BandSiteApi {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = `https://unit-2-project-api-25c1595833b2.herokuapp.com`;
  }

  async getComments() {
    try {
      let commentsResponse = await axios.get(
        `${this.baseUrl}/comments/${this.apiKey}`
      );

      let comments = await commentsResponse.data;
      return comments;
    } catch (e) {
      console.log(e);
    }
  }

  async getShows() {
    let shows = await axios.get(`${this.baseUrl}/showdates/${this.apiKey}`);
    return shows.data;
  }

  async postComment(obj) {
    let post = { name: obj.name, comment: obj.comment };
    try {
      await axios.post(`${this.baseUrl}/comments/${this.apiKey}`, post);
    } catch (error) {
      console.log(error);
    }
  }
}
