import { useRef } from "react";

export const Form = () => {
  const searchTerm = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
    searchTerm.current = event.target.value;
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text" placeholder="Title" />
      </form>
    </>
  );
};
