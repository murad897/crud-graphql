import { useState } from "react";
import { Button, FormControl, Input } from "@chakra-ui/react";
import { useMutation } from "@apollo/client";
import { ALL_TODO, CREATE_TODO} from "../apollo/todos";
import { Spinner } from "@chakra-ui/react";

const AddTodo = () => {
  const [text, setText] = useState("");
  // const [AddTodo, { loading, error, data }] = useMutation(CREATE_TODO, {
  //   refetchQueries: [{ query: ALL_TODO }],
  // });
  const [AddTodo, { error, loading, data }] = useMutation(CREATE_TODO, {
    update(cache, { data: { newTodo } }) {
      const { todos } = cache.readQuery({ query: ALL_TODO });
      cache.writeQuery({
        query:ALL_TODO,
        data: {
          todos: [newTodo, ...todos]
        }
      })
    },
  });

  const handleAddTodo = () => {
    if (text.trim().length) {
      AddTodo({
        variables: {
          title: text,
          user_id: 312,
          completed: false,
        },
      });
      setText("");
    }
  };

  const handleKey = (event) => {
    if (event.key === "Enter") handleAddTodo();
  };

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <h2>Error...</h2>;
  }

  return (
    <FormControl display={"flex"} mt={6}>
      <Input
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyPress={handleKey}
      />
      <Button onClick={handleAddTodo}>Add todo</Button>
    </FormControl>
  );
};

export default AddTodo;
