import { useState } from "react";
import TodoCard from "./TodoCard";
import Footer from "./Footer";

export default function Container() {
  const [todoCard, setTodoCard] = useState(false);

  return (
    <>
      {todoCard && <TodoCard />}
      <Footer />
    </>
  );
}
