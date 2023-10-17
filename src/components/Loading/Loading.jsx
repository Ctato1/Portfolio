import { CSSProperties } from "react";
import CircleLoader from "react-spinners/CircleLoader";

const override: CSSProperties = {
  display: "block",
  margin: "auto",
  borderColor: "red",
  borderRadius:'50%',
};

function Loading() {
  let loading = true
  let color= "#0dcaf0"

  return (
    <div className="sweet-loading">

      <CircleLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={250}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default Loading;
