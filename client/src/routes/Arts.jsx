import { useLoaderData } from "react-router-dom";
import { getArts } from "../js/arts";

export const loader = async () => {
    console.log("Root loader");
    const result = await getArts();
    return result;
};


export default function Arts() {

    const arts = useLoaderData();
    return( 
    <div>
        <h1>This is the gallery</h1>
        {arts?.map((artworks) => (
            <p>{artworks.title}</p>
        ))}

    </div>
    )
};