export let apiKey = '?api_key=9e35804f-ecd4-48d7-b718-166ff0eea46f';

export class BandSiteApi {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.apiAddress = `https://unit-2-project-api-25c1595833b2.herokuapp.com`;
  }

  async getComments() {
    try {
      let comments = await axios.get(`${this.apiAddress}/comments/${apiKey}`);
      return comments.data;
    } catch (e) {
      console.log(e);
    }
  }
}

// const bandSiteApi1 = new BandSiteApi(apiKey);

// async function retrieveComments() {
//   try {
//     comments = await bandSiteApi1.getComments();
//     console.log(comments[0].name);
//   } catch (e) {
//     console.log(e);
//   }
// }

// retrieveComments();
