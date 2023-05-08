import { deleteArt } from "../js/arts";

export async function action({ params }) {
  await deleteArt(params.authorId);
  return redirect("/");
}