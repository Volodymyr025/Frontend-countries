import React from "react";
import Card from "../shared/Card";

export interface Countries {
  countryCode: string;
  name: string;
}

const ListPage = async () => {
  let countries: Countries[] = [];
  try {
    const res = await fetch("http://localhost:8080/countries/available");
    countries = await res.json();
  } catch {
    console.log("error to fetch data");
  }
  return (
    <div>
      <Card countries={countries} />
    </div>
  );
};

export default ListPage;
