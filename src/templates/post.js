import React from "react";
import { graphql } from "gatsby";
import { Calendar } from "styled-icons/feather/Calendar";
import { AccessTime as Timer } from "styled-icons/material/AccessTime";

import Layout from "../components/Layout";
import SEO from "../components/seo";
import Comments from "../components/Comments";

import * as S from "../components/Post/styled";

const Post = ({ data, pageContext }) => {
  const postData = data.markdownRemark;

  return (
    <Layout>
      <SEO
        title={postData.frontmatter.title}
        description={postData.frontmatter.resume}
        image={postData.frontmatter.image}
      />
      <S.PostHeader>
        <S.PostTitle>{postData.frontmatter.title}</S.PostTitle>
        <S.PostDate>
          <S.IconWrapper>
            <Calendar />
          </S.IconWrapper>
          {postData.frontmatter.date} &nbsp;|&nbsp;
          <S.IconWrapper>
            <Timer />
          </S.IconWrapper>
          {postData.timeToRead} min de leitura
        </S.PostDate>
      </S.PostHeader>
      <S.PostMainContent>
        <div dangerouslySetInnerHTML={{ __html: postData.html }}></div>
      </S.PostMainContent>
      <Comments url={postData.fields.slug} title={postData.frontmatter.title} />
    </Layout>
  );
};

export const query = graphql`
  query Post($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        slug
      }
      frontmatter {
        title
        date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
        resume
        image
      }
      timeToRead
    }
  }
`;

export default Post;
