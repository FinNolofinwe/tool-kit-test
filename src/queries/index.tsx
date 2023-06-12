import { gql } from "@apollo/client";

export const GET_VIEWER = gql`
    query GetData($count: Int!) {
        viewer {
            id
            login
            repositories(first: $count) {
            totalCount
                nodes {
                    name
                    id
                    description
                    url
                    stargazerCount
                    owner {
                        avatarUrl
                        login
                        url
                    }
                    languages(first: 10) {
                        nodes {
                            color
                            name
                        }
                    }
                    description
                    defaultBranchRef {
                        target {
                            ... on Commit {
                                history(first: 1) {
                                    nodes {
                                    committedDate
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }`;

export const GET_REPO = gql`
    query GetRepo($owner: String!, $name: String!) {
        repository(owner: $owner, name: $name){
        id
        name
        stargazerCount
        owner {
            avatarUrl
            login
            url
        }
        defaultBranchRef {
            target {
                ... on Commit {
                        history(first: 1) {
                        nodes {
                            committedDate
                        }
                    }
                }
            }  
        }
        languages(first: 10) {
            nodes {
                color
                name
            }
        }
        description
        }
    }`;

export const GET_SEARCH_RESULT = gql`
query SearchRepositories($query: String!, $count: Int!) {
    
    search(query: $query, type: REPOSITORY, first: $count) {
        repositoryCount
        edges {
      node {
        ... on Repository {
          name
          url
          description
          stargazerCount
          defaultBranchRef {
            target {
                ... on Commit {
                        history(first: 1) {
                        nodes {
                            committedDate
                        }
                    }
                }
            }  
        }
        languages(first: 10) {
            nodes {
                color
                name
            }
        }
        description
          owner {
            login
            avatarUrl
            url
          }
        }
      }
    }
  }
}`