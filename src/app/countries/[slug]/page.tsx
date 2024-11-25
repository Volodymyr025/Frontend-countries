import ChartPopulations from "@/app/components/ui/Chart";
import Image from "next/image";
import Link from "next/link";

interface BorderCountry {
  commonName: string;
  officialName: string;
  countryCode: string;
}

interface Country {
  officialName: string;
  flagImageUrl: string;
  borders: BorderCountry[];
  populationData: any;
}

const fetchCountryInfo = async (
  countryCode: string
): Promise<Country | null> => {
  try {
    const response = await fetch(
      `http://localhost:8080/countries/info?countryCode=${countryCode}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch country info");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching country info:", error);
    return null;
  }
};

const CountryPage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = await params;
  const country = await fetchCountryInfo(slug);

  if (!country) {
    return (
      <div className="flex items-center justify-center min-h-screen text-xl">
        Failed to load country information.
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white">
          {country.officialName}
        </h2>
        <Image
          src={country.flagImageUrl}
          alt={country.officialName}
          width={200}
          height={200}
          className="mx-auto"
        />
      </div>

      <div className="mb-6">
        <h3 className="text-2xl font-semibold text-white">Border countries:</h3>
        <ul className="flex flex-wrap gap-2 mt-2">
          {country.borders.map((border) => (
            <Link
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors cursor-pointer"
              key={border.commonName}
              href={`/countries/${border.countryCode.toLowerCase()}`}
            >
              {border.officialName}
            </Link>
          ))}
        </ul>
      </div>

      <ChartPopulations data={country.populationData} />
    </div>
  );
};

export default CountryPage;
