import { CountedSaved } from "./CountedSave";
import { Counterhook } from "./Counterhook";
import classes from "./Layoutcounter.module.css";

export const Counter = () => {
  const { count, CounterToggler, countTask, SaveCount, messages } =
    Counterhook();
  return (
    <div className={classes.wrapper}>
      <div>
        <img src="Untitled design.png" alt="wala" />
      </div>
      <span className={classes.counter}> {count}</span>
      {messages ? messages : ""}
      <div className={classes.btncontainer}>
        <button onClick={() => CounterToggler("increase")}>
          Increase Count
        </button>
        <button onClick={() => CounterToggler("decrease")}>
          Decrease Count
        </button>
        <button onClick={() => CounterToggler("reset")}>Reset Count</button>
        <button onClick={SaveCount}>Save</button>
      </div>
      <div className={classes.wrappers}>
        {countTask.map((saved, i) => {
          return (
            <CountedSaved
              key={i.key}
              id={saved.id}
              count={saved.taskname}
              date={saved.date}
            />
          );
        })}
      </div>
    </div>
  );
};
