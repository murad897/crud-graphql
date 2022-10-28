import { VStack } from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/react";
import { useQuery } from "@apollo/client";
import TodoItem from "./TodoItem";
import TotalCount from "./TotalCount";
import { ALL_TODO, UPDATE_TODO, DELETE_TODO } from "../apollo/todos";
import { useMutation } from "@apollo/client";

const TodoList = () => {
  const { loading, error, data } = useQuery(ALL_TODO);
  const [toggleTodo, { error: updateError }] = useMutation(UPDATE_TODO);

  const [deleteTodo, { error: DeleteError }] = useMutation(DELETE_TODO, {
    refetchQueries: [{ query: ALL_TODO }],
  });

  if (loading) {
    return <Spinner />;
  }

  if (error || updateError || DeleteError) {
    return <h2>Error...</h2>;
  }

  return (
    <>
      <VStack spacing={2} mt={4}>
        {data.todos.map((todo) => (
          <TodoItem
            onToggle={toggleTodo}
            onDelete={deleteTodo}
            key={todo.id}
            {...todo}
          />
        ))}
      </VStack>
      <TotalCount />
    </>
  );
};

export default TodoList;
