const handleAdd = () => {
  return { type: "INCREMENT", payload: 1 };
};

const handleReduce = () => {
  return { type: "DECREMENT", payload: 1 };
};

export { handleAdd, handleReduce };
