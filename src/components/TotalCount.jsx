import { Flex } from "@chakra-ui/react";
import { ALL_TODO } from "../apollo/todos";
import { useQuery } from "@apollo/client";

const TotalCount = () => {
  const { data } = useQuery(ALL_TODO);
  return (
    <Flex justifyContent={"center"} borderTop={"2px"} mt="5">
      {data ? <b>Total todos: {data.todos.length}</b> : <b>No todos</b>}
    </Flex>
  );
};

export default TotalCount;
