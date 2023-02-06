import classes from "./CountedSaved.module.css";

export const CountedSaved = (props) => {
  return (
    <div className={classes.card} id={props.key}>
      <h1>Counted</h1>
      <span>{props.count}</span>
      <span>{props.date}</span>
    </div>
  );
};
