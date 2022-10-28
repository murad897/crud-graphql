import {
  Checkbox,
  Text,
  CloseButton,
  HStack,
} from "@chakra-ui/react";


const TodoItem = ({ id, title, completed, onToggle, onDelete }) => {
  return (
    <HStack spacing={3}>
      <Checkbox
        onChange={() =>
          onToggle({
            variables: {
              id,
              completed: !completed,
            },
          })
        }
        isChecked={completed}
      />
      <Text>{title}</Text>
      <CloseButton
        onClick={() =>
          onDelete({
            variables: {
              id: id,
            },
          })
        }
      />
    </HStack>
  );
};

export default TodoItem;
