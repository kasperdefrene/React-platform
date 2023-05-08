import { Form, useLoaderData } from "react-router-dom";
import {getArts} from "../js/arts"

export const loader = async () => {
    const result = await getArts();
    return result;
}

export const action = () => ({})

export default function Root() {
    const artworks = useLoaderData();
    return (
      <div>
        <h1>Artwork collection</h1>
        {artworks?.map((artwork) => (
            <div>
                <h2>{artwork.title}</h2>
            </div> 
        )
        )}
      </div>
    );
  }