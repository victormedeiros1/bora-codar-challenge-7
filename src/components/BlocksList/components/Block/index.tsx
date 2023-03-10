import { MapPinIcon } from "@heroicons/react/24/outline";

interface Props {
  name: string;
  cover: string;
  description: string;
  location: string;
}

export default function Block({ name, description, cover, location }: Props) {
  return (
    <article className="bg-white border border-[#EAEAEA] rounded-10 mobile:max-w-348">
      <div>
        <img
          className="rounded-t-[10px] mr-0"
          src={cover}
          alt={`Bloco ${name}`}
        />
      </div>
      <div className="flex flex-col gap-4 p-4 mobile:gap-1">
        <h3 className="text-md font-bold mobile:text-sm">{name}</h3>
        <h4 className="text-sm mobile:text-xs">{description}</h4>
        <div className="flex">
          <MapPinIcon className="h-6 w-6 text-red mr-2 " />
          <h5 className="text-sm mobile:text-xs">{location}</h5>
        </div>
      </div>
    </article>
  );
}
