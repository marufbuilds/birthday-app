 import birthdays from "@/app/data.json";

const BirthdayDetailsPage = async ({
  params,
}: {
  params: Promise<{ rubatId: string }>;
}) => {
  const { rubatId } = await params;

  const birthday = birthdays.find(
    (birthday) => birthday.id === Number(rubatId)
  );

  if (!birthday) {
    return <p>Data is not found</p>;
  }

  return (
    <div>
      {/* <h1>{birthday.message}</h1> */}
      <p>{birthday.description}</p>
    </div>
  );
};

export default BirthdayDetailsPage;