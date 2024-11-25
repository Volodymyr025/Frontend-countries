import Link from "next/link";
import { Countries } from "../ui/ListPage";

interface CardProps {
  countries: Countries[];
}

const Card = ({ countries }: CardProps) => {
  return (
    <div className="container mx-auto p-6">
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {countries.map(({ name, countryCode }) => (
          <li className="text-lg font-semibold text-blue-800">
            <Link
              key={name}
              href={`/countries/${countryCode.toLowerCase()}`}
              className="country-item bg-white rounded-lg shadow-md p-4 hover:bg-blue-100 transition duration-300 block"
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Card;
