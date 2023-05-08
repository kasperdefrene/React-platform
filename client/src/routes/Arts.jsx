import { Form, useLoaderData } from "react-router-dom";
import { getArts, createArt } from "../js/arts";

export const loader = async () => {
    console.log("Root loader");
    const result = await getArts();
    return result;
};

export default function Arts() {

    const artworks = useLoaderData();
    return( 
    <div>
        <h1>This is the gallery</h1>
        {artworks?.map((artwork) => (
            <div>
                <h2>{artwork.title}</h2>
            </div>
        ))}

    </div>
    )
}