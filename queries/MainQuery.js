import { gql } from "graphql-request";

const MainQuery = gql`
  query MainQuery {
    meta(where: { id: "clo458x5n0dub0aw19m57ksd9" }) {
      title
      description
    }
    home(where: { id: "clo45b7km0dr10bvyrnnv46zf" }) {
      introTexts {
        textRight
        textSmall
        text
      }
      portfolio {
        title
        text {
          html
        }
        image {
          url
        }
      }
      education {
        intro {
          textRight
          textSmall
          text
        }
        content {
          html
        }
      }
      contact {
        title
        link
      }
    }
  }
`;
export default MainQuery;
