import { deleteContact } from "../js/arts";

export async function action({ params }) {
  await deleteContact(params.contactId);
  return redirect("/");
}