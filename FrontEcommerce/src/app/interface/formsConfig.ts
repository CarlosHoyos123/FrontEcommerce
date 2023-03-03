import { Country } from "./country";
import { IdType } from "./idType";
import { PhoneType } from "./phoneType";

export interface FormConfig{
    documents: IdType[],
    countries: Country[],
    phones: PhoneType[]
}