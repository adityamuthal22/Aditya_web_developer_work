import styles from "./RestuarantCard.module.css";

export const DetailsComponent = ({
  title,
  minPrice,
  priceForTwo,
  time,
  cuisine,
  cash = false,
  upi = false,
  card = false
}) => {
  return (
    <div className={styles.detailsContainer}>
      <h3>{title}</h3>
      <div>{cuisine.join(", ")}</div>
      <div>Const rs.{priceForTwo} for two </div>
      <div>
        Min rs.{minPrice} . Up to {time} min
      </div>
      <div>
        Accepts {cash && "Cash"} {upi && "UPI"} {card && "Card"} payments
      </div>
    </div>
  );
};
