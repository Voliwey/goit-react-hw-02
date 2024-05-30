import css from "./Options.module.css";

export default function Options({ updateFeedback, totalFeedback, feedbackReset }) {

  return (
    <div className={css.buttonsBlock}>
      <button className={`${css.button} ${css.buttonColor}`
      }
        onClick={() => updateFeedback("good")}>
        Good
      </button>
      <button className={`${css.button} ${css.buttonColors}`
      }
        onClick={() => updateFeedback("neutral")}>
        Neutral
      </button>
      <button className={`${css.button} ${css.buttonColorz}`
      }
        onClick={() => updateFeedback("bad")}>
        Bad
      </button>
      {totalFeedback > 0 && (
        <button className={`${css.button} ${css.buttonColorsz}`
        } onClick={feedbackReset}>
          Reset
        </button>
      )}

    </div>
  );
}
