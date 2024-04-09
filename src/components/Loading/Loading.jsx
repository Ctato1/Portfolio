
import PuffLoader from "react-spinners/PuffLoader";

const override = {
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

      <PuffLoader
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
