import styled from 'styled-components'

export const ItemContainer = styled.article`
  max-width: 416px;
  min-height: 260px;

  background-color: ${(post) => post.theme.post};
  border-radius: 10px;

  padding: 2rem;

  cursor: pointer;
  border: 3px solid transparent;

  .header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.25rem;

    h4 {
      color: ${(post) => post.theme.title};
      font-size: 1.25rem;
      line-height: 1.6;
      font-weight: bold;

      max-width: 80%;
    }

    span {
      color: ${(post) => post.theme.span};
      font-size: 0.875rem;
      line-height: 1.6;
    }
  }

  p {
    color: ${(post) => post.theme.text};
    font-size: 1rem;
    line-height: 1.6;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4; /* number of lines to show */
    line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  &:hover {
    border: 3px solid ${(post) => post.theme.border};
  }
`
