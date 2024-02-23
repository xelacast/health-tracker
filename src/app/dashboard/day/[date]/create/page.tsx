import { DayForms } from "~/components/day";

export default function Page({ params }: { params: { date: string } }) {
  // create a day based on the date and the user id
  const { date } = params;
  return <DayForms date={date} />;
}
