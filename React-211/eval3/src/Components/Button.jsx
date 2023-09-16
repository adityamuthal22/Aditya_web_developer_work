import "./Button.css"
export const Button = ({ colorScheme, variant, size }) => {
  return (
  <button className={`btn ${colorScheme || "red" || "yellow" || "orange" || "green"} ${variant || "solid" || "ghost" || "outline"}  ${size || "md" || "sm" || "lg" || "xl"}`}>Button</button>

  )
};
