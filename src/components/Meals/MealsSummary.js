import classes from './MealsSummary.module.css';

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Monkfish attempts to cook your food, personally!</h2>
      <p>
        Choose your meal from our gross selection of available meals and enjoy a
        mediocre lunch or dinner at top, top prices.
      </p>
      <p>
        All our meals are cooked with low-quality ingredients, over many hours
        and by a novice chef (who is just trying his best but really shouldn't
        be anywhere near a kitchen)!
      </p>
      <p>
        DISCLAIMER: MONK is a web developer not a chef. Any food consumed that
        has been prepared by Monkfish is consumed at your own risk!
      </p>
    </section>
  );
};

export default MealsSummary;
