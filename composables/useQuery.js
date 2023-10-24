import { request } from "graphql-request";

const useQuery = {
  async fetch(query, param) {
    const data = await request(
      "https://eu-central-1-shared-euc1-02.cdn.hygraph.com/content/clo44vp8j60om01ul2fd69p7o/master",
      query,
      param
    );
    return data;
  },
};

export default useQuery;
