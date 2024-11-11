import Card from "./card/Card";
import BookAnAppointment from "./card/BookAnAppointment";

export default function WellowAtWork() {
  return (
    <>
      <div className=" w-9/12 m-auto my-40">
        <h1 className="text-[38px] font-ProximaNova-Bold text-center">
          Wellows at work
        </h1>

        <div className="flex justify-around mt-5">
          <Card />
          <Card />
          <Card />
        </div>
        <div className="w-full mt-14">
          <BookAnAppointment />
        </div>
      </div>
    </>
  );
}
