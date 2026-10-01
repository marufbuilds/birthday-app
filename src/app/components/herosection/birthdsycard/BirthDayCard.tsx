
import Image from "next/image";

export type Birthday = {
  id: number;
  image: string;
  message: string;
  description: string;
};

const BirthdayCard = ({ birthday }: { birthday: Birthday }) => {
  return (
    <div className="mx-auto w-full max-w-sm overflow-hidden rounded-3xl bg-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">

      {/* Image */}
      <div className="relative h-[520px] w-full sm:h-[540px] md:h-[520px]">
        <Image
          src={birthday.image}
          alt={birthday.message}
          fill
          sizes="(max-width: 640px) 100vw, 384px"
          className="object-cover object-center"
        />

        {/* Soft bottom overlay */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6">
        <h2 className="mb-2 text-xl font-bold text-gray-900 sm:text-2xl">
          {/* {birthday.message} */}
        </h2>

        <p className="text-sm leading-6 text-gray-600 sm:text-base sm:leading-7">
          {birthday.description}
        </p>
      </div>

    </div>
  );
};

export default BirthdayCard;

