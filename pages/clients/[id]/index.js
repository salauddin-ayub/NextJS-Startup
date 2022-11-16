import { useRouter } from "next/router";
function ClientIndexPage() {
  const router = useRouter();
  console.log("Dinamic Folder ID", router.query);
  return (
    <div>
      <h1> This is Client INdex Page-------!!!</h1>
    </div>
  );
}
export default ClientIndexPage;
