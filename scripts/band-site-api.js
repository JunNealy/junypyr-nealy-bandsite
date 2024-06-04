export let apiKey = '?api_key=9e35804f-ecd4-48d7-b718-166ff0eea46f';
import ConvertTimeCode from './unix-timestamp-convert.js';

export class BandSiteApi {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = `https://unit-2-project-api-25c1595833b2.herokuapp.com`;
  }

  async getComments() {
    try {
      let commentsRespomse = await axios.get(
        `${this.baseUrl}/comments/${this.apiKey}`
      );
      let comments = commentsRespomse.data;
      console.log(comments);

      let convertTimeCode = new ConvertTimeCode();

      comments.forEach((comment) => {
        comment.timestamp = convertTimeCode.toMMDDYYY(comment.timeStamp);
      });
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
