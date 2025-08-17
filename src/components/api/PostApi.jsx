import axios from "axios"

const api=axios.create({
    baseURL:"https://restcountries.com/v3.1",
});

// http request

export const GetApiData=()=>{
    return api.get("/all?fields=name,population,region,capital,flags");
}

// GetData Of indivisual Country

export const GetIndivisualData=(name)=>{
    return api.get(`/name/${name}?fullText=true&&fields=name,population,region,subregion,capital,tld,currencies,languages,borders,flags`);
}