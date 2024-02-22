import MapComponent from "../components/MapComponent";

export default function Map() {
  return (
    <>
      <div className="h-[80vh]">
        <MapComponent zoom={10} />
      </div>
    </>
  );
}
