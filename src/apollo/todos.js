import { gql } from "@apollo/client";

export const ALL_TODO = gql`
  query AllTodos {
    todos: allTodos {
      id
      title
      completed
    }
  }
`;

export const CREATE_TODO = gql`
  mutation Addtodo($title: String!, $user_id: ID!, $completed: Boolean!) {
    newTodo: createTodo(
      title: $title
      user_id: $user_id
      completed: $completed
    ) {
      id
      title
      completed
    }
  }
`;

export const UPDATE_TODO = gql`
  mutation UpdateTodo($id: ID!, $completed: Boolean) {
    updateTodo(id: $id, completed: $completed) {
      id
      title
      completed
    }
  }
`;

export const DELETE_TODO = gql`
  mutation DeleteTodo($id: ID!) {
    removeTodo(id: $id) {
      id
    }
  }
`;
